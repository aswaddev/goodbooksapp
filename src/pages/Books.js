import { useState, useEffect } from 'react';
import Book from '../components/Book';
import Loader from '../partials/Loader';

const Books = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_URL}/books`)
      .then((res) => res.json())
      .then((res) => {
        setBooks(res.data);
      });
  }, []);

  return (
    <div className='container'>
      {books.length ? (
        <div className='row'>
          {books.map((book, index) => (
            <Book key={index} book={book} />
          ))}
        </div>
      ) : (
        <Loader />
      )}
    </div>
  );
};

export default Books;
