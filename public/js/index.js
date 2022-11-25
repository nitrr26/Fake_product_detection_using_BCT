let account;
var isBuyer = false;

const connectMetamask = async () => {
    if(window.ethereum !== "undefined"){
        const accounts = await ethereum.request({method: "eth_requestAccounts"});
        let temp = accounts[0];
        account = document.getElementById("manufacturername").value.toLowerCase();
        console.log(account);
        console.log(temp);
        if(account.localeCompare("") == 0 ){
            alert("Please Enter Wallet Address");
        }
        else if(temp.localeCompare(account) == 0){
            document.getElementById("walletStatus").innerHTML = `Wallet Connected`;
        }
        else{
            document.getElementById("walletStatus").innerHTML = `Incorrect Wallet Address`;
        } 
    }
}

const connectContract = async () => {
    console.log("contract connected")
    const ABISeller = [
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "id",
                    "type": "uint256"
                }
            ],
            "name": "checkOwner",
            "outputs": [
                {
                    "internalType": "address",
                    "name": "owner",
                    "type": "address"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "getLength",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "string",
                    "name": "temp",
                    "type": "string"
                },
                {
                    "internalType": "string",
                    "name": "_productName",
                    "type": "string"
                },
                {
                    "internalType": "uint256",
                    "name": "_productQuantity",
                    "type": "uint256"
                }
            ],
            "name": "insertProduct",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "_productId",
                    "type": "uint256"
                }
            ],
            "name": "sendProduct",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        }
    ];
    const ABIBuyer =[
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "_productId",
                    "type": "uint256"
                }
            ],
            "name": "BuyProduct",
            "outputs": [
                {
                    "internalType": "string",
                    "name": "name",
                    "type": "string"
                }
            ],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "string",
                    "name": "temp",
                    "type": "string"
                },
                {
                    "internalType": "string",
                    "name": "_productName",
                    "type": "string"
                },
                {
                    "internalType": "uint256",
                    "name": "_productQuantity",
                    "type": "uint256"
                }
            ],
            "name": "insertProduct",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "sendProduct",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "_id",
                    "type": "uint256"
                }
            ],
            "name": "checkOwner",
            "outputs": [
                {
                    "internalType": "address",
                    "name": "owner",
                    "type": "address"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "string",
                    "name": "str",
                    "type": "string"
                }
            ],
            "name": "get",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "getLength",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "string",
                    "name": "str",
                    "type": "string"
                }
            ],
            "name": "getProductHistory",
            "outputs": [
                {
                    "components": [
                        {
                            "internalType": "uint256",
                            "name": "productId",
                            "type": "uint256"
                        },
                        {
                            "internalType": "string",
                            "name": "productName",
                            "type": "string"
                        },
                        {
                            "internalType": "address",
                            "name": "productManufacturer",
                            "type": "address"
                        },
                        {
                            "internalType": "address",
                            "name": "productOwner",
                            "type": "address"
                        },
                        {
                            "internalType": "address",
                            "name": "Source",
                            "type": "address"
                        },
                        {
                            "internalType": "address",
                            "name": "Destination",
                            "type": "address"
                        }
                    ],
                    "internalType": "struct Transaction[]",
                    "name": "",
                    "type": "tuple[]"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "string",
                    "name": "str",
                    "type": "string"
                },
                {
                    "internalType": "address",
                    "name": "userKey",
                    "type": "address"
                }
            ],
            "name": "isValid",
            "outputs": [
                {
                    "internalType": "bool",
                    "name": "",
                    "type": "bool"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        }
    ];
     
    const Address = "0x1975BEf36cC4b9B14eF536507382b96A00aE966E";
    window.web3 = await new Web3(window.ethereum);
     
    if(isBuyer){
        window.contract = await new window.web3.eth.Contract(ABIBuyer, Address);
    }
    else {
        window.contract = await new window.web3.eth.Contract(ABIBuyer, Address);
    }  
}




const connectBuyerContract = async () => {
  isBuyer = true;
}

const connectSellerContract = async () => {
  isBuyer = false;
}



function generateQrCode(string){
    var qrcode = new QRCode("qrcode", {
        text: "http://jindo.dev.naver.com/collie",
        width: 128,
        height: 128,
        colorDark: "#000000",
        colorLight: "#ffffff",
        correctLevel: QRCode.CorrectLevel.H
      });
      qrcode.makeCode(string);
    
      setTimeout(() => {
        let qelem = document.querySelector('#qrcode img')
        let dlink = document.querySelector('#qrdl')
        let qr = qelem.getAttribute('src');
        dlink.setAttribute('href', qr);
        dlink.setAttribute('download', 'filename');
        dlink.removeAttribute('hidden');
      }, 500);

      var canvas = document.getElementById('qrcode').querySelector('canvas');
      var dataURL = canvas.toDataURL();
      return dataURL;
    //   document.getElementById('result').innerHTML = dataURL;
    //   console.log(dataURL);
}

