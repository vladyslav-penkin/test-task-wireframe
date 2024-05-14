import { FC, useMemo, useState } from 'react';
import './styles.scss';
import { useLocation, useSearchParams } from 'react-router-dom';
import { getUsers } from '@api/requests';
import { UsersList } from '@components/UsersList';
import { DropDownWrapper } from '@components/DropDownWrapper';
import { Container } from '@components/Container';
import { BasicTitle } from '@components/BasicTitle';
import { LinkLine } from '@components/LinkLine';
import { Banner } from '@components/Banner';
import { UsersPageSkeleton } from '@pages/UsersPageSkeleton';
import { useFetch } from '@hooks/useFetch';
import { User } from '@/types/User';
import { OrderBy } from '@/types/OrderBy';
import { SortBy } from '@/types/SortBy';
import { updateSearchParams } from '@utils/searchHelper';
import errorIcon from '@assets/icons/error.png';

const sortByNames = {
  [SortBy.NAME]: 'Name',
  [SortBy.USERNAME]: 'Username',
  [SortBy.EMAIL]: 'Email',
  [SortBy.CITY]: 'City',
  [SortBy.PHONE]: 'Phone',
};

const orderByNames = {
  [OrderBy.ASC]: 'ASC',
  [OrderBy.DESC]: 'DESC',
};

export const UsersPage: FC = () => {
  const [usersList, setUsersList] = useState<User[]>([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const { pathname } = useLocation();
  const splitedPathname = pathname.split('/');
  const endpoint = splitedPathname[splitedPathname.length - 1];
  const sort = searchParams.get('sort') || SortBy.NAME;
  const order = searchParams.get('order') || OrderBy.ASC;
  const sorts = [SortBy.NAME, SortBy.USERNAME, SortBy.EMAIL, SortBy.CITY, SortBy.PHONE];
  const orders = [OrderBy.ASC, OrderBy.DESC];

  const { isLoading, isError } = useFetch(async () => {
    setUsersList(await getUsers());
  }, () => {}, () => {}, []);

  const visibleUsers = useMemo(() => {
    const filteredUsers = [...usersList];

    if (sort) {
      filteredUsers.sort((acc: User, curr: User) => {
        switch (sort) {
          case 'name':
          case 'username':
          case 'email':
          case 'phone':
            return acc[sort].localeCompare(curr[sort]);
          case 'city':
            return acc.address[sort].localeCompare(curr.address[sort]);
          default:
            return 0;
        }
      });
    }

    if (order === 'desc') {
      filteredUsers.reverse();
    }

    return filteredUsers;
  }, [usersList, sort, order]);

  const onSortChange = (sort: string) => {
    updateSearchParams(searchParams, setSearchParams, { sort });
  };

  const onOrderChange = (order: string) => {
    updateSearchParams(searchParams, setSearchParams, { order })
  };

  const linkLine = [{ title: endpoint, link: `/${endpoint}` }];

  if (isLoading) return <UsersPageSkeleton />;

  return (
    <Container>
      <div className="UsersPage">
        <LinkLine titles={linkLine} />
        <BasicTitle title="Users List" />

        {isError && (
          <Banner
            icon={errorIcon}
            title="Something went wrong."
          />
        )}

        {!isError && (
          <>
            <section className="UsersPage_container">
              <DropDownWrapper
                title="Sort By"
                variables={sorts}
                names={sortByNames}
                searchParam={sort}
                onChange={onSortChange}
                defaultValue={0}
              />
              <DropDownWrapper
                title="Order By"
                variables={orders}
                names={orderByNames}
                searchParam={order}
                onChange={onOrderChange}
                defaultValue={0}
              />
            </section>
            <UsersList users={visibleUsers} />
          </>
        )}
      </div>
    </Container>
  );
};