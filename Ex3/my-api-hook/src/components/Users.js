import React, { useState } from 'react';
import { useFindUsersReducer } from "../hooks/useFindUsers";

function Users() {
    
    const [search, setSearch] = useState('');

    const { state } = useFindUsersReducer(search);
    const { data, loading, error } = state;

    return (
        <div>
         {loading ? <p>Carregando...</p> :
          <ul>
            { 
                data &&
                data.length > 0 &&
                data.map(item => (
                    <li key={item.id} onClick={() => setSearch(item.id)}>
                        {item.username} : {item.name}
                    </li>
                )
                )
            }
          </ul>}
        {error ? <p>{error}</p> : null}
        </div>
      );
}

export default Users;