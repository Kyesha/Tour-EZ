import React from "react";

class Form extends React.Component {
  render() {
    return(
      <form onSubmit={this.props.getRestaurants}>
        <input type="text" name="RestaurantsName">

        </input>
        <button>
        Search For Restaurants
        </button>
      </form>
    );
  }
}


export default Form;
