import React from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import ErrorBoundary from '../components/ErrorBoundary';
import './App.css';

class  App extends React.Component {
    constructor(){
        super()
        this.state = {
            robots: [],
            searchfield: ''
        }
    }
    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response =>{
            return response.json();
        })
        .then(users => {
            this.setState({robots:users})
        })

    }
    onSearchChange=(event) => {
        this.setState({searchfield: event.target.value});
    }
    render(){
        const filteredRobots = this.state.robots.filter(robots => robots.name.toLowerCase().includes(this.state.searchfield.toLowerCase()))
    return(
        <div className='tc'>
            <h1 className="f2">RoboFriends</h1>
            <SearchBox searchChange={this.onSearchChange}/>
            <Scroll>
                <ErrorBoundary>
                    <CardList robots={filteredRobots}/>
                </ErrorBoundary>
            </Scroll>
        </div>
    );
    }
}

export default App;
