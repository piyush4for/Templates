import React, { Component } from 'react';

//when to use class based components or function based
//usually do functional component 
//if need to add side function to it then use class
class SearchBar extends Component {
    //initialize state in a class based component
    constructor(props){
        //super used to call parent class
        super(props);

        this.state = { term: ''};
    }
    
    render() {
        return (
            <div className="search-bar">                
              <input 
                value={this.state.term}
                onChange={ e => this.onInputChange(e.target.value )}/>
               
            </div>
        );
    }

    onInputChange(term){
        this.setState({term});
        this.props.onSearchTermChange(term);
    }
}

export default SearchBar;
