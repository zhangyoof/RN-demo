import request from './request'
import appUrlConfig from './appPortalConfig'

// 登录
export function login(param) {
    return request('post', appUrlConfig.login.userLogin,param , false)
}
