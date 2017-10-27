const Airtable = require('airtable')
const crypto = require(`crypto`)

exports.sourceNodes = async ({ boundActionCreators },
                             {apiKey, baseId, tableName, tableView}) => {
  const { createNode, setPluginStatus } = boundActionCreators
  const base = new Airtable({
    apiKey,
  }).base(baseId);
  const table = base(tableName);

  const query = await table.select({
    view: tableView,
  })

  console.time(`fetch all Airtable rows`)
  const all = await query.all();

  console.timeEnd(`fetch all Airtable rows`)

  setPluginStatus({
    status: {
      lastFetched: new Date().toJSON(),
    },
  })

  all.forEach(row => {
    const gatsbyNode = Object.assign({
      // Required Gatsby fields
      id: `Airtable ${tableName} ${row.id}`,
      parent: "__SOURCE__",
      children: [],
      internal: {
        type: "Airtable",
        contentDigest: crypto
          .createHash("md5")
          .update(JSON.stringify(row))
          .digest("hex")
      }
    }, row.fields);

    createNode(gatsbyNode);
  });

  return
}
