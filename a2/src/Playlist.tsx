import React, { useState, ChangeEvent } from 'react';
import Song from './Song';

const Playlist = () => {
    const [songs, setSongs] = useState<{ index: number; title: string; artist: string }[]>([]);
    const [title, setTitle] = useState('');
    const [artist, setArtist] = useState('');
    const [index, setKey] = useState<number>(0);

    const addTitle = (e: ChangeEvent<HTMLInputElement>) => {
        setTitle(e.currentTarget.value);
    };

    const addArtist = (e: ChangeEvent<HTMLInputElement>) => {
        setArtist(e.currentTarget.value);
    };

    const addSong = () => {
        const info: {index: number; title: string; artist: string} = {index, title, artist};
        setSongs([...songs, info]);
        setKey(index + 1);
        setTitle('');
        setArtist('');
    };

    const removeSong = (i: number) => () => {
        songs.splice(i, 1);
        setSongs([...songs]);
    }

    return (
        <div>
            <h1>Playlist</h1>
            
            <label>Song: </label>
            <input type="text" placeholder="Song title" value={title} onChange={addTitle} />

            <label>Artist: </label>
            <input type="text" placeholder="Artist" value={artist} onChange={addArtist} />
            
            <button onClick={addSong}>Add to playlist</button>

            {songs.map( (song, i) => {
                return (
                    <Song 
                        key={song.index} 
                        info={song} 
                        removeSong={removeSong(i)} 
                    />
                );
            })}
        </div>
    );
};

export default Playlist;