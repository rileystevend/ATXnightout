import React from 'react';

class Search extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            zip: null,
            date: null
        }
        this.onZipChange = this.onZipChange.bind(this);
        this.onDateChange = this.onDateChange.bind(this);
    }

    onZipChange(e) {
        e.preventDefault();
        this.setState({
            zip: e.target.value
        })
    }   

    onDateChange(e) {
        e.preventDefault();
        this.setState({
            date: e.target.value
        })
    }

    onSearch(e) {
        e.preventDefault();
        this.props.search(this.state.zip, this.state.date)
        //pass search function down as prop
    }

    render() {
        return (
          <div> 
            Pick Your Night
            <input onChange={this.onDateChange}/>
            What's Your Zip? 
            <input onChange={this.onZipChange}/>
            <button onClick={this.onSearch}>Let's Boogie</button>
          </div>
        )
    }
}