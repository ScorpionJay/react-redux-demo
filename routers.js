import React , {Component } from 'react'
import { Router, IndexRoute ,Route, hashHistory,Link,Redirect } from 'react-router'

import Todos from './containers/Todos'
import TodoItem from './containers/TodoItem'
import Find from './containers/Find'
import Me from './containers/Me'


/* App */
class App extends Component{
	render(){
		return (
			<div className="nav">

				<div className='header'>头部</div>
				
				<div className="content">{this.props.children}</div>

				<div className='footer'>
					<ul className="nav-ul">
						<li><Link to="/todos" activeClassName="active">首页</Link></li>
						<li><Link to="/find" activeClassName="active">发现</Link></li>
						<li><Link to="/me" activeClassName="active">我</Link></li>
					</ul>
				</div>
				
			</div>
		);
	}
}

/* routes */
const Routes = {
	path: '/',
	component: App,
	indexRoute :{component: Todos},
	childRoutes: [
		{ path: 'todos', component: Todos},
		{ path: 'todoItem', component: TodoItem},
		{ path: 'find', component: Find},
		{ path: 'me', component: Me},
		{
			path: 'inbox',
			component: Todos,
			childRoutes : [{
				path: 'messages/:id',
				onEnter: ({ params }, replace) => replace(`/messages/${params.id}`)
			}]
		},
		{
			component: Todos,
			childRoutes: [{
				path: 'messages/:id',component:Todos
			}]
		}
	]
}


export default Routes