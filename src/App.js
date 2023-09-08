import React, { useState, useEffect } from 'react';
import Picture from "./Picture.jsx";
import Info from "./Info.jsx";

function App() {
  const [photoURL, setPhotoURL] = useState('');
  const [user, setUser] = useState({});
  const [isFetching, setIsFetching] = useState(false); // This is to avoid getting multiple users by fetching more than once.


  const fetchUserData = async () => {
    const users = await fetch("https://randomuser.me/api/")
      .then(response => {
        return response.json()
      })
      .then(data => {
        const [user] = data.results;
        setPhotoURL(user.picture.large)
        setUser(user);
      })
  } 
  useEffect(() => {
    fetchUserData();
  }, [])

  if (!user) return <div>Loading...</div>;

  return (
    <>
      <Picture photoURL={photoURL} />
      <Info user={user}/>
    </>
  );
}

export default App;
