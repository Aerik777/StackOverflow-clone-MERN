export default function Form({ onSubmit, setShowForm }) {
    return (
        
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-30 z-50">
            {/* Above css make the background dark and center the form */}
            <form
                onSubmit={onSubmit}
                className="max-w-md w-full mx-auto p-8 bg-white rounded-lg shadow-md flex flex-col gap-4"
            >
                <input
                    type="text"
                    name="title"
                    placeholder="Question title"
                    className="p-3 border border-gray-300 rounded text-base focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
                <input
                    type="text"
                    name="content"
                    placeholder="Describe your question"
                    className="p-3 border border-gray-300 rounded text-base focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
                <input
                    type="text"
                    name="tags"
                    placeholder="Tags (Comma separated)"
                    className="p-3 border border-gray-300 rounded text-base focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
                <button
                    type="submit"
                    className="p-3 bg-blue-600 text-white rounded font-bold hover:bg-blue-700 transition-colors"
                >
                    Add Question
                </button>
                <button
                    type="button"
                    onClick={() => setShowForm(false)}
                    className="p-3 bg-gray-300 text-gray-800 rounded font-bold hover:bg-gray-400 transition-colors"
                >
                    Cancel
                </button>
            </form>
        </div>
    )
}