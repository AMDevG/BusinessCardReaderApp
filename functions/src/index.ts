// export const helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });

// ONCHANGE NO LONGER SUPPORTED SEE DOCS LINK BELOW FOR UPDATED FIREBASE API
//  https://firebase.google.com/docs/functions/beta-v1-diff#storage
// https://firebase.google.com/docs/functions/get-started
// https://github.com/firebase/friendlypix
// detectLandmarksGCS(bucketName, fileName) 

const functions = require('firebase-functions');
const admin = require('firebase-admin');
const vision = require('@google-cloud/vision');
admin.initializeApp();
const bucketName = 'gs://buseinesscardreader.appspot.com';
const testFileName = 'testCard1.png';
// [START vision_text_detection]
export const detectBCard = functions.https.onRequest(async (request: any, response: any) => {
    const client = new vision.ImageAnnotatorClient();
    // Performs text detection on the local file
    // const [result] = await client.textDetection(fileName);
    
    // Text Detection on Cloud Bucket
    const [result] = await client.textDetection(
    `gs://${bucketName}/${testFileName}`
    );
    const detections = result.textAnnotations;
    console.log('Text:');
    detections.forEach((text: string) => console.log(text));
  });


// TUTORIAL CODE FROM https://angularfirebase.com/lessons/google-cloud-vision-with-ionic-and-firebase/
// export const imageTagger = functions.storage.bucket(bucketName)
//     .onChange( async event => {
//         const object = event.data;
//         const filePath = object.name;
//         const imageUri = 'gs://${bucketName}/${filePath}';

//         // const docId = filePath.split('.jpg')[0];
//         const docId = 'CardTest1';
//         const docRef  = admin.firestore().collection('businessCards').doc(docId);

//         const textRequest = await visionClient.documentTextDetection(imageUri)
//         const fullText = textRequest[0].textAnnotations[0]
//         const text =  fullText ? fullText.description : null

//         const data = { text };

//         return docRef.set(data);
//     });

// TEST CODE FOR ON UPLOAD ========
//  exports.addMessage = functions.https.onRequest(async (request: any, response: any) => {
//     // Grab the text parameter.
//     const original = request.query.text;
//     // Push the new message into the Realtime Database using the Firebase Admin SDK.
//     const snapshot = await admin.database().ref('/messages').push({original: original});
//     // Redirect with 303 SEE OTHER to the URL of the pushed object in the Firebase console.
//     response.redirect(303, snapshot.ref.toString());
//   }); 
  //=============
