import { FC } from 'react';
import './styles.scss';
import { PostInfo } from '../PostInfo';
import { Post } from '@/types/Post';

interface Props {
  posts: Post[];
}

export const PostsList: FC<Props> = ({ posts }) => {
  return (
    <article className="PostsList">
      {posts.map((post) => (
        <PostInfo post={post} key={post.id} />
      ))}
    </article>
  );
};