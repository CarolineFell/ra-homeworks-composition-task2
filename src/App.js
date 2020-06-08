import React from "react";
import moment from "moment";
import Advertising from "./components/Advertising/Advertising";
import Banner from "./components/Banner/Banner";
import Broadcast from "./components/Broadcast/Broadcast";
import Currencies from "./components/Currencies/Currencies";
import Date from "./components/Date/Date";
import MainLinks from "./components/MainLinks/MainLinks";
import MapWidget from "./components/MapWidget/MapWidget";
import News from "./components/News/News";
import Popular from "./components/Popular/Popular";
import ProgramTV from "./components/ProgramTV/ProgramTV";
import SearchBar from "./components/SearchBar/SearchBar";
import WeatherWidget from "./components/WeatherWidget/WeatherWidget";
import * as data from "./data/widgetData";
import "./App.css";

const currentDate = moment();

function App() {
  return (
    <div className="App">
      <div className="ui relaxed grid">
        <div className="nine wide column">
          <div className="ui horizontal segments">
            <div className="ui segment">
              <MainLinks links={data.mainLinks} />
            </div>
            <div className="ui segment">
              <Date date={currentDate} />
            </div>
          </div>
          <div className="ui segment">
            <News news={data.news} />
            <Currencies currency={data.currencies} />
          </div>
        </div>
        <div className="four wide column">
          <Advertising item={data.advertising} />
        </div>
      </div>
      <div className="ui segments">
        <div className="ui segment">
          <SearchBar example={data.searchExample} links={data.searchLinks} />
        </div>
        <div className="ui segment">
          <Banner />
        </div>
        <div className="ui horizontal segments">
          <div className="ui segment">
            <WeatherWidget weather={data.weather} moment={currentDate} />
            <Popular popular={data.popular} />
          </div>
          <div className="ui segment">
            <MapWidget />
            <ProgramTV tv={data.programTV} />
          </div>
          <div className="ui segment">
            <Broadcast broadcasts={data.broadcast} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;