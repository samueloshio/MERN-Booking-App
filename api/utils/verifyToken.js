import jwt from "jsonwebtoken";
import { createError } from "./error.js";

export const verifyToken = (req, res, next) => {
  const token = req.cookies.access_token;
  if (!token) {
    return next(createError(404, "Oops!! Kindly login to continue"));
  }

  jwt.verify(token, process.env.JWT, (err, user) => {
    if (err) return next(createError(403, "Sorry, token is not valid"));
    req.user = user;
    next();
  });
};

export const verifyUser = (req, res, next) => {
  verifyToken(req, res, next, () => {
    if (req.user.id === req.params.id || req.user.isSuperUser) {
      next();
    } else {
      return next(createError(403, "Sorry, you have not login"));
    }
  });
};

export const verifyAdmin = (req, res, next) => {
  verifyToken(req, res, next, () => {
    if (req.user.isSuperUser) {
      next();
    } else {
      return next(
        createError(
          403,
          "Sorry, you are not authorized to perform this operation"
        )
      );
    }
  });
};
