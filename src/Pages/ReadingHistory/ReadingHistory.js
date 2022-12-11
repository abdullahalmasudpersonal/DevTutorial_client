import React from 'react';
import { useSelector } from 'react-redux';
import Tutorial from '../Tutorials/Tutorial';

const ReadingHistory = () => {
    const readingHistory = useSelector((state) => state.redingHistory);

    return (
        <div>
            {
                readingHistory.map((tutorial) =>(
                    <Tutorial tutorial={tutorial} />
                ))
            }

          {/*   {readingHistory
                .sort((a, b) => a._id - b._id)
                .map((tutorial) => (
                    <Tutorial key={tutorial._id} tutorial={tutorial} />
                ))
            } */}
        </div>
    );
};

export default ReadingHistory;