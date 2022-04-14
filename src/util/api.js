import axios from 'axios';
import Vue from 'vue';
import { AUTHENTICATION_URLS } from '@/util/endpoints';
import app from '@/main';
// import { DANGER_TOAST_OPTION } from '@/util/toast-options';
import store from '@/store';
import router from '@/router';

const EXCLUDING_URLS = [`${process.env.VUE_APP_API_BASE_URL ? process.env.VUE_APP_API_BASE_URL : window.location.origin}${AUTHENTICATION_URLS.LOGIN}`];

export const API = axios.create({
  baseURL: process.env.VUE_APP_API_BASE_URL,
  headers: {
    'Accept-Language': 'vi-VN',
  },
});

API.interceptors.request.use((request) => {
  // add auth header with jwt if account is logged in and request is to the api url
  const needAuthenticated = !request.url || (request.url && !EXCLUDING_URLS.includes(request.url));

  const token = Vue.$cookies.get('token');
  // console.log(request.url, needAuthenticated);
  if (needAuthenticated && request.headers && token) {
    request.headers['Authorization'] = `Bearer ${token}`;
  }
  return request;
});

API.interceptors.response.use(
  function (response) {
    // Do something with response data
    return response;
  },
  async function (error) {
    const token = Vue.$cookies.get('token');
    if (error.response.status === 401 && token) {
      Vue.$cookies.remove('token');
      await store.dispatch('user/logout');
      // app.$bvToast.toast('Phiên đăng nhập hết hạn, vui lòng đăng nhập lại', DANGER_TOAST_OPTION);
      setTimeout(() => {
        router.push({ path: '/auth/login' });
      }, DANGER_TOAST_OPTION.autoHideDelay / 2);
    } else {
      // app.$bvToast.toast(error.response.data.message ? error.response.data.message : 'Lỗi không xác định', DANGER_TOAST_OPTION);
    }
    return Promise.reject(error);
  }
);
