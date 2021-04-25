module.exports = (componentName) => ({
  content: `
  export interface ${componentName}Props {
      /**
      * Foo is for foo
      */
      foo: any;
    };
    `,

  extension: `.types.ts`,
});
