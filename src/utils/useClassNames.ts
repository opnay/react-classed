import classNames from './classNames';
import React from 'react';

function useClassNames(...names: any[]): string {
  return React.useMemo(() => classNames(names), [names]);
}

export default useClassNames;
