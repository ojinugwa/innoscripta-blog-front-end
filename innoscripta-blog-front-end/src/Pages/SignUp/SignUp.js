import React, { useState } from 'react';
import axios from 'axios';
import InputField from '../../Components/Form/InputField';
import FormLayout from '../../Components/Form/FormLayout';

function SingUp({ }) {

    const [inputs, setInputs] = useState({});

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({ ...values, [name]: value }))
    }

    async function handleSubmit(event) {
        event.preventDefault();

        axios.get('/sanctum/csrf-cookie').then(response => {
            console.log(response);

            axios.post('/register', inputs)
                .then(function (res) {
                    alert(res);
                })
                .catch(function (error) {
                    console.log(error);
                });
        });

        //JSON.stringify(inputs)
    }

    return (
        <FormLayout heading="Sign up" submitLabel="Sign up" onSubmit={handleSubmit}>
            <InputField label="Name" placeholder="First & Last name" type="text" name="name" value={inputs.name || ""}
                onChange={handleChange}
            />
            <InputField label="Email" placeholder="email@domain.com" type="email" name="email" value={inputs.email || ""}
                onChange={handleChange}
            />
            <InputField label="Password" placeholder="Password" type="password" name="password" help="Minimum of 8 characters" value={inputs.password || ""}
                onChange={handleChange}
            />
        </FormLayout>
    );
}

export default SingUp;