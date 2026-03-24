import { useState } from "react";
import BookCard from "../BookCard/BookCard";
import { NavLink } from "react-router";

const Books = ({ books }) => {

    const [bookLength, setBookLength] = useState(6);
    console.log(books)

    return (
        <div className="w-10/12 mx-auto mb-12 md:mb-24 grid">
            <h2 className="text-center text-4xl font-bold mb-12 heading">Books</h2>
            <div id="books-section" className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {
                    books.slice(0, bookLength).map(book => <BookCard key={book.id} book={book}></BookCard>)
                }
            </div>
            <div className={`text-center ${bookLength === books.length && 'hidden'}`}>
                <NavLink to="/allbooks">
                    <button onClick={() => setBookLength(books.length)} className="btn mt-6 bg-[#23BE0A] text-white mx-auto hover:bg-amber-600">Show All</button>
                </NavLink>
            </div>

        </div>
    );
};

export default Books;