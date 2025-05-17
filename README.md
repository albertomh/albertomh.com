<!-- markdownlint-disable MD033 no-inline-html -->
# <a href="https://www.albertomh.com" target="_blank">albertomh.com</a>
<!-- markdownlint-enable MD033 no-inline-html -->

[![justfile](https://img.shields.io/badge/🤖_justfile-EFF1F3)](https://github.com/casey/just)
[![deno](https://img.shields.io/badge/deno-ffffff?logo=deno&logoColor=222222)](https://github.com/denoland/deno/)
[![11ty](https://img.shields.io/badge/static-ffffff?logo=eleventy&logoColor=222222)](https://github.com/11ty/eleventy/)
[![bootstrap](https://img.shields.io/badge/5-7952B3?logo=bootstrap&logoColor=white)](https://github.com/twbs/bootstrap)
[![cfpages](https://img.shields.io/badge/pages-ffffff?logo=cloudflare&logoColor=#F38020)](https://pages.cloudflare.com/)

Personal site.

## Develop

Built with `11ty` and Bootstrap 5. Using Parcel as the bundler and to transpile SCSS to CSS.  

### Prerequisites

To develop `albertomh.com` the following must be available locally:

- [deno](https://github.com/denoland/deno)
- [just](https://github.com/casey/just)

### Quickstart: run locally

TODO: convert to `just` recipes

```sh
# serve on localhost:8000
deno run dev

# enable debug mode
DEBUG=Eleventy* dpx @11ty/eleventy

# build minified static assets
deno run build

# bump dependency versions
deno update
```

## Deploy

The site is hosted on Cloudflare Pages, using Version 2 of their build system. To deploy:  

1. Raise a PR against the `main` branch.
1. Merge the PR into `main` and wait for Cloudflare to automatically deploy.

Cloudflare Pages uses the following build configuration:  

|                         |               |
|-------------------------|---------------|
| Build command:          | deno run build |
| Build output directory: | /dist         |
| Root directory:         | /             |

---

## Content structure & management

### Add a new post

1. Copy `assets/html/_template.njk` to the relevant position in the src tree and rename.
1. Uncomment the `layout` and `tags` properties in the front matter.
1. Create a dropcap and a headline image to accompany the post (see below).

### Create a new dropcap

1. Copy `assets/img/dropcap/_dropcap_template.svg` to the relevant
`assets/img/dropcap/<year>/` directory and rename.
1. Design the new dropcap svg. Remember to use 'Simplify path' (Ctrl + L) in Inkscape to
   reduce image size for complex designs.
1. Use it with `<p class="content dropcap" style="--dropcap-url: url('/assets/img/dropcap/YYYY/slug.svg');">`
   as the first paragraph tag.

### Generate code snippets

1. Populate the `<code>` tag in `hljs.njk`.
1. Navigate to `/hljs` and copy the resulting markup.
1. Use in a post by wrapping in `<pre><code class="hljs"> </code></pre>`.

### Create a new headline image

1. Copy `assets/img/post/_post_img_template.svg` to the relevant
`assets/img/post/<year>/` directory and rename.
1. Design the new headline image.

### Create a new OpenGraph image

1. Create a 1200x630 image.
1. Place the post's svg at a size of 567x567 in the middle.
1. Save as a png and save at `assets/img/opengraph/<YYYY>/`.

### Update CV

```sh
# 1. edit `cv/cv.tex` LaTeX
open -a TeXshop

# 2. typeset to PDF, producting `cv/cv.pdf`
⌘ T

# 3. copy to web assets dir
just cv
```
