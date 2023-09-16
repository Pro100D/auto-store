import { Backdrop, Modal } from 'components';
import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { IoMdHeart, IoMdHeartEmpty } from 'react-icons/io';
import {
  FavoriteBtn,
  Img,
  ImgContainer,
  InfoCarItem,
  InfoCarList,
  ItemCar,
  NameCarText,
  ReadMoreBtn,
  TextContainer,
} from './CarItem.styled';

const modalRoot = document.querySelector('#modal-root');

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
    engineSize,
    fuelConsumption,
    description,
    accessories,
    rentalConditions,
    mileage,
  },
  addToFavorite,
  removeFavorite,
  favorites,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const splitAddress = address.split(',');

  const itIsFavoriteCar = favorites.some(value => value.id === id);
  useEffect(() => {
    const handleClickEsp = e => {
      if (e.code === 'Escape') {
        setIsOpen(false);
        return;
      }
    };
    document.addEventListener('keydown', handleClickEsp);
    return () => {
      document.removeEventListener('keydown', handleClickEsp);
    };
  }, []);

  const handleCloseModal = () => {
    setIsOpen(prevState => setIsOpen(!prevState));
  };

  const handleClickOverlay = e => {
    if (e.target === e.currentTarget) {
      setIsOpen(prevState => !prevState);
    }
  };

  const isModalOpen = () => {
    if (isOpen) {
      return (document.body.style.overflow = 'hidden');
    }
    return (document.body.style.overflow = 'auto');
  };

  isModalOpen();

  return (
    <ItemCar>
      <ImgContainer>
        <Img
          width="274"
          src={
            img
              ? img
              : 'https://dummyimage.com/274x268/000/c7c7c7?text=Error 404'
          }
          alt="car"
        />
        {itIsFavoriteCar ? (
          <FavoriteBtn
            type="button"
            onClick={() =>
              removeFavorite({
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
                engineSize,
                fuelConsumption,
                description,
                accessories,
                rentalConditions,
                mileage,
              })
            }
          >
            <IoMdHeart size={20} color="#3470FF" />
          </FavoriteBtn>
        ) : (
          <FavoriteBtn
            type="button"
            onClick={() =>
              addToFavorite({
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
                engineSize,
                fuelConsumption,
                description,
                accessories,
                rentalConditions,
                mileage,
              })
            }
          >
            <IoMdHeartEmpty size={20} color="#FFFFFF" />
          </FavoriteBtn>
        )}
      </ImgContainer>
      <TextContainer>
        <NameCarText>
          {make} {year}
        </NameCarText>
        <NameCarText>{rentalPrice}</NameCarText>
      </TextContainer>
      <InfoCarList>
        <InfoCarItem>{splitAddress[1]}</InfoCarItem>
        <InfoCarItem>{splitAddress[2]}</InfoCarItem>
        <InfoCarItem>{rentalCompany}</InfoCarItem>
        <InfoCarItem>{type}</InfoCarItem>
        <InfoCarItem>{model}</InfoCarItem>
        <InfoCarItem>{id}</InfoCarItem>
      </InfoCarList>
      <ReadMoreBtn
        type="button"
        onClick={() => setIsOpen(prevState => !prevState)}
      >
        Learn more
      </ReadMoreBtn>
      {isOpen &&
        createPortal(
          <Backdrop onClick={handleClickOverlay}>
            <Modal
              cancelClick={handleCloseModal}
              car={{
                img,
                make,
                model,
                type,
                splitAddress,
                id,
                functionalities,
                year,
                engineSize,
                fuelConsumption,
                description,
                accessories,
                rentalPrice,
                rentalConditions,
                mileage,
              }}
            />
          </Backdrop>,
          modalRoot
        )}
    </ItemCar>
  );
};
export default CarItem;
