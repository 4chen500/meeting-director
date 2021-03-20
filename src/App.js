import "./App.css";
import AppButton from "./components/app-button";
import InputButton from "./components/input-button";
import TopicButton from "./components/topic-button";

function App() {
	return (
		<div className="App">
			<div className="component-test-area">
				<h2>Component Test Area</h2>
				<h1>I don't think I'll end up using any of these</h1>
				<AppButton
					label="This be a button"
					onClick={() => console.log("AppButton Click")}
				>
					This be a button
				</AppButton>
				<InputButton />
				<TopicButton />
			</div>
		</div>
	);
}

export default App;
