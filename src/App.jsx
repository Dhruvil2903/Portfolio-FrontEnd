import Navbar from './Components/Navbar'
import Hero from './Components/Hero'
import TechStack from './Components/TechStack'
import MyProjects from './Components/MyProject' // ✅ Import MyProjects
import Education from './Components/MyEducation' // ✅ Import Education
import Resume from './Components/Resume' // ✅ Import Resume
import Footer from './Components/Footer' // ✅ Import Footer

function App() {
  return (
    <div className="bg-black min-h-screen flex flex-col text-white">
      {/* Navbar Section */}
      <header className="flex justify-center items-center sm:px-16 px-6 py-4 sticky top-0 z-50 bg-black/80 backdrop-blur-md border-b border-gray-800">
        <div className="xl:max-w-[1480px] w-full">
          <Navbar />
        </div>
      </header>

      {/* Hero Section */}
      <main className="flex justify-center items-start sm:px-16 px-6 mt-10">
        <div className="xl:max-w-[1280px] w-full">
          <Hero />
        </div>
      </main>

      {/* Tech Stack Section */}
      <section className="flex justify-center items-center sm:px-16 px-6 py-16 bg-gradient-to-b from-black to-gray-900">
        <div className="xl:max-w-[1280px] w-full">
          <TechStack />
        </div>
      </section>

      {/* My Projects Section */}
      <section className="flex justify-center items-center sm:px-16 px-6 py-16 bg-black">
        <div className="xl:max-w-[1280px] w-full">
          <MyProjects /> {/* ✅ Inserted MyProjects component */}
        </div>
      </section>

      {/* Education Section */}
      <section className="flex justify-center items-center sm:px-16 px-6 py-16 bg-gradient-to-b from-black to-gray-900">
        <div className="xl:max-w-[1280px] w-full">
          <Education /> {/* ✅ Inserted Education component */}
        </div>
      </section>

      {/* Resume Section */}
      <section className="flex justify-center items-center sm:px-16 px-6 py-16 bg-black">
        <div className="xl:max-w-[1280px] w-full">
          <Resume /> {/* ✅ Inserted Resume component with Download button */}
        </div>
      </section>

      {/* Footer Section */}
      <Footer /> {/* ✅ Replaced plain footer with Footer component */}
    </div>
  )
}

export default App
