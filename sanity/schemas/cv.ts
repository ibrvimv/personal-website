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
      name: 'cvFile',
      title: 'CV PDF File',
      type: 'file',
      options: {
        accept: 'application/pdf',
      },
      description: 'Загрузи сюда PDF с резюме напрямую в Sanity.',
    }),
    orderRankField({ type: 'cv' }),
  ],
  orderings: [orderRankOrdering as any],
});
