module.exports = (componentName) => ({
  content: `
  import styled, { css } from 'styled-components';

  export const ${componentName}Styles = styled.div

    `,

  extension: `.styles.js`,
});
