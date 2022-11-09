import React, { useEffect } from 'react';

const UseTitleHook = (title) => {
    useEffect (() => {
        document.title = `${title} - Travellian`;
    }, [title])


};

export default UseTitleHook;