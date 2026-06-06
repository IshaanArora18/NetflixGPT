import { useState, useRef } from 'react'
import { BACKGROUND_IMAGE_SRC_SET, BACKGROUND_IMAGE_URL } from './utils/constants';
import { validateDetails } from './utils/util';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from './firebase';

const SignUp = () => {
  const [isSignUp, setIsSignUp] = useState(true);
  const email = useRef<HTMLInputElement>(null);
  const password = useRef<HTMLInputElement>(null);
  const name = useRef<HTMLInputElement>(null);
  const [validationResult, setValidationResult] = useState<string | null>(null);

  const handleSubmit = () => {
    const emailValue = email.current?.value;
    const passwordValue = password.current?.value;
    const nameValue = name.current?.value;
    const validationResult = validateDetails(emailValue!, passwordValue!, isSignUp ? nameValue : undefined);
    setValidationResult(validationResult);
    if (!validationResult) {

      if (isSignUp && emailValue && passwordValue) {

        createUserWithEmailAndPassword(auth, emailValue, passwordValue)
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            setValidationResult(`Error ${errorCode}: ${errorMessage}`);
          });
      }
      else if (emailValue && passwordValue) {
        signInWithEmailAndPassword(auth, emailValue, passwordValue)
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            setValidationResult(`Error ${errorCode}: ${errorMessage}`);
          });
      }
    }
    else {
      console.error(`Invalid details. Please check your input: ${validationResult}`);
    }
  }
  return (
    <div className="bg-black min-h-screen relative overflow-hidden">
      {/* Background Image */}
      <img
        src={BACKGROUND_IMAGE_URL}
        srcSet={BACKGROUND_IMAGE_SRC_SET}
        alt="Background Image"
        aria-hidden="true"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Form */}
      <form onSubmit={(e) => { e.preventDefault(); handleSubmit(); }} className="flex flex-col gap-4 max-w-sm mx-auto mt-10 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-black/75 p-8 rounded-md z-10 md:p-16">
        <p className="text-2xl font-bold text-white">{isSignUp ? "Sign Up" : "Sign In"}</p>
        {isSignUp && (
          <input className="border border-gray-300 rounded py-2 px-4 bg-gray-700 text-white placeholder-gray-400" type="text" placeholder="Name" ref={name} />
        )}
        <input className="border border-gray-300 rounded py-2 px-4 bg-gray-700 text-white placeholder-gray-400" type="email" placeholder="Email" ref={email} />
        <input className="border border-gray-300 rounded py-2 px-4 bg-gray-700 text-white placeholder-gray-400" type="password" placeholder="Password" ref={password} />
        <button className="bg-red-600 text-white py-2 px-4 rounded cursor-pointer" type="submit">
          {isSignUp ? "Sign Up" : "Sign In"}
        </button>
        <p className="text-red-500">{validationResult}</p>
        <p className="text-gray-400">
          {!isSignUp ? "Don't have an account?" : "Already have an account?"}
          <span onClick={() => setIsSignUp(!isSignUp)} className="text-white hover:underline cursor-pointer ml-1">
            {isSignUp ? "Sign In" : "Sign Up"}
          </span>
        </p>
      </form>
    </div>
  )
}

export default SignUp