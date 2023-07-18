import express, { Request, Response } from 'express';

const app = express();
const port = 3000;

// Middleware
app.use(express.json());

// Routes
app.get('/', (req: Request, res: Response) => {
  res.send('Hello, World!');
});

app.post('/api/users', (req: Request, res: Response) => {
  const { name, email } = req.body;
  // Process the user data and save it to the database
  res.status(201).json({ message: 'User created successfully' });
});

// Start the server
app.listen(port,console.log(`Server is listening on port ${port}`));
