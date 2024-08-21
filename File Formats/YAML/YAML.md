 [Yet Another Misplaced Language ?](https://grafana.com/blog/2020/01/09/introducing-tanka-our-way-of-deploying-to-kubernetes/) 

Actually – YAML is not a bad thing at all. It is one of the best languages for expressing software configuration – such as database connection details, TLS parameters, and the like.

But complex tools like Kubernetes require powerful solutions. YAML however is not one of them, because it is designed for representing data, not generating it:

**Repetition:** If information is required in multiple places (dev and prod environments, etc.), all YAML has to offer is copying and pasting those lines. This can lead to nasty drift between your meant-to-be equal resources.

**Boilerplate:** As you need to express entire API objects by hand, you soon find yourself confronted by a wall of YAML, making it impossible to quickly spot what’s actually important.

**Static nature:** YAML is not a dynamic language; it does not know about abstraction, variables, loops, conditionals, and all of the fancy things we know and love from programming languages that keep our code clean and maintainable.
