import React, {useState, ChangeEvent} from 'react';
import logo from './logo.svg';
import './App.css';
import Filtered from './Filtered';
import Other from './Other';

function App() {
  const [search, setSearch] = useState<string>('');
  const handleSearch = (event: ChangeEvent<HTMLInputElement>) => { setSearch(event.target.value);}
  const [newFriend, setNew] = useState<string>('');
  const updateFriend = (event: ChangeEvent<HTMLInputElement>) => {
    setNew(event.target.value);
  }
const [friends,setFriends] = useState<string[]>([]);
const addFriend = () => {
  setFriends([...friends, newFriend]);
  setNew('');
}


  return (
    <div className="App">
      <label>Search</label>
      <input type = 'text' value = {search} onChange = {handleSearch}/>

      <p> Search Results:</p>
      <Filtered search = {search} friends = {friends} />

      <p> Other:</p>
      <Other search = {search} friends = {friends} />

      <input type = 'text' value = {newFriend} onChange = {updateFriend} />
      <button onClick = {addFriend}>Add</button>
    </div>
  );
}

export default App;
