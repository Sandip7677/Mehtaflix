"use client";

import styles from "@/app/contact/contact.module.css";
import { Mulish } from "next/font/google";
import { useState } from "react";
import { db } from "../../../fb";
import { collection, addDoc } from "firebase/firestore";

const mulish = Mulish({
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

const ContactForm = () => {
  const [user, setUser] = useState({
    username: "",
    email: "",
    phone: "",
    message: "",
  });
  const [status, setStatus] = useState(null);

  function handleChange(e) {
    const name = e.target.name;
    const value = e.target.value;

    setUser((prevUser) => ({ ...prevUser, [name]: value }));
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { username, email, phone, message } = user;

    if (username && email && phone && message) {
      try {
        const docRef = await addDoc(collection(db, "feed"), {
          name: user.username,
          mail: user.email,
          contact: user.phone,
          message: user.message,
        });
        console.log("Document written with ID: ", docRef.id);
      } catch (e) {
        console.error("Error adding document: ", e);
      }

      setUser({
        username: "",
        email: "",
        phone: "",
        message: "",
      });
      alert("Thank you for your feedback");
    } else {
      alert("Please fill all the data");
      return;
    }
  };

  return (
    <form className={styles.contact_form} method="POST">
      <div className={styles.input_field}>
        <label htmlFor="username" className={styles.label}>
          Enter your name
          <input
            type="text"
            name="username"
            id="username"
            placeholder="Enter your name"
            className={mulish.className}
            value={user.username}
            onChange={handleChange}
            required
          />
        </label>
      </div>

      <div className={styles.input_field}>
        <label htmlFor="email" className={styles.label}>
          Email
          <input
            type="text"
            name="email"
            id="email"
            placeholder="Enter your email"
            className={mulish.className}
            value={user.email}
            onChange={handleChange}
            required
            autoComplete="off"
          />
        </label>
      </div>

      <div className={styles.input_field}>
        <label htmlFor="phone" className={styles.label}>
          Phone Number
          <input
            type="number"
            name="phone"
            id="phone"
            placeholder="Enter your phone"
            className={mulish.className}
            value={user.phone}
            onChange={handleChange}
            required
            autoComplete="off"
          />
        </label>
      </div>

      <div className={styles.input_field}>
        <label htmlFor="message" className={styles.label}>
          Message
          <textarea
            name="message"
            id="message"
            rows={5}
            placeholder="Enter your Message"
            className={mulish.className}
            value={user.message}
            onChange={handleChange}
            required
            autoComplete="off"
          />
        </label>
      </div>

      <div>
        {status === "success" && (
          <p className={styles.success_msg}>Thank you for your message!</p>
        )}
        {status === "error" && (
          <p className={styles.error_msg}>
            There was an error submitting your message. Please try again.
          </p>
        )}

        <button
          type="submit"
          className={mulish.className}
          onClick={handleSubmit}
        >
          Send Message
        </button>
      </div>
    </form>
  );
};

export default ContactForm;
