import { PortableTextBlock } from 'sanity';

export type CV = {
  _id: string;
  name: string;
  description: PortableTextBlock[];
  cvFileUrl?: string;
};
