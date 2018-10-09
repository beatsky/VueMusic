import jsonp from '../common/js/jsonp'
import songList from '../common/js/list.json'
import { commonParams, options } from './config'
// import axios from 'axios'
export function getRecommend () {
  const url = 'https://c.y.qq.com/musichall/fcgi-bin/fcg_yqqhomepagerecommend.fcg'

  const data = Object.assign({}, commonParams, {
    uin: 0,
    platform: 'h5',
    needNewCode: 1
  })
  console.log(jsonp(url, data, options))
  return jsonp(url, data, options)
}

export function getDiscList () {
  // const url = 'https://c.y.qq.com/splcloud/fcgi-bin/fcg_get_diss_by_tag.fcg'
  // // const url = '/api/getDiscList'
  // const data = Object.assign({}, commonParams, {
  //   loginUin: 0,
  //   hostUin: 0,
  //   format: 'jsonp',
  //   inCharset: 'utf8',
  //   outCharset: 'utf-8',
  //   notice: 0,
  //   platform: 'yqq',
  //   needNewCode: 0
  // })
  // return axios.get(url, {
  //   params: data
  // }).then((res) => {
  //   return Promise.resolve(res.data)
  // })
  // return jsonp(url, data, options)
  return songList
}
