import Menu from "./components/Menu/Menu";
import routeList from "./Routes";

function App() {
  return (
    <>
      <Menu />
      <div className="container">
        {routeList()}
      </div>
    </>
  );
}

export default App;
