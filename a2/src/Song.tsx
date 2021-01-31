import React from 'react';

type Props = { readonly info: { readonly title: string, readonly artist: string }; 
removeSong: Function; };

const Song = ({info, removeSong}: Props) => {
    const boxChecked = () => {
        removeSong();
    };

    return (
        <div>
            <input type="checkbox" onChange={boxChecked} />
            {info.title} by {info.artist}
        </div>
    );
};

export default Song;