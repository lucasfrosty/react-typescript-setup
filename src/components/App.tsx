import * as React from "react";

export interface HelloProps {
  name: string;
};

export default (props: HelloProps) => <h1>Hello {props.name}! :)</h1>;