> Shareable `commitlint` config enforcing [Conventional Commits](https://www.conventionalcommits.org/) thru extension of [@commitlint/config-conventional](https://github.com/conventional-changelog/commitlint/tree/master/@commitlint/config-conventional). Use with [@commitlint/cli](https://www.npmjs.com/package/@commitlint/cli).

## Installation

```sh
yarn add -D @commitlint/cli @belialuin/commitlint-config
```

## Getting started

Best used with [husky](https://typicode.github.io/husky) as a `commit-msg` hook.

To lint commits before they are created you can use Husky's `commit-msg` hook:

1. Install husky

```sh
yarn add -D husky
```

2. Enable Git hooks

```sh
yarn husky install
```

### Add hook

```sh
cat <<EEE > .husky/commit-msg
#!/bin/sh
. "\$(dirname "\$0")/_/husky.sh"

yarn commitlint --edit "\${1}"
EEE
```

Make hook executable

```sh
chmod 755 .husky/commit-msg
```

To automatically have Git hooks enabled after install, edit `package.json`

```json
// package.json
{
  "scripts": {
    "prepare": "husky install"
  }
}
```

## Usage

### With a dedicated commitlint config

Create a `commitlint.config.js` file on the root directory and extend with this package:

```js
module.exports = {
  extends: ["@belialuin"],
};
```

### With package.json

In the `package.json` of your project

```json
// package.json
{
  "commitlint": {
    "extends": ["@belialuin"]
  }
}
```
