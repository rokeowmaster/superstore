import { createClient } from "@sanity/client";
import imageUrlBuilder from '@sanity/image-url';

const config = {
  projectId: "63tc7q9w",
  dataset: "production",
  apiVersion: "2024-02-29",
  useCdn: false,
};

const client = createClient(config);

const builder = imageUrlBuilder(client);

export function urlForImage(source) {
  return builder.image(source)
}

export default client;