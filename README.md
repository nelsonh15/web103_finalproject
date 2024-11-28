# interview.ai

CodePath WEB103 Final Project

Designed and developed by: Nelson Huang, Hamza Kurdi, Darryl Nurse

## About

### Description and Purpose

The app is aimed towards job seekers who want to prepare for interviews for any type of positions they are applying for. Instead of a human-to-human interaction, the app will introduce an AI that plays the role of the interviewer and it will simulate an interview environment, which can provide self-learning and personal growth for the user.

### Inspiration

Interviewing for a job position can be very complex and it may take many months for a person to prepare. One can seek interview practice with a professional from the industry or from a program that specializes in these interviews. However, many people may not have access to these networks. This app will make it easier for people to gain quality interview practice with the use of an AI-powered chatbot, which users can access at any time of the day.

## Tech Stack

Frontend: React, NextJS, Material UI, shadcn/ui

Backend: Neon, Drizzle, Gemini API, OpenAI API, ElevenLabs, Groq API

## Features

### ✅ Relational database connected through the cloud

The app will utilize a relational database called Neon, so that it can store users' info like their interview sessions, potential questions present in the real interviews and more.
![database](https://github.com/user-attachments/assets/6194c3c2-365e-4e1e-932e-e05d3e403c8b)


### ✅ Database reset feature

The app has the ability to reset the database to its default state. The default state will include the tables: users, interview, feedback, and user_performance. 
![db_reset](https://github.com/user-attachments/assets/2c1ac011-0a9f-4f61-b6ee-970697443849)

### ✅ Login Feature

The app will utilize a login page in order to allow users to access personalized content. In addition, users can login to the app with their GitHub credentials.
![login](https://github.com/user-attachments/assets/e6691112-80a4-4dbe-8de9-980076dc557e)

### ✅ Interview Sessions

The interview session will include a set number of questions for a particular job position/description with a certain years of experience - all of which the users can input on their own. The questions will be generated by an AI model in the backend based on those inputs. There will be a relational database that stores the user's data at the end of each interview session. Users will be able to navigate through each question and answer the questions by typing their responses through a text field or through the speech-to-text feature. Once they submit their responses, they cannot resubmit again. The interview session will end when they click on the "End Interview" button or when the timer runs out.
![interview_session](https://github.com/user-attachments/assets/7c233d68-d044-448b-8d83-544f4223748a)


### ✅ Interview History and Analytics

This feature includes a dashboard where users can see their past interview sessions, view the feedback of their responses, and edit/delete the names of their interview sessions. Users can also filter interview sessions based on the session name, job position or years of experience. In the feedback section, the user can see the feedback they receieved from the AI model and they will also be rated by their interview performance through an AI-generated score. There will also be a database in the backend that stores this data, so that it can be easily retrieved for the frontend. 
![feedback](https://github.com/user-attachments/assets/8043074b-b8c4-47ea-8c8c-66606f88fd51)


### ✅ AI-powered Interview Feedback

This feature will provide AI-generated feedback for the user at the end of each interview session. The feedback will analyze the user's responses and users will be provided with an AI-generated response regarding their interview responses, so that users know how they can answer the questions better. The user's responses and AI-generated responses will be saved in the database as well for easy retrieval to the frontend.
![ai_feedback](https://github.com/user-attachments/assets/a04501ef-de7f-4c42-88cf-f1ee1b542248)


### ✅ Text-to-speech/Speech-to-text Feature

Users have the option to listen to the questions and users can construct their responses with their voices in the interview session. The text-to-speech feature is developed with ElevenLabs and the speech-to-text feature is developed with Groq API. This feature would allow the app to simulate a real interview environment as accurately as possible.
![speech](https://github.com/user-attachments/assets/38de3c74-1294-4a79-9a50-6c6af934711f)


### [ADDITIONAL FEATURES GO HERE - ADD ALL FEATURES HERE IN THE FORMAT ABOVE; you will check these off and add gifs as you complete them]

## Installation Instructions

[instructions go here]
