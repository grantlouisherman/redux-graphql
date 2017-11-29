import fire from '../fire';

/* Actions */
const LOAD = "LOAD";

/* Action Creators */
const loader =  list  => ({ type:LOAD, list });

export default function reducer (state = {}, action) {
    const newState = Object.assign({}, state);
    if(action.type === LOAD){
        newState.list = action.list;
        return newState;
    }
    else{
        return newState;
    }
    
}

/*  Dispatchers  */
export const dbLoader = () => dispatch => {
    fire.database().ref('todo').once('value')
    .then( res => ( dispatch(loader(res.val()) )) )
    .catch(err => (console.error(err)));
}