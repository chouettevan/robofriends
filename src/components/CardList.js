import React from "react";
import Card from "./Card";

const CardList = ({ robots }) => {
    const cardList = robots.map((user,i) => <Card key={i} name={robots[i].name} email={robots[i].email} id={robots[i].id}/> );
    return (
        <>
        {cardList}
        </>
    );
}; 
export default CardList;