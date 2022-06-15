const inputName = document.getElementById('name')
const inputApellido = document.getElementById('apellido')
const inputDireccion = document.getElementById('direccion')
const inputCorreo = document.getElementById('correo')
const inputTelefono = document.getElementById('telefono')
const inputWeb = document.getElementById('web')
const inputResumen = document.getElementById('resumen')
const inputIdioma = document.getElementById('idiomas')
const inputEmpleos = document.getElementById('empleos')
const inputEducacion = document.getElementById('educacion')
const inputSkill = document.getElementById('skill')
const inputCertificado = document.getElementById('cert')




function crearCV(){

    if(validar()){
    

    const valueName = inputName.value    
    const valueApellido = inputApellido.value
    const valueDireccion = inputDireccion.value
    const valueCorreo = inputCorreo.value
    const valueTelefono = inputTelefono.value
    const valueWeb = inputWeb.value
    const valueResumen = inputResumen.value 
    let   valueIdioma = inputIdioma.value
    const valueEmpleos = inputEmpleos.value
    const valueEducacion = inputEducacion.value
    const valueSkill = inputSkill.value    
    const valueCertificado = inputCertificado.value

    const mainContainer = document.getElementById('curriculum-generado');

    const divPrimerRow = document.createElement('div')
    divPrimerRow.setAttribute('class','row')

    const divCol4  = document.createElement('div')
    divCol4.setAttribute('class','col-md-4 text-center py-5 background')

    const pNombre = document.createElement('p')
    pNombre.setAttribute('class', 'text-uppercase fs-4 fw-bold pb-5 text-color')
    pNombre.setAttribute('style','font-weight: 900;')
    pNombre.innerText = `${valueName} ${valueApellido}`

    const imgPrincipal = document.createElement('img')
    imgPrincipal.setAttribute('class', 'img-fluid myimg mb-5')
    imgPrincipal.setAttribute('src', './assets/img/default-user-image.png')

    const divContacto = document.createElement('div')
    divContacto.setAttribute('class', 'container')

    const h2Contacto = document.createElement('h2')
    h2Contacto.setAttribute('class', 'text-start text-color')
    h2Contacto.innerText = 'Contacto'

    const hrContacto = document.createElement('hr')

    const h4Direccion = document.createElement('h4')
    h4Direccion.setAttribute('class', 'text-start')
    h4Direccion.innerText = 'Direccion:'

    const pDireccion = document.createElement('p')
    pDireccion.setAttribute('class', 'text-start mb-5')
    pDireccion.innerText = `${valueDireccion}`

    const h4Correo = document.createElement('h4')
    h4Correo.setAttribute('class','text-start')
    h4Correo.innerText = 'Correo Electronico:'

    const pCorreo = document.createElement('p')
    pCorreo.setAttribute('class', 'text-start mb-5')
    pCorreo.innerText = `${valueCorreo}`

    const h4Telefono = document.createElement('h4')
    h4Telefono.setAttribute('class', 'text-start')
    h4Telefono.innerText = 'Telefono:'

    const pTelefono = document.createElement('p')
    pTelefono.setAttribute('class', 'text-start mb-5')
    pTelefono.innerText = `${valueTelefono}`

    const h4Web = document.createElement('h4')
    h4Web.setAttribute('class', 'text-start')
    h4Web.innerText = 'Pagina Web:'

    const pWeb = document.createElement('p')
    pWeb.setAttribute('class', 'text-start mb-5')
    pWeb.innerText = `${valueWeb}`

    const divIdiomas = document.createElement('div')
    divIdiomas.setAttribute('class', 'container mb-5')
    
    const h2Idiomas = document.createElement('h2')
    h2Idiomas.setAttribute('class', 'text-start text-color')
    h2Idiomas.innerText = 'Idiomas'

    const hrIdiomas = document.createElement('hr')


    const olIdioma = document.createElement('ol')


    let splitIdioma = valueIdioma.split(',')
    let lista2 = [splitIdioma.length]
    let liIdiomas = document.createElement('ul')
    liIdiomas.setAttribute('class', 'text-start px-0')


    for (let i = 0; i < splitIdioma.length; i++) {
        lista2[i] = document.createElement("li");
        lista2[i].innerText = splitIdioma[i];
        liIdiomas.appendChild(lista2[i]);
     }


    const divCol8 = document.createElement('div')
    divCol8.setAttribute('class', 'col-md-8 py-xl-5 background')

    const divResumen = document.createElement('div')
    divResumen.setAttribute('class', 'container mb-5 mt-5')

    const h2Resumen = document.createElement('h2')
    h2Resumen.setAttribute('class','text-start text-color')
    h2Resumen.innerHTML = 'Resumen'

    const hrReseumen = document.createElement('hr')

    const pResumen = document.createElement('p')
    pResumen.innerText = `${valueResumen}`

    const divEmpleos = document.createElement('div')
    divEmpleos.setAttribute('class', 'container mb-5')

    const h2Empleos = document.createElement('h2')
    h2Empleos.setAttribute('class','text-start text-color')
    h2Empleos.innerText = 'Empleos'

    const hrEmpleos = document.createElement('hr')

   

    const olEmpleos = document.createElement('ol')


    let splitEmpleos = valueEmpleos.split(',')
    let listaEmpleos = [splitIdioma.length]
    let liEmpleos = document.createElement('ul')
    liEmpleos.setAttribute('class', 'text-start px-0')


    for (let i = 0; i < splitEmpleos.length; i++) {
        listaEmpleos[i] = document.createElement("li");
        listaEmpleos[i].innerText = splitEmpleos[i];
        liEmpleos.appendChild(listaEmpleos[i]);
     }
    

    const divEducacion = document.createElement('div')
    divEducacion.setAttribute('class', 'container mb-5')

    const h2Educacion = document.createElement('h2')
    h2Educacion.setAttribute('class','text-start text-color')
    h2Educacion.innerText = 'Educacion'

    const hrEducacion = document.createElement('hr')


    const olEducacion= document.createElement('ol')


    let splitEducacion = valueEducacion.split(',')
    let listaEducacion = [splitEducacion.length]
    let liEducacion = document.createElement('ul')
    liEducacion.setAttribute('class', 'text-start px-0')


    for (let i = 0; i < splitEducacion.length; i++) {

        listaEducacion[i] = document.createElement("li");
        listaEducacion[i].innerText = splitEducacion[i];
        liEducacion.appendChild(listaEducacion[i]);
     }



    const divSkill = document.createElement('div')
    divSkill.setAttribute('class', 'container mb-5')

    const h2Skill = document.createElement('h2')
    h2Skill.setAttribute('class','text-start text-color')
    h2Skill.innerText = 'Skill'

    const hrSkill = document.createElement('hr')

    

    const olSkill = document.createElement('ol')

    let splitSkill = valueSkill.split(',')
    let listaSkill = [splitSkill.length]
    let liSkill= document.createElement('ul')
    liSkill.setAttribute('class', 'text-start px-0')


    for (let i = 0; i < splitSkill.length; i++) {

        listaSkill [i] = document.createElement("li");
        listaSkill [i].innerText = splitSkill[i];
        liSkill.appendChild(listaSkill[i]);
     }



    const divCertificacion = document.createElement('div')
    divCertificacion.setAttribute('class', 'container mb-5')

    const h2Certificacion = document.createElement('h2')
    h2Certificacion.setAttribute('class','text-start text-color')
    h2Certificacion.innerText = 'Certificacion'

    const hrCertificacion = document.createElement('hr')

    

    const olCertificado = document.createElement('ol')

    let splitCertificado = valueCertificado.split(',')
    let listaCertificado = [splitCertificado.length]
    let liCertificado = document.createElement('ul')
    liCertificado.setAttribute('class', 'text-start px-0')


    for (let i = 0; i < splitCertificado.length; i++) {

        listaCertificado [i] = document.createElement("li");
        listaCertificado [i].innerText = splitCertificado[i];
        liCertificado.appendChild(listaCertificado[i]);
     }


    divPrimerRow.appendChild(divCol4)

    divCol4.appendChild(pNombre)
    divCol4.appendChild(imgPrincipal)
    divCol4.appendChild(divContacto)
    
    divContacto.appendChild(h2Contacto)
    divContacto.appendChild(hrContacto)
    divContacto.appendChild(h4Direccion)
    divContacto.appendChild(pDireccion)
    divContacto.appendChild(h4Correo)
    divContacto.appendChild(pCorreo)
    divContacto.appendChild(h4Telefono)
    divContacto.appendChild(pTelefono)
    divContacto.appendChild(h4Web)
    divContacto.appendChild(pWeb)

    divCol4.appendChild(divIdiomas)

    divIdiomas.appendChild(h2Idiomas)
    divIdiomas.appendChild(hrIdiomas)
    divIdiomas.appendChild(olIdioma)
    olIdioma.appendChild(liIdiomas)
    
    


    divPrimerRow.appendChild(divCol8)

    divCol8.appendChild(divResumen)

    divResumen.appendChild(h2Resumen)
    divResumen.appendChild(hrReseumen)
    divResumen.appendChild(pResumen)


    divCol8.appendChild(divEmpleos)

    divEmpleos.appendChild(h2Empleos)
    divEmpleos.appendChild(hrEmpleos)
    divEmpleos.appendChild(olEmpleos)
    olEmpleos.appendChild(liEmpleos)


    divCol8.appendChild(divEducacion)

    divEducacion.appendChild(h2Educacion)
    divEducacion.appendChild(hrEducacion)
    divEducacion.appendChild(olEducacion)
    olEducacion.appendChild(liEducacion)

    divCol8.appendChild(divSkill)

    divSkill.appendChild(h2Skill)
    divSkill.appendChild(hrSkill)
    divSkill.appendChild(olSkill)
    olSkill.appendChild(liSkill)

    divCol8.appendChild(divCertificacion)

    divCertificacion.appendChild(h2Certificacion)
    divCertificacion.appendChild(hrCertificacion)
    divCertificacion.appendChild(olCertificado)
    olCertificado.appendChild(liCertificado)

    mainContainer.appendChild(divPrimerRow)

    limpiar()
    }else{
        
        alert('Te faltan datos por completar')
    }
}







