/* global suite, test */

var assert = require('assert');
var makeSpecFileName = require('../src/makeSpecFilePath')

suite('Make Spec Filename', function() {
    test('returns spec filename for "/home/bob/index.js"', function() {
        var srcFile = {
            uri: {
                fsPath: '/home/bob/index.js'
            }
        }

        var configuration = {
            fromRegex: '(.*).js',
            toRegex: '(.*).kitkat.js',
        }

        assert.equal(makeSpecFileName(srcFile, configuration), '/home/bob/index.kitkat.js')
    })
})
