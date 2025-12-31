import { User } from "@repo/db";

declare global {
  namespace Express {
    interface Request {
      user?: {
        userId: string;
      };
    }
  }
}

declare global {
  namespace Express {
    interface Request {
      id: string;
    }
  }
}

export {};
