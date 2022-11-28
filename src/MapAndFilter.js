import { useState } from "react";
import "./MapAndFilter.css";

function MapAndFilter() 
{
    const [card ,  setCard] = useState([
        {
            id: "1",
            name: "Basit",
            class: "BSE-4B",
            RollNo: "Sp21-BSE-054",
            university: "Comsats University"

        },
        {
            id: "2",
            name: "Nazeef",
            class: "BSE-4B",
            RollNo: "Sp21-BSE-068",
            university: "Comsats University"

        },
        {
            id: "3",
            name: "Mashood",
            class: "BSE-4B",
            RollNo: "Sp21-BSE-045",
            university: "Comsats University"

        },
        {
            id: "4",
            name: "Huraira",
            class: "BSE-4B",
            RollNo: "Sp21-BSE-043",
            university: "Comsats University"

        },
        {
            id: "5",
            name: "Irfan",
            class: "BSE-4B",
            RollNo: "Sp21-BSE-063",
            university: "Comsats University"

        }
    ])

    function handleDelete(id)
    {
        const Delete = card.filter((cardDelete)=>cardDelete.id !== id);
        setCard(Delete);

    }
    return ( 
        <div>
            {
                card.map((displayCard)=>
                (
                    <div className="card" key={displayCard.id}>
                    <h5>Name: {displayCard.name}</h5>
                    <h5>Class: {displayCard.class}</h5>
                    <h5>Roll Number: {displayCard.RollNo}</h5>
                    <h5>University: {displayCard.university}</h5>
                    <button className="delete-btn" onClick={()=>handleDelete(displayCard.id)}>Delete</button>
                    </div>
                ))
            }
        </div>
     );
}

export default MapAndFilter;
