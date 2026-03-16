import { describe, expect, it } from "vitest";

import {
  hashInviteToken,
  isInviteActive,
  normalizeEmail,
} from "~/platform/server/invites";

describe("feature invite helpers", () => {
  it("normalizes email casing and whitespace", () => {
    expect(normalizeEmail("  Person@Example.com ")).toBe("person@example.com");
  });

  it("hashes invite tokens consistently", () => {
    expect(hashInviteToken("same-token")).toBe(hashInviteToken("same-token"));
    expect(hashInviteToken("same-token")).not.toBe(
      hashInviteToken("other-token"),
    );
  });

  it("detects whether invites are active", () => {
    expect(
      isInviteActive({
        acceptedAt: null,
        revokedAt: null,
        expiresAt: new Date(Date.now() + 60_000),
      }),
    ).toBe(true);

    expect(
      isInviteActive({
        acceptedAt: new Date(),
        revokedAt: null,
        expiresAt: new Date(Date.now() + 60_000),
      }),
    ).toBe(false);
  });
});
