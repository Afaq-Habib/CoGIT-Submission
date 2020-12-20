import {
    reducer as PlannerReducer,
    Models as PlannerModels,
} from 'react-planner';
import { Map } from 'immutable';

let AppState = Map({
    'react-planner': new PlannerModels.State()
});

//define reducer
const plannerreducer = (state, action) => {
    state = state || AppState;
    state = state.update('react-planner', plannerState => PlannerReducer(plannerState, action));
    return state;
};

export default plannerreducer;