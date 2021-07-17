let inputs = []

const addUserInput = (ev)=>{
    ev.preventDefault();
    let input = {
        id: Date.now(),
        Name: document.getElementById(txtNome).Value,
        Email: document.getElementById(txtNome).Value,  
    }
    inputs.push(input)
    document.forms[0].reset;

    console.warn('added', {inputs} ) ;
    let per = document.querySelector('#msg pre');
    pre.textContent = '\m' + JSON.stringify(inputs, '\t', 2)

}




document.addEventListener('DOMcontentLoaded', () =>(
document.getElementById('btnEnviar').addEventListener('click',addUserInput)
));