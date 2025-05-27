# zapstack-utils
Utility functions for ZapStack integration

## Installation
\`\`\`bash
npm install zapstack-utils
\`\`\`

## Usage
\`\`\`js
const { generateZapReferenceId } = require('zapstack-utils');

const ref = generateZapReferenceId();
console.log(ref);