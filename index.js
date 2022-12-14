contractAddress = "0xe54A503767Eecbc96cbb23a478f07D6B4a1e6c26";

window.addEventListener('load', async () => {
	if (window.ethereum) {
		window.web3 = new Web3(ethereum);
		try {
			await ethereum.enable();
			console.log("user approved");
		} catch (error) {
			console.log("user rejected");
		}
	}

  abi = JSON.parse( '[{"inputs":[],"name":"enter","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"pickWinner","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"theplayers","outputs":[{"internalType":"address[]","name":"","type":"address[]"}],"stateMutability":"nonpayable","type":"function"}]' );
  contract = new web3.eth.Contract(abi, contractAddress);
  accounts = await web3.eth.getAccounts();
});

async function check() {
	contractBalance = await web3.eth.getBalance(contractAddress);
	document.getElementById("contractBalance").textContent = web3.utils.fromWei(contractBalance);

	userBalance = await web3.eth.getBalance(accounts[0]);
	document.getElementById("userBalance").textContent = web3.utils.fromWei(userBalance);
	
	players = await contract.methods.theplayers().call();
	document.getElementById("theplayers").textContent = players;
}

async function deposit() {
	await contract.methods.enter().send( { 
		from: accounts[0],
		value: web3.utils.toWei("0.02")
	});
}

async function winner() {
	await contract.methods.pickWinner().send( { 
		from: accounts[0]
	});
}