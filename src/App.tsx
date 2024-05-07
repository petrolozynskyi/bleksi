import { faker } from '@faker-js/faker';
import { Box, Button, Flex, Grid, Heading, Text } from "@radix-ui/themes";
import '@radix-ui/themes/styles.css';
import { useState } from "react";

function App() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [activeSize, setActiveSize] = useState('XS');
  const [activeColor, setActiveColor] = useState('');

  const handleClick = (index: number) => {
    setActiveIndex(index);
  };

  const handleClickSize = (size: string) => {
    setActiveSize(size);
  };

  const handleColorClick = (color: string) => {
    setActiveColor(color);
  };


  return (
    <>

      <Box className="flex justify-center my-10">
        <Box className="flex flex-col">
          <Box width="400px" pb='1' ml='1' height="425px">
            <img src={faker.image.url()} alt="" className='h-[425px] cursor-pointer ' />
          </Box>
          <Grid id='grid' columns="5" ml='1' mt='2' gap="2" rows="repeat(1, 56px)" width="400px">
            {[...Array(5)].map((_, index) => (
              <Box
                key={index}
                className={`btn  ${activeIndex === index ? 'active' : ''}`}
                onClick={() => handleClick(index)}>
                <img src={faker.image.url()} alt="" />
              </Box>
            ))}
          </Grid>
        </Box>
        <Flex maxWidth='520px' direction='column' ml='6'>
          <Heading as="h3">GUCCI</Heading>
          <Text color='gray' weight='medium' mt='1' size='4' as="p">Yellow And White Printed Woven Peplum top, Has a V-neck, Analogue Watch</Text>
          <Box my='4'>
            <Text color='gray' size='3' weight='medium'><s color='grey'>$180</s></Text>
            <Text size='4' ml='2' weight='medium'>$110</Text>
            <Text size='4' ml='2' color='orange' weight='medium'>(45% off)</Text>
          </Box>
          <Box>
            <Text color='gray'>SIZE</Text>
            <Grid id='grid' columns="5" ml='1' mt='2' gap="2" rows="repeat(1, 56px)" width="230px">
              {['XS', 'S', 'M', 'L', 'XL'].map((size) => (
                <Box
                  key={size}
                  height='40px'
                  width='40px'
                  className={`rounded-full border flex cursor-pointer  justify-center items-center ${activeSize === size ? 'bg-black text-white' : ''}`}
                  onClick={() => handleClickSize(size)}
                >
                  {size}
                </Box>
              ))}
            </Grid>
          </Box>
          <Text color='gray'>COLOR</Text>
          <Grid id='grid' columns="5" ml='1' mt='2' gap="2" rows="repeat(1, 56px)" width="230px">
            {['bg-green-500', 'bg-red-500', 'bg-white', 'bg-yellow-500', 'bg-gray-300'].map((color) => (
              <Box
                key={color}
                height='40px'
                width='40px'
                className={`rounded-full border cursor-pointer  flex justify-center items-center  ${activeColor === color ? 'border-black' : ''} ${color}`}
                onClick={() => handleColorClick(color)}
              >
                <div className=''></div>
              </Box>
            ))}
          </Grid>
          <Box>
            <Button variant='solid' size='4' color='gray' className='rounded-none cursor-pointer  px-[115px]' highContrast>ADD TO CART</Button>
            <Button color="gray" variant="surface" highContrast size='4' ml='2' className='border cursor-pointer  rounded-none px-10 border-solid'>WISHLIST</Button>
          </Box>
          <Flex mt='4' direction='column'>
            <Flex height='60px' justify='between' align='center' className='border-y-2 cursor-pointer '><Text weight='bold'>DELIVERY OPTIONS</Text><Text color='gray' size='4' weight='bold'>+</Text></Flex>
            <Flex height='60px' justify='between' align='center' className='border-b-2 cursor-pointer '><Text weight='bold'>MATERIALS</Text><Text color='gray' size='4' weight='bold'>+</Text></Flex>
            <Flex height='60px' justify='between' align='center' className='border-b-2 cursor-pointer '><Text weight='bold'>CARE</Text><Text color='gray' size='4' weight='bold'>+</Text></Flex>
            <Flex height='60px' justify='between' align='center' className='border-b-2 cursor-pointer '><Text weight='bold'>COD POLICY</Text><Text color='gray' size='4' weight='bold'>+</Text></Flex>
          </Flex>
        </Flex >

      </Box >
    </>
  );
}

export default App;
