import React from 'react';


const Card = ({ title, profile }) => {
  // const profile = testData;

  return (
    <section>
      <div className="text-center mt-5">
        {title}
      </div>
      <div className="github-profile">
        {/* <img src="https://placehold.it/75" alt="profile" /> */}
        <img src={profile.avatar_url} alt="profile" />
        <div className="info">
          <div className="name">{profile.name}</div>
          <div className="company">{profile.company}</div>
        </div>
      </div>
    </section>
  )
}

export default Card;
