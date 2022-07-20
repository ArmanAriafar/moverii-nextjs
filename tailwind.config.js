module.exports = {
    content: ["./pages/**/*.js", "./components/**/*.js"],
    theme: {
        backgroundImage: {
            providerHeader: "url(/images/ProviderHeaderBackground.png)",
            holidayImage: "url(/images/HolidayBg.png)",
        },
        fontFamily: {
            sans: "Poppins",
            serif: "Roboto",
        },
        extend: {
            colors: {
                blue: {
                    500: "#12A3BA",
                },
                slate: {
                    900: "#2B2D42",
                },
                orange: {
                    500: "#FF9F1C",
                },
                black: {
                    800: "#212121",
                    900: "#000000",
                },
                cyan: {
                    100: "#E1F9FC",
                    200: "#ECECF6",
                    300: "#787B9A"
                },
                amber:{
                    100: "#FDD59E"
                }
            },
            boxShadow: {
                AdArticle: "0 4px 20px rgba(120,123,154,0.15);",
            },
        },
    },
    plugins: [],
};
