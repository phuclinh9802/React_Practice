import { useState } from "react";
import "./App.css";
import cc from "./cc.png";
import insight from "./insight.png";
import storage from "./storage.png";

function Tabs() {
  const [toggleState, setToggleState] = useState(1);

  // create name of tab state
  const [tabName, setTabName] = useState("Student");

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <div className="container">
      <div className="bloc-tabs">
        <button
          className={toggleState === 1 ? "tabs active-tabs one" : "tabs"}
          onClick={() => {toggleTab(1); setTabName("Student")}}
        >
          Student
        </button>
        <button
          className={toggleState === 2 ? "tabs active-tabs two" : "tabs"}
          onClick={() => {toggleTab(2); setTabName("Teacher")}}
        >
          Teacher
        </button>
        <button
          className={toggleState === 3 ? "tabs active-tabs three" : "tabs"}
          onClick={() => {toggleTab(3); setTabName("Researcher")}}
        >
          Researcher
        </button>
      </div>

      <div className="content-tabs">
        <div
          className={toggleState === 1 ? "content  active-content" : "content"}
        >
          <div className="h1">
            <h1>Students apply system thinking skills to learn life sciences concepts</h1>
          </div>
          <div className="table">
              <img src={cc} width="75px" height="75px"/>
              <h2>Build Models</h2>
            <p>
              1. Identify and add components<br />
              2. Identify and add relationships
            </p>
            <img className="storage" src={storage} width="75px" height="75px"/>
              <h2>Design Experiments</h2>
            <p>
              1. Set activity for independent variable(s)<br />
              2. Select variables to visualize<br/>
              3. Start/stop/pause the simulations
            </p>
            <img className="insight" src={insight} width="75px" height="75px"/>
              <h2>Interpret Data</h2>
            <p>
              1. Examine simulation graph data<br/>
              2. Interpret the meaning of the results<br/>
              3. Modify the model/simulation based on results
            </p>
            </div>
          
          
          <div className="flex">
          <button className="button-one">Get Started as {tabName}</button>
          </div>
        </div>

        <div
          className={toggleState === 2 ? "content  active-content" : "content"}
        >
          <div className="h1">
            <h1>Help students build transferable systems modeling, simulation, and thinking skills</h1>
          </div>
          <div className="table">
              <img src={cc} width="75px" height="75px"/>
              <h2>Select lessons</h2>
            <p>
              Select ~3-5 lessons to cover a range of biological systems / complexity
            </p>
            <img className="storage" src={storage} width="75px" height="75px"/>
              <h2>Assess immediate skills</h2>
            <p>
              Assess student skills after each lesson
            </p>
            <img className="insight" src={insight} width="75px" height="75px"/>
              <h2>Assess transferable skills</h2>
            <p>
              Assess student skills over time
            </p>
            </div>
          <div className="flex">
          <button className="button-two">Get Started as {tabName}</button>
          </div>
        </div>

        <div
          className={toggleState === 3 ? "content  active-content" : "content"}
        >
          <div className="h1">
            <h1>Build large-scale models of biological systems, validate, simulate, perturb, and analyze data</h1>
          </div>
          <div className="table">
              <img src={cc} width="75px" height="75px"/>
              <h2>Build Models</h2>
            <p>
              Collaboratively construct and annotate comprehensive mechanistic models
            </p>
            <img className="storage" src={storage} width="75px" height="75px"/>
              <h2>Simulate</h2>
            <p>
              Interactively simulate and analyze biological behaviors using a variety of built-in tools
            </p>
            <img className="insight" src={insight} width="75px" height="75px"/>
              <h2>Distribute</h2>
            <p>
              Share, distribute, and re-use models for and within the scientific community
            </p>
            </div>
          <div className="flex">
          <button className="button-three">Get Started as {tabName}</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Tabs;
