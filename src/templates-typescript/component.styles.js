module.exports = (componentName) => ({
  content: `
  import styled, { css } from 'styled-components';
  import ${componentName}Props from './${componentName}.types';

  export const ${componentName}Styles = styled.div<${componentName}Props>

    `,

  extension: `.styles.ts`,
});
