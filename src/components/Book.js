import { Link } from 'react-router-dom';

const Book = ({ book }) => {
  return (
    <div className='col-lg-3 col-xl-2 mb-3'>
      <div className='card bg-light'>
        <div className='book-cover'>
          <img
            src={book.imageUrlL}
            alt=''
            style={{ objectFit: 'cover', height: '250px' }}
            className='card-img-top w-100'
          />
        </div>
        <div className='card-body'>
          <h5 className='card-title'>
            <Link
              to={`/books/${book.ISBN}`}
              className='stretched-link link-dark book-title'
              style={{ textDecoration: 'none' }}
            >
              {book.bookTitle_x}
            </Link>
          </h5>
          <h6 className='card-subtitle mb-2 text-muted'>{book.bookAuthor}</h6>
          <small>{book.publisher}</small>
        </div>
      </div>
    </div>
  );
};

export default Book;
