import { useState } from 'react';
import { ItemListProps } from '../../types/arrObj';

let nextId = 3;
const initialList = [
  { id: 0, title: 'Big Bellies', seen: false },
  { id: 1, title: 'Lunar Landscape', seen: false },
  { id: 2, title: 'Terracotta Army', seen: true },
];

export default function BucketList() {
  const [myList, setMyList] = useState(initialList);
  const [yourList, setYourList] = useState(
    initialList
  );

  function handleToggleList(listId:  
  number, artworkId: number, nextSeen: boolean) {
    const updateList = listId === 0 ? setMyList : setYourList;
    const tmpList = listId === 0 ? myList : yourList;

    const updatedList = tmpList.map(e => {
      if (e.id === artworkId) {
        e.seen = nextSeen;
      }
      return e;
    });
    updateList(updatedList);
  }

  return (
    <>
      <h1>Art Bucket List</h1>
      <h2>My list of art to see:</h2>
      <ItemList artworks={myList} onToggle={handleToggleList.bind(null, 0)} />
      <h2>Your list of art to see:</h2>
      <ItemList artworks={yourList} onToggle={handleToggleList.bind(null, 1)} />
    </>
  );
}

function ItemList({ artworks, onToggle }: ItemListProps) {
  return (
    <ul>
      {artworks.map(artwork => (
        <li key={artwork.id}>
          <label>
            <input
              type="checkbox"
              checked={artwork.seen}
              onChange={e => {
                onToggle(artwork.id, e.target.checked);
              }}
            />
            {artwork.title}
          </label>
        </li>
      ))}
    </ul>  

  );
}