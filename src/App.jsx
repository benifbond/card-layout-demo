import CardGrid from './components/CardGrid.jsx'
import team from './data/team.js'

export default function App() {
  return (
    <main className="page">
      <header className="page-header">
        <h1>Team Directory</h1>
        <p>Meet the people building the product.</p>
      </header>
      <CardGrid people={team} />
    </main>
  )
}
