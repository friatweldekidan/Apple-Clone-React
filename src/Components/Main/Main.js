import React from "react";

import AlertSection from "./AlertSection/AlertSection";
import FirstSection from "./FirstSection/FirstSection";
import SecondSection from "./SecondSection/SecondSection";
import ThirdSection from "./ThirdSection/ThirdSection";
import FourthSection from "./FourthSection/FourthSection";
import FifthSection from "./FifthSection/FifthSection";
import SixthSection from "./SixthSection/SixthSection";
import YoutubeVideos from "../YouTube/YoutubeVideos";

function App() {
  return (
    <div>
      <AlertSection />
      <FirstSection />
      <SecondSection />
      <ThirdSection />
      <FourthSection />
      <FifthSection />
      <SixthSection />
      <YoutubeVideos />
    </div>
  );
}

export default App;
