export default function Card({ id, question, creator, createdDate, tags }) {
  return (
    <div className="bg-white shadow-md rounded-lg p-6 mb-4">
      <h2 className="text-xl font-semibold text-gray-800"><a href={`/question/${id}`}>{question}</a></h2>
      <p className="text-gray-600 mt-2">Asked by: {creator}</p>
      <p className="text-gray-500 text-sm mt-1">On: {new Date(createdDate).toLocaleDateString()}</p>
      <div className="mt-4">
        {tags.map((tag, index) => (
          <span key={index} className="inline-block bg-indigo-100 text-indigo-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded">
            #{tag}
          </span>
        ))}
      </div>
    </div>
  );
}