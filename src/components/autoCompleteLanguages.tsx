import React from 'react';
import { Select } from "@chakra-ui/select"


const Languages = [
    {value: 'English (US)', label: 'English(US)'}, 
    {value: 'Arabic', label: 'Arabic'}
]

const AutoCompleteLanguages = () => {
    return (
        <>
            <Select placeholder="Select Language" variant="outline">
                {Languages.map(language => {
                    return (
                        <option value="1" key={language.value}>{language.label}</option>
                    )
                })}



            </Select>
        </>
    )
}
export default AutoCompleteLanguages; 