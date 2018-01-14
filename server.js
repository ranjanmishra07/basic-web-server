const express=require('express');
const app=express();
const hbs=require('hbs');
app.set('view engine' , 'hbs');
hbs.registerPartials(__dirname+'/views/partials');

app.use((req,res,next)=>{
   var now =new Date().toString();
   console.log(`${now}: ${req.method} ${req.url} `);
   next();
});
// app.use((req,res,next)=>{
//   res.render('maintenance.hbs');
// });

app.use(express.static(__dirname+'/public'));

app.get('/',(req,res)=>{
  // res.send({
  //   name:'raja',
  //   hobbies:['football','bb','cc'],
  //   age:'22'
  // });
  res.render('home.hbs',{
    PageTitle:'Home',
    currentYear:new Date().getFullYear()
  })
});
app.get('/about',(req,res)=>{
  res.render('about.hbs',{
    PageTitle:'about page',
    currentYear:new Date().getFullYear()
  });
});
app.get('/bad',(req,res)=>{
    res.send({error:"bad request"});
});
app.listen(3000,()=>{
  console.log('server is up on port 3000');
});
