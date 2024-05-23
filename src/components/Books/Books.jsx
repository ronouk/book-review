import { useEffect, useState } from "react";
import Book from "../Book/Book";

const Books = () => {
    const [books, setBooks] = useState([]);

    useEffect(() => {
        fetch('/books.json')
            .then(res => res.json())
            .then(data => setBooks(data));
    }, [])

    const [bookLength, setBookLength] = useState(6);

    return (
        <div className="w-10/12 mx-auto mb-12 md:mb-24 grid">
            <h2 className="text-center text-4xl font-bold mb-12 heading">Books</h2>
            <div id="books-section" className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {
                    books.slice(0, bookLength).map(book => <Book key={book.id} book={book}></Book>)
                }
            </div>
            <div className= {`text-center ${bookLength === books.length && 'hidden'}`}>
                <button onClick={() => setBookLength(books.length)} className="btn mt-6 bg-[#23BE0A] text-white mx-auto">Show All</button>
            </div>

        </div>
    );
};

export default Books;