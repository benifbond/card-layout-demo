import Card from './Card.jsx'
import './CardGrid.css'

export default function CardGrid({ people }) {
  return (
    <section className="card-grid">
      {people.map((person) => (
        <Card key={person.id} person={person} />
      ))}
    </section>
  )
}
