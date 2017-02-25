var S9;
(function (S9) {
    /*
    * The direction in which game environment objects like, road, clouds etc should move towards automatically
    */
    var EnvironmentAutoMove;
    (function (EnvironmentAutoMove) {
        EnvironmentAutoMove[EnvironmentAutoMove["None"] = 0] = "None";
        EnvironmentAutoMove[EnvironmentAutoMove["Left"] = 1] = "Left";
        EnvironmentAutoMove[EnvironmentAutoMove["Right"] = 2] = "Right";
        EnvironmentAutoMove[EnvironmentAutoMove["Up"] = 3] = "Up";
        EnvironmentAutoMove[EnvironmentAutoMove["Down"] = 4] = "Down";
        EnvironmentAutoMove[EnvironmentAutoMove["Random"] = 5] = "Random";
    })(EnvironmentAutoMove = S9.EnvironmentAutoMove || (S9.EnvironmentAutoMove = {}));
})(S9 || (S9 = {}));
//# sourceMappingURL=EnvironmentParams.js.map