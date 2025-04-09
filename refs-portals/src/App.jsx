import Player from "./components/Player";
import TimerChallange from "./components/TimerChallange";

function App() {
  return (
    <>
      <Player />
      <div id="challenges">
        <TimerChallange title="Easy" targetTime={1} />
        <TimerChallange title="Not easy" targetTime={5} />
        <TimerChallange title="Getting tought" targetTime={10} />
        <TimerChallange title="Pros only" targetTime={15} />
      </div>
    </>
  );
}

export default App;
