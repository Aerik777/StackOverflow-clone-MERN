export default function VoteButton({ count, onUpvote, onDownvote }) {
  return (
    <div className="flex flex-col items-center gap-2">
      <button
        className="w-10 h-10 flex items-center justify-center rounded-full bg-white border-2 text-black hover:bg-orange-300 transition"
        onClick={onUpvote}
      >
        &#9650;
      </button>
      <span className="text-lg font-semibold">{count}</span>
      <button
        className="w-10 h-10 flex items-center justify-center rounded-full bg-white border-2 text-gray-700 hover:bg-orange-300 transition"
        onClick={onDownvote}
      >
        &#9660;
      </button>
    </div>
  );
}   