import {
  InfoCarItem,
  InfoCarList,
  NameCarText,
} from 'components/CarItem/CarItem.styled';

const {
  Container,
  ProfileCancelBtn,
  CloseIcon,
  ModalImgContainer,
  ModalImg,
  ContainerTextInModal,
  DescriptionCar,
  Title,
  RentalList,
  RentalItem,
  Span,
  RentalBtn,
} = require('./Modal.styled');

const Modal = ({
  cancelClick,
  car: {
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
  },
}) => {
  const AccessoriesAndFunctionalities = [...accessories, ...functionalities];
  const splitRentalConditions = rentalConditions
    .replaceAll('\n', ',')
    .split(',');

  const mileageToString = mileage.toString();

  return (
    <Container>
      <ProfileCancelBtn onClick={cancelClick}>
        <CloseIcon size={24} />
      </ProfileCancelBtn>

      <div>
        <ModalImgContainer>
          <ModalImg src={img} alt="car" />
        </ModalImgContainer>

        <NameCarText>
          {make} <span style={{ color: '#3470FF' }}>{model}</span>, {year}
        </NameCarText>
        <ContainerTextInModal>
          <InfoCarList>
            <InfoCarItem>{splitAddress[1]}</InfoCarItem>
            <InfoCarItem>{splitAddress[2]}</InfoCarItem>
            <InfoCarItem>{`id: ${id}`}</InfoCarItem>
            <InfoCarItem>{`year: ${year}`}</InfoCarItem>
            <InfoCarItem>{`type: ${type}`}</InfoCarItem>
            <InfoCarItem>{`Engine Size: ${engineSize}`}</InfoCarItem>
            <InfoCarItem>{`Fuel Consumption: ${fuelConsumption}`}</InfoCarItem>
          </InfoCarList>
        </ContainerTextInModal>
        <DescriptionCar>{description}</DescriptionCar>
        <div>
          <Title>Accessories and functionalities:</Title>
          <InfoCarList>
            {AccessoriesAndFunctionalities.map(elem => (
              <InfoCarItem key={elem}>{elem}</InfoCarItem>
            ))}
          </InfoCarList>
        </div>
        <div>
          <Title>Rental Conditions:</Title>
          <RentalList>
            <RentalItem>{splitRentalConditions[0]}</RentalItem>
            <RentalItem>{splitRentalConditions[1]}</RentalItem>
            <RentalItem>{splitRentalConditions[2]}</RentalItem>
            <RentalItem>
              Mileage:{' '}
              <Span>{`${mileageToString[0]},${mileageToString.slice(1)}`}</Span>
            </RentalItem>
            <RentalItem>
              Price: <Span>{`${rentalPrice}`}</Span>
            </RentalItem>
          </RentalList>
        </div>
        <RentalBtn href="tel:+380730000000">Rental Car</RentalBtn>
      </div>
    </Container>
  );
};
export default Modal;
