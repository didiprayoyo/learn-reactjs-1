import React from 'react';

const aboutElement = <h1>This web-app was created by Boruto</h1>; // di react auto udah ada jsx, cek aja modules
// cek lagi format import img dari folder public

const About = () => {
    return (
        <div
            style={{
                display: "flex",
                justifyContent: "Left",
                alignItem: "Right",
                height: "100vh",
            }}
        >
            <h1>This is About Page.</h1>
            {aboutElement}
        </div>
        // {[aboutElement]}
        // bukan <aboutElement />
    );
};

export default About;