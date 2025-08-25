import styles from "./Contact.module.css";
function Contact() {
  return (
    <section id="contact" className={styles.container}>
      <h1 className="sectionTitle">Contact</h1>
      <form action="">
        <div className="formGroup">
          <label htmlFor="name"hidden>Name</label>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Name"
            required
          />
        </div>
        <div className="formGroup">
          <label htmlFor="email" hidden>Email</label>
          <input
            type="text"
            name="email"
            id="email"
            placeholder="Email"
            required
          />
        </div>
        <div className="formGroup">
          <label htmlFor="Message" hidden>Name</label>
          <textarea 
            type="text"
            name="Message"
            id="message"
            placeholder="Message"
            required>
            </textarea>
        </div>
        <input type="submit" className="hover btn" />
      </form>
    </section>
  );
}

export default Contact;
