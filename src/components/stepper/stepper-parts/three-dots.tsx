import { Box } from "@chakra-ui/react"


export const ThreeDots: React.FC<{ activePoint: number }> = ({ activePoint }) => {
    return <div style={{ display: 'flex', justifyContent: 'center', paddingTop: '24.71px' }}>


        <Box>
            <Box style={{
                width: "5.85px",
                height: "5.85px",
                borderRadius: "5px",
                backgroundColor: "#FF8C1E",
                color: "#FF8C1E",
                display: " inline-block",
                margin: "0 2px"
            }} />
            <Box style={{
                width: "5.85px",
                height: "5.85px",
                borderRadius: "5px",
                backgroundColor: "#FF8C1E",
                color: "#FF8C1E",
                display: " inline-block",
                margin: "0 2px"
            }} />
            <Box style={{
                width: "5.85px",
                height: "5.85px",
                borderRadius: "5px",
                backgroundColor: "#FF8C1E",
                color: "#FF8C1E",
                display: " inline-block",
                margin: "0 2px"
            }} />
        </Box>
    </div>
}