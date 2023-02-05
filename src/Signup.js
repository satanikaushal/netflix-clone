import logo from './images/Netflix_Logo.png'

function Signup({onSignIn}){
    return( 
<>

<div  className="bg-[url('images/Netflix-bg.jpg')] bg-cover bg-no-repeat">
        <div className="backdrop-brightness-50 h-[150vh]">
      <nav className="flex">
        <img
          src={logo}
          alt="Netflix logo"
          className="w-36 sm:w-56 my-2 mx-5 saturate-200"
        />
      </nav>
      <div className="flex justify-center items-center md:h-[85vh] text-white">
        <form
          className="bg-black rounded-lg bg-opacity-70 flex flex-col px-8 sm:px-16 py-6 sm:py-14 h-full md:h-[85vh] md:w-[30vw]"
        >
          <h1 className="font-bold text-4xl mb-9">Sign In</h1>
          <input
            type="email"
            placeholder="Email or phone number"
            className="bg-neutral-800 mb-4 placeholder-gray-300 py-3 px-6 rounded-md"
            required
          />
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Password"
            className="mb-9 bg-neutral-800 placeholder-gray-300 py-3 px-6 rounded-md"
            required
          />
          <button type='submit'
            href="Home.js"
            className="bg-red-600 py-3 px-6 rounded-lg mb-2 flex justify-center hover:bg-red-800" onClick={onSignIn}
            >Sign In</button> 
          <div className="flex justify-between">
            <div className="flex space-x-2">
              <input type="checkbox" defaultChecked name="" id="" />
              <p>Remeber me</p>
            </div>
            <a href="/" className="hover:underline">Need help?</a>.
          </div>
          <div className="flex flex-col space-y-4 justify-center h-[100vh]">
            <p>
              New to Netflix? <span className="hover:underline">Sign up now.</span>
            </p>
            <p className="text-xs">
              This page is just a clone Sign Up page of the officical Netflix
              Website. You won't be able to login in to an account. So just
              click on Sign Up button and then you will be redirected to the
              Home sectio clone.<a href="/" className="text-blue-700">
                Learn more.</a>.
            </p>
          </div>
        </form>
      </div>
      <div
        className="flex w-full justify-center items-center text-white bg-black bg-opacity-70 h-[20%] sm:h-[25%] fixed bottom-0"
      >
        <div className="px-8 md:w-[60vw] flex flex-col space-y-6 sm:space-y-14">
          <div>Questions? Call 000-800-919-1694</div>
          <ul className="flex flex-wrap justify-between">
            <li>FAQ</li>
            <li>HelpCentre</li>
            <li>Terms of Use</li>
            <li>Privacy</li>
            <li>Cookie Preferences</li>
            <li>Corporate Information</li>
          </ul>
        </div>
      </div>
    </div>

    </div>
</>    )
}

export default Signup;