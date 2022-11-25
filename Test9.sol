//SPDX-License-Identifier: GPL-3.0
pragma solidity >=0.5.0 <0.9.0;

contract Seller{
    constructor() {

    }

    struct Product {
        uint id;
        string productName;
        address productManufacturer;
        address productOwner;
        uint productQuantity;
        address fromPath;
        address[] toPath;
        string qrCode;
    }

    mapping (uint => Product) public productStructs; //information about the products
    uint[] private productList; // the products' ids
    uint private productCount ; // to keep track of the products ids

    uint public k = 1;
    
    function getLength() external view returns(uint){
        return productList.length;
    }

    uint num = 0;

    function getNum() external view returns(uint){
        return num;
    }

    function insertProduct(string memory _productName, uint _productQuantity) external {
       
        require(msg.sender == 0xCD8d811Ff337896ef1998FC06C531d02F320Dc76,  "string returned if condition fails");
        productStructs[productCount].productName = _productName;
        productStructs[productCount].productOwner = msg.sender;
        productStructs[productCount].productManufacturer = msg.sender;
        productStructs[productCount].productQuantity = _productQuantity;
        productList.push(productCount);

        productStructs[productCount].id = productList.length - 1;
        productCount = productCount + 1;  
    }

    function sendProduct(uint _productId) external {
        for(uint i=0; i<productStructs[_productId].toPath.length; i++){
            address own = productStructs[_productId].productOwner;
            
            if(own == msg.sender){
              productStructs[_productId].productOwner = productStructs[_productId].toPath[i];
            }
            else{
                break;
            }
        }
       
    }

}


contract Buyer is Seller{

    function checkOwner(uint _productId) external view returns(address own){
        return productStructs[_productId].productOwner;
        
    }

    // function checkProduct(uint _productId, string qrCode) public pure returns(bool){
    //     require(productStructs[_productId].qrCode == qrCode);
        
    // }

    function BuyProduct(uint _productId) external returns(string memory name){
        // require(checkProduct(_productId));
        productStructs[_productId].toPath.push(msg.sender);
        return "hellothere";
    }
} 