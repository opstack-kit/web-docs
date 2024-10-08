---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: "Opstack Kit | Docs"
  # text: "Coming soon..."
  tagline: npm i opstack-kit | is a toolkit for all upgrades. To easily connect and interact with the OP-Stack (Superchain)
  actions:
    - theme: brand
      text: Get started
      link: /docs/getting-started
    - theme: alt
      text: Quick start
      link: /docs/quick-start
    - theme: alt
      text: Example
      link: /docs/example
  image:
    src: /ok.png
    alt: Logo

features:
  - icon: 📝
    title: Focus on Your Dapp
    details: Effortlessly create awesome OP-Stack (Superchain) sites with just npm i opstack-kit.
  - icon: 🧑‍💻
    title: Enjoy the "opstack-kit"
    details: Instant server start, lightning fast hot updates, and leverage OP-Stack (Superchain) ecosystem.
  - icon: ⚙️
    title: Customize with OP-Stack
    details: Use syntax and components directly in "opstack-kit", or build custom themes.
  - icon: 🚀
    title: Ship Fast Sites
    details: Start creating quickly "opstack-kit" after that deploy it to your network.
---

<style>
:root {
  --vp-home-hero-name-color: transparent;
  --vp-home-hero-name-background: -webkit-linear-gradient(120deg, #FF3366 30%, #FF0000);

  --vp-home-hero-image-background-image: linear-gradient(-45deg, #FF3366 50%, #FF0000 50%);
  --vp-home-hero-image-filter: blur(44px);

  margin-top: 80px;
}

@media (min-width: 640px) {
  :root {
    --vp-home-hero-image-filter: blur(56px);
  }
}

@media (min-width: 960px) {
  :root {
    --vp-home-hero-image-filter: blur(68px);
  }
}
</style>