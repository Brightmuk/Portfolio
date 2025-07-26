const Contact = () => (
  <div className="p-8 max-w-md mx-auto">
    <h2 className="text-2xl font-semibold mb-4">Contact Me</h2>
    <form className="space-y-4">
      <input type="text" placeholder="Name" className="w-full border p-2 rounded" />
      <input type="email" placeholder="Email" className="w-full border p-2 rounded" />
      <textarea placeholder="Message" className="w-full border p-2 rounded" rows="4" />
      <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
        Send Message
      </button>
    </form>
  </div>
);
export default Contact;
