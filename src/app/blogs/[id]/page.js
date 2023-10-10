import React from 'react';

const SingleBlogs = ({params}) => {
    console.log(params);
    return (
        <div>
            My Silgle Blogs NO: {params.id}
        </div>
    );
};

export default SingleBlogs;