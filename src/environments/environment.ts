// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
import * as admin from 'firebase-admin';

export const environment = {
  production: false,
firebase: {
  apiKey: 'AIzaSyBU4V7viJWvLgC-snqGH7nU1nbdSucG6TI',
  authDomain: 'buseinesscardreader.firebaseapp.com',
  databaseURL: 'https://buseinesscardreader.firebaseio.com',
  projectId: 'buseinesscardreader',
  storageBucket: 'buseinesscardreader.appspot.com',
  messagingSenderId: '1013747302742',
  appId: '1:1013747302742:web:fc7d2a9c46e49a4c7556f7',
  measurementId: 'G-SHK8X6PTFB'
},

// fireAdmin: {
// })
// },

GOOGLE_APPLICATION_CREDENTIALS: {
    type: 'service_account',
    project_id: 'buseinesscardreader',
    private_key_id: 'dc6197e0d0e63f39168528c03834e6c7b1ecab80',
    private_key: 'MIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQCfCVHgxjBYip4P\n0pj41jvEbhXFAvKVNVtHbfrwv3a7QG7OUhu6baTFHw/SiOLzl8lJ4iG+Un5YiBoY\niLFew8fcUxekrBtKooKVH5VLBQeOq1Gt6fmiXYspI6F16MyyMG3CUmYqcvizbyU0\nZnFgN2Q+jMzp8xJdaocT9IIbYlJwDYDqq0eaZUiSXdq9Jlzq5qID8vJKvv2u/xcR\n0xLZjtJGzu3148id2s2/UGL/e1sgoXuR8R4G/Fw13eNaUcabzYSk87BN14zaLMQn\noKh5bygRFZ+RXekzcdhu3oN4mWmsv1DqVHBhWOHO+eAL781BH/nJpmt7N5M5pxqN\ncKQ4Z0WPAgMBAAECggEACLJ5x9EO08jA3ByoQPN2UUez6RJAMei5FS7uijvuQk9D\nwAS9f3R/jkgklV7nCmtClsfHEKFyR2UqCC1xhb0vMN1abab71xkMCxuvDms3/pVf\n4iLpg/eZpKZOLiSNDTGYzweyjp+6+hUZ88Omb5yX3tPUYPbqCjHJMU4tz1GRMI92\nTs4AjkTEabv8IJajwu3sTLPnB2VwGihRo2EUVgh2RsMYHZW2TVIIkX0cjT1g/X46\nucTrFCd31VtYA0Am3JPxXFfcgZuAIqmpehWliByIamRJfO+i2edJTPSB7/phrjxA\njyAGJ2tbLFjXItDwlfeH3EdmYpjSGW49V6iLPtNQAQKBgQDfOZPFrOw+euo8tQse\nRyxOh0iF4PZL1Bc+ijSEMc22sK/fwH5/GZEwORoScKGO/GRLP6E6sFeH/YJsRQ54\nscqZqQqa/+hOTqQ7m73jqdyA9rsOTwgv6lm+LpjQUQWvC0BqJymWzposrjwoHZlB\n5sMLcVuBKCR9DrVjnc3GsZAsvQKBgQC2YxHWw/MiMtoORsQTq5uGKBRxUglNUAS3\nsbYBk2lfEgX+KPq5TNXEITwrP0jH77ksUlZmHnZCKUXwU4lwbvQ1P9K8oMqMY/nz\ntRdeHSPCCXJKUIpPdhWWhQAQjGlTKIAhYNcLU8eqSr14PcLfblrM7g9L5WrASuuE\nOqTxkl8uOwKBgQCvGasg1JQ8Lo6vMBSYm5vVvajV27FXqfbRx/eJ+sczF0XeblDL\nwnJxMVmSPWd9kd3aaP8/2jPPKLy10TWY113lSwRWsYa4ZlfNqk052HRvdRsmDjiN\n3XaoCEU2o1eiB2Fv42hsM4QcqE/n58/gMfOtdi4hEiwNLQx8J7zSr1Y4wQKBgFdr\nHL3Hpd2aahG1sX2MHzsqMsIuA+9ejyRMtWQD99ltlhnAIox2W29qTqCb8JKEQEkS\nHf9MUnpbtf3+zD1rsPlk4ekvWGX59W/uOIkPhngWdwVPnTuA6c//Z4yHAGSvYNqe\nw/PV8DmbIT1kvObCyhq3b/V8vLH2NvRl93EiKyTJAoGAVfqK0+EnMHSbzeRD+2ts\nOs+vpOZSy4D4UmXeK2b/nyS14vGyLm6Si1+SUSMZVo/t0WNziJZAKPXmHbVrs4JW\nThd8NGBMIFH722o+fxCBk5KJQgVfBVBvYD89CEFsdxXUh96gBsdM4nRHw7dqQ+pm\n1vYtXgaw8mAfYwE0xw54JlQ=\n-----END PRIVATE KEY-----\n',
    client_email: 'visionapi@buseinesscardreader.iam.gserviceaccount.com',
    client_id: '103667549357214793679',
    auth_uri: 'https://accounts.google.com/o/oauth2/auth',
    token_uri: 'https://oauth2.googleapis.com/token',
    auth_provider_x509_cert_url: 'https://www.googleapis.com/oauth2/v1/certs',
    client_x509_cert_url: 'https://www.googleapis.com/robot/v1/metadata/x509/visionapi%40buseinesscardreader.iam.gserviceaccount.com'
  }
};

