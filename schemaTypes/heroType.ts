import {defineField, defineType} from 'sanity'

export const allTitleType = defineType({
  name: 'alltitle',
  title: 'All Title',
  type: 'document',

  fields: [
    defineField({
      name: 'name',
      type: 'string',
    }),

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
