import React from 'react';
import TracksHead from "../../components/TracksHead/TracksHead";
import Tracks from "../../components/Tracks/Tracks";

const PageHome = () => {
    return (
      <>
        <h1>My Library</h1>
        <TracksHead />
        <Tracks />
      </>
    )
}

export default PageHome;