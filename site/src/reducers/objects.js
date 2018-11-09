export const GET_ALL_PRODS = 'GET_ALL_PRODS';
export const SAVE_ALL = 'SAVE_ALL';
export const SMARTPHONES = 'SMARTPHONES';
export const LAPTOPS = 'LAPTOPS';
export const OTHER = 'OTHER';

const init = {
	clickedProduct: {
		name: "",
		category: "",
		description: "",
		price: 0,
		quantity: 0
	},
	products: [{
		name: "",
		category: "",
		description: "",
		price: 0,
		quantity: 0
	}]
};

const reducer = (state = init, action) => {
	if (action === undefined) return state;
	switch (action.type) {
		case SAVE_ALL: {
			var newState = Object.assign({}, state, {products: action.payload});
			return newState;
			return {...state, products: action.payload};
		}

		default: {
			return state
		}
	}
};

const actions = {
	saveAll: prods => {
		return {
			type: SAVE_ALL,
			payload: prods
		}
	},
	addObject: newObject => {
		return {
			type: GET_ALL_PRODS,
			payload: newObject
		}
	}
};

export {
	reducer as objects,
	actions as objectActions
}
