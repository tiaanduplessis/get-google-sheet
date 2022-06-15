import { getGoogleSheet } from "./mod.ts";
import { config } from "https://deno.land/x/dotenv@v3.2.0/mod.ts";

const env = config();
if (!env.SHEET_ID || !env.SHEET_NAME) throw ("Missing env vars");
const result = await getGoogleSheet(env.SHEET_ID, env.SHEET_NAME);
console.log(result);
