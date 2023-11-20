// src/components/UserComponent.js
import React from 'react';
import { useParams } from 'react-router-dom';

const UserComponent = () => {
  // Access the value of :stringValue from the URL
  const { stringValue } = useParams();

  return (
    <div>
      <h2>User Component</h2>
      <p>Received string value: {stringValue}</p>
      {/* Add your component logic here */}
    </div>
  );
};

export default UserComponent;
