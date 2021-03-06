import './App.css';
import AppButton from './components/app-button';

function App() {
	return (
		<div className="App">
			<div className="component-test-area">
				<AppButton label="+ Topic" onClick={() => console.log('AppButton Click')} />
			</div>
		</div>
	);
}

export default App;
