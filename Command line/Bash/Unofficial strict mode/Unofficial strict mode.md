```
#!/bin/bash
set -euo pipefail
IFS=$'\n\t'
```

* `set -e` will exit the script if any command returns a non-zero status code. To prevent the option from triggering on commands returning a non-zero status code even when no error occurred, there are two solutions:
* using the `|| true` pattern: `command_returning_non_zero || true`
* temporary disabling the option:

```
set +e
command_returning_non_zero
set -e
```

* `set -u` will prevent using an undefined variable. In the case of undefined positional parameters (`$1`, `$2`,…), you can give them a default value with the parameter expansion construct: ` my_arg=${1:-"default"}`
* `set -o pipefail` will force pipelines to fail on the first non-zero status code.
* `IFS=$'\n\t`' makes iterations and splitting less surprising, in the case of loops mostly. The default for this variable is usually `IFS=$' \n\t`' but the space as a separator often gives confusing results.
