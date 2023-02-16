import { auth } from "firebaseConfig";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { useAuthState } from 'react-firebase-hooks/auth';
import { useEffect } from "react";

export default function Autologin() {
  const [user, setUser] = useAuthState(auth);
  //Google singin provider
  const ggProvider = new GoogleAuthProvider();
  //Sing in with Google
  const loginGG = async () => {
    const logingg = await signInWithPopup(auth, ggProvider)
      .then(result => {
        const token = result.credential.accessToken;
        const user = result.user;
        console.log("User>>Goole>>>>", user);
        // userId = user.uid;
      })
      .catch(function (error) {
        console.error("Error: hande error here>>>", error.code);
      });
  };
  
  useEffect(() => {
    console.log(user);
  }, [user]);

  return (
    <>
      <div>
        <button id="btnGoogle" type="button" onClick={loginGG}>
          <span></span>Login with Google
        </button>
      </div>
      <div>
        <button id="btnFacebook" type="button" >
          <span></span>Login with Facebook
        </button>
      </div>
    </>
  );
}
