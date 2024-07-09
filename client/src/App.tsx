import Routes from "./routes";
import { Footer, Navbar, Providers } from "./components/layout";
import Chatbot from "./pages/bot";


const App = () => {
  
  return (   
    <Providers>
      
      <Navbar/>
      
      <main className="xl:w-2/3 lg:w-4/5 w-full lg:mx-auto lg:py-4 lg:px-0 md:p-8 p-4">
        <Routes />
      </main>
      <Chatbot />
      <Footer />
    </Providers>
  );
};

export default App;
