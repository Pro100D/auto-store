const CarItem = ({
  car: {
    img,
    make,
    model,
    rentalPrice,
    type,
    address,
    rentalCompany,
    id,
    functionalities,
    year,
  },
}) => {
  return (
    <li>
      <img width="274" src={img} alt="car" />
      <div>
        <p>
          {make} <span>{model}</span>, {year}
        </p>
        <p>{rentalPrice}</p>
      </div>
    </li>
  );
};
export default CarItem;
