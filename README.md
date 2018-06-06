# 基于koa2 + vue + mongdb 使用 jwt 的登录模块

这是一个小型的全栈项目,代码不复杂,后端借鉴了java 的后端构架 代码相对比较规范,层级很的分清楚

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