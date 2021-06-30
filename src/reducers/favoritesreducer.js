const favoriteReducer =(state=[],action)=>{

    switch (action.type){
        case 'ADD' :
             return state = [...state, action.value] ;
        case 'REMOVE' : 
        return state.filter(book => book.id != action.value.id );
        case 'EDIT' :
            return state.map(el=>el.id ===action.payload.id ? action.payload : {...el}) 
        default : 
        return state ;  
      
    }
}

export default  favoriteReducer ;