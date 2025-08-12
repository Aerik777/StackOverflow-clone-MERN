const mockAnswers = [
    // Answers for questionId: 1
    {
        id: 1,
        questionId: 1,
        body: "You can use the useState hook to manage state in a functional component.",
        author: "Jane Doe",
        createdAt: "2024-06-01T10:30:00Z",
        comments: [
            {
                id: 1,
                body: "This is the best way in React 16.8+.",
                author: "John Smith",
                createdAt: "2024-06-01T11:00:00Z"
            }
        ]
    },
    {
        id: 2,
        questionId: 1,
        body: "Alternatively, you can use Redux for more complex state management.",
        author: "Alex Lee",
        createdAt: "2024-06-01T12:00:00Z",
        comments: []
    },
    // Answers for questionId: 2
    {
        id: 3,
        questionId: 2,
        body: "Try clearing your npm cache and reinstalling the dependencies.",
        author: "Sam Patel",
        createdAt: "2024-06-02T09:15:00Z",
        comments: [
            {
                id: 2,
                body: "This solved my issue, thanks!",
                author: "Chris Kim",
                createdAt: "2024-06-02T09:45:00Z"
            }
        ]
    },
    {
        id: 4,
        questionId: 2,
        body: "Make sure your Node.js version matches the project's requirements.",
        author: "Emily Carter",
        createdAt: "2024-06-02T10:00:00Z",
        comments: []
    },
    // Answers for questionId: 3
    {
        id: 5,
        questionId: 3,
        body: "Check if you have the correct permissions to access the directory.",
        author: "Michael Brown",
        createdAt: "2024-06-03T08:20:00Z",
        comments: [
            {
                id: 3,
                body: "Good point, that was my issue.",
                author: "Sarah Lee",
                createdAt: "2024-06-03T08:45:00Z"
            }
        ]
    },
    {
        id: 6,
        questionId: 3,
        body: "Try running your command as an administrator or with sudo.",
        author: "Priya Singh",
        createdAt: "2024-06-03T09:00:00Z",
        comments: []
    },
    // Answers for questionId: 4
    {
        id: 7,
        questionId: 4,
        body: "You can use the useEffect hook to perform side effects in your component.",
        author: "David Kim",
        createdAt: "2024-06-04T10:00:00Z",
        comments: []
    },
    {
        id: 8,
        questionId: 4,
        body: "Remember to clean up subscriptions or timers in the return function of useEffect.",
        author: "Linda Park",
        createdAt: "2024-06-04T10:30:00Z",
        comments: []
    },
    // Answers for questionId: 5
    {
        id: 9,
        questionId: 5,
        body: "Check your API endpoint and make sure the server is running.",
        author: "Carlos Gomez",
        createdAt: "2024-06-05T08:00:00Z",
        comments: []
    },
    {
        id: 10,
        questionId: 5,
        body: "Inspect the network tab in your browser's developer tools for more details.",
        author: "Anna Ivanova",
        createdAt: "2024-06-05T08:20:00Z",
        comments: []
    }
];

export default mockAnswers;
