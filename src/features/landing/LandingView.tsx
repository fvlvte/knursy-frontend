import type React from "preact";
import TopBar from "./components/TopBar.tsx";
import "./LandingView.css";
const LandingView: React.FunctionComponent = () => {
    return <>
        <div className={"rootContainer"}>
            <div className={"topContainer"}><TopBar/></div>
            <div className={"sloganBox"}></div>
            <div className={"actionBox"}></div>
        </div>
    </>
}

export default LandingView;
