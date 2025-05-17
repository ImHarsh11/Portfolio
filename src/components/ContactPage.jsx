import React, { useState } from 'react';

export default function ContactPage() {
  const [showForm, setShowForm] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState('');

  const handleSubmit = async () => {
    // Basic validation
    if (!name.trim() || !email.trim() || !message.trim()) {
      setStatus('Please fill out all fields.');
      return;
    }

    try {
      const response = await fetch(`${process.env.REACT_APP_API_URL}/api/message`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, message }),
      });

      if (response.ok) {
        setStatus('Message sent successfully!');
        setName('');
        setEmail('');
        setMessage('');
        setShowForm(false);
      } else {
        setStatus('Failed to send message.');
      }
    } catch (error) {
      setStatus('Error connecting to the server.');
    }
  };

  return (
    <div id="contactme" className="contactContainer">
      <div className="section-container">
        <section>
          <h2>
            <span>05.</span>What's Next?
          </h2>
          <h1>Get In Touch</h1>
          <p>
            I'd love to hear from you! Whether you have a question, a project
            idea, a collaboration in mind, or just want to say hello — feel free
            to reach out. I’m always open to discussing new opportunities,
            creative ideas, or ways I can contribute to your team.
          </p>

          {!showForm ? (
            <button onClick={() => setShowForm(true)}>Say Hi!</button>
          ) : (
            <div className="messageForm">
              <input
                type="text"
                placeholder="Your Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                style={{ display: 'block', marginBottom: '10px', width: '100%', padding: '8px' }}
              />
              <input
                type="email"
                placeholder="Your Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                style={{ display: 'block', marginBottom: '10px', width: '100%', padding: '8px' }}
              />
              <textarea
                rows="4"
                cols="50"
                placeholder="Write your message..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                style={{ display: 'block', marginBottom: '10px', width: '100%', padding: '8px' }}
              />
              <button onClick={handleSubmit}>Submit</button>
              <button
                onClick={() => setShowForm(false)}
                style={{ marginLeft: '10px' }}
              >
                Cancel
              </button>
            </div>
          )}

          {status && <p style={{ marginTop: '10px' }}>{status}</p>}
        </section>
      </div>
    </div>
  );
}
