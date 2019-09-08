import React, { Component }  from "react";
import "./App.css";
import ReactDOM from "react-dom";
import FormContainer from './Containers/FormContainer.jsx';


class App extends Component {


  render() {
    const str = ["A CUSTOM-MADE", <br />, "CLEANING SERVICE", <br />, "FOR YOUR BUSINESS"];
    const str2 = [
      "Mythical Maids is ready to become your most trusted", <br />,
      "business associate. By keeping your premises squeaky", <br />,
      "clean, we are determined to help you make your business", <br />,
      "thrive. Let us help you breathe new life into your business!"]
    return (
      <div className="body">

      <div className="background">
        <div className="nav-bar">
          <ul>
            <li className="item-left">Mythical maids</li>
            <li className="item">CONTACT</li>
            <li className="item">WHAT'S INCLUDED</li>
            <li className="item">ABOUT US</li>
            <li className="item">BOOK IN 60 SECONDS</li>
          </ul>
        </div>
        <div className="slogan">
          {str}
        </div>
        <div className="intro" >
          {str2}
        </div>
      </div>
      <div className="form">
        <h3> LET US KNOW HOW TO GET BACK TO YOU. </h3>
        <h5>*Required Field</h5>
        <FormContainer />
      </div>
      </div>
    );
  }
}

export default App;
