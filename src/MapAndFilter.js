import { useState } from "react";
import "./MapAndFilter.css";
function MapAndFilter() 
{
    const [card ,  setCard] = useState([
        {
            name: "Basit",
            class: "BSE-4B",
            RollNo: "Sp21-BSE-054",
            university: "Comsats University"

        },
        {
            name: "Nazeef",
            class: "BSE-4B",
            RollNo: "Sp21-BSE-068",
            university: "Comsats University"

        },
        {
            name: "Mashood",
            class: "BSE-4B",
            RollNo: "Sp21-BSE-045",
            university: "Comsats University"

        },
        {
            name: "Huraira",
            class: "BSE-4B",
            RollNo: "Sp21-BSE-043",
            university: "Comsats University"

        },
        {
            name: "Irfan",
            class: "BSE-4B",
            RollNo: "Sp21-BSE-063",
            university: "Comsats University"

        }
    ])
    return ( 
        <div>
            {
                card.map((displayCard)=>
                (
                    <div className="card">
                    <h5>Name: {displayCard.name}</h5>
                    <h5>Class: {displayCard.class}</h5>
                    <h5>Roll Number: {displayCard.RollNo}</h5>
                    <h5>University: {displayCard.university}</h5>
                    </div>
                ))
            }
        </div>
     );
}

export default MapAndFilter;