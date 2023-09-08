import React, { useState, useEffect } from 'react';
import './global.css';
import Options from "./Options.jsx";

const Info = ({ user }) => {
    const [selected, setSelected] = useState('');

    // When the user info arrives to the Component it prints the 'option-1' which is the name.
    useEffect(() => {
        if (Object.keys(user).length !== 0) {
            // Set the default option here (e.g., 'option-1')
            setSelected('option-1');
        }
    }, [user]);

    const handleOnChange = (user, option) => {
        setSelected(option);
    }

    function formatDateToDayMonthYear(isoDate) {
        const date = new Date(isoDate);

        const day = date.getDate();
        const monthIndex = date.getMonth();
        const year = date.getFullYear();

        const months = [
            "January", "February", "March", "April",
            "May", "June", "July", "August",
            "September", "October", "November", "December"
        ];

        const month = months[monthIndex];

        return `${day} ${month} ${year}`;
    }

    if (!user) return <div>Loading...</div>;

    return (
        <>
            <div className='container info'>
                <div className='label'>
                    {selected === 'option-1' && <p>My name is</p>}
                    {selected === 'option-2' && <p>My e-mail is</p>}
                    {selected === 'option-3' && <p>My birthday is on</p>}
                    {selected === 'option-4' && <p>My address is</p>}
                    {selected === 'option-5' && <p>My phone is</p>}
                    {selected === 'option-6' && <p>My password is</p>}
                </div>
                <div className='headline'>
                    {Object.keys(user).length !== 0 ?
                        selected === 'option-1' && user !== undefined && <p>{user.name.title + ". " + user.name.first + " " + user.name.last}</p> : <p>loading...</p>}
                    {selected === 'option-2' && <p>{user.email}</p>}
                    {selected === 'option-3' && <p>{formatDateToDayMonthYear(user.dob.date)}</p>}
                    {selected === 'option-4' && <p>{user.location.country + "," + user.location.state + "-" + user.location.city}</p>}
                    {selected === 'option-5' && <p>{user.phone}</p>}
                    {selected === 'option-6' && <p>{user.login.password}</p>}
                </div>
                <Options handleOnChange={handleOnChange} />
            </div>
        </>
    );
}

export default Info;