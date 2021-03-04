const schedule = require('node-schedule')

// Temporizando
const tarefa1 = schedule.scheduleJob('*/5 * 01 * * 4', function(){
    console.log('Executando tarefa 1!', new Date().getSeconds())
})

setTimeout(function(){
    tarefa1.cancel()
    console.log('Cancelando Tarefa 1!')
},20000)

const regra = new schedule.RecurrenceRule() //Regra de Recorência

regra.dayOfWeek = [new schedule.Range(1, 5)] //Dias da Semana segunda a sexta
regra.hour = 01 // Regra para Horas
regra.second = 30 // Segundos

const regra2 = schedule.scheduleJob(regra, function(){ 
    console.log('Executando Tarefa 2!', new Date().getSeconds())
})



