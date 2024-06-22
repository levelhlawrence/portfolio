import { motion } from "framer-motion";

const Contact = () => {
  return (
    <motion.section
      initial={{ width: 0 }}
      animate={{ width: "100%", x: 0, scale: 1 }}
      exit={{ x: window.innerWidth }}
      style={{ backgroundColor: "#34353a" }}
      id="contact"
      className="min-h-screen flex justify-center"
    >
      <div className="container">
        <h1>Hello Contact</h1>
      </div>
    </motion.section>
  );
};

export default Contact;
