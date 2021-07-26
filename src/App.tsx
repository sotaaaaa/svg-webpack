import React from "react";
import { hot } from "react-hot-loader/root";
import Icon from "./assets/icons/icon.svg";

export const App = hot(_App);
export function _App(): JSX.Element | null {
  return (
    <div>
      <Icon fill="red" />
    </div>
  );
}
