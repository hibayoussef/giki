import { Box, HStack } from "@chakra-ui/react"


export const ThreeDots: React.FC<{ activePoint: number }> = ({ activePoint }) => {
    // TODO
    // Check if the index of the point is equal to activePoint mark it as bold, otherewise mark it normal
    return  <div style={{ display: 'flex', justifyContent: 'center', paddingTop: '24.71px' }}>
    

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