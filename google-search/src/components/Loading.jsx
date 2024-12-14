import React from 'react';
import { Puff } from 'react-loader-spinner';

function Loading() {
    return (
        <div className='flex justify-center items-center h-screen'>
            <Puff color="#00bfff" height={80} width={80} />
        </div>
    );
}

export default Loading;
