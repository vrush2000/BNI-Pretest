import { useState } from "react";

const UserForm = () => {
    const [name, setName] = useState("");
    // const [email, setEmail] = useState("");

    const handleChange = (event) => {
        const { value } = event.target;
        setName(value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
    };
  

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Name</label>
                <input
                    type="text"
                    name="name"
                    value={name}
                    onChange={handleChange}
                />
            </div>
            {/* <div>
                <label>Email</label>
                <input
                    type="email"
                    name="email"
                    value={email}
                    onChange={handleChange}
                />
            </div> */}
            <button type="submit">Submit</button>
        </form>
    );
};

export default UserForm