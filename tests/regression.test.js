const Remark = require(`remark`)
const plugin = require(`../index`)

describe(`remark mathjax plugin`, () => {
  it(`renders inlineMath node properly`, async () => {
    const equation = `$a^2 + b^2 = c^2$`
    let remark = new Remark()
    for (let parserPlugins of plugin.setParserPlugins()) {
      remark = remark.use(parserPlugins)
    }
    const markdownAST = remark.parse(equation)
    await plugin({ markdownAST })
    expect(markdownAST).toMatchSnapshot()
  })

  it(`renders double $ inlineMath node properly`, async () => {
    const equation = `$$a^2 + b^2 = c^2$$`
    let remark = new Remark()
    for (let parserPlugins of plugin.setParserPlugins()) {
      remark = remark.use(parserPlugins)
    }
    const markdownAST = remark.parse(equation)
    await plugin({ markdownAST })
    expect(markdownAST).toMatchSnapshot()
  })

  it(`renders math node properly`, async () => {
    const equation = `$$\na^2 + b^2 = c^2\n$$`
    let remark = new Remark()
    for (let parserPlugins of plugin.setParserPlugins()) {
      remark = remark.use(parserPlugins)
    }
    const markdownAST = remark.parse(equation)
    await plugin({ markdownAST })
    expect(markdownAST).toMatchSnapshot()
  })
})
