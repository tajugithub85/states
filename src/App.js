import React from 'react'; 

import {RenderColorSquares} from './components/renderColorSquares'

class App extends React.Component {

		render() {
			
			return (
				<div>
					
					<div className="App">
                         <RenderColorSquares />
                        </div>
					
				</div>
			) 
		}
	}
	
 export default App;

