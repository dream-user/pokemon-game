import HeaderBlock from "./components/HeaderBlock";
import LayoutBlock from "./components/LayoutBlock";
import FooterBlock from "./components/FooterBlock";

import React from "react";

import BackgroundImage from './assets/index.js';

const App = () => {
  return (
    <>
      <HeaderBlock
        title="This is title"
        descr="This is Description!"
      />
      <LayoutBlock
        title="This is title"
        descr="This is Description!"
        urlBg={BackgroundImage.FirstBackground}
        colorBg="#e2e2e2"
      />
      <LayoutBlock
        title="This is title"
        descr="This is Description!"
        colorBg="#e2e2e2"
      />
      <LayoutBlock
        title="This is title"
        descr="This is Description!"
        urlBg={BackgroundImage.SecondBackground}
        colorBg="#e2e2e2"
      />
      <FooterBlock />
    </>
  );
}

export default App;