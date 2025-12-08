import { JWT_ACCESS_SECRET } from "@/config";
import jwt from "jsonwebtoken"

// jwt use for authentication
// it has 3 parts separated by (.) eg. ( Header.Payload.Signature )
// 1. Header contains type of token + algorithm (default - HS256)
// 2. Payload is actual data
// 3. Signature is hashed secret that proves token wasn't modified

class JwtService {
    static sign(payload, secret = JWT_ACCESS_SECRET, expiry = '1d') {
        return jwt.sign(payload, secret, { expiresIn: expiry })
    }

    static verify(token, secret = JWT_ACCESS_SECRET) {
        return jwt.verify(token, secret);
    }
}

export default JwtService;