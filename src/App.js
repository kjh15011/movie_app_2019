import React from "react";
import axios from "axios";
import Movie from "./Movie";
import "./App.css";

//State가 필요 없는 경우 Component Class일 필요 없음
class App extends React.Component {
  state = {
    isLoading: true,
    movies: []
  };
  getMovies = async () => {
    const { data: { data: { movies } } } = await axios.get("https://yts-proxy.now.sh/list_movies.json");
    this.setState({ movies, isLoading: false });
    console.log(movies)
  };

  // constructor(props) {
  //   super(props);
  //   // 여기서 this.setState()를 호출하면 안 됩니다!
  //   this.state = {
  //     isLoading: true,
  //     movies: []
  //   };
  // }

  componentDidMount() {
    console.log("componentDidMount")
    this.getMovies();
  }

  render() {
    console.log("I'm rendering");
    const { isLoading, movies } = this.state;
    return (
      <section className="container">
        {isLoading ? (
          <div className="loader">
            <span className="loader__text">Loading..</span>
          </div>) : (
            <div className="movies">
              {movies.map(movie => (
                <Movie
                  key={movie.id}
                  id={movie.id}
                  year={movie.year}
                  title={movie.title}
                  summary={movie.summary}
                  poster={movie.medium_cover_image}
                  genres={movie.genres}
                />))}
            </div>
          )
        }
      </section>)
  }
}

export default App;

//여기까지가 2장///////////////////////////////////////////////////////////
// function Food({ name, picture, rating }) {
//   console.log(name)
//   return <div>
//     <h3> I Love {name}</h3>
//     <h4>{rating}/5.0</h4>
//     <img src={picture} alt={name}></img>
//   </div>
// }

// // function renderFood(dish) {
// //   console.log(dish)
// //   return <Food key={dish.key} name={dish.name} image={dish.image} />
// // }

// function App() {
//   return (
//     <div className="App">
//       <h1>HELLO!</h1>
//       {foodILike.map(dish => (
//         <Food
//           key={dish.id}
//           name={dish.name}
//           picture={dish.image}
//           rating={dish.rating}
//         />))}
//     </div>
//   );
// }

// export default App;

// //Console로 prop이 잘 되어있는지 알려줌(Warning)
// Food.propTypes = {
//   name: PropTypes.string.isRequired,
//   picture: PropTypes.string.isRequired,
//   rating: PropTypes.number
// };

// const foodILike = [
//   {
//     id: 1,
//     name: "Kimchi",
//     image:
//       "http://aeriskitchen.com/wp-content/uploads/2008/09/kimchi_bokkeumbap_02-.jpg",
//     rating: 5.0
//   },
//   {
//     id: 2,
//     name: "Samgyeopsal",
//     image:
//       "https://3.bp.blogspot.com/-hKwIBxIVcQw/WfsewX3fhJI/AAAAAAAAALk/yHxnxFXcfx4ZKSfHS_RQNKjw3bAC03AnACLcBGAs/s400/DSC07624.jpg",
//     rating: 4.9
//   },
//   {
//     id: 3,
//     name: "Bibimbap",
//     image:
//       "http://cdn-image.myrecipes.com/sites/default/files/styles/4_3_horizontal_-_1200x900/public/image/recipes/ck/12/03/bibimbop-ck-x.jpg?itok=RoXlp6Xb",
//     rating: 4.8
//   },
//   {
//     id: 4,
//     name: "Doncasu",
//     image:
//       "https://s3-media3.fl.yelpcdn.com/bphoto/7F9eTTQ_yxaWIRytAu5feA/ls.jpg",
//     rating: 4.1
//   },
//   {
//     id: 5,
//     name: "Kimbap",
//     image:
//       "http://cdn2.koreanbapsang.com/wp-content/uploads/2012/05/DSC_1238r-e1454170512295.jpg",
//     rating: 4.5
//   }
// ];