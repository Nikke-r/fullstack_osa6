import React from 'react'
import { connect } from 'react-redux'
import { addVote } from '../reducers/anecdoteReducer'
import { setNotification } from '../reducers/notificationReducer'

const AnecdoteList = (props) => {
    const vote = (anecdote) => {
      props.addVote(anecdote)
      props.setNotification(`You voted '${anecdote.content}'`, 5)
    }

    return(
        props.anecdotes.map(anecdote => 
            <div key={anecdote.id}>
                <div>
                    {anecdote.content}
                </div>
                <div>
                    has {anecdote.votes}
                    <button onClick={() => vote(anecdote)}>vote</button>
                </div>
            </div>
        )
    )
}

const mapStateToProps = state => {
    if( state.filter === '' ){
        return {
            anecdotes: state.anecdotes.sort((a, b) => b.votes - a.votes )
        }
    }

    return {
        anecdotes: (state.anecdotes.filter(anecdote => anecdote.content.toLowerCase().includes(state.filter.toLowerCase())).sort((a, b) => b.votes - a.votes))
    }
}

const mapDispatchToProps = {
    addVote,
    setNotification
}

const ConnectedAnecdoteList = connect(mapStateToProps, mapDispatchToProps)(AnecdoteList)

export default ConnectedAnecdoteList
