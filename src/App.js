import './App.css';
import React, { Component } from 'react';

class App extends Component {

  onButtonClickHandler = () => {
    window.alert('Hi')
  }; 

  render() {
    return (
      <div className="App">
        <img className="App-logo" src="https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F47%2F2020%2F06%2F26%2Ftiny-white-kitten-873941684-2000.jpg" className="App-logo" alt="logo" />
        <br></br>
        <button onClick={this.onButtonClickHandler}>Hello world!</button>
      </div>
    );
  }
}
export default App;





