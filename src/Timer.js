import { hover } from '@testing-library/user-event/dist/hover';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { Timelist } from './TimeList';
import { SassColor } from 'sass'; 
import { TestContext } from './Context';

var intervall
export class Timer extends React.Component
{
    constructor() {
        super();
        this.state={
            hour:0,
            minute:0,
            second:0
        }
        
    }

    start=()=>
    {
        intervall=setInterval(()=>
        {
            this.setState({
                second: this.state.second+1
            })
            if(this.state.second=="5")
            {
                this.setState({
                    second:0,
                    minute:this.state.minute+1
                })
            }
            if(this.state.minute=="5")
                {
                    this.setState({
                        minute:0,
                        hour:this.state.hour+1
                    })
                }
        },1000)
    }

    stop=()=>
    {
        clearInterval(intervall)
    }

    static contextType=TestContext;
    reset=()=>
    {
        this.setState({
            hour:0,
            minute:0,
            second:0
        })
    }

    time=()=>
    {
        // let newtime=this.state.hour+"/"+this.state.minute+"/"+this.state.second
        let newtime=document.querySelector(".timer").innerHTML
        this.context.setarray([...this.context.Array,newtime])


    }

    render()
    {

        return(
            <>
            <h2 className='timer'onClick={this.time}>
            it is:{this.state.hour+"/"+this.state.minute+"/"+this.state.second}
            </h2>
            <div className="button_box">

      <span className="action_button start_burtton" onClick={this.start}>start</span>

      <span className="action_button stop_burtton" onClick={this.stop}>stop</span>

      <span className="action_button reset_burtton" onClick={this.reset}>reset</span>

     <span 
          className="action_button reset_burtton" 
          onClick={this.props.handelislight}
          style={{
            background:this.props.isLight==true ? "black" : "white" ,
            color : this.props.isLight ? "white" : "black" 
          }}
          >
            {this.props.isLight==true ? "dark" : "change" }
    </span>

        </div>
            </>
        )
    }
}