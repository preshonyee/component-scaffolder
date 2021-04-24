# Component Scaffolder

[![NPM](https://img.shields.io/npm/v/component-scaffolder.svg)](https://www.npmjs.com/package/component-scaffolder) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

This is a NodeJS CLI helps you quickly generate your React components either as a JavaScript or TypeScript file. This is really helpful if you work a lot with component libraries and want to save time from manually creating these files by hand.

## Usage

Recommended

```bash
npx component-scaffolder
```

Alternatives

```bash
npm install --dev component-scaffolder

# or

yarn add --dev component-scaffolder
```

For component scaffolder to work properly, it assumes that you have a `src` folder and `components` folder in your current working directory.

Follow the prompt that appears and select the type of files you want your components to be in (either JavaScript/TypeScript), and input the name of your component

## What's included?

Component scaffolder includes support for styling with SASS, TypeScript types, tests, and Storybook.

- Component.js/ts
- Component.scss (for styling)
- Component.types.js/ts (for typescript types)
- Component.test.jsx/tsx (test files)
- Component.stories.js/ts (storybookJS files)
- index.js/ts

## License

MIT © [Component-Scaffolder](https://github.com/Preshonyee/component-scaffolder)

## Thanks

This project would not have been possible without [HarveyD](https://github.com/HarveyD) whose initial templates helped start this whole experiment
