import React from "react";
import Title from "./Components/Title";
import Form from "./Components/Form";
import Weather from "./Components/Weather";

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
      <Title />
      <Form />
      <Weather />



    </div>
    );
  }
}





export default App;
