export default function Button({children, onClick}) {
    return (
        <button onClick={onClick} className="bg-blue-500 text-white font-semibold py-2 px-4 rounded hover:bg-blue-600 transition duration-200">
        {children}
        </button>
    );
}