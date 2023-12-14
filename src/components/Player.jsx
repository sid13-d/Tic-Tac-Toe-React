import { FaEdit, FaCheckDouble } from "react-icons/fa";

import { useState } from "react";

export default function Player({name, symbol}) {
    const [playerName, setPlayerName] = useState(false);

    //this is where we decide which elemtn to set input or span
    const nameElement = playerName ? <input type="text" required value={name}/> : <span className="player-name">{name}</span>;
    const buttonType = playerName ? <FaCheckDouble /> : <FaEdit />;
    
//best practice to update a state based on previous state value
    function handleEditing() {
        setPlayerName((editing) => !editing);
        
    }

    return (
        <li>
            <span className="player">
                {nameElement}
                <span className="player-symbol"> {symbol} </span>
            </span>
            <button onClick={handleEditing}>{buttonType}</button>
        </li>
    )
    }