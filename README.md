# Gatsby Documentation Packager

Package a Gatsby stand-alone build as a runnable app.

It is expected that you already built the stand-alone build of your website. For example, `npm run qt:build:standalone`.

You need to repeat this process for each platform because the node_modules and nwjs app are platform specific.

1. `npm install`
2. Copy your built website public folder to the public folder in a sub-folder matching the `siteId`. Note this folder is .gitignore'd.
3. Update `rundev.js` to set your `siteId`. It must match the product folder under /public, which is the same site-id in your site config.
4. Install the matching OS version of [NWJS](https://nwjs.io/) (macOS, WIndows, Linux).
5. Update `package.json` to match your product. For example, for Qt it would look something like this:

```json
  "name": "arcgis-runtime-api-for-qt",
  "version": "100.12.0",
  "description": "ArcGS Runtime API for Qt",
```

6. Rename nwjs app to match your product. For this example it is renamed to `arcgis-runtime-api-for-qt-100-12.app/exe`.
7. Package the app:
    - compress the files into a zip archive.
