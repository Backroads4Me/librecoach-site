---
title: Contributing Guide
description: "How to contribute to Libre Coach: Code, Documentation, Testing, and Community Support."
---

First off, thank you for considering contributing to Libre Coach! It's people like you that make open source tools great.

## Ways to Contribute (No Code Required!)

You don't need to know Python or JavaScript to help.

*   **Documentation**: Find typos, clarify confusing steps, or add missing sections.
*   **Testing**: Test new releases on your specific hardware and report issues.
*   **Support**: Help other users in the [Community Forum](https://forum.LibreCoach.com).
*   **Showcases**: Share your dashboard screenshots and automation ideas.
*   **Sponsor**: [Buy us a coffee](https://buymeacoffee.com/Backroads4me) or become a [GitHub Sponsor](https://github.com/sponsors/Backroads4me).

## Code Contributions

### Repository Structure
*   **[libre-coach-addon](https://github.com/Backroads4Me/libre-coach-addon)**: The main Home Assistant Add-on repository. Contains the Dockerfile, bash scripts, and configuration logic.
*   **[libre-coach-site](https://github.com/Backroads4Me/libre-coach-site)**: This documentation website (Astro Starlight).
*   **[libre-coach-node-red](https://github.com/Backroads4Me/libre-coach-node-red)**: The core logic flows and decoding libraries.

### Development Setup
1.  **Fork** the repository you want to work on.
2.  **Clone** it to your local machine.
3.  **Branch** for your feature: `git checkout -b feature/amazing-new-thing`.
4.  **Commit** your changes with clear messages.
5.  **Push** to your fork and submit a **Pull Request**.

### Coding Standards
*   **Python**: Follow PEP 8.
*   **Scripts**: Ensure shell scripts are POSIX compliant where possible.
*   **Commits**: Use descriptive commit messages (e.g., "Fix: Handle null values in battery sensor" instead of "fixed bug").

## Documentation Contributions

This site is built with **Astro** and the **Starlight** theme. It's fast, markdown-based, and easy to run locally.

### Running the Docs Locally
1.  Clone the repo: `git clone https://github.com/Backroads4Me/libre-coach-site`
2.  Install dependencies: `npm install` (or `pnpm install`)
3.  Start dev server: `npm run dev`
4.  Open `http://localhost:4321`

### Editing Content
All content is in `src/content/docs/`. It uses standard Markdown (MDX), so you can import components if needed.

## Recognition
Contributors will be recognized in release notes and on the Credits page (coming soon).

## Code of Conduct
We are here to build cool stuff for our RVs. Be respectful, be constructive, and assume positive intent. Harassment or trolling will not be tolerated.
