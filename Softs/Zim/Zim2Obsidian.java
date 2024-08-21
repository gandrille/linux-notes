package com.gandrille.markdown;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.nio.file.StandardCopyOption;
import java.util.ArrayList;
import java.util.List;
import java.util.function.Function;
import java.util.stream.Collectors;

public class Runner {

	public static void main(String[] args) throws IOException {
		
		Path src = Paths.get("/home/etienne/documents/Decathlon-notes/");
		Path dst = Paths.get("/srv/perso/notes/");

		if (!isZimNotebook(src)) {
			System.err.println(src + " is not a valid zim notebook");
			return;
		}
		
		processFolder(src, dst);
	}

	private static void processFolder(Path zimFolder, Path dstFolder) throws IOException {
		for (Path p : getPages(zimFolder)) {
			 processPage(p, dstFolder);
		}		
	}

	private static void processPage(Path zimPage, Path dstRoot) throws IOException {
		List<String> srcLines = Files.readAllLines(zimPage);
		
		String title = getTitle(srcLines);
		String content = getContent(srcLines);

		Path dstFolder = dstRoot.resolve(title);
		Path dstFile = dstFolder.resolve(title + ".md");
		dstFolder.toFile().mkdirs();
		Files.writeString(dstFile, content);
		
		String zimFileName = zimPage.getFileName().toString(); 
		String zimPageFolderName = zimFileName.substring(0, zimFileName.length() - 4);
		Path zimPageFolder = zimPage.getParent().resolve(zimPageFolderName);
		
		if (zimPageFolder.toFile().isDirectory()) {
			processAttachments(zimPageFolder, dstFolder);
			processFolder(zimPageFolder, dstFolder);
		}
		
		System.out.println("Page " + zimPage + " processed");
	}

	private static void processAttachments(Path zimFolder, Path dstFolder) throws IOException {
		List<Path> files = Files.list(zimFolder)
				.filter(p -> ! p.getFileName().toString().endsWith(".txt"))
				.filter(p -> ! p.toFile().isDirectory())
				.toList();
		
		for (Path file : files) {
			Path name = file.getFileName();
			Path dst = dstFolder.resolve(name);
			Files.copy(file, dst, StandardCopyOption.REPLACE_EXISTING);
			System.out.println("File " + file + " copied");
		}		
	}

	private static String getContent(List<String> lines) {
		lines = removeHeader(lines);
		lines = processLines(lines, Runner::processHeadings);
		lines = processLines(lines, Runner::processBlockCode);
		lines = processUntil(lines, Runner::processLink);
		lines = processUntil(lines, Runner::processImage);
		lines = processUntil(lines, Runner::processInlineCode);
		lines = processLines(lines, Runner::processHighlight);
		
		lines = removeExtraLines(lines);
		
		return lines.stream().collect(Collectors.joining("\n"));
	}
	
	private static List<String> removeHeader(List<String> lines) {
		if (! lines.isEmpty() && lines.get(0).startsWith("Content-Type:"))
			lines = lines.subList(1, lines.size());
		if (! lines.isEmpty() && lines.get(0).startsWith("Wiki-Format:"))
			lines = lines.subList(1, lines.size());
		if (! lines.isEmpty() && lines.get(0).startsWith("Creation-Date:"))
			lines = lines.subList(1, lines.size());
		if (! lines.isEmpty() && lines.get(0).isBlank())
			lines = lines.subList(1, lines.size());
		if (! lines.isEmpty() && lines.get(0).startsWith("====== "))
			lines = lines.subList(1, lines.size());
		
		while (! lines.isEmpty() && lines.get(0).isBlank())
			lines = lines.subList(1, lines.size());
		
		return lines;
	}

	
	private static List<String> processLines(List<String> lines, Function<String, String> processor) {
		return lines.stream().map(processor::apply).toList();		
	}
	
