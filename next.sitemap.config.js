module.exports = {
  siteUrl: 'https://isaquesestudios.com',
  generateRobotsTxt: true,
  exclude: ['/server-sitemap.xml'], // <= exclude here
  robotsTxtOptions: {
    additionalSitemaps: [
      'https://isaquesestudios.com/server-sitemap.xml', // <==== Add here
    ],
  },
}
