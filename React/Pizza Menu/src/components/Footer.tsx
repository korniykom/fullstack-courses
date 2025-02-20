export default function Footer() {
  const hour = new Date().getHours();
  const openHour = 12;
  const closeHour = 22;
  const isOpen = hour >= openHour && hour <= closeHour;
  return (
    <div className="footer">
      <div className="order">
        {isOpen ? (
          <p>We're open until {closeHour}:00. Come visit us or order online.</p>
        ) : (
          <p>
            We're happy to welcome you between {openHour} and {closeHour}{" "}
          </p>
        )}
        <button className="button">Order</button>
      </div>
    </div>
  );
}
