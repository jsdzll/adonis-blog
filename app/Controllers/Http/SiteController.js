'use strict'

class SiteController {
  index(){
    //可以返回html,文本,对象
    return 'home'
  }
  login(){
    return 'login'
  }
}

module.exports = SiteController
