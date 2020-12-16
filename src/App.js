import React from 'react';
import PropTypes from 'prop-types';

class App extends React.Component {
  state = {
    count: 0,
  }
  add = () => {
    console.log('add');
    this.setState((current) => ({
      count: current.count + 1,
    }));
  };
  minus = () => {
    console.log("minus");
   this.setState((current) => ({
     count: current.count - 1,
   }));
  };
  render() {
    return (
      <>
        <h1> ----- {this.state.count}</h1>
        <button onClick={this.add}>Add</button>
        <button onClick={this.minus}>minus</button>
      </>
    );
  }
}

// const foodILike = [
//   {
//     id: 1,
//     name: "potato",
//     picture:
//       "https://upload.wikimedia.org/wikipedia/commons/4/4a/191215_tvN_%EC%A6%90%EA%B1%B0%EC%9B%80%EC%A0%84_%ED%98%B8%ED%85%94%EB%8D%B8%EB%A3%A8%EB%82%98_%ED%86%A0%ED%81%AC%EC%84%B8%EC%85%98_%EC%95%84%EC%9D%B4%EC%9C%A0_%286%29.jpg",
//     rating: 5,
//   },
//   {
//     id: 2,
//     name: "potato2",
//     picture:
//       "https://i.pinimg.com/originals/52/c7/ab/52c7ab7f3825f0b804555681b7c6098b.jpg",
//     rating: 5,
//   },
//   {
//     id: 3,
//     name: "potato3",
//     picture:
//       "https://img4.yna.co.kr/photo/cms/2019/05/02/02/PCM20190502000402370_P2.jpg",
//     rating: 4.6,
//   },
// ];

// const Food = ({ favorite, picture, rating }) => {
//   return (
//     <>
//       <h1>HELOO {favorite}</h1>
//       <h3>{rating}/5.0</h3>
//       <img src={picture} alt={picture} />
//     </>
//   );
// };

// Food.propTypes = {
//   name: PropTypes.string.isRequired,
//   picture: PropTypes.string.isRequired,
//   rating: PropTypes.number.isRequired,
// };


// const App = () => {
//   return (
//     <div>
//       Hello
//       {foodILike.map((dish) => (
//         <Food key={dish.id} name={dish.name} picture={dish.picture} rating={dish.rating} />
//       ))}
//     </div>
//   );
// }

export default App;

