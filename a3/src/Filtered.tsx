import React from 'react';

type Props = {
    readonly search: string,
    readonly friends: string[]
}
const Filtered = ({search, friends } : Props) => {
    const filtered = friends.filter(person => person.toLowerCase().includes(search.toLowerCase()));
    return(
        filtered.length === 0 ? <p>No friends found</p>
            : <ul>{filtered.map((friend, i) => <li key={i}>{friend}</li>)}</ul>
    );
    
}
export default Filtered;