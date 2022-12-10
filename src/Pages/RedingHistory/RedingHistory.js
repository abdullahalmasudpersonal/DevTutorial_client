import React from 'react';
import { useSelector } from 'react-redux';

const RedingHistory = () => {
    const redingHistory = useSelector((state) => state.redingHistory);

    return (
        <div>
            RedingHistory
        </div>
    );
};

export default RedingHistory;