import React from 'react';
import SearchBox from '../components/SearchBox';
import CardList from '../components/CardList';
import Scroll from '../components/scroll';
import './App.css';

class App extends React.Component {
    constructor() {
      super()
      this.state = {
        robots:[],
        searchfield:''
      }
    }
    onSearchChange = (event) => {
      this.setState({ searchfield:event.target.value });
    }
    componentDidMount() {
      fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(response => this.setState({ robots:response }));
    }
    render() {
      const { robots,searchfield } = this.state
      const filteredRobots = robots.filter(robot => {
        return robot.name.toLowerCase().includes(searchfield.toLowerCase());
      });
      if (!robots.length) {
        return <h1>Loading</h1>;
      }
      return (
        <div className='tc'>
        <h1 className='f1'>RoboFriends</h1>
        <SearchBox searchChange={this.onSearchChange}/>
        <Scroll>
          <CardList robots={filteredRobots}/>
        </Scroll>
        </div>
      );
    }
}




export default App;
