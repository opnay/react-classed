function classNames(...names: any[]): string {
  const ret = [];

  for (const name of names) {
    const t = typeof name;

    switch (t) {
      case 'string':
      case 'number':
        ret.push(name);
        break;
      case 'object':
        if (Array.isArray(name)) {
          const _names = classNames(...name);
          ret.push(_names);
        } else if (Object.toString !== name.toString) {
          ret.push(name.toString());
        }
        break;
      case 'undefined':
      default:
        break;
    }
  }

  return ret.join(' ');
}

export default classNames;
