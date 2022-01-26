import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyATTovTXC_gI_RjoRu-F541LWqKQNQhQJ4",
    authDomain: "todo-app-crud-ba321.firebaseapp.com",
    projectId: "todo-app-crud-ba321",
    storageBucket: "todo-app-crud-ba321.appspot.com",
    messagingSenderId: "546826819585",
    appId: "1:546826819585:web:bf3a108661b56c19f38800"
  };

  const app = initializeApp(firebaseConfig)
  const db = getFirestore(app)

  export { db }