import { Outlet } from 'react-router-dom'
import Header from './components/header'
import Footer from './components/footer'
import { useViewMode } from './shared/utils/use-view-mode';
import RouteChangeLoader from './shared/ui-components/change-loader';


function App() {
  const { mode } = useViewMode();

  return (
    <div  className={`${mode}`}>
         <RouteChangeLoader />
      <Header />
      <main className="pt-54 min-h-screen">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}

export default App
