import { Select } from "@chakra-ui/select"


export const countries = [
    { value: "Italy", label: "Italy(Italia)" },
    { value: "ghana", label: "Ghana" },
    { value: "nigeria", label: "Nigeria" },
    { value: "kenya", label: "Kenya" },
    { value: "southAfrica", label: "South Africa" },
    { value: "unitedStates", label: "United States" },
    { value: "canada", label: "Canada" },
    { value: "germany", label: "Germany" }
]

const AutoCompleteCountries = () => {
    return <> <Select placeholder="Select Country" variant="outline">
            {countries.map(country => {
                return (
                    <option value="1" key={country.value}>{country.label}</option>
                )
            })}



        </Select>
       
    </>
}

export default AutoCompleteCountries;