import React from 'react';

const About = () => {
  return (
    <div className='container'>
      <div className='d-flex justify-content-between'>
        <h1 className='display-4'>Book Recommendation Engine</h1>
        <small>Version 1.0.0</small>
      </div>
      <p>
        This is app is powered by a book recommender engine developed using AI
        and ML techniques with Python. The API is developed using Flask and the
        recommender engine is an implementation of K-Nearest Neighbor.
      </p>
      <div>
        <strong>DISCLAIMER:</strong>
        <br />
        This website relies upon publicly available data from multiple sources,
        that do not always agree. We hereby disclaim any and all representations
        and warranties with respect to the Website, including accuracy or
        fitness for use
      </div>
    </div>
  );
};

export default About;
