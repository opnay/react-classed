// Element
export type Elements = keyof React.ReactHTML;
export type ElementComponent<H extends Elements> = React.ReactHTML[H] extends React.DetailedHTMLFactory<any, infer E>
  ? E
  : never;

// ReturnType<React.forwardRef>
export type ForwardRefComponent<
  T extends Elements,
  P extends React.PropsWithChildren<ClassName> = React.PropsWithChildren<ClassName>
> = React.ForwardRefExoticComponent<React.PropsWithoutRef<P> & React.RefAttributes<ElementComponent<T>>>;

// Class Props
export interface ClassName {
  className?: string;
}
