// React day2
// import these libs
import React, { Component } from 'react'; // define & connect 1component
// import ReactDOM from 'react-dom/client'; // show & interact component
import { faker } from '@faker-js/faker';

// const el = document.getElementById('root'); // get refernce to div with id=root
// const root = ReactDOM.createRoot(el); // tell react to take control that element

// create function as component
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

// satu orang, bisa lgsg objek props, ntar pake props.name/job
const Intro = ({name, job}) => {
    return <p>Hai, nama saya {name}. Pekerjaan saya {job}.</p>
}

// > 1 orang dalam data sesuai format json berikut
const peopleData = [
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

// Props: component nesting, reusability (different props), configuration (we can give, in same function, ex text-font etc)

// ga perlu length, O(n) mah ga ngaruh
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

// TO DO: date + day + time
// const Comment = ({key, avatar, name, sentence, date}) => {
    // return (
class CommentContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            clickCounter: 0,
            liked: false
        }
    }

    handleClick = () => {
        this.setState({ clickCounter: this.state.clickCounter + 1 })
    }

    // kek form jg, bisa 1 handle aja sesuaikan kondisi pada event.target.name pada input form
    handleLike = () => {
        if (!this.state.liked) this.setState({ liked: !this.state.liked });
    }
    handleDislike = () => {
        if (this.state.liked) this.setState({ liked: !this.state.liked });
    }

    // problem: bbrp img avatar ga muncul, udah AMANNN
    // lgsg pake props, tanpa simpen di state
    // apakah sudah best practice??? ini kalo interaksi ambil dari realtime be, makanya lgsung props
    // kalo interaksi ribet di fe keknya pake state aja
    // dua2nya di atas bisa pakai useEffect hipotesisku, tpi blum dicoba
    render() {
        // klo ribet pake props karena panjang, akses aja satu2 kek gini, nebak sendiri kok
        // const { key, avatar, sentence, name, date } = this.props;
        return (
            <div className="ui container comments" key={this.props.key}>
                <div className="comment">
                    <a href="/" className="avatar">
                        <img alt="avatar" src={this.props.avatar} />
                    </a>
                    <div className="content">
                        <a href="/" className="author">
                            {this.props.name}
                        </a>
                        <a className="metadata">
                            {/* faker.date.recent(): Third-party cookie will be blocked. Learn more in the Issues tab. */}
                            <span className="date">{this.props.date}</span>
                        </a>
                        <a className="like"> { this.state.liked ? "| Liked by me" : "" } | Clicked: {this.state.clickCounter}</a>
                        <div className="text">{this.props.sentence}</div>
                        <button onClick={this.handleClick}>Click me</button>
                        <button onClick={this.handleLike}>Like</button>
                        <button onClick={this.handleDislike}>Dislike</button>
                    </div>
                </div>
            </div>
        )
    };
    // );
};

class Comments extends Component {
    constructor(props){
        super(props);
        // console.log("ini props dalam constructor: ", props);
        // state: nyimpen props (yg dipass ketika manggil jsx) buat react class component
        // biasanya pakai useState
        this.state = {
            comments: props.data.comments,
            length: props.data.length,
        }
    }

    render() {
        const { comments, length } = this.state;
        // atau langsung ambil dari props, tanpa simpen state
        // const { comments, length } = this.props.data;
        // console.log("lagi render", this.props, comments, length);
        return (
            <div>
                <h1>{comments.length} Comments</h1>
                {comments.map((comment, index) => (
                    <CommentContainer
                    key={index}
                    avatar={comment.avatar}
                    name={comment.name}
                    sentence={comment.sentence}
                    date={comment.date}
                    />
                ))};
            </div>
        );
    };
};

const RandomComments = () => {
    return <Comments data={generateRandomComments()} />;
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

export { generateRandomComments, Comments, RandomComments }; // { generateRandomComments, Comment, Comments, RandomComments };