/** @type {import("tailwindcss").Config} */

module.exports = {
    purge: {
        mode: "all",
        content: [
            "./src/**/*.rs",
            "./index.html",
            "./src/**/*.html",
            "./src/**/*.css",
        ],
    },
    theme: {
        extend: {
            backgroundImage: ({ theme }) => ({
                darkrainbow: `
                    linear-gradient(
                        135deg,
                        ${theme("colors.red.800")} 0%,
                        ${theme("colors.orange.800")} 24%,
                        ${theme("colors.yellow.700")} 47%,
                        ${theme("colors.green.700")} 65%,
                        ${theme("colors.blue.900")} 84%,
                        ${theme("colors.purple.800")} 100%
                    );
                `,
                textrainbow: `
                    linear-gradient(
                        160deg,
                        ${theme("colors.red.500")} 0%,
                        ${theme("colors.orange.400")} 24%,
                        ${theme("colors.yellow.400")} 47%,
                        ${theme("colors.green.500")} 65%,
                        ${theme("colors.blue.500")} 84%,
                        ${theme("colors.purple.500")} 100%
                    );
                `
            }),
            fontFamily: {
                inter: ["Inter"]
            }
        }
    },
    variants: {},
    plugins: [],
};