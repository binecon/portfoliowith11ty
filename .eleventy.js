const Image = require("@11ty/eleventy-img");
const shell = require('shelljs') // 1. My shelljs object

async function imageShortcode(src, alt, sizes) {
  let metadata = await Image(src, {
    widths: [200, 400],
    formats: ["avif", "jpeg"]
  });
  
  let imageAttributes = {
     alt,
    sizes,
    loading: "lazy",
    decoding: "async",
  }
  
  shell.exec('mkdir -p docs/img') // create the directory if it doesn't exist already
  shell.exec('cp img/* docs/img') // copy everything from ./img into ./public/img

  return Image.generateHTML(metadata, imageAttributes);
}

module.exports = function (eleventyConfig) {

    eleventyConfig.addPassthroughCopy("src/css");
    eleventyConfig.addPassthroughCopy(".img");
    eleventyConfig.addWatchTarget("src/css");

    eleventyConfig.addNunjucksAsyncShortcode("image", imageShortcode);
    eleventyConfig.addLiquidShortcode("image", imageShortcode);
    eleventyConfig.addJavaScriptFunction("image", imageShortcode);

    return {
      pathPrefix: "{{ "/" | url }}",
        dir: {
            input: "src",
            output: "docs",
        }
    };
};