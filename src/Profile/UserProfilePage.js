import React, {useState} from "react";
import Profile from "./Profile";
import Navigation from "./Navigation";
import Form from "./Form";


function UserProfilePage(){
    //initialize state for user data
    const [userData, setUserData] = useState({
        name: 'Juan Dela Cruz',
        email: 'juan@gmail.com',
        username: 'juanpogi',
    });

    const handleUpdate = (updatedInfo) => {
        setUserData((prevState) => ({
            ...prevState,
            ...updatedInfo
        }));
    };
    return(
        <div>
            <Navigation/>
            <Profile user={userData}/>
            <Form user={userData} onUpdate={handleUpdate}/>
        </div>
    )
}

export default UserProfilePage;