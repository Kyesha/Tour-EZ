import React from "react";
import Title from "./Components/Title";
import Form from "./Components/Form";
import Restaurants from "./Components/Restaurants";
import axios from "axios";


const API_KEY = "f2eb8f96660c3ab047ca7842df116edf"
class App extends React.Component{
  constructor(props) {
    super(props);
    this.state = { restaurants: ''}
  }

  getRestaurants = (event) => {
      const restaurantsName = event.target.elements.RestaurantsName.value;
      event.preventDefault();
      console.log(restaurantsName);
      const url = `https://developers.zomato.com/api/v2.1/search?entity_id=280&entity_type=city&apikey=${API_KEY}`
      axios.get(url)
      .then(res => {
        this.setState({restaurants: res.data.restaurants});
        console.log(this.state.restaurants[0].restaurant.name)
      })
    }

  render() {
    return (
    <div>
      <Title />
      <Form getRestaurants={this.getRestaurants}/>
      <Restaurants />



    </div>
    );
  }
}







export default App;
