const bakerAddress = "tz1MJx9vhaNRSimcuXPK2rW4fLccQnDAnVKJ"; 
const bakerName = "Delegation Example DApp"; 

    // Initiate DAppClient
    const client = new beacon.DAppClient({
      name: bakerName,
    });

    const delegate = () => {
      client.requestOperation({
        operationDetails: [
          {
            kind: beacon.TezosOperationType.DELEGATION,
            delegate: bakerAddress,
          },
        ],
      });
    };

    document.getElementById("connect").addEventListener("click", () => {
      client.getActiveAccount().then((activeAccount) => {
        if (activeAccount) {
          delegate();
        } else {
          client.requestPermissions().then((permissions) => {
            delegate();
          });
        }
      });
    });
