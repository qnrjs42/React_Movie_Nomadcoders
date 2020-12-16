import React from 'react';

const Food = ({ favorite, picture }) => {
return (
  <>
    <h1>HELOO {favorite}</h1>
    <i>{picture}</i>
  </>
);
};

const foodILike = [
  {
    name: "potato",
    image: "1",
  },
  {
    name: "potato2",
    image: "2",
  },
  {
    name: "potato3",
    image: "3",
  },
];

const App = () => {
  return (
    <div>
      Hello
      {foodILike.map((dish, key) => (
        <div key={key}>
          <Food favorite={dish.name} picture={dish.image} />
        </div>
      ))}
    </div>
  );
}

export default App;

