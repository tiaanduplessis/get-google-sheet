import { assertEquals } from "https://deno.land/std@0.143.0/testing/asserts.ts";
import { config } from "https://deno.land/x/dotenv@v3.2.0/mod.ts";
import { getGoogleSheet } from "./mod.ts";

const env = config();

Deno.test("get-google-sheet", async () => {
  if (!env.SHEET_ID || !env.SHEET_NAME) throw ("Missing env vars");
  const result = await getGoogleSheet(env.SHEET_ID, env.SHEET_NAME);
  assertEquals(result, [
    { "Heading 1": "foo", "Heading 2": "foo", "Heading 3": "foo" },
    { "Heading 1": "bar", "Heading 2": "bar", "Heading 3": "bar" },
  ]);
});
