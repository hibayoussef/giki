import { Box, Select, VStack, Text, Center, Stack } from '@chakra-ui/react';
import React from 'react';

const languages = [
    { value: 'En', label: 'English (US)' },
    { value: 'Ar', label: 'Arabic' }
]


const countries = [
    { value: "Italy", label: "Italy (Italia)" },
    { value: "nigeria", label: "Nigeria" },
    { value: "kenya", label: "Kenya" },
    { value: "southAfrica", label: "South Africa" },
    { value: "unitedStates", label: "United States" },
    { value: "canada", label: "Canada" },
    { value: "germany", label: "Germany" }
];


const SelectForm = () => {

    const [languageName, setLanguageName] = React.useState(''); 
    const [countryName, setCountryName] = React.useState(''); 

    return (
        <VStack pt='72.35px' ml='50px' mr='50px'>
            <Box>
                <Stack>
                    <Text
                        color='#434E61'
                        fontWeight='700'
                        fontSize={['18px', '23px', '23px', '25px', '28px']}
                        lineHeight='34px'
                    >
                        Pick your language and
                    </Text>
                    <Center>
                        <Text
                            color='#434E61'
                            fontWeight='700'
                            fontSize={['18px', '23px', '23px', '25px', '28px']}
                            lineHeight='34px'
                        >
                            country/region
                        </Text>
                    </Center>
                </Stack>

            </Box>

            <Box pt='77.51px'>
                <Center>
                    <Select placeholder='Select Language'
                        w={['280.64px', '310.64px', '320.64px', '340.64px', '360.64px']}
                        h='41.14px'
                        bg='#F6F6F6'
                        borderRadius='8px'
                        color='#B3B3B3'
                        onChange={e=>setLanguageName(e.target.value)}
                    >
                        {/* <option value='option1'>Option 1</option>
                    <option value='option2'>Option 2</option>
                    <option value='option3'>Option 3</option> */}
                        {
                            languages.map(language => {
                                return <option
                                    key={language.value}
                                    value={language.value}>{language.label}</option>
                            })
                        }
                    </Select>
                </Center>
            </Box>
            <Box pt='12.22px' pb='168.93'>

                <Center>
                    <Select placeholder='Select Country'
                        w={['280.64px', '310.64px', '320.64px', '340.64px', '360.64px']}
                        h='41.14px'
                        bg='#F6F6F6'
                        borderRadius='8px'
                        color='#B3B3B3'
                        onChange={e=>setCountryName(e.target.value)}
                    >
                        {/* <option value='option1'>Option 1</option>
                    <option value='option2'>Option 2</option>
                    <option value='option3'>Option 3</option> */}
                        {
                            countries.map(country => {
                                return <option key={country.value} value={country.value} >{country.label}</option>
                            })
                        }
                    </Select>
                </Center>
            </Box>

        </VStack>
    )
}

export default SelectForm;