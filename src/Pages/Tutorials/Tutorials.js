import React, { useEffect, useState } from 'react';
import Tutorial from './Tutorial';

const Tutorials = () => {
    const [tutorials, setTutorials] = useState([]);
    useEffect( () =>{
        fetch('Tutorials.json')
        .then(res => res.json())
        .then(data => setTutorials(data));
    }, []);

    return (
        <div className='allblogs-bg py-5'>
            <div className='container'>
                <div class="row row-cols-1 row-cols-md-3 g-4">
                    {
                        tutorials.map(tutorial =><Tutorial key={tutorial._id} tutorial={tutorial} />)
                    }
                </div>
            </div>
        </div>
    );
};

export default Tutorials;