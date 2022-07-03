import jwt from "jsonwebtoken";
import { ObjectID } from 'mongodb';
import { getDbConnection } from "../services/db";

export const updateUserInfoRoute = {

    path: '/api/users/:userId',
    method: 'put',
    handler: async ( req, res ) => {
        const { authorization } = req.headers;
        const { userId } = req.params;
        // TODO remove
        console.log(req.params);
        //Filters any unwelcome data
        const updates = (({
            favoriteFood,
            hairColor,
            bio
        }) => ({
            favoriteFood,
            hairColor,
            bio,
        }))( req.body );

        if ( !authorization ) return res.status(401).json({ message: "No authorization header sent" });

        // Bearer akjdhjkdhad...
        const token = authorization.split(' ')[1];

        jwt.verify( 
            token, 
            process.env.JWT_SECRET, 
            async ( err, decoded ) => {
                if ( err ) return res.status(402).json({ error: err.message });

                const { id } = decoded;

                // TODO: remove
                console.log(id);
                console.log(userId);
                if ( id !== userId ) return res.status(403).json({ error: "User not authorized" });

                const db = getDbConnection();
                const result = await db.collection('users').findOneAndUpdate(
                    { _id: ObjectID(id) },
                    { $set: { info: updates }},
                    { returnOriginal: false },
                );

                const { email, isVerified, info } = result.value;

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

            }
        );
;    }
}