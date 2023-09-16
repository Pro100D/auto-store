import { EmptySection, EmptyTitle } from './EmptyAndError.styled';

const EmptyAndError = ({ title }) => {
  return (
    <EmptySection>
      <EmptyTitle>{title}</EmptyTitle>
    </EmptySection>
  );
};

export default EmptyAndError;
