import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { getDbConnection } from '../services/db';

export const logInRoute = {
    path: '/api/login',
    method: 'post',
    handler: async ( req, res ) => {
        const { email, password } = req.body;

        const db = getDbConnection();
        const user = await db.collection( 'users' ).findOne({ email });

        if( !user ) {
            return res.status( 409 ).json({ "Error": "User not found" });
        }

        const { _id: id, isVerified, passwordHash, info } = user;

        const pwdIsCorrect = await bcrypt.compare( password, passwordHash );

        if ( pwdIsCorrect ) {

            jwt.sign({
                    id,
                    email,
                    info, 
                    isVerified,   
                },
                process.env.JWT_SECRET,
                { expiresIn: '2d' },
                (err, token) => {
                    if (err) return res.status(500).json({ "Error occurred during Sign Up: ": err.message });
                    return res.status(200).json({ token });
                }
            );

        } else {
            res.status( 401 ).json({ "Error: ": "Wrong credentials" }); 
            return;
        }
    }
}