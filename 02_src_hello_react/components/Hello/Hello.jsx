import React,{Component} from 'react'
//加module做样式模块化
import hello from './Hello.module.css'

//创建并暴露组件
export default class Hello extends Component{
    render(){
        return <h2 class={hello.title}>Hello React！！！</h2>
    }
}