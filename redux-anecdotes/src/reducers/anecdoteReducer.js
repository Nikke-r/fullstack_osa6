import anecdoteService from '../services/anecdotes'

const reducer = (state = [], action) => {
  console.log('state now: ', state)
  console.log('action', action)
  switch (action.type) {
    case 'ADD_ANECDOTE': 
      return [...state, action.data]
    case 'INITIAL_ANECDOTES':
      return action.data
    case 'ADD_VOTE':
      return state.map(a => a.id !== action.data.id ? a : action.data)
    default:
      return state
  }
}

export const addVote = (anecdote) => {
  return async dispatch => {
    const modifiedAnecdote = await anecdoteService.addVote(anecdote)
    dispatch({ type: 'ADD_VOTE', data: modifiedAnecdote })
  }
}

export const addNewAnecdote = anecdote => {
  return async dispatch => {
    const newAnecdote = await anecdoteService.createNew(anecdote)
    dispatch({ type: 'ADD_ANECDOTE', data: newAnecdote })
  }
}

export const fetchInitialAnecdotes = () => {
  return async dispatch => {
    const anecdotes = await anecdoteService.getAll()
    dispatch({ type: 'INITIAL_ANECDOTES', data: anecdotes })
  }
}

export default reducer