import React, { useEffect, useState } from "react";
import Page from "./page";

function App(){
    const [backendData, setBackendData] = React.useState(null)

    React.useEffect(() => {
        fetch("/api")
        .then( (response) => response.json())
        .then( (data) => { setBackendData(data)})
    }, []);

    return(
        <Page/>
    );
}

export default App;