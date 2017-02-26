var S9;
(function (S9) {
    var Common = (function () {
        function Common() {
        }
        return Common;
    }());
    S9.Common = Common;
    var E_GameStatus;
    (function (E_GameStatus) {
        E_GameStatus[E_GameStatus["Running"] = 0] = "Running";
        E_GameStatus[E_GameStatus["Paused"] = 1] = "Paused";
        E_GameStatus[E_GameStatus["End"] = 2] = "End";
    })(E_GameStatus = S9.E_GameStatus || (S9.E_GameStatus = {}));
    /*
    * The direction in which game environment objects like, road, clouds etc should move towards automatically
    */
    var E_EnvironmentAutoMove;
    (function (E_EnvironmentAutoMove) {
        E_EnvironmentAutoMove[E_EnvironmentAutoMove["None"] = 0] = "None";
        E_EnvironmentAutoMove[E_EnvironmentAutoMove["Left"] = 1] = "Left";
        E_EnvironmentAutoMove[E_EnvironmentAutoMove["Right"] = 2] = "Right";
        E_EnvironmentAutoMove[E_EnvironmentAutoMove["Up"] = 3] = "Up";
        E_EnvironmentAutoMove[E_EnvironmentAutoMove["Down"] = 4] = "Down";
        E_EnvironmentAutoMove[E_EnvironmentAutoMove["Random"] = 5] = "Random";
    })(E_EnvironmentAutoMove = S9.E_EnvironmentAutoMove || (S9.E_EnvironmentAutoMove = {}));
    var E_Key;
    (function (E_Key) {
        E_Key[E_Key["SPACE"] = 32] = "SPACE";
        E_Key[E_Key["A"] = 65] = "A";
        E_Key[E_Key["B"] = 66] = "B";
        E_Key[E_Key["C"] = 67] = "C";
        E_Key[E_Key["D"] = 68] = "D";
        E_Key[E_Key["E"] = 69] = "E";
        E_Key[E_Key["F"] = 70] = "F";
        E_Key[E_Key["G"] = 71] = "G";
        E_Key[E_Key["H"] = 72] = "H";
        E_Key[E_Key["I"] = 73] = "I";
        E_Key[E_Key["J"] = 74] = "J";
        E_Key[E_Key["K"] = 75] = "K";
        E_Key[E_Key["L"] = 76] = "L";
        E_Key[E_Key["M"] = 77] = "M";
        E_Key[E_Key["N"] = 78] = "N";
        E_Key[E_Key["O"] = 79] = "O";
        E_Key[E_Key["P"] = 80] = "P";
        E_Key[E_Key["Q"] = 81] = "Q";
        E_Key[E_Key["R"] = 82] = "R";
        E_Key[E_Key["S"] = 83] = "S";
        E_Key[E_Key["T"] = 84] = "T";
        E_Key[E_Key["U"] = 85] = "U";
        E_Key[E_Key["V"] = 86] = "V";
        E_Key[E_Key["W"] = 87] = "W";
        E_Key[E_Key["X"] = 88] = "X";
        E_Key[E_Key["Y"] = 89] = "Y";
        E_Key[E_Key["Z"] = 90] = "Z";
    })(E_Key = S9.E_Key || (S9.E_Key = {}));
})(S9 || (S9 = {}));
//# sourceMappingURL=Common.js.map