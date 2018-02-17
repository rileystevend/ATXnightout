import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import Show from './components/show.jsx';
import Dine from './components/dine.jsx';
import Search from './components/search.jsx';

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            welcome: true,
            show: null,
            restaurant: null,
        }
        this.search = this.search.bind(this);
    }

    search(zipcode, date) {
        axios.post('/app', {
            zipcode: zipcode,
            date: date
        })
        .then((response) => {
//DO SOMETHING WITH OUR SEARCH RESULTS
            this.setState({
                welcome: false,
                

            })
        })
        .catch((err) => {
            console.log('ERROR IN THE JSX SEARCH')
        })
    }

    render() {
        if (this.state.welcome === true) {
            return (
                <div>
                    <h1>Welcome to the landing page for NightLyve</h1>
                    <Search onSearch={this.search}/>
                </div>
            )
        } else {
            return ( 
            <div> 
                <Search onSearch={this.search}/>
                <Show restaurant={this.state.restaurant}/>
                <Dine concert={this.state.show}/>
            </div>
            )
        }
    }

}


//constructor(state: welcome: true)
//componentDidMount()
//render (if this.state.welcome = true, render loading page; else, run app page with result 
//if shows.length === 0 send {sorry, couldn't find any shows :( )}
//search (axios.post( , ()=> this.setState(welcome: false)))

ReactDOM.render(<App />, document.getElementById('app'));