//影片相关资源api接口文件
import axios from 'axios'

/**
* 获取轮播图列表的接口
* @param {Object} params 参数
*/

const getBannerList = (params) => {
    return axios.get('https://m.maizuo.com/gateway', {
        params,
        headers: {
            'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.0.4","e":"1575278586880468295696","bc":"440300"}',
            'X-Host': 'mall.cfg.common-banner'
        }
    })
}

export {
    getBannerList
}