	private static List<String> processUntil(List<String> lines, Function<String, String> processor) {
		return lines.stream().map(l -> {
			String cur = l;
			while (true) {
				String next = processor.apply(cur);
				if (next.equals(cur))
					return cur;
				cur = next;
			}
		}).toList();		
	}
	
	private static String processHeadings(String line) {
		while (line.endsWith("="))
			line = line.substring(0, line.length() - 1);
		
		for (int i=1; i<=6; i++) {
			String start = "=".repeat(i) + " ";
			if (line.startsWith(start)) {
				return "#".repeat(6 - i) + " " + line.substring(i + 1);
			}
		}

		return line;
	}
		
	private static String processLink(String line) {
		int idxStart = line.indexOf("[[");
		int idxEnd = line.indexOf("]]");
		
		if (idxStart == -1 || idxEnd == -1 || idxStart > idxEnd)
			return line;

		String start = line.substring(0, idxStart);
		String middle = line.substring(idxStart + 2, idxEnd);
		String end = line.substring(idxEnd + 2);	
		
		String alt="";
		String link = middle;
		if (middle.contains("|")) {
			int idx = middle.indexOf("|");
			link = middle.substring(0, idx);
			alt = middle.substring(idx + 1);
		}

		if (link.startsWith("http")) {
			if (alt.isBlank()) {
				return start.stripTrailing() + " " + link + " " + end.stripLeading(); 
			} else {
				return start.stripTrailing() + " [" + alt + "](" + link + ") " + end.stripLeading();
			}
		}

		if (link.startsWith("./"))
			link = link.substring(2);
		
		if (alt.isBlank()) {
			return start.stripTrailing() + " [[" + link + "]] " + end.stripLeading(); 
		} else {
			return start.stripTrailing() + " [[" + link + "|" + alt + "]] " + end.stripLeading();
		}
	}
	
	private static String processImage(String line) {
		int idxStart = line.indexOf("{{");
		int idxEnd = line.indexOf("}}");
		
		if (idxStart == -1 || idxEnd == -1 || idxStart > idxEnd)
			return line;
		
		String start = line.substring(0, idxStart);
		String middle = line.substring(idxStart + 2, idxEnd);
		if (middle.startsWith("./"))
			middle = middle.substring(2);
		String end = line.substring(idxEnd + 2);		
		return start + "![[" + middle + "]]" + end;
	}

	private static String processInlineCode(String line) {
		int idxStart = line.indexOf("''");
		if (idxStart == -1)
			return line;

		int idxEnd = line.indexOf("''", idxStart + 2);
		if (idxEnd == -1 || idxStart > idxEnd)
			return line;
		
		String start = line.substring(0, idxStart);
		String middle = line.substring(idxStart + 2, idxEnd);
		String end = line.substring(idxEnd + 2);		
		
		
		return start + "`" + middle + "`" + end;
	}
	
	private static String processBlockCode(String line) {
		if (line.strip().equals("'''"))
			return "```";
		return line;
	}

	private static String processHighlight(String line) {
		return line.replaceAll("__", "==");
	}
	
	private static List<String> removeExtraLines(List<String> lines) {
		List<String> result = new ArrayList<>();
		
		boolean previousEmpty = false;
		for (String line : lines) {
			if (line.isBlank()) {
				previousEmpty = true;
			} else {
				if (! line.strip().startsWith("#")) {
					if (previousEmpty)
						result.add("");
				}		
				previousEmpty = false;
				result.add(line);					
			}
		}

		result.add("");
		return result;
	}
	
	private static String getTitle(List<String> lines) {
		for (String line : lines) {
			if (line.startsWith("====== ") && line .endsWith(" ======")) {
				line = line.substring(7, line.length()- 7).strip();
				return line;				
			}
		}		
		return null;
	}

	private static List<Path> getPages(Path path) throws IOException {
		return Files.list(path).filter(p -> p.getFileName().toString().endsWith(".txt")).toList();
	}

	private static boolean isZimNotebook(Path root) {
		return Files.exists(root.resolve("notebook.zim"));		
	}
}
