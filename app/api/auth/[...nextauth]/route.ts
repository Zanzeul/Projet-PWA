import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import * as bcrypt from "bcryptjs";
import {user} from "../../../../repository/user"

const handler = NextAuth({
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
    session: {
        strategy: "jwt",
    },
    callbacks: {
        async jwt({token,user}){
            if(user){
                token.id = user.id
                token.name = user.name;
                token.apikey = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxMTIxN2Y3ZDk1YTNlOTVjMmI0MGNmYjVmYWZiYzRjNiIsIm5iZiI6MTczMDg5NTQxNy4xNTg0OTc4LCJzdWIiOiI2NzJiNTVjYjQyNGNjNmEzYmUyZTRkNDIiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.0FIVhsB8iRD3NkXdeFiXinVw8Jxe6BMniB2_YDUJAHo"
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

export { handler as GET, handler as POST } 