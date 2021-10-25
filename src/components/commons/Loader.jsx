import React from 'react';

/** LOADER */
import Loader from 'react-loader-spinner';

export const LoaderSpinner = () => {
    return (
        <div className="loader" style={{
            marginBlock: 0,
            marginInline: "auto",
            display: "flex",
            justifyContent: "center"
        }} >
            <Loader
                type="ThreeDots"
                color="#37BCFF"
                height={100}
                width={100}
            />
        </div>
    )
}