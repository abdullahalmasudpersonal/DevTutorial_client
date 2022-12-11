import React from 'react';
import './Tutorial.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { ADD_TO_HISTORY, REMOVE_FROM_HISTORY } from '../../Redux/ActionTypes/ActionTypes';
import { addToHistory } from '../../Redux/TutorialActions/TutorialActions';

const Tutorial = ({ tutorial }) => {
    const { name, image, description, date } = tutorial;
    const dispatch = useDispatch();
    const { pathname } = useLocation();

    return (
        <div class="col mb-3">
            {pathname.includes("reading_history") && (
                <div className='rounded-full grid place-items-center absolute top-2 right-2 bg-indigo-500 text-white h-8 w-8 font-bold '>
                    <p> {tutorial.quantity} </p>
                </div>
            )}
            <div class="bolg-dev-dev h-100">
                <img src={image} class="card-img-top rounded-top w-100" alt="..." />
                <div>
                    <span class="position-absolute start-50 translate-middle badge rounded-pill bg-dark text-light py-2 px-3">
                        {date}
                    </span>
                </div>
                <div class="p-3 text-justify">
                    <h5 class="pt-3 pb-2 text-center">{name}</h5>
                    <p class="">{description}</p>
                </div>
                <div class="bolg-read-more">
                    {!pathname.includes('reading_history') && (
                        <button onClick={() => dispatch({ type: ADD_TO_HISTORY, payload: tutorial })}>
                            <span>Read More </span>
                            <span>
                                <FontAwesomeIcon style={{ height: '12px' }} icon={faChevronRight} />
                                <FontAwesomeIcon style={{ height: '12px' }} icon={faChevronRight} />
                            </span>
                        </button>

                    )}
                    
                    {pathname.includes('reading_history') && (
                        <button onClick={() => dispatch({ type: REMOVE_FROM_HISTORY, payload: tutorial })}>
                            <span>Remove </span>
                            <span>
                                <FontAwesomeIcon style={{ height: '12px' }} icon={faChevronRight} />
                                <FontAwesomeIcon style={{ height: '12px' }} icon={faChevronRight} />
                            </span>
                        </button>
                    )}

                </div>
            </div>
        </div>

    );
};

export default Tutorial;
