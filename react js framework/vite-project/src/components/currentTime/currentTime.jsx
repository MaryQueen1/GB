const CurrentTime = () => {
  const now = new Date().toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
    // second: "2-digit",
  });
  return (
    <div>
      <p>Текущее время: {now}</p>
    </div>
  );
};

export default CurrentTime;
