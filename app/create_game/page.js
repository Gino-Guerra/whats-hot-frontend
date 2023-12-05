// pages/form.js

'use client'
import { useState } from 'react';

export default function CreateGame() {
  const [formData, setFormData] = useState({
    age: '',
    name: '',
    input3: '',
    input4: '',
    input5: '',
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Replace 'https://api.example.com/submit-form' with your API endpoint
      const response = await fetch('https://whats-hot-api.web.app', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        console.log('Form submitted successfully!');
      } else {
        console.error('Failed to submit form:', response.statusText);
      }
    } catch (error) {
      console.error('Error submitting form:', error.message);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <div>
      <h1>Form Page</h1>
      <form onSubmit={handleSubmit}>
        <label>
          age
          <input type="text" name="age" value={formData.age} onChange={handleChange} />
        </label>
        <br />
        <label>
          name
          <input type="text" name="name" value={formData.name} onChange={handleChange} />
        </label>
        <br />
        <label>
          Input 3:
          <input type="text" name="input3" value={formData.input3} onChange={handleChange} />
        </label>
        <br />
        <label>
          Input 4:
          <input type="text" name="input4" value={formData.input4} onChange={handleChange} />
        </label>
        <br />
        <label>
          Input 5:
          <input type="text" name="input5" value={formData.input5} onChange={handleChange} />
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

