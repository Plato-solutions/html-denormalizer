# html-denormalizer

Transform HTML that has been normalized to JSON back to HTML.

## Install
---
Using NPM:
``

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