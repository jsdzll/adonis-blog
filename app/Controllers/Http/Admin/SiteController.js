'use strict'

class SiteController {
  async index(){
    return {
      status:'OK'
    }
  }
  async site(){
    return {
      name:'driftage的博客',
      logo:'https://www.baidu.com/img/bd_logo1.png',
      menu:[
        {name:'我的帖子',url:'/rest/posts',icon:'fa fa-list'}
      ]
    }
  }
}

module.exports = SiteController
