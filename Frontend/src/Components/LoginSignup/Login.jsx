import React, { useState } from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Box,
  Button,

  FormControl,
  FormLabel,
  Input,

} from "@chakra-ui/react";
// import { postNewUserLogin } from "../../Redux/loginsignAction";
import { useDispatch } from "react-redux";
import axios from "axios";

const Login = ({ onLoginClose, isLoginOpen, onLoginOpen }) => {
  const dispatch = useDispatch();
  
  const [login, setlogin] = useState({
    email:"",
    password:""
  })
  
  const handleLogin = () =>{
    console.log("working")
    axios.post(`http://localhost:8080/login`,{
      email:login.email,
      password:login.password
    }).then((resp)=>{console.log(resp.data)})
    .catch((err)=>{console.log(err)})
  }

  
  return (
    <>
      {/* <Button onClick={onOpenL}>Login</Button> */}

      <Modal onClose={onLoginClose} isOpen={isLoginOpen} isCentered>
        <ModalOverlay />
        <ModalContent borderRightRadius="0" borderLeftRadius="0">
          <ModalHeader>LOGIN</ModalHeader>
          <ModalCloseButton />

          <ModalBody>
            <Box align="center" justify="center" bg="white" p={1}>
            <ModalOverlay />
        <ModalContent>
          <ModalHeader>Create your account</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
           
            <FormControl mt={4}>
              <FormLabel>Email Id</FormLabel>
              <Input placeholder='Email id' onChange={(e)=>{setlogin({...login,email:e.target.value})}} />
            </FormControl>
            <FormControl mt={4}>
              <FormLabel>Password</FormLabel>
              <Input placeholder='Password' onChange={(e)=>{setlogin({...login,password:e.target.value})}} />
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme='blue' mr={3} onClick={handleLogin} >
              Login
            </Button>
          </ModalFooter>
         
                  <br />
        </ModalContent>
            </Box>
          </ModalBody>

               </ModalContent>
      </Modal>
    </>
  );
};

export default Login;
