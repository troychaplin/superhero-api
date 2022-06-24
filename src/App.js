import React from 'react';
import FetchData from './utils/FetchData';
import FetchError from './components/FetchError/FetchError';
import FetchLoading from './components/FetchLoading/FetchLoading';
import Home from './Home.js'

function App() {
    // Get vars from FetchData and check for errors / availability of feed
    const { data, isLoading, isError } = FetchData();

    if (isError) return <FetchError />;
    if (isLoading) return <FetchLoading />;

    return (
        <Home data={data} />
    );
}

export default App;
