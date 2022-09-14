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
  height: 400px;
  background-color: rgba(255,255,255,1);
  border-radius: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0 2px 3px rgba(0,0,0,0.1), 0 10px 20px rgba(0,0,0,0.06);
`

const Circle = styled(motion.div)`
  background-color: #00a5ff;
  width: 100px;
  height: 100px;
  border-radius: 50px;
  box-shadow: 0 2px 3px rgba(0,0,0,0.1), 0 10px 20px rgba(0,0,0,0.06);
`
 
function App() {
  const [clicked,setClicked] = useState(false);
  const toggleClicked = () => setClicked((prev) => !prev);
  return (
    <Wrapper onClick={toggleClicked}>
      <Box>
        {!clicked ? <Circle layoutId="circle" style={{borderRadius:50}}></Circle> : null}
      </Box>
      <Box>
      {!clicked ? null : <Circle layoutId="circle" style={{borderRadius:0}}></Circle>}
      </Box>
    </Wrapper>
  );
}

export default App;
