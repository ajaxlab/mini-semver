'use strict'
var t = require('tap')

const spawn = require('child_process').spawn
const bin = require.resolve('../bin/mini-semver')
const run = args => new Promise((resolve, reject) => {
  const c = spawn(process.execPath, [bin].concat(args))
  c.on('error', reject)
  const out = []
  const err = []
  c.stdout.setEncoding('utf-8')
  c.stdout.on('data', chunk => out.push(chunk))
  c.stderr.setEncoding('utf-8')
  c.stderr.on('data', chunk => err.push(chunk))
  c.on('close', (code, signal) => {
    resolve({
      out: out.join(''),
      err: err.join(''),
      code: code,
      signal: signal
    })
  })
})

t.test('inc tests', t => {
  [
    [['-i', 'major', '1.0.0'], { out: '2.0.0', code: 0, signal: null }],
    [['-i', 'major', '1.0.0', '1.0.1'], { out: '', err: '--inc can only be used on a single version with no range', code: 1 }]
  ].forEach(c => t.resolveMatch(run(c[0]), c[1]))
  t.end()
})
