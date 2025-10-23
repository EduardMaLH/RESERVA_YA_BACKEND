import express from 'express';
import cors from 'cors';
import usuarioRoutes from './routes/usuarioRoutes.js';
// Import other routes here

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

// API Routes
app.use('/api/usuario', usuarioRoutes);
// Add other routes here

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

export default app;