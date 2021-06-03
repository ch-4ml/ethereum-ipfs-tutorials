const express = require('express');
const router = express.Router();

const { create } = require('ipfs-http-client');
const ipfs = create();

const Web3 = require('web3');
const web3 = new Web3('http://localhost:7545');
const contract = require('../contract/IPFSCIDStorage');
const sc = new web3.eth.Contract(contract.abi, contract.address);

/* GET home page. */
router.get('/', async function(req, res) {
  try {
    // 이더리움 스마트 컨트랙트에 저장되어있는 CID 가져오기
    const cid = await sc.methods.IPFSCID().call();
    console.log(cid);
    
    res.render('index', { title: 'IPFS Tutorials', cid });
  } catch(err) {
    console.log(err);
  }  
});

router.put('/image', async function(req, res) {
  try {
    const accounts = await web3.eth.getAccounts();
    const image = req.files.image.data;
    
    // IPFS에 이미지 업로드
    const file = await ipfs.add(image);

    // CID
    const cid = file.path;

    // 이더리움 스마트 컨트랙트에 CID 저장
    await sc.methods.setCID(cid).send({ from: accounts[0] });

    res.status(200).send({ cid });
  } catch (err) {
    console.log(err)
  }
});

module.exports = router;
