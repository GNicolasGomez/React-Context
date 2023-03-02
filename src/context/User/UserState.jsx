import react, { useReducer } from "react";
import UserReducer from "./UserReducer";
import UserContext from "./UserContext";
import axios from 'axios';

const UserState = (props) => {
    const initialState = {
        users: [],
        selectedUser : null
    }

    const [state, dispatch] = useReducer(UserReducer , initialState)
    
    const getUsers = async () =>{
        const url = 'https://reqres.in/api/users'
        const res = await axios(url);
        dispatch({
            type: 'GET_USERS',
            payload: res.data.data
        })
    }    
    const getProfiles = async (id) =>{
        const url = `https://reqres.in/api/users/${id}`
        const res = await axios(url);
        dispatch({
            type: 'GET_PROFILE',
            payload: res.data.data
        })
        console.log(res.data.data);
    }

    return(

        <UserContext.Provider value={{
            users: state.users,
            selectedUser: state.selectedUser,
            getUsers,
            getProfiles
        }}>
            {props.children}
        </UserContext.Provider>
    )
}


export default UserState