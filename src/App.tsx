import React, { useEffect, useRef } from 'react';

import styled from 'styled-components';
import { motion,useMotionValue ,useTransform,useScroll} from "framer-motion"
const Wrapper = styled(motion.div)`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  
`
const BiggerBox = styled.div`
  width: 300px;
  height: 300px;
  background: rgba(255,255,255,0.2);
  border-radius: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
`


const Box = styled(motion.div)`
  width: 100px;
  height: 100px;
  background: rgba(255,255,255,1);
  border-radius: 15px;
  display: grid;
  box-shadow: 0 2px 3p rgba(0,0,0,0.1) , 0 10px 20px rgba(0,0,0,0.06);
`


// const boxVariants = {
//   start : {
//     opacity : 0,
//     scale:0.5
//   },
//   end : {
//     opacity : 1,
//     scale:1,
//     transition : {
//       type : "spring",
//       duration : 0.5,
//       bounce : 0.5,
//       delayChildren: 0.3,
//       staggerChildren: 0.2
//     }
//   }
// }

// const circleVariants = {
//   start : {
//     opacity : 0,
//     y:10
//   },
//   end : {
//     opacity : 1,
//     y:0,
//   }
// }



const boxVariants = {
  hover : {scale:1.5, rotateZ:90},
  click : {scale:1, borderRadius:"100px"},
  // drag : {backgroundColor:"rgba(46,204,113)",transition:{duration:10}}
}



const Svg = styled.svg`
  width: 300px;
  height: 300px;
`

const svg = {
  start : { pathLength:0, fill: "rgba(255,255,255,0)"},
  end : {
    fill: "rgba(255,255,255,1)",
    pathLength:1,
  }
}

function App() {
  const biggerBoxRef = useRef<HTMLDivElement>(null);

  const x = useMotionValue(0)
  const rotate = useTransform(x,[-800,800],[-360,360]);
  const gradient = useTransform(x,[-800,0,800],[
    "linear-gradient(135deg,#00b2ee,#0010ee)",
    "linear-gradient(135deg,#e09,#d0e)",
    "linear-gradient(135deg,#43ee00,#eaee00)"
  ])
  const {scrollYProgress} = useScroll()
  const scale = useTransform(scrollYProgress,[0,1],[1,5]);
  // useEffect(()=>{x.onChange(()=> console.log(x.get()))},[x])
  return (
    <Wrapper style={{background:gradient}}>
      {/* <Box variants={boxVariants} initial="start" animate="end">
        <Circle  variants={circleVariants}></Circle>
        <Circle variants={circleVariants}></Circle>
        <Circle variants={circleVariants}></Circle>
        <Circle variants={circleVariants}></Circle>
      </Box> */}

      {/* <BiggerBox ref={biggerBoxRef}>
        <Box drag 
        dragConstraints={biggerBoxRef} 
        dragSnapToOrigin
        dragElastic={1}
        variants={boxVariants} 
        whileHover="hover"
        whileTap="click"
        // whileDrag="drag"
        />
      </BiggerBox> */}
      
      {/* <button onClick={() => x.set(100)}>click me</button> */}
      {/* <Box style={{x:x,rotateZ:rotate,scale:scale}} drag="x" dragSnapToOrigin/> */}


      <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
        <motion.path
        variants={svg}
        initial="start"
        animate="end"
        stroke='white'
        strokeWidth="2"
        transition={{
          default:{
            duration:5
          },
          fill:{duration:2,delay:3}
        }}
        d="M224 373.12c-25.24-31.67-40.08-59.43-45-83.18-22.55-88 112.61-88 90.06 0-5.45 24.25-20.29 52-45 83.18zm138.15 73.23c-42.06 18.31-83.67-10.88-119.3-50.47 103.9-130.07 46.11-200-18.85-200-54.92 0-85.16 46.51-73.28 100.5 6.93 29.19 25.23 62.39 54.43 99.5-32.53 36.05-60.55 52.69-85.15 54.92-50 7.43-89.11-41.06-71.3-91.09 15.1-39.16 111.72-231.18 115.87-241.56 15.75-30.07 25.56-57.4 59.38-57.4 32.34 0 43.4 25.94 60.37 59.87 36 70.62 89.35 177.48 114.84 239.09 13.17 33.07-1.37 71.29-37.01 86.64zm47-136.12C280.27 35.93 273.13 32 224 32c-45.52 0-64.87 31.67-84.66 72.79C33.18 317.1 22.89 347.19 22 349.81-3.22 419.14 48.74 480 111.63 480c21.71 0 60.61-6.06 112.37-62.4 58.68 63.78 101.26 62.4 112.37 62.4 62.89.05 114.85-60.86 89.61-130.19.02-3.89-16.82-38.9-16.82-39.58z"/>
      </Svg>
    </Wrapper>
  );
}

export default App;
