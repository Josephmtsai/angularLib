# angularLibDemo
[![Build Status](https://travis-ci.org/Josephmtsai/angularLibDemo.svg?branch=master)](https://travis-ci.org/Josephmtsai/angularLibDemo)
[![codecov](https://codecov.io/gh/Josephmtsai/angularLibDemo/branch/master/graph/badge.svg)](https://codecov.io/gh/Josephmtsai/angularLibDemo)
[![npm version](https://badge.fury.io/js/angularLibDemo.svg)](http://badge.fury.io/js/angularLibDemo)
[![devDependency Status](https://david-dm.org/Josephmtsai/angularLibDemo/dev-status.svg)](https://david-dm.org/Josephmtsai/angularLibDemo?type=dev)
[![GitHub issues](https://img.shields.io/github/issues/Josephmtsai/angularLibDemo.svg)](https://github.com/Josephmtsai/angularLibDemo/issues)
[![GitHub stars](https://img.shields.io/github/stars/Josephmtsai/angularLibDemo.svg)](https://github.com/Josephmtsai/angularLibDemo/stargazers)
[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://raw.githubusercontent.com/Josephmtsai/angularLibDemo/master/LICENSE)

## Demo
https://Josephmtsai.github.io/angularLibDemo/

## Table of contents

- [About](#about)
- [Installation](#installation)
- [Documentation](#documentation)
- [Development](#development)
- [License](#license)

## About



## Installation

Install through npm:
```
npm install --save angularLibDemo
```

Then include in your apps module:

```typescript
import { NgModule } from '@angular/core';
import { AngularLibDemoModule } from 'angularLibDemo';

@NgModule({
  imports: [
    AngularLibDemoModule.forRoot()
  ]
})
export class MyModule {}
```

Finally use in one of your apps components:
```typescript
import { Component } from '@angular/core';

@Component({
  template: '<hello-world></hello-world>'
})
export class MyComponent {}
```

You may also find it useful to view the [demo source](https://github.com/Josephmtsai/angularLibDemo/blob/master/demo/demo.component.ts).

## Documentation
All documentation is auto-generated from the source via [compodoc](https://compodoc.github.io/compodoc/) and can be viewed here:
https://Josephmtsai.github.io/angularLibDemo/docs/

## Development

### Prepare your environment
* Install [Node.js](http://nodejs.org/) and NPM
* Install local dev dependencies: `npm install` while current directory is this repo

### Development server
Run `npm start` to start a development server on port 8000 with auto reload + tests.

### Testing
Run `npm test` to run tests once or `npm run test:watch` to continually run tests.

### Release
* Bump the version in package.json (once the module hits 1.0 this will become automatic)
```bash
npm run release
```

## License

MIT
