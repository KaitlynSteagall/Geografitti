// ===============================================================================
// ROUTING
// ===============================================================================

import axios from "axios";

export default {

// #region READ / GET ---

  // admin path to list all users
  getAllUsers: () => {
    return axios.get("/api/users");
  },

  // generic path to get any needed information about a single user
  getUserData: (id) => {
    return axios.get("/api/users/" + id);
  },

  // path to return data on a single image
  getSingleImage: (id) => {
    return axios.get("/api/images/" + id);
  },

  // path to return all images for a single user
  getGalleryByUser: (id) => {
    return axios.get(`/api/users/${id}/gallery`);
  },

  // path to return all images in range
  getImagesNearPosition: (locationObject) => {
    return axios.get("/api/images/nearby", locationObject);
  },
  // #endregion

// #region CREATE / POST ---

  // tell firebase to create new user
  createNewUser: (userObject) => {
    return axios.post("/api/users/new", userObject);
  },

  // ask firebase to validate existing user
  loginExistingUser: (userObject) => {
    return axios.post("/api/users/login", userObject);
  },

  // add new image to database. this is called by the firebase helper script once a url exists on the server
  createNewImage: (imageObject) => {
    return axios.post("/api/images/new", imageObject);
  },

  // #endregion

// #region UPDATE / PUT ---

  // mark image NSFW
  markImageNSWF: (id) => {
    return axios.put(`/api/images/${id}/nsfw`);
  },

  // upvote image
  upvoteImage: (id) => {
    return axios.put(`/api/images/${id}/upvote`);
  },

  // update user data
  updateUserData: (id, userDataObject) => {
    return axios.put(`/api/users/${id}/update`, userDataObject);
  },
  // #endregion

// #region DELETE ---

  // admin route to delete user
  deleteUser: (id) => {
    return axios.delete(`/api/users/${id}/delete`);
  },

  // delete image
  deleteImage: (id) => {
    return axios.delete(`/api/images/${id}/delete`);
  },
  // #endregion

};
