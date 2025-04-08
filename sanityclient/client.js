import { createClient} from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

const config = {
  projectId: "3tl5rcj7",
  dataset: "production",
  apiVersion: "2025-04-08",
  useCdn: false,
};

const client = createClient(config);

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);

export default client;