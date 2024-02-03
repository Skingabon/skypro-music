import React from "react";
import { UserList } from "../../components/user-list/userList";
import { USERS } from "../../constants";

export const Main = () =>{
    return (
<div>
    <h1>Main</h1>
    <UserList users={USERS}/>
</div>
    );
};