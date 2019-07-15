import React from "react";
import Title from "./Components/Title";
import Form from "./Components/Form";
import Restaurants from "./Components/Restaurants";
import axios from 'axios'

const API_KEY = "f2eb8f96660c3ab047ca7842df116edf"
class App extends React.Component{
  getWeather = async () => {
    const api_call = await fetch(`https://developers.zomato.com/api${API_KEY}`);
    const data = await api_call.json();
    console.log(data);
  }
  render() {
    return (
      <div>
        <p>Hello</p>
      </div>
    )
  }
}







export default App;
