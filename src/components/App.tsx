import * as React from 'react';
import * as s from './App.css';

export interface IHelloProps {
  name: string;
}

export default (props: IHelloProps) =>
  <h1 className={`${s.red} ${s.uppercase}`}>Hello {props.name}! :)</h1>;
