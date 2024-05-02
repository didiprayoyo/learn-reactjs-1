import React, { Component, createRef } from 'react';

class ImageCard extends Component {
    constructor(props) {
        super(props);
        this.state = { span: 0 };
        this.imageRef = createRef();

        this.setSpan = this.setSpan.bind(this);
    };

    componentDidMount() {
        console.log(this.imageRef);
        this.imageRef.current.addEventListener("load", this.setSpan);
    };

    setSpan() {
        const height = this.imageRef.current.clientHeight;
        const span = Math.ceil(height/10);
        this.setState({ span });
    };

    render() {
        const { description, urls } = this.props;

        return (
            <div style={{ gridRowEnd: `span ${this.state.span}`}}>
                <img src={urls.regular} alt={description} ref={this.imageRef}/>
            </div>
        );
    };
}

export default ImageCard;