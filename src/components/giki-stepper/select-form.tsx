import { Box, Select, VStack, Center } from '@chakra-ui/react';
import { useRecoilState } from 'recoil';
import StepperTitle from '../shared/stepper-title';
import { selectedCountryState, selectedLanguageState } from '../stepper/store/stepper-recoil';

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

    const [country, setSelectedCountry] = useRecoilState(selectedCountryState)
    const [language, setSelectedLanguage] = useRecoilState(selectedLanguageState);
    return (
        <VStack pt='72.35px' >

            <StepperTitle title_part_1='Pick your language and' title_part_2='country/region' />


            <Box pt='77.51px'>
                <Center>
                    <Select placeholder='Select Language'
                        w={['280.64px', '310.64px', '320.64px', '340.64px', '360.64px']}
                        h='41.14px'
                        fontSize={['12px', '13px', '13px', '14px', '14px']}
                        bg='#F6F6F6'
                        borderRadius='8px'
                        color='#B3B3B3'
                        onChange={({ target: { value } }) => {
                            setSelectedLanguage(value);
                        }}
                        value={language}
                    >
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
                        onChange={({ target: { value } }) => {
                            setSelectedCountry(value);
                        }}
                        value={country}
                        fontSize={['12px', '13px', '13px', '14px', '14px']}
                    >
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