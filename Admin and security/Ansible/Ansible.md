==Here are a few notes for myself…==

https://blog.octo.com/introduction-aux-ansible-content-collections/

**Packages**
`sudo apt-install ansible ansible-lint aptitude`
* `ansible` core package
* `ansible-lint` linter
* `aptitude` which is the default backend with apt module

**sources**
* [ansible.com](https://www.ansible.com) 
* [Docs](https://docs.ansible.com/ansible/latest/index.html) 
* [Module index](https://docs.ansible.com/ansible/latest/modules/modules_by_category.html) 
* [GitHub](https://github.com/ansible/ansible) 

**Key facts**
* configuration management tool
* desired state → donc opérations idempotentes
* python (NOT Ruby)

**Alternatives**
* Puppet et Chef nécessitent un serveur central → pull des clients
* Puppet : custom language
* Chef : executable code
# Role scaffolding 
`ansible-galaxy init common`
`ansible-galaxy init apache`
# Single task execution 
`ansible all -i hosts -u myuser --become --ask-become-pass -m apt -a "name=vim state=present"` 
# Password generation 
```
- name: Generates a new password
  command: openssl rand -hex 7
  register: my_pass
```

```
- name: Output new password
  debug: msg="My pass is ![[my_pass.stdout]]"
```
# Conditionnal statements 
Tip : Use `ansible hostname -m setup` to get more variables
## When statement 
**Example**

```
- name : skips installation on Ubuntu if realease is before 18.04
  apt: pkg=foo state=latest
  when: (ansible_distribution != "Ubuntu") or (ansible_distribution_major_version >= "18")
```
## failed_when statement 
```
- name: Fail fast - Assert that distribution is a Debian flavor
  debug: msg="OS Family = ![[ansible_os_family]]. Distribution is ![[ ansible_distribution ]] ![[ ansible_distribution_version ]] (![[ ansible_distribution_release ]])"
  failed_when: ansible_os_family != "Debian"
```
# Ansible 2.7 deprecation with apt module 
 [Ansible 2.7 porting guide says: ](https://docs.ansible.com/ansible/latest/porting_guides/porting_guide_2.7.html#using-a-loop-on-a-package-module-via-squash-actions) "The use of `squash_actions` to invoke a package module, such as "yum" [or apt!], to only invoke the module once is deprecated, and will be removed in Ansible 2.11. Instead of relying on implicit squashing, tasks should instead supply the list directly to the name, pkg or package parameter of the module. This functionality has been supported in most modules since Ansible 2.3."

**Before Ansible 2.7**

```
- name : Install a list of packages
  apt: package=![[item]] state=latest
  with_items:
  - foo
  - foo-tools
```

**With Ansible 2.7 (in fact, since Ansible 2.3)**

```
- name: Install a list of packages
  apt:
    package: "![[ packages ]]"
    state: latest
  vars:
    packages:
    - foo
    - foo-tools
```

or

```
- name: Install a list of packages
  apt:
    package:
      - foo
      - foo-tools
    state: latest
```
