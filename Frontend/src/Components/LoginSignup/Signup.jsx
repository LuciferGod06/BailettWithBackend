import React, { useState } from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
 FormControl,
  FormLabel,
  Input,
  Text,
  Link,
  useDisclosure,


} from "@chakra-ui/react";
import Login from "./Login";
import { useDispatch } from 'react-redux'
import axios from "axios";

// import { postNewUser } from "../../Redux/loginsignAction";

const Signup = ({ isOpen, onClose,onOpen }) => {
  const [signup, setsignup] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: ""
  })

  const {
    isOpen: isLoginOpen,
    onOpen: onLoginOpen,
    onClose: onLoginClose,
  } = useDisclosure();
  // home page 
  const handlesignup = ()=>{
    // console.log(signup);
    axios.post(`http://localhost:8080/signup`,{
      firstName:signup.firstName,
      lastName:signup.lastName,
      email:signup.email,
      password:signup.password
    }).then((resp)=>{console.log(resp.data)})
    .catch((err)=>{console.log(err)})

  }
  const handleLoginClick = () => {
    onClose();
    onLoginOpen();
  };

  return (
    <>

      {/* <Button onClick={onSignupOpen}>Sign Up</Button> */}
      
      <Modal
       
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Create your account</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormControl>
              <FormLabel>First name</FormLabel>
              <Input onChange={(e)=>{setsignup({...signup,firstName:e.target.value})}}  placeholder='First name' />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Last name</FormLabel>
              <Input placeholder='Last name' onChange={(e)=>{setsignup({...signup,lastName:e.target.value})}} />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Email Id</FormLabel>
              <Input placeholder='Email id' onChange={(e)=>{setsignup({...signup,email:e.target.value})}} />
            </FormControl>
            <FormControl mt={4}>
              <FormLabel>Password</FormLabel>
              <Input placeholder='Password' onChange={(e)=>{setsignup({...signup,password:e.target.value})}} />
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme='blue' mr={3} onClick={handlesignup} >
              Save
            </Button>
            <Button onClick={onClose}>Cancel</Button>
          </ModalFooter>
          <Text fontSize="md" textAlign={"center"} >
                Already have an account?{" "}
                  <Link  cursor="pointer"onClick={handleLoginClick}  >
                    Login
                  </Link>
                  </Text>
                  <br />
        </ModalContent>
        
      </Modal>
      <Login
        onLoginClose={onLoginClose}
        onLoginOpen={onLoginOpen}
        isLoginOpen={isLoginOpen}
      />
     
    </>
  );
};

export default Signup;
