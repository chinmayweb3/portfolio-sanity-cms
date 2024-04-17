import {defineField, defineType} from 'sanity'

export const heroType = defineType({
  name: 'hero',
  title: 'Hero',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      initialValue: 'Default title',
    }),
    defineField({
      name: 'para',
      type: 'array',
      of: [{type: 'block'}],
    }),

    defineField({
      name: 'profileimage',
      type: 'image',
    }),
  ],
})
