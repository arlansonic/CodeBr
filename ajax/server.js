const bodyParser = require('body-parser')
const express = require("express")
const multer = require('multer') //Para fazer upload de arquivos
const app = express()

app.use(express.static('.'))
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



// app.get('/teste', (req, res) => res.send('Ok'))
app.listen(8080, () => console.log('Server Executando........'))