import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div >
            <nav class="navbar navbar-expand-lg">
                <div class="container-xl">
                    <Link to='/' style={{ textDecoration: 'none' }}><a class="navbar-brand fw-bold">DEV TUTORIAL</a></Link>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>

                    <div class="collapse navbar-collapse" id="navbarScroll">
                        <ul class="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll" style={{ bsScrollHeight: '100px' }}>
                            <li class="nav-item">
                                <Link to='/' style={{ textDecoration: 'none' }}>
                                    <a class="nav-link active fw-bold" aria-current="page" >Home</a>
                                </Link>
                            </li>
                            <li class="nav-item">
                                <Link to='/tutorials' style={{ textDecoration: 'none' }}><a class="nav-link active fw-bold" aria-current="page" >Tutorial</a></Link>
                            </li>
                            <li class="nav-item">
                                <Link to='/about' style={{ textDecoration: 'none' }}><a class="nav-link active fw-bold" aria-current="page" >About</a></Link>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link active fw-bold" aria-current="page" >Connect Us</a>
                            </li>
                            {/* <li class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Link
                                </a>
                                <ul class="dropdown-menu">
                                    <li><a class="dropdown-item" href="#">Action</a></li>
                                    <li><a class="dropdown-item" href="#">Another action</a></li>
                                    <li><hr class="dropdown-divider"/></li>
                                    <li><a class="dropdown-item" href="#">Something else here</a></li>
                                </ul>
                            </li> */}
                        </ul>
                        <form class="d-flex" role="search">
                            <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button class="btn btn-outline-success" type="submit">Search</button>
                        </form>
                        {/* <ul class="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll" style={{ bsScrollHeight: '100px' }}>
                            <li class="nav-item">
                                <a class="nav-link active fw-bold" aria-current="page" >Home</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link active fw-bold" aria-current="page" >About</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link active fw-bold" aria-current="page" >Connect Us</a>
                            </li>
                        </ul> */}
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Header;