import test from 'ava'
import prettier from '@/index'


test('prettier es code', t => {
  const file = {
    projectPath: 'test.es',
    content: 'const a = 123'
  }

  const handler = prettier()
  handler.genFile(file)

  t.snapshot(file.content)
})

test('prettier custom parser code', t => {
  const file = {
    projectPath: 'test.js',
    content: 'const a = 123'
  }

  const handler = prettier({ parser: 'babel' })
  handler.genFile(file)

  t.snapshot(file.content)
})

test('prettier yaml code', t => {
  const file = {
    projectPath: 'test.yaml',
    content: 'a: 123'
  }

  const handler = prettier({})
  handler.genFile(file)

  t.snapshot(file.content)
})

test('prettier less code', t => {
  const file = {
    projectPath: 'test.less',
    content: '.c { background: #ffffff; } '
  }

  const handler = prettier({})
  handler.genFile(file)

  t.snapshot(file.content)
})

test('prettier css code', t => {
  const file = {
    projectPath: 'test.css',
    content: '.c { background: #ffffff; } '
  }

  const handler = prettier({})
  handler.genFile(file)

  t.snapshot(file.content)
})

test('prettier scss code', t => {
  const file = {
    projectPath: 'test.scss',
    content: '.c { background: #ffffff; } '
  }

  const handler = prettier({})
  handler.genFile(file)

  t.snapshot(file.content)
})

test('prettier ts code', t => {
  const file = {
    projectPath: 'test.ts',
    content: 'type Maybe<T> = T | undefined'
  }

  const handler = prettier({})
  handler.genFile(file)

  t.snapshot(file.content)
})

test('prettier json code', t => {
  const file = {
    projectPath: 'test.json',
    content: '[{ a: 123 }]'
  }

  const handler = prettier({})
  handler.genFile(file)

  t.snapshot(file.content)
})

test('prettier vue html', t => {
  const file = {
    projectPath: 'test.html',
    content: '<h1>title</h1>'
  }

  const handler = prettier({})
  handler.genFile(file)

  t.snapshot(file.content)
})

test('prettier markdown file', t => {
  const file = {
    projectPath: 'test.md',
    content: '# title'
  }

  const handler = prettier({})
  handler.genFile(file)

  t.snapshot(file.content)
})

test('prettier vue code', t => {
  const file = {
    projectPath: 'test.vue',
    content: '<script>export default {}</script>'
  }

  const handler = prettier({})
  handler.genFile(file)

  t.snapshot(file.content)
})
