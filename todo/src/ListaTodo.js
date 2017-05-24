import React,{ Component} from 'react';

class ItemTodo extends Component{
    constructor(props){
        super(props);
        this.state= {todo:props.todo}
    }
 
    toggleStatus(evento){
        var todo = this.state.todo ;
        todo.status = this.state.todo.status === 'incomplete'?'complete':'incomplete';
        this.setState({todo:todo});

    }
    render(){     
        return (
            <label className={this.state.todo.status}> 
                <input type='checkbox' defaultChecked = {this.state.todo.status === 'complete'} onChange={() => this.toggleStatus()} /> {this.state.todo.texto} 
            </label>
        )
    }
     
}

export default class ListaTodo extends Component{
    constructor(){
        super();
        
    }

    render(){
        return(
            <ul>
            {
                this.props.listaTodo.map(function(todo){
                    return(
                        <li key={todo.id}>
                            <ItemTodo todo={todo} />
                        </li>);
                })
            }
            </ul>
        )
    }

}