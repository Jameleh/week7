
export default function appexp(express,bodyParser,fs,crypto,http,path,User,m,CORS)
{
  
//As a result of its work, the exported function must return an instance of a ready-to-run Express application.
 


const app = express()

//const PORT = process.env.PORT||4322;
const HTMLH = {'Content-Type':'text/html; charset=utf-8',...CORS}
    const TEXTH = {'Content-Type':'text/plain',...CORS}
    const JSONH={'Content-Type':'application/json',...CORS}
    const CORSH={...CORS}; 
const wp = {
  id: 1,
  title: { 
    rendered : 'itmo308556'
  }
  
}

//__filename
//For ESModules you would wa
/*При этом для получения пути к файлу необходимо воспользоваться 
значением import.meta.url.substring(7), чтобы получить расположение текущего файла в рамках файловой системы.
 (Внимание, при использовании Windows потребуется другое число, на 1-3 больше чем 7.) */

 app
 .use(bodyParser.urlencoded({extended:true}))  
 .use(bodyParser.json())       

 .all('/login/', r => {
  r.res.set(TEXTH).send('itmo308556');
})


.all('/render/',async(req,res)=>{
res.set(CORSH);
const {addr} = req.query;
const {random2, random3} = req.body;

http.get(addr,(r, b='') => {
    r
    .on('data',d=>b+=d)
    .on('end',()=>{
        fs.writeFileSync('views/index.pug', b);
        res.render('index',{login:'itmo398556',random2,random3})
    })})})
.all('/wordpress/', r=>{
  r.res.set(JSONH).send(wp)
})
.all('/wordpress/wp-json/wp/v2/posts/', r=>{
  r.res.set(JSONH).send([wp])
})
.use(({res:r})=>r.status(404).set(HTMLH).send('itmo308556'))
.set('view engine','pug')

return app;}
