# gas_template

## Description

A starter template for Google Apps Script by [google/clasp](https://github.com/google/clasp)

## Tech Stack

- [google/clasp](https://github.com/google/clasp)
- [webpack](https://webpack.js.org/)
- [TypeScript](http://www.typescriptlang.org/)
- [TSLint](https://palantir.github.io/tslint/)
- [Prettier](https://prettier.io/)

## Prerequisites

- [Node.js](https://nodejs.org/)
- [Yarn](https://yarnpkg.com/jp/)
- [google/clasp](https://github.com/google/clasp)

## Getting Started

### Clone the repository

```bash
git clone --depth 1 git@github.com:kobakazu0429/gas_template.git .
```

### Install dependencies

```bash
yarn install
```

### Configuration

#### Open `.clasp.json`, change scriptId

```json
{
  "scriptId": <your_script_id>,
  "rootDir": "dist"
}
```

### Commands

#### Build

```bash
yarn build
# "build": "yarn run lint && rimraf dist && webpack && cpx src/appsscript.json dist"
```

#### Deploy

```bash
yarn deploy
# "deploy": "yarn run build && clasp push"
```

#### Lint

```bash
yarn lint
# "lint": "tslint --fix  -c ./tslint.json src/**/*.ts"
```

## License

This software is released under the MIT License, see LICENSE.
