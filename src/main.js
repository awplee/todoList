/* 
   Programme Code:   IT524120P
   Programme Name:   PC in Stack Web Development
   Student Id:       214083118 
   Student Name:     Lee Wai Po
   Submission Date:  26 Mar 2022
   Course Work:      IT524048Q Full-stack Web Development Module
                     Lab 3
   Script Id:        main.js
   Description:      It is the entry point to the application
   Requirement:      To let you familiar with components and prop drilling, 
                     let’s update the todo app based on the previous workshop:

                     0. Setup a todo state object with add feature.
                     1. Add a new ToDoTask.vue in components folder which should be able to input a task 
                        through a textbox and submit by a button.
                     2. Add a new ToDoList.js in components folder to list the items in the Todo list.
                     3. Once the user types a task in the textbox and click the submit button, the item will 
                        add to the todo list and show in the list on screen. 

                     Advanced Task
                     Try to modify the layout and implement with remove items.
*/
import { createApp } from 'vue'
import App from './App.vue'
import store from './store'

import '../src/css/todoList.css'

createApp(App).use(store).mount('#app')
