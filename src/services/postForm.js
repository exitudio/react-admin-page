import express from 'express'
const router = express.Router()
router.post('/postform',(req,res)=>{
    console.log('REST post services/postform')
    return res.status(200).json(
        {
            id:3555443,
            data:'great!!!'
        }
    )
})
module.exports = router