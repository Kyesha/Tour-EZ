import React from 'react';
import Title from './Components/Title';
import Form from './Components/Form';
import Restaurants from './Components/Restaurants';
import axios from 'axios';
import Restaurant from './Components/Restaurant '

const API_KEY = "f2eb8f96660c3ab047ca7842df116edf"
class App extends React.Component{
  getRestaurants = (event) => {
      const RestaurantsName = event.target.elements.RestaurantsName.value;
      event.preventDefault();
      console.log(RestaurantsName);
      const url = 'https:developers.zomato.com/api/v2.1/search?entity_ids=59&entity_type=city&apikey=f2eb8f96660c3ab047ca7842df116edf'
      axios.get(url)
      .then(res => {
        console.log(res);

      })
    }
      State = {
        restaurantsName = []
      }
        getRestuarants = (e) async => {
          e.preventDefault();
          const user = e.target.elements.restaurants.value;
          if (!user) return;
          let { restuarantsName } = await axios.get(`https://developers.zomato.com/api/v2.1/search?entity_id=59&entity_type=city&apikey=f2eb8f96660c3ab047ca7842df116edf`)
          this.setState({ RestaurantsName : data });
        }
      

      //   getRestaurant = async (e) => {
      //     e.preventDefault();
      //     const user = e.target.elements.restuarant.value;
      //     if (!user) return;
      //     let { data } = await axios.get(`/api/${user}`)
      //     this.setState({ restuarantData: data });
      //   }
  //   const data = await api_call.json();
  //   console.log(data);
  // }
  render() {
    return (
    <div>
      <Title />
      <Form getRestaurants={this.getRestaurants} />
      <Restaurants />
      <Restaurant getRestaurant={this.getRestaurant}/>

    



    </div>
    );
  }
}







export default App;
