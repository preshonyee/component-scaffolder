module.exports = (componentName) => ({
  content: `
  import * as React from 'react';
  import ${componentName}Styles from './${componentName}.styles;

    const ${componentName} = (props) => {
        return (
            <${componentName}Styles>
              <h1>Hello ${componentName}</h1>
            </${componentName}Styles>
        )
    }

    export default ${componentName};

    ${componentName}.defaultProps = {}

    ${componentName}.displayName = "${componentName}"
    `,

  extension: `.jsx`,
});
