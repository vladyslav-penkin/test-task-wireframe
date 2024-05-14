import { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import { Banner } from '@components/Banner';
import { Container } from '@components/Container';
import locationNotFound from '@assets/icons/location-not-found.png';

export const NotFoundPage: FC = () => {
  const navigate = useNavigate();
  return (
    <Container>
      <Banner
        icon={locationNotFound}
        title="Oops, this page doesn`t exist..."
        buttonTitle="Take me home!"
        onClick={() => navigate('/')}
      />
    </Container>
  );
};