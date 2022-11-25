const qr = require('qrcode')

const generateQrCode = (data) =>{
    var string;
    qr.toDataURL(jsondata , {type:"terminal"} , function (err, url) {
        if(err)return console.log("error")
        string = url;
    })
    qr.toFile("public\img\qr.png",data,(err)=>{
        if(err) return console.log(err);
    })
    return url;
}

module.exports={
    generateQrCode
}




 