const express = require('express')
const Lanches = require('../models/Lanches')

const router = express.Router()

//criar
router.post('/', (req, res) => {
    let objSalvar = req.body
    {
        nome: 'X-bacon'
    }

    Lanches.create(objSalvar)
        .then(() => {
            res.send('Criado novo lanche :p')
        })
        .catch((erro) => {
            console.log('erro')
            console.log(erro)
            res.send('Deu ERRO!!  ;(')
        })
})

// Buscar
router.get('/', (requisicao, resposta) => {
    Lanches.findAll({
        where: {
            id: 1
        }
    })
        .then((res) => {
            console.log(res)
            resposta.send(res)
        })
        .catch((erro) => {
            console.log(erro)
            resposta.send('Deu Erro!')
        })
})

// Atualizar os dados - put
router.put('/', (requisicao, resposta) => {
    let objSalvar = {
        nome: 'X-tudo'
    }
    //atualizar
    Lanches.update({ objSalvar, }, {
        where: {
            id: 1
        }
    })
        .then((res) => {
            resposta.send("atualizado com sucesso")
        })
        .catch((erro) => {
            console.log(erro)
            resposta.send('Deu Erro!')
        })
})

//deletar
router.delete('/', (requisicao, resposta) => {
    Lanches.destroy({
        where: {
            id: 1
        }
    })
        .then((res) => {
            resposta.send('Deletado Com Sucesso')
        })
        .catch((erro) => {
            console.log(erro)
            resposta.send('Deu Erro!')
        })
})





router.get('/', (requisicao, resposta) => {

    let novoLanche = {
        titulo: 'x-bacon',
        preco: '20',
        empresa: 'Ariosi Lanches',
        descricao: 'Melhor lanchonete da metropoli Xambre',
        email: 'ariosilanches@ariosi.com',
        novo_trabalho: '0'
    }

})
router.post('/teste', (requisicao, resposta) => {
    resposta.send('Teste Nodemon REQ')
})
// http://localhost:3001/teste



module.exports = Lanches

module.exports = router