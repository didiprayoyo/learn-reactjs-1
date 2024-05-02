import React from 'react';

// how to take from db and do for-loop below
let contactElement = <p>Contacts list</p>
const Contact = (contacts) => {
    if (contacts.length == 0) contactElement = <p>No contact input before</p>
    return (
        <div
            style={{
                display: "flex",
                justifyContent: "Left",
                alignItem: "Right",
                height: "100vh",
            }}
        >
            <h1>This is Contact Page</h1>

            {/* <ul>
                <li></li>
            </ul> */}
        </div>
    );
};

export default Contact;