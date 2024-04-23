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
      name: 'orderin',
      type: 'number',
    }),
    defineField({
      name: 'tech',
      type: 'array',
      of: [{type: 'string'}],
    }),
  ],
})
