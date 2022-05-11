# <a href="https://www.albertomh.com" target="_blank">albertomh.com</a>

My personal site - an Angular application deployed as a static site on Cloudflare Pages.


## Develop
Uses Parcel as its bundler. Parcel is also responsible for transpiling SCSS to CSS.

Serve locally with `npm run dev`.


## Build
Build with `npm run build`.


## Deploy
Hosted by Cloudflare Pages. Deployments are triggered by pushes to the `dist` branch.  

Cloudflare Pages uses the following build configuration:  
- No framework preset.  
- Build command: `npm run build`.  
- Build output directory: `/dist`.  

Environment variables:  

| Variable name | Value       |
| ------------- | ----------- |
| NODE_VERSION  | 17.8.0      |

**Trigger a deployment by running `publish.sh`.**  
