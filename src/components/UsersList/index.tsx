import { FC } from 'react';
import './styles.scss';
import { User } from '@/types/User';
import { UserInfo } from '@components/UserInfo';

interface Props {
  users: User[];
}

export const UsersList: FC<Props> = ({ users }) => {
  return (
    <article className="UsersList">
      {users.map((user) => (
        <UserInfo user={user} key={user.id} />
      ))}
    </article>
  );
};