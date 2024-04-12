import React, { useState } from "react";
import { Box, Heading, Text, Image, Grid, Button, Flex, Spacer, IconButton, Badge, useToast } from "@chakra-ui/react";
import { FaShoppingCart } from "react-icons/fa";

const products = [
  {
    id: 1,
    name: "Yoga Mat",
    description: "Premium yoga mat for your practice.",
    price: 29.99,
    image: "https://images.unsplash.com/photo-1601925260368-ae2f83cf8b7f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHx5b2dhJTIwbWF0fGVufDB8fHx8MTcxMjg5OTU5Nnww&ixlib=rb-4.0.3&q=80&w=1080",
  },
  {
    id: 2,
    name: "Meditation Cushion",
    description: "Comfortable cushion for meditation.",
    price: 39.99,
    image: "https://images.unsplash.com/photo-1597307509190-e33cb9fb3ff7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxtZWRpdGF0aW9uJTIwY3VzaGlvbnxlbnwwfHx8fDE3MTI4OTk1OTZ8MA&ixlib=rb-4.0.3&q=80&w=1080",
  },
  {
    id: 3,
    name: "Essential Oil Diffuser",
    description: "Aromatherapy diffuser for relaxation.",
    price: 24.99,
    image: "https://images.unsplash.com/photo-1608571702346-bf078a741b19?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxlc3NlbnRpYWwlMjBvaWwlMjBkaWZmdXNlcnxlbnwwfHx8fDE3MTI4OTk1OTd8MA&ixlib=rb-4.0.3&q=80&w=1080",
  },
];

const Index = () => {
  const [cart, setCart] = useState([]);
  const toast = useToast();

  const addToCart = (product) => {
    setCart([...cart, product]);
    toast({
      title: "Added to cart",
      status: "success",
      duration: 2000,
      isClosable: true,
    });
  };

  return (
    <Box>
      <Flex bg="teal.500" p={4} color="white">
        <Heading size="md">Wellness Dropshipping Store</Heading>
        <Spacer />
        <IconButton icon={<FaShoppingCart />} variant="outline" colorScheme="white" aria-label="Cart" />
        <Badge ml={2} colorScheme="red">
          {cart.length}
        </Badge>
      </Flex>

      <Box p={4}>
        <Heading mb={4}>Featured Products</Heading>
        <Grid templateColumns="repeat(3, 1fr)" gap={6}>
          {products.map((product) => (
            <Box key={product.id} borderWidth={1} borderRadius="lg" p={4}>
              <Image src={product.image} alt={product.name} mb={4} />
              <Heading size="md">{product.name}</Heading>
              <Text>{product.description}</Text>
              <Flex align="center" justify="space-between" mt={4}>
                <Text fontWeight="bold">${product.price}</Text>
                <Button colorScheme="teal" onClick={() => addToCart(product)}>
                  Add to Cart
                </Button>
              </Flex>
            </Box>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default Index;
