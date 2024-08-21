**Type and Speed of RAM**

`sudo dmidecode --type memory`

```
(...)
Handle 0x002F, DMI type 17, 28 bytes
Memory Device
	Array Handle: 0x002D
	Error Information Handle: Not Provided
	Total Width: 72 bits
	Data Width: 64 bits
	Size: 8192 MB
	Form Factor: DIMM
	Set: None
	Locator: ChannelA-DIMM1
	Bank Locator: BANK 1
	Type: DDR3
	Type Detail: Synchronous
	Speed: 1333 MT/s
	Manufacturer: Kingston
	Serial Number: 532C6947
	Asset Tag: 9876543860
	Part Number: 9978525-138.A00LF 
	Rank: 2
(...)
```

**Test RAM for errors**

Package: `memtester`

Check 200 MBs of RAM space in two iterations
`sudo memtester 200M 2`
