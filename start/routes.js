'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URL's and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.0/routing
|
*/

const Route = use('Route')

//将路由和控制器绑定到一起
Route.get('/', 'SiteController.index')
Route.get('/login','SiteController.login')
//get请求的参数
Route.get('/posts','PostController.index')
//路由参数
Route.get('/posts/:id','PostController.show')

Route.get('/admin/api/index','Admin/SiteController.index')
Route.get('/admin/api/site','Admin/SiteController.site')
Route.get('/admin/api/posts/grid','Admin/PostController.grid')
Route.get('/admin/api/posts/form/:id?','Admin/PostController.form')
Route.get('/admin/api/posts/view','Admin/PostController.view')

Route.resource('/admin/api/posts','Admin/PostController')

// Uncomment the following code to test with mongodb

// Route.get('/test', async () => {
//   const User = use('App/Models/User')
//   await User.findOrCreate({
//     name: 'adonis-mongo-app'
//   }, {
//     name: 'adonis-mongo-app',
//     github: 'https://github.com/wxs77577/adonis-mongo-app',
//     cmd: 'adonis new api-server --blueprint wxs77577/adonis-mongo-app',
//     'cmd-cnpm': 'adonis new api-server --blueprint wxs77577/adonis-mongo-app --cnpm'
//   })
//   return await User.query().sort('-_id').paginate(1)
// })
