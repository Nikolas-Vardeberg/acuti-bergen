import { type SchemaTypeDefinition } from 'sanity'
import { article } from './pages/article'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [article],
}
