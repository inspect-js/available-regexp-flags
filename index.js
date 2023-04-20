'use strict';

var GetIntrinsic = require('get-intrinsic');

var safeConcat = require('safe-array-concat');

var $RegExpPrototype = GetIntrinsic('%RegExp.prototype%');

module.exports = safeConcat(
	'hasIndices' in $RegExpPrototype ? 'd' : [],
	'g',
	'i',
	'm',
	'dotAll' in $RegExpPrototype ? 's' : [],
	'unicode' in $RegExpPrototype ? 'u' : [],
	'unicodeSets' in $RegExpPrototype ? 'v' : [],
	'sticky' in $RegExpPrototype ? 'y' : []
);
