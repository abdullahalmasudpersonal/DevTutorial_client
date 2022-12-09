import React from 'react';
import './Tutorial.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';

const Tutorial = ({tutorial}) => {
    const { name, image, description, date } = tutorial;

    return (
        <div class="col mb-3">
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
                    <button><span>Read More </span>
                        <span>
                            <FontAwesomeIcon style={{ height: '12px' }} icon={faChevronRight} />
                            <FontAwesomeIcon style={{ height: '12px' }} icon={faChevronRight} />
                        </span>
                    </button>
                </div>
            </div>
        </div>

    );
};

export default Tutorial;
