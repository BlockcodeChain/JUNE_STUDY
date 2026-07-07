
import {motion} from "framer-motion"
const App = () => {
  return (
    <>
     <motion.div 
        initial={{opacity:0 , y:1}}
        animate={{opacity:1 , y:120}}
        style={{
          width:"100px",
          height:"100px",
          backgroundColor:"blue",
          borderRadius:"50%"

        }}
        transition={{duration:1 , ease:"easeInOut"}}

     />
    
    </>
  )
}

export default App