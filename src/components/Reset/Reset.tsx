import React from 'react';

interface Props {
    resetClick: React.MouseEventHandler;
}

const Reset: React.FC<Props> = ({resetClick}) => {
    return (
        <div className='btn-block'>
            <button className='reset-btn' onClick={resetClick}>Reset</button>
        </div>
    );
};

export default Reset;