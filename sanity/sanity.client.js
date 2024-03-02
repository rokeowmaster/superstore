import { createClient } from "@sanity/client";

const config = {
  projectId: "63tc7q9w",
  dataset: "production",
  apiVersion: "2024-02-29",
  useCdn: false,
};

const client = createClient(config);

export default client;