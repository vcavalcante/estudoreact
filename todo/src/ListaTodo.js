import React,{ Component} from 'react';

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
                            <label className={todo.status}> 
                                <input type='checkbox' checked = {todo.status === 'complete'} /> {todo.texto} 
                            </label>
                        </li>);
                })
            }
            
            </ul>
        )
    }

}