//? Required
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from "yup";
import Image from "next/image";
import FormData from "../../../data/ContactForm";

//? Components
import FormLabel from "./LabelForm";

//? Formik Hanlder
const INITIAL_VALUES = {
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
};

const VALIDATE = yup.object().shape({
    name: yup.string().min(1, "Error: Name is Incorect").required("Error: Name is Required"),
    email: yup.string().min(1, "Error: Email is Incorect").required("Error: Email is Required"),
    phone: yup.string().min(1, "Error: Phone Number is Incorect").required("Error: Phone Number is Required"),
    subject: yup.string().min(1, "Error: Subject is Incorect").required("Error: Subject is Required"),
    message: yup.string().min(1, "Error: Message is Incorect").required("Error: Message is Required"),
});

const SUBMIT = (values) => {
    console.log(values);
};

export default function ContactForm() {
    return (
        <section className="w-full mt-28">
            <div className="mx-auto grid max-w-6xl grid-cols-[1.73fr_1fr] items-center justify-items-center gap-x-12">
                <div className="flexYStart w-full text-black-800">
                    <h1 className="font-serif text-3xl font-bold">Any Question? Feel Free to Contact</h1>
                    <p className="mt-1 mr-1 font-sans text-sm font-normal">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                        labore et dolore magna aliqua Egestas purus viverra.
                    </p>
                    <Formik
                        initialValues={INITIAL_VALUES}
                        validationSchema={VALIDATE}
                        onSubmit={SUBMIT}
                        validateOnMount
                    >
                        {(fromik) => {
                            return (
                                <Form className="mt-5 grid grid-cols-2 gap-x-[.625rem] gap-y-3">
                                    <div>
                                        <Field
                                            name="name"
                                            id="name"
                                            placeholder="Your name"
                                            type="text"
                                            className="inputStyle"
                                        />
                                        <p className="mt-1 pl-2 font-serif text-sm font-medium text-red-500">
                                            <ErrorMessage name="name" />
                                        </p>
                                    </div>
                                    <div>
                                        <Field
                                            name="email"
                                            id="email"
                                            placeholder="Email Address"
                                            type="email"
                                            className="inputStyle"
                                        />
                                        <p className="mt-1 pl-2 font-serif text-sm font-medium text-red-500">
                                            <ErrorMessage name="email" />
                                        </p>
                                    </div>
                                    <div>
                                        <Field
                                            name="phone"
                                            id="phone"
                                            placeholder="Phone Number"
                                            type="number"
                                            className="inputStyle"
                                        />
                                        <p className="mt-1 pl-2 font-serif text-sm font-medium text-red-500">
                                            <ErrorMessage name="phone" />
                                        </p>
                                    </div>
                                    <div>
                                        <Field
                                            name="subject"
                                            id="subject"
                                            placeholder="Subject"
                                            type="text"
                                            className="inputStyle"
                                        />
                                        <p className="mt-1 pl-2 font-serif text-sm font-medium text-red-500">
                                            <ErrorMessage name="subject" />
                                        </p>
                                    </div>
                                    <div className="col-span-2">
                                        <Field
                                            as="textarea"
                                            name="message"
                                            id="message"
                                            placeholder="Write your message ..."
                                            type="text"
                                            className="inputStyle h-44 resize-none"
                                        />
                                        <p className="mt-1 pl-2 font-serif text-sm font-medium text-red-500">
                                            <ErrorMessage name="message" />
                                        </p>
                                    </div>
                                    <button
                                        type="submit"
                                        disabled={!fromik.isValid || fromik.isSubmitting}
                                        className="btn-secondary mt-1 font-serif text-base font-semibold"
                                    >
                                        Send a Message
                                    </button>
                                </Form>
                            );
                        }}
                    </Formik>
                </div>
                <div className="h-full w-full overflow-hidden rounded-[1.25rem] bg-white pb-6 shadow-[0px_4px_20px_rgba(120,123,154,0.15)]">
                    <Image
                        alt="ContactForm"
                        src="/images/ContactForm.png"
                        width="380"
                        height="205"
                        layout="responsive"
                    />
                    <p className="mt-[1.125rem] px-7 font-sans text-sm font-normal text-black-800">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor in
                    </p>
                    {FormData.map((i, key) => (
                        <FormLabel title={i.title} key={key} subtitle={i.subtitle} icon={i.icon} />
                    ))}
                </div>
            </div>
        </section>
    );
}

