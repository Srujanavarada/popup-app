import React from 'react';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';

export default function PopupGfg() {
	return (
		<div>
			<h4>Popup-app</h4>
			<Popup trigger=
				{<button> Click to open modal </button>}
				modal nested>
				{
					close => (
						<div className='modal'>
							<div className='content'>
								Welcome to my popup!!!
							</div>
							<div>
								<button onClick=
									{() => close()}>
										Close modal
								</button>
							</div>
						</div>
					)
				}
			</Popup>
		</div>
	)
};
