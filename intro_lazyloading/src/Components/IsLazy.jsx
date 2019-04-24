import React from "react";

const LazyComp = React.lazy(() => import('./lazyExample.jsx'));

const IsLazy = () => {
    return <LazyComp/>;
};

export default IsLazy;