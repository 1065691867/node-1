//引入http模块
var  http = require("http")
//引入http模块
var  fs = require("fs")
//引入http模块
http.createServer(function(req,res){
	//设置跨域
	res.setHeader("Access-Control-Allow-Origin","*");
	//写响应头
	res.writeHead(200,{"Content-Type":"text/html;charset=utf-8"});
	
	
//设置路由


	 if(req.url == "/a"){
       fs.readFile("a.json","utf-8",function(err,data){
       	if(err){
       		throw err
       	}
       	res.end(data)
       })
    }else if(req.url == "/1"){
       fs.readFile("1.json","utf-8",function(err,data){
       	if(err){
       		throw err
       	}
       	res.end(data)
       })
    }else if(req.url == "/2"){
       fs.readFile("2.json","utf-8",function(err,data){
       	if(err){
       		throw err
       	}
       	res.end(data)
       })
    }else if(req.url == "/3"){
       fs.readFile("3.json","utf-8",function(err,data){
       	if(err){
       		throw err
       	}
       	res.end(data)
       })
    }
	
}).listen(8080,function(){
	//引入http模块
	console.log("启动成功")
})
