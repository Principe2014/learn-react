import { useState } from 'react';

let initialArtists = [
  { id: 0, name: 'Marta Colvin Andrade' },
  { id: 1, name: 'Lamidi Olonade Fakeye'},
  { id: 2, name: 'Louise Nevelson'},
];

export default function List() {
  const [artists, setArtists] = useState(
    initialArtists
  );

  // fixes splice modifying original array, instead of creating a new array with the updated
  // list
  const onDelete = (index: number) => {
    const newList = {...artists};
    newList.splice(index, 1);
    setArtists(newList);
  };

  return (
    <>
      <h1>Inspiring sculptors:</h1>
      <ul>
        {artists.map((artist, index) => (
          <li key={artist.id}>
            {artist.name}{' '}
            <button onClick={() => 
              onDelete(artist.id)
            }>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </>
  );
}
