import { useState, useEffect } from 'react';
import { Navigate } from 'react-router-dom';

const UserInfoPage = () => {
   // These states are bound to the values of the text inputs
    // on the page (see JSX below). 
    const [favoriteFood, setFavoriteFood] = useState(info.favoriteFood || '');
    const [hairColor, setHairColor] = useState(info.hairColor || '');
    const [bio, setBio] = useState(info.bio || '');

  const saveChanges = async () => {
    try {
      console.log('Add saving changes functionality...');
    } catch (error) {
      
    }
  }

  const logout = () => {
    console.log('Add logout functionality...');
  }

  const resetValues = () => {
    // Reset the text input values to
    // their starting values (the data we loaded from the server)
    alert('Reset functionality not implemented yet');
  }

  return ( 
    <div className="content-container">
      <h1>Info for {email}</h1>
			{!isVerified && <div className="fail">You won't be able to make any changes until you verify your email</div>}
      {showSuccessMessage && <div className="success">Successfully saved user data!</div>}
      {showErrorMessage && <div className="fail">Uh oh... something went wrong and we couldn't save changes</div>}
      <label>
          Favorite Food:
          <input
              onChange={e => setFavoriteFood(e.target.value)}
              value={favoriteFood} />
      </label>
      <label>
          Hair Color:
          <input
              onChange={e => setHairColor(e.target.value)}
              value={hairColor} />
      </label>
      <label>
          Bio:
          <input
              onChange={e => setBio(e.target.value)}
              value={bio} />
      </label>
      <hr />
      <button onClick={saveChanges}>Save Changes</button>
      <button onClick={resetValues}>Reset Values</button>
      <button onClick={logOut}>Log Out</button>
    </div>
   );
}
 
export default UserInfoPage;