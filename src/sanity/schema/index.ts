import type { SchemaTypeDefinition } from "sanity";
import { blockContentType } from "./blockContent";
import { tagType } from "./tag";
import { noteType } from "./noteType";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [blockContentType, tagType, noteType],
};