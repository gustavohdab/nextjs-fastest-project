import { Rule } from 'sanity'

const schema = {
  name: 'resourcePlaylist',
  title: 'Resource Playlist',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule: Rule) => Rule.required(),
    },
    {
      name: 'resources',
      title: 'Resources',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'resource' }] }],
    },
    {
      createdAt: 'createdAt',
      name: 'createdAt',
      title: 'Created at',
      type: 'datetime',
      validation: (Rule: Rule) => Rule.required(),
    },
    {
      updatedAt: 'updatedAt',
      name: 'updatedAt',
      title: 'Updated at',
      type: 'datetime',
      validation: (Rule: Rule) => Rule.required(),
    },
  ],
}

export default schema