function limpiar(){

    inputName.value = '';
    inputName.classList.remove('input-err')
    inputName.classList.remove('input-sucess')
    inputName.focus()

    inputApellido.value = '';
    inputApellido.classList.remove('input-err')
    inputApellido.classList.remove('input-sucess')

    inputDireccion.value = '';
    inputDireccion.classList.remove('input-err')
    inputDireccion.classList.remove('input-sucess')

    inputCorreo.value = '';
    inputCorreo.classList.remove('input-err')
    inputCorreo.classList.remove('input-sucess')

    inputTelefono.value ='';
    inputTelefono.classList.remove('input-err')
    inputTelefono.classList.remove('input-sucess')

    inputWeb.value = '';
    inputWeb.classList.remove('input-err')
    inputWeb.classList.remove('input-sucess')

    inputResumen.value = '';
    inputResumen.classList.remove('input-err')
    inputResumen.classList.remove('input-sucess')

    inputIdioma.value = '';
    inputIdioma.classList.remove('input-err')
    inputIdioma.classList.remove('input-sucess')

    inputEmpleos.value = '';
    inputEmpleos.classList.remove('input-err')
    inputEmpleos.classList.remove('input-sucess')

    inputEducacion.value = '';
    inputEducacion.classList.remove('input-err')
    inputEducacion.classList.remove('input-sucess')

    inputSkill.value = '';
    inputSkill.classList.remove('input-err')
    inputSkill.classList.remove('input-sucess')

    inputCertificado.value = '';
    inputCertificado.classList.remove('input-err')
    inputCertificado.classList.remove('input-sucess')

}



