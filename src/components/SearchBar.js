import React, { Component, useState } from 'react';

// refactor SearchBar to functional component
const SearchBar = (props) => {
    const [term, setTerm] = useState("");

    const onFormSubmit = (event) => {
        event.preventDefault();
        // ngejalanin onSubmit-nya parent yg dikirim lewat props
        // dari sini passing term ke fungsi parent
        props.onSubmit(term);
    };

    return (
        <div className='ui segment'>
            <form onSubmit={onFormSubmit} className='ui form' style={{ marginTop: "10px" }}>
                <div className="field">
                    <label>{props.name} Search</label>
                    <input
                        type="text"
                        value={term}
                        onChange={(e) => setTerm(e.target.value)}
                    />
                </div>
                <button type="submit">Search</button>
            </form>
        </div>
    );
}

// coba tanpa constructor bisa, tapi ga best practice
class SearchBarClass extends Component {
    state = { term: "" };

    onFormSubmit = (event) => {
        event.preventDefault();
        // ngejalanin onSubmit-nya parent yg dikirim lewat props
        // dari sini passing term ke fungsi parent
        this.props.onSubmit(this.state.term);
    };

    render() {
        return (
            <div className='ui segment'>
                <form onSubmit={this.onFormSubmit} className='ui form' style={{ marginTop: "10px" }}>
                    <div className="field">
                        <label>{this.props.name} Search</label>
                        <input
                            type="text"
                            value={this.state.term}
                            onChange={(e) => this.setState({ term: e.target.value })}
                        />
                    </div>
                    <button type="submit">Search</button>
                </form>
            </div>
        );
    };
};

export default SearchBar;