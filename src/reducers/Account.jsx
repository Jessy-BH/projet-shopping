import { SET_USER } from "../constants/actions";

let stateInit = {
    user: {name: 'maxime', lastname:'guilbaud', email : 'maxime@gmail.com'}   
    ,
    name: 'alan',
    lastname: '',
    email: ''
}

let reducerUser = (state = stateInit, action = {}) => {
    
    const {user, name} = state;
    
    switch(action.type){
        case SET_USER:
            if(name.trim() ==='' || lastname.trim() ==='' || email.trim() === '' ){
                return {
                    ...state,
                    message: "Vous avez oublié le nom de votre user"
                }
            }
           
            return {
                ...state,
                user: user.concat(name.trim()),
                message: `Merci votre user ${name} a bien été modifié`,
                name: '',
                lastname: '',
                email: ''
            }
       
            
        default: 
            return state;
    }
}

export default reducerUser;