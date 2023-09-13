import "./styles.css";

export default function App() {
  return <Greeting name="Jan" />;
}

const Greeting = ({ name }) => {
  return name === "Jan" ? <h1>Hello Coach!</h1> : <h1>Hello {name}!</h1>;
};
