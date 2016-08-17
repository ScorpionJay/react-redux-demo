/**
*	action 类型
*/
export const ADD_TODO = 'ADD_TODO'

export const COMPLETE_TODO = 'COMPLETE_TODO'

export function addTodo(text){
	return {
		type: ADD_TODO,text
	}
}

export function completeTodo(index){
	return {
		type:COMPLETE_TODO,
		index
	}
}





export function fetchList(index){
	 return dispatch => {
	 	fetch('https://gist.githubusercontent.com/ScorpionJay/de11dc5bacefea9cee5394b73f456688/raw/e86fd421e4bce5c85dd87d29ddc7315ec1d33eed/list.json',{
			//mode: "cors"
			}).then(function(response) {
				
    return response.json()
  }).then(function(json) {
    console.log('parsed json', json)
     dispatch(addTodo(json[index].description))
  }).catch(function(ex) {
    console.log('parsing failed', ex)
  })}
}