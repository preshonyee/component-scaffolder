module.exports = (componentName) => ({
  content: `import * as React from 'react';
    import {render} from "@testing-library/react";
    import ${componentName} from ".";

    describe('${componentName}', () => {
      it('is truthy', () => {
      expect(${componentName}).toBeTruthy();
      });
    });
    `,
  extension: `.test.jsx`,
});
