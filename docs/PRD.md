# Tonnage - MVP

## Product Requirements Document

By Mikey Petty

### Goals and Objectives

The goal of Tonnage is to provide a free and easy way to for Gym Rats to track workouts over time. The philosophy is simple: provide a batteries included app that is easy to use on while sitting on the bench AND still allows for maximal customization. We want you to be able to track your workouts regardless of your goals. Tracking workouts should be seamless, easy to use, and as detailed as you want to make it.

### Stakeholders

- Users of the Application, Gym Rats
- Mikey Petty, development cost

### Assumptions

- Gym Rats want a simple to use tool with the ability to track workouts over time
- Gym Rats want the ability to configure as much about the tool as possible, but not be forced to do so
- Gym Rats do not need to be hand held through the process of creating a workout plan
- Gym Rats want the tool to be seamless and obvious to use without much guidance

### User (Gym Rat) Stories

- As a Gym Rat, I want to download this onto my phone and start tracking my workout without needing a tutorial
- As a Gym Rat, I want to see how much total weight I lifted (tonnage) after I complete a workout.
- As a Gym Rat, I want to see metrics on my lifts over time.
- As a Gym Rat, I want the app to track my 1RM on various exercises. I want the app to automatically calculate my 1RM based off of a previous set or sets.
- As a Gym Rat, I want the ability to create complex workouts using a variety of set tracking methods, including: supersets, warm-up sets, drop-sets, and AMRAP sets.
- As a Gym Rat, I want an extensive default list of movements and exercises. I want to be able to add custom notes and cues to these exercises for reference later.
- As a Gym Rat, I want the ability to add custom exercises.
- As a Gym Rat, I want the ability to add modifiers to various exercises, including: grip width, grip orientation, range of motion, weight type (machine, dumbbell, etc...), straps used, foot stance, and incline / decline angle. I also want the ability to add custom modifiers to my workouts.

### Feature Requirements

In the initial design of this app, we should err on the side of frictionlessness & simplicity. In order to get the project started on the iteration process, advanced features will be ignored in lieu of simpler features. We should build these features with extensibility and re-interpretation in mind, to the maximum degree possible.

1. This app should be designed mobile first. Gym rats do not bring computers to the gym.

2. There should be multiple tabs in the initial version of the app.

- **Routines** - a list of a Gym Rat's routines
- **Stats** - A place to view previous workout & 1RM stats. It will initially be a "Coming Soon" page.
- **Settings** - A place to manage the settings of the app. Will initially be a "Coming Soon" page.

3. There should be a "Start a Workout" user flow, separate from the normal flow of the application. This will be where Gym Rats log exercises, sets, reps, RPE, etc... in the middle of a workout.

4. Once a workout has ended, there should be a UI for users to updated their 1RM given app suggestions.

5. There should be a place to add custom exercises and define whether it is Dumbell, Barbell, Bodyweight, Timed, or a Machine movement.

### Design

_Add screenshots with UI mockups_

### Out of Scope

In this initial step, we should avoid the following

- Gym Rats cannot add modifiers to custom exercises
- Gym Rats cannot create an account or sign in
- There is no startup / landing page that is separate from the initial page
- Gym Rats cannot track all types of sets: circuits, myoreps, partial reps, rest-pause sets, etc...
- Gym Rats cannot merge duplicate exercises
- 1RM changes logic after a workout

### Open Questions

- How much flexibility do Gym Rats want on tracking their sets? Are partial reps, rest-pause sets, circuits, etc... important?
- How important is it for users to sign up? Is there a significant cost to storing the data on a user's device?
- What are the best, obvious defaults for users of the app?
- While developing the initial prototype, how much flexibility should be taken into account for later features?
