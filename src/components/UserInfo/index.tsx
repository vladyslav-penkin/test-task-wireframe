import { FC } from 'react';
import './styles.scss';
import { User } from '@/types/User';
import { Link, useLocation } from 'react-router-dom';

interface Props {
  user: User;
}

export const UserInfo: FC<Props> = ({ user }) => {
  const location = useLocation();
  return (
    <div className="UserInfo">
      <Link className="UserInfo_link" to={`${location.pathname}/${user.id}`}>
        <div className="UserInfo_container">
          <p className="UserInfo_name">{user.name}</p>
          <p className="UserInfo_username">@{user.username}</p>
        </div>
        <p className="UserInfo_title">{user.email}</p>
        <p className="UserInfo_body">{user.phone}</p>
      </Link>
    </div>
  );
};