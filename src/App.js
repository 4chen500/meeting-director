import './App.css';
import AppButton from './components/app-button';
import InputButton from './components/input-button';

function App() {
	return (
		<div className="App">
			<div className="component-test-area">
				<AppButton label="This be a button" onClick={() => console.log('AppButton Click')}>This be a button</AppButton>
				<InputButton />
			</div>
		</div>
	);
}

export default App;
