import React from "react";
import Title from "./Components/Title";
import Form from "./Components/Form";
import Restaurants from "./Components/Restaurants";
import axios from "axios";


const API_KEY = "f2eb8f96660c3ab047ca7842df116edf"
class App extends React.Component{
  getRestaurants = (event) => {
      const RestaurantsName = event.target.elements.RestaurantsName.value;
      event.preventDefault();
      console.log(RestaurantsName);
      const url = 'https:developers.zomato.com/api/v2.1/search?entity_ids=59&entity_type=city&apikey=f2eb8f96660c3ab047ca7842df116edf'
      axios.get(url)
      .then(res => {
        console.log

      })
    }




  // getWeather = async (event) => {
  //   event.preventDefault();
  //   const api_call = await fetch(`https://developers.zomato.com/api/v2.1/search?entity_id=59&entity_type=city&apikey=${API_KEY}`);
  //   const data = await api_call.json();
  //   console.log(data);
  // }
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
