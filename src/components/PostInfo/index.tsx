import { FC } from 'react';
import './styles.scss';
import { Post } from '@/types/Post';

interface Props {
  post: Post;
}

export const PostInfo: FC<Props> = ({ post }) => {
  return (
    <div className="PostInfo">
      <p className="PostInfo_title">{post.title}</p>
      <p className="PostInfo_body">{post.body}</p>
    </div>
  );
};