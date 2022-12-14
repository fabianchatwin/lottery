contractAddress = "0xe54A503767Eecbc96cbb23a478f07D6B4a1e6c26";

/*
*  funzione che viene eseguita dopo il caricamento della pagina
*  inizializzazione della connessione con il web3 provider (Metamask)
*/ 
window.addEventListener('load', async function() {
	// controllo se esiste metamask e se posso connettermi
	if (window.ethereum) {
		window.web3 = new Web3(ethereum);
		try {
			await ethereum.enable();
			console.log("user approved");
		} catch (error) {
			console.log("user rejected");
		}
	} else {
		alert("No provider. Manca Metamask?");
	}

  // l'abi serve per collegarsi alla BL e viene generata quando compili lo Smart Contract	
  abi = JSON.parse( '[{"inputs":[],"name":"enter","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"pickWinner","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"theplayers","outputs":[{"internalType":"address[]","name":"","type":"address[]"}],"stateMutability":"nonpayable","type":"function"}]' );

  // la vera e propria connessione al contratto
  contract = new web3.eth.Contract(abi, contractAddress);

  // ottieni l'indirizzo di chi si connette 
  accounts = await web3.eth.getAccounts();
});
