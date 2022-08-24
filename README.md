# commitlint-config-belialuin

> Shareable `commitlint` config enforcing
> [Conventional Commits](https://www.conventionalcommits.org/) thru extension of
> [@commitlint/config-conventional](https://github.com/conventional-changelog/commitlint/tree/master/@commitlint/config-conventional).
> Use with [@commitlint/cli](https://www.npmjs.com/package/@commitlint/cli).

## Installation

```sh
yarn add -D @commitlint/cli commitlint-config-belialuin
```

## Getting started

### Config in `package.json`:

In the `package.json` of your project

```json
{
  "commitlint": {
    "extends": ["belialuin"]
  }
}
```

### With a dedicated `commitlint` config

Create a `commitlint.config.js` file on the root directory and extend with this
package:

```js
module.exports = {
  extends: ['belialuin'],
};
```

## Usage

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
npx husky add .husky/commit-msg "yarn commitlint --edit"
```

To automatically have Git hooks enabled after install, edit `package.json`

```json
{
  "scripts": {
    "prepare": "husky install"
  }
}
```
