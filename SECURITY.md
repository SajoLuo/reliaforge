# Security policy

## Supported releases

Security fixes target the current default branch and the latest published release where practical.

## Reporting a vulnerability

Use GitHub's private vulnerability reporting for the affected repository. Include the impacted
version or commit, reproduction steps, expected impact, and any suggested mitigation.

Do not open a public issue with exploit details or include real credentials, private endpoints, or
production data in a report.

## Scope

The hosted console demo is static and read-only. The Python runtime treats installed plugins as
trusted in-process extensions; it is not a sandbox for hostile code. Reports that demonstrate a
boundary violation, authentication bypass, secret disclosure, or unsafe default are in scope.
