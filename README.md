# foundry-html-denormalizer

Transforms JSON to HTML.

## Install

```bash
npm install --save https://github.com/Plato-solutions/html-denormalizer
```

### Node.js/CommonJS:

```javascript
const denormalize = require("html-denormalizer").denormalize;
```

### ES6

```javascript
import { denormalize } from "html-denormalizer";
```

## Usage

```javascript
jsonString = "{}"; // some json string here
htmlString = denormalize(jsonString); // returns an html string
```
