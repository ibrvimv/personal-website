import createImageUrlBuilder from '@sanity/image-url'
import type { Image } from 'sanity'

import { dataset, projectId } from '../env'

const imageBuilder = createImageUrlBuilder({
  projectId: projectId || '',
  dataset: dataset || '',
})

export const urlForImage = (source: Image) => {
  return imageBuilder.image(source).auto('format')
}

/** High-quality URL for CV mobile image (sharp on retina). No max width so original resolution is preserved. */
export const urlForCvMobileImage = (source: Image) => {
  return imageBuilder
    .image(source)
    .auto('format')
    .quality(95)
}