// {
//   "type": "service_account",
//   "project_id": "buseinesscardreader",
//   "private_key_id": "0da5fd54f79182d1e64519220e33ffa4a7875211",
//   "private_key": "-----BEGIN PRIVATE KEY-----\nMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQC8E5oSw0vQP8Xi\nUZXB1142+akZ5+3lVl+dCt67QEsnB9+DPvN01GmHkhQI7m1EIxKQ5cGZN1DWXDkd\nPOn+QtA4yp6ybQ02WsUIGlULWnOFGPUdA8ka3bfJT7O9pkMfqz+KYxKM53xlkXS3\njshFo49+TZTabWtxYMKFkD55B2GOB8tYlI0fueK23AbZS7LS3kv9Es5NOTiDUbR0\n7XCI1NwAZB3VpAKbvR90e6hfdGzKRsmH+a5FosFd//LAZXmNtgNzRrhHPg7gN8Hq\n85LPfAmRpQ1yrRw3N5ddYyoD+26bwX34uVR5Z5G2juF/G3iTJ4LBlGxL2tb8BXAq\n3o+PJI5rAgMBAAECggEAJBJYXxfg3wiUMfN21w4w7jdVBPh0KqO1w991V5GduFcs\nubXlqLcipFNSj2H3R/W4Fl1Sk8nFsc9PTvnDYTY8TGAkLtF2ksG2/3ZZcEuBU3o1\nbMKwm/wBR1WHgiy0vAqyrZ6RzL+LHsnWimwSojScDVvg3EHXNRAbTtWa/ch6H+yv\nVUZEQXgNIuOjw0lGqOehqyCUtUtSQlqWjaYHe+wQusg3KewYuDqm8CqEk+lYDze7\nFLLGtv9Hb6OeYgkNjj1RA1ZOVdVECzuV9CKZyOW4fcl7l6yF8vZPZYZY+n6DdGkT\nblsg8ffJZ2C8cZmFYI5TbcwoS4Sk3B3x5j6OB4Jk4QKBgQDtv1aL9NbcL4pc4mjU\nWvAeMwUmyFqf6IyRJT3W0HSDpDVIw0wc0ebBtV/1sErNIu8kmC4UJLsDg0/t8o0h\n/O7+DKZQgqRuWqG9nHv/ZAq5+M1cXa4Q3JcgYd9/xirHoMdQ3V9TtN5im9QocvZK\nO67fRe51JUup8SBAgFHrNQG7IQKBgQDKhAnTBZbKYwJ29RU8s6kAbV6LWBpPdCsB\nEebVGbp8P9qYs6cpgu7fyr+qcoMQm0JLOPnbU8BAd8uvwnDlvWyJX9aELUCtfteL\nBzPjeKZ9pWjMEzEC/madqY2yEMYssyxx0MRsYjshiWt9Vd+mPT6yCu/YDqPHh4DJ\ntNNJ6YUECwKBgDUwZ2ZsYl1kbWoWZSmNJsc61t40WMIJvtkCIfGbNVX2OM2Mk8ym\n0R9pOoy24iU+uY3QVg6/oO9KQ2mSqCyAb996aQL+F1dxA1puVfdvJE8y8I7HjpfL\nIixmeSAW7581wyG+RQNvJYmeHzrlbWByNc9Rz+V5cJIWlgaYLruWYkrBAoGBALKj\nek8MtRDd+YSZeBxNlpxr3WQpWTwRCwYslmQQB/ImGVttzdzORIxgOmXOEVMKwZW9\nMpmH7SRxB9mIOTJOv3kGcyGxEUZ5hwR6XAkhmitnR2QM4cT0R+x3bihOp6Eyg9f6\nAephVCunHow2vcvUZoODJkJ913bgTnie62pddRo1AoGBAOE3OeBnv5WtnRc71Mq9\nK+TsChvaBV1/lY30CXVfnvlEk7HyYPSVSnlZAV3RDNqqRl2rEnKT4WP8Ja1MCjl8\nl632FIkutlftnIUR1H4Iff93+8KUQ1XOUlzTOVUasgmf8TAICjdTSkyvUXM9DTAr\nstXWOb03ZLcb9B/vTlg8RRjH\n-----END PRIVATE KEY-----\n",
//   "client_email": "buseinesscardreader@appspot.gserviceaccount.com",
//   "client_id": "101235478207981388892",
//   "auth_uri": "https://accounts.google.com/o/oauth2/auth",
//   "token_uri": "https://oauth2.googleapis.com/token",
//   "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
//   "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/buseinesscardreader%40appspot.gserviceaccount.com"
// }

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
