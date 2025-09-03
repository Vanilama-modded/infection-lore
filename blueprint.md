# Project Blueprint: AI-Powered Document Editor

## Overview

This document outlines the plan for creating a modern, web-based document editor with an integrated AI assistant. The editor will provide a clean, intuitive interface for writing and formatting text, with AI-powered features to enhance the user's workflow.

## Core Features

*   **Rich Text Editor:** A `contenteditable`-based editor that supports common formatting options:
    *   Bold, Italic, Underline
    *   Headings (H1, H2, H3)
    *   Unordered and Ordered Lists
    *   Text Alignment
*   **Modern UI/UX:**
    *   A clean, minimalist, and visually balanced layout.
    *   A dark theme for a modern aesthetic.
    *   Subtle background textures and drop shadows to create depth.
    *   Responsive design for both desktop and mobile use.
    *   Use of icons for intuitive interaction.
*   **Integrated AI Assistant (Gemini):**
    *   A dedicated panel for interacting with the AI.
    *   The ability to ask questions, generate text, summarize content, and more.
    *   Context-aware actions (e.g., "summarize selected text").

## Plan for Current Request

1.  **Create `blueprint.md`:** Establish this document as the single source of truth for the project's design and features.
2.  **HTML Structure (`index.html`):**
    *   Set up the main application layout, including a toolbar, the main editor area, and a sidebar for the AI assistant.
3.  **CSS Styling (`style.css`):**
    *   Implement the modern design language, including the color palette, typography, spacing, and visual effects like shadows and textures.
    *   Define styles for the editor, toolbar, buttons, and AI assistant panel.
4.  **JavaScript Logic (`main.js`):**
    *   Implement the toolbar functionality for text formatting.
    *   Set up the basic structure for the AI assistant, including UI interaction and a placeholder for the Gemini API integration.
5.  **Firebase and Gemini Configuration:**
    *   Configure the Firebase MCP server.
    *   Prepare the JavaScript to handle Gemini API requests, including a placeholder for the API key.
