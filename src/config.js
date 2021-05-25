import dotenv from 'dotenv';

dotenv.config();

export const BACKEND_URL = process.env.NODE_ENV === 'developement'? "https://localhost:5000" : "http://exercise-nightmare.herokuapp.com/"