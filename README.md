# Mangati website

Run:

```sh
npx @11ty/eleventy --serve
```

## Product images

Product logo images are generated from each service's `logo.svg` using `sharp-cli`:

```sh
npx sharp-cli --input <service>/public/images/logo.svg --output images/products-<service>.png resize 38 --
```

Example:

```sh
npx sharp-cli --input ../monitor/public/images/logo.svg --output images/products-monitor.png resize 38 --
npx sharp-cli --input ../notificacao/public/images/logo.svg --output images/products-notificacao.png resize 38 --
```
