const Contact = () => {
  return (
    <div>
      <div className="footer-form flex-1">
        <form className="max-w-md mx-auto p-4 bg-transparent rounded shadow-md">
          <input
            type="text"
            id="text"
            className="w-full px-2 py-5 mb-4  rounded-md border-none border-b-2 focus::outline-none active:outline-none"
            required
            placeholder="Name"
          />
          <input
            type="email"
            id="email"
            className="w-full px-2 py-5 mb-4  rounded-md border-none border-b-2 focus::outline-none active:outline-none"
            required
            placeholder="Email"
          />

          <input
            type="tel"
            id="phone"
            className="w-full px-2 py-5 mb-4  rounded-md border-none border-b-2 focus::outline-none active:outline-none"
            required
            placeholder="phone number"
          />

          <textarea
            id="message"
            className="w-full px-3 py-7 mb-4 border rounded-md"
            required
          ></textarea>

          <button
            type="submit"
            className="w-full px-4 py-2 font-semibold text-white min-w-max bg-transparent"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
