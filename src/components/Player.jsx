import { FaEdit, FaCheckDouble } from "react-icons/fa";

import { useState } from "react";

export default function Player({name, symbol, style, onNameChange}) {
    const [playerName, setPlayerName] = useState(name); //this is the state that will be updated when we edit the name
    const [isEditing, setisEditing] = useState(false);

    //this is where we decide which elemtn to set input or span
    const nameElement =isEditing ? <input type="text" required value={playerName} onChange={handleChange}/> : <span className="player-name">{playerName}</span>;
    const buttonType =isEditing ? <FaCheckDouble /> : <FaEdit />;
    
//best practice to update a state based on previous state value
    function handleEditing() {
        setisEditing((editing) => !editing);
        
        if(isEditing) {
            onNameChange(symbol, playerName);
            console.log("onNameChange called current name::", playerName);
        }
    }

    function handleChange(event) {
        setPlayerName(event.target.value);
       
    }

    return (
        <li className={style}>
            <span className="player">
                {nameElement}
                <span className="player-symbol"> {symbol} </span>
            </span>
            <button onClick={handleEditing}>{buttonType}</button>
        </li>
    )
    }