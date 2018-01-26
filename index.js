var express = require('express')
    , exphbs = require('express-handlebars')
    , path = require('path')
    , app
    ;

// create Express 4 App
app = express();

// set the view engine
app.set('view engine', 'hbs');

// configure the view engine 
app.engine('hbs', exphbs({
    extname: 'hbs',
    defaultLayout: 'layout',
    layoutsDir: 'views/layouts/'
}));

/*
app.engine('hbs', hbs.express4({  
  defaultLayout: __dirname + '/views/layouts/default.hbs',
  partialsDir: __dirname + '/views/partials',
  layoutsDir: __dirname + '/views/layouts'
}));
*/
// configure views path
app.set('views', path.join(__dirname, 'views'));

app.get('/', function (req, res) {
    let test = [
        {
            "Genre": '2010',
            "Fantasy&SciFi": 10,
            "Romance": 24,
            "Mystery/Crime": 20,
            "General": 32,
            "Western": 18,
            "Literature": 5
        },
        {
            "Genre": '2020',
            "Fantasy&Sci Fi": 16,
            "Romance": 22,
            "Mystery/Crime": 23,
            "General": 30,
            "Western": 16,
            "Literature": 9
        },
        {
            "Genre": '2030',
            "Fantasy&Sci Fi": 28,
            "Romance": 19,
            "Mystery/Crime": 29,
            "General": 30,
            "Western": 12,
            "Literature": 13
        }
    ];
 
    let tempArr = [];

    //for (var x in test){
        // if (test.hasOwnProperty(x)){
          // your code
          
          for (var y of Object.keys(test)) {
            let t = [], t1 = [];
            if(y == 0) {
                for(var z of Object.keys(test[y])) {
                    t1.push(z);
                }
                tempArr.unshift(t1);
            }
            for(var z of Object.keys(test[y])) {
                // console.log('yyyyyyyyyyyyyyyyyyyyy', y);
                // console.log("zzzzzzzzzzzzzzzzzz",z);
                
                t.push(test[y][z])
            }
            tempArr.push(t);
          }
          
        //}
      //}

console.log(tempArr);
var user = {
    title: "new handlebar title",
    data1: JSON.stringify(tempArr),
    first: 'Brian',
    last: 'Mancini',
    site: 'http://derpturkey.com',
    age: 32
};
console.log(JSON.stringify(user));
    res.render('index', user);

});

app.listen(8000);