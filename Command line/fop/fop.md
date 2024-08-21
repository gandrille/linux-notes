* FOP 2.1 → works with Java 8
* FOP 2.3 → does NOT work with Java 8

**Running Fop 2.3 with Java 8 produces the following exception**
`Exception in thread "main" java.lang.NoSuchMethodError: java.nio.CharBuffer.limit(I)Ljava/nio/CharBuffer;`

Reason: the `limit` method has been added in JDK 9… 
* No `limit` method in API : https://docs.oracle.com/javase/8/docs/api/java/nio/CharBuffer.html 
* `limit` method available! https://docs.oracle.com/javase/9/docs/api/java/nio/CharBuffer.html#limit-int-
