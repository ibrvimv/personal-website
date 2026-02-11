import { defineType, defineField } from 'sanity';
import {
  orderRankField,
  orderRankOrdering,
} from '@sanity/orderable-document-list';

export default defineType({
  name: 'cv',
  title: 'CV',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'array',
      of: [{ type: 'block' }],
    }),
    defineField({
      name: 'cvMobileImage',
      title: 'CV Mobile Image',
      type: 'image',
      description:
        'CV version for mobile in the form of a long picture (PNG/JPG). Used on phones instead of PDF iframe.',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'cvFile',
      title: 'CV PDF File',
      type: 'file',
      options: {
        accept: 'application/pdf',
      },
      description: 'Upload PDF file here.',
    }),
    orderRankField({ type: 'cv' }),
  ],
  orderings: [orderRankOrdering as any],
});
