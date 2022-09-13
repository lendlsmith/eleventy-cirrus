# Cirleventy

Build static websites with 11ty, Sass for CSS, and modern JavaScript.

## Increase your power levels

1. [Front-End Documentation](https://spiderpig86.github.io/Cirrus/)
1. [Add Favicons / Device Icons](https://realfavicongenerator.net/)
2. [Add a Sitemap](https://developers.google.com/search/docs/advanced/sitemaps/build-sitemap)
3. [Configure Eleventy](https://www.11ty.dev/docs/watch-serve/)

## Setup

```shell
$ npm i
```

## Commands

### Develop

```sh
$ ELEVENTY_ENV=development npm run watch
```

### Build

```sh
$ npm run build
```

Or build production ready assets:

```sh
$ npm run build-prod
```

There are also a slew of individual commands to run individual build processes such as styles, scripts, etc.

## JavaScript

Adding JS is pretty straightforward, but has prescriptions on file structure & naming:

-   All JS is processed through rollup with a basic Babel configuration using `preset-env`. Configure this and the accompanying `.browserslistrc` as you please.
-   Any JS file _without_ an underscore prefix is treated as an asset (included in file output). Its file path is mirrored in the output.
-   Any JS file _with_ an underscore prefix is treated as a non-asset module (no output file).
