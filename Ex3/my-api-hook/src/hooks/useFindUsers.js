import {useEffect, useReducer } from 'react';
import axios from 'axios';

const initialState = {
    loading: true,
    data: [],
    error: null 
}

const reduce = (state, action) => {
    switch (action.type) {
        case "OnFetching":
            return {
                loading: true,
                data: [],
                error: null
            }
        case "OnSuccess":
            return {
                loading: false,
                data: action.payload,
                error: null
            }
        case "OnFailure":
            return {
                loading: false,
                data: [],
                error: 'Lamento, ocorreu um erro!'
            }
    
        default:
            return state;
    }
}

export function useFindUsersReducer(search) {
    const [state, dispatch] = useReducer(reduce, initialState);
    
    useEffect(_ => {
        async function listUsers() {
            try {
                const apiUrl = search ? 
                `https://jsonplaceholder.typicode.com/users/${search}` :
                'https://jsonplaceholder.typicode.com/users';

                const result = await axios.get(apiUrl);
           
                if(result.data) {
                    if(search!=="") {
                       let res = [];
                        res.push(result.data);
                        dispatch({ type: "OnSuccess", payload: res});
                       
                    } else {
                        dispatch({ type: "OnSuccess", payload: result.data });
                    }
                } else {
                    dispatch({ type: "OnFailure" });
                }
            } catch(err) {
                dispatch({type: "OnFailure"});
            }
        };

        dispatch({type: "OnFetching"})
        listUsers();
    }, [search]);

    return { state };
};