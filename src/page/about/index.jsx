import { useSelector ,useDispatch}  from 'react-redux'
import { increment , decrement } from '../../action/counteraction'
import '../../App.css'



const About = () => {
    
    const counter = useSelector(state => state.counter)
    const dispatch = useDispatch() ;
    
    return ( 
    <div className='App'>
        <b> counter {counter}</b>
        <div>
            <button onClick={()=>dispatch(increment())}  >INCREMENT</button>
            <button onClick={()=>dispatch(decrement())} >DECREENT</button>
        </div>
    </div> );
}
 
export default About;