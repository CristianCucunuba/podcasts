import slugify from 'slugify'

const slug = (name) => slugify(name, { lower: true }, /[^\w\-]+/g)
export default slug
