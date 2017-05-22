import React,{Component} from 'react';
import ListaTodo from './ListaTodo.js';
import TodoForm from './TodoForm.js';
import PubSub from 'pubsub-js';

export default class TodoBox extends Component{
    constructor(){
        super();
        var listaTodos = [{id:0,status:'complete',texto:'lavar cachorro'},
                     {id:1,status:'incomplete',texto:'criar código'},
                     {id:2,status:'complete',texto:'pegar cachorro'},
                     {id:3,status:'incomplete',texto:'apagar código'}];
        this.state = {listaTodo:listaTodos};
        console.log(this.state)
    }

    componentDidMount(){
        PubSub.subscribe('novoTodo',function(topico,novoTodo){
            novoTodo.id = this.state.listaTodo.length+1;
            console.log(novoTodo);
            var novaLista = this.state.listaTodo.push(novoTodo);
            this.setState({lista:novaLista});
        }.bind(this));

    }



    render(){
        return (
            <div>
                <TodoForm/>
                <ListaTodo listaTodo = {this.state.listaTodo}/>
            </div>
        );

    }

}