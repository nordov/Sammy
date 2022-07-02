import { getDbConnection } from "../services/db";
import bcrypt from 'bcrypt';
import jwt from "jsonwebtoken";

export const signUpRoute = {
    path: '/api/sign-up',
    method: 'post',
    handler: async ( req, res ) => {
        const { email, password } = req.body;

        const db = getDbConnection();
        const user = await db.collection('users').findOne({ email });

        if ( user ) {
            res.status(409).json({ "Error: ": "User already exists" });
            return;
        }

        const passwordHash = await bcrypt.hash( password, 10 );

        const startingInfo = {
            hairColor: '',
            favoriteFood: '',
            bio: '',
        };

        const result = await db.collection('users').insertOne({
            email,
            passwordHash,
            info: startingInfo,
            isVerified: false,
        });

        const { insertedId } = result;

        jwt.sign({
                id: insertedId,
                email,
                info: startingInfo,
                isVerified: false,
            },
            process.env.JWT_SECRET,
            { expiresIn: '2d' },
            ( err, token ) => {
                if ( err ) return res.status( 500 ).json({ "Error occurred during Sign Up: ": err.message });
                res.status( 200 ).json({ token });
                return;
            }

        );

     }
}