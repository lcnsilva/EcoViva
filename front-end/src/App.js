import Header from "./components/header";
import RoutesApp from "./routes";
import './style.css'


function App() {
  return (
    <>
      <div className="header">
      <Header/>
      </div>
      <RoutesApp/>
    </>
  );
}

export default App;
