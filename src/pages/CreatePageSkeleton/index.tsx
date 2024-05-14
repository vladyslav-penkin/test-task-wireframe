import { FC } from 'react';
import './styles.scss';
import { Container } from '@components/Container';

export const CreatePageSkeleton: FC = () => {
  return (
    <Container>
      <div className="CreatePageSkeleton">

        <div className="CreatePageSkeleton_container">
          <div className="CreatePageSkeleton_title"></div>
          <div className="CreatePageSkeleton_input"></div>
          <div className="CreatePageSkeleton_input"></div>
          <div className="CreatePageSkeleton_input"></div>
          <div className="CreatePageSkeleton_buttons">
            <div className="CreatePageSkeleton_button"></div>
            <div className="CreatePageSkeleton_button"></div>
          </div>
        </div>

        <div className="CreatePageSkeleton_posts">
          <div className="CreatePageSkeleton_post"></div>
          <div className="CreatePageSkeleton_post"></div>
          <div className="CreatePageSkeleton_post"></div>
          <div className="CreatePageSkeleton_post"></div>
        </div>
      </div>
    </Container>
  );
};