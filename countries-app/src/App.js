import Home from "./components/homescreen/Home";
import Random from "./screens/Random";
export default function App() {
  return <>{false ? <Home /> : <Random />}</>;
}
