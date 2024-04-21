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
      name: 'tech',
      title: 'Tech',
      type: 'array',
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

    defineField({
      name: 'githublink',
      title: 'Github Link',
      type: 'url',
    }),
  ],
})
