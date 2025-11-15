"use server";

import { JWTPayload, SignJWT, jwtVerify } from "jose";
import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

interface Cookies extends JWTPayload {
  cookie: {
    token: string;
    role: string;
    applicant_id: string;
  };
}

const SECRET_KEY = new TextEncoder().encode(process.env.COOKIES_SECRET_KEY);

const getExpirationTime = (key: CookiesKey) => {
  const BASE_TIME = 60 * 60 * 24 * 1000;
  return BASE_TIME;
};

export async function encrypt(payload: JWTPayload) {
  return await new SignJWT(payload)
    .setProtectedHeader({ alg: "HS256" })
    .setIssuedAt()
    .setExpirationTime(payload.expires as Date | string | number)
    .sign(SECRET_KEY);
}

export async function decrypt(input: string): Promise<any> {
  try {
    const { payload } = await jwtVerify(input, SECRET_KEY, {
      algorithms: ["HS256"],
    });
    return payload as Cookies;
  } catch (error) {
    console.error("Error decrypting cookie:", error);
    return null;
  }
}

export const getCookies = async <T = Cookies>(KEY: CookiesKey): Promise<T | null> => {
  const cookieStore = await cookies();
  const data = cookieStore.get(KEY)?.value;
  if (!data) return null;
  return (await decrypt(data)) as T;
};

export const createCookies = async <T>(cookie: T, KEY: CookiesKey) => {
  const expires = new Date(Date.now() + getExpirationTime(KEY));
  const data = await encrypt({ cookie, expires });
  const cookieStore = await cookies();
  cookieStore.set(KEY, data, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "strict",
    expires: expires,
    path: "/",
  });
};

export async function updateCookies(request: NextRequest, KEY: CookiesKey) {
  const session = request.cookies.get(KEY)?.value;
  if (!session) return;
  const parsed = await decrypt(session);
  const updatedParsed = {
    ...parsed,
    expires: new Date(Date.now() + getExpirationTime(KEY)),
  };
  const res = NextResponse.next();
  res.cookies.set({
    name: KEY,
    value: await encrypt(updatedParsed),
    secure: process.env.NODE_ENV === "production",
    httpOnly: true,
    expires: updatedParsed.expires,
  });
  return res;
}

export const clearCookies = async (KEY: CookiesKey): Promise<void> => {
  const cookieStore = await cookies();
  cookieStore.delete(KEY);
};
