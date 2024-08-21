# jq 
* [manual officiel](https://stedolan.github.io/jq/manual/) 
* [tutoriel officiel](https://stedolan.github.io/jq/tutorial/) 
* https://shapeshed.com/jq-json/#how-to-pretty-print-json
* https://www.reddit.com/r/commandline/comments/3z9jff/jq_examples/
* https://www.baeldung.com/linux/jq-command-json

* basic usage : `cat json.js | jq`
* faire un grep : `cat json.js | jq '.' | grep "mykey"`

Soit le fichier `json.js`

```
{
  "uri": "/",
  "statusCode": 200,
  "opps": [
	{
	  "func": "ADD",
	   "statusCode": 200
	},{
	  "func": "REMOVE",
	   "statusCode": 200
	},{
	  "func": "UPDATE",
	   "statusCode": 400
	},{
	  "func": "DELETE",
	   "statusCode": 404
	}
  ]
}
```
## Extraction d'une clé simple 

* `jq -r '.statusCode' json.js`
* `200`
## Extraction de certaines clés uniquement 

* `jq "{id, title}" json.js`
## Comptage 

`jq -r '.opps[0]' json.js`

```
{
  "func": "ADD",
  "statusCode": 200
}
```
## Avec les tableaux 

* `jq -r '.opps | length' json.js`
* `4`
## Keys 

`jq -r '.opps' json.js`

```
[
  {
	"func": "ADD",
	"statusCode": 200
	  },
	  {
	"func": "REMOVE",
	"statusCode": 200
	  },
	  {
	"func": "UPDATE",
	"statusCode": 400
	  },
	  {
	"func": "DELETE",
	"statusCode": 404
	  }
	]
```

`jq -r '.opps[]' json.js`

```
{
  "func": "ADD",
  "statusCode": 200
}
{
  "func": "REMOVE",
  "statusCode": 200
}
{
  "func": "UPDATE",
  "statusCode": 400
}
{
  "func": "DELETE",
  "statusCode": 404
}
```

`jq -r '.opps[0]' json.js`

```
{
  "func": "ADD",
  "statusCode": 200
}
```

`jq -r '.opps[0] | keys' json.js`

```
[
  "func",
  "statusCode"
]
```

`jq -r '.opps[]|.func' json.js`

```
ADD
REMOVE
UPDATE
DELETE
```

* `jq -r '.opps[0] | keys | .[0]' json.js`
* `func`
## Advanced sélection 

`jq -r '.opps[] | select(.statusCode==404)' json.js`

```
{
  "func": "DELETE",
  "statusCode": 404
}
```
# Convertir un peu tout en json 
https://github.com/kellyjonbrazil/jc
# Misc 
* https://github.com/micha/jsawk
* `python -mjson.tool`
