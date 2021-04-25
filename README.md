<div style="text-align: center; background-color: #eee">
<img src="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/apple/271/man-astronaut-dark-skin-tone_1f468-1f3ff-200d-1f680.png" alt="component scaffolder logo" >
</div>

# Component Scaffolder

[![NPM](https://img.shields.io/npm/v/component-scaffolder.svg)](https://www.npmjs.com/package/component-scaffolder) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

This is a NodeJS CLI helps you quickly generate your React components either as a JavaScript or TypeScript file. This is really helpful if you work a lot with component libraries and want to save time from manually creating these files by hand.

## Usage

```bash
npx component-scaffolder
```

For component scaffolder to work properly, it assumes that you have a `src` folder and `components` folder in your current working directory.

Follow the prompt that appears and select the type of files you want your components to be in (either JavaScript/TypeScript), and input the name of your component

## What's included?

Component scaffolder includes support for styling with Styled Component, TypeScript types, tests, and Storybook.

- Component.js/ts
- Component.styles.js/ts (for styling with Styled Components)
- Component.types.js/ts (for typescript types)
- Component.test.jsx/tsx (test files)
- Component.stories.js/ts (storybookJS files)

## Libraries using Component Scaffolder

- [Camara Design System](https://github.com/Camaradotspace/camara-react)

## License

MIT © [Component-Scaffolder](https://github.com/Preshonyee/component-scaffolder)

## Thanks

This project would not have been possible without [HarveyD](https://github.com/HarveyD) whose initial templates helped start this whole experiment
