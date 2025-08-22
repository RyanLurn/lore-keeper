/* eslint-disable */
/**
 * Generated `api` utility.
 *
 * THIS CODE IS AUTOMATICALLY GENERATED.
 *
 * To regenerate, run `npx convex dev`.
 * @module
 */

import type {
  ApiFromModules,
  FilterApi,
  FunctionReference,
} from "convex/server";
import type * as actions from "../actions.js";
import type * as lib_env from "../lib/env.js";
import type * as lib_groq from "../lib/groq.js";
import type * as message from "../message.js";
import type * as schemas_message from "../schemas/message.js";
import type * as schemas_systemFields from "../schemas/systemFields.js";

/**
 * A utility for referencing Convex functions in your app's API.
 *
 * Usage:
 * ```js
 * const myFunctionReference = api.myModule.myFunction;
 * ```
 */
declare const fullApi: ApiFromModules<{
  actions: typeof actions;
  "lib/env": typeof lib_env;
  "lib/groq": typeof lib_groq;
  message: typeof message;
  "schemas/message": typeof schemas_message;
  "schemas/systemFields": typeof schemas_systemFields;
}>;
export declare const api: FilterApi<
  typeof fullApi,
  FunctionReference<any, "public">
>;
export declare const internal: FilterApi<
  typeof fullApi,
  FunctionReference<any, "internal">
>;
