const express = require('express');
const router = express.Router();

const Rent = require('../model/rentBookSchema');

router.post('/rent', async(req, res)=>{
    const name = req.body.username;
    const title = req.body.title;
    const toDate = req.body.todate;
    const fromDate = req.body.fromdate;
    const userAddress = req.body.useraddress;
    const userPhone = req.body.userphone;
    const userId = req.body.userid;

    const book = new Rent({
        username: name,
        userphone: userPhone,
        useraddress: userAddress,
        title: title,
        fromDate: fromDate,
        toDate: toDate,
        id: userId
    })

    const savedRequest = await book.save();
    res.send(true);

})

module.exports = router;