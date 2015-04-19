ig.module(
    'plusplus.config-user'
)
    .defines(function() {

        /**
         * User configuration of Impact++.
         * <span class="alert alert-info"><strong>Tip:</strong> it is recommended to modify this configuration file!</span>
         * @example
         * // in order to add your own custom configuration to Impact++
         * // edit the file defining ig.CONFIG_USER, 'plusplus/config-user.js'
         * // ig.CONFIG_USER is never modified by Impact++ (it is strictly for your use)
         * // ig.CONFIG_USER is automatically merged over Impact++'s config
         * @static
         * @readonly
         * @memberof ig
         * @namespace ig.CONFIG_USER
         * @author Collin Hover - collinhover.com
         **/
        ig.CONFIG_USER = {
            GAME_WIDTH_PCT: 1,
            GAME_HEIGHT_PCT: 1,
            GAME_WIDTH_VIEW: 320,
            GAME_HEIGHT_VIEW: 225,
            SCALE_MIN: 1,
            SCALE_MAX: 5,
            CAMERA: {
                KEEP_CENTERED: false,
                KEEP_INSIDE_LEVEL: true,
                CENTER_FIRST_FOLLOW: false,
                BOUNDS_TRAP_AS_PCT: true,
                BOUNDS_TRAP_PCT_MINX: -0.3,
                BOUNDS_TRAP_PCT_MINY: -0.8,
                BOUNDS_TRAP_PCT_MAXX: 0.3,
                BOUNDS_TRAP_PCT_MAXY: 0.8
            },
            FONT: {
                MAIN_NAME: "font_helloplusplus_white_16.png",
                ALT_NAME: "font_helloplusplus_white_8.png",
                CHAT_NAME: "font_helloplusplus_black_8.png",
                // we can have the font be scaled relative to system
                SCALE_OF_SYSTEM_SCALE: 0.5,
                // and force a min / max
                SCALE_MIN: 1,
                SCALE_MAX: 2
            },
        };

    });
