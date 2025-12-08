import { getAuthCookie } from "@/lib/cookie";
import JwtService from "@/lib/JwtService";

export function verifyAuthority(req) {
    try {
        // const authHeader = req.headers.get("authorization");
        // if (!authHeader) return false;

        // const token = authHeader.split(" ")[1];
        
        const token = getAuthCookie(req)
        if (!token) return false;

        const decodeUser = JwtService.verify(token);
        if (!decodeUser) return false;

        return decodeUser;

    } catch (error) {
        console.log(error?.message || error);
        return false;
    }
}