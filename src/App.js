import React from 'react';
import FetchData from './utils/FetchData';
import "./App.module.scss";

function App() {
    // Get vars from FetchData and check for errors / availability of feed
    const { data, isLoading, isError } = FetchData();
    if (isError) return <div>Failed to load</div>;
    if (isLoading) return <div>Loading...</div>;

    console.log(data);

    return (
        <div>
            Hello World
        </div>
    );
}

export default App;
