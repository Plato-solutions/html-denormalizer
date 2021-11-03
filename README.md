# html-denormalizer

Transform HTML that has been normalized to JSON back to HTML.

## Install

Using NPM:
```bash
npm i plato-analytics/html-denormalizer
```

## Import

### Node.js/CommonJS:
```javascript
const denormalize = require('html-denormalizer').denormalize

```

### ES6
```javascript
import { denormalize } from "html-denormalizer";
```

## Usage
```javascript
jsonString = "{}" // some json string here
htmlString = denormalize(jsonString) // returns an html string

```