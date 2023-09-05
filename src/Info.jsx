import React, { useState } from 'react';
import './global.css';
import Options from "./Options.jsx";

const Info = () => {
    const [selected, setSelected] = useState('');
    const [user, setUser] = useState('');

    const handleOnChange = (user, option) => {
        console.log(user);
        setUser(user);
        setSelected(option);
    }

    return (
        <>
            <div className='container info'>
                <div className='label'>
                    {selected === 'option-1' && <p>My name is</p>}
                    {selected === 'option-2' && <p>My e-mail is</p>}
                    {selected === 'option-3' && <p>My birthday is</p>}
                    {selected === 'option-4' && <p>My address is</p>}
                    {selected === 'option-5' && <p>My phone is</p>}
                    {selected === 'option-6' && <p>My password is</p>}
                    </div>
                <div className='headline'>
                    {selected === 'option-1' && <p>{user.name}</p>}
                    {selected === 'option-2' && <p>{user.email}</p>}
                    {selected === 'option-3' && <p>{user.birthday}</p>}
                    {selected === 'option-4' && <p>{user.address}</p>}
                    {selected === 'option-5' && <p>{user.phone}</p>}
                    {selected === 'option-6' && <p>{user.password}</p>}
                    </div>
                <Options handleOnChange={handleOnChange}/>
            </div>
        </>
    );
}

export default Info;