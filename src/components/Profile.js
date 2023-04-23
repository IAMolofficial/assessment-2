import React from 'react';

const formatDate = (date) => {
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  return new Date(date).toLocaleDateString(undefined, options);
};

const Profile = ({ profile }) => {
  return (
    <div className="card">
      <img src={profile.avatar_url} alt="Avatar" />
      <div className="card-info">
        <h2> {profile.name}</h2>
        <p>UserID: {profile.login}</p>
        <p>Public repository: {profile.public_repos}</p>
        <p>Public gists: {profile.public_gists}</p>
        <p>Profile created: {formatDate(profile.created_at)}</p>
      </div>
    </div>
  );
};

export default Profile;
