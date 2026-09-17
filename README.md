# Tamarix 🌱

**Put your phone aside. Give your life room to grow.**

Tamarix is a project for digital wellbeing built around a small physical companion and a simple gesture: put your phone away, choose an intention, and give your attention to something you want to nurture. Each completed session grows a plant in your garden.

This repository contains the **Tamarix web frontend**, built with React, TypeScript, and TanStack Router. It is currently an initial scaffold. The device firmware and Spring Boot backend live in separate projects.

## A garden for your attention

Attention is the soil from which our days grow. It nourishes a conversation, a meal, a night's rest, a new skill, and the quiet work of understanding ourselves.

Tamarix takes its name from the tamarisk. For this project, the plant represents attention that stays rooted while remaining flexible when the world pulls at it.

Habitual scrolling can feel like a climbing vine: almost unnoticed at first, then winding through the spaces we meant to leave for other things. With our eyes on the phone, we can stop listening to ourselves, to other people, and to our surroundings. The feed's algorithms choose what appears next; following along can leave us alienated from our own intentions. Tamarix invites us to decide what receives our care.

The garden gives that choice a visible form. Its seven intentions make room for different parts of life: **Nourishment, Learning, Rest, Labour, Recreation, Attunement, and Covenant**. Some grow inward, through rest and reflection. Others grow outward, through making things, learning, and being present with others. Together, they form a garden that extends beyond the individual.

## A little distance, a pocket notebook

The physical ritual matters. Lay your phone face down, rest the StickS3 on its back, and leave both as far from you as possible, ideally in another room. Choose an intention on the stick and begin. The dedicated device lets you start a session without unlocking the phone and encountering its notifications. Distance adds a deliberate journey between an impulse and a check.

Keep a pocket notebook and a pen with you. When the urge to look something up appears, write it down: “How long does a platypus live?” A quick search can become tens of minutes moving from app to app or reel to reel, like a monkey swinging between vines. The notebook keeps the curiosity safe until you choose to explore it. You can return to what you were doing without losing the thought.

The reward can wait, too. At the end of a successful session, the firmware saves the harvest quietly. Its reward screen, sound, and synchronization wait until you return to the stick. There is room to stay with your book, your work, or your conversation for longer than the timer.

## What this means for the web experience

The frontend should carry the same respect for attention into every interaction. Its intended role is to offer a place to revisit the garden and reflect on the time given to these intentions.

These principles should guide its design:

- **Let the user choose when to return.** The garden can wait. Avoid prompts that manufacture urgency or pull someone back into the interface.
- **Make visits purposeful and finite.** Give each screen a clear purpose and a natural stopping point.
- **Keep growth connected to life outside the screen.** Plants and XP represent time spent nurturing an intention. Present them with care, without pressure to keep checking or collecting.
- **Leave room for every intention.** Rest, play, and time with others deserve the same care as study and work.
- **Use a calm, readable interface.** Clear language, accessible interactions, and restrained feedback should help people understand their garden and then leave it comfortably.

These are design commitments for the frontend as it develops. Garden views, session history, account management, and backend integration are not implemented yet.

## Current state

The repository currently provides:

- React 19 with TypeScript.
- TanStack Router with file-based routing and automatic code splitting.
- Vite for development and production builds.
- Router devtools and the starter Home and About routes.
- Plain CSS, without Tailwind.

The starter pages are placeholders for the Tamarix experience.

## Local development

Install dependencies and start the development server:

```sh
npm install
npm run dev
```

Vite uses port `3001` by default. Open the local address printed in the terminal.

Create a production build and preview it locally:

```sh
npm run build
npm run serve
```

The production output is written to `dist/`.

## Project structure

```text
src/
  main.tsx            React entry point and router registration
  routes/
    __root.tsx        Shared application layout
    index.tsx         Home route (/)
    about.tsx         Starter About route (/about)
  routeTree.gen.ts    Generated route tree
index.html            HTML entry point and base styles
vite.config.ts        Vite and TanStack Router configuration
```

Add routes under `src/routes/`. The router plugin updates `src/routeTree.gen.ts` during development and builds; do not edit that file manually.

The philosophy and physical ritual described here follow the Tamarix firmware project's README. This repository implements the web interface; sessions and motion detection run on the StickS3.
