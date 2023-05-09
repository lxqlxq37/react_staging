import React, { Component } from 'react'
import './index.css'

export default class Item extends Component {
    state = {mouse:false}
    //鼠标移入移出的回调
    handleMouse = (flag)=>{
        return ()=>{
            this.setState({mouse:flag})
            //console.log(flag);
        }
    }
    //勾选、取消勾选的回调
    handleCheck = (id)=>{
        return (event)=>{
            console.log(id,event.target.checked);
            this.props.updateTodo(id,event.target.checked)
            //this.setState    
        }
    }
    //删除的回调,这里不用高阶函数的方式实现
    handleDelete = (id) => {
        console.log('通知APP删除',id)
        if(window.confirm('确定删除吗？')){
            this.props.deleteTodo(id) 
        }
    }
    render() {
        const {id,name,done} = this.props
        const {mouse} = this.state
        return (
            <li style={{backgroundColor:mouse ? '#ddd':'white'}} onMouseLeave={this.handleMouse(false)} onMouseEnter={this.handleMouse(true)}>
                <label htmlFor="">
                    <input type="checkbox" checked={done} onChange={this.handleCheck(id)}/>
                    <span>{name}</span>
                </label>
                <button onClick={()=>{this.handleDelete(id)}} className="btn btn-danger" style={{display:mouse?'block':'none'}}>删除</button>  
            </li>
        )
    }
}
