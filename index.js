'use strict';

var safeConcat = require('safe-array-concat');

var re = /a/;

module.exports = safeConcat(
	'hasIndices' in re ? 'd' : [],
	'g',
	'i',
	'm',
	'dotAll' in re ? 's' : [],
	'unicode' in re ? 'u' : [],
	'unicodeSets' in re ? 'v' : [],
	'sticky' in re ? 'y' : []
);
