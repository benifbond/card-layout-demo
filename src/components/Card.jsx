import './Card.css'

export default function Card({ person }) {
  return (
    <article className="card">
      <div className="card-avatar" style={{ background: person.color }}>
        {person.name
          .split(' ')
          .map((part) => part[0])
          .join('')}
      </div>
      <h2 className="card-name">{person.name}</h2>
      <p className="card-role">{person.role}</p>
      <p className="card-bio">{person.bio}</p>
      <button className="card-button">View profile</button>
    </article>
  )
}
