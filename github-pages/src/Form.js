import { useState, useRef } from 'react';

const Form = ({ addProfile }) => {
  const [userName, setUserName] = useState('');
  const inputRef = useRef();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(`https://api.github.com/users/${userName}`);
      const userData = await response.json();

      // Check if the user exists before adding to the list
      if (userData.message !== 'Not Found') {
        // Create a new profile object
        const newProfile = {
          name: userData.name,
          avatar_url: userData.avatar_url,
          company: userData.company || 'N/A',
        };

        // Pass the new profile to the parent component
        addProfile(newProfile);

        // Clear the input field
        setUserName('');
      } else {
        console.error('User not found');
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <form className="custom-form" onSubmit={handleSubmit}>
      <input
        type="text"
        autoFocus
        ref={inputRef}
        placeholder="Enter Github username"
        className="me-1"
        value={userName}
        onChange={(e) => setUserName(e.target.value)}
      />
      <button className="border-1 text-muted">Add to List</button>
    </form>
  );
};

export default Form;
