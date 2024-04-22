import { type SchemaTypeDefinition } from 'sanity';

import blockContent from './schemaTypes/blockContent';
import category from './schemaTypes/category';
import post from './schemaTypes/post';
import author from './schemaTypes/author';
import about from './schemaTypes/about';
import cv from './schemaTypes/cv';

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [post, about, cv, author, category, blockContent],
};
