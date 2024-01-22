export default () => ({
    jwtSecret: process.env.JWT_SECRET || 'your-secret-key',
  });