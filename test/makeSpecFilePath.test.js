/* global suite, test */

var assert = require('assert');
var makeSpecFileName = require('../src/makeSpecFilePath')

suite('Make Spec Filename', function() {
    test('returns spec filename for "/home/bob/index.js"', function() {
        var srcFile = {
            uri: {
                fsPath: '/home/bob/src/index.js'
            }
        }

        var configuration = {
            fromRegex: '(.*)src/(.*).js',
            toRegex: 'test/$1.kitkat.js',
        }

        assert.equal(makeSpecFileName(srcFile, configuration), '/home/bob/test/index.kitkat.js')
    })
})
