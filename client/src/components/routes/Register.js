import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";

export default function Register() {
    const { handleSubmit, register, errors } = useForm();
    const onSubmit = (values) => console.log(values);

    return (
        <div className="main-content">
            <h3>Registration page</h3>
            <div className="form">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input
                        name="name"
                        class="form-control"
                        placeholder="Name"
                        type="text"
                        ref={register({
                            required: "Required",
                        })}
                    />

                    <input
                        name="gender"
                        class="form-control"
                        placeholder="Gender"
                        type="text"
                        ref={register({
                            required: "Required",
                        })}
                    />

                    <input
                        name="email"
                        class="form-control"
                        placeholder="Email"
                        type="text"
                        ref={register({
                            required: "Required",
                            pattern: {
                                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                message: "invalid email address",
                            },
                        })}
                    />
                    {errors.email && errors.email.message}
                    <input
                        name="phone number"
                        class="form-control"
                        placeholder="Phone number"
                        type="text"
                        ref={register({
                            required: "Required",
                        })}
                    />

                    <input
                        name="Birth Date"
                        class="form-control"
                        placeholder="Birth Date"
                        type="text"
                        ref={register({
                            required: "Required",
                        })}
                    />

                    <input
                        name="location"
                        class="form-control"
                        placeholder="Location"
                        type="text"
                        ref={register({
                            required: "Required",
                        })}
                    />

                    <input
                        name="bool"
                        class="form-control"
                        placeholder="NewBie? Yes or No"
                        type="text"
                        ref={register({
                            required: "Required",
                        })}
                    />

                    <input
                        name="amount"
                        class="form-control"
                        placeholder="Amount willing to risk!"
                        type="text"
                        ref={register({
                            required: "Required",
                        })}
                    />

                    <input
                        name="bool"
                        class="form-control"
                        placeholder="Are you aware of scams?  Yes or No"
                        type="text"
                        ref={register({
                            required: "Required",
                        })}
                    />

                    <input
                        name="bool"
                        class="form-control"
                        placeholder="Have you been scammed before? Yes or No"
                        type="text"
                        ref={register({
                            required: "Required",
                        })}
                    />

                    <input
                        class="form-control"
                        placeholder="Create password"
                        type="password"
                        ref={register({
                            required: "Required",
                        })}
                    />

                    <input
                        class="form-control"
                        placeholder="Repeat password"
                        type="password"
                        ref={register({
                            required: "Required",
                        })}
                    />

                    <div class="form-group">
                        <button type="submit" class="btn btn-primary btn-block">
                            Create Account
                        </button>
                    </div>
                    <p class="text-center">
                        Have an account? <a href="/login">Log In</a>
                    </p>
                </form>
                <Link to="/"> back home</Link>
            </div>
        </div>
    );
}
