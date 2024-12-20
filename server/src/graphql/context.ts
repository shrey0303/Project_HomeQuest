import { Request, Response } from "express";
import jwt, { JsonWebTokenError } from "jsonwebtoken";

type User = {
  _id: string;
  role: string;
};

type Token = {
  _id: string;
  role: string;
  iat: number;
  exp: number;
};

export default async ({ req, res }: { req: Request; res: Response }) => {
  let user: User = null;
  const accessToken = req.headers.authorization || req.cookies["access-token"];

  if (accessToken && accessToken !== undefined) {
    jwt.verify(
      accessToken,
      "yHw72P@kM!dZ%uR8rT5vNc3^jQpJxC1tV$zY#oI&fE",
      (error: JsonWebTokenError, decoded: Token) => {
        if (decoded) {
          const { _id, role } = decoded;
          user = { _id, role };

          return {
            user,
            req,
            res,
          };
        }
      }
    );
  }

  if (!accessToken) res.clearCookie("user");

  return {
    user,
    req,
    res,
  };
};