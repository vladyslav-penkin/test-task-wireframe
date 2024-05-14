import { FC } from 'react';
import './styles.scss';
import { UserPost } from '@/types/UserPost';

interface Props {
  post: UserPost;
}

export const UserPostInfo: FC<Props> = ({ post }) => {
  return (
    <div className="UsersPostInfo">
      <div className="UsersPostInfo_container">
        <p className="UsersPostInfo_name">{post.name}</p>
        <p className="UsersPostInfo_username">@{post.username}</p>
      </div>
      <p className="UsersPostInfo_title">{post.title}</p>
      <p className="UsersPostInfo_body">{post.body}</p>
    </div>
  );
};