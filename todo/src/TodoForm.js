import React,{Component} from 'react';
import PubSub from 'pubsub-js';

export default class TodoForm extends Component{
    constructor(){
        super();
        this.state={status:'incomplete',texto:''};

    }
    enviaForm(evento){
        evento.preventDefault();
        //enviar para api
        console.log(this.state);
        PubSub.publish("novoTodo",this.state)

    }
    save(evento){
        this.setState({status:'incomplete',texto:evento.target.value});
    }
    render(){
        return(
            <form className="input-append" onSubmit={this.enviaForm.bind(this)}>
                <input type='text' placeholder='Todo' onChange={this.save.bind(this)} /><button className='btn btn-default'>Inserir!</button>
            </form>

        );

    }

}