Check for local open ports (reachable from the internet): https://ifconfig.co/port/8080

 [An amazing list...](https://gist.github.com/willurd/5720255) 
# Python 
**Python v2**

* `python2 -m SimpleHTTPServer`
* `python2 -m SimpleHTTPServer 8000`

**Python v3**

* `python3 -m http.server`
# Node.js 
* `npm install -g http-server`
* then `http-server`
# Twistd3 
`twistd3 web --path .`  → on port 8080
`twistd3 web --port "tcp:port=9000" --path .`

`kill -9 $(cat twistd.pid)`
