import { GluestackUIProvider, Box } from '@gluestack-ui/themed'
import { config } from '@gluestack-ui/config';
import Title from './components/Title';
import WaterImage from './components/WaterImage';


export default function App() {
  return (
    <GluestackUIProvider config={config}>
      <Box
        w="100%"
        h="$full"
        justifyContent="center"
        alignItems="center"
        bgColor="$blue300">
        <Title />
        <WaterImage />
      </Box>
    </GluestackUIProvider>

  )
}