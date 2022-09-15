import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import BasicCard from "./App";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <BasicCard
      title="Moon Fever"
      txt1=" So what are these strange lights in the sky? Are they aliens invading
      from Mars?Are they coming to start the next ice age?"
      bname1="Lost"
      price="$415"
      bname2="design"
      bname3="Hubble"
    />
    <BasicCard
      title="Space the final frontier"
      txt1="Usually the astronomy magzine or site will give you a general time and location to be ready to look when the meteroids start to falll"
      bname1="project"
      price="$87"
      bname2="Digital"
    />

    <BasicCard
      title="Moon Gazing"
      txt1="Comets are big source of meteroids because of the nature of those long tails. A large amount of dust,ice and other space debris."
      bname1="Lost"
      price="$200"
      bname2="design"
    />
  </StrictMode>
);
