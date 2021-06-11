import React, { useState } from 'react'
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Formulario() {
    const [campos, setCampos] = useState({
        nome: '',
        email: '',
        mensagem: '',
    });

    function handleInputChange(event) {
        if (event.target.name === "anexo")
            campos[event.target.name] = event.target.files[0];
        else
            campos[event.target.name] = event.target.value;
        setCampos(campos);

    }

    function send() {
        const formData = new FormData();
        Object.keys(campos).forEach(key => formData.append(key, campos[key]));
        axios.post('http://localhost:3030/send',
            formData,
            {
                headers: {
                    "Content-Type": `multipart/form-data; boundary=${formData._boundary}`,
                }
            })
            .then(response => { })
    }

    const successMsg = () => toast.success("Obrigado! Irei retornar o mais breve ;)");

    const handleReset = () => {
        document.getElementById('nome').value = "";
        document.getElementById('email').value = "";
        document.getElementById('mensagem').value = "";
    };

    const handleFormSubmit = (event) => {
        event.preventDefault();
        send(campos);
        handleReset();
        successMsg();
    }

    return (
        <div className="pt-6">
            <ToastContainer />
            <form onSubmit={handleFormSubmit}>
                <input className="w-full p-2.5 md:text-base text-sm rounded-xl text-white bg-transparent border-b-2 border-indigo-600 focus:border-blue-600" type="text" name="nome" id="nome" onChange={handleInputChange} placeholder="Insira aqui o seu nome" required />

                <input className="w-full p-2.5 md:text-base text-sm rounded-xl text-white bg-transparent border-b-2 border-indigo-600 mt-6 focus:border-blue-600" type="email" onChange={handleInputChange} name="email" id="email" placeholder="Insira aqui o seu email" required />

                <textarea className="w-full p-2.5 md:text-base text-sm rounded-xl text-white bg-transparent border-b-2 border-indigo-600 mt-6 h-24 sm:h-32 md:h-52 focus:border-blue-600" type="text" onChange={handleInputChange} name="mensagem" id="mensagem" placeholder="Insira aqui a sua mensagem" required />

                <input className="w-full bg-indigo-600 md:text-base text-sm text-white uppercase py-3.5 rounded-xl font-semibold cursor-pointer mt-6 hover:bg-blue-600" type="submit" value="Enviar Mensagem" />
            </form>
        </div>
    )
}