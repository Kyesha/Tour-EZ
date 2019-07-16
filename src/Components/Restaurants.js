import React from 'react';

class Restaurants extends React.Component {
  render() {
    return(
      <div>Lets get something to Grub on!</div>
    );
    getRestaurant = (event) => {
      const restaurantName = event.target.elements.restaurantName.value;
      event.preventDefault();
      console.log(restaurantName);
      const url = 'https:developers.zomato.com/api/v2.1/search?entity_ids=59&entity_type=city&apikey=f2eb8f96660c3ab047ca7842df116edf';
      axios.get(https:developers.zomato.com/api/v2.1/search?entity_ids=59&entity_type=city&apikey=f2eb8f96660c3ab047ca7842df116edf')
      .then(res => {
      this.setState({restaurant: res.data.restaurant});
     console.log(this.state.restaurant);
  }
}


export default Restaurants;
