import React, { useState } from "react";
import "./styles/style.css";
import Menu from "./menuApi";
import MenuCard from "./MenuCard";
import NavBar from "./NavBar";
const uniqueCatergory = [...new Set(Menu.map((e)=>e.category)),"all"];

function Resturant(){

    const [data,setMenu] = useState(Menu);
    const [category,setCategory] = useState(uniqueCatergory);
    console.log(data);
    const filterItem = (category)=>{
        if(category==="all"){
            setMenu(Menu);
            return;
        }
        const updatedData = Menu.filter((e)=>e.category === category);
        setMenu(updatedData); 
    };
    return (
        <>
        <NavBar filterItem = {filterItem} menuList={data} category = {category} ></NavBar>
        <MenuCard menuData = {data}/>
        </>
    )
}

export default Resturant;