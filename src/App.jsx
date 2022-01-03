import { PlayerContainer } from "./cmps/PlayerContainer";
import { RecentSearches } from "./cmps/RecentSearches";
import { SearchContainer } from "./cmps/SearchContainer";

function App() {
  return (
    <div className="app">
      <SearchContainer />
      <PlayerContainer />
      <RecentSearches />
    </div>
  );
}

export default App;
