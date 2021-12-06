import type { NextApiResponse, NextApiRequest } from 'next'
import { serialize, parse } from 'cookie'
import crypto from 'crypto'

export const ACCESS_TOKEN_MAX_AGR = 60 * 60 // 1 hour
const ACCESS_TOKEN_REFRESH_BUFFER = 60 * 5 // 5 minutes
export const SESSION_COOKIE_MAX_AGE = 2147483647
const SESSION_COOKIE_NAME = 'token'
export const SESSION_ID_COOKIE_NAME = 'sid'
export const TOKEN_EXP_COOKIE_NAME = 'token_exp'
const deleteCookieOpts = { maxAge: -1, path: '/' }

export function setTokenCookie(res: NextApiResponse, token: string) {
  const accessTokenRefreshMaxAge =
    ACCESS_TOKEN_MAX_AGR - ACCESS_TOKEN_REFRESH_BUFFER
  const accessTokenRefreshIn = Date.now() + accessTokenRefreshMaxAge * 1000
  const sessionExpires = new Date(Date.now() + SESSION_COOKIE_MAX_AGE * 1000)

  res.setHeader('Set-Cookie', [
    serialize(TOKEN_EXP_COOKIE_NAME, accessTokenRefreshIn.toString(), {
      expires: new Date(accessTokenRefreshIn),
      maxAge: accessTokenRefreshMaxAge,
      path: '/',
      sameSite: 'lax'
    }),
    serialize(SESSION_COOKIE_NAME, token, {
      expires: sessionExpires,
      httpOnly: true,
      maxAge: SESSION_COOKIE_MAX_AGE,
      path: '/',
      sameSite: 'lax',
      secure: process.env.NODE_ENV === 'production'
    }),
    serialize(
      SESSION_ID_COOKIE_NAME,
      crypto.randomBytes(16).toString('base64'),
      {
        expires: sessionExpires,
        maxAge: SESSION_COOKIE_MAX_AGE,
        path: '/',
        sameSite: 'lax'
      }
    )
  ])
}

export function removeTokenCookies(res: NextApiResponse) {
  res.setHeader('Set-Cookie', [
    serialize(TOKEN_EXP_COOKIE_NAME, '', deleteCookieOpts),
    serialize(SESSION_COOKIE_NAME, '', deleteCookieOpts),
    serialize(SESSION_ID_COOKIE_NAME, '', deleteCookieOpts)
  ])
}

export function parseCookies(req: NextApiRequest) {
  // For API routes we don't need to parse the cookies
  if (req.cookies) return req.cookies

  // For pages we do need to parse the cookies
  const cookie = req.headers?.cookie
  return parse(cookie || '')
}

export function getTokenCookie(req: NextApiRequest) {
  const cookies = parseCookies(req)
  return cookies[SESSION_COOKIE_NAME]
}
