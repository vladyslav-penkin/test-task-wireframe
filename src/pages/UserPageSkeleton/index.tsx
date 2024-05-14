import { FC } from 'react';
import './styles.scss';
import { Container } from '@components/Container';

export const UserPageSkeleton: FC = () => {
  return (
    <Container>
      <div className="UserPageSkeleton">

        <div className="UserPageSkeleton_container">
          <div className="UserPageSkeleton_line"></div>
          <div className="UserPageSkeleton_button"></div>
          <div className="UserPageSkeleton_title"></div>
          <div className="UserPageSkeleton_line"></div>
          <div className="UserPageSkeleton_line"></div>
          <div className="UserPageSkeleton_title"></div>
        </div>

        <div className="UserPageSkeleton_posts">
          <div className="UserPageSkeleton_post"></div>
          <div className="UserPageSkeleton_post"></div>
          <div className="UserPageSkeleton_post"></div>
          <div className="UserPageSkeleton_post"></div>
        </div>
      </div>
    </Container>
  );
};