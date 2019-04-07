# mini-semver

Fast semantic version parser ([node-semver](https://github.com/npm/node-semver) wrapper)

## Motive

For most node package dependencies, the simple caret ranges are most frequently used. Mini-semver enhances semver.satisfy method for the simple caret ranges (such as ^[num].[num].[num]).

## Install

```bash
npm install --save mini-semver
````

```bash
yarn add mini-semver
````

## Module

```js
import miniSemver from 'mini-semver';
```

```js
const miniSemver = require('mini-semver');
```

## Usage

Please refer to https://github.com/npm/node-semver#usage

## cli

```
$ mini-semver -h
```

## Test

This test cases are from [node-semver](https://github.com/npm/node-semver)

```bash
node ./test
```

```bash
npm run test
```

## Performance

* Test for semver.satisfies() with the simple caret ranges such as ^[num].[num].[num]

  ```
  $ ts-node ./performance/mini-semver.ts
  $ ts-node ./performance/semver.ts
  ```

  | mini-semver | semver |
  |:--------|:--------:|
  | 36ms ~ 39ms | 198ms ~ 217ms |

## License

```
The ISC License

Copyright (c) Isaac Z. Schlueter, Ajaxlab and Contributors

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted, provided that the above
copyright notice and this permission notice appear in all copies.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF OR
IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.

```
