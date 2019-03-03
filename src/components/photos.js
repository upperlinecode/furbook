import React from 'react';
import dog1 from './images/dog1.jpg';
import cat from './images/cat.jpg';
import dog2 from './images/dog2.jpg';
import './css/photos.css';


const Photos = () => {
	return(
		<div className = 'container-fluid Photos'>
			<div className = 'row'>
				<div className = 'col'>
					<img src = { cat } />
				</div>
				<div className = 'col'>
					<img src = { dog2 } />
				</div>
				<div className = 'col'>
					<img src = { dog1 } />
				</div>
			</div>
		</div>
	);
};

export default Photos;