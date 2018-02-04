var express = require('express')
    , exphbs = require('express-handlebars')
    , path = require('path')
    , serveStatic = require('serve-static')
    , app
    ;

// create Express 4 App
app = express();


//app.use('/static', express.static(path.join(__dirname, 'public')));
app.use('/static', serveStatic(path.join(__dirname, 'public')))


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

function getData() {
    let test1 = [
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
        },
        {
            "Genre": '2031',
            "Fantasy&Sci Fi": 28,
            "Romance": 19,
            "Mystery/Crime": 29,
            "General": 30,
            "Western": 12,
            "Literature": 13
        },
        {
            "Genre": '2032',
            "Fantasy&Sci Fi": 28,
            "Romance": 19,
            "Mystery/Crime": 29,
            "General": 30,
            "Western": 12,
            "Literature": 13
        },
        {
            "Genre": '2032',
            "Fantasy&Sci Fi": 28,
            "Romance": 19,
            "Mystery/Crime": 29,
            "General": 30,
            "Western": 12,
            "Literature": 13
        },
        {
            "Genre": '2033',
            "Fantasy&Sci Fi": 28,
            "Romance": 19,
            "Mystery/Crime": 29,
            "General": 30,
            "Western": 12,
            "Literature": 13
        },
        {
            "Genre": '2034',
            "Fantasy&Sci Fi": 28,
            "Romance": 19,
            "Mystery/Crime": 29,
            "General": 30,
            "Western": 12,
            "Literature": 13
        },
        {
            "Genre": '2035',
            "Fantasy&Sci Fi": 28,
            "Romance": 19,
            "Mystery/Crime": 29,
            "General": 30,
            "Western": 12,
            "Literature": 13
        },
        {
            "Genre": '2036',
            "Fantasy&Sci Fi": 28,
            "Romance": 19,
            "Mystery/Crime": 29,
            "General": 30,
            "Western": 12,
            "Literature": 13
        },
        {
            "Genre": '2037',
            "Fantasy&Sci Fi": 28,
            "Romance": 19,
            "Mystery/Crime": 29,
            "General": 30,
            "Western": 12,
            "Literature": 13
        },
        {
            "Genre": '2038',
            "Fantasy&Sci Fi": 28,
            "Romance": 19,
            "Mystery/Crime": 29,
            "General": 30,
            "Western": 12,
            "Literature": 13
        }
    ];
    let test_temp = {
        "Genre": 'Other',
        "Fantasy&Sci Fi": 0,
        "Romance": 0,
        "Mystery/Crime": 0,
        "General": 0,
        "Western": 0,
        "Literature": 0
    };
    let test = test1.map((t, idx) => {
        if(idx > 8) {
            test_temp["Fantasy&Sci Fi"] += t["Fantasy&Sci Fi"];
            test_temp["Romance"] += t["Romance"];
            test_temp["Mystery/Crime"] += t["Mystery/Crime"];
            test_temp["General"] += t["General"];
            test_temp["Western"] += t["Western"];
            test_temp["Literature"] += t["Literature"];
            if(test1.length == (idx + 1)) {
                return test_temp;
            }
        } else {
            return t;
        }
    }).filter((t) => {
        if(t !== undefined) {
            return t;
        }
    });

    // console.log(test);

    let tempArr = [];
    let counter = 0;
    
    //for (var x in test){
    // if (test.hasOwnProperty(x)){
    // your code

    for (var y of Object.keys(test)) {
        counter++;
        let t = [], t1 = [];
        if (y == 0) {
            for (var z of Object.keys(test[y])) {
                t1.push(z);
            }
            tempArr.unshift(t1);
        }
        for (var z of Object.keys(test[y])) {
            // console.log('yyyyyyyyyyyyyyyyyyyyy', y);
            // console.log("zzzzzzzzzzzzzzzzzz",z);

            t.push(test[y][z])
        }
            tempArr.push(t);
    }
    return tempArr;
}
app.get('/', function (req, res) {
    

    //}
    //}

    // console.log(tempArr);
    var user = {
        title: "new handlebar title",
        data1: JSON.stringify(getData()),
        first: 'Brian',
        last: 'Mancini',
        site: 'http://derpturkey.com',
        age: 32
    };
    // console.log(JSON.stringify(user));
    res.render('index', user);

});

app.get('/graph', (req, res) => {
    let testData = {
        data1: JSON.stringify(getData())
    }


let resultData = [
    {
        total: 34,
        company: "Authbridge",
        location: "Gurgaon"
    },
    {
        total: 32,
        company: "TCS",
        location: "Gurgaon"
    },
    {
        total: 31,
        company: "Authbridge",
        location: "Mumbai"
    },
    {
        total: 24,
        company: "Accenture",
        location: "Gurgaon"
    },
    {
        total: 16,
        company: "Accenture",
        location: "Noida"
    },
    {
        total: 14,
        company: "Authbridge",
        location: "Noida"
    },
    {
        total: 12,
        company: "Accenture",
        location: "Mumbai"
    },
    {
        total: 2,
        company: "TCS",
        location: "Noida"
    }
];
console.log(Object.keys(resultData[0]));
let locations = resultData.map((obj, index, self) => {
    //console.log(Object.keys(obj))
    return obj.location;
}).filter((item, index, self) => {
    return self.indexOf(item) == index;
});
console.log(locations);
let companies = resultData.map((obj, index, self) => {
    return obj.company;
}).filter((item, index, self) => {
    return self.indexOf(item) == index;
});
companies.unshift("location");
companies.push("Others");
console.log(companies);
const MAX_LEN = 2;
let arrData = [];
arrData.push(companies);
for(let l of locations) {
    let loc = [];
    loc.push(l);
    for(let i=1; i<companies.length;i++){
        // if(i > 2) {
        //     console.log('$$$$$$$$$$$$$$$$$$$$$$$$', i)
        // } else {
            let searchPerformed = 0;
            resultData.filter((data, index) => {
                if(data.company == companies[i] && data.location == l) {
                    searchPerformed += parseInt(data.total);
                }
            });
            loc.push(searchPerformed);
        //}
    }
    arrData.push(loc);
}
console.log(arrData)

let dummyData = {
    data1: JSON.stringify(arrData),
    city: [
        {
            id: 1,
            name: 'New Delhi'
        },
        {
            id: 2,
            name: 'Mumbai'
        },
        {
            id: 3,
            name: 'Goa'
        },
        {
            id: 4,
            name: 'Patna'
        },
        {
            id: 5,
            name: 'Noida'
        },
        {
            id: 6,
            name: 'Gurgaon'
        }
    ]
}
// res.render('graph', testData);
    res.render('graph', dummyData);
})

app.listen(8000);