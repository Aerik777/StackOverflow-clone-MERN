import { use, useEffect, useState } from "react";
import Login from "./Login";
import Register from "./Register";
import mockQuestions from "../../data/mockQuestions";
import Card from "../../common/Card";


export default function Main() {

    // const [count, setCount] = useState(0);

    const [questions, setQuestions] = useState([]);

    useEffect(() => {
        setQuestions(mockQuestions);
    }, []);

    // const handleONClick = () => {
    //     setCount(count +1 );
    // };

    // useEffect(() => {
    //     console.log("Component mutated");
    // }, []);

    // useEffect(() => {
    //     console.log("Updated count:", count);
    // }, [count]); 

    // useEffect(() => {
    //     console.log("Rendered Successfully");
    // })

        return (
        <>
        
        {/* <Login />
        <Register /> 
         <p>Count: {count}</p>
        <button onClick={handleONClick}>Increment</button> */}

        {questions.map((question) => {
            return (<Card key={question.id} {...question} />  )     
        })}
        </>
    );
}