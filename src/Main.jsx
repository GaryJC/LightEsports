import "./App.css";
import ReactFullpage from "@fullpage/react-fullpage";
import GameCore from "./Components/GameCore/GameCore";
import VirusGallery from "./Components/VirusGallery/VirusGallery";
import Process from "./Components/Process/Process";
import Chart from "./Components/Charts/Chart";
import Team from "./Components/Team/Team";
import HomePage from "./Components/HomePage/HomePage";
import MobileProcess from "./Components/Process/MobileProcess";
import FinTarget from "./Components/FinTarget/FinTarget";
import Navigation from "./Components/Navigation/Navigation";
import WhatJs from "./Components/WhatLs/WhatLs";
import WhyLight from "./Components/WhyLight/WhyLight";
import Partner from "./Components/Partner/Partner";
import "animate.css";
const anchors = [
  "Home",
  "WhatIsLightEsports",
  "WhyLight",
  "Gallery",
  "FinancingTarget",
  "Token&Liquidity",
  "Core",
  "Process",
  "Team",
  "Partner",
];

const Main = () => {
  const sectionLoaded = [
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
  ];

  return (
    <>
      <Navigation />
      <ReactFullpage
        anchors={anchors}
        navigation
        navigationTooltips={anchors}
        navigat
        scrollingSpeed="1200"
        responsiveWidth={450}
        easing="easeInOutCubic"
        sectionsColor={[
          "#12272a",
          "#12272a",
          "#ffffff",
          "#ffffff",
          "#ffffff",
          "#831858",
          "#831858",
          "#831858",
        ]}
        normalScrollElements=".scrollable-content"
        onLeave={(origin, destination, direction) => {
          // console.log("onLeave event", { origin, destination, direction });
          if (window.innerWidth > 500) {
            sectionLoaded[origin.index] = false;
          }
        }}
        afterLoad={(section, origin, destination, direction, trigger) => {
          sectionLoaded[origin.index] = true;
        }}
        render={({ state, fullpageApi }) => {
          // console.log("render prop change", state, fullpageApi);
          return (
            <div>
              <div className="section">
                <HomePage isLoaded={sectionLoaded[0]} />
              </div>
              <div className="section">
                <WhatJs isLoaded={sectionLoaded[1]} />
              </div>
              <div className="section">
                <WhyLight isLoaded={sectionLoaded[2]} />
              </div>
              <div className="section">
                <VirusGallery isLoaded={sectionLoaded[3]} />
              </div>
              <div className="section">
                <FinTarget isLoaded={sectionLoaded[4]} />
              </div>
              <div className="section">
                <Chart isLoaded={sectionLoaded[5]} />
              </div>
              <div className="section">
                <GameCore isLoaded={sectionLoaded[6]} />
              </div>
              <div className="section">
                {window.innerWidth < 500 ? (
                  <MobileProcess isLoaded={sectionLoaded[7]} />
                ) : (
                  <Process isLoaded={sectionLoaded[7]} />
                )}
              </div>
              <div className="section">
                {/* <div className="slide" dataAnchor="slide1"> */}
                <Team isLoaded={sectionLoaded[8]} />
                {/* </div> */}
                {/* <div className="slide" dataAnchor="slide2"> */}
                {/* <Team isLoaded={sectionLoaded[8]} /> */}
                {/* </div> */}
              </div>
              <div className="section">
                <Partner isLoaded={sectionLoaded[9]} />
              </div>
            </div>
          );
        }}
      />
    </>
  );
};

export default Main;
