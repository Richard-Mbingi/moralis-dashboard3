import { Flex, Center, Text, Button } from "@chakra-ui/react";

export default function Header({ user, logout, isLoggingOut }) {
  return (
    <header>
      <Flex
        px="10"
        justifyContent="space-between"
        bg="purple.400"
        color="white"
      >
        <Center>
          <Text fontSize="xl" fontWeight="bold">
            Dashboard
          </Text>
        </Center>
        <Center>
          <Text>{user.getUsername()}</Text>
          <Button ml="4" colorScheme="purple" onClick={logout} disable={isLoggingOut}>
            Logout
          </Button>
        </Center>
      </Flex>
    </header>
  );
}
