import { Component } from 'react';
import { ToastContainer } from 'react-toastify';
import { Searchbar } from '../Searchbar/Searchbar';
import { ImageGallery } from '../ImageGallery/ImageGallery';
import { getAPI } from '../../services/api-service';
import { Loading } from '../Loader/Loader';
import { AppStyle } from './App.styled';

export class App extends Component {
  state = {
    query: '',
    photos: [],
    perPage: 12,
    page: 1,
    loading: false,
    error: null,
  };

  componentDidUpdate(prevProps, prevState) {
    if (
      prevState.query !== this.state.query ||
      this.state.page !== prevState.page
    ) {
      // this.setState({ loading: true });
      if (prevState.query !== this.state.query) {
        this.setState({ loading: true, page: 1, photos: [] });
      }

      getAPI(this.state.query, this.state.perPage, this.state.page)
        .then(response => {
          if (response.ok) {
            return response.json();
          }
          return Promise.reject(new Error('Please try again!'));
        })
        .then(data => {
          this.setState(prevState => ({
            photos: [...prevState.photos, ...data.hits],
          }));
          console.log(prevState.photos);
          console.log(this.state.photos);
        })
        .catch(error => {
          this.setState({ error });
          console.log(error.message);
        })
        .finally(() => this.setState({ loading: false }));
    }
  }

  handleSearch = query => {
    this.setState({ query });
  };

  handleBtnLoadMore = () => {
    this.setState(prevState => ({ page: prevState.page + 1 }));
  };

  render() {
    return (
      <AppStyle>
        <Searchbar onSubmit={this.handleSearch} />
        {this.state.error && <h1>Please try again!</h1>}
        {this.state.loading && <Loading />}
        {this.state.photos.length > 0 && (
          <ImageGallery
            photos={this.state.photos}
            onLoadMore={this.handleBtnLoadMore}
          />
        )}
        {this.state.photos.length === 0 &&
          this.state.query !== '' &&
          this.state.loading === false && (
            <h1>
              Sorry, there are no images matching your search query. Please try
              again.
            </h1>
          )}

        <ToastContainer />
      </AppStyle>
    );
  }
}
