import React from 'react';
import Header from './Header'
import Form from './Form'

class App extends React.Component {
  constructor(props){
    super(props)
    this.state={
      title:'React Basic Form',
    }
  }
  render(){
    return(
      <div>
        <Header title={this.state.title}/>
        <Form/>
      </div>
    )
  }
 
}

export default App;
