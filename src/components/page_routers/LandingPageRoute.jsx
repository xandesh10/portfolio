import React from "react";
import UseWindowSize from "../../hooks/UseWindowSize";
import DesktopLandingPage from "../desktop/DesktopLandingPage";
import MobileLandingPage from "../small/MobileLandingPage";

function LandingPageRoute() {
    const width = UseWindowSize();

    return width < 1024
        ? <MobileLandingPage />
        : <DesktopLandingPage />;
}

export default LandingPageRoute;