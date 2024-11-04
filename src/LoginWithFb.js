import React from 'react'
import './LoginWithFb.css';

const LoginWithFb = () => {
  return (
    <>
      <div className='mainContainer'>

        <form>

          <div style={{ marginTop: '20px' }}>
            <img src='https://th.bing.com/th/id/OIP.DexBeSiGPUP4igHscKierwHaCi?rs=1&pid=ImgDetMain' alt='' style={{ height: '', width: '200px' }} />
          </div>

          <div className='text'>
            <p>Sign up to see photos and videos from your friends.</p>
          </div>



          <div className='fbButton'>

            <button className='imageDivAndText'>
              <div className='imgDiv'>
                <img src='https://upload.wikimedia.org/wikipedia/commons/e/ee/Logo_de_Facebook.png' alt='' style={{ height: '20px', width: '20px' }} />
              </div>

              {/* <div className='logoText'><li><Link to='/LoginWithFb' style={{ textDecoration: 'none' }}>Log in with Facebook</Link></li></div> */}
              <div className='textDiv'><p>Login with Facebook</p></div>
            </button>

          </div>



          <div>

            <div className='lineDiv' style={{ marginLeft: '28px', marginRight: '200px' }}>
              <hr></hr>
            </div>

            <div className='orText' style={{ marginTop: '-28px' }}>
              <p>OR</p>
            </div>

            <div className='lineDiv' style={{ marginLeft: '193px', marginRight: '30px', marginTop: '-23px' }}>
              <hr></hr>
            </div>



          </div>


          <div className='inputsDiv'>
            <input className='nameDiv' placeholder='Mobile number or email' type='text' />
            <input className='passwordDiv' placeholder='Password' type='password' />
            <input className='fullName' placeholder='FullName' type='text' />
            <input className='userName' placeholder='username' type='text' />
          </div>


          <div className='firstText'>
            <p className='firstTextData'>People who use our service may have uploaded</p>
            <p className='firstTextDataExtra'>your contact information to Instagram. <span> Learn More</span></p>
          </div>

          <div className='secondDiv'>
            <p className='secondDivData'>By signing up, you agree to our <span>Terms , Privacy Policy and Cookies Policy</span> .</p>
          </div>

          <div className='buttonDiv'>
            <butto>Sign up</butto>
          </div>
        </form>
      </div>

      <div>

        <div className='secondContainer'>

          <div className='haveAnAccount'>
            <p className='haveAnAccountText'>Have an account? Log in</p>
          </div>

          <div>
            <p className='getTheAppText'>Get the app.</p>
          </div>


          <div className='imageDiv'>

            <div className='figOne'>
              <img src='https://th.bing.com/th/id/OIP.GZhmkG200Ppz-ezObC3JfQHaCi?w=2598&h=891&rs=1&pid=ImgDetMain' alt='' style={{ height: '50px', width: '170px' }} />
            </div>

            <div className='figOne'>
              <img src='https://th.bing.com/th/id/OIP.TG7rJo1pUewli3FfEQCyPgHaCr?rs=1&pid=ImgDetMain' alt='' style={{ height: '44px', width: '140px', marginTop: '2px' }} />
            </div>

          </div>
        </div>
      </div>

      <div className='footerBar'>
      <div>Meta</div>
      <div>About</div>
      <div>Blog</div>
      <div>Jobs</div>
      {/* <div>Jobs</div> */}
        <div>Help</div>
        <div>API</div>
        <div>Privacy</div>
        <div>Terms</div>
        <div>Threads</div>
        <div>Meta Verified</div>
        <div>English</div>
        <div>© 2024 Instagram from Meta</div>

        </div>

        <div className='secondFooterBar'>
        <div>English</div>
        <div>© 2024 Instagram from Meta</div>
        </div>


    </>
  )
}

export default LoginWithFb