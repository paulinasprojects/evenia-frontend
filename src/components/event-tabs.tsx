import { useState } from "react";
import Tabs from "./tabs";
import AllEvents from "./all-events";
import EventContent from "./events-content";

import "@/styles/events-tabs.scss";
import DesignEvents from "./design-events";
import ProgrammingEvents from "./programming-events";
import DigitalMarketingEvents from "./digital-marketing-events";
import FinanceEvents from "./finance-events";

const EventTabs = () => {
  const [toggleState, setToggleState] = useState(1);

  const getContent = () => {
    switch (toggleState) {
      case 1:
      return <AllEvents/>;
      case 2:
      return <DesignEvents/>;
      case 3: 
      return <ProgrammingEvents/>;
      case 4: 
      return <DigitalMarketingEvents/>;
      case 5: 
      return <FinanceEvents/>;
      case 6: 
      return <AllEvents/>;
      case 7: 
      return <AllEvents/>;
      case 8: 
      return <AllEvents/>;
      default: 
      return null;
    }
  };

  return (
    <div>
    <div>
      <div className="events-tabs">
        <Tabs
          label="All"
          isActive={toggleState === 1}
          onClick={() => setToggleState(1)}
        />
        <Tabs
          label="Design"
          isActive={toggleState === 2}
          onClick={() => setToggleState(2)}
        />
        <Tabs
          label="Programming"
          isActive={toggleState === 3}
          onClick={() => setToggleState(3)}
        />
        <Tabs
          label="Digital Marketing"
          isActive={toggleState === 4}
          onClick={() => setToggleState(4)}
        />
        <Tabs
          label="Finance"
          isActive={toggleState === 5}
          onClick={() => setToggleState(5)}
        />
        <Tabs
          label="Social Media"
          isActive={toggleState === 6}
          onClick={() => setToggleState(6)}
        />
        <Tabs
          label="Investing"
          isActive={toggleState === 7}
          onClick={() => setToggleState(7)}
        />
        <Tabs
          label="Soft Skills"
          isActive={toggleState === 8}
          onClick={() => setToggleState(8)}
        />
      </div>
    </div>
    <div>
      <EventContent content={getContent()}/>
    </div>
    </div>
  );
};

export default EventTabs;