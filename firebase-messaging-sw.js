// firebase-messaging-sw.js

importScripts('https://www.gstatic.com/firebasejs/8.10.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.10.0/firebase-messaging.js');

// Configuração do Firebase (use as mesmas credenciais dos outros arquivos)
const firebaseConfig = {
  apiKey: "AIzaSyD1m0_V8sdXhQueR-8llIXB489cpoM8vBU",
  authDomain: "solarfirebase-bb98f.firebaseapp.com",
  databaseURL: "https://solarfirebase-bb98f-default-rtdb.firebaseio.com",
  projectId: "solarfirebase-bb98f",
  storageBucket: "solarfirebase-bb98f.firebasestorage.app",
  messagingSenderId: "480963796966",
  appId: "1:480963796966:web:47dbaf360f269af2dcc027",
  measurementId: "G-QSRE1XPK4S"
};

// Inicializa o Firebase
firebase.initializeApp(firebaseConfig);

// Habilita persistência offline para o Realtime Database
firebase.database().enablePersistence()
  .catch((err) => {
    console.log('Erro na persistência offline:', err);
  });

// Configuração de mensagens (opcional)
const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
  console.log('[firebase-messaging-sw.js] Received background message ', payload);
  
  // Customize sua notificação aqui
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
    icon: '/icon.png'
  };

  return self.registration.showNotification(notificationTitle, notificationOptions);
});