
# FAKE PROUDCT DETECTION USING BLOCKCHAIN TECHNOLOGY

This is a minor project on Blockchain technology, submitted for partial fulfilment of the requirements for VII-Semester of the degree
of
#### Bachelor of Technology in Computer Science & Engineering


We used solidity programming language for making Ethereum smart contract to store the product information in the form of QR code in the Ethereum Blockchain. 
## Table of contents

* Overview
* Objectives
* Architechure
* Tech stack
* Implementation




## Overview
Risk considerations like counterfeiting and duplication are always present when a technology or product is developed globally; these elements can have an impact on the reputation of the organization, its revenue, and the wellbeing of its customers. The supply chain contains a huge number of products. to verify whether the product is genuine or not. Manufacturers experience the biggest issue and significant losses as a result of counterfeit goods. We can utilize blockchain technology to determine whether a product is authentic or not.

Blockchain is a ledger for storing data that makes it challenging or difficult to alter, hack, or defraud the system. A blockchain is essentially a network of computer systems that copy and distribute a digital record of transactions across the whole network. Multiple transactions are included in each block of the chain, and each time a new transaction takes place on the blockchain, a record of that transaction is added to the records of all participants. Distributed Ledger Technology (DLT) refers to the decentralized database that is controlled by several users (DLT). Transactions on a blockchain are recorded with an immutable cryptographic signature known as a hash.

Blockchain technology aids in addressing the issue of product counterfeiting. Technology based on blockchain is more secure. A chain of transactions for that product will be produced once it is stored on the network, making it feasible to keep track of all transaction history for both the product and its present owner. In the blockchain, all transaction histories will be kept as blocks. The proposed system assigns a generated QR code to each product, which the end user can scan to access all the product's information. By scanning a QR code, we can determine whether a product is real or fraud.

## Objectives
This project's concept originated as a result of the rise in counterfeit goods. These are the project's goals:
*  Using blockchain to design an anti-counterfeit system.
    - The purpose of counterfeiting is to profit from the better value of the imitation products. 
    - In contrast to the traditional supply chain, which uses a centralized network, the blockchain uses a decentralized database where each transaction involves the value of the product's data.
    - This is accomplished by establishing a record whose veracity can be checked by everyone in the network as blockchain is a peer-to-peer system.
* To use a QR code to safeguard product information.
    - The manufacturer uploads a block to the Ethereum blockchain, a QR code for the product, and any further information about the product using his Ethereum wallet by login into the manufacturer account.

## Architechture
The system keeps track of a product's status, including its manufacturer, present owner, and previous owners, as well as its time stamp, which indicates when the product was modified, and a QR code.
* #### Process for Product Enrollment:
    The product's initial owner is going to be the manufacturer. Therefore, manufacturer will add product, and at that point QR code will be generated. After generating the QR code, the product and manufacturer will be registered on the network.

* #### Product to Supplier:
    The producer will send the product to the supplier in the following phase. When a supplier receives a product, the ownership of the product will change to the current supplier's address.

* #### Process for end-user authentication:
    When the chain is complete, the customer will take the product, visit the website, upload the QR code, and then have access to all the product's details, from manufacture to final store. After learning more, the next question is whether or not to purchase the product.
    
![App Home Page](https://github.com/nitrr26/Fake_product_detection_using_BCT/blob/master/public/img/c-01.png)

## Tech Stack
### Blockchain & Web Technology
**Blockchain:** 
* Solidity


**Frontend:** 
* HTML
* CSS
* JavaScript

**Backend:** 
* NodeJs
* Web3.js

**Tools:** 
* Ganache
* Metamask
* Visual Studio code



## Implementation
 The project consists of two modules: -

* Frontend 
    - This part mainly concerned of user’s view of the application and to make the process simple for any of the user’s using the application. The frontend part of the application interacts between the backend and the user both.

* Backend 
    - This part includes writing of the smart contract code through which we define all the rules and regulations of the transactions done for the buying and selling of any products. Also, the use Ganache (local Blockchain Simulator) is done in this part.

### Frontend
The various sections of the applications accessible to user of the are described below:-

### Home page of the application

Our Blockchain network for fake product detection project consists of three different nodes with different with roles and authorization. These nodes are as follows below: 

    1) Manufacturer 
    2) Supplier
    3) Customer 

