import Cube from 'cubejs';
import {GanCube, connect} from 'cubing/bluetooth/';
import {getUniformNotationWithPrime} from './utils';
export default {
    _giiker: null,
	_moveHandlers: [],
	cube: null,
	isConnected: false,
	async connect() {
		if (this._giiker) {
			return this._giiker;
		}
        // eslint-disable-next-line no-console
		console.log('Fetching cube!');
        
		this._giiker = await connect();
		this.cube = new Cube();
		this.isConnected = true;

		// this._giiker.addMoveListener('move', (move) => {
		this._giiker.addMoveListener((move) => {
            // eslint-disable-next-line no-console
            console.log('Event listener called')
            console.log(move)
            //TODO Add listener for U2 by just investigating the last move, maybe I have to temporarily save that
			 this.cube.move(getUniformNotationWithPrime(move));
			 for (const handler of this._moveHandlers) {
                 // eslint-disable-next-line no-undef
                console.log("Starting handler function")
                 console.log(handler);
			 	handler(move);
			}
		});

		return this._giiker;
	},
	on(name, handler) {
		if (name === 'move') {
			this._moveHandlers.push(handler);
		} else {
			this._giiker.on(name, handler);
		}
	},
	off(name, handler) {
		if (name === 'move') {
			this._moveHandlers = this._moveHandlers.filter((h) => h !== handler);
		} else {
			this._giiker.off(name, handler);
		}
	},
};
