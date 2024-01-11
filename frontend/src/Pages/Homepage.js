import {
  Box,
  Container,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
  Image,
  Flex
} from "@chakra-ui/react";
import Login from "../components/Authentication/Login";
import Signup from "../components/Authentication/Signup";
import IMG from './icon.png'
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { useEffect } from "react";

const Homepage = () => {
  const history = useHistory();

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('userInfo'));

    if (user) history.push("/chats");
  }, [history]);
  return (
    <Container maxW="xl">
      <Flex
        justifyContent="center"
        p={2}
        bg="white"
        w="100%"
        m="40px 0 15px 0"
        borderRadius="lg"
        borderWidth="1px"
      >
        <Box display="flex" alignItems="center">
          <Image sizes="xl" src={IMG} alt='Dan Abramov' />
        </Box>
        <Box display="flex" alignItems="center">
          <Text fontSize="4xl" fontFamily="Work sans" align="center">
            InstaChat
          </Text>
        </Box>
      </Flex>
      <Box bg="white" w="100%" p={4} borderRadius="lg" borderWidth="1px">
        <Tabs isFitted variant="soft-rounded" colorScheme='blue'>
          <TabList mb="1em">
            <Tab>Login</Tab>
            <Tab>Sign Up</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <Login />
            </TabPanel>
            <TabPanel>
              <Signup />
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
    </Container>
  )
}

export default Homepage