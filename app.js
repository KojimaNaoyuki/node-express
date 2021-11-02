/* 1. expressモジュールをロードし、インスタンス化してappに代入。*/
const express = require("express");
const app = express();

/* 2. listen()メソッドを実行して3000番ポートで待ち受け。*/
const server = app.listen(3000, function(){
    console.log("Node.js is listening to PORT:" + server.address().port);
});

//送信するAPI情報を用意
const nameList = [
    {
        id: '1',
        name: 'develop'
    },
    {
        id: '2',
        name: 'taro'
    },
    {
        id: '3',
        name: 'hirosi'
    }
]

//固定のapi
app.get("/getName", function(req, res, next) {
    //getNameにアクセスされたら実行される
    res.json(nameList); //引数resのjsonメソッドを使用することでフロント側に渡せる
});

//動的なapi
app.get("/getName/:nameId", function(req, res, next) {
    let resultName = 'No member';

    //総当たりで検索　効率悪いけど
    for(let i = 0; i < nameList.length; i++) {
        //req.paramsの中にプレースフォルダーにした値が入っている
        if(nameList[i].id == req.params.nameId) {
            resultName = nameList[i];
        }
    }

    res.json(resultName);
});