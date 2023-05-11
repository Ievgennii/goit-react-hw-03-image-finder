import React, { Component } from 'react';
// import { ToastContainer } from 'react-toastify';
import Searchbar from './Searchbar';
import ImageGallery from './ImageGallery';
import css from './styles.module.css';



class App extends Component {
  state = {
    // images: [],
    // isLoading: false,
    // error: null,
    search: ''
  };
  

  handleSearchSubmit = search => {
    this.setState({ search: search });
    

  }

  render() {
    // const { images, isLoading, error } = this.state;
    return (
      <div className={css.App}>
        <Searchbar onSubmit={this.handleSearchSubmit}/>        
        <ImageGallery search={this.state.search}/>
      </div>
    );
  }
}

export default App;
