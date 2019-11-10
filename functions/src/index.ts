// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript
//
// export const helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });

const functions = require('firebase-functions');
const admin = require('firebase-admin');
const vision = require('@google-cloud/vision');

admin.initializeApp();

const visionClient = new vision.ImageAnotatorClient();
const bucketName = 'gs://buseinesscardreader.appspot.com';

// ONCHANGE NO LONGER SUPPORTED SEE DOCS LINK BELOW FOR UPDATED FIREBASE API
 //  https://firebase.google.com/docs/functions/beta-v1-diff#storage
 // https://firebase.google.com/docs/functions/get-started

export const imageTagger = functions.storage.bucket(bucketName)
    .onChange( async event => {
        const object = event.data;
        const filePath = object.name;
        const imageUri = 'gs://${bucketName}/${filePath}';

        // const docId = filePath.split('.jpg')[0];
        const docId = 'CardTest1';
        const docRef  = admin.firestore().collection('businessCards').doc(docId);

        const textRequest = await visionClient.documentTextDetection(imageUri)
        const fullText = textRequest[0].textAnnotations[0]
        const text =  fullText ? fullText.description : null

        const data = { text };

        return docRef.set(data);
    });