import express from 'express'
const router = express.Router()
router.get('/getitem',(req,res)=>{
    console.log('REST get services/test')
    return res.status(200).json(
        {
            items: [
                {
                    name:"item1",
                    status:"active"
                },
                {
                    name:"item2",
                    status:"active"
                },
                {
                    name:"item3",
                    status:"inactive"
                },
            ]
        }
    )
})
module.exports = router