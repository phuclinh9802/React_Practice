import { useState } from "react";
import "./App.css";

function Tabs() {
  const [toggleState, setToggleState] = useState(1);

  // create name of tab state
  const [tabName, setTabName] = useState("Tab 1");

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <div className="container">
      <div className="bloc-tabs">
        <button
          className={toggleState === 1 ? "tabs active-tabs one" : "tabs"}
          onClick={() => {toggleTab(1); setTabName("Tab 1")}}
        >
          Tab 1
        </button>
        <button
          className={toggleState === 2 ? "tabs active-tabs two" : "tabs"}
          onClick={() => {toggleTab(2); setTabName("Tab 2")}}
        >
          Tab 2
        </button>
        <button
          className={toggleState === 3 ? "tabs active-tabs three" : "tabs"}
          onClick={() => {toggleTab(3); setTabName("Tab 3")}}
        >
          Tab 3
        </button>
      </div>

      <div className="content-tabs">
        <div
          className={toggleState === 1 ? "content  active-content" : "content"}
        >
          <h2>Content 1</h2>
          <hr />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
            praesentium incidunt quia aspernatur quasi quidem facilis quo nihil
            vel voluptatum?
          </p>
          <div className="flex">
          <button className="button-one">{tabName}</button>
          </div>
        </div>

        <div
          className={toggleState === 2 ? "content  active-content" : "content"}
        >
          <h2>Content 2</h2>
          <hr />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente
            voluptatum qui adipisci.
          </p>
          <div className="flex">
          <button className="button-two">{tabName}</button>
          </div>
        </div>

        <div
          className={toggleState === 3 ? "content  active-content" : "content"}
        >
          <h2>Content 3</h2>
          <hr />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos sed
            nostrum rerum laudantium totam unde adipisci incidunt modi alias!
            Accusamus in quia odit aspernatur provident et ad vel distinctio
    
          </p>
          <div className="flex">
          <button className="button-three">{tabName}</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Tabs;
