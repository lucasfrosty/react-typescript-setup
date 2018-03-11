import * as React from 'react';

export interface IHelloProps {
  name: string;
}

export default (props: IHelloProps) => <h1>Hello {props.name}! :)</h1>;
