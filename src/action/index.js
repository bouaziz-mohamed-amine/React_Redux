export  const  addbook =(book)=>{
    return {
        type :'ADD',
        value : book,
    }
}

export const removebook =(book)=>{
    return {
        type : 'REMOVE',
        value : book ,
    }
}

export const editbook =(book)=>{
    return {
        type : 'EDIT',
        value: book ,
    }
}
 
