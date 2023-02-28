import express from 'express'
import {createClient} from '@supabase/supabase-js'
import bodyparse from 'body-parser'
const app = express()

const port = 3000
const supabase = createClient(
    'https://icasywxjhsbgdmgwillf.supabase.co',
'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImljYXN5d3hqaHNiZ2RtZ3dpbGxmIiwicm9sZSI6ImFub24iLCJpYXQiOjE2Nzc1NjM5OTMsImV4cCI6MTk5MzEzOTk5M30.b3-9hubgBp9Jbfpjx1cOhIfWSX8A7iqQBsyLUJ_wqkk'
);
app.use(bodyparse.json())
app.use(
    bodyparse.urlencoded({
        extended: true,
    })
)


 export default async function branch(req, res) {
    const {data , error} = await supabase
    .from('bank_branches')
    .select()
    .ilike('branch',`${req.query.q}`)    
    .order('ifsc',{ascending:false})
    .range(parseInt(req.query.offset),parseInt(req.query.offset)+parseInt(req.query.limit)-1)
            res.send(data)
    
}

//      client.query(`Select * from bank_branch where LOWER(branch) ='${req.query.q.toLowerCase()}'order by ifsc desc limit ${req.query.limit} offset ${req.query.offset}`, (err, result)=>{
//         if(!err){
//             res.send(result.rows);
//         }
        
//     });

// })



