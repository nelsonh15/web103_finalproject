# interview.dev

CodePath WEB103 Final Project

Designed and developed by: Nelson Huang, Hamza Kurdi, Darryl Nurse

🔗 Link to deployed app:

## About

### Description and Purpose

The app is aimed towards aspiring software engineers who want to prepare for interviews that rely heavily on leetcode style coding problems, system design and behavioral. Instead of a human-to-human interaction, the app will introduce an AI that plays the role of the interviewer and it will simulate an interview environment, which can provide self-learning and personal growth for the user.

### Inspiration

Interviewing for a software engineering position can be very complex and it may take many months for a person to prepare. One can seek interview practice with a professional from the industry or from a program that specializes in tech interviews. However, many people may not have access to these networks. This app will make it easier for people to gain quality interview practice with the use of an AI-powered chatbot, which users can access at any time of the day.

## Tech Stack

Frontend: React, Material UI

Backend: Neon, Prisma, AWS, OpenAI API

## Features

### ✅ Relational database connected through the cloud

The app will utilize a relational database called Neon, so that it can store users' info like their interview sessions, potential questions present in the real interviews and more.
![database](https://github.com/user-attachments/assets/6194c3c2-365e-4e1e-932e-e05d3e403c8b)


### Database reset feature

The app has the ability to reset the database to its default state. The default state will include the tables: users, sessions, feedback, questions and user_performance. 

### Login Feature

The app will utilize a login page in order to allow users to access personalized content. In addition, users can login to the app with their GitHub credentials.

### Three Interview Prep (Behavioral, Technical, System Design)

The Technical Interview feature include a code editor, a random leetcode style problem (difficulty can be chosen by the user) and a timer (can be set by the user). The user can solve this problem with any programming language of their choice. There will also be a short followup question where users will have to choose what is the time and space complexity of their solution. There will be a relational database that stores the user's data at the end of each interview session. The data will include the user's time spent per question, topic of the problem, if the user successfully solved the problem and the quality of the user's responses, which can be determined with ChatGPT. Both the behavioral and System Design interview prep will feature a chatbot, where users will have to answer a set number of open-ended questions. Users can adjust the time and the number of questions they wish to proceed with the interview.

### Interview History and Analytics

This feature includes a dashboard where users can see their past sessions, track their progress, and identify areas where they are improving or need more focus. Some data this dashboard would contain would be the user's average time spent per question, topics most practiced and success rate, which can be calculated by the user's passed test cases / total test cases. Users will also be rated by their interview performance through a ChatGPT generated score for the behavioral and system design interviews. There will also be a database in the backend that stores this data, so that it can be easily retrieved for the frontend. 

### AI-powered Interview Feedback

This feature will provide AI-generated feedback for the user at the end of each interview session. The feedback will analyze code correctness, efficiency, and the quality of responses for the user's coding solution. Users will also be provided with ChatGPT generated feedback regarding their interview responses.

### Text-to-speech/Speech-to-text Feature

Users have the option to listen to the questions and users can construct their responses with their voices in the interview session. The text-to-speech feature will be developed with OpenAI's model called Whisper. This feature would allow the app to simulate a real interview environment as accurately as possible.

### [ADDITIONAL FEATURES GO HERE - ADD ALL FEATURES HERE IN THE FORMAT ABOVE; you will check these off and add gifs as you complete them]

## Installation Instructions

[instructions go here]
