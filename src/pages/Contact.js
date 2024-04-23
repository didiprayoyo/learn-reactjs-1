import React from 'react';
import ReactDOM from 'react-dom'; // render to specific DOM

// how to take from db and do for-loop below
let contactElement = <p>Contacts list</p>
const Contact = (contacts) => {
    if (contacts.length == 0) contactElement = <p>No contact input before</p>
    return (
        <ul>
            <li></li>
        </ul>
    )
};

export default Contact;