import React, { Component } from 'react';
// import { ToastContainer } from 'react-toastify';
import Searchbar from './Searchbar';
import ImageGallery from './ImageGallery';
// import Modal from './Modal';
import css from './styles.module.css';

class App extends Component {
  state = {
    search: '',
    showModal: false,
  };

  handleSearchSubmit = search => {
    this.setState({ search: search });
  };

  render() {
    const { search } = this.state;
    return (
      <div className={css.App}>
        <Searchbar onSubmit={this.handleSearchSubmit} />
        <ImageGallery search={search} />
      </div>
    );
  }
}

export default App;