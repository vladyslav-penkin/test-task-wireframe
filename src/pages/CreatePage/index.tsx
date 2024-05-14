import { FC, useMemo, useState } from 'react';
import './styles.scss';
import { useSearchParams } from 'react-router-dom';
import { addPost, getPosts, getUsers } from '@api/requests';
import { Container } from '@components/Container';
import { DropDownWrapper } from '@components/DropDownWrapper';
import { BasicInput } from '@components/BasicInput';
import { BasicButton } from '@components/BasicButton';
import { UsersPostsList } from '@components/UsersPostsList';
import { BasicTitle } from '@components/BasicTitle';
import { Banner } from '@components/Banner';
import { CreatePageSkeleton } from '@pages/CreatePageSkeleton';
import { useFetch } from '@hooks/useFetch';
import { User } from '@/types/User';
import { Post } from '@/types/Post';
import { updateSearchParams } from '@utils/searchHelper';
import errorIcon from '@assets/icons/error.png';

export const CreatePage: FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [title, setTitle] = useState<string>('');
  const [body, setBody] = useState<string>('');
  const [posts, setPosts] = useState<Post[]>([]);
  const [users, setUsers] = useState<User[]>([]);
  const userId = searchParams.get('userId') || 1;
  const isNotEmpty = title.length > 0 && body.length > 0;
  const userNames = useMemo(() => users.reduce((acc, curr) => ({ ...acc, [curr.id]: curr.username }), {}), [users]);
  const userIds = useMemo(() => users.map((user) => `${user.id}`), [users]);
  const onUserChange = (userId: string) => {
    updateSearchParams(searchParams, setSearchParams, { userId });
  };

  const { isLoading, isError } = useFetch(async () => {
    const [users, posts] = await Promise.all([getUsers(), getPosts()]);
    setUsers(users);
    setPosts(posts);
  }, () => {}, () => {}, []);

  const usersPosts = posts.map((post) => {
    const user = users.find((user) => user.id === post.userId);
    return { ...post, name: user?.name, username: user?.username, email: user?.email, city: user?.address.city }
  });

  const onAdd = async () => {
    const newUserPost = {
      userId: +userId,
      title,
      body,
    };

    const response = await addPost(newUserPost);
    setPosts(prev => [response, ...prev]);
  };

  const onClear = () => {
    setTitle('');
    setBody('');
  };

  const onSubmit = () => {
    if (isNotEmpty) {
      onAdd();
      onClear();
    }
  };

  if (isLoading) {
    return <CreatePageSkeleton />;
  }

  return (
    <Container>
      <div className="CreatePage">
        <BasicTitle title="Create Post" />
        {isError && (
          <Banner
            icon={errorIcon}
            title="Something went wrong."
          />
        )}
        {!isError && (
          <>
            <form className="Form">
              <DropDownWrapper
                title="Choose users"
                onChange={onUserChange}
                searchParam={`${userId}`}
                variables={userIds}
                names={userNames}
                defaultValue={0}
              />
              <BasicInput
                title="Title"
                query={title}
                setQuery={setTitle}
                placeholder='Enter title...'
              />
              <BasicInput
                title="Body"
                query={body}
                setQuery={setBody}
                placeholder='Enter body...'
              />
              <div className="Form_buttons">
                <BasicButton title="Clear" isDisabled={!isNotEmpty} onClick={onClear} />
                <BasicButton title="Submit" isDisabled={!isNotEmpty} onClick={onSubmit} />
              </div>
            </form>
            <UsersPostsList posts={usersPosts} />
          </>
        )}
      </div>
    </Container>
  );
};