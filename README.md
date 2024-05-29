# @hyperse/tailwind-layer

<p align="left">
  <a aria-label="Build" href="https://github.com/hyperse-io/tailwind-layer/actions?query=workflow%3ACI">
    <img alt="build" src="https://img.shields.io/github/actions/workflow/status/hyperse-io/tailwind-layer/ci-integrity.yml?branch=main&label=ci&logo=github&style=flat-quare&labelColor=000000" />
  </a>
  <a aria-label="stable version" href="https://www.npmjs.com/package/@hyperse/tailwind-layer">
    <img alt="stable version" src="https://img.shields.io/npm/v/%40hyperse%2Ftailwind-layer?branch=main&label=version&logo=npm&style=flat-quare&labelColor=000000" />
  </a>
  <a>
    <img alt="LoC" src="https://img.shields.io/bundlephobia/min/%40hyperse%2Ftailwind-layer?style=flat-quare&labelColor=000000" />
  </a>
  <a aria-label="Top language" href="https://github.com/hyperse-io/tailwind-layer/search?l=typescript">
    <img alt="GitHub top language" src="https://img.shields.io/github/languages/top/hyperse-io/tailwind-layer?style=flat-square&labelColor=000&color=blue">
  </a>
  <a aria-label="Licence" href="https://github.com/hyperse-io/tailwind-layer/blob/main/LICENSE">
    <img alt="Licence" src="https://img.shields.io/github/license/hyperse-io/tailwind-layer?style=flat-quare&labelColor=000000" />
  </a>
</p>

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
@import "keen-slider/keen-slider.min.css";

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
