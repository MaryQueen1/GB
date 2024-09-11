import "./App.css";
import CurrentTime from "./components/currentTime/currentTime";
import EventCard from "./components/eventCard/eventCard";
import Greating from "./components/greating";

function App() {
  return (
    <div>
      <Greating />
      <CurrentTime />
      <ul className="event-card-app">
        <EventCard name="Мероприятие 1" date="23:44" place="Санкт-Петербург" color="red"/>
        <EventCard name="Мероприятие 2" date="14:45" place="Казань" color="green"/>
        <EventCard name="Мероприятие 3" date="12:16" place="Москва" color="blue"/>
      </ul>
    </div>
  );
}

export default App;
