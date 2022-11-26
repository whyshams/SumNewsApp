import sanityClient from '@sanity/client'
const config = {
  dataset: 'production',
  projectId: "jj3j3gmk",
  useCdn: process.env.NODE_ENV === 'production',
  token: "skky0AIN5uMVEAO4ADIzDb4lL8SK4SkpORjEkr8BEbnKw9bbnx0WWEg6imsEVoJBRRHPCqkvGv1nMIi8Q3V4lPJoWWDjuGyTE2Fq7sxEIOV66zT4G6ztItor6gBIe8CfPDeg0VlwgdIA8tJlEjFnISoudvjHvgDhGSyM93LR7NX7CM30zM1f",
}
const client = sanityClient(config)

export default async function createComment(req, res) {
  const { _id, name,email, comment } = JSON.parse(req.body)
  try {
    await client.create({
      _type: 'comment',
      somenews: {
        _type: 'reference',
        _ref: _id,
      },
      name,
      email,
      comment,
    })
  } catch (err) {
    console.error(err)
    return res.status(500).json({ message: `Couldn't submit comment`, err })
  }
  return res.status(200).json({ message: 'Comment submitted' })
}