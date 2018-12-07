## 柠檬记帐

### 柠檬记账简介

记录吃喝玩乐具体场景的记账软件。一款记录社交场景中收支的社交化记账软件。让记账像呼吸一样自然。

<html>
<!--在这里插入内容-->
<img style="width:100px;height:100px;" src="https://www.hishop.com.cn/uploads/allimg/180716/21708-1PG6102123L9.png"/>
</html>

### 项目逻辑梳理

**详见项目逻辑图**

### 项目需要使用的软件

软件 | 说明 
---|---
phpStudy | 启动mysql数据库  
navicate | mysql数据库可视化操作软件
postman | 调试后端接口
Hbuilder | mui推荐的前端编辑器
Vscode | 编辑器

### 技术栈

**整体采用前后端分离，分别使用git进行项目版本控制**

<html>
<!--在这里插入内容-->
<img style="width:600px;" src="https://note.youdao.com/yws/public/resource/eaa9d75bb329bd59616869a3c5f5ac93/xmlnote/519F83D565A14965B845D9E72FDD919E/3999"/>
</html>

### 后端开发

#### 搭建项目架构

- 使用express生成项目骨架

- 根据用户/分类/账单三大类，建对应的文件

- 最终生成的项目目录

```
+-- bin
+-- mysql
|   +-- index.js            //连接数据库，进行sql查询
|   +-- sql.js              //sql语句
+-- public                  //静态资源
|   +-- images
|   +-- javascripts
|   +-- stylesheets
+-- routes                  //路由
|   +-- bills               //账单相关接口的逻辑
|   |   +-- index.js
|   +-- classify            //分类相关接口的逻辑
|   |   +-- index.js
|   +-- user                //用户相关接口的逻辑
|   |   +-- index.js
|   +-- bill.js             //配置账单路由
|   +-- index.js            
|   +-- users.js            //配置用户路由
|   +-- classify.js         //配置分类路由
+-- app.js
+-- package.json
```
#### 建表

- 分类图标表

字段名 | 说明 | 类型 | 是否主键
---|---|---|---
id | 图标id | number | 是
icon_name | 图标类名 | varchar | 否

- 分类表

- 用户表

字段名 | 说明 | 类型 | 是否主键
---|---|---|---
uid | 用户id | varchar | 是
nick_name | 用户昵称 | varchar | 否

- 账单表

### 接口文档

#### 1.用户

- 添加用户

```
接口地址：/api/addUser

接口说明：添加用户

请求方式：post

接口传参：有
```

参数| 数据类型 | 是否必须
---|---|---
nickname | string | 是

#### 2.分类

- 添加分类

- 获取分类图标

```
接口地址：/api/getCIcons

接口说明：获取分类图标

请求方式：get

接口传参：无
```
- 获取所有分类

#### 3.账单

- 添加账单

- 删除账单

- 查询账单

### code值

code值 | 说明
---|---
1 | 成功
0 | 服务器错误
3 | 昵称已经使用
4 | 缺少参数

### 前端开发














