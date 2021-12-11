const axios = require('axios')
const {API} = require('../conf/conf')

async function getPosts(){
    try {
        const results = await axios.get(`${API}/posts`)
        return results.data
    } catch (error) {
        return []
    }
}

async function getPost(id){
    try {
        const postRaw = await axios.get(`${API}/posts/${id}`)
        const comments = await getComments(id)
        const user = await getUser(postRaw.data.userId)
        return {
            ...postRaw.data,
            comments: comments,
            user: user
        }
    } catch (error) {
        return []
    }
}

async function getComments(id){
    try {
        const results = await axios.get(`${API}/posts/${id}/comments`)
        return results.data
    } catch (error) {
        return []
    }
}

async function getUser(id){
    try {
        const results = await axios.get(`${API}/users/${id}`)
        return results.data
    } catch (error) {
        return []
    }
}

module.exports = {
    getPosts,
    getPost
}