import { useEffect, useState } from "react";
import Login from "./Login";
import Register from "./Register";
import mockQuestions from "../../data/mockQuestions";
import Card from "../../common/Card";
import { useAuth } from "../../context/AuthContext";
import Form from "../../common/Form";

export default function Main() {
  const { isLoggedIn } = useAuth();

  // const [count, setCount] = useState(0);

  const [questions, setQuestions] = useState([]);
  const [showForm, setShowForm] = useState(false);

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

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const newQuestion = {
      id: questions.length + 1,
      question: form.title.value,
      content: form.content.value,
      tags: form.tags.value.split(",").map((tag) => tag.trim()),
      creator: "User" + (questions.length + 1),
      createdDate: new Date().toISOString(),
    };
    setQuestions([...questions, newQuestion]);
    form.reset();
  };


  return (
    <>
      <div className="w-screen">
        <div className="relative max-w-7xl mx-auto p-6 bg-white shadow-md rounded-lg mt-8 flex justify-between items-center">
          <h2 className="text-2xl font-bold">Questions</h2>
          {isLoggedIn && (
            <button
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
              onClick={() => setShowForm(true)}
            >
              Ask Questions
            </button>
          )}
          {
            showForm && (
              <Form onSubmit={handleSubmit} setShowForm={setShowForm}/>
            )
          }
        </div>
        <div className="relative max-w-7xl mx-auto p-6 bg-white shadow-md rounded-lg">
          {questions.map((question) => {
            return <Card key={question.id} {...question} />;
          })}
        </div>
      </div>
    </>
  );
}
