import Card from "./components/Card";
import { fruits } from "./components/fruits.js";

export default function App() {
  return (
    <div className="app">
      {fruits.map((fruit) => {
        return (
          <Card
            key={fruit.id}
            id={fruit.id}
            name={fruit.name}
            color={fruit.color}
          />
        );
      })}
    </div>
  );
}
