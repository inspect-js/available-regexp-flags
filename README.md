# available-regexp-flags <sup>[![Version Badge][npm-version-svg]][package-url]</sup>

[![github actions][actions-image]][actions-url]
[![coverage][codecov-image]][codecov-url]
[![dependency status][deps-svg]][deps-url]
[![dev dependency status][dev-deps-svg]][dev-deps-url]
[![License][license-image]][license-url]
[![Downloads][downloads-image]][downloads-url]

[![npm badge][npm-badge-png]][package-url]

Which regular expression flags does the current environment support?

## Example

```js
var flags = require('available-regexp-flags');
var properties = require('available-regexp-flags/properties');

flags.forEach((flag) => {
	assert.doesNotThrow(() => {
		const r = new RegExp('foo', flag);

		var propertyName = properties[flag];
		assert.equal(r[propertyName], true);
	});
});
```

## Tests
Simply clone the repo, `npm install`, and run `npm test`

[package-url]: https://npmjs.org/package/available-regexp-flags
[npm-version-svg]: https://versionbadg.es/inspect-js/available-regexp-flags.svg
[deps-svg]: https://david-dm.org/inspect-js/available-regexp-flags.svg
[deps-url]: https://david-dm.org/inspect-js/available-regexp-flags
[dev-deps-svg]: https://david-dm.org/inspect-js/available-regexp-flags/dev-status.svg
[dev-deps-url]: https://david-dm.org/inspect-js/available-regexp-flags#info=devDependencies
[npm-badge-png]: https://nodei.co/npm/available-regexp-flags.png?downloads=true&stars=true
[license-image]: https://img.shields.io/npm/l/available-regexp-flags.svg
[license-url]: LICENSE
[downloads-image]: https://img.shields.io/npm/dm/available-regexp-flags.svg
[downloads-url]: https://npm-stat.com/charts.html?package=available-regexp-flags
[codecov-image]: https://codecov.io/gh/inspect-js/available-regexp-flags/branch/main/graphs/badge.svg
[codecov-url]: https://app.codecov.io/gh/inspect-js/available-regexp-flags/
[actions-image]: https://img.shields.io/endpoint?url=https://github-actions-badge-u3jn4tfpocch.runkit.sh/inspect-js/available-regexp-flags
[actions-url]: https://github.com/inspect-js/available-regexp-flags/actions
