contractAddress = "";

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

