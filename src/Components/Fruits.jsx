import { useState } from "react";
import FruitList from "./FruitList";


export default function Fruits(){

    let [selectedItems , setSelectedItems] = useState([])

    function addItem(e , list){
        console.log("Clicked" , e.target.textContent);
            setSelectedItems([...selectedItems , e.target.textContent])
        return list
    }
    return <>
        <FruitList onClick={addItem} />
    <br />
        <div>
        <h1>Added To List : </h1>
          {
            selectedItems.map((ele , idx)=>{
                return <div key={idx}>
                   
                    <h2 >{ele}</h2>
                </div>
            })
          }
        </div>
    </>
}