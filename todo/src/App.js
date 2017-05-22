import React, { Component } from 'react';
import './bootstrap.css';
import './App.css';
import TodoBox from './TodoBox.js'
class App extends Component {
  render() {
    return (
      <div className="container ">
        <div className="row span6 offset3">
            <div className="navbar navbar-inverse">
                <div className="navbar-inner">
                    <div className="container">
                        <a className="btn btn-navbar" data-target=".subnav-collapse" data-toggle="collapse">
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                        </a>
                        <a className="brand" href="">Todo Web App</a>
                        <div className="nav-collapse subnav-collapse">
                            <ul className="nav">
                                <li><a href="/all">All</a></li>
                                <li><a href="/todo">Todo</a></li>
                                <li><a href="/done">Done</a></li>

                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div id="app" className="well">
                <TodoBox/>
                
            </div>
        </div>
    </div>
    );
  }
}

export default App;
