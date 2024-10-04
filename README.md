# Welcome to Remix!

- [Remix Docs](https://remix.run/docs)

## Development

From your terminal:

```sh
npm run dev
```

This starts your app in development mode, rebuilding assets on file changes.

## Deployment

First, build your app for production:

```sh
npm run build
```

Then run the app in production mode:

```sh
npm start
```

Now you'll need to pick a host to deploy it to.

### DIY

If you're familiar with deploying node applications, the built-in Remix app server is production-ready.

Make sure to deploy the output of `remix build`

- `build/`
- `public/build/`

### Using a Template

When you ran `npx create-remix@latest` there were a few choices for hosting. You can run that again to create a new
project, then copy over relevant code/assets from your current app to the new project that's pre-configured for your
target server.

Most importantly, this means everything in the `app/` directory, but if you've further customized your current
application outside of there it may also include:

- Any assets you've added/updated in `public/`
- Any updated versions of root files such as `.eslintrc.js`, etc.

```sh
cd ..
# create a new project, and pick a pre-configured host
npx create-remix@latest
cd my-new-remix-app
# remove the new project's app (not the old one!)
rm -rf app
# copy your app over
cp -R ../my-old-remix-app/app app
```

<!-- # remix-saldo-finance

1. Create a new project with npx create-remix@1 --template
   https://github.com/remix-run/remix/tree/remix%401.19.3/templates/remix and npm install
2. Add package for v1 route convention: npm i @remix-run/v1-route-convention@0.1.2
3. Adjust your remix.config.js like so (or to your own taste):

const { createRoutesFromFolders } = require("@remix-run/v1-route-convention");

/** @type {import('@remix-run/dev').AppConfig} \*/ module.exports = { ignoredRouteFiles: ["**/.\*"], // appDirectory:
"app", // assetsBuildDirectory: "public/build", // serverBuildPath: "build/index.js", // publicPath: "/build/",
serverModuleFormat: "cjs", future: { v2_dev: false, v2_errorBoundary: false, v2_headers: false, v2_meta: false,
v2_normalizeFormMethod: false, // makes the warning go away in v1.15+ v2_routeConvention: true }, routes(defineRoutes) {
return createRoutesFromFolders(defineRoutes); } }; 4. In the routes folder, change "\_index.tsx" to "index.tsx" (or .jsx
if you're working in JavaScript) and remove the meta function inside it. 5. Run npm run dev
 -->
