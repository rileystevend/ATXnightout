import React from 'react';

class Search extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            zip: '',
            date: ''
        }
        this.search = this.search.bind(this);
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

    search(e) {
        e.preventDefault();
        this.props.onSearch(this.state.zip, this.state.date);
    }

    render() {
        return (
          <div> 
            Pick Your Night
            <input value={this.state.date} onChange={this.onDateChange}/>
            What's Your Zip? 
            <input value={this.state.zip} onChange={this.onZipChange}/>
            <button onClick={this.search}>Let's Boogie</button>
          </div>
        )
    }
}

export default Search;