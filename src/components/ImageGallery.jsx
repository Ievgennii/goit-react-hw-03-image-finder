import React, { Component } from 'react';
import ImageGalleryItem from './ImageGalleryItem';
import Button from './Button';
import { MagnifyingGlass } from 'react-loader-spinner';
import axios from 'axios';
import css from './styles.module.css';

axios.defaults.baseURL = 'https://pixabay.com/api/';

class ImageGallery extends Component {
  state = {
    images: [],
    isLoading: false,
    error: null,
    search: null,
    emptyResponce: false,
    page: 1,
  };

  async componentDidUpdate(prevProps, prevState) {
    const KEY = '34611977-1c6ac37fcf885911789ad5cb9';


    if (prevProps.search !== this.props.search) {  
      this.setState({ isLoading: true });
      this.setState({ search: this.props.search });
      this.setState({ page: 1 });
      this.setState({ error: null });

      try {
        const response = await axios.get(
          `/?q=${this.props.search}&page=${this.state.page}&key=${KEY}&image_type=photo&orientation=horizontal&per_page=12`
        );
        this.setState({
          images: response.data.hits,
          emptyResponce: !response.data.hits.length,
        });
      } catch (error) {
        this.setState({ error });
        alert(`Whoops, something went wrong: ${error.message}`);
      } finally {
        this.setState({ isLoading: false });
        console.log(this.state.images);
      }
    }

    if (prevState.page !== this.state.page) {
      
      this.setState({ isLoading: true });
      this.setState({ search: this.props.search });
      

      try {
        
        const response = await axios.get(
          `/?q=${this.props.search}&page=${this.state.page}&key=${KEY}&image_type=photo&orientation=horizontal&per_page=12`
        );
        this.setState({
          images: response.data.hits,
          
        });
      } catch (error) {
        this.setState({ error });
        this.setState({ page: 1 });
        alert("We're sorry, but you've reached the end of search results.");
      } finally {
        this.setState({ isLoading: false });
        
      }
    }
  }

  changePage = () => {
    if (this.state.images.length === 12) {
      this.setState(prevState => ({
        page: prevState.page + 1,
      }));
    }
  };

  render() {
    const { images, isLoading, error, emptyResponce } = this.state;

    return (
      <div>
        <ul className={css.ImageGallery}>
          
          {isLoading && <MagnifyingGlass />}
          {emptyResponce && <p>Ничего не найдено</p>}

          {images.length > 0 && <ImageGalleryItem images={images} />}
        </ul>

        <div className={css.ButtonConteiner}>
          {!error && images.length === 12 && (
            <Button changePage={this.changePage} />
          )}
        </div>
      </div>
    );
  }
}

export default ImageGallery;
