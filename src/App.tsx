import React, { useEffect, useRef, useState } from 'react';

import styled from 'styled-components';
import { motion,useMotionValue ,useTransform,useScroll,AnimatePresence} from "framer-motion"
const Wrapper = styled(motion.div)`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(135deg,#e09,#d0e);
  flex-direction: column;
`


const Box = styled(motion.div)`
  width: 400px;
  height: 200px;
  background-color: rgba(255, 255, 255, 1);
  border-radius: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 28px;
  position: absolute;
  top: 100px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`


const boxVariants = {
  initial:{
    opacity:0,
    scale:0
  },
  visible:{
    opacity:1,
    scale:1,
    rotateZ:360
  },
  leaving:{
    opacity:0,
    y:20
  }
}

const box = {
  entry : (back:boolean) => ({
    x:back ? -500 : 500,
    opacity:0,
    scale:0
  }),
  center : {
    x:0,
    opacity:1,
    scale:1,
    transition:{
      duration:1
    }
  },
  exit : (back:boolean) => ({
    x:back ? 500 : -500,
    opacity:0,
    scale:0,
    transition:{
      duration:1
    }
  })
}

function App() {
  const [visible,setVisible] = useState(1);
  const [back,setBack] = useState(false);
  const nextPlease = () => {
    setBack(false);
    setVisible(prev => prev === 10 ? 10 : prev + 1)
  }
  const prevPlease = () => {
    setBack(true)
    setVisible(prev => prev === 1 ? 1 : prev - 1)
  }
  return (
    <Wrapper>
      <AnimatePresence custom={back} mode="wait">
        <Box 
        custom={back}
        variants={box} initial="entry" animate="center" exit="exit"  key={visible}>{visible}</Box> 
      </AnimatePresence>
      <button onClick={nextPlease}>next</button>
      <button onClick={prevPlease}>prev</button>
    </Wrapper>
  );
}

export default App;
