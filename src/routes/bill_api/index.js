var query = require('../../mysql');

var sql = require('../../mysql/sql');

var uuid = require('node-uuid');

var addBill = function(req,res,next){
    var params = req.body,
        uid = params.uid,
        timer = params.timer,
        cid = params.cid,
        money = params.money;

    if(!uid || !timer || !cid || !money){
        res.json({code:4,msg:'丢失参数'})
    }else{
        var lid = uuid.v1();
        // lid,uid,timer,cid,money
        query(sql.ADD_BILL,[lid,uid,timer,cid,money],function(error,results){
            if(error){
                res.json({code:0,msg:error})
            }else{
                res.json({code:1,msg:'添加成功'})
            }
        })
    }
}

var getBill = function(req,res,next){
    var uid = req.query.uid,
        timer = req.query.timer,
        time_type = req.query.time_type, //1:年 2018 2017  2：月 2018-11  2018-12
        classify = req.query.classify;   //["购物","餐饮",....]
        console.log(typeof classify);
        if(!uid ||!timer){
            res.json({code:4,msg:"丢失参数"})
        }else{
            var sqlStr
            if(classify){
                classify = JSON.parse(classify); 
                var target = [];
                classify.forEach(function(item){
                    target.push(decodeURI(item))
                })
                sqlStr = time_type == 1 ? sql.SELECT_YEAR_CBILL : sql.SELECT_MONTH_CBILL;
            }else{
                sqlStr = time_type == 1 ? sql.SELECT_YEAR_BILL : sql.SELECT_MONTH_BILL;
            }
            selectBill(sqlStr,target);
        }
    function selectBill(sqlStr,target){
        query(sqlStr,[uid,timer,target],function(error,results){
            if(error){
                res.json({code:0,msg:error})
            }else{
                res.json({code:1,data:results})
            }
        })
    }
}

var delBill = function(req,res,next){
    var lid = req.query.lid;

    if(!lid){
        res.json({code:4,msg:'缺少参数'})
    }else{
        query(sql.DELETE_BILL,[lid],function(error,results){
            if(error){
                res.json({code:0,msg:error})
            }else{
                res.json({code:1,msg:'删除成功'})
            }
        })
    }
}

module.exports = {
    addBill:addBill,
    getBill:getBill,
    delBill:delBill
}