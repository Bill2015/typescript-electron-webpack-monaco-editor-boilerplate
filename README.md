# Typescript-Electron-Webpack-Monaco-editor-Boilerplate


> Here is my reference basic boilerplate [electron-react-typescript-webpack-boilerplate ](https://github.com/Devtography/electron-react-typescript-webpack-boilerplate)

Pre-configured Electron.js + TypeScript + Monaco-editor boilerplate with 
Webpack v5 & linters config predefined.

## Main Dependencies
 - Electron
 - Typescript
 - Webpack
 - *Monaco-editor
 - *Isomorphic-git
 - *Diff

  > If you don't want use some dependencies above. You can modify package.json and remove dependencies before you install it. But be careful, only have star in front of dependencies can remove, otherwise may cause error in building project

## Getting started
```sh
// execute
git clone https://github.com/Bill2015/typescript-electron-webpack-monaco-editor-boilerplate.git
```

```json
// edit the following fields in package.json for your own project
{
  "name": your-project-name,
  "version": whatever-you-like,
  "description": your-own-description,
  "build": {
    "appId": your-app-id,
    "productName": your-product-name,
    "buildVersion": your-build-number
  },
  "author": who's-the-author?,
  "license": if-you-don't-want-to-use-MIT,
  "repository": type-and-link-of-your-repo,
  "keywords": keywords-of-your-project,
  "bugs": issue-page-of-your-repo,
  "homepage": homepage-of-your-repo
}
```

Then install all the `node_modules` needed by executing the following command:
```sh
cd typescript-electron-webpack-monaco-editor-boilerplate
npm install --also-dev
```

Finally execute the following command to start Webpack in development mode and 
watch the changes on source files for live rebuild on code changes.
```sh
npm run dev
```

The `npm run dev` command won't start your app and get your app shows on the 
screen. To start your app, execute the following command:
```sh
npm start
```

## Building the installer for your Electron app
The boilerplate is currently configured to package & build the installer of 
your app for macOS & Windows using `electron-builder`. 

For macOS, execute:
```sh
npm run prod
npm run build:mac
```

For Windows, execute:
```sh
npm run prod
npm run build:win
```
_**`asar` archiving may cause errors while running the installed Electron app 
based on pervious experiences, whereas the macOS build with `asar` enabled 
works just fine. You can turn it off by changing `asar` to `false` in
`package.json` line 26.**_

### Extra options
The build scripts are pre-configured to build 64 bit installers since 64 bit 
should be the standard for a modern applications. 32 bit builds are still 
possible by changing the build scripts in `package.json` as below:
```json
// from
"scripts": {
    ...
    "build:win": "electron-builder build --win --x64",
    "build:mac": "electron-builder build --mac --x64"
},

// to
"scripts": {
    ...
    "build:win": "electron-builder build --win --ia32",
    // Works only on macOS version < 10.15
    "build:mac": "electron-builder build --mac --ia32"
},
```

Builds for Linux, armv71, and arm64 can also be configured by modifying the 
build scripts in `package.json`, but those aren't tested yet. For details, 
please refer to [documents of `electron-builder`](https://www.electron.build/cli).

## Known issues
1. As Apple introduced the [notarization requirements] with the public release
   of `macOS 10.14.5`, apps built for `macOS` are now needed to be signed with
   a valid Developer ID certificate and let Apple notarizes it for you. This
   boilerplate doesn't include the notarization setup as of the `3.0.0` release,
   but up until now, you should still be able to run your Electron app by
   allowing your app to be opened in `System Preferences -> Security & Privacy
   -> General` without notarizing it for still (tested on `macOS 11.1`).

   If you want to notarization your app using this boilerplate before those
   settings are included in the future updates, you can try follow the guides on
   issue [electron-builder #3870].

2. [`electron-builder@22.10.4`] added Apple Silicon and universal binary
   supports, but it's still a pre-release instead of a stable one so the one
   included in this boilerplate is still staying on `22.9.1` which doesn't
   support building the universal binary yet.

## The Oringinal Author
[Wing Chau](https://github.com/iamWing) [@Devtography](https://github.com/Devtography)


## License
Electron React TypeScript Webpack Boilerplate is open source software 
[licensed as MIT](LICENSE).

[notarization requirements]: https://developer.apple.com/news/?id=04102019a
[electron-builder #3870]: https://github.com/electron-userland/electron-builder/issues/3870
[`electron-builder@22.10.4`]: https://github.com/electron-userland/electron-builder/releases/tag/v22.10.4
[donations]: https://github.com/sponsors/iamWing







# ????????????
# Typescript-Electron-Webpack-Monaco-editor-Boilerplate


> ???????????????????????? [electron-react-typescript-webpack-boilerplate ](https://github.com/Devtography/electron-react-typescript-webpack-boilerplate)

Electron.js + TypesScript + Monaco-editor ????????????????????????????????? Webpack5 ????????????????????????

## ?????????????????????
 - Electron
 - Typescript
 - Webpack
 - *Monaco-editor
 - *Isomorphic-git
 - *Diff

  > ????????????????????????????????????????????? package.json ??????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????

## ????????????
```sh
// ??????
git clone https://github.com/Bill2015/typescript-electron-webpack-monaco-editor-boilerplate.git
```

```json
// ?????????????????????????????? package.json ?????????
{
  "name": your-project-name,
  "version": whatever-you-like,
  "description": your-own-description,
  "build": {
    "appId": your-app-id,
    "productName": your-product-name,
    "buildVersion": your-build-number
  },
  "author": who's-the-author?,
  "license": if-you-don't-want-to-use-MIT,
  "repository": type-and-link-of-your-repo,
  "keywords": keywords-of-your-project,
  "bugs": issue-page-of-your-repo,
  "homepage": homepage-of-your-repo
}
```

??????????????? `node_modules` ????????????????????????:
```sh
cd typescript-electron-webpack-monaco-editor-boilerplate
npm install --also-dev
```

?????????????????????????????????????????????????????????????????? Webpack ??? watch ???????????????????????????????????????
```sh
npm run dev
```

??? `npm run dev` ??????????????????????????????????????????????????????????????????????????????:
```sh
npm start
```

## ????????? Electron ????????????????????????
???????????? `electron-builder` ????????? Electron ??????????????????. 

For macOS, execute:
```sh
npm run prod
npm run build:mac
```

For Windows, execute:
```sh
npm run prod
npm run build:win
```
_**`asar` archiving may cause errors while running the installed Electron app 
based on pervious experiences, whereas the macOS build with `asar` enabled 
works just fine. You can turn it off by changing `asar` to `false` in
`package.json` line 26.**_

### Extra options
The build scripts are pre-configured to build 64 bit installers since 64 bit 
should be the standard for a modern applications. 32 bit builds are still 
possible by changing the build scripts in `package.json` as below:
```json
// from
"scripts": {
    ...
    "build:win": "electron-builder build --win --x64",
    "build:mac": "electron-builder build --mac --x64"
},

// to
"scripts": {
    ...
    "build:win": "electron-builder build --win --ia32",
    // Works only on macOS version < 10.15
    "build:mac": "electron-builder build --mac --ia32"
},
```
## The Oringinal Author
[Wing Chau](https://github.com/iamWing) [@Devtography](https://github.com/Devtography)


## License
Electron React TypeScript Webpack Boilerplate is open source software 
[licensed as MIT](LICENSE).

[notarization requirements]: https://developer.apple.com/news/?id=04102019a
[electron-builder #3870]: https://github.com/electron-userland/electron-builder/issues/3870
[`electron-builder@22.10.4`]: https://github.com/electron-userland/electron-builder/releases/tag/v22.10.4
[donations]: https://github.com/sponsors/iamWing

