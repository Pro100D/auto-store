import { fetchCars } from 'api/fetchCars';
import { CarsList } from 'components';
import { useEffect, useState } from 'react';

const CatalogPage = () => {
  const [cars, setCars] = useState([]);
  useEffect(() => {
    (async () => {
      setCars(await fetchCars());
    })();
  }, []);

  return <CarsList cars={cars} />;
};
export default CatalogPage;
