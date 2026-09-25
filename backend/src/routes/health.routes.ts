import { Router } from "express";

export function createHealthRouter(): Router {
  const router = Router();

  router.get("/health", (_request, response) => {
    response.status(200).json({
      success: true,
      data: {
        service: "qrs-technologies-api",
        status: "ok",
      },
    });
  });

  return router;
}
