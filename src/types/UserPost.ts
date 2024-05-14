export interface UserPost {
  userId: number;
  id: number;
  title: string;
  body: string;
  name: string | undefined;
  username: string | undefined;
  email: string | undefined;
  city: string | undefined;
}