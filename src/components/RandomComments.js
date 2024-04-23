// React day2
// import these libs
import React from 'react'; // define & connect 1component
import ReactDOM from 'react-dom'; // show & interact component
import { faker } from '@faker-js/faker';

const el = document.getElementById('root'); // get refernce to div with id=root
const root = ReactDOM.createRoot(el); // tell react to take control that element

// create component as function
const App = () => {
    // coba pake variabel
    const message = "Hi, there!";
    // pake object
    const data = {
        color: "red",
    };
    // pake time
    const date = new Date();
    const time = date.toLocaleDateString();
    // pake input
    return (<div style={{ color:"red", }}>
                <h1>Halo {message} {data.color} {time} {new Date().toLocaleTimeString()}</h1>
                <input type="number" min={5} max={10} style={{ border: "3px solid" }}/>
            </div>); // jsx: react extension for js
}

// satu orang
const Intro = ({name, job}) => {
    return <p>Hai, nama saya {name}. Pekerjaan saya {job}.</p>
}

// > 1 orang dalam data sesuai format json berikut
const data = [
    {name: "luigi", job: "ghost hunter"},
    {name: "mario", job: "repairman"},
]
const Intro2 = ({people}) => {
    return (
        <ul>
            {people.map((person) => (
                <li key={person.name}>Hai, nama saya {person.name}. Pekerjaan saya {person.job}.</li>
            ))}
        </ul>
    )
}

// root.render(<App />); // show the component on the screen (render ke DOM)
// tool Babel jadi gini: React.createElement

// Props: component nesting, reusability (different ), configuration (we can give, in same function, ex text-font etc)

const generateRandomComments = () => {
    const generateRandomDate = () => {
        const startDate = new Date(2023, 0, 1); // January 1, 2023
        const endDate = new Date(); // Current date
        const timestamp = startDate.getTime() + Math.random() * (endDate.getTime() - startDate.getTime());
        return new Date(timestamp);
    }

    const min = 1, max = 100;
    const randomNumber = Math.floor(Math.random() * (max - min)) + min;
    const comments = [];
    for (let i = 0; i < randomNumber; i++){
        comments.push({
            avatar: faker.image.avatar(),
            name: faker.person.fullName(),
            sentence: faker.lorem.sentences(),
            date: generateRandomDate().toLocaleDateString(),
        });
    }

    comments.sort((c1, c2) => new Date(c1.date) - new Date(c2.date));
    return {comments, length: randomNumber};
}

const Comment = ({key, avatar, name, sentence, date}) => {
    return (
        <div className="ui container comments" key={key}>
            <div className="comment">
                <a href="/" className="avatar">
                    <img alt="avatar" src={avatar} />
                </a>
                <div className="content">
                    <a href="/" className="author">
                        {name}
                    </a>
                    <div className="metadata">
                        {/* faker.date.recent(): Third-party cookie will be blocked. Learn more in the Issues tab. */}
                        <span className="date">{date}</span>
                    </div>
                    <div className="text">{sentence}</div>
                </div>
            </div>
        </div>
    )
}

const Comments = ({data}) => {
    return (
        <div>
            <h1>{data.length} Contacts</h1>
            {data.comments.map((comment, index) => (
                <>
                    <Comment
                    key={index}
                    avatar={comment.avatar}
                    name={comment.name}
                    sentence={comment.sentence}
                    date={comment.date}
                    />
                </>
            ))};
        </div>
    );
};

const RandomComments = () => {
    return <Comments data={generateRandomComments()} />
}

// root.render((
//     <>
//         <App />
//         <Intro name="luigi" job="ghost hunter"/>
//         <Intro name="mario" job="repairman"/>
//         <Intro2 people={data} />
//         <Comments data={generateRandomComments()} />
//     </>
// ));

export default RandomComments; // { generateRandomComments, Comment, Comments, RandomComments };