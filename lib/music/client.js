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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Player = exports.MusicClient = void 0;
var yt_search_1 = __importDefault(require("yt-search"));
var player_1 = require("./player");
var events_1 = require("./events");
var MusicClient = /** @class */ (function () {
    function MusicClient() {
        var _this = this;
        /** Players for each guild. */
        this.players = new Map();
        this.on('queueEnd', function (player) { return _this.players.delete(player.guildId); });
    }
    /** Listen to music client events.
     * @param event Music client event to listen to.
     * @param event Callback function for event listener.
    */
    MusicClient.prototype.on = function (event, listener) {
        events_1.emitter.on(event, listener);
    };
    /** Create a player for a guild.
     * @param guildId Guild ID of the player.
     * @param options Options for the player.
    */
    MusicClient.prototype.create = function (guildId, options) {
        return this.players
            .set(guildId, new player_1.Player(__assign({ guildId: guildId }, options)))
            .get(guildId);
    };
    /** Get a player for a guild.
     * @param guildId Guild ID of the player.
    */
    MusicClient.prototype.get = function (guildId) {
        return this.players.get(guildId);
    };
    /** Search YouTube for tracks.
     * @param query Term to search YouTube for.
    */
    MusicClient.prototype.search = function (query) {
        return __awaiter(this, void 0, void 0, function () {
            var result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, yt_search_1.default(query)];
                    case 1:
                        result = _a.sent();
                        return [2 /*return*/, result.videos];
                }
            });
        });
    };
    return MusicClient;
}());
exports.MusicClient = MusicClient;
var player_2 = require("./player");
Object.defineProperty(exports, "Player", { enumerable: true, get: function () { return player_2.Player; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2xpZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL211c2ljL2NsaWVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLHdEQUFpQztBQUNqQyxtQ0FBd0Q7QUFDeEQsbUNBQXFEO0FBRXJEO0lBSUU7UUFBQSxpQkFFQztRQUxELDhCQUE4QjtRQUNyQixZQUFPLEdBQUcsSUFBSSxHQUFHLEVBQWtCLENBQUM7UUFHM0MsSUFBSSxDQUFDLEVBQUUsQ0FBQyxVQUFVLEVBQUUsVUFBQyxNQUFjLElBQUssT0FBQSxLQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLEVBQW5DLENBQW1DLENBQUMsQ0FBQztJQUMvRSxDQUFDO0lBRUQ7OztNQUdFO0lBQ0Ysd0JBQUUsR0FBRixVQUFHLEtBQXVCLEVBQUUsUUFBa0M7UUFDNUQsZ0JBQU8sQ0FBQyxFQUFFLENBQUMsS0FBSyxFQUFFLFFBQVEsQ0FBQyxDQUFDO0lBQzlCLENBQUM7SUFFRDs7O01BR0U7SUFDRiw0QkFBTSxHQUFOLFVBQU8sT0FBZSxFQUFFLE9BQXNCO1FBQzVDLE9BQU8sSUFBSSxDQUFDLE9BQU87YUFDZCxHQUFHLENBQUMsT0FBTyxFQUFFLElBQUksZUFBTSxZQUFHLE9BQU8sU0FBQSxJQUFLLE9BQU8sRUFBRyxDQUFDO2FBQ2pELEdBQUcsQ0FBQyxPQUFPLENBQVcsQ0FBQztJQUM5QixDQUFDO0lBQ0Q7O01BRUU7SUFDRix5QkFBRyxHQUFILFVBQUksT0FBZTtRQUNqQixPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQ25DLENBQUM7SUFFRDs7TUFFRTtJQUNJLDRCQUFNLEdBQVosVUFBYSxLQUFhOzs7Ozs0QkFDVCxxQkFBTSxtQkFBUSxDQUFDLEtBQUssQ0FBQyxFQUFBOzt3QkFBOUIsTUFBTSxHQUFHLFNBQXFCO3dCQUNwQyxzQkFBTyxNQUFNLENBQUMsTUFBTSxFQUFDOzs7O0tBQ3RCO0lBQ0gsa0JBQUM7QUFBRCxDQUFDLEFBdkNELElBdUNDO0FBdkNZLGtDQUFXO0FBeUN4QixtQ0FBd0Q7QUFBL0MsZ0dBQUEsTUFBTSxPQUFBIn0=