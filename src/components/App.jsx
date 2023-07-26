import { Component } from 'react';
import { ToastContainer } from 'react-toastify';
import { Searchbar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { getAPI } from '../services/api-service';

export class App extends Component {
  state = {
    query: '',
    page: '',
    loading: false,
  };

  handleSearch = query => {
    this.setState({ query });
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.query !== this.state.query) {
      getAPI(this.state.query)
        .then(response => response.json())
        .then(photos => console.log(photos));
    }
  }

  render() {
    return (
      <div>
        <Searchbar onSubmit={this.handleSearch} />
        {this.state.loading && <h1>Loading...</h1>}
        <div>
          <ImageGallery />
        </div>
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
