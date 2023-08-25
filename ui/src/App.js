import React, { useEffect, useCallback, useState } from 'react';
import Counter from 'components/Counter';
import './App.scss';
import usersService from 'services/usersService';
import { adaptUsersTableData } from 'helpers/adapter';

function App() {
  const [usersData, setUsersData] = useState({count: 0, data: []});
  const [loading, setLoading] = useState([]);
  
  const getUsersLists = useCallback(
    async () => {
      try {
        const response = await usersService.getUsers();
        if (response) {
          setUsersData({
            count: response.data.count,
            data: adaptUsersTableData(response.data.data),
          });
          // setLoading(false);
        }
      } catch (err) {
        // setLoading(false);
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );

  useEffect(() => {
      getUsersLists();
  }, [getUsersLists]);

  console.log(" usersData.data= ",  usersData.data)

  const usersListView = useCallback(() => usersData.data.length ? usersData.data.map(i => (<li key={i.id}>{i.firstName}</li>)) : <>No data</>, [usersData]);

  return (
    <div className="App">
        { loading ?
          <Counter /> : (
            usersListView()
          )}
    </div>
  );
}

export default App;
