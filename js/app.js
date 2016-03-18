/**
 * Created by valeriy.abornyev on 3/17/2016.
 */

requirejs.config({
    paths: {
        jquery: "lib/jquery-1.12.1.min",
        underscore: "lib/underscore",
        text: "lib/text",
        director: "lib/director.min"
    }
});

requirejs(['main']);