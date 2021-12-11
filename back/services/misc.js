const axios = require("axios");
const { API } = require("../conf/conf");

async function getPosts(userId = null) {
  try {
    const resultsRaw = await axios.get(`${API}/posts`);
    let result = [];
    if (userId === null) {
      result = resultsRaw.data;
    } else {
      result = resultsRaw.data.filter((el) => el.userId == userId);
    }
    return result;
  } catch (error) {
    return [];
  }
}

async function getPost(id) {
  try {
    const postRaw = await axios.get(`${API}/posts/${id}`);
    const comments = await getComments(id);
    const user = await getUser(postRaw.data.userId);
    return {
      ...postRaw.data,
      comments: comments,
      user: user,
    };
  } catch (error) {
    return [];
  }
}

async function getComments(id) {
  try {
    const results = await axios.get(`${API}/posts/${id}/comments`);
    return results.data;
  } catch (error) {
    return [];
  }
}

async function getUsers() {
  try {
    const results = await axios.get(`${API}/users`);
    return results.data;
  } catch (error) {
    return [];
  }
}

async function getUser(id) {
  try {
    const results = await axios.get(`${API}/users/${id}`);
    return results.data;
  } catch (error) {
    return [];
  }
}

async function createPost({ id, userId, title, body }) {
  try {
    const results = await axios.post(`${API}/posts`, {
      id,
      userId,
      title,
      body,
    });
    return results.data;
  } catch (error) {
    return error;
  }
}

async function updatePost({ id, userId, title, body }) {
  try {
    const results = await axios.post(`${API}/posts`, {
      id,
      userId,
      title,
      body,
    });
    return results.data;
  } catch (error) {
    return error;
  }
}

async function deletePost({ id }) {
  try {
    const results = await axios.delete(`${API}/posts/${id}`);
    return results.data;
  } catch (error) {
    return error;
  }
}

module.exports = {
  getPosts,
  getPost,
  getUsers,
  createPost,
  updatePost,
  deletePost,
};
