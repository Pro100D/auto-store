import { CarItem } from 'components';
import { CatalogList } from './CarsList.styled';

const CarsList = ({ cars, addFavorite, removeFavorite, favorites }) => {
  return (
    <CatalogList>
      {cars.map(car => (
        <CarItem
          key={car.id}
          car={car}
          addToFavorite={addFavorite}
          removeFavorite={removeFavorite}
          favorites={favorites}
        />
      ))}
    </CatalogList>
  );
};
export default CarsList;
