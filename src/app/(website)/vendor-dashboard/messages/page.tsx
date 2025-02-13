import React from 'react';
import MessageFilter from './_components/MessageFilter';
import VendorMessageContainer from './_components/VendorMessageContainer';

const page = () => {
    return (
        <div>
            <MessageFilter/>
            <VendorMessageContainer/>
        </div>
    );
};

export default page;