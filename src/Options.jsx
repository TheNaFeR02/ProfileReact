import React, { useState, useEffect } from 'react';
import './global.css';

import { BiEnvelope } from 'react-icons/bi';
import { IoCalendarOutline } from 'react-icons/io5';
import { LiaMapMarkedAltSolid } from 'react-icons/lia';
import { BsTelephone } from 'react-icons/bs';
import { AiOutlineLock } from 'react-icons/ai';
import { CgProfile } from 'react-icons/cg';

const Options = (props) => {
    const [selected, setSelected] = useState('');
    const [user, setUser] = useState({});


    const handleClick = (option, user) => {
        setSelected(option);
        props.handleOnChange(user, option);
    }
    

    return (
        <>
            <div className='option-list'>
                <button
                    className={`option option-1 ${selected === 'option-1' ? "selected" : ""}`}
                    onClick={() => handleClick('option-1', user)}
                ><CgProfile size={35} />
                </button>
                <button
                    className={`option option-2 ${selected === 'option-2' ? "selected" : ""}`}
                    onClick={() => handleClick('option-2', user)}
                ><BiEnvelope size={35} />
                </button>
                <button
                    className={`option option-3 ${selected === 'option-3' ? "selected" : ""}`}
                    onClick={() => handleClick('option-3', user)}
                ><IoCalendarOutline size={35} />
                </button>
                <button
                    className={`option option-4 ${selected === 'option-4' ? "selected" : ""}`}
                    onClick={() => handleClick('option-4', user)}
                ><LiaMapMarkedAltSolid size={35} />
                </button>
                <button
                    className={`option option-5 ${selected === 'option-5' ? "selected" : ""}`}
                    onClick={() => handleClick('option-5', user)}
                ><BsTelephone size={35} />
                </button>
                <button
                    className={`option option-6 ${selected === 'option-6' ? "selected" : ""}`}
                    onClick={() => handleClick('option-6', user)}
                ><AiOutlineLock size={35} />
                </button>
            </div>

        </>
    );
}

export default Options;