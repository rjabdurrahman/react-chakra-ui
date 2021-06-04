import { Stack, Input, Box, Text } from "@chakra-ui/react";
import { useState } from 'react';

function Card(props) {
    let [amount, setAmount] = useState(currencyConverter(5000));
    return (
        <Stack spacing={3}>
            <Input onChange={(event) => setAmount(currencyConverter(event.target.value))} placeholder="5000" />
            <Box bg="white" h="250px" w="400px" p={6} borderWidth="1px" borderRadius="lg">
                <Text fontSize="4xl">{amount}</Text>
            </Box>
        </Stack>
    );
}

function currencyConverter(val) {
    return (Number(val)).toLocaleString('en-US', {
        style: 'currency',
        currency: 'USD',
    })
}

export default Card;