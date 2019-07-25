import React from 'react';
import wrapped from "./wrapped";
import Uploader from "./uploader/Uploader";

const MediaCatalog = () => {
    return (
        <>
            <Uploader/>
        </>
    );
};

export default wrapped(MediaCatalog,{title: "Media"});