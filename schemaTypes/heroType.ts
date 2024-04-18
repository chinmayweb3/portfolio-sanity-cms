import {defineField, defineType} from 'sanity'

export const heroType = defineType({
  name: 'alltitle',
  title: 'All Title',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      type: 'array',
      of: [{type: 'block'}],
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
