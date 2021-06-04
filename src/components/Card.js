import { Stack, InputGroup, Input, InputLeftAddon, Box, Text } from "@chakra-ui/react";
import { useState } from 'react';
import currencyConverter from '../helpers/currencyConverter'

function Card(props) {
    let [amount, setAmount] = useState(currencyConverter(5000));
    return (
        <Stack spacing={3}>
            <InputGroup>
                <InputLeftAddon children="$" />
                <Input data-testid="currency-input" onChange={(event) => setAmount(currencyConverter(event.target.value))} placeholder="5000" />
            </InputGroup>
            <Box bg="white" h="250px" w="400px" p={6} borderWidth="1px" borderRadius="lg">
                <Text data-testid="currency-text" fontSize="4xl">{amount}</Text>
            </Box>
        </Stack>
    );
}

export default Card;