function hash(string) {
    const shaObj = new jsSHA("SHA-256", "TEXT", { encoding: "UTF8" });
    shaObj.update(string);
    const temp = shaObj.getHash("HEX");
    console.log(temp);
    return temp;
}

function exit(){
    if(document.getElementById("qrdl").getAttribute('href') == null){
        alert("Add Product First");
        console.log("no");
    }
    else{
        window.location.reload();
        console.log("yes");
    }
}

const addProduct = async() =>{
    const name = document.getElementById("productname").value;
    const quantity = document.getElementById("productQ").value;
    const id = await window.contract.methods.getLength().call()+1;
    const string = name + quantity.toString() + id.toString();
    const qrData = hash(string);
    console.log(qrData);
    const qrCodeString = generateQrCode(qrData);
    console.log(qrCodeString);
   
    if(confirm("Do you want to add the product?") == true){
        await window.contract.methods.insertProduct(qrData,name,quantity).send({ from: account });
        const res = await window.contract.methods.getLength().call();
        // document.getElementById("remarkSeller").innerHTML = `Product added with id ${res}`;
        alert(`Product added with id ${res}`);
    }
    else{
        prompt("Product was not Added");
    }  
}

const downloadQr = async() => {
    const name = await document.getElementById("productname").value;
    const quantity = await document.getElementById("productQ").value;
    const id = await window.contract.methods.getLength().call()
    const string = name + quantity.toString() + id.toString();
    const qrData = hash(string);
    console.log(qrData);
    const qrCodeString = generateQrCode(qrData);
}



const buyProduct = async() =>{
    const id = document.getElementById("productid").value;

    if(confirm("Do you want to Purchase the product?") == true){
        const res = await window.contract.methods.BuyProduct(id).send({ from: account });
        console.log(res);
        if(!alert(`Successfully raised a request to Purchase the Product`))window.location.reload();;
    }
    else{
        prompt("Product was not Added");
    } 
}
 
const sendProduct = async() =>{
    await window.contract.methods.sendProduct().send({ from: account });
    // document.getElementById("sender").innerHTML = `Product Status : Ownwership Changed`;
    alert("Product sent Successfully");
}


const getOwnership = async() =>{
    const id = document.getElementById("productIdforOwnership").value;
    const res = await window.contract.methods.checkOwner(id).call();
    console.log(res);
    document.getElementById("owner").innerHTML = `Owner of the product is ${res}`;
}

const getHistory = async() =>{
    const id = document.getElementById("productid").value;
    console.log(id);
    const arg =  await window.contract.methods.getProductHistory(id).call();
    let details = "";
    for(let i = 0;i<arg.length;i++){
       let temp = ""; 
       temp += `<li class = "items"><span class="item"> Product-ID :-</span> ${arg[i].productId}</li>`;
       temp += `<li class = "items"><span class="item"> Product-Name :-</span>${arg[i].productName}</li>`;
       temp += `<li class = "items"><span class="item"> Product-Manufacturer :-</span> ${arg[i].productManufacturer}</li>`;
       temp += `<li class = "items"><span class="item"> Product Owner :- </span>  ${arg[i].productOwner}</li>`;
       temp += `<li class="items"><span class="item">  Source :- </span> ${arg[i].Source}</li>`;
       temp += `<li class = "items"><span class="item"> Destination :- </span>  ${arg[i].Destination}</li>`;
       details += `<div class = "list">${temp}</div>`;
    }
    document.querySelector("main").innerHTML = `<div class="list_container" >${details}</div>`;
} 


const isValid = async() =>{
    const productCode = document.getElementById("productid").value;
    const walletAddress = document.getElementById("manufacturername").value;
    const res = await window.contract.methods.isValid(productCode,walletAddress).call();
    console.log("yes");
    if(res){
        document.getElementById("valid").innerHTML = `Product is Valid`;
    }
    else{
        document.getElementById("valid").innerHTML = `Product is Invalid`;
    }
    
}


{/* <main>
        <div class="list_container">
            <div class="list">
                <li class="items"><span class="item"> Product-ID :-</span> 7</li>
                <li class="items"><span class="item"> Product-Name :-</span>  paper</li>
                <li class="items"><span class="item"> Product-Manufacturer :-</span>  0xCD8d811Ff337896ef1998FC06C531d02F320Dc76</li>
                <li class="items"><span class="item"> Product Owner :- </span> 
                    0xCD8d811Ff337896ef1998FC06C531d02F320Dc76</li>
                <li class="items"><span class="item">  Source :- </span> 
                    0xCD8d811Ff337896ef1998FC06C531d02F320Dc76</li>
                <li class="items"><span class="item"> Destination :- </span>  0x22149037e5E2a0463d37E657d10eE9e578788549</li> 
            </div>
        </div>

    </main> */}