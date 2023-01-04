// src/firebase/firebaseConfig.ts
import { initializeApp } from 'firebase/app'
import { collection, getFirestore, CollectionReference } from "firebase/firestore"
import type { DocumentData } from 'firebase/firestore';
// This file connects our applicaiton to the Firebase backend

// Initialize Firebase App
const firebaseConfig = initializeApp({
  apiKey: "AIzaSyArwzJYJGE87vz5g4AeHpS9u1YCpdKol2M",
  authDomain: "oai-image-generator.firebaseapp.com",
  projectId: "oai-image-generator",
  storageBucket: "oai-image-generator.appspot.com",
  messagingSenderId: "552915681413",
  appId: "1:552915681413:web:9abefc7d91e525094769ec",
});

// Export Firestore incase we need to access it directly
export const firestore = getFirestore();

// db helper to type the db response
const createCollection = <T = DocumentData>(collectionName: string) => {
  return collection(firestore, collectionName)as CollectionReference<T>
}

// Import the model types
import type { Posts } from '@/types/Posts'

// Export all your collections
export const postsCol = createCollection<Posts>('posts')


console.log('Hello there, Firestore is operational!');




