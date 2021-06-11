# custom-action-template

This template can be used to quickly start a new custom js action repository.  Click the `Use this template` button at the top to get started.

## TODOs
- Readme
  - [ ] Update the Inputs section with the correct action inputs
  - [ ] Update the Example section with the correct usage   
- package.json
  - [ ] Update the `name` with the new action value
- main.js
  - [ ] Implement your custom action
- action.yml
  - [ ] Fill in the correct name, description, inputs and outputs
- check-for-unstaged-changes.sh
  - [ ] If you encounter a permission denied error when the build.yml workflow runs, execute the following command: `git update-index --chmod=+x ./check-for-unstaged-changes.sh`
- .prettierrc.json
  - [ ] Update any preferences you might have
- CODEOWNERS
  - [ ] Update as appropriate
- Repository Settings
  - [ ] On the *Options* tab check the box to *Automatically delete head branches*
  - [ ] On the *Options* tab update the repository's visibility
  - [ ] On the *Branches* tab add a branch protection rule
    - [ ] Check *Require pull request reviews before merging*
    - [ ] Check *Dismiss stale pull request approvals when new commits are pushed*
    - [ ] Check *Require review from Code Owners*
    - [ ] Check *Include Administrators*
  - [ ] On the *Manage Access* tab add the appropriate groups

## Inputs
| Parameter | Is Required | Description           |
| ----------|-------------|-----------------------|
| `input-1` | true        | Description goes here |
| `input-2` | false       | Description goes here |


## Example

```yml
# TODO: Fill in the correct usage
jobs:
  job1:
    runs-on: [self-hosted, ubuntu-20.04]
    steps:
      step1: 
        - uses: actions/checkout@v2

        - name: Add Step Here
          uses: im-open/this-repo@v1
          with:
            input-1: 'abc'
            input-2: '123
```

## Recompiling

If changes are made to the action's code in this repository, or its dependencies, you will need to re-compile the
action.

```sh
# Installs dependencies and bundles the code
npm run build

# Bundle the code (if dependencies are already installed)
npm run bundle
```

These commands utilize [esbuild](https://esbuild.github.io/getting-started/#bundling-for-node) to bundle the action and
its dependencies into a single file located in the `dist` folder.

## Code of Conduct

This project has adopted the [im-open's Code of Conduct](https://github.com/im-open/.github/blob/master/CODE_OF_CONDUCT.md).

## License

Copyright &copy; 2021, Extend Health, LLC. Code released under the [MIT license](LICENSE).
