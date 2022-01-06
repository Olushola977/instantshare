import sanityClient from '@sanity/client';
import imageUrlBuider from '@sanity/image-url';

export const client = sanityClient({
    projectId: process.env.REACT_APP_SANITY_ID,
    dataset: 'production',
    apiVersion: '2021-12-30',
    useCdn: true,
    token: process.env.REACT_APP_SANITY_TOKEN
})

const builder = imageUrlBuider(client);

export const urlFor = (source) => builder.image(source); 