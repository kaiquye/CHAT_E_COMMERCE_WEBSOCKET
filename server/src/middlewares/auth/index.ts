import "dotenv/config";
import JWT, { Jwt, Secret } from "jsonwebtoken";
import express, { NextFunction, Request, Response } from "express";
import { ParamsDictionary } from "express-serve-static-core";
import { ParsedQs } from "qs";
import { AppError } from "../../util/AppError";

interface IAuth {
  authManager(
    req: Request,
    res: Response,
    next: NextFunction
  ): NextFunction | Response | void;
  newTokenManager(email: string): string;
  validadeManagerWebToken(token: string): boolean;
}

class Auth implements IAuth {
  validadeManagerWebToken(token: string | undefined): boolean {
    try {
      let Secret = process.env.SECRET || "";
      let Token = token || "";
      JWT.verify(Token, Secret);
      return true;
    } catch (error) {
      console.log(error);
      return false;
    }
  }
  authManager(
    req: Request,
    res: Response,
    next: NextFunction
  ): NextFunction | Response | void {
    try {
      const token = req.headers["authorization"];
      if (!token) {
        return res
          .status(401)
          .json(new AppError(400, "token não foi informado."));
      }
      let Secret = process.env.SECRET || "";
      const check = JWT.verify(token, Secret);
      if (check) {
        return next();
      } else {
        return res.status(401).json(new AppError(401, "token invalido"));
      }
    } catch (error) {
      return res.status(401).json(new AppError(401, "token invalido"));
    }
  }

  newTokenManager(email: string): string {
    const secret: string = process.env.SECRET || "";
    const hash = JWT.sign({ email }, secret, { expiresIn: "1800s" });
    return hash;
  }
}

export default new Auth();
