import React from 'react';

const Loading = () => {
    return (
        <div className='flex justify-center items-center h-[90vh]'>
        <div className='flex'>
            <div className="flex w-16 h-16 border-4 border-dashed rounded-full animate-spin border-primary">

            </div>
        </div>
        </div>
    );
};

export default Loading;