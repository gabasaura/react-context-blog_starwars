import CharacterCard from "./components/cardCharacter"
import Navbar from "./components/navbar"

function App() {

  return (
    <>
      <Navbar />
      <main>
        <div className="py-5 bg-body-tertiary">
          <div className="container pt-5">

            {/* SECTIONS */}

            <section className="album h-25 overflow-x-auto pt-5">
              <h3>CHARACTERS</h3>
              <div className="grid d-flex"></div>
              <CharacterCard />
            </section>

          </div>
        </div>
      </main>
    </>
  )
}

export default App
