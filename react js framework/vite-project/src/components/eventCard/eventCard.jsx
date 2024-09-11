import "./eventCard.css";

function EventCard({ color, name, date, place }) {
  return (
    <div className="event-card">
      <h1 style={{color}} className="name">{name}</h1>
      <h2 className="date">{date}</h2>
      <p className="place">{place}</p>
    </div>
  );
}

export default EventCard;
