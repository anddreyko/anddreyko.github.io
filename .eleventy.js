module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy('style')
  eleventyConfig.addPassthroughCopy({ 'files/fav': '/' })

  eleventyConfig.addFilter('is_string', (value) => typeof value === 'string')

  eleventyConfig.addFilter('is_object', (value) => typeof value === 'object')

  return {
    dir: {
      includes: 'includes', data: 'data',
    },
  }
}
