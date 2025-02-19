type PizzaProps = {
  name: string;
  ingredients: string;
  photoPath: string;
  price: number;
};

export default function Pizza({
  name,
  ingredients,
  photoPath,
  price,
}: PizzaProps) {
  return (
    <li className="pizza-container">
      <img alt={name} src={photoPath} />
      <div className="pizza-container__description">
        <h4>{name}</h4>
        <p>{ingredients}</p>
        <p className="pizza-container__description__price">${price}</p>
      </div>
    </li>
  );
}
