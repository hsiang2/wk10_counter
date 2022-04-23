import { Button, Center, HStack, NativeBaseProvider, Text } from "native-base";
import { useDispatch, useSelector } from "react-redux";
import { increaseOne, decreaseOne, selectCounter } from "../redux/counterSlice"

const HomeScreen = () => {

    const counterValue = useSelector(selectCounter);
    const dispatch = useDispatch();
  
    return(
      <NativeBaseProvider>
        <Center flex={1}>
          <HStack space={20}>
            <Button w={70} onPress={() => dispatch(increaseOne())}>
              <Text fontSize={40} color="white">+</Text>
            </Button>
            <Button w={70} onPress={() => dispatch(decreaseOne())}>
              <Text fontSize={40} color="white">-</Text>
            </Button>
          </HStack>
          <Text fontSize={40} mt={20}>
            {counterValue}
          </Text>
        </Center>
      </NativeBaseProvider>
    );
  }

  export default HomeScreen;