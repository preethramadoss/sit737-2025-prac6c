app.get('/', (req, res) => {
  res.set('Content-Type', 'text/html');
  res.send(`
    <!DOCTYPE html>
    <html>
      <head>
        <title>LOOPII – Version 2</title>
        <style>
          body {
            font-family: 'Segoe UI', sans-serif;
            background: linear-gradient(to right, #e0f7fa, #fff);
            color: #333;
            text-align: center;
            padding: 40px;
            margin: 0;
          }
          header {
            background-color: #4CAF50;
            padding: 20px;
            color: white;
          }
          h1 {
            font-size: 2.8rem;
            margin: 0;
          }
          nav a {
            margin: 0 15px;
            text-decoration: none;
            color: white;
            font-weight: bold;
          }
          section {
            margin-top: 40px;
          }
          .feature {
            background-color: #f9f9f9;
            margin: 20px auto;
            padding: 20px;
            border-radius: 8px;
            box-shadow: 0 0 10px rgba(0,0,0,0.05);
            max-width: 600px;
          }
          footer {
            margin-top: 50px;
            font-size: 0.9rem;
            color: #888;
          }
          .btn {
            background-color: #4CAF50;
            color: white;
            padding: 10px 20px;
            border: none;
            border-radius: 5px;
            text-decoration: none;
            font-weight: bold;
          }
        </style>
      </head>
      <body>
        <header>
          <h1>Welcome to LOOPII – Version 2</h1>
          <nav>
            <a href="#features">Features</a>
            <a href="/status">API Status</a>
          </nav>
        </header>
        <section id="features">
          <div class="feature">
            <h2>Daily Habit Tracking</h2>
            <p>Track daily activities and build better routines effortlessly.</p>
          </div>
          <div class="feature">
            <h2>Progress Dashboard</h2>
            <p>Visualize your journey with charts and personalized reports.</p>
          </div>
          <div class="feature">
            <h2>Smart Reminders</h2>
            <p>Never miss a task with intelligent, timely notifications.</p>
          </div>
          <a href="/status" class="btn">Check Live API Status</a>
        </section>
        <footer>&copy; 2025 LOOPII Microservices • Built for SIT737</footer>
      </body>
    </html>
  `);
});
