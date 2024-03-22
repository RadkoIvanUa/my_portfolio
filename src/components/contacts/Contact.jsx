import "./contact.css";
import { useFormik } from "formik";
import * as Yup from "yup";
import { toast } from "react-toastify";
import PropTypes from "prop-types";
import "react-toastify/dist/ReactToastify.css";
import emailjs from "@emailjs/browser";
import { useRef, useState } from "react";
import { TextField } from "@mui/material";
import { ThreeDots } from "react-loader-spinner";
import { motion } from "framer-motion";
import { BsFillTelephoneFill, BsMailbox2 } from "react-icons/bs";

export default function Contact({ selectedColor }) {
  const formStyle = {
    ".MuiFormLabel-root.Mui-focused": {
      color: `${selectedColor}`,
    },

    "& .MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline": {
      borderColor: `${selectedColor}`,
    },
    "& .MuiOutlinedInput-root.Mui-focused  .MuiOutlinedInput-notchedOutline": {
      borderColor: `${selectedColor}`,
      color: "white",
    },
  };

  const [isSending, setIsSending] = useState(false);
  const form = useRef();

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      message: "",
    },
    validationSchema: Yup.object({
      name: Yup.string().max(15, "Must be 15 characters or less").required("Required"),
      email: Yup.string().email("Invalid email address").required("Required"),
    }),
    onSubmit: () => {
      setIsSending(true);
      emailjs.sendForm("service_ii4lrol", "template_8cj5vjq", form.current, "sSUxd-15JpuCTbCrl").then(
        () => {
          toast.success("Thanks for message! I`ll contact you soon.", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
          });

          setIsSending(false);
        },
        (error) => {
          console.log(error.text);
        }
      );
      formik.resetForm();
    },
  });
  return (
    <section className="section contact" id="contact">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 200 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ ease: [0.4, 0, 0.2, 1], duration: 1 }}
          viewport={{ once: true }}
        >
          <h1 className="section__title">
            <span>Contact</span> me
          </h1>
        </motion.div>
        <div className="contact__flex">
          <motion.div
            initial={{ opacity: 0, y: 200 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ ease: [0.4, 0, 0.2, 1], duration: 1, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <p className="contact__text">
              It would be a pleasure to meet you at the interview. <br /> Feel free to contact me any time. <br /> Thank you for your time
              and attention!
            </p>
            <div className="contact__contacts" style={{ color: selectedColor }}>
              <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                <BsFillTelephoneFill size={25} />
                <a href="tel:+380977016943">+380 (97) 70-16-943</a>
              </div>

              <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                <BsMailbox2 size={25} />
                <a href="mailto:example@mail.ua">mr.radkoivan@gmail.com</a>
              </div>
            </div>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, y: 200 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ ease: [0.4, 0, 0.2, 1], duration: 1, delay: 0.5 }}
            viewport={{ once: true }}
            ref={form}
            onSubmit={formik.handleSubmit}
            className="contact__form"
          >
            <TextField
              fullWidth
              size="small"
              label="Name"
              variant="outlined"
              required
              id="name"
              name="name"
              type="text"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.name}
              className="contact__form"
              sx={{ ...formStyle, marginBottom: "15px" }}
            />

            <TextField
              fullWidth
              size="small"
              label="Email"
              variant="outlined"
              required
              id="email"
              name="email"
              type="email"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.email}
              className="contact__form"
              sx={{ ...formStyle, marginBottom: "15px" }}
            />

            <TextField
              fullWidth
              multiline
              rows={4}
              label="Message"
              id="message"
              name="message"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.message}
              className="contact__name"
              sx={{ ...formStyle, marginBottom: "15px" }}
            />

            <button
              disabled={isSending ? true : false}
              className="contact__form-btn"
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                background: selectedColor,
              }}
              type="submit"
            >
              {isSending ? (
                <ThreeDots
                  height="25"
                  width="25"
                  radius="9"
                  color="#FFF"
                  ariaLabel="three-dots-loading"
                  wrapperStyle={{ margin: 0 }}
                  wrapperClassName=""
                  visible={true}
                />
              ) : (
                "Submit"
              )}
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}

Contact.propTypes = {
  selectedColor: PropTypes.string,
};
