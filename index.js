'use strict';

var callBound = require('call-bind/callBound');
var GetIntrinsic = require('get-intrinsic');

var $concat = callBound('Array.prototype.concat');

var $RegExpPrototype = GetIntrinsic('%RegExp.prototype%');

module.exports = $concat(
	[],
	'hasIndices' in $RegExpPrototype ? 'd' : [],
	'g',
	'i',
	'm',
	'dotAll' in $RegExpPrototype ? 's' : [],
	'unicode' in $RegExpPrototype ? 'u' : [],
	'unicodeSets' in $RegExpPrototype ? 'v' : [],
	'sticky' in $RegExpPrototype ? 'y' : []
);
