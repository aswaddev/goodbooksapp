import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import Loader from '../partials/Loader';

const Book = () => {
  const [book, setBook] = useState(null);
  const [recommendations, setRecommendations] = useState(null);

  let { id } = useParams();

  useEffect(() => {
    window.scrollTo(0, 0);
    fetch(`${process.env.REACT_APP_API_URL}/books/${id}`)
      .then((res) => res.json())
      .then((res) => {
        setBook(res.data.book);
        setRecommendations(res.data.recommendations);
      });
  }, [id]);

  return (
    <div style={{ maxWidth: '800px', margin: 'auto' }}>
      {book && recommendations ? (
        <>
          <div className='card'>
            <div className='card-body'>
              <Link to='/' className='btn btn-outline-secondary mb-4'>
                Go To Home
              </Link>
              <div className='row'>
                <div className='col-4'>
                  <img src={book.imageUrlL} className='w-100' alt='' />
                </div>
                <div className='col-8'>
                  <ul className='list-group'>
                    <li className='list-group-item'>
                      <h5 className='me-2 mb-0 d-inline-block'>
                        {book.bookTitle_x}
                      </h5>
                      <small className='text-muted'>ISBN#{book.ISBN}</small>
                    </li>
                    <li className='list-group-item'>
                      <strong>Authored by</strong> {book.bookAuthor}
                    </li>
                    <li className='list-group-item'>
                      <strong>Published by</strong> {book.publisher}
                    </li>
                    <li className='list-group-item'>
                      <strong>Published year</strong> {book.yearOfPublication}
                    </li>
                    <li className='list-group-item'>
                      <strong>Ratings:</strong> {book.bookRating}
                    </li>
                    <li className='list-group-item'>
                      <strong>Total Ratings:</strong> {book.totalRatingCount}
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <hr />
          <div className='mt-3'>
            <h5>Recommendations</h5>
            <div className='row'>
              {recommendations.map((recommendation, index) => (
                <div className='col-md-6' key={index}>
                  <div className='card mb-2'>
                    <div className='card-body'>
                      <div className='d-flex'>
                        <img
                          src={recommendation.imageUrlL}
                          style={{ height: '200px' }}
                          className='d-block me-2'
                          alt=''
                        />
                        <div>
                          <h5 className='me-2 mb-0 d-inline-block'>
                            <Link
                              to={`/books/${recommendation.ISBN}`}
                              className='link-dark stretched-link'
                              style={{ textDecoration: 'none' }}
                            >
                              {recommendation.bookTitle_x}
                            </Link>
                          </h5>
                          <small className='d-block text-muted'>
                            ISBN#{recommendation.ISBN}
                          </small>
                          <strong>Authored by</strong>{' '}
                          {recommendation.bookAuthor}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </>
      ) : (
        <Loader />
      )}
    </div>
  );
};

export default Book;
