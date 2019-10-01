import React, {useEffect, useState} from 'react';
import axios from 'axios';
import Loader from 'react-loader-spinner';

const TableContent = () => {
    const [jobs, setJobs] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(async () => {
        const listJobs = await axios.get('http://localhost:5000/api/v1/jobs', {headers: {Authorization: "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE1NTUzNTIyMDksInN1YiI6MX0.pg44hoU4dumrgGGOLM8hgLg3J5yRotcwxtVoTLKqFgo"}});
        setJobs(listJobs.data);
        setLoading(false);
    }, jobs)
    return(
        <div className="card-panel">
            <div className="spinner">
                {loading ? <Loader type="Puff" height="300" color="#00BFFF" width="300" /> : ''}
            </div>
            <table className="responsive-table highlight">
                <thead>
                <tr>
                    <th>Título</th>
                    <th>Data Publicação</th>
                    <th>Ação</th>
                </tr>
                </thead>

                <tbody>
                { jobs.map(job =>  
                    <tr>
                        <td>{job.title}</td>
                        <td>{job.created_at}</td>
                        <td><a href="/jobs/edit/">Editar</a></td>
                        <td><a href="/jobs/1">Remover</a></td>
                    </tr>
                ) }
                </tbody>
            </table>
        </div>
    )
}

export default TableContent