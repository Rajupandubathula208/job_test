import React, { useState } from 'react';
import './Home.css';

function Home() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(`Name: ${name}, Email: ${email}`);
  };

  return (
    <main className="main">
      <section className="hero">
        <h1 className='head'>Welcome to My Website</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel nunc at mi faucibus finibus. Sed sed massa eget augue iaculis lobortis. Phasellus vel euismod nisi, quis sollicitudin metus. Sed mollis turpis ac bibendum tristique. Ut varius, lorem id congue placerat, orci odio lobortis arcu, ac varius nisl ex sit amet nibh. Donec semper augue nec libero dignissim, et dictum massa gravida. Donec id orci sapien. Aliquam erat volutpat. Pellentesque venenatis orci vel lectus egestas, at bibendum lorem rhoncus.</p>
        <button className="btn">Learn More</button>
      </section>
      <section className="features">
        <h2>Features</h2>
        <ul>
          <li>Feature 1</li>
          <li>Feature 2</li>
          <li>Feature 3</li>
        </ul>
      </section>
      <section className="form">
        <h2>Contact Us</h2>
        <form onSubmit={handleSubmit}>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" value={name} onChange={(event) => setName(event.target.value)} />

          <label htmlFor="email">Email:</label>
          <input type="email" id="email" value={email} onChange={(event) => setEmail(event.target.value)} />

          <button type="submit">Submit</button>
        </form>
      </section>
    </main>
  );
}

export default Home;