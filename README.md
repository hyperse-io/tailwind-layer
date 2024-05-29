# @hyperse/tailwind-layer

Compile your tailwindcss components into tailwind plugins and enjoy full IntelliSense autocompletion!

## Usage

1. yarn add @hyperse/tailwind-layer

2. packages.json

```json
  "scripts": {
   "build:twl": "twl -p \"**/globals.css\"",
  }
```

3. yarn run build:twl will output `./tailwindcss-extend.cjs`
4. update `plugins` in `tailwind.config.ts`

```ts
import type { Config } from "tailwindcss";

const config: Config = {
  ...
  plugins: [require("./tailwindcss-extend.cjs")],
};
export default config;
```

4. re-lunch your vscode ide

```css filename="app/globals.css"
@tailwind base;
@tailwind components;
@tailwind utilities;
@import 'keen-slider/keen-slider.min.css';

* {
  scroll-behavior: smooth;
}

.progress-bar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 10px;
  background: var(--red);
  transform-origin: 0%;
}

@layer components {
  .hyperce-head-xl {
    @apply font-extrabold text-4xl md:text-6xl;
  }
  .hyperce-sub-head {
    @apply font-medium text-base md:text-lg;
  }
  .hyperce-head-sup {
    @apply text-sm font-semibold;
  }

  .hyperce-card-header {
    @apply text-lg md:text-xl font-bold;
  }

  .hyperce-card-description {
    @apply text-xs md:text-sm font-medium;
  }

  .hyperce-btn-text-low {
    @apply text-base font-bold;
  }
  .hyperce-btn-text-high {
    @apply text-lg font-bold;
  }
}
```
