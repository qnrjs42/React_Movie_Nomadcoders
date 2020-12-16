import React from 'react';

const Food = ({ favorite }) => {
return <h1>HELOO {favorite}</h1>;
};

const App = () => {
  return (
    <div>
      Hello
      <Food favorite="potato" />
      <Food favorite="sweet potato" />
      <Food favorite="kimchi" />
      <Food favorite="rice" />
    </div>
  );
}

export default App;

