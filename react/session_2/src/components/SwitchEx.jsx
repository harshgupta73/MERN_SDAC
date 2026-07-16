import React from "react";

const SwitchEx = ({role}) => {
    switch (role) {
        case "admin":
            return <h1>Welcome Admin... </h1>
            break;
        case "student":
            return <h1>Welcome Student...</h1>
            break;
        case "teacher":
            return <h1>Welcome Teacher...</h1>
        default:
            return <h1>Roles not selected according to switch</h1>
            break;
    }
}

export default SwitchEx