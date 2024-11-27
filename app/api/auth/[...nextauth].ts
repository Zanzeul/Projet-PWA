import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import * as bcrypt from "bcryptjs";
import {user} from "../../../repository/user"

export default NextAuth({
    providers: [
        CredentialsProvider({
            name: 'Credentials',
            credentials: {
                username: { label: "Username", type : "text"},
                password: { label: "Password", type : "password"}
            },
            async authorize(credentials) {

                if (!credentials || !credentials.username || !credentials.password) {
                    throw new Error("Les identifiants sont requis.");
                  }

                const {username, password} = credentials ?? {};
                if(
                    username === user.username &&
                    bcrypt.compareSync(password,user.password)
                 ){
                    return {
                        id: user.id,
                        name: user.username,
                    };
                 }
                
                 return null;
            },

        }),
    ],
    secret: process.env.NEXTAUTH_SECRET, 
    session: {
        strategy: "jwt",
    },
    callbacks: {
        async jwt({token,user}){
            if(user){
                token.id = user.id
                token.name = user.name;
            }
            return token;
        },
        
        async session({session,token}) {
            if( token)
                session.user = {
                    name:  token.name,
                }
            return session;
        }
    }
})