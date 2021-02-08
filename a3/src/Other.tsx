import React from 'react';

type Props = {
    readonly search: string,
    readonly friends: string[]
}
const Other = ({search, friends } : Props) => {
    const other = friends.filter(person => !person.toLowerCase().includes(search.toLowerCase()));
    return(
        other.length === 0 ? <p>No friends found</p>
            : <ul>{other.map((friend, i) => <li key={i}>{friend}</li>)}</ul>
    );
    
}
export default Other;