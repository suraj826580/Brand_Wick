import React, { useContext } from "react";
import {
  Box,
  Heading,
  FormControl,
  FormLabel,
  Input,
  Button,
  VStack,
  Text,
  InputGroup,
  InputRightElement,
  IconButton,
  Flex,
} from "@chakra-ui/react";
import { FaUser, FaEnvelope, FaPhone, FaLock } from "react-icons/fa";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { GlobalContext } from "./GlobalContext";
import axios from "axios";
import { Spinner } from "@chakra-ui/react";
import { useToast } from "@chakra-ui/react";
const RegisterComp = () => {
  const form = useForm();
  const { register, handleSubmit, reset } = form;
  const navigate = useNavigate();
  const toast = useToast();
  const { loading, setloading } = useContext(GlobalContext);

  const handleSubmitFunc = (data) => {
    setloading(true);
    axios
      .post("https://erin-powerful-binturong.cyclic.app/user/register", data)
      .then((res) => {
        if (res.data.msg == "Registration Successfull") {
          setTimeout(() => {
            navigate("/");
          }, 1000);
          console.log(res.data.msg);
          return toast({
            title: `${res.data.msg}`,
            status: "success",
            duration: 1000,
            isClosable: true,
          });
        } else {
          return toast({
            title: `${res.data.msg}`,
            status: "error",
            duration: 1000,
            isClosable: true,
          });
        }
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setloading(false);
      });
    // reset();
  };
  return (
    <Flex justifyContent={"center"} minHeight={"100vh"} alignItems={"center"}>
      <Box p={10} borderRadius="md" boxShadow="lg" bg="white" w="500px">
        <VStack align="center" spacing={4} gap={4}>
          <Heading as="h2" size="lg" color="teal.500">
            Register
          </Heading>
          <form
            onSubmit={handleSubmit(handleSubmitFunc)}
            style={{ width: "100%" }}>
            <VStack gap={4}>
              <FormControl id="name" isRequired>
                <InputGroup>
                  <FormLabel srOnly>Name</FormLabel>
                  <Input
                    {...register("name")}
                    type="text"
                    placeholder="Enter your name"
                    borderColor="teal.500"
                    _focus={{ borderColor: "teal.600" }}
                    leftIcon={<FaUser color="teal.500" />}
                  />
                </InputGroup>
              </FormControl>

              <FormControl id="username" isRequired>
                <InputGroup>
                  <FormLabel srOnly>Username</FormLabel>
                  <Input
                    {...register("userName")}
                    type="text"
                    placeholder="Enter your username"
                    borderColor="teal.500"
                    _focus={{ borderColor: "teal.600" }}
                    leftIcon={<FaUser color="teal.500" />}
                  />
                </InputGroup>
              </FormControl>

              <FormControl id="email" isRequired>
                <InputGroup>
                  <FormLabel srOnly>Email address</FormLabel>
                  <Input
                    {...register("email")}
                    type="email"
                    placeholder="Enter your email"
                    borderColor="teal.500"
                    _focus={{ borderColor: "teal.600" }}
                    leftIcon={<FaEnvelope color="teal.500" />}
                  />
                </InputGroup>
              </FormControl>

              <FormControl id="phone" isRequired>
                <InputGroup>
                  <FormLabel srOnly>Phone number</FormLabel>
                  <Input
                    {...register("phoneNumber")}
                    type="tel"
                    placeholder="Enter your phone number"
                    borderColor="teal.500"
                    _focus={{ borderColor: "teal.600" }}
                    leftIcon={<FaPhone color="teal.500" />}
                  />
                </InputGroup>
              </FormControl>

              <FormControl id="password" isRequired>
                <InputGroup>
                  <FormLabel srOnly>Password</FormLabel>
                  <Input
                    {...register("password")}
                    type="password"
                    placeholder="Enter your password"
                    borderColor="teal.500"
                    _focus={{ borderColor: "teal.600" }}
                    leftIcon={<FaLock color="teal.500" />}
                  />
                  <InputRightElement width="3rem">
                    <IconButton
                      h="1.5rem"
                      size="sm"
                      aria-label="Toggle password visibility"
                      icon={<FaLock color="teal.500" />}
                    />
                  </InputRightElement>
                </InputGroup>
              </FormControl>
            </VStack>

            <Button type="submit" colorScheme="teal" mt={6} width="100%">
              {!loading ? " Register" : <Spinner size={"xs"} />}
            </Button>
          </form>

          <Text fontSize="sm" color="gray.500" mt={2}>
            Already have an account ?
            <Link
              to="/"
              as="span"
              color="teal.500"
              cursor="pointer"
              style={{
                paddingLeft: "4px",
              }}>
              Login
            </Link>
          </Text>
        </VStack>
      </Box>
    </Flex>
  );
};

export default RegisterComp;
