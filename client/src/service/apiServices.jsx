// src/services/apiService.js
import axios from 'axios';

const API_BASE_URL = 'http://localhost:7002';

export const getData = async (id) => {
  return await axios.get(`${API_BASE_URL}/get-data/${id}`);
};

export const getAllFileList = async () => {
  return await axios.get(`${API_BASE_URL}/get-all-file`);
};

export const postData = async (payload) => {
  return await axios.post(`${API_BASE_URL}/load-document`, payload);
};

export const uploadFile = async (file) => {
  const formData = new FormData();
  formData.append('file', file);

  return await axios.post(`${API_BASE_URL}/loadDocument`, formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
};
