import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";

import vercelStatic from "@astrojs/vercel/static";

// https://astro.build/config
export default defineConfig({
  integrations: [
    tailwind({
      config: { applyBaseStyles: false },
    }),
  ],
  output: "static",
  adapter: vercelStatic(),
  site: "kiellandholdings.com",
});
