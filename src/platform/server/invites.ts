import { createHash, randomBytes } from "node:crypto";

export const INVITE_TTL_MS = 1000 * 60 * 60 * 24 * 7;

export function normalizeEmail(email: string) {
  return email.trim().toLowerCase();
}

export function createInviteToken() {
  return randomBytes(32).toString("hex");
}

export function hashInviteToken(token: string) {
  return createHash("sha256").update(token).digest("hex");
}

export function getInviteExpiry(from = new Date()) {
  return new Date(from.getTime() + INVITE_TTL_MS);
}

export function getInviteOrigin(headers: Headers) {
  const origin = headers.get("origin");
  if (origin) {
    return origin;
  }

  const host = headers.get("x-forwarded-host") ?? headers.get("host");
  const proto = headers.get("x-forwarded-proto") ?? "http";
  return host ? `${proto}://${host}` : "http://localhost:3000";
}

export function buildInviteUrl(headers: Headers, token: string) {
  return `${getInviteOrigin(headers)}/join/${token}`;
}

export function isInviteActive(invite: {
  acceptedAt: Date | null;
  expiresAt: Date;
  revokedAt: Date | null;
}) {
  return (
    !invite.acceptedAt && !invite.revokedAt && invite.expiresAt > new Date()
  );
}
