import React, {Component} from 'react';

// Functional component
// const SearchBar = () => {
//   return <input />
// };

// React based componet class
class SearchBar extends Component {
  constructor(props){
    super(props);
    this.state = {'term':'Jay'}
  }

  render() {
    return (
      <div className="search-bar">
        <h4>Searching for {this.state.term}</h4>
        <input
          onChange={(event) => this.onInputChange(event.target.value)  }
        />
      </div>
    );
  }

  onInputChange(term) {
    this.setState({term});
    this.props.onSearchTerm(term)
  }

}

export default SearchBar;