To join this blockchain network the user will have to create a wallet where he will get his own public key and private key. Public key is just like the  email address of the user which will act as its account address and gives him a public identity over the network whereas Private key acts as the password of user’s account which will allow him to initiate transactions and to know his cryptographic assets from the blockchain.

 Roles of all the nodes are described below: -

#### Manufacturer: 
- The main responsibility of the manufacturer is to register Product details like its name, quantity, manufacturing details, date and time of the product of product creation. Also, the generation of unique QR-Code for the product is also the responsibility of the manufacturer.

#### Supplier: 
- The supplier provides various kind of services to the manufacturing company of the product like the distribution of the product to the various retailers and also the shipment of the products. He acts like the middlemen between the customers and the product manufacturer.

#### Customer: 
- Among all the above customer’s role is the simplest he/she just have to buy the product of their interest. Before buying the product, customers can check its validity and its supply chain history by scanning the attached QR-Code of the product.



 ### Interface for adding products by the manufacturer
 




To add the product into the blockchain network manufacturer has to, first Login at the application as product m anufacturer and this will be authorized by comparing with data stored over the database. If the user of the application is validated, then only he/she will be allowed to access the manufacturer privileges.

Now the user has to connect to his wallet using his public key (for this project we have used MetaMask as the wallet) and has to fill all the necessary details of mentioned in the page for the product. After that user has to confirm the transaction by confirming it after clicking the “Add Product” button at the Metamask wallet by paying some Gas price as shown in the above image. Once the product is registered a confirmation popup will notify about same and after that the manufacturer can download the QR generated for the product and can attach to it.







### Interface to buy product by the supplier


To Buy the product customer has to first become the part of the blockchain network by creating any wallet account which will provide him its public and private key and also, he/she has to Sign up inside the application by creating account at this.

The buyer then has to login inside the application as Buyer using his Email-Id and password which will lead him/her to the product paying page. Here firstly, the buyer has to connect his/her wallet to his account to proceed for further transaction. After this, the user has to fill the product id of the concerned product to purchase. User can also check the validity of the product at the check product section before purchasing it, by scanning the QR of the product. By clicking the “Buy Product” button and after that confirming the purchase of the product by paying some Gas price, a successful request will be raised to the Owner of the product of its purchase.  





### Interface for sending product by owner

Every seller in the network will have their own request queue which will hold purchase request of all the products owned by him. To proceed for further process the seller first has to connect his account to the wallet by signing in into his account and by clicking the “Connect to wallet” button. After that with the help of “Send Product” the seller can complete the transaction.
When the “Send Product” button is clicked, the seller has to confirm the transaction at the wallet by paying some gas price and all the purchase requests made by the buyers will complete in one go. The successful purchase will only be completed if the transaction is happening according to the smart contract rules, like checking whether the user who is sending the product is himself the owner of the product or not i.e., a condition can arise that two buyer may request for the same product but the ordering time is different, so as to avoid any double spending the owner will complete the first request and have to discard the second request because now he himself doesn’t have the ownership of the product. After all the successful validation checks the transfer of ownership of the product to the buyer’s address will be done by seller.

### Interface to Check product


To access this page user doesn’t have to be a part of the blockchain network, neither there is a need of wallet account, nor does he need to Sign-Up/ Sign-In at the web page. User has to simply scan the QR-code of the product and has to enter the string which he/she got after scanning it at the “Enter Unique product Code” section. Also, he/she has to enter the address of the seller from whom the user is purchasing the product which will allow him to access supply chain history of the product in the blockchain network.

Once all the details are filled user can click the “See Product History” button which will show all supply-chain history of the product. He/She can also click “Check Product Validity” button which will show them whether the product is valid or not and they can confirm the result manually also.



### See Product History Using QR code

The final validation of product will be done by comparing the Destination address of the last transaction of the blockchain to the seller’s address. if both are same then the product is valid otherwise invalid
## Group Members
* BHARAT BHUSHAN TANDON

* GRITIKA CHANDRAKAR

* KARISHMA DAHARIYA

