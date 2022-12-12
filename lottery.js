import abi from './lottery.json' assert { type: 'json' };

if (typeof window.ethereum !== 'undefined') {
	// Instance web3 with the provided information
	const web3 = new Web3(window.ethereum);
  try {
	// Request account access
	await window.ethereum.enable();
  } catch(e) {
	// User denied access
  }
}

async function start() {
//const rpcURL = ''; // Your RCP URL goes here
//const web3 = new Web3(rpcURL)

const address = '0x21F2E2bA3A16ef67dE8CBb5fEDE25Ae19Da74D18'

//const contract = new web3.eth.Contract(abi, address);
/*
contract.methods.totalSupply().call((err, result) => { console.log(result) });
contract.methods.name().call((err, result) => { console.log(result) });
contract.methods.symbol().call((err, result) => { console.log(result) });
*/
a = await web3.eth.getBbalance("0x21F2E2bA3A16ef67dE8CBb5fEDE25Ae19Da74D182");
console.log(a);
}
start();

/*
async function initWeb3() {
	if (window.ethereum) {
		web3Provider = window.ethereum;
		try {
			await window.ethereum.request({ method: "eth_requestAccounts" });;
		} catch (err) {
			alert("User denied account access");
		}
	} else {
		alert("I cannot connect to your wallet. Make sure you have a Polygon MATIC wallet connected.");
	}
	web3 = new Web3(web3Provider);


	await $.getJSON('lottery.json', function (data) {
		KuoriciniDao = TruffleContract(data);
		KuoriciniDao.setProvider(web3Provider);
	});

	try {
		accounts = await web3.eth.getAccounts();
		instance = await KuoriciniDao.deployed();
		user = await instance.nameOf(accounts[0], { from: user.address });
	} catch (err) {
		console.log("Error reading account info!", err);
	};
	document.getElementById("userName").textContent = user.name;
}

initWeb3();

*/