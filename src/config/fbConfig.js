import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import 'firebase/analytics';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = {
	apiKey: 'AIzaSyCNQ_3ORMbIU7GkXgXoD1NO01mO5qZplPE',
	authDomain: 'marioplan-ad4d7.firebaseapp.com',
	databaseURL: 'https://marioplan-ad4d7.firebaseio.com',
	projectId: 'marioplan-ad4d7',
	storageBucket: 'marioplan-ad4d7.appspot.com',
	messagingSenderId: '807377247265',
	appId: '1:807377247265:web:aa421a9c465369c390d760',
	measurementId: 'G-E5CRX72YXM',
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();
firebase.firestore().settings({ timestampsInSnapshots: true });

export default firebase;
