import Fonts from "./enums/fonts.enum";

const Theme = {
    default : {
        // FONTS
        font_primary: Fonts.OutfitRegular,
        font_primary_semibold: Fonts.OutfitSemiBold,
        font_poppins: Fonts.PoppinsRegular,
        font_poppins_semibold: Fonts.PoppinsSemiBold,

        // COLORS
        primary : '#E4634B', // orange
        secondary : '#1C393A', //green
        tertiary : '#CE7153', //brown   
        light: '#D4D6CB',
        white: '#FFFFFF',
        black: '#000000',
        error: 'red',
        border_color: '#CDD4D9', //light grey
        button_text_color: '#FFFFFF',
        font_color: '#000000',

        input_border_radius: 8,
        button_border_radius: 15,
        text_size: 16,
        button_text_size: 20,
        minimum_height: 66,
    },
}; 

export default Theme;
