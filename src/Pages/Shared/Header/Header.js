import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';
import { faHistory } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
    return (
        <div >

            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <div className='container'>
                    <Link to='/' style={{ textDecoration: 'none' }}><a class="navbar-brand fw-bold">DEV TUTORIAL</a></Link>
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarText">
                        <ul class="navbar-nav mr-auto">
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
                                <Link to='/connect_us' style={{ textDecoration: 'none' }}>      <a class="nav-link active fw-bold" aria-current="page" >Connect Us</a></Link>

                            </li>
                        </ul>
                        <span class="navbar-text">
                            <ul class="navbar-nav mr-auto">
                                <li class="nav-item">
                                    <Link to='/connect_us' style={{ textDecoration: 'none' }}> <a class="nav-link active fw-bold" aria-current="page" >Connect Us</a></Link>
                                </li>
                                <li class="nav-item" style={{backgroundColor:'pink', borderRadius:'50%', padding:'2px 5px'}}>
                                    <Link to='/connect_us' style={{ textDecoration: 'none' }}> <a class="nav-link active fw-bold" aria-current="page" ><FontAwesomeIcon icon={faHistory} /></a></Link>
                                </li>
                            </ul>
                        </span>
                    </div>
                </div>
            </nav>


           {/*  <nav class="navbar navbar-expand-lg">
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
                                <Link to='/connect_us' style={{ textDecoration: 'none' }}>      <a class="nav-link active fw-bold" aria-current="page" >Connect Us</a></Link>

                            </li>
                        </ul>
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
                                <Link to='/connect_us' style={{ textDecoration: 'none' }}>      <a class="nav-link active fw-bold" aria-current="page" >Connect Us</a></Link>

                            </li>
                        </ul>
                    </div>
                </div>
            </nav> */}
        </div>
    );
};

export default Header;