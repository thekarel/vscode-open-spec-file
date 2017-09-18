/* global suite, test */

var assert = require('assert');
var getSuffixForFilename = require('../src/getSuffixForFilename')

suite('Get Suffix For Document', function() {
    test('returns null if there is no mapping', function() {
        const filename = '/a/b/c.def'

        const map = {
            '.avi': '.str',
        }

        assert.equal(getSuffixForFilename(map, filename).toRegex, null)
    });

    test('returns relevant map', function() {
        const filename = 'src/a/b/c.foo'

        const map = {
            '(.*).foo': '.bar',
            '.js': '.spec.js'
        }


        assert.deepEqual(getSuffixForFilename(map, filename), {fromRegex: '(.*).foo', toRegex: '.bar'})
    });
});