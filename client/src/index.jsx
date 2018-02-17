import React from 'react';
import ReactDOM from 'react-dom';
//import Show  from [filepath]
//import Dine component from [filepath]

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

    search(zipcode) {
        axios.post('/app', {
            zipcode: zipcode
        })
        .then((response) => {
//DO SOMETHING WITH OUR SEARCH RESULTS
            this.setState({
                welcome: false
            })
        })
        .catch((err) => {
            console.log('ERROR IN THE JSX SEARCH')
        })
    }

    render () {
        if (this.state.welcome === true) {
            return <h1>Welcome to the landing page!</h1>
            //loading page
            //<Search />
        } else {
            return //<Search/><Show/><Dine/>
        }
    }

}

//constructor(state: welcome: true)
//componentDidMount()
//render (if this.state.welcome = true, render loading page; else, run app page with result 

//search (axios.post( , ()=> this.setState(welcome: false)))

ReactDOM.render(<App />, document.getElementById('app'));