import VoteButton from "../../common/VoteButton";
import ReactQuill from 'react-quill-new';

export default function Answer({
  answer,
  creator,
  createdDate,
  onUpvote,
  onDownvote,
  count,
  comments = [],
}) {
  
  return (
    <div className="bg-white border border-gray-200 rounded-lg p-6 mb-4 flex flex-col gap-3">
      <div className="flex items-start gap-4">
        <div className="flex flex-col items-center pt-2">
          <VoteButton
            count={count}
            onUpvote={onUpvote}
            onDownvote={onDownvote}
          />
        </div>
        <div className="flex-1">
          <div className="prose max-w-none mb-2">
            <ReactQuill
              value={answer}
              readOnly={true}
              theme={"snow"} // Minimal toolbar
              modules={{ toolbar: false }}
            />
          </div>
          <div className="flex items-center justify-between mt-4">
            <span className="text-xs text-gray-500">
              Answered by{" "}
              <span className="font-semibold text-gray-700">{creator}</span>
            </span>
            <span className="text-xs text-gray-400">
              {new Date(createdDate).toLocaleDateString()}
            </span>
          </div>
          {comments.length > 0 && (
            <div className="mt-6 border-t border-gray-100 pt-4">
              <h4 className="text-sm font-semibold text-gray-700 mb-2">
                Comments
              </h4>
              <div className="flex flex-col gap-2">
                {comments.map((comment) => (
                  <div
                    key={comment.id}
                    className="bg-gray-50 border border-gray-200 rounded px-3 py-2 flex flex-col shadow-sm"
                  >
                    <p className="text-sm text-gray-800 mb-1">{comment.body}</p>
                    <span className="text-xs text-gray-500 self-end">
                      — <span className="font-medium">{comment.author}</span> on{" "}
                      {new Date(comment.createdAt).toLocaleDateString()}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
