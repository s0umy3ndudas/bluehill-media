/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://bluehill.media",
  generateRobotsTxt: true, // Generate robots.txt file
  exclude: ["/admin", "/dashboard"], // Exclude private pages
  transform: async (config, path) => {
    return {
      loc: path, // URL location
      lastmod: new Date().toISOString(), // Last modified date
      changefreq: "daily", // Change frequency (daily, weekly, etc.)
      priority: path === "/" ? 1.0 : 0.7, // Prioritize homepage
    };
  },
};
