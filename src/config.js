import dotenv from 'dotenv';

dotenv.config();

export const BACKEND_URL = process.env.NODE_ENV === 'developement'? "http://localhost:5000/" : "https://exercise-nightmare.herokuapp.com/"