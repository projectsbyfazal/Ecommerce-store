import { DEBUG_MODE } from "@/config";

const COOKIE_NAME = "access_token";

export function setAuthCookie(response, token) {
    response.cookies.set(COOKIE_NAME, token, {
        httpOnly: true,
        secure: DEBUG_MODE === "false",
        sameSite: "strict",
        maxAge: 60 * 60 * 24, // 1 day
        path: "/",
    });
    return response;
}

export function clearAuthCookie(response) {
    response.cookies.set(COOKIE_NAME, "", {
        httpOnly: true,
        secure: DEBUG_MODE === "false",
        sameSite: "strict",
        expires: new Date(0), // expire immediately
        path: "/",
    });
    return response;
}

export function getAuthCookie(request) {
    return request.cookies.get(COOKIE_NAME)?.value || null;
}
