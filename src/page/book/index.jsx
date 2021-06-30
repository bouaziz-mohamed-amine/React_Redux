import React, { Component } from 'react';

class Books extends Component {
    constructor(props) {
        super(props);
        this.state = { 
             books:[
            {
                id:"1",
                title:"the king",
                price: 200,
            },
            {
                id:"2",
                title:"the legende",
                price: 2000,
            },
            {
                id:"3",
                title:"the vmaker",
                price: 100,
            }
        ],
        targetbook:{}, 
    }
    }

    getbookid=(id,booklist)=>booklist.find(book => book.id === id);
    componentDidMount(){
        this.setState({
            ...this.state,
            targetbook :this.getbookid(this.props.match.params.id,this.state.books),
        });
    };
  
    render() { 
        
        return ( 
        <div>
            
             <p >amine bouaziz </p>
             <b>Book title :{this.state.targetbook.title}</b>
        </div> );
    }


    /**compo(){
    console.log("amine");
    this.setState({
        targetbook: this.getbookid(this.props.match.params.id,this.state.books),
    })
} */
}
 
export default Books;