import React from 'react';

interface Props {
    id: number;
    cellClick: React.MouseEventHandler;
}

const Cell: React.FC<Props> = ({cellClick, id}) => {

    return (
        <div>
            <div className='cell' onClick={cellClick} key={id}></div>
        </div>
    )
};

export default Cell;