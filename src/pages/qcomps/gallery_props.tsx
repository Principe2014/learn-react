
export default function Gallery() {
  const profiles = [
    {
      name: 'Maria Skłodowska-Curie',
      imageUrl: 'https://i.imgur.com/szV5sdGs.jpg',
      profession:'physicist and chemist',
      awards: 4,
      discovered: 'polonium (element)'
    },

    {
      name: 'Katsuko Saruhashi',
      imageUrl: 'https://i.imgur.com/YfeOqp2s.jpg',
      profession: 'geochemist',
      awards: 2,
      discovered: 'a method for measuring carbon dioxide in seawater',
    },
  ];
  
  return (
    <div>
      <h1>Notable Scientists</h1>
      {profiles.map((profile) => (
        <Profile key={profile.name} {...profile} />
    ))}
  </div>
);
}

interface Profile {
  name: string;
  imageUrl: string;
  profession: string;
  awards: number;
  discovered: string;
}

function Profile({ name, imageUrl, profession, awards, discovered }: Profile) {
  return (
    <section className="profile">
      <h2>{name}</h2>
      <img
        className="avatar"
        src={imageUrl}
        alt={name}
        width={70}
        height={70}
      />
      <ul>
        <li>
          <b>Profession: </b> {profession}
        </li>
        <li>
          <b>Awards: </b> {awards}
        </li>
        <li>
          <b>Discovered: </b> {discovered}
        </li>
      </ul>
    </section>
  );
}
