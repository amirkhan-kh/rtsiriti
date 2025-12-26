import { Outlet } from 'react-router-dom'
import Header from './components/header'
import Footer from './components/footer'
import { useViewMode } from './shared/utils/use-view-mode';


function App() {
  const { mode } = useViewMode();

  return (
    <div  className={`${mode}`}>
      <Header />
      <main className="pt-44 min-h-screen">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}

export default App
