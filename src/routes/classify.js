var express = require('express');
var router = express.Router();

var classifyApi = require('./classify_api');

//查询分类图标
router.get('/api/iconlist',classifyApi.iconlist);

//查询分类
router.get('/api/getClassify',classifyApi.getClassify);

//添加分类
router.post('/api/addClassify',classifyApi.addClassify);

module.exports = router;