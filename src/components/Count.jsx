import React from 'react'
import { connect } from "react-redux";
import { decrease, increase} from "../services/actions/action"

const mapStateToProps = state => ({
    count: state,
    
}

)

const mapDispatchToProps = dispatch => ({
    increase: data => dispatch(increase(data)),
    decrease: data => dispatch(decrease(data)),
    
})


const Count = (props) => {
    // console.log(props.count.counter)
  

    // console.log(props.increase)
    return (
        <div className='wrapper'>
            <div className='screen'>{props.count.counter}</div>
            <div className='btn-wrapper'>
                <button onClick={() => props.increase("increase")} id="plus" className="btns">increase</button>
                <button onClick={() => props.decrease("increase")} id="minus" className="btns">decrease</button>
            </div>
        </div>

    )
}

export default connect(mapStateToProps, mapDispatchToProps)(Count);