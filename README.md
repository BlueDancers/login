# 基于koa2 + vue + mongdb 使用 jwt 的登录模块

系统要求 : node V9.0.0  mongdb

项目运行之前建立表格   `login_user `

clone 代码:

```bash
git clone https://github.com/boold/login.git
```

运行代码 

```bash
npm install    //安装依赖
cd server      //进入服务端目录
node app       //启动app.js服务
```

浏览器访问localhost:80

![](http://on7r0tqgu.bkt.clouddn.com/Fh9siTGBUF3DZoqvPPrXwsVRhmHQ.png )

**用户 admin 密码 123**

 ![](C:\Users\spring\AppData\Local\Temp\1528264502690.png)

所有网页的事项都是数据库操作

这是build 之后的项目 



你也可以在项目 目录 下 npm run dev 同时在server 目录下 node app 启动开发模式



这是一个小型的全栈项目,代码不复杂,后端借鉴了java 的后端构架 代码相对比较规范,代码都有注释,层级很的分清楚

后端分级

```
server
    config       数据库配置
    controllers  控制层 所有方法都写在这里面
    models       模型层 给控制层调用的数据库方法都写在这里面
    routers      所有路由设定都写在这里面
    schema       基础数据库表
    app.js       入口文件
```



前端是用 vue  element-ui去完成页面构建 

使用的是当前比较热门的技术栈 各位如果找不到比较好的koa2 + vue + mongdb 的全栈项目,可以借鉴一下这个项目



未解决bug : 在登录的时候 有时候会报错 ,如果登录报错了,重启后端,(这个异步bug暂时不知道怎么解决)

有时间 继续完善

 2018-6-6