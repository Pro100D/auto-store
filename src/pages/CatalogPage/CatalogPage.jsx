import { fetchCars } from 'api/fetchCars';
import { CarsList, EmptyAndError } from 'components';
import { useEffect, useState } from 'react';
import { CatalogSection, LoadMoreBtn } from './Catalog.styled';

const CatalogPage = () => {
  const [cars, setCars] = useState([]);
  const [favorites, setFavorite] = useState(
    () => JSON.parse(localStorage.getItem('favorites')) ?? []
  );
  const [page, setPage] = useState(2);

  const loadMoreBtn = async () => {
    setPage(prevState => prevState + 1);

    const currentCars = await fetchCars(page);

    setCars(prevState => [...prevState, ...currentCars]);
  };

  const addToFavorite = car => {
    setFavorite(prevState => [...prevState, car]);
  };

  const removeFavorite = car => {
    const itFavoriteCar = favorites.findIndex(carFind => carFind.id === car.id);

    if (itFavoriteCar !== -1) {
      const localStorageFavorite = JSON.parse(
        localStorage.getItem('favorites')
      );
      const filter = localStorageFavorite.splice(itFavoriteCar, 1);

      setFavorite(prevState =>
        prevState.filter(value => value.id !== filter[0].id)
      );
    }
  };
  useEffect(() => {
    (async () => {
      setCars(await fetchCars(1));
    })();
  }, []);

  useEffect(() => {
    const jsonFavorite = JSON.stringify(favorites);
    localStorage.setItem('favorites', jsonFavorite);
  }, [favorites]);

  return cars.length !== 0 ? (
    <CatalogSection>
      <CarsList
        cars={cars}
        addFavorite={addToFavorite}
        removeFavorite={removeFavorite}
        favorites={favorites}
      />
      {cars.length < 32 && (
        <LoadMoreBtn type="button" onClick={loadMoreBtn}>
          Load more
        </LoadMoreBtn>
      )}
    </CatalogSection>
  ) : (
    <EmptyAndError title={'Sorry, there was an error, try again later'} />
  );
};
export default CatalogPage;
