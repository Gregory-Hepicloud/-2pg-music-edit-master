"use strict";
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
exports.Player = void 0;
var yt_search_1 = __importDefault(require("yt-search"));
var ytdl = require('ytdl-core-discord');
var q_1 = __importDefault(require("./q"));
var events_1 = require("./events");
var Player = /** @class */ (function () {
    function Player(options) {
        var _this = this;
        this.options = options;
        this.q = new q_1.default();
        events_1.emitter.on('end', function () { return __awaiter(_this, void 0, void 0, function () {
            var nextTrack;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.q.dequeue();
                        if (this.q.isEmpty)
                            return [2 /*return*/];
                        nextTrack = this.q.peek();
                        return [4 /*yield*/, this.playTrack(nextTrack)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        }); });
    }
    Object.defineProperty(Player.prototype, "isPlaying", {
        /** Whether the queue is not empty and audio is being emitted. */
        get: function () {
            return !this.q.isEmpty;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Player.prototype, "isPaused", {
        /** Whether the player is paused or not. */
        get: function () {
            var _a, _b;
            return (_b = (_a = this.connection) === null || _a === void 0 ? void 0 : _a.dispatcher) === null || _b === void 0 ? void 0 : _b.paused;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Player.prototype, "position", {
        /** The time (in milliseconds) that the track has been playing audio for. */
        get: function () {
            var _a, _b;
            return (_b = (_a = this.connection) === null || _a === void 0 ? void 0 : _a.dispatcher) === null || _b === void 0 ? void 0 : _b.totalStreamTime;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Player.prototype, "textChannel", {
        /** Text channel that the player is connected to. */
        get: function () {
            return this.options.textChannel;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Player.prototype, "voiceChannel", {
        /** Voice channel that the player is connected to. */
        get: function () {
            return this.options.voiceChannel;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Player.prototype, "guildId", {
        /** Guild ID of the player. */
        get: function () {
            return this.options.guildId;
        },
        enumerable: false,
        configurable: true
    });
    /** Join a voice channel. */
    Player.prototype.join = function () {
        var _a;
        return __awaiter(this, void 0, void 0, function () {
            var _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        if (!((_a = this.voiceChannel) === null || _a === void 0 ? void 0 : _a.joinable))
                            throw new TypeError("Channel is not joinable.");
                        _b = this;
                        return [4 /*yield*/, this.options.voiceChannel.join()];
                    case 1:
                        _b.connection = _c.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    /** Leave a voice channel. */
    Player.prototype.leave = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.stop()];
                    case 1:
                        _a.sent();
                        this.options.voiceChannel.leave();
                        this.options.voiceChannel = null;
                        this.connection = null;
                        return [2 /*return*/];
                }
            });
        });
    };
    /** Joins a channel, then plays a track from YouTube.
     * If a track is already playing, it will be queued.
     * @param query Term to search YouTube for tracks.
     * @param requestor Guild member who requested to play this track.
    */
    Player.prototype.play = function (query, requestor) {
        return __awaiter(this, void 0, void 0, function () {
            var videos, track;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, yt_search_1.default(query)];
                    case 1:
                        videos = (_a.sent()).videos;
                        if (videos.length <= 0)
                            throw new TypeError('No results found.');
                        track = videos[0];
                        track.requestor = requestor;
                        this.q.enqueue(track);
                        if (!(this.q.length <= 1)) return [3 /*break*/, 3];
                        return [4 /*yield*/, this.playTrack(track)];
                    case 2:
                        _a.sent();
                        _a.label = 3;
                    case 3: return [2 /*return*/, track];
                }
            });
        });
    };
    Player.prototype.playTrack = function (track, seek) {
        if (seek === void 0) { seek = 0; }
        return __awaiter(this, void 0, void 0, function () {
            var stream;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.join()];
                    case 1:
                        _a.sent();
                        stream = ytdl(track.url, {
                            opusEncoded: true,
                        });
                        this.connection.play(stream, { type: "opus" });
                        if (seek <= 0)
                            events_1.emitter.emit('trackStart', this, track);
                        return [2 /*return*/, track];
                }
            });
        });
    };
    /** Set volume of player.
     * @param amount Value from 0 - 1.
     */
    Player.prototype.setVolume = function (amount) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                if (!this.isPlaying)
                    throw new TypeError('Player is not playing anything.');
                this.connection.dispatcher.setVolume(amount);
                return [2 /*return*/];
            });
        });
    };
    /** Move position in current playing track.
     * @param position Time (in seconds) to seek to.
     */
    Player.prototype.seek = function (position) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!this.isPlaying)
                            throw new TypeError('Player is not playing anything.');
                        if (position >= this.q.peek().duration.seconds)
                            throw new TypeError('Position is longer than track duration.');
                        return [4 /*yield*/, this.playTrack(this.q.peek(), position)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    /** Stop playing and clear queue. */
    Player.prototype.stop = function () {
        var _a;
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_b) {
                (_a = this.connection) === null || _a === void 0 ? void 0 : _a.disconnect();
                while (!this.q.isEmpty)
                    this.q.dequeue();
                events_1.emitter.emit('queueEnd', this);
                return [2 /*return*/];
            });
        });
    };
    /** Pause playback. */
    Player.prototype.pause = function () {
        var _a;
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_b) {
                (_a = this.connection) === null || _a === void 0 ? void 0 : _a.dispatcher.pause();
                return [2 /*return*/];
            });
        });
    };
    /** Resume playback. */
    Player.prototype.resume = function () {
        var _a;
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_b) {
                (_a = this.connection) === null || _a === void 0 ? void 0 : _a.dispatcher.resume();
                return [2 /*return*/];
            });
        });
    };
    /** Skip one or more tracks, and return track to play.
     * @param count Number of tracks to skip.
    */
    Player.prototype.skip = function (count) {
        if (count === void 0) { count = 1; }
        return __awaiter(this, void 0, void 0, function () {
            var i;
            return __generator(this, function (_a) {
                if (count > this.q.length)
                    throw new TypeError('Not enough items to skip.');
                else if (count <= 0)
                    throw new RangeError('Number to skip should be greater than 0');
                else if (this.q.length <= 1)
                    throw new TypeError('Cannot skip only one track.');
                for (i = 0; i < count; i++)
                    this.q.dequeue();
                return [2 /*return*/, this.playTrack(this.q.peek())];
            });
        });
    };
    return Player;
}());
exports.Player = Player;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGxheWVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL211c2ljL3BsYXllci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSx3REFBd0Q7QUFDeEQsSUFBTSxJQUFJLEdBQUcsT0FBTyxDQUFDLG1CQUFtQixDQUFDLENBQUM7QUFFMUMsMENBQW9CO0FBQ3BCLG1DQUFtQztBQUVuQztJQStCRSxnQkFBb0IsT0FBc0I7UUFBMUMsaUJBUUM7UUFSbUIsWUFBTyxHQUFQLE9BQU8sQ0FBZTtRQTlCakMsTUFBQyxHQUFHLElBQUksV0FBQyxFQUFTLENBQUM7UUErQjFCLGdCQUFPLENBQUMsRUFBRSxDQUFDLEtBQUssRUFBRTs7Ozs7d0JBQ2hCLElBQUksQ0FBQyxDQUFDLENBQUMsT0FBTyxFQUFFLENBQUM7d0JBQ2pCLElBQUksSUFBSSxDQUFDLENBQUMsQ0FBQyxPQUFPOzRCQUFFLHNCQUFPO3dCQUVyQixTQUFTLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQzt3QkFDaEMscUJBQU0sSUFBSSxDQUFDLFNBQVMsQ0FBQyxTQUFTLENBQUMsRUFBQTs7d0JBQS9CLFNBQStCLENBQUM7Ozs7YUFDakMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQWpDRCxzQkFBSSw2QkFBUztRQURiLGlFQUFpRTthQUNqRTtZQUNFLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQztRQUN6QixDQUFDOzs7T0FBQTtJQUVELHNCQUFJLDRCQUFRO1FBRFosMkNBQTJDO2FBQzNDOztZQUNFLE9BQU8sTUFBQSxNQUFBLElBQUksQ0FBQyxVQUFVLDBDQUFFLFVBQVUsMENBQUUsTUFBTSxDQUFDO1FBQzdDLENBQUM7OztPQUFBO0lBRUQsc0JBQUksNEJBQVE7UUFEWiw0RUFBNEU7YUFDNUU7O1lBQ0UsT0FBTyxNQUFBLE1BQUEsSUFBSSxDQUFD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