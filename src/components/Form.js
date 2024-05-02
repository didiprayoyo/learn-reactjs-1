import React, { Component } from 'react';

class Form extends Component {
    constructor(props) {
        super(props);
        this.state = { firstName: "", lastName: "" };

        // biar bisa pakai this, ngerefer ke objek tsb. (class Form)
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        // pakai index signatures, samain event.target.name dan this.state. nya
        this.setState({ [event.target.name]: event.target.value })
        // let newValue = event.target.value;
        // if (event.target.name == "firstName") this.setState({ firstName: newValue });
        // else this.setState({ lastName: newValue });
    }

    handleSubmit(event) {
        alert(`A name was submitted: ${this.state.firstName} ${this.state.lastName}`);
        event.preventDefault();
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>Firstname: 
                        <input
                            type="text"
                            name="firstName"
                            value={this.state.firstName}
                            onChange={this.handleChange}
                        />
                    </label>
                    <br />
                    <label>Lastname: 
                        <input
                            type="text"
                            name="lastName"
                            value={this.state.lastName}
                            onChange={this.handleChange}
                        />
                    </label>
                    <br />
                    <input type="submit" value="Submit Fullname" />
                </form>
            </div>
        )
    }
}

export default Form;