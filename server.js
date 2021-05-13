const express =require('express')
const bodyParser =require('body-parser')
const cors =require('cors');
const app =express();
const mongo = require('mongodb').MongoClient
const url = 'mongodb://localhost:27017'
mongo.connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }, (err, client) => {
  if (err) {
    console.error(err)
    return
  }
 console.log('connected succesfully');
});

app.get('/ecommerce/product', function (req, res) {
    db.meibanlist.aggregate([
        {
            "$group": {
                "_id": "$product_Id",
                "count": { "$sum": 1 },
                "average": { "$avg": "$amount" }
            }
        }
    ], function (err, result) {
        console.log(result);
        res.json(result);
    });
});
const port =process.env.PORT || 3000
app.listen(port,(req,res)=>{
    console.log(`port are running at port ${port}`);
})



// $result = $collection->aggregate(array(
//     array('$match' => $document),
//     array('$group' => array('_id' => '$book_id', 'date' => array('$max' => '$book_viewed'),  'views' => array('$sum' => 1))),
//     array('$sort' => $sort),
  
//   // get total, AND preserve the results
//     array('$group' => array('_id' => null, 'total' => array( '$sum' => 1 ), 'results' => array( '$push' => '$$ROOT' ) ),
//   // apply limit and offset
//     array('$project' => array( 'total' => 1, 'results' => array( '$slice' => array( '$results', $skip, $length ) ) ) )
//   ))