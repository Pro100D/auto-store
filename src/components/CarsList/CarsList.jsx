import { CarItem } from 'components';

const CarsList = ({ cars }) => {
  console.log(cars);
  return (
    <ul>
      {cars.map(car => (
        <CarItem key={car.id} car={car} />
      ))}
    </ul>
  );
};
export default CarsList;
