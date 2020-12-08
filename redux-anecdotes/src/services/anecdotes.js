import axios from 'axios'

const baseUrl = 'http://localhost:3001/anecdotes'

const getAll = async () => {
    const response = await axios.get(baseUrl)
    return response.data
}

const createNew = async (anecdote) => {
    const anecdoteTobeSaved = { content: anecdote, votes: 0 }
    const response = await axios.post(baseUrl, anecdoteTobeSaved)
    return response.data
}

const addVote = async (anecdote) => {
    const modified =  {...anecdote, votes: anecdote.votes + 1 }
    const response = await axios.put(`${baseUrl}/${anecdote.id}`, modified)
    return response.data
}

export default { getAll, createNew, addVote }