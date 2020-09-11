# Deprecated: ~~gatsby-source-airtable~~
## We are combining namespaces. This repo is deprecated in favor of [jbolda/gatsby-source-airtable](https://github.com/jbolda/gatsby-source-airtable) for Gatsby v2+. The change will be transparent to npm, but all documentation and any new issues should be created at the new github repo.

Gatsby source plugin for pulling rows from an Airtable.

## Install

`npm install --save gatsby-source-airtable`

## How to use

```javascript
// In gatsby-config.js
plugins: [
  {
    resolve: `gatsby-source-airtable`,
    options: {
      apiKey: `YOUR_AIRTABLE_KEY`,
      baseId: `YOUR_AIRTABLE_BASE_ID`,
      tableName: `YOUR_AIRTABLE_NAME`,
      tableView: `YOUR_AIRTABLE_VIEW_NAME`,
      queryName: `OPTIONAL_NAME_TO_IDENTIFY_TABLE`
    }
  },
]
```

### Multiple tables
Multiple tables can be configured by adding additional plugin configurations. Unfortunately, this does not enable cross base querying.
see: https://github.com/kevzettler/gatsby-source-airtable/issues/8


## How to Query
```
{
  allAirtable(QueryName) {
    edges {
      node {
        id
        Caption
        Photo{
          url
        }
      }
    }
  }
}
```
