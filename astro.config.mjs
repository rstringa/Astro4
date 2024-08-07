import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import icon from "astro-icon";

const SERVER_PORT = 4321;
const LOCALHOST_URL = `http://localhost:${SERVER_PORT}`;

const LIVE_URL = "https://rstringa.github.io/";
const SCRIPT = process.env.npm_lifecycle_script || "";
const isBuild = SCRIPT.includes("astro build");

export let SITE_URL = LOCALHOST_URL;
export let BASE_URL = ""

if(isBuild){
  SITE_URL = LIVE_URL;
  BASE_URL = '/Astro4';
}

// https://astro.build/config
export default defineConfig({
  server : {port:SERVER_PORT },
  site: SITE_URL,
  integrations: [tailwind(), mdx(), sitemap(), icon()],
});
