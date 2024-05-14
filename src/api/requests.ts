import axios from "axios";
export const BASE_URL = 'https://jsonplaceholder.typicode.com/';
export const ENDPOINT_POSTS = 'posts';
export const ENDPOINT_USERS = 'users';
import { Post } from "@/types/Post";
import { User } from "@/types/User";

export const get = async <T>(path: string): Promise<T> => {
  const { data } = await axios.get<T>(path);
  return data;
};

export const getPosts = async (): Promise<Post[]> => {
  return get<Post[]>(`${BASE_URL}/${ENDPOINT_POSTS}`);
};

export const addPost = async (options: Omit<Post, 'id'>) => {
  try {
    const { data } = await axios.post(`${BASE_URL}/${ENDPOINT_POSTS}`, options);
    console.log('Post added successfully:', data);
    return data;
  } catch (error) {
    console.error('Error adding post:', error);
    throw error;
  }
};

export const getPostsByUserId = async (userId: string): Promise<Post[]> => {
  return get<Post[]>(`${BASE_URL}/${ENDPOINT_POSTS}?userId=${userId}`);
};

export const getUsers = async (): Promise<User[]> => {
  return get<User[]>(`${BASE_URL}/${ENDPOINT_USERS}`);
};

export const getUsersById = (userId: string): Promise<User> => {
  return get<User>(`${BASE_URL}/${ENDPOINT_USERS}/${userId}`);
};