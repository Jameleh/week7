
export default function appexp(express,bodyParser,fs,crypto,http,path)
{
  
//As a result of its work, the exported function must return an instance of a ready-to-run Express application.
 


const app = express()

//const PORT = process.env.PORT||4322;
let headers = {
  'Content-Type':'text/plain',
  ...{
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET,POST,PUT,PATCH,DELETE',
}
}

//__filename
//For ESModules you would wa
/*При этом для получения пути к файлу необходимо воспользоваться 
значением import.meta.url.substring(7), чтобы получить расположение текущего файла в рамках файловой системы.
 (Внимание, при использовании Windows потребуется другое число, на 1-3 больше чем 7.) */

app.use(bodyParser.urlencoded({extended:true}))       
.all('/code/', r => {
 console.log(path.join(process.cwd(), 'app.js'));
  fs.readFile(path.join(process.cwd(), 'app.js')
    //import.meta.url.substring(8)
    ,(err, data) => {
      if (err) throw err;
      r.res.set(headers).end(data);
    });           
})
   .get('/login/', (req, res) => {
  res.set(headers).send('itmo308556');
})
//возвращать хэш sha1 от строки, представленной параметром URL (по имени input)
. all('/sha1/:input/', r => {
  // is used to create a Hash object that can be used to create hash digests by using the stated algorithm.
  let hashObject=crypto.createHash('sha1')
                        // updating data
                       .update(r.params.input)
                        // Encoding to be used
                       .digest('hex');
 r.res.set(headers).send(hashObject)
})
/*Данный маршрут должен возвращать содержимое интернет-ресурса по адресу,
 содержащемуся в query-параметре URL по имени addr (в простом текстовом формате).
  Для этого следует воспользоваться методом get модуля http. Т.е. приложение должно обратиться по адресу,
  который ему передан, прочитать его содержимое и тут же вернуть в качестве ответа.
  Данный маршрут должен обрабатываться методами GET и POST c возможностью в последнем 
  случае получить значение addr из тела запроса, например 
  /req/ с параметром ?addr=*/

  .get('/req/', (req, res) =>{
    res.set(headers);
    let data = '';
    http.get(req.query.addr, async function(response) {
        await response.on('data',function (chunk){
            data+=chunk;
        }).on('end',()=>{})
        res.send(data)
    })
})
.post('/req/', r =>{
    r.res.set(headers);
    const {addr} = req.body;
    r.res.send(addr)
})
.post('/insert/', async(req,res)=>{
const {login,password,URL}=req.body;
const data={
  login:login,
  password:password
}
try{
  await m.connect(URL, {useNewUrlParser:true, useUnifiedTopology:true});
  try{
      await data.save();
      res.status(201).json({'Добавлено: ':login});
  }
  catch(e){
      res.status(400).json({'Ошибка: ':'Нет пароля'});
  }
}
catch(e){
  console.log(e.codeName);
}   
})
 

return app;}
