import React, { Component } from 'react';

import SearchBar from '../components/SearchBar';

// import from API
import getUnsplashApi from '../api/unsplash';
import ImageList from '../components/ImageList';

class ImageSearch extends Component {
    state = { images: [] };

    onSearchSubmit = async (term) => {
        const response = await getUnsplashApi.get("/search/photos", {
            params: { query: term },
        });
        this.setState({ images: response.data.results });
        console.log(this.state.images);
    };

    render() {
        const { images } = this.state;
        return (
            <div className='ui container'>
                <SearchBar onSubmit={this.onSearchSubmit} name="Image" />

                {/* ImageList, bukan ImageSearch ntar malah not responding */}
                <ImageList images={images} />
            </div>
        )
    }
}

export default ImageSearch;