function validar(){

    let isValid = true;

    const valueName = inputName.value    
    const valueApellido = inputApellido.value
    const valueDireccion = inputDireccion.value
    const valueCorreo = inputCorreo.value
    const valueTelefono = inputTelefono.value
    const valueWeb = inputWeb.value
    const valueResumen = inputResumen.value 
    const valueIdioma = inputIdioma.value
    const valueEmpleos = inputEmpleos.value
    const valueEducacion = inputEducacion.value
    const valueSkill = inputSkill.value    
    const valueCertificado = inputCertificado.value



    if(valueName == '' || valueName == null || inputName == undefined){
        isValid = false;
        inputName.classList.add('input-err')
        inputName.classList.remove('input-sucess')
    }else{
        inputName.classList.add('input-sucess')
        inputName.classList.remove('input-err')
    }
    if(valueApellido == '' || valueApellido == null || valueApellido == undefined){
        isValid = false;
        inputApellido.classList.add('input-err')
        inputApellido.classList.remove('input-sucess')
    }else{
        inputApellido.classList.add('input-sucess')
        inputApellido.classList.remove('input-err')

    }
    if(valueDireccion == '' || valueDireccion == null || valueDireccion == undefined){
        isValid = false;
        inputDireccion.classList.add('input-err')
        inputDireccion.classList.remove('input-sucess')
    }else{
        inputDireccion.classList.add('input-sucess')
        inputDireccion.classList.remove('input-err')
        
    }
    if(valueCorreo == '' || valueCorreo == null || valueCorreo == undefined){
        isValid = false;
        inputCorreo.classList.add('input-err')
        inputCorreo.classList.remove('input-sucess')
    }else{
        inputCorreo.classList.add('input-sucess')
        inputCorreo.classList.remove('input-err')
    }
    if(valueTelefono == '' || valueTelefono == null || valueTelefono == undefined){
        isValid = false;
        inputTelefono.classList.add('input-err')
        inputTelefono.classList.remove('input-sucess')
    }else{
        inputTelefono.classList.add('input-sucess')
        inputTelefono.classList.remove('input-err')
    }
    if(valueWeb == '' || valueWeb == null || valueWeb == undefined){
        isValid = false;
        inputWeb.classList.add('input-err')
        inputWeb.classList.remove('input-sucess')
    }else{
        inputWeb.classList.add('input-sucess')
        inputWeb.classList.remove('input-err')
    }
    if(valueResumen == '' || valueResumen == null || valueResumen == undefined){
        isValid = false;
        inputResumen.classList.add('input-err')
        inputResumen.classList.remove('input-sucess')
    }else{
        inputResumen.classList.add('input-sucess')
        inputResumen.classList.remove('input-err')
    }
    if(valueIdioma == '' || valueIdioma == null || valueIdioma == undefined){
        isValid = false;
        inputIdioma.classList.add('input-err')
        inputIdioma.classList.remove('input-sucess')
    }else{
        inputIdioma.classList.add('input-sucess')
        inputIdioma.classList.remove('input-err')
    }
    if(valueEmpleos == '' || valueEmpleos == null || valueEmpleos == undefined){
        isValid = false;
        inputEmpleos.classList.add('input-err')
        inputEmpleos.classList.remove('input-sucess')
    }else{
        inputEmpleos.classList.add('input-sucess')
        inputEmpleos.classList.remove('input-err')
    }
    if(valueEducacion == '' || valueEducacion == null || valueEducacion == undefined){
        isValid = false;
        inputEducacion.classList.add('input-err')
        inputEducacion.classList.remove('input-sucess')
    }else{
        inputEducacion.classList.add('input-sucess')
        inputEducacion.classList.remove('input-err')
    }
    if(valueSkill == '' || valueSkill == null || valueSkill == undefined){
        isValid = false;
        inputSkill.classList.add('input-err')
        inputSkill.classList.remove('input-sucess')
    }else{
        inputSkill.classList.add('input-sucess')
        inputSkill.classList.remove('input-err')
    }
    if(valueCertificado == '' || valueCertificado == null || valueCertificado == undefined){
        isValid = false;
        inputCertificado.classList.add('input-err')
        inputCertificado.classList.remove('input-sucess')
    }else{
        inputCertificado.classList.add('input-sucess')
        inputCertificado.classList.remove('input-err') 
    }
   

    return isValid;
    
}