import React from 'react';
import { ElementComponent, Elements, ForwardRefComponent, ClassName } from '../types';
import useClassName from './useClassName';

export interface IClassed {
  <P extends ClassName>(name: string, classed: string, component: React.ComponentType<P>): React.ComponentType<P>;
}

export interface IClassedRef {
  <K extends Elements>(name: K, classed: string): ForwardRefComponent<K>;
  <K extends Elements>(name: string, classed: string, component: K): ForwardRefComponent<K>;
  <K extends Elements>(name: string, classed: string, component: ForwardRefComponent<K>): ForwardRefComponent<K>;
}

export interface IClassedRefComponent<P extends ClassName> {
  (props: React.PropsWithRef<P>): React.ReactElement | null;
}

function ClassedFunc<P extends React.PropsWithChildren<ClassName>>(
  name: string,
  classed: string,
  component: React.ComponentType<P>
): React.FunctionComponent<P> {
  function ClassedComponent(props: P) {
    const { className } = props;
    const _className = useClassName(classed || name.toLowerCase(), className);
    return React.createElement(component, { ...props, className: _className });
  }

  ClassedComponent.displayName = `Classed.${name}`;

  return ClassedComponent;
}

function ClassedRefFunc<K extends Elements, P extends React.PropsWithChildren<React.ComponentProps<K>>>(
  name: K | string,
  classed?: string,
  component?: K | React.ComponentType
) {
  function ClassedComponent(props: React.PropsWithoutRef<P>, ref: React.Ref<ElementComponent<K>>) {
    const { className } = props;
    const _className = useClassName(classed || name.toLowerCase(), className);
    return React.createElement(component || name, { ...props, className: _className, ref });
  }

  ClassedComponent.displayName = `Classed.${name}`;

  return React.forwardRef(ClassedComponent);
}

export const Classed: IClassed = ClassedFunc;
export const ClassedRef: IClassedRef = ClassedRefFunc;
