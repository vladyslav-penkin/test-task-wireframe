import { FC } from 'react';
import './styles.scss';
import { UserPostInfo } from '@components/UserPostInfo';
import { UserPost } from '@/types/UserPost';

interface Props {
  posts: UserPost[];
}

export const UsersPostsList: FC<Props> = ({ posts }) => {
  return (
    <article className="UsersPostsList">
      {posts.map((post) => (
        <UserPostInfo post={post} key={post.id} />
      ))}
    </article>
  );
};