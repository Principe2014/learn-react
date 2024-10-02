"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Gallery;
var react_1 = require("react");
function Gallery() {
    var profiles = [
        {
            name: 'Maria Skłodowska-Curie',
            imageUrl: 'https://i.imgur.com/szV5sdGs.jpg',
            profession: 'physicist and chemist',
            awards: 4,
            discovered: 'polonium (element)'
        },
        {
            name: 'Katsuko Saruhashi',
            imageUrl: 'https://i.imgur.com/YfeOqp2s.jpg',
            profession: 'geochemist',
            awards: 2,
            discovered: 'a method for measuring carbon dioxide in seawater',
        },
    ];
    return (react_1.default.createElement("div", null,
        react_1.default.createElement("h1", null, "Notable Scientists"),
        profiles.map(function (profile) { return (react_1.default.createElement(Profile, __assign({ key: profile.name }, profile))); })));
}
function Profile(_a) {
    var name = _a.name, imageUrl = _a.imageUrl, profession = _a.profession, awards = _a.awards, discovered = _a.discovered;
    return (react_1.default.createElement("section", { className: "profile" },
        react_1.default.createElement("h2", null, name),
        react_1.default.createElement("img", { className: "avatar", src: imageUrl, alt: name, width: 70, height: 70 }),
        react_1.default.createElement("ul", null,
            react_1.default.createElement("li", null,
                react_1.default.createElement("b", null, "Profession: "),
                " ",
                profession),
            react_1.default.createElement("li", null,
                react_1.default.createElement("b", null, "Awards: "),
                " ",
                awards),
            react_1.default.createElement("li", null,
                react_1.default.createElement("b", null, "Discovered: "),
                " ",
                discovered))));
}
