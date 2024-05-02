import React from 'react';

import ImageCard from './ImageCard';
import './ImageList.css';

const ImageList = (props) => {
    return (
        <div className="image-list">
            {props.images.map((image, index) => (
                <ImageCard key={index} urls={image.urls} description={image.alt_description} />
            ))}
        </div>
    )
};

export default ImageList;