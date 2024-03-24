# <a href="https://www.albertomh.com" target="_blank">albertomh.com</a>

[![11ty](https://img.shields.io/badge/static-ffffff?logo=eleventy&logoColor=222222)](https://github.com/11ty/eleventy/)
[![bootstrap](https://img.shields.io/badge/5-7952B3?logo=bootstrap&logoColor=white)](https://github.com/twbs/bootstrap)
[![cfpages](https://img.shields.io/badge/pages-ffffff?logo=cloudflare&logoColor=#F38020)](https://pages.cloudflare.com/)

Personal site.

## Develop

Built with `11ty` and Bootstrap 5. Using Parcel as the bundler and to transpile SCSS to CSS.  

```sh
# serve on localhost:8000
npm run dev

# enable debug mode
DEBUG=Eleventy* npx @11ty/eleventy

# build minified static assets
npm run build

# bump dependency versions
npm update
```

## Deploy

**Trigger a deployment by merging changes into `main` and running `publish.sh`.**  

```sh
# deploy to Cloudflare Pages
# ensure all changes have been merged into `main`, then run:
./publish.sh
```

The site is hosted on Cloudflare Pages. Deployments are triggered by pushes to the `dist` branch.  

Cloudflare Pages uses the following build configuration:  
- No framework preset.
- Build command: `npm run build`.
- Build output directory: `/dist`.

Environment variables:  

| Variable name  | Value       |
| -------------- | ----------- |
| NODE_VERSION   | 18          |
| PYTHON_VERSION | 3.7         |

---

## Content structure & management

### Add a new post
1. Copy `assets/html/_template.njk` to the relevant position in the src tree and rename.
1. Uncomment the `layout` and `tags` properties in the front matter.
1. Create a dropcap and a headline image to accompany the post (see below).

### Create a new dropcap
1. Copy `assets/img/dropcap/_dropcap_template.svg` to the relevant 
`assets/img/dropcap/<year>/` directory and rename.
1. Design the new dropcap svg. Remember to use 'Simplify path' (Ctrl + L) in Inkscape to reduce image size for complex designs.
1. Use it with `<p class="content dropcap" style="--dropcap-url: url('/assets/img/dropcap/YYYY/slug.svg');">` as the first paragraph tag. 

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
