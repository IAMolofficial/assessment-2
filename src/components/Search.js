import React, { useState } from 'react';
import Profile from './Profile';
import Typewriter from 'typewriter-effect';

const Search = () => {
  const [username, setUsername] = useState('');
  const [profile, setProfile] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const response = await fetch(`https://api.github.com/users/${username}`);
    const data = await response.json();
    setProfile(data);
    setUsername('');
  };

  return (
    <div><h1>
       <Typewriter
        options={{
          strings: ['GitHub Profile Search!'],
          autoStart: true,
          loop: true,
        }}
      /></h1>
      <form onSubmit={handleSubmit}>

        <input
          type="text"
          placeholder="Enter GitHub user ID"
          value={username}
          onChange={(event) => setUsername(event.target.value)}
          required
        />
        <button type="submit"><i class='bx bx-search-alt'></i></button>
      </form>
      {profile && <Profile profile={profile} />}
    </div>
  );
};

export default Search;
