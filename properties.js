'use strict';

var hasProto = require('has-proto')();

/** @type {import('./properties')} */
module.exports = {
	__proto__: null,
	d: 'hasIndices',
	g: 'global',
	i: 'ignoreCase',
	m: 'multiline',
	s: 'dotAll',
	u: 'unicode',
	v: 'unicodeSets',
	y: 'sticky'
};

if (!hasProto) {
	delete module.exports.__proto__; // eslint-disable-line no-proto
}
