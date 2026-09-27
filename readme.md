[Repository](https://github.com/VelzCode/Fourth.Project-Javascript)<br>
[Live Page](https://velzcode.github.io/Fourth.Project-Javascript/)

# Fourth.Project-Javascript — Task List Dashboard

A task list application created for week four of my coding bootcamp. This assignment focused on learning JavaScript, using a simple dashboard design supplied by the tutor so I could concentrate on the code rather than the design.

## Disclaimer

This is an educational demonstration. Any company or business context is fictional, and the dashboard sections contain placeholder content rather than real business data.

## About the project

The task list allows users to create and edit tasks. As a bonus stretch goal, I added the option to delete a task. Tasks are also saved in the browser using `localStorage` and loaded again when the page is opened or refreshed.

The tutor provided the starting design, with the advice to focus on learning JavaScript. I plan to revisit the project in version two and adapt the design when I have time.

## Features

- **Create tasks** — Enter text and click Add Task to add it to the list.
- **Edit tasks** — Use the Edit button to update a task through a browser prompt.
- **Delete tasks** — Remove individual tasks with the Delete button, added as a stretch goal.
- **Input checks** — Empty or whitespace-only tasks are rejected with an alert. Blank edits and cancelled prompts leave the existing task unchanged.
- **Browser storage** — Tasks are saved after additions, edits and deletions, then restored on page load.
- **Input reset** — After adding a task, the input clears and regains focus for the next entry.

## Built with

- **HTML5** — Dashboard structure, task input and task list.
- **CSS3** — Tutor-provided dashboard styling and Flexbox layout.
- **JavaScript** — Task creation, editing, deletion, input checks and browser storage.
- **Google Fonts** — Roboto typography, with a sans-serif fallback.

The application uses plain JavaScript without Bootstrap, jQuery or other JavaScript libraries. No backend or build step is required.

## How to use

1. Open the Live Page link at the top of this README.
2. Enter a task in the sidebar input and click **Add Task**.
3. Click **Edit** beside a task to change its text, then confirm the prompt.
4. Click **Delete** beside a task to remove it immediately.
5. Refresh the page to see your saved tasks restored.

Tasks are stored locally in the browser for this site. They are not synced between browsers or devices, and clearing the site's browser storage removes them.

## Running locally

1. Clone the repository or download and extract its ZIP file.
2. Open the project through a local development server, such as Live Server in VS Code.
3. Open `index.htm` through that server.

A local server provides a consistent site address for browser storage. The entry file is named **`index.htm`**, rather than `index.html`.

An internet connection is needed to load the Google font; the page uses its fallback font if it is unavailable.

## Project structure

```text
Fourth.Project-Javascript/
├── index.htm                     # Dashboard and task list structure
├── readme.md                     # Project documentation
└── assets/
    ├── style.css                 # Dashboard styling
    └── w4assignment-script.js    # Task actions and localStorage
```

## Current scope

The working functionality is the task list. The Overview, Analytics, Reports, Settings and Logout items are visual placeholders. The Statistics, Recent Activity and Performance widgets also contain placeholder text.

Tasks can be created, edited and deleted. A completed-task status is not implemented in this version.

## Learning focus

- Reading and trimming user input.
- Creating and updating page elements with the DOM.
- Handling button clicks and browser prompts.
- Organising behaviour into reusable functions.
- Using arrays and JSON to save and restore task text with `localStorage`.

## Future plans

Revisit the project in version two to adapt the tutor-provided design and develop it further as time allows.

## Acknowledgements

The initial dashboard design was supplied by the tutor for the JavaScript assignment.

## Author

**Jason Dewhurst** — [VelzCode on GitHub](https://github.com/VelzCode)
