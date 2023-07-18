const url = "http://localhost:4000/premio"

export const mostrar = async ()=>{
    try {
        const premios = await fetch(`${url}/all`);
        const response = premios.json();
        return response
    } catch (error) {
        console.log(error);
    }
}


export const insertar = async(dato)=>{
    try {
        await fetch(`${url}/add`,{
            method:'POST',
            body:JSON.stringify(dato),
            headers:{'Content-Type':'application/json'}
        });
        window.location.href="premios.html";
    } catch (error) {
        console.log(error);
    }
}

export const borrar = async(id)=>{
    try {
        await fetch(`${url}/del/${id}`,{
            method:'DELETE'
        });
        window.location.href="premios.html";
    } catch (error) {
        console.log(error);
    }
}

export const selectOne = async(id)=>{
    try {
        const ciclista = await fetch(`${url}/one/${id}`)
        const response = ciclista.json();
        return response;
    } catch (error) {
        console.log(error);
    }
}

export const actualizar = async(dato,id)=>{
    try {
        await fetch(`${url}/upd/${id}`,{
            method:'PATCH',
            body:JSON.stringify(dato),
            headers:{'Content-Type':'application/json'}
        });
        window.location.href="premios.html";
    } catch (error) {
        console.log(error);
    }
}