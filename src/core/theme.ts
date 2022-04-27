import Fonts from "./enums/fonts.enum";

const Theme = {
    default : {
        // FONTS
        font_primary: Fonts.OutfitRegular,
        font_primary_semibold: Fonts.OutfitSemiBold,
        font_secondary: Fonts.PoppinsRegular,

        // COLORS
        primary : '#E3634B', // orange
        secondary : '#1C393A', //green
        light: '#D4D6CB',
        border_color: '#CDD4D9', //light grey
        white: '#FFFFFF',
        black: '#000000',
        error: 'red',

        input_border_radius: 8,
    },
}; 

export default Theme;
