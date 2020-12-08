import React from 'react'
import { addNewAnecdote } from '../reducers/anecdoteReducer'
import { connect } from 'react-redux'
import { setNotification } from '../reducers/notificationReducer'

const AnecdoteForm = (props) => {
    const addAnecdote = async (event) => {
        event.preventDefault()
        const anecdote = event.target.anecdote.value
        event.target.anecdote.value = ''
        props.addNewAnecdote(anecdote)
        props.setNotification(`You added new anecdote: ${anecdote}`, 5)
    }

    return(
        <div>
            <h2>Create new</h2>
            <form onSubmit={addAnecdote}> 
                <input name='anecdote' />
                <input type='submit' value="Create" />
            </form>
        </div>
    )
}

const mapDispatchToProps = {
    addNewAnecdote,
    setNotification
}

export default connect(null, mapDispatchToProps)(AnecdoteForm)
