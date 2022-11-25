//SPDX-License-Identifier: GPL-3.0
pragma solidity >=0.5.0 <0.9.0;

struct Product{
     uint id;
     string productName;
     address productManufacturer;
     address productOwner;
     uint productQuantity;
     address fromPath;
     address[] toPath;
     string qrCode;  
}

struct Transaction{
    uint productId;
    string productName;
    address productManufacturer;
    address productOwner;
    address Source; 
    address Destination;
}

struct Pair{
    uint id;
    address buyerAddress;
}


contract Inventory{
   uint[] internal productList; // the products' ids;
   mapping (uint => Product) internal productStructs;
   mapping (uint => Transaction[]) internal productTransactions;
   mapping (string => uint) internal QRmapping;
   mapping (address => Pair[]) internal pendingQueue;

   function getLength() external view returns(uint){
        return productList.length;
   }

   function checkOwner(uint _id) external view returns(address owner){
        return productStructs[_id].productOwner; 
   }

   function getProductHistory(string memory str)external view returns(Transaction[] memory){
       Transaction[] memory t = new Transaction[](0);
       if(QRmapping[str] <= 0)return t;
       uint _productId = QRmapping[str];
       return   productTransactions[_productId];
   }

   function get(string memory str)external view returns(uint){
      return QRmapping[str]; 
   }
    
   function isValid(string memory str,address userKey)external view returns(bool){
       if(QRmapping[str] <= 0)return false;
       uint len = productTransactions[QRmapping[str]].length;
       Transaction memory temp =  productTransactions[QRmapping[str]][len-1];
       if(temp.Destination == userKey)return true;
       else return false; 
   }
}
 
 

contract Seller is Inventory{
    
    uint private productCount = 1; // to keep track of the products ids 
    

    function insertProduct(string memory temp,string memory _productName, uint _productQuantity) external {
       
        require(msg.sender == 0xCD8d811Ff337896ef1998FC06C531d02F320Dc76,  "string returned if condition fails");
        productStructs[productCount].productName = _productName;
        productStructs[productCount].productOwner = msg.sender;
        productStructs[productCount].productManufacturer = msg.sender;
        productStructs[productCount].productQuantity = _productQuantity;
        productStructs[productCount].qrCode = temp;
        productList.push(productCount);
        productStructs[productCount].id = productCount;
        QRmapping[temp] = productCount ;
        productCount = productCount + 1;  
    }

    function sendProduct() external {
        address temp = msg.sender;
        // address temp = 0xCD8d811Ff337896ef1998FC06C531d02F320Dc76;
        for(uint i=0; i<pendingQueue[temp].length; i++){
            uint _productId = pendingQueue[temp][i].id;
            address own = productStructs[_productId].productOwner;
            if(own == msg.sender){
                Transaction memory t = Transaction({
                productId : _productId,
                productName :productStructs[_productId].productName,
                productManufacturer : productStructs[_productId].productManufacturer,
                productOwner : productStructs[_productId].productOwner,
                Source : productStructs[_productId].productOwner,
                Destination :  pendingQueue[temp][i].buyerAddress
              });
              productTransactions[_productId].push(t);
              productStructs[_productId].productOwner = pendingQueue[temp][i].buyerAddress;
             }
            else{
                pendingQueue[temp];
                break;
            }
        }
        delete pendingQueue[temp]; 
    }
}

contract Buyer is Seller {

    function BuyProduct(uint _productId) external returns(string memory name){
        // require(checkProduct(_productId));
       address temp =  productStructs[_productId].productOwner;
       Pair memory p = Pair({
         id:_productId,
         buyerAddress:msg.sender
       });
       pendingQueue[temp].push(p);
        return "hellothere";
    }
} 