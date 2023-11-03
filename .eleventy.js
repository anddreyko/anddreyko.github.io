const CleanCSS = require('clean-css')
const postcss = require('postcss')
const postcssNested = require('postcss-nested')
const autoprefixer = require('autoprefixer')
const htmlmin = require('html-minifier')

module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy('style')
  eleventyConfig.addPassthroughCopy({ 'files/fav': '/' })
  eleventyConfig.addPassthroughCopy({ 'files/images': '/images' })

  let date = null
  eleventyConfig.addShortcode('hash', () => {
    if (!date) {
      date = Date.now()
    }

    return date
  })

  eleventyConfig.addFilter('is_string', (value) => typeof value === 'string')

  eleventyConfig.addFilter('is_object', (value) => typeof value === 'object')

  eleventyConfig.addFilter('cssmin',
    (code) => new CleanCSS({}).minify(code).styles)

  eleventyConfig.addNunjucksAsyncFilter('postcss', (cssCode, done) => {
    postcss([postcssNested(), autoprefixer()])
      .process(cssCode, { from: undefined })
      .then((r) => done(null, r.css), (e) => done(e, null))
  })

  eleventyConfig.addTransform('htmlmin', (value, outputPath) => {
    if (outputPath.indexOf('.html') > -1) {
      return htmlmin.minify(value, {
        useShortDoctype: true,
        removeComments: true,
        collapseWhitespace: true,
        minifyCSS: true,
      })
    }
    return value
  })

  return {
    dir: {
      includes: 'includes', data: 'data',
    },
  }
}
