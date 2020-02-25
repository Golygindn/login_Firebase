let app_firebase = {};
(function () {
    // Your web app's Firebase configuration
    const firebaseConfig = {
        apiKey: "AIzaSyDD4oeu8V4fGtPXvb_s0-BFadDODJd_psk",
        authDomain: "test-68c03.firebaseapp.com",
        databaseURL: "https://test-68c03.firebaseio.com",
        projectId: "test-68c03",
        storageBucket: "test-68c03.appspot.com",
        messagingSenderId: "615981432053",
        appId: "1:615981432053:web:903b1209ec7a6fbc8519bc",
        measurementId: "G-NM95G6DTJM"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

    app_firebase = firebase;


    const ui = new firebaseui.auth.AuthUI(firebase.auth());
    var uiConfig = {
        callbacks: {
            signInSuccessWithAuthResult: function(authResult, redirectUrl) {
                // User successfully signed in.
                // Return type determines whether we continue the redirect automatically
                // or whether we leave that to developer to handle.
                return true;
            },
            uiShown: function() {
                // The widget is rendered.
                // Hide the loader.
                document.getElementById('loader').style.display = 'none';
            }
        },
        // Will use popup for IDP Providers sign-in flow instead of the default, redirect.
        signInFlow: 'popup',
        signInSuccessUrl: 'main.html',
        signInOptions: [
            // Leave the lines as is for the providers you want to offer your users.
            //firebase.auth.GoogleAuthProvider.PROVIDER_ID,
            //firebase.auth.FacebookAuthProvider.PROVIDER_ID,
            //firebase.auth.TwitterAuthProvider.PROVIDER_ID,
            //firebase.auth.GithubAuthProvider.PROVIDER_ID,
            firebase.auth.EmailAuthProvider.PROVIDER_ID,
            //firebase.auth.PhoneAuthProvider.PROVIDER_ID
        ],
        // Terms of service url.
        tosUrl: 'main.html',
        // Privacy policy url.
        privacyPolicyUrl: '<your-privacy-policy-url>'
    };
    ui.start('#firebaseui-auth-container', uiConfig);
})();

