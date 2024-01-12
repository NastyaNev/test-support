import React from "react";
import "./Main.scss";
import TopBlock from "../../components/top-block/TopBlock";
import Social from "../../components/social/Social";
import Faq from "../../components/faq/Faq";
import Ref from "../../components/ref/Ref";

function Main() {
  return (
    <main className="main-page">
        <TopBlock />
        <Social />
        <Faq />
        <Ref />
    </main>
  );
}

export default Main;
