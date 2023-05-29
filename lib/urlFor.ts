import { Image } from '@/typings';
import { client } from './sanity.client';
// import { ImageUrlBuilder } from '@sanity/image-url/lib/types/builder';
import imageUrlBuilder from '@sanity/image-url';

const builder = imageUrlBuilder(client);

export default function urlFor(source: any) {
  return builder.image(source);
}
