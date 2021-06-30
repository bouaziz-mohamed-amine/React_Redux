const counter=(state=5,action)=>{

    switch(action.type){

        case 'ADDC' :   
            return state +1 ;
        case 'DECREMENTC' :   
            return state - 1 ;
        default : return state ;     
    }
}

export default counter ;