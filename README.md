# Is Actor Authorized

A simple action to check if an actor is authorized to trigger the workflow.

## Inputs
| Parameter           | Is Required | Description                                                    |
| --------------------|-------------|----------------------------------------------------------------|
| `actor `            | true        | The github username of the actor who triggered the workflow    |
| `authorized-actors` | true        | An array of strings containing the authorized github usernames |


## Example

```yml
jobs:
  deploy-to-prod:
    runs-on: [self-hosted, ubuntu-20.04]
    steps:
        - uses: actions/checkout@v2

        - name: Check if actor is authorized to deploy to prod
          uses: im-open/is-actor-authorized@v1
          with:
            actor: ${{ github.actor }}
            authorized-actors: |
              [
                "bob-the-builder",
                "potato",
                "QA-boy"
              ]

        - name: Deploy the code
          run: |
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

Copyright &copy; 2021, Extend Health, LLC. Code released under the [MIT license].