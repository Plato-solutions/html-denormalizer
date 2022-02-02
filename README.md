# html-denormalizer

Transforms JSON to HTML.

## Install
---
Using NPM:
`npm install --save https://github.com/Plato-solutions/html-denormalizer`

## Basic usage
---
### Import
#### Node.js/CommonJS:
`const denormalize = require('html-denormalizer').denormalize`

#### ES6
`import { denormalize } from "html-denormalizer";
`

### Usage
```javascript
jsonString = "{}" // some json string here
htmlString = denormalize(jsonString) // returns an html string

```
