# Security & Permissions

**Keep Things Secure** by safeguarding workflows is essential for maintaining project integrity. This includes following best practices for securing workflows, managing GitHub tokens and permissions effectively, and understanding the risks associated with granting third-party permissions. Protecting code and data at every step reduces the likelihood of unauthorized access and potential vulnerabilities.

## Security Concerns

| Script Injection                                        | Malicious Third-Party Actions                                            | Permission Issues                                      |
| ------------------------------------------------------- | ------------------------------------------------------------------------ | ------------------------------------------------------ |
| A value, set outside a Workflow, is used in a Workflow  | Actions can perform any logic, including potentially malicious logic     | Consider avoiding overly permissive permissions        |
| _Example:_ Issue title used in a Workflow shell command | _Example:_ A third-party Action that reads and exports secrets           | _Example:_ Only allow checking out code (“read-only”)  |
| Workflow / command behavior could be changed            | Only use trusted Actions and inspect code of unknown / untrusted authors | GitHub Actions supports fine-grained permissions contr |
