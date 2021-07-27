const options = {
  name: "MyAwesomeDapp",
  preferredNetwork: beacon.NetworkType.MAINNET,
};
let myAddress;

const dAppClient = new beacon.DAppClient(options);

async function loadEdit() {
  const activeAccount = await dAppClient.getActiveAccount();
  if (activeAccount) {
    console.log(activeAccount)
    console.log("Already connected:", activeAccount.address);
    myAddress = activeAccount.address;
    document.getElementById("connect").disabled = true; 
    document.getElementById("connect").style.opacity = "0.5";
    document.getElementById("connect").innerHTML= `<img src="./assest/beacon.png"> Already Connected`; 
  } 
  else {
      const permissions = await dAppClient.requestPermissions();
      console.log("New connection:", permissions.address);
      myAddress = permissions.address;
  }
}
loadEdit();
function load() {
  dAppClient.clearActiveAccount();
  document.getElementById("connect").disabled = false; 
    document.getElementById("connect").style.opacity = "1";
    document.getElementById("connect").innerHTML= `<img src="./assest/beacon.png"> Connect With Tezos Wallet`; 
}
