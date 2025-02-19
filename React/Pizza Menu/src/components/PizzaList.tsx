import Pizza from "./Pizza";
import { pizzaData } from "../data";

export default function PizzaList() {
  return (
    <>
      <ul className="pizzas">
        {pizzaData.map((pizza) => {
          return (
            <Pizza
              name={pizza.name}
              ingredients={pizza.ingredients}
              photoPath={pizza.photoName}
              price={pizza.price}
              key={pizza.name}
            />
          );
        })}
      </ul>
    </>
  );
}
