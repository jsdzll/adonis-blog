'use strict'

const Post = use('App/Models/Post')

class PostController {
  async index({request, view}){
    // //新增
    // await Post.create({
    //   title:'我的第一篇博客'
    // })
    const posts =  await Post.all()
    //参数（模板文件，传什么数据）
    return view.render('posts.index',{
      posts:posts.toJSON()
    })
  }
  async show({params,view}){
    // return await Post.find(params.id);
    const post =  await Post.find(params.id);
    return view.render('posts.show',{
      post:post.toJSON()
    })
  }
}

module.exports = PostController
