import { CarsList, EmptyAndError } from 'components';
import { CatalogSection } from 'pages/CatalogPage/Catalog.styled';
import { useEffect, useState } from 'react';

const FavoritePage = () => {
  const [favorites, setFavorite] = useState(
    () => JSON.parse(localStorage.getItem('favorites')) ?? []
  );
  useEffect(() => {
    const jsonFavorite = JSON.stringify(favorites);
    localStorage.setItem('favorites', jsonFavorite);
  }, [favorites]);
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

  return favorites.length !== 0 ? (
    <CatalogSection>
      <CarsList
        cars={favorites}
        addFavorite={addToFavorite}
        removeFavorite={removeFavorite}
        favorites={favorites}
      />
    </CatalogSection>
  ) : (
    <EmptyAndError
      title={
        "You don't have a favorite car yet. Add cars to your favorites so that there is something here."
      }
    />
  );
};
export default FavoritePage;
