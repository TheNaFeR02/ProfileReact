import React, {useState} from 'react';
import './global.css';

import { BiEnvelope} from 'react-icons/bi';
import { IoCalendarOutline } from 'react-icons/io5';
import {LiaMapMarkedAltSolid} from 'react-icons/lia';
import {BsTelephone} from 'react-icons/bs';
import {AiOutlineLock} from 'react-icons/ai';
import {CgProfile} from 'react-icons/cg';

const Options = ( props ) => {
    const [selected, setSelected] = useState('');

    const user = {
        name: "Fernando Acuña Garcia",
        email: "fernandoacuna@uninorte.edu.co",
        birthday: "25 05 2002",
        address: "Cll 64 #31-53",
        phone: 3114002600,
        password: "Uni2023#",
    }

    const handleClick = (option) => {
        setSelected(option);
        console.log(option);
        props.handleOnChange(user, option);
    }

    return (
        <>
            <div className='option-list'>
                <button 
                className={`option option-1 ${selected === 'option-1' ? "selected" : ""}`} 
                onClick={() => handleClick('option-1')}
                ><CgProfile size={35} />
                </button>
                <button 
                className={`option option-2 ${selected === 'option-2' ? "selected" : ""}`} 
                onClick={() => handleClick('option-2')}
                ><BiEnvelope size={35} />
                </button>
                <button 
                className={`option option-3 ${selected === 'option-3' ? "selected" : ""}`} 
                onClick={() => handleClick('option-3')}
                ><IoCalendarOutline size={35} />
                </button>
                <button 
                className={`option option-4 ${selected === 'option-4' ? "selected" : ""}`} 
                onClick={() => handleClick('option-4')}
                ><LiaMapMarkedAltSolid size={35} />
                </button>
                <button 
                className={`option option-5 ${selected === 'option-5' ? "selected" : ""}`} 
                onClick={() => handleClick('option-5')}
                ><BsTelephone size={35} />
                </button>
                <button 
                className={`option option-6 ${selected === 'option-6' ? "selected" : ""}`} 
                onClick={() => handleClick('option-6')}
                ><AiOutlineLock size={35} />
                </button>
            </div>
        </>
    );
}

export default Options;