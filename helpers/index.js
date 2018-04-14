import algoliasearch from 'algoliasearch'

const client = algoliasearch(
  process.env.ALGOLIA_APP_ID,
  process.env.ALGOLIA_API_KEY
)

const index = client.initIndex(process.env.ALGOLIA_INDEX_NAME)

export const getPackageInfo = async pkgName => {
  try {
    return await index.getObject(pkgName)
  } catch (err) {
    return {}
  }
}
