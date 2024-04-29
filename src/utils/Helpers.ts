import express from "express";

export function getBaseUrl(request: express.Request): string {
  return request.protocol + "://" + request.get("host");
}
