/* global suite, test */

var assert = require('assert');
var getSuffixForFilename = require('../src/getSuffixForFilename')

suite('Get Suffix For Document', function() {
    test('returns null if there is no mapping', function() {
        const filename = '/a/b/c.def'

        const map = {
            '.avi': '.str',
        }

        assert.equal(getSuffixForFilename(map, filename).toSuffix, null)
    });

    test('returns relevant map', function() {
        const filename = '/a/b/c.foo'

        const map = {
            '.foo': '.bar',
            '.js': '.spec.js'
        }


        assert.deepEqual(getSuffixForFilename(map, filename), {fromSuffix: '.foo', toSuffix: '.bar'})
    });

    suite('The file name matches multiple keys', () => {
        test('returns the map that more closely matches', () => {
            const filename = 'a.spec.js';

            const map = {
                '.js': '.spec.js',
                '.spec.js': '.js'
            };

            assert.deepEqual(getSuffixForFilename(map, filename), {fromSuffix: '.spec.js', toSuffix: '.js'});
        });
    });
});