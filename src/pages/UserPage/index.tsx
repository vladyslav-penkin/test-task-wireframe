import { FC, useState } from 'react';
import './styles.scss';
import { useLocation, useParams } from 'react-router-dom';
import { getPostsByUserId, getUsersById } from '@api/requests';
import { BackToButton } from '@components/BackToButton';
import { LinkLine } from '@components/LinkLine';
import { Container } from '@components/Container';
import { PostsList } from '@components/PostsList';
import { BasicTitle } from '@components/BasicTitle';
import { Banner } from '@components/Banner';
import { UserPageSkeleton } from '@pages/UserPageSkeleton';
import { useFetch } from '@hooks/useFetch';
import { User } from '@/types/User';
import { Post } from '@/types/Post';
import emailIcon from '@assets/icons/email.png';
import errorIcon from '@assets/icons/error.png';

export const UserPage: FC = () => {
  const [userDetails, setUserDetails] = useState<User | null>(null);
  const [userPosts, setUserPosts] = useState<Post[] | null>(null);
  const { userId } = useParams();
  const { isLoading, isError } = useFetch(async () => {
    if (userId) {
      const [user, posts] = await Promise.all([getUsersById(userId), getPostsByUserId(userId)]);
      setUserDetails(user);
      setUserPosts(posts);
    }
  }, () => {}, () => {}, [userId]);

  const location = useLocation();
  const pathname = location.pathname.split('/')
  const backLink = pathname[pathname.length - 2];

  const linkLine = [{ title: backLink, link: `/${backLink}` }, { title: userDetails?.name || '', link: `/${backLink}/${userDetails?.id}` }];

  if (isLoading) return <UserPageSkeleton />;

  return (
    <Container>
      <div className="UserPage">
        <LinkLine titles={linkLine} />
        <BackToButton to={`/${backLink}`} />

        {isError && (
          <Banner
            icon={errorIcon}
            title="Something went wrong."
          />
        )}

        {!isError && (
          <>
            <section className="UserPage_info">
              <p className="UserPage_name">{userDetails?.name}</p>
              <p className="UserPage_username">@{userDetails?.username}</p>
              <p className="UserPage_email">
                <img className="UserPage_emailIcon" src={emailIcon} alt="email" />
                {userDetails?.email}
              </p>
            </section>
            <section className="UserPage_posts">
              <BasicTitle title={`${userDetails?.name} Posts:`} size={30} />

              {userPosts !== null && (
                <PostsList posts={userPosts} />
              )}
            </section>
          </>
        )}
      </div>
    </Container>
  );
};