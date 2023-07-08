import React, { useReducer } from 'react'
import "./styles/style1.css";

function UseReducer() {

    const [currentState,dispatch] = useReducer((currentState,action)=>{
        if(action.type === "inc"){
            currentState++;
        }else{
            currentState = Math.max(currentState-1,0);
        }
        return currentState;
    },0);


    return (
        <>
          <div className="center_div">
            <p>{currentState}</p>
            <div className="button2" onClick={() => dispatch({type:"inc"})}>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              INCR
            </div>
            <div
              className="button2"
              onClick={() => dispatch({type:"decr"})}>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              DECR
            </div>
          </div>
        </>
      );
}

export default UseReducer;