import { useFonts } from "expo-font"
import { Stack } from "expo-router"
import { useCallback } from "react";


const Layout = ()=>{
    const [fontIsLoaded] = useFonts({
        DMBold: require('../assets/fonts/DMSans-Bold.ttf'),
        DMMedium: require('../assets/fonts/DMSans-Medium.ttf'),
        DMRegular: require('../assets/fonts/DMSans-Regular.ttf'),
    })
    const onLayoutRootView = useCallback(async () => {
        if (fontIsLoaded) {
            await SplashScreen.hideAsync();
        }
    }, [fontIsLoaded]);

    if (!fontIsLoaded) {
        return null;
    }


    return <Stack onLayout={onLayoutRootView}/>
}

export default Layout