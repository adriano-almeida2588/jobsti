import React, { useState } from 'react'
import axios from 'axios';
import Loader from 'react-loader-spinner';

const JobPageForm = () => {

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [salary, setSalary] = useState(0.00);
    const [office, setOffice] = useState('');
    const [local, setLocal] = useState('');
    const [contract_type, setContractType] = useState('');
    const [schedule, setSchedule] = useState('');
    const [remote, setRemote] = useState(false);
    const [erros, setErros] = useState([]);
    const [isErro, setIsErro] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const handleOnSubmitForm = async(event)=> {
        event.preventDefault();
        const job = {
            title: title,
            description: description,
            salary: salary,
            office: office,
            local: local,
            contract_type: contract_type,
            schedule: schedule,
            remote: remote,
        }
        try {
            setIsLoading(true);
            const response = await axios.post('http://localhost:5000/api/v1/jobs', {job}, {headers: {Authorization: "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE1NTUzNTIyMDksInN1YiI6MX0.pg44hoU4dumrgGGOLM8hgLg3J5yRotcwxtVoTLKqFgo"}})
            if(response.data.erros.length > 0){
                setIsErro(true);
                setErros(response.data.erros);
            }
            setIsLoading(false);
        } catch (exception) {
            throw exception;
        }
    }

    return (
        <div class="container">
            <div class="row">
                { isErro ?
                    <div>{erros.map(erro => <ul class="red-text text-darken-4"><li>{erro}</li></ul>)}</div>: ''}
                <form className="" onSubmit={handleOnSubmitForm}>
                    <div class="col s12 m12">
                        <div class="card-panel">
                            <div class="card-content">
                            {/* <span class="card-title">Nova Vaga</span> */}
                            <div className="row">
                                    <div>
                                    <div class="input-field col s6">
                                        <input id="title" type="text" name="title" onChange={event => setTitle(event.target.value)} class="validate"/>
                                        <label for="title">Título</label>
                                    </div>
                                    <div class="input-field col s6">
                                        <textarea id="description" type="text" name="description" onChange={event => setDescription(event.target.value)} class="materialize-textarea validate"></textarea>
                                        <label for="description">Descrição</label>
                                    </div>
                                    <div class="input-field col s6">
                                        <input id="salary" type="number" name="salary" onChange={event => setSalary(event.target.value)} class="validate"/>
                                        <label for="salary">Salário</label>
                                    </div>
                                    <div class="input-field col s6">
                                        <input id="office" type="text" name="office" onChange={event => setOffice(event.target.value)} class="validate"/>
                                        <label for="office">Cargo</label>
                                    </div>
                                    <div class="input-field col s6">
                                        <input id="local" type="text" name="local" onChange={event => setLocal(event.target.value)} class="validate"/>
                                        <label for="local">Local</label>
                                    </div>
                                    <div class="input-field col s6">
                                        <input id="tipo_contrato" name="contract_type" onChange={event => setContractType(event.target.value)} type="text" class="validate"/>
                                        <label for="tipo_contrato">Contrato</label>
                                    </div>
                                    <div class="input-field col s6">
                                        <input id="schedule" type="text" name="schedule" onChange={event => setSchedule(event.target.value)} class="validate"/>
                                        <label for="schedule">Horário</label>
                                    </div>
                                    <div class="input-field col s6">
                                        <p>
                                            <input name="remote" onChange={event => setRemote(event.target.value)} type="checkbox"/>
                                            <span >Remoto</span>
                                        </p>
                                    </div>
                                    </div>
                            </div>
                        </div>
                        <div class="card-action">
                            <button class="btn waves-effect" type="submit" name="action">postar vaga
                            <i class="material-icons right">send</i>
                        </button>
                        <span class="badge">{isLoading ? <Loader type="Oval" height="50" color="#00BFFF" width="100" /> : ''} </span>
                        </div>
                    </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default JobPageForm