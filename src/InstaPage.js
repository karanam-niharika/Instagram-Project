import React from 'react'
import './App.css'
import { Link } from 'react-router-dom'
// import (/node_modules/bootstrap/dist/css/bootstrap.min.css);

const InstaPage = () => {
  return (
    <>

      {/* <div>InstaPage</div> */}
      <div className='mainForm'>

        <form>
          <div style={{ marginTop: '20px' }}>
            <img src='https://th.bing.com/th/id/OIP.DexBeSiGPUP4igHscKierwHaCi?rs=1&pid=ImgDetMain' alt='' style={{ height: '', width: '200px' }} />
          </div>

          <div>
            <input className='firstDiv' placeholder='mobile number,username or email' type='text' />
          </div>

          <div>
            <input className='secondDiv' placeholder='password' type='password' />
          </div>

          <div>
            <button className='buttonData'><b>Log In</b></button>
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




          <div className='fbLogo'>

            <div style={{marginTop:'10px'}}>
              <img src='https://upload.wikimedia.org/wikipedia/commons/e/ee/Logo_de_Facebook.png' alt='' style={{ height: '20px', width: '20px' }} />
            </div>

            <div className='logoText' style={{marginTop:'10px'}}>Log in with Facebook</div>
            {/* <div className='logoText'><li><Link to='/LoginWithFb' style={{ textDecoration: 'none' }}>Log in with Facebook</Link></li></div> */}


          </div>

          <div className='forgotPassword' style={{ marginTop: '10px' }}>Forgot password?</div>

        </form>

        <div className='dontHaveAnAccountDiv' >
          <p className='dontHaveAnAccount'>Don't have an account? <Link to='/LoginWithFb' style={{ textDecoration: 'none' }}>Sign up</Link></p>
        </div>

        <div>
          <p style={{ fontSize: '14px' }}>Get the app.</p>
        </div>


        <div className='figuresDiv'>

          <div className='figOne'>
            <img src='https://th.bing.com/th/id/OIP.GZhmkG200Ppz-ezObC3JfQHaCi?w=2598&h=891&rs=1&pid=ImgDetMain' alt='' style={{ height: '50px', width: '170px' }} />
          </div>

          <div className='figOne'>
            <img src='https://th.bing.com/th/id/OIP.TG7rJo1pUewli3FfEQCyPgHaCr?rs=1&pid=ImgDetMain' alt='' style={{ height: '44px', width: '140px', marginTop: '2px' }} />
          </div>

        </div>




        <div>

        </div>
      </div>


      <div className='footerSection'>

        <div>Meta</div>
        <div>About</div>
        <div>Blog</div>
        <div>Jobs</div>
        <div>Help</div>
        <div>API</div>
        <div>Privacy</div>
        <div>Terms</div>
        {/* <div>Locations</div>
      <div>Instagram Lite</div> */}
        <div>Threads</div>
        {/* <div>Contact Uploading & Non-Users</div> */}
        <div>Meta Verified</div>
        <div>English</div>
        <div>© 2024 Instagram from Meta</div>

      </div>

      <div className='secondFooter' style={{ marginTop: '10px' }}>
        <div>English</div>
        <div>© 2024 Instagram from Meta</div>
      </div>
    </>
  )
}

export default InstaPage