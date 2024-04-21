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
      options: {
        layout: 'tags',
      },
      of: [
        {
          type: 'reference',
          to: [{type: 'workfilter'}],
          options: {disableNew: true},
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
