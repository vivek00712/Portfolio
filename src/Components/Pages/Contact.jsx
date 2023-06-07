import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import Toast from "../Common/Toast";

function Contact(props) {
  const formRef = useRef();
  const [emailSend, setEmailSend] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    subject: "",
    message: "",
    name: "",
  });
  const [error, setError] = useState({
    email: "",
    subject: "",
    message: "",
    name: "",
  });

  const onValueChange = (event) => {
    const { name, value } = event.target;
    //console.log(name, value);
    setFormData({
      ...formData,
      [name.toString()]: value,
    });
  };
  //console.log(formData);

  const validate = (fieldValues = formData) => {
    let temp = { ...error };
    //console.log(fieldValues);
    //console.log(temp);
    if ("name" in fieldValues) {
      temp.name = fieldValues.name ? "" : "Name is required";
    }
    if ("email" in fieldValues) {
      if (!fieldValues.email) {
        temp.email = "Email is required";
      } else if (fieldValues.email && !/$^|.+@.+..+/.test(fieldValues.email)) {
        temp.email = "Email is InValid";
      } else {
        temp.email = "";
      }
    }
    if ("subject" in fieldValues) {
      temp.subject = fieldValues.subject ? "" : "Subject is required";
    }
    if ("message" in fieldValues) {
      temp.message = fieldValues.message ? "" : "Message is required";
    }
    setError({
      ...temp,
    });

    if (fieldValues === formData) {
      return Object.values(temp).every((x) => x === "");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      console.log(formRef.current);
      emailjs
        .sendForm(
          "service_v03ottq",
          "template_y86p4md",
          formRef.current,
          "MU2buPkA1BfBZlGG9"
        )
        .then(
          (result) => {
            //console.log(result.text);
            setEmailSend(true);
          },
          (error) => {
            console.log(error.text);
          }
        );
      e.target.reset();
    }
  };

  const onToastClose = () => {
    setEmailSend(false);
  };

  return (
    <div>
      {emailSend ? <Toast onToastClose={onToastClose} /> : <></>}
      <section className="dark:bg-gray-900">
        <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white">
            Contact Me
          </h2>

          <p className="mb-8 lg:mb-16 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">
            Send me an email i am happy to help or connect like minded people
            and open to learn.
          </p>

          <form
            ref={formRef}
            onSubmit={handleSubmit}
            action="#"
            className="space-y-8"
          >
            <div>
              <label
                htmlFor="name"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Your Name
              </label>

              <input
                type="name"
                name="name"
                id="name"
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                placeholder="Your name"
                required=""
                onChange={onValueChange}
              />
              {error.name ? (
                <div className="text-xs text-red-700 p-1">{error.name}</div>
              ) : (
                ""
              )}
            </div>

            <div>
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Your email
              </label>

              <input
                type="email"
                name="email"
                id="email"
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                placeholder="yourname@gmail.com"
                required=""
                onChange={onValueChange}
              />
              {error.email ? (
                <div className="text-xs text-red-700 p-1">{error.email}</div>
              ) : (
                ""
              )}
            </div>

            <div>
              <label
                htmlFor="subject"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Subject
              </label>

              <input
                type="text"
                id="subject"
                name="subject"
                className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                placeholder="Let me know how i can help you"
                required=""
                onChange={onValueChange}
              />
              {error.subject ? (
                <div className="text-xs text-red-700 p-1">{error.subject}</div>
              ) : (
                ""
              )}
            </div>

            <div className="sm:col-span-2">
              <label
                htmlFor="message"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
              >
                Your message
              </label>

              <textarea
                id="message"
                name="message"
                rows={6}
                className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                placeholder="Leave a comment..."
                defaultValue={""}
                onChange={onValueChange}
              />
              {error.message ? (
                <div className="text-xs text-red-700 p-1">{error.message}</div>
              ) : (
                ""
              )}
            </div>

            <div className="flex justify-center items-center">
              <button
                type="submit"
                className="focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900 py-2 px-4"
              >
                Send
              </button>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
}

export default Contact;
