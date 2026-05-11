export default function ContactPage() {
  return (
    <div>
      <h1>ContactPage</h1>
      <form>
        <input type="text" placeholder="Name" />
        <input type="email" placeholder="Email" />
        <input type="text" placeholder="Subject" />
        <input type="text" placeholder="Message" />
        <button type="submit">Send</button>
      </form>
    </div>
  );
}