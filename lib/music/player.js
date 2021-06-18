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
var discord_ytdl_core_1 = __importDefault(require("discord-ytdl-core"));
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
            var stream, dispatcher;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.join()];
                    case 1:
                        _a.sent();
                        stream = discord_ytdl_core_1.default(track.url, { fmt: 'mp3', filter: 'audioonly' });
                        dispatcher = this.connection.play(stream, {
                            seek: seek,
                            volume: 1,
                            type: "opus"
                        }).on("finish", function () {
                            events_1.emitter.emit('end', _this);
                        });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGxheWVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL211c2ljL3BsYXllci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSx3REFBd0Q7QUFDeEQsd0VBQTJDO0FBRTNDLDBDQUFvQjtBQUNwQixtQ0FBbUM7QUFFbkM7SUErQkUsZ0JBQW9CLE9BQXNCO1FBQTFDLGlCQVFDO1FBUm1CLFlBQU8sR0FBUCxPQUFPLENBQWU7UUE5QmpDLE1BQUMsR0FBRyxJQUFJLFdBQUMsRUFBUyxDQUFDO1FBK0IxQixnQkFBTyxDQUFDLEVBQUUsQ0FBQyxLQUFLLEVBQUU7Ozs7O3dCQUNoQixJQUFJLENBQUMsQ0FBQyxDQUFDLE9BQU8sRUFBRSxDQUFDO3dCQUNqQixJQUFJLElBQUksQ0FBQyxDQUFDLENBQUMsT0FBTzs0QkFBRSxzQkFBTzt3QkFFckIsU0FBUyxHQUFHLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUM7d0JBQ2hDLHFCQUFNLElBQUksQ0FBQyxTQUFTLENBQUMsU0FBUyxDQUFDLEVBQUE7O3dCQUEvQixTQUErQixDQUFDOzs7O2FBQ2pDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFqQ0Qsc0JBQUksNkJBQVM7UUFEYixpRUFBaUU7YUFDakU7WUFDRSxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUM7UUFDekIsQ0FBQzs7O09BQUE7SUFFRCxzQkFBSSw0QkFBUTtRQURaLDJDQUEyQzthQUMzQzs7WUFDRSxPQUFPLE1BQUEsTUFBQSxJQUFJLENBQUMsVUFBVSwwQ0FBRSxVQUFVLDBDQUFFLE1BQU0sQ0FBQztRQUM3QyxDQUFDOzs7T0FBQTtJQUVELHNCQUFJLDRCQUFRO1FBRFosNEVBQTRFO2FBQzVFOztZQUNFLE9BQU8sTUFBQSxNQUFBLElBQUksQ0FBQyxVQUFVLDBDQUFFLFVBQVUsMENBQUUsZUFBZSxDQUFDO1FB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