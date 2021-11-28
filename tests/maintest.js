const {By , Key , Builder} =  require("selenium-webdriver");
require("chromedriver");
let assert = require('assert');

async function Todo(){
    let driver = await new Builder().forBrowser("chrome").build().catch(err=>{
        console.log("qwe");
    });
     await driver.get("http://localhost:3000").then(async(qwe)=>{
        let Title = await driver.getTitle();
        console.log(Title);
    }).catch(error=>{
        console.log("Error en GET" , error)
    });

    await driver.close();
    return "sepudo";
}
 
describe('Casos de prueba' , function(){
    it('Entrar a Login e ingresar' , async function(){
        let FunctionResponse = await Todo();
        assert.equal((FunctionResponse) , 'sepudo');
    })
})