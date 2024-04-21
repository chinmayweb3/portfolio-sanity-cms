import {defineField, defineType} from 'sanity'

export const resumeType = defineType({
  name: 'resume',
  type: 'document',
  title: 'Resume',
  fields: [
    defineField({
      name: 'resume',
      title: 'Resume',
      type: 'file',
      options: {
        accept: 'application/pdf', // Accept only PDF files
      },
    }),
  ],
})
