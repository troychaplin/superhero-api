import React from 'react';
import FetchData from './utils/FetchData';
import FetchError from './components/FetchError/FetchError';
import FetchLoading from './components/FetchLoading/FetchLoading';
import Home from './Home.js';

function App() {
    // Get vars from FetchData
    const { data, isLoading, isError } = FetchData();

    // Check for errors and availability of feed
    if (isError) return <FetchError />;
    if (isLoading) return <FetchLoading />;

    return <Home data={data} />;
}

export default App;
