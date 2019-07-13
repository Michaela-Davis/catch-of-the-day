import React from 'react';
import { getFunName } from '../helpers';

class StorePicker extends React.Component {
  myInput = React.createRef();

  // `goToStore` is a property called "goToStore" just like `myInput` is a property on the component that we set to an arrow function which will allow us to bind the value of this to the store component
  goToStore = (event) => {
    // 1. Stop the form from submitting
    event.preventDefault();
    // 2. Get the text from that input
    console.log(this);
    // 3. Change the page to /store/whatever-they-entered
    
  }

  render() {
    return (
      <form className="store-selector" onSubmit={ this.goToStore }>
        <h2>Please Enter a Store</h2>
        <input 
          type='text' 
          ref={ this.myInput }
          required placeholder='Store Name' 
          defaultValue={ getFunName() }>
        </input>
        <button type='submit'>Visit Store →</button>
      </form>
    )
  }
}

export default StorePicker;