import React,{Component} from 'react'
import welcome from './Welcome.module.css'

//创建并暴露组件
export default class Welcome extends Component{
    render(){
        return <h2 class={welcome.demo}>Welcome</h2>
    }
}