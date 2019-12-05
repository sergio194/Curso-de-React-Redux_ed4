import React, { Component } from 'react';
import {connect} from 'react-redux';
import {Header} from './Header';
import List from './List';
import {createList} from './../state/lists/lists-action-creator'

import '../styles/App.css';

class App extends Component {
  render() {
    return(
      <>
        <Header>Go For It!</Header>
        <button onClick={this.props.createList.bind(this)} className="tdl-add_list_button">Create new list</button>
        <section className="tdl-main-section">
          {this.props.lists.map((list, idx, lists) => (
            <List
              newListName={() => this.newListName(idx)}
              submitName={this.submitName}
              changeListName={() => this.changeListName(idx)}
              key={idx}
            >
              {list}
            </List>
          ))}
        </section>
      </>
  )};

  constructor(props) {
    super(props)
    this.state = {
      lists: []
    }

    this.changeListName = this.changeListName.bind(this);
  }

  changeListName(index, event) {
    let newArr = this.state.lists.slice(0);
    newArr[index] = "";

    this.setState({
      lists: newArr
    });
  }

  newListName(index, event) {
    let newArr = this.state.lists.slice(0);
    newArr[index] = event.target.value;

    this.setState({
      lists: newArr
    });
  }

  submitName = (event) => {
    if(event.keyCode === 13){ event.target.blur() }
  }


}
const mapStateToProps = function(state){
  return {
    lists: state.lists
  }
}

const mapDispatchToProps = function(dispatch){
  return {
    createList: () => dispatch(createList())
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(App)