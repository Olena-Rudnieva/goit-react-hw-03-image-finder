import { Component } from 'react';
import { ToastContainer } from 'react-toastify';
import { Searchbar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { getAPI } from '../services/api-service';
import { Loading } from './Loader/Loader';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export class App extends Component {
  state = {
    query: '',
    photos: [],
    page: '',
    loading: false,
  };

  handleSearch = query => {
    this.setState({ query });
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.query !== this.state.query) {
      this.setState({ loading: true });
      this.setState({ photos: [] });
      getAPI(this.state.query)
        .then(response => {
          if (!response.ok) {
            throw new Error(response.status);
          }
          return response.json();
        })
        .then(data =>
          // this.setState(prevState => ({
          //   photos: [...prevState.photos, data.hits],
          // }))
          this.setState({ photos: data.hits })
        )
        .catch(error => console.log(error))
        .finally(() => this.setState({ loading: false }));
    }
  }

  render() {
    return (
      <div>
        <Searchbar onSubmit={this.handleSearch} />
        {this.state.loading && <Loading />}
        {/* {this.state.photos ? (
          <ImageGallery photos={this.state.photos} />
        ) : (
          toast(
            'Sorry, there are no images matching your search query. Please try again.'
          )
        )} */}
        {this.state.photos.length > 0 && (
          <ImageGallery photos={this.state.photos} />
        )}

        <ToastContainer />
      </div>
    );
  }
}

// fetchPhoto(query, currentPage, perPage)
//   .then(option => {
//     if (option.hits.length === 0) {
//       Notiflix.Notify.failure(
//         'Sorry, there are no images matching your search query. Please try again.'
//       );
//     } else {
//       option.hits.map(value =>
//         galleryEl.insertAdjacentHTML('beforeend', renderPhoto(value))
//       );
//       observer.observe(target);
//       lightbox.refresh();
//       Notiflix.Notify.success(
//         `"Hooray! We found ${option.totalHits} images."`
//       );
//       // if (option.totalHits > perPage) {
//       //   loadMoreBtn.hidden = false;
//       // }
//     }
//   })
//   .catch(error => {
//     console.log(error);
//   })
//   .finally(() => {
//     formEl.reset();
// });
