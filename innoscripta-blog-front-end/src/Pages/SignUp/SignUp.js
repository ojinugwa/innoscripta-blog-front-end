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
        axios.post('/register', inputs)
            .then(function (res) {
                alert(res);
            })
            .catch(function (error) {
                alert("We experienced error signing you up. Try again.");
            });
    }

    return (
        <>
            <div className='row justify-content-center'>
                <FormLayout heading="Sign up" submitLabel="Sign up" onSubmit={handleSubmit} className='col-lg-6 col-10'>
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
            </div>
        </>
    );
}

export default SingUp;