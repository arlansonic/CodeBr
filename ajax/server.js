const bodyParser = require('body-parser')
const express = require("express")
const multer = require('multer') //Para fazer upload de arquivos
const app = express()

app.use(express.static('.'))
// Para interpretar o envio de formulário
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())


// Criando a destinação para os arquivos
const storage = multer.diskStorage({
    destination: function(req, file, callback){
        callback(null, './upload')
    },
    //Função para pegar a data atual e o nome dos arquivos
    filename: function(req, file, callback){ 
        callback(null, `${Date.now()}_${file.originalname}`)
    }
})

const upload = multer({storage}).single('arquivo')

app.post('/upload', (req, res) => {
    upload(req, res, err =>{
        if(err){
            return res.end('Ocorreu um Erro.')
        }
            res.end('Concluido com Sucesso.')
                
    })

    
})

// Para pegar o formulario da aula FETCH 02.

app.post('/formulario',(req, res) => {
    // Crete Object
    res.send({
        ...req.body,
        id:1
    })
})

app.get('/parOuImpar', (req, res) => {
    /*Pegar do FrontEnd */
    // req.body
    // req.query
    // req.params

    const par = parseInt(req.query.numero) % 2 === 0
    res.send({
        resultado: par ? 'par' : 'impar'
    })
})


// app.get('/teste', (req, res) => res.send('Ok'))
app.listen(8080, () => console.log('Server Executando........'))