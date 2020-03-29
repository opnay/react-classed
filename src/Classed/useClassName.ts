interface IString {
  toString(): string;
}

function useClassName<N = string | IString>(...names: N[]) {
  return names.filter((it) => typeof it !== 'undefined' && it !== null).join(' ');
}

export default useClassName;
