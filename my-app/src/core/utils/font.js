import localFont from 'next/font/local'

export const Inter = localFont({
    src: [
      {
            path: url("../../../../public/fonts/Inter-Thin.ttf"),
            style: normal,
            weight: 100,
        },
        
      {
            path: url("@public/fonts/Inter-ExtraLight.ttf"),
            style: normal,
            weight: 200,
        },
        
      {
            path: url("../../../../public/fonts/Inter-Light.ttf"),
            style: normal,
            weight: 300,
        }
        ,
      {
            path: url("../../../../public/fonts/Inter-Regular.ttf"),
           style: normal,
           weight: 400,
        },
        
      {
            path: url("../../../../public/fonts/Inter-Medium.ttf"),
           style: normal,
           
           weight: 500,
        }
        ,
      {
            path: url("../../../../public/fonts/Inter-SemiBold.ttf");
            style: normal,
           weight: 600,
        }
    ],
    display: 'swap',
    variable: '--font-inter',
})
