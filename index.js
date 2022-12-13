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

async function deposit() {
	contract.methods.enter().send( { 
		from: accounts[0], 
		value: web3.utils.toWei("0.02") , 
		gas: 300000 } );
}

async function checkBalance() {
	$("#contractBalance").text("ba ba ba...");
	$("#userBalance").text("ba ba ba...");
	$("#players").text("ba ba ba...");
	contractBalance = await web3.eth.getBalance(contractAddress);
	$("#contractBalance").text(web3.utils.fromWei(contractBalance));
	userBalance = await web3.eth.getBalance(accounts[0]);
	$("#userBalance").text(web3.utils.fromWei(userBalance));
	players = await contract.methods.theplayers().call();
	$("#players").text(players);
};

async function pickWinner() {
	contract.methods.pickWinner().send( { 
		from: accounts[0] } );
}

