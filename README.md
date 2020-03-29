# classed

>

## Install

```bash
npm install --save @opnay/react-classed
npm install --registry https://npm.pkg.github.com/ --save @opnay/react-classed

yarn add @opnay/react-classed
yarn add --registry https://npm.pkg.github.com/ @opnay/react-classed
```

## Usage

```tsx
import * as React from 'react';

import { ClassedRef } from '@opnay/react-classed';

// this select query as `span.accent`
const Accent = ClassedRef('Accent', 'accent', 'span');

class Example extends React.Component {
  render() {
    return (
      <p>
        This is <Accent>accent</Accent>
      </p>
    );
  }
}
```

## License

Apache License 2.0 © [OPNay](https://github.com/OPNay)
