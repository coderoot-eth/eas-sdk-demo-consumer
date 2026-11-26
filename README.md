# eas-sdk-demo-consumer

> **A demo project. It depends on [`@coderoot-eth/eas-sdk-demo`](https://www.npmjs.com/package/@coderoot-eth/eas-sdk-demo), an unofficial copy of the Ethereum Attestation Service SDK released through CodeRoot. Not published, reviewed or endorsed by EAS.**

Its CI checks the dependencies against CodeRoot before anything is installed or built ([`check.yml`](.github/workflows/check.yml)):

1. The SDK must be verified. The SDK's sha512 from `package-lock.json`, the digest npm checks at install, must match a release a person approved in CodeRoot. A matching name and version never count on their own. A revoked release fails the build (exit 1), and so does a release nobody approved (exit 2).
2. Every other dependency is checked by its bytes too. Any of them fails the build only if its bytes are revoked or don't match. Most of the npm ecosystem has no CodeRoot record yet, so those read `unregistered` and the build continues.
3. Only then does it run `npm ci` and the build.

The report from each check is attached to the run.

## Moving to another version

Change the pin in `package.json`, run `npm install --ignore-scripts`, and commit `package.json` with `package-lock.json`. To check a version without committing, run the `check` workflow by hand with that version.

After a release is revoked, pinning the previous approved version makes the build pass again.
