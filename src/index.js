import React from "react";
import { render } from "react-dom";

import Sayac from "./components/Sayac";
import Input from "./components/Input";
import RuhHalleri from "./components/RuhHalleri";
import Dondurucu from "./components/Dondurucu";
import Kareler from "./components/Kareler";
import Programcilar from "./components/Programcilar";

render(
  <>
    <Sayac />
    <RuhHalleri />
    <Dondurucu />
    <Input />
    <Kareler />
    <Programcilar />
  </>,
  document.querySelector("#root")
);
