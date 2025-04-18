import { createClient } from "@sanity/client";

export const client = createClient({
  projectId: "h9v35xhq",
  dataset: "production",
  apiVersion: "2023-01-01",
  useCdn: true,
});
