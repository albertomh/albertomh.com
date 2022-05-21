# <a href="https://www.albertomh.com" target="_blank">albertomh.com</a>

My personal site - an 11ty static site deployed on Cloudflare Pages.


## Develop
Uses Parcel as its bundler. Parcel is also responsible for transpiling SCSS to CSS.

Serve locally with `npm run dev`.


## Build
Build with `npm run build`.


## Deploy

**Trigger a deployment by committing all changes to `main` and running `publish.sh`.**  

The site is hosted on Cloudflare Pages. Deployments are triggered by pushes to the `dist` branch.  

Cloudflare Pages uses the following build configuration:  
- No framework preset.  
- Build command: `npm run build`.  
- Build output directory: `/dist`.  

Environment variables:  

| Variable name | Value       |
| ------------- | ----------- |
| NODE_VERSION  | 17.8.0      |


---

## Content structure & management

### Adding a new post
1. Copy `assets/html/_template.njk` to the relevant position in the src tree and rename.
2. Create a dropcap and a headline image to accompany the post (see below).

### Creating a new dropcap
1. Copy `assets/img/dropcap/_dropcap_template.svg` to the relevant 
`assets/img/dropcap/<year>/` directory and rename.
2. Design the new dropcap svg. Remember to use 'Simplify path' (Ctrl + L) in Inkscape to reduce image size for complex designs.
3. Use it using `<p class="content dropcap" style="--dropcap-url: url('/assets/img/dropcap/YYYY/slug.svg');">` as the first paragraph tag. 

### Creating a new headline image
1. Copy `assets/img/post/_post_img_template.svg` to the relevant 
`assets/img/post/<year>/` directory and rename.
2. Design the new headline image.

### Creating a new OpenGraph image
1. Create a 1200x630 image.
2. Place the post's svg at a size of 567x567 in the middle.
3. Save as a png and save at `assets/img/opengraph/<YYYY>/`.
