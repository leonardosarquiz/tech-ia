
import { Banners } from "./componentes/Banners";
import { Header } from "./componentes/Header";
import "./App.css";
import { Search } from "./componentes/Search";
import { Products } from "./componentes/Products";
import { Footer } from "./componentes/Footer";
import { ApiProvider } from "./context/MyContexts";


export function App() {



  return (
  
    <div className="ContainerApp">
    <ApiProvider>
  <Header />
<Banners />
<Search />
  <Products/>
  <Footer />
  </ApiProvider>


    </div>
  
  )
}


