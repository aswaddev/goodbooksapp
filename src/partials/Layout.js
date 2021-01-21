import { Link, NavLink } from 'react-router-dom';

const Layout = (props) => {
  return (
    <div>
      <nav className='navbar navbar-expand-lg navbar-dark bg-primary py-3'>
        <div className='container'>
          <Link className='navbar-brand' to='/'>
            <div className='d-flex align-items-center'>
              <i class='bi bi-book h3 me-2'></i>
              <h1
                className='d-inline-block h4 m-0 fw-normal'
                style={{ position: 'relative', bottom: '3px' }}
              >
                GoodBooks
              </h1>
            </div>
          </Link>
          <button
            className='navbar-toggler'
            type='button'
            data-bs-toggle='collapse'
            data-bs-target='#navbarNav'
            aria-controls='navbarNav'
            aria-expanded='false'
            aria-label='Toggle navigation'
          >
            <span className='navbar-toggler-icon'></span>
          </button>
          <div className='collapse navbar-collapse' id='navbarNav'>
            <ul className='navbar-nav ms-auto'>
              <li className='nav-item'>
                <NavLink to='/' className='nav-link' activeClassName='active'>
                  Home
                </NavLink>
              </li>
              <li className='nav-item'>
                <NavLink
                  to='/about'
                  className='nav-link'
                  activeClassName='active'
                >
                  About
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <main className='py-5' style={{ minHeight: '95vh' }}>
        {props.children}
      </main>
      <footer className='bg-light py-3'>
        <div className='container'>
          <div className='d-flex align-items-center justify-content-between'>
            <div>
              Developed by{' '}
              <a
                href='https://aswadali.me'
                rel='noopener noreferrer'
                className='link-secondary'
                target='_blank'
              >
                Aswad Ali
              </a>
            </div>
            <div>University of South Asia</div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
