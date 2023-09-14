import "./Card.css";

export default function Card({ name, color }) {
  return (
    <div className={`card card--${color}`}>
      <h1>{name}</h1>
      <p>{color}</p>
    </div>
  );
}
