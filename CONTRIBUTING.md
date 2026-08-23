# Contributing Guidelines

Thank you for your interest in contributing to this project. To maintain clean history and consistent code quality, please adhere to the following standards.

---

## 1. Branching Strategy

Follow the standard branch naming format:

```
<category>/<short-description>
```

### Approved Categories
- `feature/`: New features or capabilities
- `bugfix/`: Bug fixes and error resolutions
- `hotfix/`: Urgent production fixes
- `docs/`: Documentation additions or revisions
- `chore/`: Build configuration, dependencies, or maintenance
- `refactor/`: Code reorganization without functional changes
- `test/`: Automated test suites and assertions

---

## 2. Commit Message Conventions

This repository strictly enforces the [Conventional Commits](https://www.conventionalcommits.org/) specification:

```
<type>(optional-scope): description
```

### Approved Types
- `feat`: A new feature
- `fix`: A bug fix
- `docs`: Documentation changes
- `style`: Formatting, missing semicolons, etc. (no code change)
- `refactor`: Refactoring production code
- `perf`: Performance optimizations
- `test`: Adding or updating tests
- `chore`: Maintenance, build tasks, package updates

### Commit Rules
- Use imperative mood in the subject line (e.g. `feat: add video playback fallback`, not `added` or `adds`).
- Keep the subject line under 72 characters.
- One logical change per commit.

---

## 3. Code Standards & Quality Bar

- **TypeScript**: Ensure strict typing without implicit `any` types.
- **Linting & Formatting**: Code must pass `npm run lint` and `npm run build` without warnings or errors.
- **Accessibility**: All images and videos require meaningful `alt` text and accessibility labels.
- **Secrets & Credentials**: Never commit secrets, API keys, or personal tokens. Use `.env.example` as a template for required variables.
