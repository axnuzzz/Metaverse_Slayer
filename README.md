#If you want to play the game, then go to https://nft-game-starter-project.anujarora6.repl.co/ and just connect your wallet and enjoy :)

#Steps to recreate this project

1. Make any changes that you want to make to the solidity contract.Also make your own .env file that looks like the template mentioned below.
2. Open this project folder in the terminal.
3. Run the command "npx hardhat run scripts/deploy.js --network goerli"
4. You'll get a contract address, store it.
5. Head over to https://replit.com/@AnujArora6/nft-game-starter-project?v=1 and fork this replit.
6. Under src, you'll find a file called constants.jsx. In this file, replace the variable CONTRACT_ADDRESS with your contract address.
7. Also get your ABI from artifacts/contracts/MyEpicGame.sol/MyEpicGame.json. Copy the whole file and paste it into utils/MyEpicGame.json.

8. Run this replit and ypur game is ready


#.env template

YOUR_QUICKNODE_API_URL = "URL here"

YOUR_PRIVATE_GOERLI_ACCOUNT_KEY =" private key here"
