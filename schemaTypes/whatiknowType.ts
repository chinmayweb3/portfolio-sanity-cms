import {defineField, defineType} from 'sanity'

export const whatIKnowType = defineType({
  name: 'whatiknow',
  title: 'What I Know',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      type: 'string',
    }),
    defineField({
      name: 'technology',
      type: 'array',
      of: [{type: 'string'}],
    }),
  ],
})
