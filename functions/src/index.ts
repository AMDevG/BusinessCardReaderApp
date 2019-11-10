import * as functions from 'firebase-functions';

// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript
//
// export const helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });


import * as admin from 'firebase-admin';
admin.initializeApp();

// tslint:disable-next-line: no-implicit-dependencies
// import * as vision from '@google-cloud/vision';
// const visionClient = new vision.ImageAnotatorClient();

// const bucketName = 'gs://buseinesscardreader.appspot.com';

// export const imageTagger = functions.storage.bucket(bucketName).onChange( async event => {
//         const object = event.data;
//         const filePath = object.name;
//         const imageUri = 'gs://${bucketName}/${filePath}';

//         //const docId = filePath.split('.jpg')[0];
//         const docRef  = admin.firestore().collection('businessCards').doc('CardTest1');

//         const textRequest = await visionClient.documentTextDetection(imageUri)
//         const fullText = textRequest[0].textAnnotations[0]
//         const text =  fullText ? fullText.description : null

//         const data = { text };

//         return docRef.set(data);
//     });