// const Image = require("@11ty/eleventy-img");
// const shell = require('shelljs');

// async function imageShortcode(baseUrl, src, alt, sizes) {
//   // Construct full source URL by concatenating the base URL and image source
//   const fullSrc = `${baseUrl}/${src}`;

//   let metadata = await Image(fullSrc, {
//     widths: [200, 400],
//     formats: ["avif", "jpeg"]
//   });
  
//   let imageAttributes = {
//     alt,
//     sizes,
//     loading: "lazy",
//     decoding: "async",
//   }
  
//   shell.exec('mkdir -p docs/img'); // create the directory if it doesn't exist already
//   shell.exec('cp img/* docs/img'); // copy everything from ./img into ./public/img

//   return Image.generateHTML(metadata, imageAttributes);
// }

module.exports = function (eleventyConfig) {
  // const baseUrl = "http://localhost:8080/test11ty/";

  eleventyConfig.addPassthroughCopy("src/css");
  eleventyConfig.addPassthroughCopy("src/images");
  eleventyConfig.addWatchTarget("src/css");

  // eleventyConfig.addNunjucksAsyncShortcode("image", (src, alt, sizes) => {
  //   return imageShortcode(baseUrl, src, alt, sizes);
  // });


  // eleventyConfig.addLiquidShortcode("image", imageShortcode);
  // eleventyConfig.addJavaScriptFunction("image", imageShortcode);

  return {
    pathPrefix: "/test11ty/",
    dir: {
      input: "src",
      output: "docs",
    }
  };
};
