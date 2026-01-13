import './App.css'
import Header from './components/Header'
import Entry from './components/Entry'
import data from "./data"

function App() {
  const entryElement = data.map((entry) => {
    return (
      <Entry 
        key={entry.id}
        entry={entry}
      />
    )
  })

  return (
    <>
     <Header />
     <main className="container">
      {entryElement}
     </main>
    </>
  )
}

export default App
