import { FC } from 'react';
import './styles.scss';
import { Container } from '@components/Container';

export const UsersPageSkeleton: FC = () => {
  return (
    <Container>
      <div className="UsersPageSkeleton">
        <div className="UsersPageSkeleton_title"></div>

        <div className="UsersPageSkeleton_container">
          <div className="UsersPageSkeleton_dropdown"></div>
          <div className="UsersPageSkeleton_dropdown"></div>
        </div>

        <div className="UsersPageSkeleton_posts">
          <div className="UsersPageSkeleton_post"></div>
          <div className="UsersPageSkeleton_post"></div>
          <div className="UsersPageSkeleton_post"></div>
          <div className="UsersPageSkeleton_post"></div>
        </div>
      </div>
    </Container>
  );
};