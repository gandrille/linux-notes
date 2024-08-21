**Very basic example**

```
<?xml version="1.0" encoding="UTF-8"?>
<kml xmlns="http://www.opengis.net/kml/2.2"  xmlns:gx="http://www.google.com/kml/ext/2.2" xmlns:kml="http://www.opengis.net/kml/2.2" xmlns:atom="http://www.w3.org/2005/Atom">
    <Document>
        <name>My POI</name>
        <Style id="pinpoint">
            <IconStyle>
                <scale>1</scale>
                <Icon>
                    <href>https://raw.githubusercontent.com/Leaflet/Leaflet/master/dist/images/marker-icon.png</href>
                </Icon>
            </IconStyle>
        </Style>

        <Placemark>
            <name>Foo</name>
            <description>foo infos</description>
            <styleUrl>#pinpoint</styleUrl>
            <Point>
                <coordinates>0.123,4.567</coordinates>
            </Point>
        </Placemark>

        <Placemark>
            <name>Bar</name>
            <description>bar infos</description>
            <styleUrl>#pinpoint</styleUrl>
            <Point>
                <coordinates>8.901,2.345</coordinates>
            </Point>
        </Placemark>
    </Document>
</kml>
```
