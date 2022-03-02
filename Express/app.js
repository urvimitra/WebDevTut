const express=require("express");
const app=express();
const path=require("path");
const port=80;
app.use('/static',express.static('static'))

app.set('view enginer','pug');
app.set('views',path.join(__dirname,'views'))
app.get('/',(req,res)=>{
    const con="best content"
    const params={content: con}
    res.setStatus(200).render('index.pug')
})
app.listen(port,()=>{
    console.log(`App started successfully on port ${port}`)
});
