/*
 * Filename: /Users/litong/study/miniProgram/myApp/src/plugins/fetch.js
 * Path: /Users/litong/study/miniProgram/myApp
 * Created Date: Saturday, January 5th 2019, 8:50:27 pm
 * Author: litong
 *  fetch 封装
 * Copyright (c) 2019 Your Company
 */
 import Taro from '@tarojs/taro'


export const baseUrl = "http://yapi.demo.qunar.com/mock/37254/starbucks";

export function getHttp(url,params) {
  url = baseUrl + url;
  return new Promise(function(resolve, reject) {
      Taro.request({
        url: url,
        data: params,
        header: {
            'content-type': 'application/json'
        }
})
  .then(res => resolve(res.data))
  });
}


export function postHttp(url,params) {
  url = baseUrl + url;
  return new Promise(function(resolve, reject) {
      Taro.request({
        url: url,
        data: params,
        method:"post",
        header: {
            'content-type': 'application/json'
        }
})
  .then(res => resolve(res.data))
  });
}
