import React from "react";
import EventonClick from "./EventonClick";
import KeyboardEvent from "./KeyboardEvent";
import MouseEvent from "./MouseEvent";
import ItemList from "./ItemList";
import './ItemList.css'
function MainEvent(){
    return (
    <div>
        {/* <EventonClick />
        <KeyboardEvent />
        <MouseEvent /> */}
        <ItemList />
    </div>
    );

}

export default MainEvent;