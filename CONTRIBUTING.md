# Contributing to Eminence Astro Theme

We welcome contributions to the Eminence Astro theme! This guide outlines the process for contributing, ensuring smooth collaboration and high-quality contributions.

## Getting Started

### Requirements:

- **Node.js** - v18.17.1 or v20.3.0, v22.0.0 or higher. (v19 and v21 unsupported.)
- **Text editor** - We recommend VS Code or IDX with the Official Astro extension.
- **Terminal** - Astro is accessed through its command-line interface (CLI).

### Initial Setup:

To get started working on the Eminence Astro theme, follow these steps:

| Command                                                       | Description          |
| ------------------------------------------------------------- | -------------------- |
| `git clone https://github.com/Xeffen25/eminence-astro-cf.git` | Clone Repository     |
| `npm install`                                                 | Install Dependencies |
| `npm run dev`                                                 | Start dev server     |

## Context

For context on this project you can visit the [wiki](https://github.com/Xeffen25/eminence-astro-cf/wiki)!

## Formatting

Formatting is done automaticly by your editor thanks to our config and also on commit thanks to husky!

## Naming conventions

We follow common React naming conventions for filenames, component names, classes, constants, and more.

- For component **filenames** and **class names**, always use `PascalCase`.
- For **non-component filenames**, always use fully lowercase `kebab-case`.
- For **test filenames**, append `.test` before the file extension.
- When declaring **instances** of components, always use `camelCase`.
- When declaring **exported constants**, always use `SCREAMING_SNAKE_CASE`.

| &nbsp;                       | ✅ Valid                                  | 🚫 Invalid                                                                              |
| ---------------------------- | ----------------------------------------- | --------------------------------------------------------------------------------------- |
| **Component filenames:**     | `CardTitle.tsx`<br>`CardTitle.tsx`        | `cardTitle.tsx`<br>`card_title.tsx`<br>`card-title.tsx`                                 |
| **Non-component filenames:** | `utility.ts`<br>`process-data.ts`         | `Utility.ts`<br>`processData.ts`<br>`process_data.ts`                                   |
| **Test filenames:**          | `DataValidator.test.tsx`                  | `DataValidator-test.tsx`<br>`DataValidator_test.tsx`<br>`DataValidatorTest.tsx`         |
| **Component classes:**       | `<DisplayPanel />`                        | `<displayPanel />`                                                                      |
| **Component instances:**     | `const contentFilter = <ContentFilter />` | `const ContentFilter = <ContentFilter />`<br>`const content_filter = <ContentFilter />` |
| **Exported constants:**      | `export const MAX_FILE_SIZE_MB = 10;`     | `export const MaxFileSizeMB = 10;`<br>`export const max_file_size_mb = 10;`             |

### Commit naming

Conventional Commits are a lightweight commit message convention for creating an explicit commit history, facilitating automated tooling and aligning with SemVer. Key elements include:

- **Structure:** `<type>[optional scope]: <description> [optional body] [optional footer(s)]`
- **Types:** `fix`, `feat`, `BREAKING CHANGE`, and others.
- **SemVer Correlation:** `fix` (PATCH), `feat` (MINOR), `BREAKING CHANGE` (MAJOR).

For detailed information and examples, visit the official website: [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/)

## Changesets

If you are contributing a user-facing or noteworthy change to this project that should be added to the changelog, you should include a changeset with your PR by running the following command.

| Command                 | Description             |
| ----------------------- | ----------------------- |
| `npm run changeset add` | Add a changeset locally |

Follow the prompts to select whether the change is a major, minor or patch change. This will create a file in the `.changesets` directory of the repo. This change should be committed and included with your PR.

**Considerations:**

- You can use markdown in your changeset to include code examples, headings, and more. However, **please use plain text for the first line of your changeset**. The formatting of the GitHub release notes does not support headings as the first line of the changeset.

## Merging PRs

When merging PRs, please select the **Squash and Merge** option, which consolidates all the changes from the PR into a single commit. This helps reduce the commit noise in our Git repository.
