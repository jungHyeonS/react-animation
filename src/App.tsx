import React, { useEffect, useRef } from 'react';

import styled from 'styled-components';
import { motion,useMotionValue ,useTransform,useScroll} from "framer-motion"
const Wrapper = styled(motion.div)`
  height: 500vh;
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
      <Box style={{x:x,rotateZ:rotate,scale:scale}} drag="x" dragSnapToOrigin/>
    </Wrapper>
  );
}

export default App;
