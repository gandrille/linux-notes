# yq 
* [manual officiel](https://mikefarah.github.io/yq/) 

**Pretty print**
* `yq r foo.yml`
* `cat foo.yml | yq r -` 

**Basic usage**
* `yq r foo.yml "*.bar"` → with a root table
* `cat foo.yml | yq r - ".bar"` → with a root object

**Replace a value with another one**
* `yq --inplace ".tls.enabled = true" ytt/schema.yaml`
# Linter 
https://github.com/adrienverge/yamllint
https://yamllint.readthedocs.io/en/stable/quickstart.html
# Validator 
https://github.com/MathiasPius/yaml-validator
YAML schema exemples : https://github.com/MathiasPius/yaml-validator/blob/master/examples/all-types/schema.yaml
