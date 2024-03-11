'use strict';

var test = require('tape');
var isArray = require('isarray');
var forEach = require('for-each');

var flags = require('../');
var properties = require('../properties');

/** @type {(flag: import('../')[number]) => RegExp} */
function makeRegex(flag) { // eslint-disable-line func-style
	return Function('return /a/' + flag)(); // eslint-disable-line no-new-func
}

test('flags', function (t) {
	t.ok(isArray(flags), 'flags is an array');

	forEach(flags, function (flag) {
		t.test('flag: ' + flag, function (st) {
			st.equal(typeof flag, 'string', 'flag is a string');
			st.equal(flag.length, 1, 'flag has a length of 1');
			st.doesNotThrow(
				function () {
					var r = new RegExp('a', flag);
					st.equal(String(r), '/a/' + flag);
				},
				'RegExp constructor supports the flag'
			);

			st.doesNotThrow(
				function () { makeRegex(flag); },
				'regex syntax supports ' + flag
			);

			st.end();
		});
	});

	t.end();
});

test('properties', function (t) {
	forEach(flags, function (flag) {
		var property = properties[flag];
		t.test('property: ' + property, function (st) {
			var r = new RegExp('a', flag);

			st.ok(property in r, property + ' is present in a regex with flag ' + flag);
			// @ts-expect-error TS doesn't know about all the accessors yet
			st.ok(r[property], property + ' is true in a regex with flag ' + flag);

			forEach(
				// @ts-expect-error FIXME: no idea why TS can't handle this one
				properties,
				/** @type {<T extends Exclude<keyof properties, '__proto__'>>(p: typeof property, f: T) => void} */
				function (p, f) {
					if (p !== property) {
						// @ts-expect-error TS doesn't know about all the accessors yet
						st.notOk(r[p], p + ' is false in a regex without flag ' + f);
					}
				}
			);

			st.end();
		});
	});

	t.end();
});
