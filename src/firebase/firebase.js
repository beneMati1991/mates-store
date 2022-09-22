import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc, getDoc, getDocs, doc } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.API_KEY,
  authDomain: "coderhouse-ecommerce-145a5.firebaseapp.com",
  projectId: "coderhouse-ecommerce-145a5",
  storageBucket: "coderhouse-ecommerce-145a5.appspot.com",
  messagingSenderId: "497724416578",
  appId: "1:497724416578:web:c4019eb2c135270b0143db",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore();

async function cargarBaseDeDatos  () {
  const promise = await fetch('./json/itemData.json')
  const productos = await promise.json()
  productos.forEach(async (item) => {
      await addDoc(collection(db, "items"), {
          title: item.title,
          description: item.description,
          price: item.price,
          categoryId: item.categoryId,
          stock: item.stock,
          pictureUrl: ""
        });
  })
}

const getItem = (id) => {
  getDoc(doc(db,"items",id))
}

const getItems = () => {
  getDocs(collection(db,"items"))
}

export {db, app, getItem, getItems, cargarBaseDeDatos}