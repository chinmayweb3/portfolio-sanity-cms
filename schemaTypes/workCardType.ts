import {defineField, defineType} from 'sanity'

export const workCardType = defineType({
  name: 'workcard',
  title: 'Work Card',
  type: 'document',
  fields: [
    defineField({
      name: 'projectname',
      type: 'string',
      title: 'Project Name',
    }),
    defineField({
      name: 'workfilter',
      title: 'Work Filter',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{type: 'workfilter'}],
        },
      ],
    }),
    defineField({
      name: 'projectimage',
      title: 'Project Image',
      type: 'image',
    }),
  ],
})
