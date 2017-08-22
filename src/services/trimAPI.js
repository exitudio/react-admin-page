import express from 'express'
import https from 'https'
const router = express.Router()


let getData = function(url){
    return new Promise((resolve, reject) => {
        https.get(url,function(response){
            let str = ''
            response.on('data', function (chunk) {
                str += chunk;
            });

            response.on('end', function () {
                //console.log(req.data);
                console.log(str);
                // your code here if you want to use the results !
                return resolve(JSON.parse(str))
            });
        })
    })
}

export function sumAllData(values){
    let returnObj = {}
    for(let i=0; i<values.length; i++){
        let eachData = values[i][0]
        for( let key in eachData){
            console.log('key',key)
            console.log('value',eachData[key])
            returnObj[key] = eachData[key]
        }
    }
    return returnObj
}

router.get('/trimapi',(req,res)=>{
    console.log('REST get services/test')
    
    const link1 = getData("https://api-dev.cbinsights.com/api/v1/company/info?ids=15529")
    const link2 = getData("https://api-dev.cbinsights.com/api/v1/company/fundings?ids=15529")

    Promise.all([link1, link2]).then(values => { 
        let returnObj = sumAllData(values)
        return res.status(200).json(returnObj)
    });

    /*
    http.get("https://api-dev.cbinsights.com/api/v1/company/fundings?ids=15529",function(response){
        
    })*/

})
export default router