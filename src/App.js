import './App.css';

const CV =
	'https://s3.eu-central-1.amazonaws.com/jk.public.files/Johannes_Kade.pdf';

function App() {
	return (
		<div className='App'>
			<header className='App-header'>
				<p>... WIP ...</p>
				<a
					className='App-link'
					href='https://www.linkedin.com/in/johannes-kade-815a5b1a1/'
					target='_blank'
					rel='noopener noreferrer'>
					Find me on LinkedIn for now.
				</a>

				<a
					className='App-link'
					href={CV}
					target='_blank'
					rel='noopener noreferrer'>
					Check out my CV
				</a>
			</header>
		</div>
	);
}

export default App;
