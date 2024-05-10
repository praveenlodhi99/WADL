import React, { useState } from 'react';
import './Form.css'; // Import your CSS file

function ComplaintForm() {
    const initialFormData = {
        name: '',
        password: '',
        confirmPassword: '',
        email: '',
        phoneNumber: '',
        department: '',
        role: '',
        qualification: '',
        file: null,
        description: '',
        terms: false,
        dob: ''
    };

    const [formData, setFormData] = useState(initialFormData);

    const handleChange = (e) => {
        const { name, value, type, checked, files } = e.target;
        setFormData(prevData => ({
            ...prevData,
            [name]: type === 'checkbox' ? checked : (type === 'file' ? files[0] : value)
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Password validation
        if (!/(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/.test(formData.password) || formData.password.length < 8) {
            alert("Password must have at least 8 characters, including one capital letter, one small letter, and one digit");
            return;
        }

        // Confirm Password validation
        if (formData.confirmPassword !== formData.password) {
            alert("Passwords do not match");
            return;
        }

        // Email validation
        if (!/^[^\s@]+@gmail\.com$/.test(formData.email)) {
            alert("Email must end with '@gmail.com'");
            return;
        }

        // Phone number validation
        if (!/^\d{10}$/.test(formData.phoneNumber)) {
            alert("Phone number must have exactly 10 digits");
            return;
        }

        // Additional validations (you can add more as needed)

        // Generate prompt message with form data
        const promptMessage = `
            Name: ${formData.name}
            Password: ${formData.password}
            Confirm Password: ${formData.confirmPassword}
            Email: ${formData.email}
            Phone Number: ${formData.phoneNumber}
            Department: ${formData.department}
            Role: ${formData.role}
            Qualification: ${formData.qualification}
            Description: ${formData.description}
            Resume: ${formData.file ? formData.file.name : 'Not provided'}
            Terms: ${formData.terms ? 'Agreed' : 'Not agreed'}
            Date of Birth: ${formData.dob}
        `;

        // Show prompt with form data
        alert(promptMessage);

        // Clear the form after submission
        setFormData(initialFormData);
        alert("Form submitted successfully!");
    };

    return (
        <div className="form">
            <form onSubmit={handleSubmit}>
                <h1>Complaint Box</h1>
                <div className="formbox" id="box-1">
                    <input type="text" id="text_input" name="name" placeholder="Enter your Name" value={formData.name} onChange={handleChange} required />
                </div>

                <div className="formbox" id="box-2">
                    <input type="password" id="password_input" name="password" placeholder="Enter your Password" value={formData.password} onChange={handleChange} required />
                </div>

                <div className="formbox" id="box-12">
                    <input type="password" id="confirm_password_input" name="confirmPassword" placeholder="Confirm Password" value={formData.confirmPassword} onChange={handleChange} required />
                </div>

                <div className="formbox" id="box-3">
                    <input type="email" id="email_input" name="email" placeholder="E-Mail (@gmail.com)" value={formData.email} onChange={handleChange} required />
                </div>

                <div className="formbox" id="box-4">
                    <input type="number" id="number_input" name="phoneNumber" placeholder="Enter your Phone Number (+91)" value={formData.phoneNumber} onChange={handleChange} required />
                </div>

                <div className="gender_and_role">
                    <div className="formbox" id="box-5-gender">
                        <label htmlFor="select_department">Department : </label>
                        <select id="select_department" name="department" value={formData.department} onChange={handleChange}>
                            <option value="Finance">Finance</option>
                            <option value="IT">IT</option>
                            <option value="Operations">Operations</option>
                            <option value="Human Resource">Human Resource</option>
                            <option value="Sales">Sales</option>
                        </select>
                    </div>

                    <div className="formbox" id="box-5-role">
                        <label htmlFor="select_role">Role : </label>
                        <select id="select_role" name="role" value={formData.role} onChange={handleChange}>
                            <option value="Manager">Manager</option>
                            <option value="Employee">Employee</option>
                            <option value="Others">Others</option>
                        </select>
                    </div>
                </div>

                <div className="formbox" id="box-7">
                    <label>Qualification :</label>
                    <input type="radio" id="radio_option1" name="qualification" value="10th Pass" onChange={handleChange} />
                    <label htmlFor="radio_option1">10th Pass</label>
                    <input type="radio" id="radio_option2" name="qualification" value="12th Pass" onChange={handleChange} />
                    <label htmlFor="radio_option2">12th Pass</label>
                    <input type="radio" id="radio_option3" name="qualification" value="Graduation" onChange={handleChange} />
                    <label htmlFor="radio_option3">Graduation</label>
                </div>

                <div className="formbox" id="box-9">
                    <label htmlFor="file_input">Resume : </label>
                    <input type="file" id="file_input" name="file" onChange={handleChange} />
                </div>

                <div className="formbox" id="box-8">
                    <textarea id="textarea_input" name="description" rows="5" cols="50" placeholder="Enter your Description..." value={formData.description} onChange={handleChange}></textarea>
                </div>

                <div className="formbox" id="box-6">
                    <input type="checkbox" id="terms" name="terms" checked={formData.terms} onChange={handleChange} required />
                    <label htmlFor="terms">Terms</label>
                    {/* Add more checkboxes if needed */}
                </div>

                <div className="formbox" id="box-10">
                    <label htmlFor="date_input">DoB :</label>
                    <input type="date" id="date_input" name="dob" value={formData.dob} onChange={handleChange} />
                </div>

                <div className="formbox" id="box-11">
                    <input className="button" id="reset" type="reset" value="Reset Details" onClick={() => { setFormData(initialFormData); alert("Form details reset successfully!"); }} />
                    <input className="button" id="submit" type="submit" value="Submit" />
                </div>
            </form>
        </div>
    );
}

export default ComplaintForm;
