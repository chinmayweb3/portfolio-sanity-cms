import {defineField, defineType} from 'sanity'

export const workFilterType = defineType({
  name: 'workfilter',
  title: 'Work Filter',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      type: 'string',
    }),
  ],
})
