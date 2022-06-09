import Fonts from "./enums/fonts.enum";

const Theme = {
    default : {
        // FONTS
        font_outfit: Fonts.OutfitRegular,
        font_outfit_semibold: Fonts.OutfitSemiBold,
        font_poppins: Fonts.PoppinsRegular,
        font_poppins_semibold: Fonts.PoppinsSemiBold,

        // COLORS
        orange : '#E4634B', // orange
        green : '#1C393A', //green
        brown : '#CE7153', //brown   
        grey: '#D4D6CB',
        white: '#FFFFFF',
        black: '#000000',
        error: 'red',
        border_color: '#CDD4D9', //light grey

        input_border_radius: 8,
        button_border_radius: 15,
        text_size: 16,
        button_text_size: 20,
        minimum_height: 66,
    },
}; 

export default Theme;
