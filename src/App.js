import "./App.css";
import { DataProvider } from "./Components/DataProvider";
import { Footer } from "./Components/Footer";
import { FormInput } from "./Components/FormInput";
import { List } from "./Components/List";

function App() {
  return (
    <DataProvider>
      <div className="App">
        <h1> ToDO List</h1>

        <FormInput />
        <List />
        <Footer />
      </div>
    </DataProvider>
  );
}

export default App;
