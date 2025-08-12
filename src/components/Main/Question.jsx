import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import mockQuestions from '../../data/mockQuestions';
import Markdown from 'react-markdown';

export default function Question() {
  const { id } = useParams();
  const [question, setQuestion] = useState(null);

  useEffect(() => {
    const foundQuestion = mockQuestions.find((item) => item.id === parseInt(id));
    setQuestion(foundQuestion);
  }, [id]);

  return (
    <>
      {!question ? (
        <div className='text-center text-2xl'>
          <h1>Loading...</h1>
        </div>
      ) : (
        <div className='max-w-4xl mx-auto p-6 bg-white shadow-md rounded-lg'>
          <h1 className='text-3xl font-bold mb-4'>{question.question}</h1>
          <div className="flex flex-row items-center gap-4 mb-2">
            <p className='text-gray-600'>Asked by: {question.creator}</p>
            <p className='text-gray-500 text-sm'>On: {new Date(question.createdDate).toLocaleDateString()}</p>
          </div>
          <div className='mb-4'>
            {question.tags.map((tag, index) => (
              <span key={index} className="inline-block bg-indigo-100 text-indigo-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded">
                #{tag}
              </span>
            ))}
          </div>
          <span>The contect is below:</span>
          <div className="prose max-w-4xl bg-gray-200 p-4 rounded-lg">
            <Markdown>{question.body}</Markdown>
          </div>
        </div>
      )}
    </>
  );
}