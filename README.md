# <a href="https://www.albertomh.com" target="_blank">albertomh.com</a>

My personal site - an 11ty static site deployed on Cloudflare Pages. Uses Bootstrap 5.


## Develop
Uses Parcel as its bundler. Parcel is also responsible for transpiling SCSS to CSS.  
Serve locally with `npm run dev`.

Enable debug mode with `DEBUG=Eleventy* npx @11ty/eleventy`.


### Build
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

### Add a new post
1. Copy `assets/html/_template.njk` to the relevant position in the src tree and rename.
2. Uncomment the `layout` and `tags` properties in the front matter.
3. Create a dropcap and a headline image to accompany the post (see below).

### Create a new dropcap
1. Copy `assets/img/dropcap/_dropcap_template.svg` to the relevant 
`assets/img/dropcap/<year>/` directory and rename.
2. Design the new dropcap svg. Remember to use 'Simplify path' (Ctrl + L) in Inkscape to reduce image size for complex designs.
3. Use it with `<p class="content dropcap" style="--dropcap-url: url('/assets/img/dropcap/YYYY/slug.svg');">` as the first paragraph tag. 

### Generate code snippets
1. Populate the `<code>` tag in `hljs.njk`.
2. Navigate to `/hljs` and copy the resulting markup.
3. Use in a post by wrapping in `<pre><code class="hljs"> </code></pre>`.

### Create a new headline image
1. Copy `assets/img/post/_post_img_template.svg` to the relevant 
`assets/img/post/<year>/` directory and rename.
2. Design the new headline image.

### Create a new OpenGraph image
1. Create a 1200x630 image.
2. Place the post's svg at a size of 567x567 in the middle.
3. Save as a png and save at `assets/img/opengraph/<YYYY>/`.
