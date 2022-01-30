import React, { useEffect,useRef,useState } from 'react'
import NET from 'vanta/dist/vanta.net.min.js'
import * as THREE from "three"
import { StickyNav } from 'react-js-stickynav'
import 'react-js-stickynav/dist/index.css'

import Header from './components/header'
import Profile from './components/profile'

import './App.css'

export default function App() {
  const [vantaEffect,setVantaEffect] = useState(0)
  const vantaRef = useRef(null)
  useEffect(
    () =>{
      if(!vantaEffect){
        setVantaEffect(NET({
          el:vantaRef.current,
          THREE,
          //  color: 0x37415f,
          //  backgroundColor: 0xf0620,
          // points: "10.00",
          // maxDistance: "40.00",
          // spacing: "20.00",
        }))
      }
    return () => {
      if(vantaEffect) vantaEffect.destroy()
    }
    },[vantaEffect]
  )

  const style = () => {
    return (
      <style jsx>{`
        .nav {
          transition: all 0.1s linear;
          position: fixed;
          width: 100%;
        }
        .scrollNav {
          transition: all 0.5s ease-in;
          background: #333;
          width: 100%;
        }
        .styl {
          padding-top: 80px;
        }
      `}</style>
    )
  }

  return (
    // <>
    // <div style={{height:"100vh",width:"100%"}} className='con' ref={vantaRef}>
    // {/* <Header></Header> */}
    // {/* <StickyNav length='40'><Header></Header></StickyNav> */}
    //   {/* {style()}
    //   <StickyNav length='40'><Header></Header></StickyNav> */}
    //   {/* <div className='styl'>
    //   </div> */}
     
      
    // </div>
    // <Header></Header>
    //   <Profile/>
    //   <Profile/>
    //   <Profile/>
    //   <Profile/>
    //   <Profile/>
    // </>
    <div ref={vantaRef}>
      <div>
      <Header></Header>
      
      <Profile></Profile>

      <Profile></Profile>
      </div>
    </div>
  )
}





// class App extends React.Component {
//   constructor() {
//     super();
//     this.vantaRef = React.createRef();
//   }
//   componentDidMount() {
//     this.vantaEffect = NET({
//       el: this.vantaRef.current,
//       THREE: THREE,
//       mouseControls: true,
//       touchControls: true,
//       gyroControls: false,
//       minHeight: 200.0,
//       minWidth: 200.0,
//       scale: 1.0,
//       scaleMobile: 1.0,
//       color: 0xfff33f,
//       // color: 0x37415f,
//       backgroundColor: 0xf0620,
//           // points: "10.00",
//           // maxDistance: "40.00",
//           // spacing: "20.00",
//     });
//   }
//   componentWillUnmount() {
//     if (this.vantaEffect) {
//       this.vantaEffect.destroy();
//     }
//   }
//   render() {
//      const style = () => {
//       return (
//         <style jsx>{`
//           .nav {
//             transition: all 0.1s linear;
//             position: fixed;
//             width: 100%;
//           }
//           .scrollNav {
//             transition: all 0.5s ease-in;
//             background: #333;
//             width: 100%;
//           }
//           .styl {
//             padding-top: 80px;
//           }
//         `}</style>
//       )
//     }

//     return (
//       <div style={{ height:"100vh", width: "100%" }} ref={this.vantaRef}>
//         {/* {style()}
//         <StickyNav length='40'><Header></Header></StickyNav> */}


//         {/* <div className='stly'></div> */}
//         <section><Header></Header></section>     
//         {/* <Header></Header>
//         <Profile></Profile>       
//         <Profile></Profile> */}
        
         
//          {/* </section>
//          <section>
//          <Profile/>
//          </section>
//          <section>
//          <Profile/>
//          </section> */}
//       </div>
//     );
//   }
// }

// export default App;

