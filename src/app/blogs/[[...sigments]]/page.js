import React from 'react';

const SingleBlogs = ({params}) => {
    console.log(params);
    const [year , id] = params.sigments || [];
    return (
        <div>
            My Silgle Blogs NO: Year {year || new Date().getFullYear() } for id: {id || 0}
        </div>
    );
};

export default SingleBlogs;