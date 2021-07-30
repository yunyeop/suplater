import axios from 'axios';
import { useEffect } from 'react';
import { useState } from 'react';
import { MOCK_USER_URL } from '../../constants/api';
import { User } from '../../types/user';

const List = () => {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    const getUsers = async () => {
      const { data } = await axios.get<User[]>(MOCK_USER_URL);
      setUsers(data);
    }

    getUsers();
  }, []);

  return (
    <>
      {
        users.map((user: User) => {
          return <div key={user.name}>{user.name}</div>;
        })
      }
    </>
  );
}

export default List;
