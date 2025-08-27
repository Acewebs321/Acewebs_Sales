
  // Import Firebase SDKs
  import { initializeApp } from "https://www.gstatic.com/firebasejs/12.1.0/firebase-app.js";
  import { getFirestore, collection, addDoc, getDocs } from "https://www.gstatic.com/firebasejs/12.1.0/firebase-firestore.js";

  // Your Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyABG0FIHrmpJiOBX9UI6gcCm23Wa_WibAE",
    authDomain: "acewebs-sales-tracker.firebaseapp.com",
    projectId: "acewebs-sales-tracker",
    storageBucket: "acewebs-sales-tracker.firebasestorage.app",
    messagingSenderId: "970679325910",
    appId: "1:970679325910:web:7d29f1f63879ca058a2577"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);

  // Example: Add a test sales entry
  async function addTestSale() {
    try {
      await addDoc(collection(db, "sales"), {
        date: "2025-08-24",
        product: "Test Product",
        price: 500,
        customer: "John Doe",
        payment_status: "Paid"
      });
      console.log("✅ Test sale added!");
    } catch (e) {
      console.error("❌ Error adding document: ", e);
    }
  }

  addTestSale();
