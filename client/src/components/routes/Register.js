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
                    <label>Name:
                    <input
                        name="First name"
                        class="form-control name"
                        placeholder="First name"
                        type="text"
                        ref={register({
                            required: "Required",
                        })}
                    />

                    <input
                        name="name"
                        class="form-control Sname"
                        placeholder="Second Name"
                        type="text"
                        ref={register({
                            required: "Required",
                        })}
                    />
                    </label>
                   
                 <fieldset>
                     <legend>Personal Info:</legend>
                     <input
                        name="gender"
                        class="form-control gender"
                        placeholder="Gender"
                        type="text"
                        ref={register({
                            required: "Required",
                        })}
                    />

                    <input
                        name="Birth Date"
                        class="form-control date"
                        placeholder="Birth Date"
                        type="text"
                        ref={register({
                            required: "Required",
                        })}
                    />

                    <input
                        name="phone number"
                        class="form-control phone"
                        placeholder="Phone number"
                        type="text"
                        ref={register({
                            required: "Required",
                        })}
                    />

                    <input
                        name="location"
                        class="form-control place"
                        placeholder="Location"
                        type="text"
                        ref={register({
                            required: "Required",
                        })}
                    />

                    <input
                        name="email"
                        class="form-control email"
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
                        class="form-control pass"
                        placeholder="Create password"
                        type="password"
                        ref={register({
                            required: "Required",
                        })}
                    />

                    <input
                        class="form-control Rpass"
                        placeholder="Repeat password"
                        type="password"
                        ref={register({
                            required: "Required",
                        })}
                    />
                 </fieldset>
                 <fieldset>
                     <legend className="leg">Questions:</legend>

                    <input
                        name="bool"
                        class="form-control inp"
                        placeholder="NewBie? Yes or No"
                        type="text"
                        ref={register({
                            required: "Required",
                        })}
                    />

                    <input
                        name="amount"
                        class="form-control amount"
                        placeholder="Amount willing to risk!"
                        type="text"
                        ref={register({
                            required: "Required",
                        })}
                    />

                    <input
                        name="bool"
                        class="form-control bul"
                        placeholder="Are you aware of scams?  Yes or No"
                        type="text"
                        ref={register({
                            required: "Required",
                        })}
                    />

                    <input
                        name="bool"
                        class="form-control bull"
                        placeholder="Have you been scammed before? Yes or No"
                        type="text"
                        ref={register({
                            required: "Required",
                        })}
                    />
                    </fieldset>
                    <div class="form-control">
                        <button type="submit" class="btn btn-primary btn-block">
                            Create Account
                        </button>
                    </div>
                    <p class="text-center">
                        Have an account? <a href="/login">Log In</a>
                    </p>
                </form>
                <Link className="new" to="/"> back home</Link>
            </div>
        </div>
    );
}
