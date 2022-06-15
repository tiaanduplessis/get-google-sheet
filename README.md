# get-google-sheet

[![package version](https://img.shields.io/npm/v/get-google-sheet.svg?style=flat-square)](https://npmjs.org/package/get-google-sheet)
[![package downloads](https://img.shields.io/npm/dm/get-google-sheet.svg?style=flat-square)](https://npmjs.org/package/get-google-sheet)
[![standard-readme compliant](https://img.shields.io/badge/readme%20style-standard-brightgreen.svg?style=flat-square)](https://github.com/RichardLitt/standard-readme)
[![package license](https://img.shields.io/npm/l/get-google-sheet.svg?style=flat-square)](https://npmjs.org/package/get-google-sheet)
[![make a pull request](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](http://makeapullrequest.com)

When you just need to get a public google sheet as JSON

## 📖 Table of Contents

- [get-google-sheet](#get-google-sheet)
  - [📖 Table of Contents](#-table-of-contents)
  - [👀 Background](#-background)
    - [Features](#features)
  - [⚙️ Install](#️-install)
  - [📖 Usage](#-usage)
    - [Kitchen sink](#kitchen-sink)
    - [Overridable value parsing](#overridable-value-parsing)
  - [📚 API](#-api)
  - [💬 Contributing](#-contributing)
  - [🪪 License](#-license)

## ⚙️ Install

Install the package locally within you project folder with your package manager:

With `npm`:

```sh
npm install get-google-sheet
```

With `yarn`:

```sh
yarn add get-google-sheet
```

With `pnpm`:

```sh
pnpm add get-google-sheet
```

## 📖 Usage

1. Create a Google sheet.
2. Share the sheet with public viewer access.
3. Copy the sheet ID from the shared URL and the Sheet name e.g:
   `Scl-AmSE11UHGqOAGs6TmgDpWPm-7Zob9mIb5vq_kb0` and `Sheet1`.
4. Perform the request:

```ts
import { getGoogleSheet } from "get-google-sheet";
export const SHEET_ID = "SHEET_ID";
export const SHEET_NAME = "SHEET_NAME";
const result = await getGoogleSheet(SHEET_ID, SHEET_NAME);
console.log(result);
```

## 📚 API

For all configuration options, please see the
[API docs](https://paka.dev/npm/get-google-sheet).

## 💬 Contributing

Got an idea for a new feature? Found a bug? Contributions are welcome! Please
[open up an issue](https://github.com/tiaanduplessis/get-google-sheet/issues) or
[make a pull request](https://makeapullrequest.com/).

## 🪪 License

[MIT © Tiaan du Plessis](./LICENSE)
