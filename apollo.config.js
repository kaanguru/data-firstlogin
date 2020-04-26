module.exports = {
    client: {
      service: {
        name: 'sebapp',
        // URL to the GraphQL API
        url: 'https://sebapi.com/graphql',
      },
      // Files processed by the extension
      includes: [
        'src/**/*.vue',
        'src/**/*.js',
        'src/**/*.ts',
      ],
    },
  }