# SPOTIBAI – Student Companion App

SPOTIBAI is a mobile Student Companion app built with **React Native** and **Expo**. A student enters their name, lands on a personalized dashboard, and can quickly open their subjects, assignments, class schedule, and the developer profiles.

> **Group 2 • BSIT-4C** – Coding Group Project (Mobile Application Development)

---

## Features

- **Welcome screen** – name input with live validation hint and a responsive layout (two columns on tablets/web, one column on phones).
- **Dashboard** – personalized greeting, live date and time clock, and quick access cards.
- **My Subjects** – list of current subjects with code, title, and teacher.
- **Assignments** – tap an assignment to mark it as done; shows a completed count.
- **Schedule** – class schedule from Monday to Saturday.
- **Developers** – tap a profile to view Student ID, course, year level, section, and email.

## Tech Stack

| Technology | Purpose |
|---|---|
| [React Native](https://reactnative.dev/) | Cross-platform mobile UI |
| [Expo](https://expo.dev/) (SDK 54) | Tooling and runtime (Expo Go) |
| [Expo Router](https://docs.expo.dev/router/introduction/) | File-based navigation |
| TypeScript | Typed props, state, and data |
| `@expo/vector-icons` (Ionicons) | Icons |

---

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (LTS version) and npm
- [Git](https://git-scm.com/)
- A code editor such as [VS Code](https://code.visualstudio.com/)
- **Expo Go** app on your Android or iOS phone (from the Play Store / App Store)

### Installation

```bash
# 1. Clone the repository
git clone https://github.com/<your-username>/<your-repo-name>.git

# 2. Go into the project folder
cd <your-repo-name>

# 3. Install dependencies
npm install
```

### Run the app

```bash
npx expo start
```

A QR code will appear in the terminal.

- **Android:** open **Expo Go** and scan the QR code.
- **iOS:** open the **Camera** app, scan the QR code, then open it in Expo Go.
- **Web:** press `w` in the terminal to open it in the browser.
- **Android emulator / iOS simulator:** press `a` or `i` in the terminal (requires Android Studio / Xcode).

> Your phone and computer must be on the **same Wi-Fi network**.

### Useful commands

| Command | Description |
|---|---|
| `npx expo start` | Start the development server |
| `npx expo start -c` | Start and clear the cache (fixes many errors) |
| `npx expo start --tunnel` | Use a tunnel if the QR code does not connect on the same Wi-Fi |
| `npm run android` | Open on an Android emulator/device |
| `npm run ios` | Open on an iOS simulator (macOS only) |
| `npm run web` | Open in the browser |

> **Warning:** do **not** run `npm run reset-project`. It is part of the Expo starter template and it moves or deletes the project's screens.

---

## Project Structure

```
app/                      Screens and routing (Expo Router)
  _layout.tsx             Root Stack navigator and dashboard header
  index.tsx               Welcome screen        -> /
  dashboard.tsx           Dashboard             -> /dashboard
  subjects.tsx            My Subjects           -> /subjects
  assignments.tsx         Assignments           -> /assignments
  schedule.tsx            Schedule              -> /schedule
  developer.tsx           Developers            -> /developer
components/               Reusable UI components
  welcomehero.tsx         Hero panel on the welcome screen
  clock.tsx           Live date and time (useEffect + cleanup)
  screen.tsx              Shared screen wrapper (scroll, title, back button)
  infocard.tsx            List card for subjects, assignments, schedule
  accesscard.tsx     Dashboard shortcut card
  developercard.tsx       Developer profile card
constants/                Shared values and data
  colors.ts               Color palette
  data.ts                 Subjects, assignments, schedule, quick access
  developers.ts           Developer profiles
assets/images/            Logos, backgrounds, and photos
```

## Screens and Navigation

| Screen | Route | Notes |
|---|---|---|
| Welcome | `/` | Sends the typed name to the dashboard as a route parameter |
| Dashboard | `/dashboard` | Reads `name` with `useLocalSearchParams` (falls back to "Student") |
| My Subjects | `/subjects` | Rendered from `constants/data.ts` |
| Assignments | `/assignments` | Tap to mark as done (`useState`) |
| Schedule | `/schedule` | Rendered from `constants/data.ts` |
| Developers | `/developer` | Tap a profile to view details |

## Concepts Applied

- React Native core components: `View`, `Text`, `TextInput`, `TouchableOpacity`, `Image`, `ScrollView`, `KeyboardAvoidingView`
- State management with `useState`
- Side effects with `useEffect` (dependency array and cleanup functions)
- Event handling (`onPress`, `onChangeText`, `onFocus`, `onBlur`)
- File-based navigation with Expo Router (`Stack`, `router.push`, `router.back`)
- Passing data between screens with route parameters
- Reusable components, props, and lists with `.map()`
- Responsive layout with `useWindowDimensions`

---

## Troubleshooting

- **QR code does not connect:** make sure the phone and computer share the same Wi-Fi, or run `npx expo start --tunnel`.
- **Unexpected errors after pulling changes:** run `npm install`, then `npx expo start -c`.
- **"Unable to resolve module" for a component:** import paths are case-sensitive on some systems. Make sure the file name and the import match exactly (for example `welcomehero` vs `WelcomeHero`).
- **Expo Go version mismatch:** update Expo Go to the latest version; this project uses Expo SDK 54.

## Planned Improvements

- Load the subject list from a REST API with `fetch` inside `useEffect`, including loading and error states.
- Replace placeholder data (student IDs, emails, due dates) with real data.

## Team

**Group 2 • BSIT-4C**

- Dyn Kenji Mata
- Gabriel Manco
- Jurengel Lavador
- Kate Franz Barina
