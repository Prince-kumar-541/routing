import React, {useState} from "react";
import './Home1.css';

const Home1 = (props) => {

    const [enteredTitle, changeTitle] = useState('');

    const [text, changeText] = useState(props.title);

    const use = () => {
        changeText(enteredTitle);
    }

    const changeHandler = (event) => {
        changeTitle(event.target.value);
    }

    return(
        <div>
            <h2>{text}</h2>
            <input type='text' onChange={changeHandler}></input>
            <button onClick={use}>use</button>
        </div>
    );
}

export default Home1;