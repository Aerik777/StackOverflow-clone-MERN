import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import mockQuestions from "../../data/mockQuestions";
import mockAnswers from "../../data/mockAnswer";
import Markdown from "react-markdown";
import VoteButton from "../../common/VoteButton";
import Answer from "./Answer";

export default function Question() {
  const { id } = useParams();
  const [question, setQuestion] = useState(null);
  const [answers, setAnswers] = useState([]);
  const [count, setCount] = useState(0);

  const handleOnClick = () => {
    setCount(count + 1);
  };

  const handledownClick = () => {
    setCount(count - 1);
  };

  // Fetch the question based on the ID from the URL

  useEffect(() => {
    const foundQuestion = mockQuestions.find(
      (item) => item.id === parseInt(id)
    );
    setQuestion(foundQuestion);
  }, [id]);

  useEffect(() => {
    if (question) {
      const foundAnswers = mockAnswers.filter(
        (answer) => answer.questionId === question.id
      );
      setAnswers(foundAnswers);
    }
  }, [question]);

  return (
    <>
      {!question ? (
        <div className="text-center text-2xl">
          <h1>Loading...</h1>
        </div>
      ) : (
        <div className="max-w-4xl mx-auto p-6 bg-white shadow-md rounded-lg">
          <h1 className="text-3xl font-bold mb-4">{question.question}</h1>
          <div className="flex flex-row items-center gap-4 mb-2">
            <p className="text-gray-600">Asked by: {question.creator}</p>
            <p className="text-gray-500 text-sm">
              On: {new Date(question.createdDate).toLocaleDateString()}
            </p>
          </div>

          <div className="flex flex-row items-start justify-center gap-4 mb-4">
            <VoteButton onUpvote={handleOnClick} onDownvote={handledownClick} count={count} />
            <div>
              <div className="prose max-w-4xl mb-4">{question.content}</div>
              <span>The contect is below:</span>
              <div className="prose max-w-4xl bg-gray-200 p-4 rounded-lg">
                <Markdown>{question.body}</Markdown>
              </div>
            </div>
          </div>
          <div className="mb-4">
            {question.tags.map((tag, index) => (
              <span
                key={index}
                className="inline-block bg-indigo-100 text-indigo-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded"
              >
                #{tag}
              </span>
            ))}
          </div>
          {
            answers && answers.length > 0 ? (
              answers.map((answer) => (
                <Answer
                  key={answer.id}
                  answer={answer.body}
                  creator={answer.author}
                  createdDate={answer.createdAt}
                  count={count}
                  onUpvote={handleOnClick}
                  onDownvote={handledownClick}
                  comments={answer.comments}
                />
              ))
            ) : (
              <div className="text-gray-500">No answers yet.</div>
            )
          }
        </div>
      )}
    </>
  );
}
