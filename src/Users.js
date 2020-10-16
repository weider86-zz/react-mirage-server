import axios from 'axios';
import React, {useEffect, useState} from 'react';
import './styles.css';
export const Users = () => {
  const [users, setUsers] = useState([
    {
      id: 1,
      name: 'Benício Lima',
    },
  ]);

  // const fetch = async () => (await axios.get('api/users')).data;

  // useEffect(() => {
  //   fetch();
  // }, []);

  const fetch = async () => {
    // setLoading(true);
    try {
      setUsers((await axios.get('api/users')).data);
      // setError(null);
    } catch (error) {
      console.log(error);
      // setError(error);
    }
    // setLoading(false);
  };

  useEffect(() => void fetch(), []);

  return (
    <>
      <h2>Users</h2>
      {users.map(({name, email, gender, active}) => (
        <div key={name}>
          <p>
            <strong>{name}</strong>
          </p>
          <p>
            <em>{email}</em>
          </p>
          <p>
            <span>Gender: {gender}</span>
          </p>
          <p>
            <span>Active: {`${active}`}</span>
          </p>
        </div>
      ))}
    </>
  );
};
