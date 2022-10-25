/**
 * @type {import("@gqty/cli").GQtyConfig}
 */
const config = {
  react: false,
  scalarTypes: { DateTime: 'string' },
  introspection: {
    endpoint: 'https://data.objkt.com/v2/graphql',
    headers: {},
  },
  destination: './src/shared/api/gqty/index.js',
  subscriptions: false,
  javascriptOutput: true,
  enumsAsConst: false,
}

module.exports = config
