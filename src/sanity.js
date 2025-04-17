// src/sanity.js
import { createClient } from "@sanity/client";

export const client = createClient({
  projectId: "9gi73z4e", // Ton vrai projectId
  dataset: "production",
  apiVersion: "2023-01-01",
  useCdn: true,
});
