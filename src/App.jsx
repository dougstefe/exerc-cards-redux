import "./App.css"
import Average from "./components/Average";

import Interval from "./components/Interval";
import Random from "./components/Random";
import Sum from "./components/Sum";

export default function App(props){
    return(
        <div>
            <div className="container">
                <Interval />
            </div>
            <div className="container">
                <Sum />
                <Average />
                <Random />
            </div>
        </div>
        
    )
}