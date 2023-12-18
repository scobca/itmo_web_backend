import { JwtOptionsFactory } from "@nestjs/jwt";

export class JwtOptionsModule implements JwtOptionsFactory {
  createJwtOptions() {
    return {
      secret:
        "DO NOT USE THIS SECRET CODE. ENTER HERE YOUR CODE AND PROTECT IT",
      signOptions: {
        expiresIn: "ENTER HERE ANY TIME IN FORMAT COUNT_METRIC: 60s, 10d etc.",
      },
    };
  }
}
