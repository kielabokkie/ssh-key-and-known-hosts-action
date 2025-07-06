import { createRequire as __WEBPACK_EXTERNAL_createRequire } from "module";
/******/ var __webpack_modules__ = ({

/***/ 351:
/***/ (function(__unused_webpack_module, exports, __nccwpck_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.issue = exports.issueCommand = void 0;
const os = __importStar(__nccwpck_require__(37));
const utils_1 = __nccwpck_require__(278);
/**
 * Commands
 *
 * Command Format:
 *   ::name key=value,key=value::message
 *
 * Examples:
 *   ::warning::This is the message
 *   ::set-env name=MY_VAR::some value
 */
function issueCommand(command, properties, message) {
    const cmd = new Command(command, properties, message);
    process.stdout.write(cmd.toString() + os.EOL);
}
exports.issueCommand = issueCommand;
function issue(name, message = '') {
    issueCommand(name, {}, message);
}
exports.issue = issue;
const CMD_STRING = '::';
class Command {
    constructor(command, properties, message) {
        if (!command) {
            command = 'missing.command';
        }
        this.command = command;
        this.properties = properties;
        this.message = message;
    }
    toString() {
        let cmdStr = CMD_STRING + this.command;
        if (this.properties && Object.keys(this.properties).length > 0) {
            cmdStr += ' ';
            let first = true;
            for (const key in this.properties) {
                if (this.properties.hasOwnProperty(key)) {
                    const val = this.properties[key];
                    if (val) {
                        if (first) {
                            first = false;
                        }
                        else {
                            cmdStr += ',';
                        }
                        cmdStr += `${key}=${escapeProperty(val)}`;
                    }
                }
            }
        }
        cmdStr += `${CMD_STRING}${escapeData(this.message)}`;
        return cmdStr;
    }
}
function escapeData(s) {
    return (0, utils_1.toCommandValue)(s)
        .replace(/%/g, '%25')
        .replace(/\r/g, '%0D')
        .replace(/\n/g, '%0A');
}
function escapeProperty(s) {
    return (0, utils_1.toCommandValue)(s)
        .replace(/%/g, '%25')
        .replace(/\r/g, '%0D')
        .replace(/\n/g, '%0A')
        .replace(/:/g, '%3A')
        .replace(/,/g, '%2C');
}
//# sourceMappingURL=command.js.map

/***/ }),

/***/ 186:
/***/ (function(__unused_webpack_module, exports, __nccwpck_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
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
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.platform = exports.toPlatformPath = exports.toWin32Path = exports.toPosixPath = exports.markdownSummary = exports.summary = exports.getIDToken = exports.getState = exports.saveState = exports.group = exports.endGroup = exports.startGroup = exports.info = exports.notice = exports.warning = exports.error = exports.debug = exports.isDebug = exports.setFailed = exports.setCommandEcho = exports.setOutput = exports.getBooleanInput = exports.getMultilineInput = exports.getInput = exports.addPath = exports.setSecret = exports.exportVariable = exports.ExitCode = void 0;
const command_1 = __nccwpck_require__(351);
const file_command_1 = __nccwpck_require__(717);
const utils_1 = __nccwpck_require__(278);
const os = __importStar(__nccwpck_require__(37));
const path = __importStar(__nccwpck_require__(17));
const oidc_utils_1 = __nccwpck_require__(41);
/**
 * The code to exit an action
 */
var ExitCode;
(function (ExitCode) {
    /**
     * A code indicating that the action was successful
     */
    ExitCode[ExitCode["Success"] = 0] = "Success";
    /**
     * A code indicating that the action was a failure
     */
    ExitCode[ExitCode["Failure"] = 1] = "Failure";
})(ExitCode || (exports.ExitCode = ExitCode = {}));
//-----------------------------------------------------------------------
// Variables
//-----------------------------------------------------------------------
/**
 * Sets env variable for this action and future actions in the job
 * @param name the name of the variable to set
 * @param val the value of the variable. Non-string values will be converted to a string via JSON.stringify
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function exportVariable(name, val) {
    const convertedVal = (0, utils_1.toCommandValue)(val);
    process.env[name] = convertedVal;
    const filePath = process.env['GITHUB_ENV'] || '';
    if (filePath) {
        return (0, file_command_1.issueFileCommand)('ENV', (0, file_command_1.prepareKeyValueMessage)(name, val));
    }
    (0, command_1.issueCommand)('set-env', { name }, convertedVal);
}
exports.exportVariable = exportVariable;
/**
 * Registers a secret which will get masked from logs
 * @param secret value of the secret
 */
function setSecret(secret) {
    (0, command_1.issueCommand)('add-mask', {}, secret);
}
exports.setSecret = setSecret;
/**
 * Prepends inputPath to the PATH (for this action and future actions)
 * @param inputPath
 */
function addPath(inputPath) {
    const filePath = process.env['GITHUB_PATH'] || '';
    if (filePath) {
        (0, file_command_1.issueFileCommand)('PATH', inputPath);
    }
    else {
        (0, command_1.issueCommand)('add-path', {}, inputPath);
    }
    process.env['PATH'] = `${inputPath}${path.delimiter}${process.env['PATH']}`;
}
exports.addPath = addPath;
/**
 * Gets the value of an input.
 * Unless trimWhitespace is set to false in InputOptions, the value is also trimmed.
 * Returns an empty string if the value is not defined.
 *
 * @param     name     name of the input to get
 * @param     options  optional. See InputOptions.
 * @returns   string
 */
function getInput(name, options) {
    const val = process.env[`INPUT_${name.replace(/ /g, '_').toUpperCase()}`] || '';
    if (options && options.required && !val) {
        throw new Error(`Input required and not supplied: ${name}`);
    }
    if (options && options.trimWhitespace === false) {
        return val;
    }
    return val.trim();
}
exports.getInput = getInput;
/**
 * Gets the values of an multiline input.  Each value is also trimmed.
 *
 * @param     name     name of the input to get
 * @param     options  optional. See InputOptions.
 * @returns   string[]
 *
 */
function getMultilineInput(name, options) {
    const inputs = getInput(name, options)
        .split('\n')
        .filter(x => x !== '');
    if (options && options.trimWhitespace === false) {
        return inputs;
    }
    return inputs.map(input => input.trim());
}
exports.getMultilineInput = getMultilineInput;
/**
 * Gets the input value of the boolean type in the YAML 1.2 "core schema" specification.
 * Support boolean input list: `true | True | TRUE | false | False | FALSE` .
 * The return value is also in boolean type.
 * ref: https://yaml.org/spec/1.2/spec.html#id2804923
 *
 * @param     name     name of the input to get
 * @param     options  optional. See InputOptions.
 * @returns   boolean
 */
function getBooleanInput(name, options) {
    const trueValue = ['true', 'True', 'TRUE'];
    const falseValue = ['false', 'False', 'FALSE'];
    const val = getInput(name, options);
    if (trueValue.includes(val))
        return true;
    if (falseValue.includes(val))
        return false;
    throw new TypeError(`Input does not meet YAML 1.2 "Core Schema" specification: ${name}\n` +
        `Support boolean input list: \`true | True | TRUE | false | False | FALSE\``);
}
exports.getBooleanInput = getBooleanInput;
/**
 * Sets the value of an output.
 *
 * @param     name     name of the output to set
 * @param     value    value to store. Non-string values will be converted to a string via JSON.stringify
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function setOutput(name, value) {
    const filePath = process.env['GITHUB_OUTPUT'] || '';
    if (filePath) {
        return (0, file_command_1.issueFileCommand)('OUTPUT', (0, file_command_1.prepareKeyValueMessage)(name, value));
    }
    process.stdout.write(os.EOL);
    (0, command_1.issueCommand)('set-output', { name }, (0, utils_1.toCommandValue)(value));
}
exports.setOutput = setOutput;
/**
 * Enables or disables the echoing of commands into stdout for the rest of the step.
 * Echoing is disabled by default if ACTIONS_STEP_DEBUG is not set.
 *
 */
function setCommandEcho(enabled) {
    (0, command_1.issue)('echo', enabled ? 'on' : 'off');
}
exports.setCommandEcho = setCommandEcho;
//-----------------------------------------------------------------------
// Results
//-----------------------------------------------------------------------
/**
 * Sets the action status to failed.
 * When the action exits it will be with an exit code of 1
 * @param message add error issue message
 */
function setFailed(message) {
    process.exitCode = ExitCode.Failure;
    error(message);
}
exports.setFailed = setFailed;
//-----------------------------------------------------------------------
// Logging Commands
//-----------------------------------------------------------------------
/**
 * Gets whether Actions Step Debug is on or not
 */
function isDebug() {
    return process.env['RUNNER_DEBUG'] === '1';
}
exports.isDebug = isDebug;
/**
 * Writes debug message to user log
 * @param message debug message
 */
function debug(message) {
    (0, command_1.issueCommand)('debug', {}, message);
}
exports.debug = debug;
/**
 * Adds an error issue
 * @param message error issue message. Errors will be converted to string via toString()
 * @param properties optional properties to add to the annotation.
 */
function error(message, properties = {}) {
    (0, command_1.issueCommand)('error', (0, utils_1.toCommandProperties)(properties), message instanceof Error ? message.toString() : message);
}
exports.error = error;
/**
 * Adds a warning issue
 * @param message warning issue message. Errors will be converted to string via toString()
 * @param properties optional properties to add to the annotation.
 */
function warning(message, properties = {}) {
    (0, command_1.issueCommand)('warning', (0, utils_1.toCommandProperties)(properties), message instanceof Error ? message.toString() : message);
}
exports.warning = warning;
/**
 * Adds a notice issue
 * @param message notice issue message. Errors will be converted to string via toString()
 * @param properties optional properties to add to the annotation.
 */
function notice(message, properties = {}) {
    (0, command_1.issueCommand)('notice', (0, utils_1.toCommandProperties)(properties), message instanceof Error ? message.toString() : message);
}
exports.notice = notice;
/**
 * Writes info to log with console.log.
 * @param message info message
 */
function info(message) {
    process.stdout.write(message + os.EOL);
}
exports.info = info;
/**
 * Begin an output group.
 *
 * Output until the next `groupEnd` will be foldable in this group
 *
 * @param name The name of the output group
 */
function startGroup(name) {
    (0, command_1.issue)('group', name);
}
exports.startGroup = startGroup;
/**
 * End an output group.
 */
function endGroup() {
    (0, command_1.issue)('endgroup');
}
exports.endGroup = endGroup;
/**
 * Wrap an asynchronous function call in a group.
 *
 * Returns the same type as the function itself.
 *
 * @param name The name of the group
 * @param fn The function to wrap in the group
 */
function group(name, fn) {
    return __awaiter(this, void 0, void 0, function* () {
        startGroup(name);
        let result;
        try {
            result = yield fn();
        }
        finally {
            endGroup();
        }
        return result;
    });
}
exports.group = group;
//-----------------------------------------------------------------------
// Wrapper action state
//-----------------------------------------------------------------------
/**
 * Saves state for current action, the state can only be retrieved by this action's post job execution.
 *
 * @param     name     name of the state to store
 * @param     value    value to store. Non-string values will be converted to a string via JSON.stringify
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function saveState(name, value) {
    const filePath = process.env['GITHUB_STATE'] || '';
    if (filePath) {
        return (0, file_command_1.issueFileCommand)('STATE', (0, file_command_1.prepareKeyValueMessage)(name, value));
    }
    (0, command_1.issueCommand)('save-state', { name }, (0, utils_1.toCommandValue)(value));
}
exports.saveState = saveState;
/**
 * Gets the value of an state set by this action's main execution.
 *
 * @param     name     name of the state to get
 * @returns   string
 */
function getState(name) {
    return process.env[`STATE_${name}`] || '';
}
exports.getState = getState;
function getIDToken(aud) {
    return __awaiter(this, void 0, void 0, function* () {
        return yield oidc_utils_1.OidcClient.getIDToken(aud);
    });
}
exports.getIDToken = getIDToken;
/**
 * Summary exports
 */
var summary_1 = __nccwpck_require__(327);
Object.defineProperty(exports, "summary", ({ enumerable: true, get: function () { return summary_1.summary; } }));
/**
 * @deprecated use core.summary
 */
var summary_2 = __nccwpck_require__(327);
Object.defineProperty(exports, "markdownSummary", ({ enumerable: true, get: function () { return summary_2.markdownSummary; } }));
/**
 * Path exports
 */
var path_utils_1 = __nccwpck_require__(981);
Object.defineProperty(exports, "toPosixPath", ({ enumerable: true, get: function () { return path_utils_1.toPosixPath; } }));
Object.defineProperty(exports, "toWin32Path", ({ enumerable: true, get: function () { return path_utils_1.toWin32Path; } }));
Object.defineProperty(exports, "toPlatformPath", ({ enumerable: true, get: function () { return path_utils_1.toPlatformPath; } }));
/**
 * Platform utilities exports
 */
exports.platform = __importStar(__nccwpck_require__(243));
//# sourceMappingURL=core.js.map

/***/ }),

/***/ 717:
/***/ (function(__unused_webpack_module, exports, __nccwpck_require__) {


// For internal use, subject to change.
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.prepareKeyValueMessage = exports.issueFileCommand = void 0;
// We use any as a valid input type
/* eslint-disable @typescript-eslint/no-explicit-any */
const crypto = __importStar(__nccwpck_require__(113));
const fs = __importStar(__nccwpck_require__(147));
const os = __importStar(__nccwpck_require__(37));
const utils_1 = __nccwpck_require__(278);
function issueFileCommand(command, message) {
    const filePath = process.env[`GITHUB_${command}`];
    if (!filePath) {
        throw new Error(`Unable to find environment variable for file command ${command}`);
    }
    if (!fs.existsSync(filePath)) {
        throw new Error(`Missing file at path: ${filePath}`);
    }
    fs.appendFileSync(filePath, `${(0, utils_1.toCommandValue)(message)}${os.EOL}`, {
        encoding: 'utf8'
    });
}
exports.issueFileCommand = issueFileCommand;
function prepareKeyValueMessage(key, value) {
    const delimiter = `ghadelimiter_${crypto.randomUUID()}`;
    const convertedValue = (0, utils_1.toCommandValue)(value);
    // These should realistically never happen, but just in case someone finds a
    // way to exploit uuid generation let's not allow keys or values that contain
    // the delimiter.
    if (key.includes(delimiter)) {
        throw new Error(`Unexpected input: name should not contain the delimiter "${delimiter}"`);
    }
    if (convertedValue.includes(delimiter)) {
        throw new Error(`Unexpected input: value should not contain the delimiter "${delimiter}"`);
    }
    return `${key}<<${delimiter}${os.EOL}${convertedValue}${os.EOL}${delimiter}`;
}
exports.prepareKeyValueMessage = prepareKeyValueMessage;
//# sourceMappingURL=file-command.js.map

/***/ }),

/***/ 41:
/***/ (function(__unused_webpack_module, exports, __nccwpck_require__) {


var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.OidcClient = void 0;
const http_client_1 = __nccwpck_require__(255);
const auth_1 = __nccwpck_require__(526);
const core_1 = __nccwpck_require__(186);
class OidcClient {
    static createHttpClient(allowRetry = true, maxRetry = 10) {
        const requestOptions = {
            allowRetries: allowRetry,
            maxRetries: maxRetry
        };
        return new http_client_1.HttpClient('actions/oidc-client', [new auth_1.BearerCredentialHandler(OidcClient.getRequestToken())], requestOptions);
    }
    static getRequestToken() {
        const token = process.env['ACTIONS_ID_TOKEN_REQUEST_TOKEN'];
        if (!token) {
            throw new Error('Unable to get ACTIONS_ID_TOKEN_REQUEST_TOKEN env variable');
        }
        return token;
    }
    static getIDTokenUrl() {
        const runtimeUrl = process.env['ACTIONS_ID_TOKEN_REQUEST_URL'];
        if (!runtimeUrl) {
            throw new Error('Unable to get ACTIONS_ID_TOKEN_REQUEST_URL env variable');
        }
        return runtimeUrl;
    }
    static getCall(id_token_url) {
        var _a;
        return __awaiter(this, void 0, void 0, function* () {
            const httpclient = OidcClient.createHttpClient();
            const res = yield httpclient
                .getJson(id_token_url)
                .catch(error => {
                throw new Error(`Failed to get ID Token. \n 
        Error Code : ${error.statusCode}\n 
        Error Message: ${error.message}`);
            });
            const id_token = (_a = res.result) === null || _a === void 0 ? void 0 : _a.value;
            if (!id_token) {
                throw new Error('Response json body do not have ID Token field');
            }
            return id_token;
        });
    }
    static getIDToken(audience) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                // New ID Token is requested from action service
                let id_token_url = OidcClient.getIDTokenUrl();
                if (audience) {
                    const encodedAudience = encodeURIComponent(audience);
                    id_token_url = `${id_token_url}&audience=${encodedAudience}`;
                }
                (0, core_1.debug)(`ID token url is ${id_token_url}`);
                const id_token = yield OidcClient.getCall(id_token_url);
                (0, core_1.setSecret)(id_token);
                return id_token;
            }
            catch (error) {
                throw new Error(`Error message: ${error.message}`);
            }
        });
    }
}
exports.OidcClient = OidcClient;
//# sourceMappingURL=oidc-utils.js.map

/***/ }),

/***/ 981:
/***/ (function(__unused_webpack_module, exports, __nccwpck_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.toPlatformPath = exports.toWin32Path = exports.toPosixPath = void 0;
const path = __importStar(__nccwpck_require__(17));
/**
 * toPosixPath converts the given path to the posix form. On Windows, \\ will be
 * replaced with /.
 *
 * @param pth. Path to transform.
 * @return string Posix path.
 */
function toPosixPath(pth) {
    return pth.replace(/[\\]/g, '/');
}
exports.toPosixPath = toPosixPath;
/**
 * toWin32Path converts the given path to the win32 form. On Linux, / will be
 * replaced with \\.
 *
 * @param pth. Path to transform.
 * @return string Win32 path.
 */
function toWin32Path(pth) {
    return pth.replace(/[/]/g, '\\');
}
exports.toWin32Path = toWin32Path;
/**
 * toPlatformPath converts the given path to a platform-specific path. It does
 * this by replacing instances of / and \ with the platform-specific path
 * separator.
 *
 * @param pth The path to platformize.
 * @return string The platform-specific path.
 */
function toPlatformPath(pth) {
    return pth.replace(/[/\\]/g, path.sep);
}
exports.toPlatformPath = toPlatformPath;
//# sourceMappingURL=path-utils.js.map

/***/ }),

/***/ 243:
/***/ (function(__unused_webpack_module, exports, __nccwpck_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.getDetails = exports.isLinux = exports.isMacOS = exports.isWindows = exports.arch = exports.platform = void 0;
const os_1 = __importDefault(__nccwpck_require__(37));
const exec = __importStar(__nccwpck_require__(514));
const getWindowsInfo = () => __awaiter(void 0, void 0, void 0, function* () {
    const { stdout: version } = yield exec.getExecOutput('powershell -command "(Get-CimInstance -ClassName Win32_OperatingSystem).Version"', undefined, {
        silent: true
    });
    const { stdout: name } = yield exec.getExecOutput('powershell -command "(Get-CimInstance -ClassName Win32_OperatingSystem).Caption"', undefined, {
        silent: true
    });
    return {
        name: name.trim(),
        version: version.trim()
    };
});
const getMacOsInfo = () => __awaiter(void 0, void 0, void 0, function* () {
    var _a, _b, _c, _d;
    const { stdout } = yield exec.getExecOutput('sw_vers', undefined, {
        silent: true
    });
    const version = (_b = (_a = stdout.match(/ProductVersion:\s*(.+)/)) === null || _a === void 0 ? void 0 : _a[1]) !== null && _b !== void 0 ? _b : '';
    const name = (_d = (_c = stdout.match(/ProductName:\s*(.+)/)) === null || _c === void 0 ? void 0 : _c[1]) !== null && _d !== void 0 ? _d : '';
    return {
        name,
        version
    };
});
const getLinuxInfo = () => __awaiter(void 0, void 0, void 0, function* () {
    const { stdout } = yield exec.getExecOutput('lsb_release', ['-i', '-r', '-s'], {
        silent: true
    });
    const [name, version] = stdout.trim().split('\n');
    return {
        name,
        version
    };
});
exports.platform = os_1.default.platform();
exports.arch = os_1.default.arch();
exports.isWindows = exports.platform === 'win32';
exports.isMacOS = exports.platform === 'darwin';
exports.isLinux = exports.platform === 'linux';
function getDetails() {
    return __awaiter(this, void 0, void 0, function* () {
        return Object.assign(Object.assign({}, (yield (exports.isWindows
            ? getWindowsInfo()
            : exports.isMacOS
                ? getMacOsInfo()
                : getLinuxInfo()))), { platform: exports.platform,
            arch: exports.arch,
            isWindows: exports.isWindows,
            isMacOS: exports.isMacOS,
            isLinux: exports.isLinux });
    });
}
exports.getDetails = getDetails;
//# sourceMappingURL=platform.js.map

/***/ }),

/***/ 327:
/***/ (function(__unused_webpack_module, exports, __nccwpck_require__) {


var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.summary = exports.markdownSummary = exports.SUMMARY_DOCS_URL = exports.SUMMARY_ENV_VAR = void 0;
const os_1 = __nccwpck_require__(37);
const fs_1 = __nccwpck_require__(147);
const { access, appendFile, writeFile } = fs_1.promises;
exports.SUMMARY_ENV_VAR = 'GITHUB_STEP_SUMMARY';
exports.SUMMARY_DOCS_URL = 'https://docs.github.com/actions/using-workflows/workflow-commands-for-github-actions#adding-a-job-summary';
class Summary {
    constructor() {
        this._buffer = '';
    }
    /**
     * Finds the summary file path from the environment, rejects if env var is not found or file does not exist
     * Also checks r/w permissions.
     *
     * @returns step summary file path
     */
    filePath() {
        return __awaiter(this, void 0, void 0, function* () {
            if (this._filePath) {
                return this._filePath;
            }
            const pathFromEnv = process.env[exports.SUMMARY_ENV_VAR];
            if (!pathFromEnv) {
                throw new Error(`Unable to find environment variable for $${exports.SUMMARY_ENV_VAR}. Check if your runtime environment supports job summaries.`);
            }
            try {
                yield access(pathFromEnv, fs_1.constants.R_OK | fs_1.constants.W_OK);
            }
            catch (_a) {
                throw new Error(`Unable to access summary file: '${pathFromEnv}'. Check if the file has correct read/write permissions.`);
            }
            this._filePath = pathFromEnv;
            return this._filePath;
        });
    }
    /**
     * Wraps content in an HTML tag, adding any HTML attributes
     *
     * @param {string} tag HTML tag to wrap
     * @param {string | null} content content within the tag
     * @param {[attribute: string]: string} attrs key-value list of HTML attributes to add
     *
     * @returns {string} content wrapped in HTML element
     */
    wrap(tag, content, attrs = {}) {
        const htmlAttrs = Object.entries(attrs)
            .map(([key, value]) => ` ${key}="${value}"`)
            .join('');
        if (!content) {
            return `<${tag}${htmlAttrs}>`;
        }
        return `<${tag}${htmlAttrs}>${content}</${tag}>`;
    }
    /**
     * Writes text in the buffer to the summary buffer file and empties buffer. Will append by default.
     *
     * @param {SummaryWriteOptions} [options] (optional) options for write operation
     *
     * @returns {Promise<Summary>} summary instance
     */
    write(options) {
        return __awaiter(this, void 0, void 0, function* () {
            const overwrite = !!(options === null || options === void 0 ? void 0 : options.overwrite);
            const filePath = yield this.filePath();
            const writeFunc = overwrite ? writeFile : appendFile;
            yield writeFunc(filePath, this._buffer, { encoding: 'utf8' });
            return this.emptyBuffer();
        });
    }
    /**
     * Clears the summary buffer and wipes the summary file
     *
     * @returns {Summary} summary instance
     */
    clear() {
        return __awaiter(this, void 0, void 0, function* () {
            return this.emptyBuffer().write({ overwrite: true });
        });
    }
    /**
     * Returns the current summary buffer as a string
     *
     * @returns {string} string of summary buffer
     */
    stringify() {
        return this._buffer;
    }
    /**
     * If the summary buffer is empty
     *
     * @returns {boolen} true if the buffer is empty
     */
    isEmptyBuffer() {
        return this._buffer.length === 0;
    }
    /**
     * Resets the summary buffer without writing to summary file
     *
     * @returns {Summary} summary instance
     */
    emptyBuffer() {
        this._buffer = '';
        return this;
    }
    /**
     * Adds raw text to the summary buffer
     *
     * @param {string} text content to add
     * @param {boolean} [addEOL=false] (optional) append an EOL to the raw text (default: false)
     *
     * @returns {Summary} summary instance
     */
    addRaw(text, addEOL = false) {
        this._buffer += text;
        return addEOL ? this.addEOL() : this;
    }
    /**
     * Adds the operating system-specific end-of-line marker to the buffer
     *
     * @returns {Summary} summary instance
     */
    addEOL() {
        return this.addRaw(os_1.EOL);
    }
    /**
     * Adds an HTML codeblock to the summary buffer
     *
     * @param {string} code content to render within fenced code block
     * @param {string} lang (optional) language to syntax highlight code
     *
     * @returns {Summary} summary instance
     */
    addCodeBlock(code, lang) {
        const attrs = Object.assign({}, (lang && { lang }));
        const element = this.wrap('pre', this.wrap('code', code), attrs);
        return this.addRaw(element).addEOL();
    }
    /**
     * Adds an HTML list to the summary buffer
     *
     * @param {string[]} items list of items to render
     * @param {boolean} [ordered=false] (optional) if the rendered list should be ordered or not (default: false)
     *
     * @returns {Summary} summary instance
     */
    addList(items, ordered = false) {
        const tag = ordered ? 'ol' : 'ul';
        const listItems = items.map(item => this.wrap('li', item)).join('');
        const element = this.wrap(tag, listItems);
        return this.addRaw(element).addEOL();
    }
    /**
     * Adds an HTML table to the summary buffer
     *
     * @param {SummaryTableCell[]} rows table rows
     *
     * @returns {Summary} summary instance
     */
    addTable(rows) {
        const tableBody = rows
            .map(row => {
            const cells = row
                .map(cell => {
                if (typeof cell === 'string') {
                    return this.wrap('td', cell);
                }
                const { header, data, colspan, rowspan } = cell;
                const tag = header ? 'th' : 'td';
                const attrs = Object.assign(Object.assign({}, (colspan && { colspan })), (rowspan && { rowspan }));
                return this.wrap(tag, data, attrs);
            })
                .join('');
            return this.wrap('tr', cells);
        })
            .join('');
        const element = this.wrap('table', tableBody);
        return this.addRaw(element).addEOL();
    }
    /**
     * Adds a collapsable HTML details element to the summary buffer
     *
     * @param {string} label text for the closed state
     * @param {string} content collapsable content
     *
     * @returns {Summary} summary instance
     */
    addDetails(label, content) {
        const element = this.wrap('details', this.wrap('summary', label) + content);
        return this.addRaw(element).addEOL();
    }
    /**
     * Adds an HTML image tag to the summary buffer
     *
     * @param {string} src path to the image you to embed
     * @param {string} alt text description of the image
     * @param {SummaryImageOptions} options (optional) addition image attributes
     *
     * @returns {Summary} summary instance
     */
    addImage(src, alt, options) {
        const { width, height } = options || {};
        const attrs = Object.assign(Object.assign({}, (width && { width })), (height && { height }));
        const element = this.wrap('img', null, Object.assign({ src, alt }, attrs));
        return this.addRaw(element).addEOL();
    }
    /**
     * Adds an HTML section heading element
     *
     * @param {string} text heading text
     * @param {number | string} [level=1] (optional) the heading level, default: 1
     *
     * @returns {Summary} summary instance
     */
    addHeading(text, level) {
        const tag = `h${level}`;
        const allowedTag = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'].includes(tag)
            ? tag
            : 'h1';
        const element = this.wrap(allowedTag, text);
        return this.addRaw(element).addEOL();
    }
    /**
     * Adds an HTML thematic break (<hr>) to the summary buffer
     *
     * @returns {Summary} summary instance
     */
    addSeparator() {
        const element = this.wrap('hr', null);
        return this.addRaw(element).addEOL();
    }
    /**
     * Adds an HTML line break (<br>) to the summary buffer
     *
     * @returns {Summary} summary instance
     */
    addBreak() {
        const element = this.wrap('br', null);
        return this.addRaw(element).addEOL();
    }
    /**
     * Adds an HTML blockquote to the summary buffer
     *
     * @param {string} text quote text
     * @param {string} cite (optional) citation url
     *
     * @returns {Summary} summary instance
     */
    addQuote(text, cite) {
        const attrs = Object.assign({}, (cite && { cite }));
        const element = this.wrap('blockquote', text, attrs);
        return this.addRaw(element).addEOL();
    }
    /**
     * Adds an HTML anchor tag to the summary buffer
     *
     * @param {string} text link text/content
     * @param {string} href hyperlink
     *
     * @returns {Summary} summary instance
     */
    addLink(text, href) {
        const element = this.wrap('a', text, { href });
        return this.addRaw(element).addEOL();
    }
}
const _summary = new Summary();
/**
 * @deprecated use `core.summary`
 */
exports.markdownSummary = _summary;
exports.summary = _summary;
//# sourceMappingURL=summary.js.map

/***/ }),

/***/ 278:
/***/ ((__unused_webpack_module, exports) => {


// We use any as a valid input type
/* eslint-disable @typescript-eslint/no-explicit-any */
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.toCommandProperties = exports.toCommandValue = void 0;
/**
 * Sanitizes an input into a string so it can be passed into issueCommand safely
 * @param input input to sanitize into a string
 */
function toCommandValue(input) {
    if (input === null || input === undefined) {
        return '';
    }
    else if (typeof input === 'string' || input instanceof String) {
        return input;
    }
    return JSON.stringify(input);
}
exports.toCommandValue = toCommandValue;
/**
 *
 * @param annotationProperties
 * @returns The command properties to send with the actual annotation command
 * See IssueCommandProperties: https://github.com/actions/runner/blob/main/src/Runner.Worker/ActionCommandManager.cs#L646
 */
function toCommandProperties(annotationProperties) {
    if (!Object.keys(annotationProperties).length) {
        return {};
    }
    return {
        title: annotationProperties.title,
        file: annotationProperties.file,
        line: annotationProperties.startLine,
        endLine: annotationProperties.endLine,
        col: annotationProperties.startColumn,
        endColumn: annotationProperties.endColumn
    };
}
exports.toCommandProperties = toCommandProperties;
//# sourceMappingURL=utils.js.map

/***/ }),

/***/ 514:
/***/ (function(__unused_webpack_module, exports, __nccwpck_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
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
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.getExecOutput = exports.exec = void 0;
const string_decoder_1 = __nccwpck_require__(576);
const tr = __importStar(__nccwpck_require__(159));
/**
 * Exec a command.
 * Output will be streamed to the live console.
 * Returns promise with return code
 *
 * @param     commandLine        command to execute (can include additional args). Must be correctly escaped.
 * @param     args               optional arguments for tool. Escaping is handled by the lib.
 * @param     options            optional exec options.  See ExecOptions
 * @returns   Promise<number>    exit code
 */
function exec(commandLine, args, options) {
    return __awaiter(this, void 0, void 0, function* () {
        const commandArgs = tr.argStringToArray(commandLine);
        if (commandArgs.length === 0) {
            throw new Error(`Parameter 'commandLine' cannot be null or empty.`);
        }
        // Path to tool to execute should be first arg
        const toolPath = commandArgs[0];
        args = commandArgs.slice(1).concat(args || []);
        const runner = new tr.ToolRunner(toolPath, args, options);
        return runner.exec();
    });
}
exports.exec = exec;
/**
 * Exec a command and get the output.
 * Output will be streamed to the live console.
 * Returns promise with the exit code and collected stdout and stderr
 *
 * @param     commandLine           command to execute (can include additional args). Must be correctly escaped.
 * @param     args                  optional arguments for tool. Escaping is handled by the lib.
 * @param     options               optional exec options.  See ExecOptions
 * @returns   Promise<ExecOutput>   exit code, stdout, and stderr
 */
function getExecOutput(commandLine, args, options) {
    var _a, _b;
    return __awaiter(this, void 0, void 0, function* () {
        let stdout = '';
        let stderr = '';
        //Using string decoder covers the case where a mult-byte character is split
        const stdoutDecoder = new string_decoder_1.StringDecoder('utf8');
        const stderrDecoder = new string_decoder_1.StringDecoder('utf8');
        const originalStdoutListener = (_a = options === null || options === void 0 ? void 0 : options.listeners) === null || _a === void 0 ? void 0 : _a.stdout;
        const originalStdErrListener = (_b = options === null || options === void 0 ? void 0 : options.listeners) === null || _b === void 0 ? void 0 : _b.stderr;
        const stdErrListener = (data) => {
            stderr += stderrDecoder.write(data);
            if (originalStdErrListener) {
                originalStdErrListener(data);
            }
        };
        const stdOutListener = (data) => {
            stdout += stdoutDecoder.write(data);
            if (originalStdoutListener) {
                originalStdoutListener(data);
            }
        };
        const listeners = Object.assign(Object.assign({}, options === null || options === void 0 ? void 0 : options.listeners), { stdout: stdOutListener, stderr: stdErrListener });
        const exitCode = yield exec(commandLine, args, Object.assign(Object.assign({}, options), { listeners }));
        //flush any remaining characters
        stdout += stdoutDecoder.end();
        stderr += stderrDecoder.end();
        return {
            exitCode,
            stdout,
            stderr
        };
    });
}
exports.getExecOutput = getExecOutput;
//# sourceMappingURL=exec.js.map

/***/ }),

/***/ 159:
/***/ (function(__unused_webpack_module, exports, __nccwpck_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
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
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.argStringToArray = exports.ToolRunner = void 0;
const os = __importStar(__nccwpck_require__(37));
const events = __importStar(__nccwpck_require__(361));
const child = __importStar(__nccwpck_require__(81));
const path = __importStar(__nccwpck_require__(17));
const io = __importStar(__nccwpck_require__(436));
const ioUtil = __importStar(__nccwpck_require__(962));
const timers_1 = __nccwpck_require__(512);
/* eslint-disable @typescript-eslint/unbound-method */
const IS_WINDOWS = process.platform === 'win32';
/*
 * Class for running command line tools. Handles quoting and arg parsing in a platform agnostic way.
 */
class ToolRunner extends events.EventEmitter {
    constructor(toolPath, args, options) {
        super();
        if (!toolPath) {
            throw new Error("Parameter 'toolPath' cannot be null or empty.");
        }
        this.toolPath = toolPath;
        this.args = args || [];
        this.options = options || {};
    }
    _debug(message) {
        if (this.options.listeners && this.options.listeners.debug) {
            this.options.listeners.debug(message);
        }
    }
    _getCommandString(options, noPrefix) {
        const toolPath = this._getSpawnFileName();
        const args = this._getSpawnArgs(options);
        let cmd = noPrefix ? '' : '[command]'; // omit prefix when piped to a second tool
        if (IS_WINDOWS) {
            // Windows + cmd file
            if (this._isCmdFile()) {
                cmd += toolPath;
                for (const a of args) {
                    cmd += ` ${a}`;
                }
            }
            // Windows + verbatim
            else if (options.windowsVerbatimArguments) {
                cmd += `"${toolPath}"`;
                for (const a of args) {
                    cmd += ` ${a}`;
                }
            }
            // Windows (regular)
            else {
                cmd += this._windowsQuoteCmdArg(toolPath);
                for (const a of args) {
                    cmd += ` ${this._windowsQuoteCmdArg(a)}`;
                }
            }
        }
        else {
            // OSX/Linux - this can likely be improved with some form of quoting.
            // creating processes on Unix is fundamentally different than Windows.
            // on Unix, execvp() takes an arg array.
            cmd += toolPath;
            for (const a of args) {
                cmd += ` ${a}`;
            }
        }
        return cmd;
    }
    _processLineBuffer(data, strBuffer, onLine) {
        try {
            let s = strBuffer + data.toString();
            let n = s.indexOf(os.EOL);
            while (n > -1) {
                const line = s.substring(0, n);
                onLine(line);
                // the rest of the string ...
                s = s.substring(n + os.EOL.length);
                n = s.indexOf(os.EOL);
            }
            return s;
        }
        catch (err) {
            // streaming lines to console is best effort.  Don't fail a build.
            this._debug(`error processing line. Failed with error ${err}`);
            return '';
        }
    }
    _getSpawnFileName() {
        if (IS_WINDOWS) {
            if (this._isCmdFile()) {
                return process.env['COMSPEC'] || 'cmd.exe';
            }
        }
        return this.toolPath;
    }
    _getSpawnArgs(options) {
        if (IS_WINDOWS) {
            if (this._isCmdFile()) {
                let argline = `/D /S /C "${this._windowsQuoteCmdArg(this.toolPath)}`;
                for (const a of this.args) {
                    argline += ' ';
                    argline += options.windowsVerbatimArguments
                        ? a
                        : this._windowsQuoteCmdArg(a);
                }
                argline += '"';
                return [argline];
            }
        }
        return this.args;
    }
    _endsWith(str, end) {
        return str.endsWith(end);
    }
    _isCmdFile() {
        const upperToolPath = this.toolPath.toUpperCase();
        return (this._endsWith(upperToolPath, '.CMD') ||
            this._endsWith(upperToolPath, '.BAT'));
    }
    _windowsQuoteCmdArg(arg) {
        // for .exe, apply the normal quoting rules that libuv applies
        if (!this._isCmdFile()) {
            return this._uvQuoteCmdArg(arg);
        }
        // otherwise apply quoting rules specific to the cmd.exe command line parser.
        // the libuv rules are generic and are not designed specifically for cmd.exe
        // command line parser.
        //
        // for a detailed description of the cmd.exe command line parser, refer to
        // http://stackoverflow.com/questions/4094699/how-does-the-windows-command-interpreter-cmd-exe-parse-scripts/7970912#7970912
        // need quotes for empty arg
        if (!arg) {
            return '""';
        }
        // determine whether the arg needs to be quoted
        const cmdSpecialChars = [
            ' ',
            '\t',
            '&',
            '(',
            ')',
            '[',
            ']',
            '{',
            '}',
            '^',
            '=',
            ';',
            '!',
            "'",
            '+',
            ',',
            '`',
            '~',
            '|',
            '<',
            '>',
            '"'
        ];
        let needsQuotes = false;
        for (const char of arg) {
            if (cmdSpecialChars.some(x => x === char)) {
                needsQuotes = true;
                break;
            }
        }
        // short-circuit if quotes not needed
        if (!needsQuotes) {
            return arg;
        }
        // the following quoting rules are very similar to the rules that by libuv applies.
        //
        // 1) wrap the string in quotes
        //
        // 2) double-up quotes - i.e. " => ""
        //
        //    this is different from the libuv quoting rules. libuv replaces " with \", which unfortunately
        //    doesn't work well with a cmd.exe command line.
        //
        //    note, replacing " with "" also works well if the arg is passed to a downstream .NET console app.
        //    for example, the command line:
        //          foo.exe "myarg:""my val"""
        //    is parsed by a .NET console app into an arg array:
        //          [ "myarg:\"my val\"" ]
        //    which is the same end result when applying libuv quoting rules. although the actual
        //    command line from libuv quoting rules would look like:
        //          foo.exe "myarg:\"my val\""
        //
        // 3) double-up slashes that precede a quote,
        //    e.g.  hello \world    => "hello \world"
        //          hello\"world    => "hello\\""world"
        //          hello\\"world   => "hello\\\\""world"
        //          hello world\    => "hello world\\"
        //
        //    technically this is not required for a cmd.exe command line, or the batch argument parser.
        //    the reasons for including this as a .cmd quoting rule are:
        //
        //    a) this is optimized for the scenario where the argument is passed from the .cmd file to an
        //       external program. many programs (e.g. .NET console apps) rely on the slash-doubling rule.
        //
        //    b) it's what we've been doing previously (by deferring to node default behavior) and we
        //       haven't heard any complaints about that aspect.
        //
        // note, a weakness of the quoting rules chosen here, is that % is not escaped. in fact, % cannot be
        // escaped when used on the command line directly - even though within a .cmd file % can be escaped
        // by using %%.
        //
        // the saving grace is, on the command line, %var% is left as-is if var is not defined. this contrasts
        // the line parsing rules within a .cmd file, where if var is not defined it is replaced with nothing.
        //
        // one option that was explored was replacing % with ^% - i.e. %var% => ^%var^%. this hack would
        // often work, since it is unlikely that var^ would exist, and the ^ character is removed when the
        // variable is used. the problem, however, is that ^ is not removed when %* is used to pass the args
        // to an external program.
        //
        // an unexplored potential solution for the % escaping problem, is to create a wrapper .cmd file.
        // % can be escaped within a .cmd file.
        let reverse = '"';
        let quoteHit = true;
        for (let i = arg.length; i > 0; i--) {
            // walk the string in reverse
            reverse += arg[i - 1];
            if (quoteHit && arg[i - 1] === '\\') {
                reverse += '\\'; // double the slash
            }
            else if (arg[i - 1] === '"') {
                quoteHit = true;
                reverse += '"'; // double the quote
            }
            else {
                quoteHit = false;
            }
        }
        reverse += '"';
        return reverse
            .split('')
            .reverse()
            .join('');
    }
    _uvQuoteCmdArg(arg) {
        // Tool runner wraps child_process.spawn() and needs to apply the same quoting as
        // Node in certain cases where the undocumented spawn option windowsVerbatimArguments
        // is used.
        //
        // Since this function is a port of quote_cmd_arg from Node 4.x (technically, lib UV,
        // see https://github.com/nodejs/node/blob/v4.x/deps/uv/src/win/process.c for details),
        // pasting copyright notice from Node within this function:
        //
        //      Copyright Joyent, Inc. and other Node contributors. All rights reserved.
        //
        //      Permission is hereby granted, free of charge, to any person obtaining a copy
        //      of this software and associated documentation files (the "Software"), to
        //      deal in the Software without restriction, including without limitation the
        //      rights to use, copy, modify, merge, publish, distribute, sublicense, and/or
        //      sell copies of the Software, and to permit persons to whom the Software is
        //      furnished to do so, subject to the following conditions:
        //
        //      The above copyright notice and this permission notice shall be included in
        //      all copies or substantial portions of the Software.
        //
        //      THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
        //      IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
        //      FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
        //      AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
        //      LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
        //      FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS
        //      IN THE SOFTWARE.
        if (!arg) {
            // Need double quotation for empty argument
            return '""';
        }
        if (!arg.includes(' ') && !arg.includes('\t') && !arg.includes('"')) {
            // No quotation needed
            return arg;
        }
        if (!arg.includes('"') && !arg.includes('\\')) {
            // No embedded double quotes or backslashes, so I can just wrap
            // quote marks around the whole thing.
            return `"${arg}"`;
        }
        // Expected input/output:
        //   input : hello"world
        //   output: "hello\"world"
        //   input : hello""world
        //   output: "hello\"\"world"
        //   input : hello\world
        //   output: hello\world
        //   input : hello\\world
        //   output: hello\\world
        //   input : hello\"world
        //   output: "hello\\\"world"
        //   input : hello\\"world
        //   output: "hello\\\\\"world"
        //   input : hello world\
        //   output: "hello world\\" - note the comment in libuv actually reads "hello world\"
        //                             but it appears the comment is wrong, it should be "hello world\\"
        let reverse = '"';
        let quoteHit = true;
        for (let i = arg.length; i > 0; i--) {
            // walk the string in reverse
            reverse += arg[i - 1];
            if (quoteHit && arg[i - 1] === '\\') {
                reverse += '\\';
            }
            else if (arg[i - 1] === '"') {
                quoteHit = true;
                reverse += '\\';
            }
            else {
                quoteHit = false;
            }
        }
        reverse += '"';
        return reverse
            .split('')
            .reverse()
            .join('');
    }
    _cloneExecOptions(options) {
        options = options || {};
        const result = {
            cwd: options.cwd || process.cwd(),
            env: options.env || process.env,
            silent: options.silent || false,
            windowsVerbatimArguments: options.windowsVerbatimArguments || false,
            failOnStdErr: options.failOnStdErr || false,
            ignoreReturnCode: options.ignoreReturnCode || false,
            delay: options.delay || 10000
        };
        result.outStream = options.outStream || process.stdout;
        result.errStream = options.errStream || process.stderr;
        return result;
    }
    _getSpawnOptions(options, toolPath) {
        options = options || {};
        const result = {};
        result.cwd = options.cwd;
        result.env = options.env;
        result['windowsVerbatimArguments'] =
            options.windowsVerbatimArguments || this._isCmdFile();
        if (options.windowsVerbatimArguments) {
            result.argv0 = `"${toolPath}"`;
        }
        return result;
    }
    /**
     * Exec a tool.
     * Output will be streamed to the live console.
     * Returns promise with return code
     *
     * @param     tool     path to tool to exec
     * @param     options  optional exec options.  See ExecOptions
     * @returns   number
     */
    exec() {
        return __awaiter(this, void 0, void 0, function* () {
            // root the tool path if it is unrooted and contains relative pathing
            if (!ioUtil.isRooted(this.toolPath) &&
                (this.toolPath.includes('/') ||
                    (IS_WINDOWS && this.toolPath.includes('\\')))) {
                // prefer options.cwd if it is specified, however options.cwd may also need to be rooted
                this.toolPath = path.resolve(process.cwd(), this.options.cwd || process.cwd(), this.toolPath);
            }
            // if the tool is only a file name, then resolve it from the PATH
            // otherwise verify it exists (add extension on Windows if necessary)
            this.toolPath = yield io.which(this.toolPath, true);
            return new Promise((resolve, reject) => __awaiter(this, void 0, void 0, function* () {
                this._debug(`exec tool: ${this.toolPath}`);
                this._debug('arguments:');
                for (const arg of this.args) {
                    this._debug(`   ${arg}`);
                }
                const optionsNonNull = this._cloneExecOptions(this.options);
                if (!optionsNonNull.silent && optionsNonNull.outStream) {
                    optionsNonNull.outStream.write(this._getCommandString(optionsNonNull) + os.EOL);
                }
                const state = new ExecState(optionsNonNull, this.toolPath);
                state.on('debug', (message) => {
                    this._debug(message);
                });
                if (this.options.cwd && !(yield ioUtil.exists(this.options.cwd))) {
                    return reject(new Error(`The cwd: ${this.options.cwd} does not exist!`));
                }
                const fileName = this._getSpawnFileName();
                const cp = child.spawn(fileName, this._getSpawnArgs(optionsNonNull), this._getSpawnOptions(this.options, fileName));
                let stdbuffer = '';
                if (cp.stdout) {
                    cp.stdout.on('data', (data) => {
                        if (this.options.listeners && this.options.listeners.stdout) {
                            this.options.listeners.stdout(data);
                        }
                        if (!optionsNonNull.silent && optionsNonNull.outStream) {
                            optionsNonNull.outStream.write(data);
                        }
                        stdbuffer = this._processLineBuffer(data, stdbuffer, (line) => {
                            if (this.options.listeners && this.options.listeners.stdline) {
                                this.options.listeners.stdline(line);
                            }
                        });
                    });
                }
                let errbuffer = '';
                if (cp.stderr) {
                    cp.stderr.on('data', (data) => {
                        state.processStderr = true;
                        if (this.options.listeners && this.options.listeners.stderr) {
                            this.options.listeners.stderr(data);
                        }
                        if (!optionsNonNull.silent &&
                            optionsNonNull.errStream &&
                            optionsNonNull.outStream) {
                            const s = optionsNonNull.failOnStdErr
                                ? optionsNonNull.errStream
                                : optionsNonNull.outStream;
                            s.write(data);
                        }
                        errbuffer = this._processLineBuffer(data, errbuffer, (line) => {
                            if (this.options.listeners && this.options.listeners.errline) {
                                this.options.listeners.errline(line);
                            }
                        });
                    });
                }
                cp.on('error', (err) => {
                    state.processError = err.message;
                    state.processExited = true;
                    state.processClosed = true;
                    state.CheckComplete();
                });
                cp.on('exit', (code) => {
                    state.processExitCode = code;
                    state.processExited = true;
                    this._debug(`Exit code ${code} received from tool '${this.toolPath}'`);
                    state.CheckComplete();
                });
                cp.on('close', (code) => {
                    state.processExitCode = code;
                    state.processExited = true;
                    state.processClosed = true;
                    this._debug(`STDIO streams have closed for tool '${this.toolPath}'`);
                    state.CheckComplete();
                });
                state.on('done', (error, exitCode) => {
                    if (stdbuffer.length > 0) {
                        this.emit('stdline', stdbuffer);
                    }
                    if (errbuffer.length > 0) {
                        this.emit('errline', errbuffer);
                    }
                    cp.removeAllListeners();
                    if (error) {
                        reject(error);
                    }
                    else {
                        resolve(exitCode);
                    }
                });
                if (this.options.input) {
                    if (!cp.stdin) {
                        throw new Error('child process missing stdin');
                    }
                    cp.stdin.end(this.options.input);
                }
            }));
        });
    }
}
exports.ToolRunner = ToolRunner;
/**
 * Convert an arg string to an array of args. Handles escaping
 *
 * @param    argString   string of arguments
 * @returns  string[]    array of arguments
 */
function argStringToArray(argString) {
    const args = [];
    let inQuotes = false;
    let escaped = false;
    let arg = '';
    function append(c) {
        // we only escape double quotes.
        if (escaped && c !== '"') {
            arg += '\\';
        }
        arg += c;
        escaped = false;
    }
    for (let i = 0; i < argString.length; i++) {
        const c = argString.charAt(i);
        if (c === '"') {
            if (!escaped) {
                inQuotes = !inQuotes;
            }
            else {
                append(c);
            }
            continue;
        }
        if (c === '\\' && escaped) {
            append(c);
            continue;
        }
        if (c === '\\' && inQuotes) {
            escaped = true;
            continue;
        }
        if (c === ' ' && !inQuotes) {
            if (arg.length > 0) {
                args.push(arg);
                arg = '';
            }
            continue;
        }
        append(c);
    }
    if (arg.length > 0) {
        args.push(arg.trim());
    }
    return args;
}
exports.argStringToArray = argStringToArray;
class ExecState extends events.EventEmitter {
    constructor(options, toolPath) {
        super();
        this.processClosed = false; // tracks whether the process has exited and stdio is closed
        this.processError = '';
        this.processExitCode = 0;
        this.processExited = false; // tracks whether the process has exited
        this.processStderr = false; // tracks whether stderr was written to
        this.delay = 10000; // 10 seconds
        this.done = false;
        this.timeout = null;
        if (!toolPath) {
            throw new Error('toolPath must not be empty');
        }
        this.options = options;
        this.toolPath = toolPath;
        if (options.delay) {
            this.delay = options.delay;
        }
    }
    CheckComplete() {
        if (this.done) {
            return;
        }
        if (this.processClosed) {
            this._setResult();
        }
        else if (this.processExited) {
            this.timeout = timers_1.setTimeout(ExecState.HandleTimeout, this.delay, this);
        }
    }
    _debug(message) {
        this.emit('debug', message);
    }
    _setResult() {
        // determine whether there is an error
        let error;
        if (this.processExited) {
            if (this.processError) {
                error = new Error(`There was an error when attempting to execute the process '${this.toolPath}'. This may indicate the process failed to start. Error: ${this.processError}`);
            }
            else if (this.processExitCode !== 0 && !this.options.ignoreReturnCode) {
                error = new Error(`The process '${this.toolPath}' failed with exit code ${this.processExitCode}`);
            }
            else if (this.processStderr && this.options.failOnStdErr) {
                error = new Error(`The process '${this.toolPath}' failed because one or more lines were written to the STDERR stream`);
            }
        }
        // clear the timeout
        if (this.timeout) {
            clearTimeout(this.timeout);
            this.timeout = null;
        }
        this.done = true;
        this.emit('done', error, this.processExitCode);
    }
    static HandleTimeout(state) {
        if (state.done) {
            return;
        }
        if (!state.processClosed && state.processExited) {
            const message = `The STDIO streams did not close within ${state.delay /
                1000} seconds of the exit event from process '${state.toolPath}'. This may indicate a child process inherited the STDIO streams and has not yet exited.`;
            state._debug(message);
        }
        state._setResult();
    }
}
//# sourceMappingURL=toolrunner.js.map

/***/ }),

/***/ 526:
/***/ (function(__unused_webpack_module, exports) {


var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.PersonalAccessTokenCredentialHandler = exports.BearerCredentialHandler = exports.BasicCredentialHandler = void 0;
class BasicCredentialHandler {
    constructor(username, password) {
        this.username = username;
        this.password = password;
    }
    prepareRequest(options) {
        if (!options.headers) {
            throw Error('The request has no headers');
        }
        options.headers['Authorization'] = `Basic ${Buffer.from(`${this.username}:${this.password}`).toString('base64')}`;
    }
    // This handler cannot handle 401
    canHandleAuthentication() {
        return false;
    }
    handleAuthentication() {
        return __awaiter(this, void 0, void 0, function* () {
            throw new Error('not implemented');
        });
    }
}
exports.BasicCredentialHandler = BasicCredentialHandler;
class BearerCredentialHandler {
    constructor(token) {
        this.token = token;
    }
    // currently implements pre-authorization
    // TODO: support preAuth = false where it hooks on 401
    prepareRequest(options) {
        if (!options.headers) {
            throw Error('The request has no headers');
        }
        options.headers['Authorization'] = `Bearer ${this.token}`;
    }
    // This handler cannot handle 401
    canHandleAuthentication() {
        return false;
    }
    handleAuthentication() {
        return __awaiter(this, void 0, void 0, function* () {
            throw new Error('not implemented');
        });
    }
}
exports.BearerCredentialHandler = BearerCredentialHandler;
class PersonalAccessTokenCredentialHandler {
    constructor(token) {
        this.token = token;
    }
    // currently implements pre-authorization
    // TODO: support preAuth = false where it hooks on 401
    prepareRequest(options) {
        if (!options.headers) {
            throw Error('The request has no headers');
        }
        options.headers['Authorization'] = `Basic ${Buffer.from(`PAT:${this.token}`).toString('base64')}`;
    }
    // This handler cannot handle 401
    canHandleAuthentication() {
        return false;
    }
    handleAuthentication() {
        return __awaiter(this, void 0, void 0, function* () {
            throw new Error('not implemented');
        });
    }
}
exports.PersonalAccessTokenCredentialHandler = PersonalAccessTokenCredentialHandler;
//# sourceMappingURL=auth.js.map

/***/ }),

/***/ 255:
/***/ (function(__unused_webpack_module, exports, __nccwpck_require__) {


/* eslint-disable @typescript-eslint/no-explicit-any */
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
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
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.HttpClient = exports.isHttps = exports.HttpClientResponse = exports.HttpClientError = exports.getProxyUrl = exports.MediaTypes = exports.Headers = exports.HttpCodes = void 0;
const http = __importStar(__nccwpck_require__(685));
const https = __importStar(__nccwpck_require__(687));
const pm = __importStar(__nccwpck_require__(835));
const tunnel = __importStar(__nccwpck_require__(294));
var HttpCodes;
(function (HttpCodes) {
    HttpCodes[HttpCodes["OK"] = 200] = "OK";
    HttpCodes[HttpCodes["MultipleChoices"] = 300] = "MultipleChoices";
    HttpCodes[HttpCodes["MovedPermanently"] = 301] = "MovedPermanently";
    HttpCodes[HttpCodes["ResourceMoved"] = 302] = "ResourceMoved";
    HttpCodes[HttpCodes["SeeOther"] = 303] = "SeeOther";
    HttpCodes[HttpCodes["NotModified"] = 304] = "NotModified";
    HttpCodes[HttpCodes["UseProxy"] = 305] = "UseProxy";
    HttpCodes[HttpCodes["SwitchProxy"] = 306] = "SwitchProxy";
    HttpCodes[HttpCodes["TemporaryRedirect"] = 307] = "TemporaryRedirect";
    HttpCodes[HttpCodes["PermanentRedirect"] = 308] = "PermanentRedirect";
    HttpCodes[HttpCodes["BadRequest"] = 400] = "BadRequest";
    HttpCodes[HttpCodes["Unauthorized"] = 401] = "Unauthorized";
    HttpCodes[HttpCodes["PaymentRequired"] = 402] = "PaymentRequired";
    HttpCodes[HttpCodes["Forbidden"] = 403] = "Forbidden";
    HttpCodes[HttpCodes["NotFound"] = 404] = "NotFound";
    HttpCodes[HttpCodes["MethodNotAllowed"] = 405] = "MethodNotAllowed";
    HttpCodes[HttpCodes["NotAcceptable"] = 406] = "NotAcceptable";
    HttpCodes[HttpCodes["ProxyAuthenticationRequired"] = 407] = "ProxyAuthenticationRequired";
    HttpCodes[HttpCodes["RequestTimeout"] = 408] = "RequestTimeout";
    HttpCodes[HttpCodes["Conflict"] = 409] = "Conflict";
    HttpCodes[HttpCodes["Gone"] = 410] = "Gone";
    HttpCodes[HttpCodes["TooManyRequests"] = 429] = "TooManyRequests";
    HttpCodes[HttpCodes["InternalServerError"] = 500] = "InternalServerError";
    HttpCodes[HttpCodes["NotImplemented"] = 501] = "NotImplemented";
    HttpCodes[HttpCodes["BadGateway"] = 502] = "BadGateway";
    HttpCodes[HttpCodes["ServiceUnavailable"] = 503] = "ServiceUnavailable";
    HttpCodes[HttpCodes["GatewayTimeout"] = 504] = "GatewayTimeout";
})(HttpCodes = exports.HttpCodes || (exports.HttpCodes = {}));
var Headers;
(function (Headers) {
    Headers["Accept"] = "accept";
    Headers["ContentType"] = "content-type";
})(Headers = exports.Headers || (exports.Headers = {}));
var MediaTypes;
(function (MediaTypes) {
    MediaTypes["ApplicationJson"] = "application/json";
})(MediaTypes = exports.MediaTypes || (exports.MediaTypes = {}));
/**
 * Returns the proxy URL, depending upon the supplied url and proxy environment variables.
 * @param serverUrl  The server URL where the request will be sent. For example, https://api.github.com
 */
function getProxyUrl(serverUrl) {
    const proxyUrl = pm.getProxyUrl(new URL(serverUrl));
    return proxyUrl ? proxyUrl.href : '';
}
exports.getProxyUrl = getProxyUrl;
const HttpRedirectCodes = [
    HttpCodes.MovedPermanently,
    HttpCodes.ResourceMoved,
    HttpCodes.SeeOther,
    HttpCodes.TemporaryRedirect,
    HttpCodes.PermanentRedirect
];
const HttpResponseRetryCodes = [
    HttpCodes.BadGateway,
    HttpCodes.ServiceUnavailable,
    HttpCodes.GatewayTimeout
];
const RetryableHttpVerbs = ['OPTIONS', 'GET', 'DELETE', 'HEAD'];
const ExponentialBackoffCeiling = 10;
const ExponentialBackoffTimeSlice = 5;
class HttpClientError extends Error {
    constructor(message, statusCode) {
        super(message);
        this.name = 'HttpClientError';
        this.statusCode = statusCode;
        Object.setPrototypeOf(this, HttpClientError.prototype);
    }
}
exports.HttpClientError = HttpClientError;
class HttpClientResponse {
    constructor(message) {
        this.message = message;
    }
    readBody() {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve) => __awaiter(this, void 0, void 0, function* () {
                let output = Buffer.alloc(0);
                this.message.on('data', (chunk) => {
                    output = Buffer.concat([output, chunk]);
                });
                this.message.on('end', () => {
                    resolve(output.toString());
                });
            }));
        });
    }
}
exports.HttpClientResponse = HttpClientResponse;
function isHttps(requestUrl) {
    const parsedUrl = new URL(requestUrl);
    return parsedUrl.protocol === 'https:';
}
exports.isHttps = isHttps;
class HttpClient {
    constructor(userAgent, handlers, requestOptions) {
        this._ignoreSslError = false;
        this._allowRedirects = true;
        this._allowRedirectDowngrade = false;
        this._maxRedirects = 50;
        this._allowRetries = false;
        this._maxRetries = 1;
        this._keepAlive = false;
        this._disposed = false;
        this.userAgent = userAgent;
        this.handlers = handlers || [];
        this.requestOptions = requestOptions;
        if (requestOptions) {
            if (requestOptions.ignoreSslError != null) {
                this._ignoreSslError = requestOptions.ignoreSslError;
            }
            this._socketTimeout = requestOptions.socketTimeout;
            if (requestOptions.allowRedirects != null) {
                this._allowRedirects = requestOptions.allowRedirects;
            }
            if (requestOptions.allowRedirectDowngrade != null) {
                this._allowRedirectDowngrade = requestOptions.allowRedirectDowngrade;
            }
            if (requestOptions.maxRedirects != null) {
                this._maxRedirects = Math.max(requestOptions.maxRedirects, 0);
            }
            if (requestOptions.keepAlive != null) {
                this._keepAlive = requestOptions.keepAlive;
            }
            if (requestOptions.allowRetries != null) {
                this._allowRetries = requestOptions.allowRetries;
            }
            if (requestOptions.maxRetries != null) {
                this._maxRetries = requestOptions.maxRetries;
            }
        }
    }
    options(requestUrl, additionalHeaders) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.request('OPTIONS', requestUrl, null, additionalHeaders || {});
        });
    }
    get(requestUrl, additionalHeaders) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.request('GET', requestUrl, null, additionalHeaders || {});
        });
    }
    del(requestUrl, additionalHeaders) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.request('DELETE', requestUrl, null, additionalHeaders || {});
        });
    }
    post(requestUrl, data, additionalHeaders) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.request('POST', requestUrl, data, additionalHeaders || {});
        });
    }
    patch(requestUrl, data, additionalHeaders) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.request('PATCH', requestUrl, data, additionalHeaders || {});
        });
    }
    put(requestUrl, data, additionalHeaders) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.request('PUT', requestUrl, data, additionalHeaders || {});
        });
    }
    head(requestUrl, additionalHeaders) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.request('HEAD', requestUrl, null, additionalHeaders || {});
        });
    }
    sendStream(verb, requestUrl, stream, additionalHeaders) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.request(verb, requestUrl, stream, additionalHeaders);
        });
    }
    /**
     * Gets a typed object from an endpoint
     * Be aware that not found returns a null.  Other errors (4xx, 5xx) reject the promise
     */
    getJson(requestUrl, additionalHeaders = {}) {
        return __awaiter(this, void 0, void 0, function* () {
            additionalHeaders[Headers.Accept] = this._getExistingOrDefaultHeader(additionalHeaders, Headers.Accept, MediaTypes.ApplicationJson);
            const res = yield this.get(requestUrl, additionalHeaders);
            return this._processResponse(res, this.requestOptions);
        });
    }
    postJson(requestUrl, obj, additionalHeaders = {}) {
        return __awaiter(this, void 0, void 0, function* () {
            const data = JSON.stringify(obj, null, 2);
            additionalHeaders[Headers.Accept] = this._getExistingOrDefaultHeader(additionalHeaders, Headers.Accept, MediaTypes.ApplicationJson);
            additionalHeaders[Headers.ContentType] = this._getExistingOrDefaultHeader(additionalHeaders, Headers.ContentType, MediaTypes.ApplicationJson);
            const res = yield this.post(requestUrl, data, additionalHeaders);
            return this._processResponse(res, this.requestOptions);
        });
    }
    putJson(requestUrl, obj, additionalHeaders = {}) {
        return __awaiter(this, void 0, void 0, function* () {
            const data = JSON.stringify(obj, null, 2);
            additionalHeaders[Headers.Accept] = this._getExistingOrDefaultHeader(additionalHeaders, Headers.Accept, MediaTypes.ApplicationJson);
            additionalHeaders[Headers.ContentType] = this._getExistingOrDefaultHeader(additionalHeaders, Headers.ContentType, MediaTypes.ApplicationJson);
            const res = yield this.put(requestUrl, data, additionalHeaders);
            return this._processResponse(res, this.requestOptions);
        });
    }
    patchJson(requestUrl, obj, additionalHeaders = {}) {
        return __awaiter(this, void 0, void 0, function* () {
            const data = JSON.stringify(obj, null, 2);
            additionalHeaders[Headers.Accept] = this._getExistingOrDefaultHeader(additionalHeaders, Headers.Accept, MediaTypes.ApplicationJson);
            additionalHeaders[Headers.ContentType] = this._getExistingOrDefaultHeader(additionalHeaders, Headers.ContentType, MediaTypes.ApplicationJson);
            const res = yield this.patch(requestUrl, data, additionalHeaders);
            return this._processResponse(res, this.requestOptions);
        });
    }
    /**
     * Makes a raw http request.
     * All other methods such as get, post, patch, and request ultimately call this.
     * Prefer get, del, post and patch
     */
    request(verb, requestUrl, data, headers) {
        return __awaiter(this, void 0, void 0, function* () {
            if (this._disposed) {
                throw new Error('Client has already been disposed.');
            }
            const parsedUrl = new URL(requestUrl);
            let info = this._prepareRequest(verb, parsedUrl, headers);
            // Only perform retries on reads since writes may not be idempotent.
            const maxTries = this._allowRetries && RetryableHttpVerbs.includes(verb)
                ? this._maxRetries + 1
                : 1;
            let numTries = 0;
            let response;
            do {
                response = yield this.requestRaw(info, data);
                // Check if it's an authentication challenge
                if (response &&
                    response.message &&
                    response.message.statusCode === HttpCodes.Unauthorized) {
                    let authenticationHandler;
                    for (const handler of this.handlers) {
                        if (handler.canHandleAuthentication(response)) {
                            authenticationHandler = handler;
                            break;
                        }
                    }
                    if (authenticationHandler) {
                        return authenticationHandler.handleAuthentication(this, info, data);
                    }
                    else {
                        // We have received an unauthorized response but have no handlers to handle it.
                        // Let the response return to the caller.
                        return response;
                    }
                }
                let redirectsRemaining = this._maxRedirects;
                while (response.message.statusCode &&
                    HttpRedirectCodes.includes(response.message.statusCode) &&
                    this._allowRedirects &&
                    redirectsRemaining > 0) {
                    const redirectUrl = response.message.headers['location'];
                    if (!redirectUrl) {
                        // if there's no location to redirect to, we won't
                        break;
                    }
                    const parsedRedirectUrl = new URL(redirectUrl);
                    if (parsedUrl.protocol === 'https:' &&
                        parsedUrl.protocol !== parsedRedirectUrl.protocol &&
                        !this._allowRedirectDowngrade) {
                        throw new Error('Redirect from HTTPS to HTTP protocol. This downgrade is not allowed for security reasons. If you want to allow this behavior, set the allowRedirectDowngrade option to true.');
                    }
                    // we need to finish reading the response before reassigning response
                    // which will leak the open socket.
                    yield response.readBody();
                    // strip authorization header if redirected to a different hostname
                    if (parsedRedirectUrl.hostname !== parsedUrl.hostname) {
                        for (const header in headers) {
                            // header names are case insensitive
                            if (header.toLowerCase() === 'authorization') {
                                delete headers[header];
                            }
                        }
                    }
                    // let's make the request with the new redirectUrl
                    info = this._prepareRequest(verb, parsedRedirectUrl, headers);
                    response = yield this.requestRaw(info, data);
                    redirectsRemaining--;
                }
                if (!response.message.statusCode ||
                    !HttpResponseRetryCodes.includes(response.message.statusCode)) {
                    // If not a retry code, return immediately instead of retrying
                    return response;
                }
                numTries += 1;
                if (numTries < maxTries) {
                    yield response.readBody();
                    yield this._performExponentialBackoff(numTries);
                }
            } while (numTries < maxTries);
            return response;
        });
    }
    /**
     * Needs to be called if keepAlive is set to true in request options.
     */
    dispose() {
        if (this._agent) {
            this._agent.destroy();
        }
        this._disposed = true;
    }
    /**
     * Raw request.
     * @param info
     * @param data
     */
    requestRaw(info, data) {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => {
                function callbackForResult(err, res) {
                    if (err) {
                        reject(err);
                    }
                    else if (!res) {
                        // If `err` is not passed, then `res` must be passed.
                        reject(new Error('Unknown error'));
                    }
                    else {
                        resolve(res);
                    }
                }
                this.requestRawWithCallback(info, data, callbackForResult);
            });
        });
    }
    /**
     * Raw request with callback.
     * @param info
     * @param data
     * @param onResult
     */
    requestRawWithCallback(info, data, onResult) {
        if (typeof data === 'string') {
            if (!info.options.headers) {
                info.options.headers = {};
            }
            info.options.headers['Content-Length'] = Buffer.byteLength(data, 'utf8');
        }
        let callbackCalled = false;
        function handleResult(err, res) {
            if (!callbackCalled) {
                callbackCalled = true;
                onResult(err, res);
            }
        }
        const req = info.httpModule.request(info.options, (msg) => {
            const res = new HttpClientResponse(msg);
            handleResult(undefined, res);
        });
        let socket;
        req.on('socket', sock => {
            socket = sock;
        });
        // If we ever get disconnected, we want the socket to timeout eventually
        req.setTimeout(this._socketTimeout || 3 * 60000, () => {
            if (socket) {
                socket.end();
            }
            handleResult(new Error(`Request timeout: ${info.options.path}`));
        });
        req.on('error', function (err) {
            // err has statusCode property
            // res should have headers
            handleResult(err);
        });
        if (data && typeof data === 'string') {
            req.write(data, 'utf8');
        }
        if (data && typeof data !== 'string') {
            data.on('close', function () {
                req.end();
            });
            data.pipe(req);
        }
        else {
            req.end();
        }
    }
    /**
     * Gets an http agent. This function is useful when you need an http agent that handles
     * routing through a proxy server - depending upon the url and proxy environment variables.
     * @param serverUrl  The server URL where the request will be sent. For example, https://api.github.com
     */
    getAgent(serverUrl) {
        const parsedUrl = new URL(serverUrl);
        return this._getAgent(parsedUrl);
    }
    _prepareRequest(method, requestUrl, headers) {
        const info = {};
        info.parsedUrl = requestUrl;
        const usingSsl = info.parsedUrl.protocol === 'https:';
        info.httpModule = usingSsl ? https : http;
        const defaultPort = usingSsl ? 443 : 80;
        info.options = {};
        info.options.host = info.parsedUrl.hostname;
        info.options.port = info.parsedUrl.port
            ? parseInt(info.parsedUrl.port)
            : defaultPort;
        info.options.path =
            (info.parsedUrl.pathname || '') + (info.parsedUrl.search || '');
        info.options.method = method;
        info.options.headers = this._mergeHeaders(headers);
        if (this.userAgent != null) {
            info.options.headers['user-agent'] = this.userAgent;
        }
        info.options.agent = this._getAgent(info.parsedUrl);
        // gives handlers an opportunity to participate
        if (this.handlers) {
            for (const handler of this.handlers) {
                handler.prepareRequest(info.options);
            }
        }
        return info;
    }
    _mergeHeaders(headers) {
        if (this.requestOptions && this.requestOptions.headers) {
            return Object.assign({}, lowercaseKeys(this.requestOptions.headers), lowercaseKeys(headers || {}));
        }
        return lowercaseKeys(headers || {});
    }
    _getExistingOrDefaultHeader(additionalHeaders, header, _default) {
        let clientHeader;
        if (this.requestOptions && this.requestOptions.headers) {
            clientHeader = lowercaseKeys(this.requestOptions.headers)[header];
        }
        return additionalHeaders[header] || clientHeader || _default;
    }
    _getAgent(parsedUrl) {
        let agent;
        const proxyUrl = pm.getProxyUrl(parsedUrl);
        const useProxy = proxyUrl && proxyUrl.hostname;
        if (this._keepAlive && useProxy) {
            agent = this._proxyAgent;
        }
        if (this._keepAlive && !useProxy) {
            agent = this._agent;
        }
        // if agent is already assigned use that agent.
        if (agent) {
            return agent;
        }
        const usingSsl = parsedUrl.protocol === 'https:';
        let maxSockets = 100;
        if (this.requestOptions) {
            maxSockets = this.requestOptions.maxSockets || http.globalAgent.maxSockets;
        }
        // This is `useProxy` again, but we need to check `proxyURl` directly for TypeScripts's flow analysis.
        if (proxyUrl && proxyUrl.hostname) {
            const agentOptions = {
                maxSockets,
                keepAlive: this._keepAlive,
                proxy: Object.assign(Object.assign({}, ((proxyUrl.username || proxyUrl.password) && {
                    proxyAuth: `${proxyUrl.username}:${proxyUrl.password}`
                })), { host: proxyUrl.hostname, port: proxyUrl.port })
            };
            let tunnelAgent;
            const overHttps = proxyUrl.protocol === 'https:';
            if (usingSsl) {
                tunnelAgent = overHttps ? tunnel.httpsOverHttps : tunnel.httpsOverHttp;
            }
            else {
                tunnelAgent = overHttps ? tunnel.httpOverHttps : tunnel.httpOverHttp;
            }
            agent = tunnelAgent(agentOptions);
            this._proxyAgent = agent;
        }
        // if reusing agent across request and tunneling agent isn't assigned create a new agent
        if (this._keepAlive && !agent) {
            const options = { keepAlive: this._keepAlive, maxSockets };
            agent = usingSsl ? new https.Agent(options) : new http.Agent(options);
            this._agent = agent;
        }
        // if not using private agent and tunnel agent isn't setup then use global agent
        if (!agent) {
            agent = usingSsl ? https.globalAgent : http.globalAgent;
        }
        if (usingSsl && this._ignoreSslError) {
            // we don't want to set NODE_TLS_REJECT_UNAUTHORIZED=0 since that will affect request for entire process
            // http.RequestOptions doesn't expose a way to modify RequestOptions.agent.options
            // we have to cast it to any and change it directly
            agent.options = Object.assign(agent.options || {}, {
                rejectUnauthorized: false
            });
        }
        return agent;
    }
    _performExponentialBackoff(retryNumber) {
        return __awaiter(this, void 0, void 0, function* () {
            retryNumber = Math.min(ExponentialBackoffCeiling, retryNumber);
            const ms = ExponentialBackoffTimeSlice * Math.pow(2, retryNumber);
            return new Promise(resolve => setTimeout(() => resolve(), ms));
        });
    }
    _processResponse(res, options) {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => __awaiter(this, void 0, void 0, function* () {
                const statusCode = res.message.statusCode || 0;
                const response = {
                    statusCode,
                    result: null,
                    headers: {}
                };
                // not found leads to null obj returned
                if (statusCode === HttpCodes.NotFound) {
                    resolve(response);
                }
                // get the result from the body
                function dateTimeDeserializer(key, value) {
                    if (typeof value === 'string') {
                        const a = new Date(value);
                        if (!isNaN(a.valueOf())) {
                            return a;
                        }
                    }
                    return value;
                }
                let obj;
                let contents;
                try {
                    contents = yield res.readBody();
                    if (contents && contents.length > 0) {
                        if (options && options.deserializeDates) {
                            obj = JSON.parse(contents, dateTimeDeserializer);
                        }
                        else {
                            obj = JSON.parse(contents);
                        }
                        response.result = obj;
                    }
                    response.headers = res.message.headers;
                }
                catch (err) {
                    // Invalid resource (contents not json);  leaving result obj null
                }
                // note that 3xx redirects are handled by the http layer.
                if (statusCode > 299) {
                    let msg;
                    // if exception/error in body, attempt to get better error
                    if (obj && obj.message) {
                        msg = obj.message;
                    }
                    else if (contents && contents.length > 0) {
                        // it may be the case that the exception is in the body message as string
                        msg = contents;
                    }
                    else {
                        msg = `Failed request: (${statusCode})`;
                    }
                    const err = new HttpClientError(msg, statusCode);
                    err.result = response.result;
                    reject(err);
                }
                else {
                    resolve(response);
                }
            }));
        });
    }
}
exports.HttpClient = HttpClient;
const lowercaseKeys = (obj) => Object.keys(obj).reduce((c, k) => ((c[k.toLowerCase()] = obj[k]), c), {});
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 835:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.checkBypass = exports.getProxyUrl = void 0;
function getProxyUrl(reqUrl) {
    const usingSsl = reqUrl.protocol === 'https:';
    if (checkBypass(reqUrl)) {
        return undefined;
    }
    const proxyVar = (() => {
        if (usingSsl) {
            return process.env['https_proxy'] || process.env['HTTPS_PROXY'];
        }
        else {
            return process.env['http_proxy'] || process.env['HTTP_PROXY'];
        }
    })();
    if (proxyVar) {
        return new URL(proxyVar);
    }
    else {
        return undefined;
    }
}
exports.getProxyUrl = getProxyUrl;
function checkBypass(reqUrl) {
    if (!reqUrl.hostname) {
        return false;
    }
    const noProxy = process.env['no_proxy'] || process.env['NO_PROXY'] || '';
    if (!noProxy) {
        return false;
    }
    // Determine the request port
    let reqPort;
    if (reqUrl.port) {
        reqPort = Number(reqUrl.port);
    }
    else if (reqUrl.protocol === 'http:') {
        reqPort = 80;
    }
    else if (reqUrl.protocol === 'https:') {
        reqPort = 443;
    }
    // Format the request hostname and hostname with port
    const upperReqHosts = [reqUrl.hostname.toUpperCase()];
    if (typeof reqPort === 'number') {
        upperReqHosts.push(`${upperReqHosts[0]}:${reqPort}`);
    }
    // Compare request host against noproxy
    for (const upperNoProxyItem of noProxy
        .split(',')
        .map(x => x.trim().toUpperCase())
        .filter(x => x)) {
        if (upperReqHosts.some(x => x === upperNoProxyItem)) {
            return true;
        }
    }
    return false;
}
exports.checkBypass = checkBypass;
//# sourceMappingURL=proxy.js.map

/***/ }),

/***/ 962:
/***/ (function(__unused_webpack_module, exports, __nccwpck_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
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
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.getCmdPath = exports.tryGetExecutablePath = exports.isRooted = exports.isDirectory = exports.exists = exports.READONLY = exports.UV_FS_O_EXLOCK = exports.IS_WINDOWS = exports.unlink = exports.symlink = exports.stat = exports.rmdir = exports.rm = exports.rename = exports.readlink = exports.readdir = exports.open = exports.mkdir = exports.lstat = exports.copyFile = exports.chmod = void 0;
const fs = __importStar(__nccwpck_require__(147));
const path = __importStar(__nccwpck_require__(17));
_a = fs.promises
// export const {open} = 'fs'
, exports.chmod = _a.chmod, exports.copyFile = _a.copyFile, exports.lstat = _a.lstat, exports.mkdir = _a.mkdir, exports.open = _a.open, exports.readdir = _a.readdir, exports.readlink = _a.readlink, exports.rename = _a.rename, exports.rm = _a.rm, exports.rmdir = _a.rmdir, exports.stat = _a.stat, exports.symlink = _a.symlink, exports.unlink = _a.unlink;
// export const {open} = 'fs'
exports.IS_WINDOWS = process.platform === 'win32';
// See https://github.com/nodejs/node/blob/d0153aee367422d0858105abec186da4dff0a0c5/deps/uv/include/uv/win.h#L691
exports.UV_FS_O_EXLOCK = 0x10000000;
exports.READONLY = fs.constants.O_RDONLY;
function exists(fsPath) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            yield exports.stat(fsPath);
        }
        catch (err) {
            if (err.code === 'ENOENT') {
                return false;
            }
            throw err;
        }
        return true;
    });
}
exports.exists = exists;
function isDirectory(fsPath, useStat = false) {
    return __awaiter(this, void 0, void 0, function* () {
        const stats = useStat ? yield exports.stat(fsPath) : yield exports.lstat(fsPath);
        return stats.isDirectory();
    });
}
exports.isDirectory = isDirectory;
/**
 * On OSX/Linux, true if path starts with '/'. On Windows, true for paths like:
 * \, \hello, \\hello\share, C:, and C:\hello (and corresponding alternate separator cases).
 */
function isRooted(p) {
    p = normalizeSeparators(p);
    if (!p) {
        throw new Error('isRooted() parameter "p" cannot be empty');
    }
    if (exports.IS_WINDOWS) {
        return (p.startsWith('\\') || /^[A-Z]:/i.test(p) // e.g. \ or \hello or \\hello
        ); // e.g. C: or C:\hello
    }
    return p.startsWith('/');
}
exports.isRooted = isRooted;
/**
 * Best effort attempt to determine whether a file exists and is executable.
 * @param filePath    file path to check
 * @param extensions  additional file extensions to try
 * @return if file exists and is executable, returns the file path. otherwise empty string.
 */
function tryGetExecutablePath(filePath, extensions) {
    return __awaiter(this, void 0, void 0, function* () {
        let stats = undefined;
        try {
            // test file exists
            stats = yield exports.stat(filePath);
        }
        catch (err) {
            if (err.code !== 'ENOENT') {
                // eslint-disable-next-line no-console
                console.log(`Unexpected error attempting to determine if executable file exists '${filePath}': ${err}`);
            }
        }
        if (stats && stats.isFile()) {
            if (exports.IS_WINDOWS) {
                // on Windows, test for valid extension
                const upperExt = path.extname(filePath).toUpperCase();
                if (extensions.some(validExt => validExt.toUpperCase() === upperExt)) {
                    return filePath;
                }
            }
            else {
                if (isUnixExecutable(stats)) {
                    return filePath;
                }
            }
        }
        // try each extension
        const originalFilePath = filePath;
        for (const extension of extensions) {
            filePath = originalFilePath + extension;
            stats = undefined;
            try {
                stats = yield exports.stat(filePath);
            }
            catch (err) {
                if (err.code !== 'ENOENT') {
                    // eslint-disable-next-line no-console
                    console.log(`Unexpected error attempting to determine if executable file exists '${filePath}': ${err}`);
                }
            }
            if (stats && stats.isFile()) {
                if (exports.IS_WINDOWS) {
                    // preserve the case of the actual file (since an extension was appended)
                    try {
                        const directory = path.dirname(filePath);
                        const upperName = path.basename(filePath).toUpperCase();
                        for (const actualName of yield exports.readdir(directory)) {
                            if (upperName === actualName.toUpperCase()) {
                                filePath = path.join(directory, actualName);
                                break;
                            }
                        }
                    }
                    catch (err) {
                        // eslint-disable-next-line no-console
                        console.log(`Unexpected error attempting to determine the actual case of the file '${filePath}': ${err}`);
                    }
                    return filePath;
                }
                else {
                    if (isUnixExecutable(stats)) {
                        return filePath;
                    }
                }
            }
        }
        return '';
    });
}
exports.tryGetExecutablePath = tryGetExecutablePath;
function normalizeSeparators(p) {
    p = p || '';
    if (exports.IS_WINDOWS) {
        // convert slashes on Windows
        p = p.replace(/\//g, '\\');
        // remove redundant slashes
        return p.replace(/\\\\+/g, '\\');
    }
    // remove redundant slashes
    return p.replace(/\/\/+/g, '/');
}
// on Mac/Linux, test the execute bit
//     R   W  X  R  W X R W X
//   256 128 64 32 16 8 4 2 1
function isUnixExecutable(stats) {
    return ((stats.mode & 1) > 0 ||
        ((stats.mode & 8) > 0 && stats.gid === process.getgid()) ||
        ((stats.mode & 64) > 0 && stats.uid === process.getuid()));
}
// Get the path of cmd.exe in windows
function getCmdPath() {
    var _a;
    return (_a = process.env['COMSPEC']) !== null && _a !== void 0 ? _a : `cmd.exe`;
}
exports.getCmdPath = getCmdPath;
//# sourceMappingURL=io-util.js.map

/***/ }),

/***/ 436:
/***/ (function(__unused_webpack_module, exports, __nccwpck_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
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
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.findInPath = exports.which = exports.mkdirP = exports.rmRF = exports.mv = exports.cp = void 0;
const assert_1 = __nccwpck_require__(491);
const path = __importStar(__nccwpck_require__(17));
const ioUtil = __importStar(__nccwpck_require__(962));
/**
 * Copies a file or folder.
 * Based off of shelljs - https://github.com/shelljs/shelljs/blob/9237f66c52e5daa40458f94f9565e18e8132f5a6/src/cp.js
 *
 * @param     source    source path
 * @param     dest      destination path
 * @param     options   optional. See CopyOptions.
 */
function cp(source, dest, options = {}) {
    return __awaiter(this, void 0, void 0, function* () {
        const { force, recursive, copySourceDirectory } = readCopyOptions(options);
        const destStat = (yield ioUtil.exists(dest)) ? yield ioUtil.stat(dest) : null;
        // Dest is an existing file, but not forcing
        if (destStat && destStat.isFile() && !force) {
            return;
        }
        // If dest is an existing directory, should copy inside.
        const newDest = destStat && destStat.isDirectory() && copySourceDirectory
            ? path.join(dest, path.basename(source))
            : dest;
        if (!(yield ioUtil.exists(source))) {
            throw new Error(`no such file or directory: ${source}`);
        }
        const sourceStat = yield ioUtil.stat(source);
        if (sourceStat.isDirectory()) {
            if (!recursive) {
                throw new Error(`Failed to copy. ${source} is a directory, but tried to copy without recursive flag.`);
            }
            else {
                yield cpDirRecursive(source, newDest, 0, force);
            }
        }
        else {
            if (path.relative(source, newDest) === '') {
                // a file cannot be copied to itself
                throw new Error(`'${newDest}' and '${source}' are the same file`);
            }
            yield copyFile(source, newDest, force);
        }
    });
}
exports.cp = cp;
/**
 * Moves a path.
 *
 * @param     source    source path
 * @param     dest      destination path
 * @param     options   optional. See MoveOptions.
 */
function mv(source, dest, options = {}) {
    return __awaiter(this, void 0, void 0, function* () {
        if (yield ioUtil.exists(dest)) {
            let destExists = true;
            if (yield ioUtil.isDirectory(dest)) {
                // If dest is directory copy src into dest
                dest = path.join(dest, path.basename(source));
                destExists = yield ioUtil.exists(dest);
            }
            if (destExists) {
                if (options.force == null || options.force) {
                    yield rmRF(dest);
                }
                else {
                    throw new Error('Destination already exists');
                }
            }
        }
        yield mkdirP(path.dirname(dest));
        yield ioUtil.rename(source, dest);
    });
}
exports.mv = mv;
/**
 * Remove a path recursively with force
 *
 * @param inputPath path to remove
 */
function rmRF(inputPath) {
    return __awaiter(this, void 0, void 0, function* () {
        if (ioUtil.IS_WINDOWS) {
            // Check for invalid characters
            // https://docs.microsoft.com/en-us/windows/win32/fileio/naming-a-file
            if (/[*"<>|]/.test(inputPath)) {
                throw new Error('File path must not contain `*`, `"`, `<`, `>` or `|` on Windows');
            }
        }
        try {
            // note if path does not exist, error is silent
            yield ioUtil.rm(inputPath, {
                force: true,
                maxRetries: 3,
                recursive: true,
                retryDelay: 300
            });
        }
        catch (err) {
            throw new Error(`File was unable to be removed ${err}`);
        }
    });
}
exports.rmRF = rmRF;
/**
 * Make a directory.  Creates the full path with folders in between
 * Will throw if it fails
 *
 * @param   fsPath        path to create
 * @returns Promise<void>
 */
function mkdirP(fsPath) {
    return __awaiter(this, void 0, void 0, function* () {
        assert_1.ok(fsPath, 'a path argument must be provided');
        yield ioUtil.mkdir(fsPath, { recursive: true });
    });
}
exports.mkdirP = mkdirP;
/**
 * Returns path of a tool had the tool actually been invoked.  Resolves via paths.
 * If you check and the tool does not exist, it will throw.
 *
 * @param     tool              name of the tool
 * @param     check             whether to check if tool exists
 * @returns   Promise<string>   path to tool
 */
function which(tool, check) {
    return __awaiter(this, void 0, void 0, function* () {
        if (!tool) {
            throw new Error("parameter 'tool' is required");
        }
        // recursive when check=true
        if (check) {
            const result = yield which(tool, false);
            if (!result) {
                if (ioUtil.IS_WINDOWS) {
                    throw new Error(`Unable to locate executable file: ${tool}. Please verify either the file path exists or the file can be found within a directory specified by the PATH environment variable. Also verify the file has a valid extension for an executable file.`);
                }
                else {
                    throw new Error(`Unable to locate executable file: ${tool}. Please verify either the file path exists or the file can be found within a directory specified by the PATH environment variable. Also check the file mode to verify the file is executable.`);
                }
            }
            return result;
        }
        const matches = yield findInPath(tool);
        if (matches && matches.length > 0) {
            return matches[0];
        }
        return '';
    });
}
exports.which = which;
/**
 * Returns a list of all occurrences of the given tool on the system path.
 *
 * @returns   Promise<string[]>  the paths of the tool
 */
function findInPath(tool) {
    return __awaiter(this, void 0, void 0, function* () {
        if (!tool) {
            throw new Error("parameter 'tool' is required");
        }
        // build the list of extensions to try
        const extensions = [];
        if (ioUtil.IS_WINDOWS && process.env['PATHEXT']) {
            for (const extension of process.env['PATHEXT'].split(path.delimiter)) {
                if (extension) {
                    extensions.push(extension);
                }
            }
        }
        // if it's rooted, return it if exists. otherwise return empty.
        if (ioUtil.isRooted(tool)) {
            const filePath = yield ioUtil.tryGetExecutablePath(tool, extensions);
            if (filePath) {
                return [filePath];
            }
            return [];
        }
        // if any path separators, return empty
        if (tool.includes(path.sep)) {
            return [];
        }
        // build the list of directories
        //
        // Note, technically "where" checks the current directory on Windows. From a toolkit perspective,
        // it feels like we should not do this. Checking the current directory seems like more of a use
        // case of a shell, and the which() function exposed by the toolkit should strive for consistency
        // across platforms.
        const directories = [];
        if (process.env.PATH) {
            for (const p of process.env.PATH.split(path.delimiter)) {
                if (p) {
                    directories.push(p);
                }
            }
        }
        // find all matches
        const matches = [];
        for (const directory of directories) {
            const filePath = yield ioUtil.tryGetExecutablePath(path.join(directory, tool), extensions);
            if (filePath) {
                matches.push(filePath);
            }
        }
        return matches;
    });
}
exports.findInPath = findInPath;
function readCopyOptions(options) {
    const force = options.force == null ? true : options.force;
    const recursive = Boolean(options.recursive);
    const copySourceDirectory = options.copySourceDirectory == null
        ? true
        : Boolean(options.copySourceDirectory);
    return { force, recursive, copySourceDirectory };
}
function cpDirRecursive(sourceDir, destDir, currentDepth, force) {
    return __awaiter(this, void 0, void 0, function* () {
        // Ensure there is not a run away recursive copy
        if (currentDepth >= 255)
            return;
        currentDepth++;
        yield mkdirP(destDir);
        const files = yield ioUtil.readdir(sourceDir);
        for (const fileName of files) {
            const srcFile = `${sourceDir}/${fileName}`;
            const destFile = `${destDir}/${fileName}`;
            const srcFileStat = yield ioUtil.lstat(srcFile);
            if (srcFileStat.isDirectory()) {
                // Recurse
                yield cpDirRecursive(srcFile, destFile, currentDepth, force);
            }
            else {
                yield copyFile(srcFile, destFile, force);
            }
        }
        // Change the mode for the newly created directory
        yield ioUtil.chmod(destDir, (yield ioUtil.stat(sourceDir)).mode);
    });
}
// Buffered file copy
function copyFile(srcFile, destFile, force) {
    return __awaiter(this, void 0, void 0, function* () {
        if ((yield ioUtil.lstat(srcFile)).isSymbolicLink()) {
            // unlink/re-link it
            try {
                yield ioUtil.lstat(destFile);
                yield ioUtil.unlink(destFile);
            }
            catch (e) {
                // Try to override file permission
                if (e.code === 'EPERM') {
                    yield ioUtil.chmod(destFile, '0666');
                    yield ioUtil.unlink(destFile);
                }
                // other errors = it doesn't exist, no work to do
            }
            // Copy over symlink
            const symlinkFull = yield ioUtil.readlink(srcFile);
            yield ioUtil.symlink(symlinkFull, destFile, ioUtil.IS_WINDOWS ? 'junction' : null);
        }
        else if (!(yield ioUtil.exists(destFile)) || force) {
            yield ioUtil.copyFile(srcFile, destFile);
        }
    });
}
//# sourceMappingURL=io.js.map

/***/ }),

/***/ 678:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {



const cp = __nccwpck_require__(81);
const parse = __nccwpck_require__(756);
const enoent = __nccwpck_require__(419);

function spawn(command, args, options) {
    // Parse the arguments
    const parsed = parse(command, args, options);

    // Spawn the child process
    const spawned = cp.spawn(parsed.command, parsed.args, parsed.options);

    // Hook into child process "exit" event to emit an error if the command
    // does not exists, see: https://github.com/IndigoUnited/node-cross-spawn/issues/16
    enoent.hookChildProcess(spawned, parsed);

    return spawned;
}

function spawnSync(command, args, options) {
    // Parse the arguments
    const parsed = parse(command, args, options);

    // Spawn the child process
    const result = cp.spawnSync(parsed.command, parsed.args, parsed.options);

    // Analyze if the command does not exist, see: https://github.com/IndigoUnited/node-cross-spawn/issues/16
    result.error = result.error || enoent.verifyENOENTSync(result.status, parsed);

    return result;
}

module.exports = spawn;
module.exports.spawn = spawn;
module.exports.sync = spawnSync;

module.exports._parse = parse;
module.exports._enoent = enoent;


/***/ }),

/***/ 419:
/***/ ((module) => {



const isWin = process.platform === 'win32';

function notFoundError(original, syscall) {
    return Object.assign(new Error(`${syscall} ${original.command} ENOENT`), {
        code: 'ENOENT',
        errno: 'ENOENT',
        syscall: `${syscall} ${original.command}`,
        path: original.command,
        spawnargs: original.args,
    });
}

function hookChildProcess(cp, parsed) {
    if (!isWin) {
        return;
    }

    const originalEmit = cp.emit;

    cp.emit = function (name, arg1) {
        // If emitting "exit" event and exit code is 1, we need to check if
        // the command exists and emit an "error" instead
        // See https://github.com/IndigoUnited/node-cross-spawn/issues/16
        if (name === 'exit') {
            const err = verifyENOENT(arg1, parsed);

            if (err) {
                return originalEmit.call(cp, 'error', err);
            }
        }

        return originalEmit.apply(cp, arguments); // eslint-disable-line prefer-rest-params
    };
}

function verifyENOENT(status, parsed) {
    if (isWin && status === 1 && !parsed.file) {
        return notFoundError(parsed.original, 'spawn');
    }

    return null;
}

function verifyENOENTSync(status, parsed) {
    if (isWin && status === 1 && !parsed.file) {
        return notFoundError(parsed.original, 'spawnSync');
    }

    return null;
}

module.exports = {
    hookChildProcess,
    verifyENOENT,
    verifyENOENTSync,
    notFoundError,
};


/***/ }),

/***/ 756:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {



const path = __nccwpck_require__(17);
const resolveCommand = __nccwpck_require__(727);
const escape = __nccwpck_require__(482);
const readShebang = __nccwpck_require__(295);

const isWin = process.platform === 'win32';
const isExecutableRegExp = /\.(?:com|exe)$/i;
const isCmdShimRegExp = /node_modules[\\/].bin[\\/][^\\/]+\.cmd$/i;

function detectShebang(parsed) {
    parsed.file = resolveCommand(parsed);

    const shebang = parsed.file && readShebang(parsed.file);

    if (shebang) {
        parsed.args.unshift(parsed.file);
        parsed.command = shebang;

        return resolveCommand(parsed);
    }

    return parsed.file;
}

function parseNonShell(parsed) {
    if (!isWin) {
        return parsed;
    }

    // Detect & add support for shebangs
    const commandFile = detectShebang(parsed);

    // We don't need a shell if the command filename is an executable
    const needsShell = !isExecutableRegExp.test(commandFile);

    // If a shell is required, use cmd.exe and take care of escaping everything correctly
    // Note that `forceShell` is an hidden option used only in tests
    if (parsed.options.forceShell || needsShell) {
        // Need to double escape meta chars if the command is a cmd-shim located in `node_modules/.bin/`
        // The cmd-shim simply calls execute the package bin file with NodeJS, proxying any argument
        // Because the escape of metachars with ^ gets interpreted when the cmd.exe is first called,
        // we need to double escape them
        const needsDoubleEscapeMetaChars = isCmdShimRegExp.test(commandFile);

        // Normalize posix paths into OS compatible paths (e.g.: foo/bar -> foo\bar)
        // This is necessary otherwise it will always fail with ENOENT in those cases
        parsed.command = path.normalize(parsed.command);

        // Escape command & arguments
        parsed.command = escape.command(parsed.command);
        parsed.args = parsed.args.map((arg) => escape.argument(arg, needsDoubleEscapeMetaChars));

        const shellCommand = [parsed.command].concat(parsed.args).join(' ');

        parsed.args = ['/d', '/s', '/c', `"${shellCommand}"`];
        parsed.command = process.env.comspec || 'cmd.exe';
        parsed.options.windowsVerbatimArguments = true; // Tell node's spawn that the arguments are already escaped
    }

    return parsed;
}

function parse(command, args, options) {
    // Normalize arguments, similar to nodejs
    if (args && !Array.isArray(args)) {
        options = args;
        args = null;
    }

    args = args ? args.slice(0) : []; // Clone array to avoid changing the original
    options = Object.assign({}, options); // Clone object to avoid changing the original

    // Build our parsed object
    const parsed = {
        command,
        args,
        options,
        file: undefined,
        original: {
            command,
            args,
        },
    };

    // Delegate further parsing to shell or non-shell
    return options.shell ? parsed : parseNonShell(parsed);
}

module.exports = parse;


/***/ }),

/***/ 482:
/***/ ((module) => {



// See http://www.robvanderwoude.com/escapechars.php
const metaCharsRegExp = /([()\][%!^"`<>&|;, *?])/g;

function escapeCommand(arg) {
    // Escape meta chars
    arg = arg.replace(metaCharsRegExp, '^$1');

    return arg;
}

function escapeArgument(arg, doubleEscapeMetaChars) {
    // Convert to string
    arg = `${arg}`;

    // Algorithm below is based on https://qntm.org/cmd
    // It's slightly altered to disable JS backtracking to avoid hanging on specially crafted input
    // Please see https://github.com/moxystudio/node-cross-spawn/pull/160 for more information

    // Sequence of backslashes followed by a double quote:
    // double up all the backslashes and escape the double quote
    arg = arg.replace(/(?=(\\+?)?)\1"/g, '$1$1\\"');

    // Sequence of backslashes followed by the end of the string
    // (which will become a double quote later):
    // double up all the backslashes
    arg = arg.replace(/(?=(\\+?)?)\1$/, '$1$1');

    // All other backslashes occur literally

    // Quote the whole thing:
    arg = `"${arg}"`;

    // Escape meta chars
    arg = arg.replace(metaCharsRegExp, '^$1');

    // Double escape meta chars if necessary
    if (doubleEscapeMetaChars) {
        arg = arg.replace(metaCharsRegExp, '^$1');
    }

    return arg;
}

module.exports.command = escapeCommand;
module.exports.argument = escapeArgument;


/***/ }),

/***/ 295:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {



const fs = __nccwpck_require__(147);
const shebangCommand = __nccwpck_require__(665);

function readShebang(command) {
    // Read the first 150 bytes from the file
    const size = 150;
    const buffer = Buffer.alloc(size);

    let fd;

    try {
        fd = fs.openSync(command, 'r');
        fs.readSync(fd, buffer, 0, size, 0);
        fs.closeSync(fd);
    } catch (e) { /* Empty */ }

    // Attempt to extract shebang (null is returned if not a shebang)
    return shebangCommand(buffer.toString());
}

module.exports = readShebang;


/***/ }),

/***/ 727:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {



const path = __nccwpck_require__(17);
const which = __nccwpck_require__(8);
const getPathKey = __nccwpck_require__(600);

function resolveCommandAttempt(parsed, withoutPathExt) {
    const env = parsed.options.env || process.env;
    const cwd = process.cwd();
    const hasCustomCwd = parsed.options.cwd != null;
    // Worker threads do not have process.chdir()
    const shouldSwitchCwd = hasCustomCwd && process.chdir !== undefined && !process.chdir.disabled;

    // If a custom `cwd` was specified, we need to change the process cwd
    // because `which` will do stat calls but does not support a custom cwd
    if (shouldSwitchCwd) {
        try {
            process.chdir(parsed.options.cwd);
        } catch (err) {
            /* Empty */
        }
    }

    let resolved;

    try {
        resolved = which.sync(parsed.command, {
            path: env[getPathKey({ env })],
            pathExt: withoutPathExt ? path.delimiter : undefined,
        });
    } catch (e) {
        /* Empty */
    } finally {
        if (shouldSwitchCwd) {
            process.chdir(cwd);
        }
    }

    // If we successfully resolved, ensure that an absolute path is returned
    // Note that when a custom `cwd` was used, we need to resolve to an absolute path based on it
    if (resolved) {
        resolved = path.resolve(hasCustomCwd ? parsed.options.cwd : '', resolved);
    }

    return resolved;
}

function resolveCommand(parsed) {
    return resolveCommandAttempt(parsed) || resolveCommandAttempt(parsed, true);
}

module.exports = resolveCommand;


/***/ }),

/***/ 600:
/***/ ((module) => {



const pathKey = (options = {}) => {
	const environment = options.env || process.env;
	const platform = options.platform || process.platform;

	if (platform !== 'win32') {
		return 'PATH';
	}

	return Object.keys(environment).reverse().find(key => key.toUpperCase() === 'PATH') || 'Path';
};

module.exports = pathKey;
// TODO: Remove this for the next major release
module.exports["default"] = pathKey;


/***/ }),

/***/ 665:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {


const shebangRegex = __nccwpck_require__(433);

module.exports = (string = '') => {
	const match = string.match(shebangRegex);

	if (!match) {
		return null;
	}

	const [path, argument] = match[0].replace(/#! ?/, '').split(' ');
	const binary = path.split('/').pop();

	if (binary === 'env') {
		return argument;
	}

	return argument ? `${binary} ${argument}` : binary;
};


/***/ }),

/***/ 433:
/***/ ((module) => {


module.exports = /^#!(.*)/;


/***/ }),

/***/ 8:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

const isWindows = process.platform === 'win32' ||
    process.env.OSTYPE === 'cygwin' ||
    process.env.OSTYPE === 'msys'

const path = __nccwpck_require__(17)
const COLON = isWindows ? ';' : ':'
const isexe = __nccwpck_require__(126)

const getNotFoundError = (cmd) =>
  Object.assign(new Error(`not found: ${cmd}`), { code: 'ENOENT' })

const getPathInfo = (cmd, opt) => {
  const colon = opt.colon || COLON

  // If it has a slash, then we don't bother searching the pathenv.
  // just check the file itself, and that's it.
  const pathEnv = cmd.match(/\//) || isWindows && cmd.match(/\\/) ? ['']
    : (
      [
        // windows always checks the cwd first
        ...(isWindows ? [process.cwd()] : []),
        ...(opt.path || process.env.PATH ||
          /* istanbul ignore next: very unusual */ '').split(colon),
      ]
    )
  const pathExtExe = isWindows
    ? opt.pathExt || process.env.PATHEXT || '.EXE;.CMD;.BAT;.COM'
    : ''
  const pathExt = isWindows ? pathExtExe.split(colon) : ['']

  if (isWindows) {
    if (cmd.indexOf('.') !== -1 && pathExt[0] !== '')
      pathExt.unshift('')
  }

  return {
    pathEnv,
    pathExt,
    pathExtExe,
  }
}

const which = (cmd, opt, cb) => {
  if (typeof opt === 'function') {
    cb = opt
    opt = {}
  }
  if (!opt)
    opt = {}

  const { pathEnv, pathExt, pathExtExe } = getPathInfo(cmd, opt)
  const found = []

  const step = i => new Promise((resolve, reject) => {
    if (i === pathEnv.length)
      return opt.all && found.length ? resolve(found)
        : reject(getNotFoundError(cmd))

    const ppRaw = pathEnv[i]
    const pathPart = /^".*"$/.test(ppRaw) ? ppRaw.slice(1, -1) : ppRaw

    const pCmd = path.join(pathPart, cmd)
    const p = !pathPart && /^\.[\\\/]/.test(cmd) ? cmd.slice(0, 2) + pCmd
      : pCmd

    resolve(subStep(p, i, 0))
  })

  const subStep = (p, i, ii) => new Promise((resolve, reject) => {
    if (ii === pathExt.length)
      return resolve(step(i + 1))
    const ext = pathExt[ii]
    isexe(p + ext, { pathExt: pathExtExe }, (er, is) => {
      if (!er && is) {
        if (opt.all)
          found.push(p + ext)
        else
          return resolve(p + ext)
      }
      return resolve(subStep(p, i, ii + 1))
    })
  })

  return cb ? step(0).then(res => cb(null, res), cb) : step(0)
}

const whichSync = (cmd, opt) => {
  opt = opt || {}

  const { pathEnv, pathExt, pathExtExe } = getPathInfo(cmd, opt)
  const found = []

  for (let i = 0; i < pathEnv.length; i ++) {
    const ppRaw = pathEnv[i]
    const pathPart = /^".*"$/.test(ppRaw) ? ppRaw.slice(1, -1) : ppRaw

    const pCmd = path.join(pathPart, cmd)
    const p = !pathPart && /^\.[\\\/]/.test(cmd) ? cmd.slice(0, 2) + pCmd
      : pCmd

    for (let j = 0; j < pathExt.length; j ++) {
      const cur = p + pathExt[j]
      try {
        const is = isexe.sync(cur, { pathExt: pathExtExe })
        if (is) {
          if (opt.all)
            found.push(cur)
          else
            return cur
        }
      } catch (ex) {}
    }
  }

  if (opt.all && found.length)
    return found

  if (opt.nothrow)
    return null

  throw getNotFoundError(cmd)
}

module.exports = which
which.sync = whichSync


/***/ }),

/***/ 126:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

var fs = __nccwpck_require__(147)
var core
if (process.platform === 'win32' || global.TESTING_WINDOWS) {
  core = __nccwpck_require__(1)
} else {
  core = __nccwpck_require__(728)
}

module.exports = isexe
isexe.sync = sync

function isexe (path, options, cb) {
  if (typeof options === 'function') {
    cb = options
    options = {}
  }

  if (!cb) {
    if (typeof Promise !== 'function') {
      throw new TypeError('callback not provided')
    }

    return new Promise(function (resolve, reject) {
      isexe(path, options || {}, function (er, is) {
        if (er) {
          reject(er)
        } else {
          resolve(is)
        }
      })
    })
  }

  core(path, options || {}, function (er, is) {
    // ignore EACCES because that just means we aren't allowed to run it
    if (er) {
      if (er.code === 'EACCES' || options && options.ignoreErrors) {
        er = null
        is = false
      }
    }
    cb(er, is)
  })
}

function sync (path, options) {
  // my kingdom for a filtered catch
  try {
    return core.sync(path, options || {})
  } catch (er) {
    if (options && options.ignoreErrors || er.code === 'EACCES') {
      return false
    } else {
      throw er
    }
  }
}


/***/ }),

/***/ 728:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

module.exports = isexe
isexe.sync = sync

var fs = __nccwpck_require__(147)

function isexe (path, options, cb) {
  fs.stat(path, function (er, stat) {
    cb(er, er ? false : checkStat(stat, options))
  })
}

function sync (path, options) {
  return checkStat(fs.statSync(path), options)
}

function checkStat (stat, options) {
  return stat.isFile() && checkMode(stat, options)
}

function checkMode (stat, options) {
  var mod = stat.mode
  var uid = stat.uid
  var gid = stat.gid

  var myUid = options.uid !== undefined ?
    options.uid : process.getuid && process.getuid()
  var myGid = options.gid !== undefined ?
    options.gid : process.getgid && process.getgid()

  var u = parseInt('100', 8)
  var g = parseInt('010', 8)
  var o = parseInt('001', 8)
  var ug = u | g

  var ret = (mod & o) ||
    (mod & g) && gid === myGid ||
    (mod & u) && uid === myUid ||
    (mod & ug) && myUid === 0

  return ret
}


/***/ }),

/***/ 1:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

module.exports = isexe
isexe.sync = sync

var fs = __nccwpck_require__(147)

function checkPathExt (path, options) {
  var pathext = options.pathExt !== undefined ?
    options.pathExt : process.env.PATHEXT

  if (!pathext) {
    return true
  }

  pathext = pathext.split(';')
  if (pathext.indexOf('') !== -1) {
    return true
  }
  for (var i = 0; i < pathext.length; i++) {
    var p = pathext[i].toLowerCase()
    if (p && path.substr(-p.length).toLowerCase() === p) {
      return true
    }
  }
  return false
}

function checkStat (stat, path, options) {
  if (!stat.isSymbolicLink() && !stat.isFile()) {
    return false
  }
  return checkPathExt(path, options)
}

function isexe (path, options, cb) {
  fs.stat(path, function (er, stat) {
    cb(er, er ? false : checkStat(stat, path, options))
  })
}

function sync (path, options) {
  return checkStat(fs.statSync(path), path, options)
}


/***/ }),

/***/ 294:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

module.exports = __nccwpck_require__(219);


/***/ }),

/***/ 219:
/***/ ((__unused_webpack_module, exports, __nccwpck_require__) => {



var net = __nccwpck_require__(808);
var tls = __nccwpck_require__(404);
var http = __nccwpck_require__(685);
var https = __nccwpck_require__(687);
var events = __nccwpck_require__(361);
var assert = __nccwpck_require__(491);
var util = __nccwpck_require__(837);


exports.httpOverHttp = httpOverHttp;
exports.httpsOverHttp = httpsOverHttp;
exports.httpOverHttps = httpOverHttps;
exports.httpsOverHttps = httpsOverHttps;


function httpOverHttp(options) {
  var agent = new TunnelingAgent(options);
  agent.request = http.request;
  return agent;
}

function httpsOverHttp(options) {
  var agent = new TunnelingAgent(options);
  agent.request = http.request;
  agent.createSocket = createSecureSocket;
  agent.defaultPort = 443;
  return agent;
}

function httpOverHttps(options) {
  var agent = new TunnelingAgent(options);
  agent.request = https.request;
  return agent;
}

function httpsOverHttps(options) {
  var agent = new TunnelingAgent(options);
  agent.request = https.request;
  agent.createSocket = createSecureSocket;
  agent.defaultPort = 443;
  return agent;
}


function TunnelingAgent(options) {
  var self = this;
  self.options = options || {};
  self.proxyOptions = self.options.proxy || {};
  self.maxSockets = self.options.maxSockets || http.Agent.defaultMaxSockets;
  self.requests = [];
  self.sockets = [];

  self.on('free', function onFree(socket, host, port, localAddress) {
    var options = toOptions(host, port, localAddress);
    for (var i = 0, len = self.requests.length; i < len; ++i) {
      var pending = self.requests[i];
      if (pending.host === options.host && pending.port === options.port) {
        // Detect the request to connect same origin server,
        // reuse the connection.
        self.requests.splice(i, 1);
        pending.request.onSocket(socket);
        return;
      }
    }
    socket.destroy();
    self.removeSocket(socket);
  });
}
util.inherits(TunnelingAgent, events.EventEmitter);

TunnelingAgent.prototype.addRequest = function addRequest(req, host, port, localAddress) {
  var self = this;
  var options = mergeOptions({request: req}, self.options, toOptions(host, port, localAddress));

  if (self.sockets.length >= this.maxSockets) {
    // We are over limit so we'll add it to the queue.
    self.requests.push(options);
    return;
  }

  // If we are under maxSockets create a new one.
  self.createSocket(options, function(socket) {
    socket.on('free', onFree);
    socket.on('close', onCloseOrRemove);
    socket.on('agentRemove', onCloseOrRemove);
    req.onSocket(socket);

    function onFree() {
      self.emit('free', socket, options);
    }

    function onCloseOrRemove(err) {
      self.removeSocket(socket);
      socket.removeListener('free', onFree);
      socket.removeListener('close', onCloseOrRemove);
      socket.removeListener('agentRemove', onCloseOrRemove);
    }
  });
};

TunnelingAgent.prototype.createSocket = function createSocket(options, cb) {
  var self = this;
  var placeholder = {};
  self.sockets.push(placeholder);

  var connectOptions = mergeOptions({}, self.proxyOptions, {
    method: 'CONNECT',
    path: options.host + ':' + options.port,
    agent: false,
    headers: {
      host: options.host + ':' + options.port
    }
  });
  if (options.localAddress) {
    connectOptions.localAddress = options.localAddress;
  }
  if (connectOptions.proxyAuth) {
    connectOptions.headers = connectOptions.headers || {};
    connectOptions.headers['Proxy-Authorization'] = 'Basic ' +
        new Buffer(connectOptions.proxyAuth).toString('base64');
  }

  debug('making CONNECT request');
  var connectReq = self.request(connectOptions);
  connectReq.useChunkedEncodingByDefault = false; // for v0.6
  connectReq.once('response', onResponse); // for v0.6
  connectReq.once('upgrade', onUpgrade);   // for v0.6
  connectReq.once('connect', onConnect);   // for v0.7 or later
  connectReq.once('error', onError);
  connectReq.end();

  function onResponse(res) {
    // Very hacky. This is necessary to avoid http-parser leaks.
    res.upgrade = true;
  }

  function onUpgrade(res, socket, head) {
    // Hacky.
    process.nextTick(function() {
      onConnect(res, socket, head);
    });
  }

  function onConnect(res, socket, head) {
    connectReq.removeAllListeners();
    socket.removeAllListeners();

    if (res.statusCode !== 200) {
      debug('tunneling socket could not be established, statusCode=%d',
        res.statusCode);
      socket.destroy();
      var error = new Error('tunneling socket could not be established, ' +
        'statusCode=' + res.statusCode);
      error.code = 'ECONNRESET';
      options.request.emit('error', error);
      self.removeSocket(placeholder);
      return;
    }
    if (head.length > 0) {
      debug('got illegal response body from proxy');
      socket.destroy();
      var error = new Error('got illegal response body from proxy');
      error.code = 'ECONNRESET';
      options.request.emit('error', error);
      self.removeSocket(placeholder);
      return;
    }
    debug('tunneling connection has established');
    self.sockets[self.sockets.indexOf(placeholder)] = socket;
    return cb(socket);
  }

  function onError(cause) {
    connectReq.removeAllListeners();

    debug('tunneling socket could not be established, cause=%s\n',
          cause.message, cause.stack);
    var error = new Error('tunneling socket could not be established, ' +
                          'cause=' + cause.message);
    error.code = 'ECONNRESET';
    options.request.emit('error', error);
    self.removeSocket(placeholder);
  }
};

TunnelingAgent.prototype.removeSocket = function removeSocket(socket) {
  var pos = this.sockets.indexOf(socket)
  if (pos === -1) {
    return;
  }
  this.sockets.splice(pos, 1);

  var pending = this.requests.shift();
  if (pending) {
    // If we have pending requests and a socket gets closed a new one
    // needs to be created to take over in the pool for the one that closed.
    this.createSocket(pending, function(socket) {
      pending.request.onSocket(socket);
    });
  }
};

function createSecureSocket(options, cb) {
  var self = this;
  TunnelingAgent.prototype.createSocket.call(self, options, function(socket) {
    var hostHeader = options.request.getHeader('host');
    var tlsOptions = mergeOptions({}, self.options, {
      socket: socket,
      servername: hostHeader ? hostHeader.replace(/:.*$/, '') : options.host
    });

    // 0 is dummy port for v0.6
    var secureSocket = tls.connect(0, tlsOptions);
    self.sockets[self.sockets.indexOf(socket)] = secureSocket;
    cb(secureSocket);
  });
}


function toOptions(host, port, localAddress) {
  if (typeof host === 'string') { // since v0.10
    return {
      host: host,
      port: port,
      localAddress: localAddress
    };
  }
  return host; // for v0.11 or later
}

function mergeOptions(target) {
  for (var i = 1, len = arguments.length; i < len; ++i) {
    var overrides = arguments[i];
    if (typeof overrides === 'object') {
      var keys = Object.keys(overrides);
      for (var j = 0, keyLen = keys.length; j < keyLen; ++j) {
        var k = keys[j];
        if (overrides[k] !== undefined) {
          target[k] = overrides[k];
        }
      }
    }
  }
  return target;
}


var debug;
if (process.env.NODE_DEBUG && /\btunnel\b/.test(process.env.NODE_DEBUG)) {
  debug = function() {
    var args = Array.prototype.slice.call(arguments);
    if (typeof args[0] === 'string') {
      args[0] = 'TUNNEL: ' + args[0];
    } else {
      args.unshift('TUNNEL:');
    }
    console.error.apply(console, args);
  }
} else {
  debug = function() {};
}
exports.debug = debug; // for test


/***/ }),

/***/ 491:
/***/ ((module) => {

module.exports = __WEBPACK_EXTERNAL_createRequire(import.meta.url)("assert");

/***/ }),

/***/ 81:
/***/ ((module) => {

module.exports = __WEBPACK_EXTERNAL_createRequire(import.meta.url)("child_process");

/***/ }),

/***/ 113:
/***/ ((module) => {

module.exports = __WEBPACK_EXTERNAL_createRequire(import.meta.url)("crypto");

/***/ }),

/***/ 361:
/***/ ((module) => {

module.exports = __WEBPACK_EXTERNAL_createRequire(import.meta.url)("events");

/***/ }),

/***/ 147:
/***/ ((module) => {

module.exports = __WEBPACK_EXTERNAL_createRequire(import.meta.url)("fs");

/***/ }),

/***/ 685:
/***/ ((module) => {

module.exports = __WEBPACK_EXTERNAL_createRequire(import.meta.url)("http");

/***/ }),

/***/ 687:
/***/ ((module) => {

module.exports = __WEBPACK_EXTERNAL_createRequire(import.meta.url)("https");

/***/ }),

/***/ 808:
/***/ ((module) => {

module.exports = __WEBPACK_EXTERNAL_createRequire(import.meta.url)("net");

/***/ }),

/***/ 977:
/***/ ((module) => {

module.exports = __WEBPACK_EXTERNAL_createRequire(import.meta.url)("node:fs/promises");

/***/ }),

/***/ 37:
/***/ ((module) => {

module.exports = __WEBPACK_EXTERNAL_createRequire(import.meta.url)("os");

/***/ }),

/***/ 17:
/***/ ((module) => {

module.exports = __WEBPACK_EXTERNAL_createRequire(import.meta.url)("path");

/***/ }),

/***/ 576:
/***/ ((module) => {

module.exports = __WEBPACK_EXTERNAL_createRequire(import.meta.url)("string_decoder");

/***/ }),

/***/ 512:
/***/ ((module) => {

module.exports = __WEBPACK_EXTERNAL_createRequire(import.meta.url)("timers");

/***/ }),

/***/ 404:
/***/ ((module) => {

module.exports = __WEBPACK_EXTERNAL_createRequire(import.meta.url)("tls");

/***/ }),

/***/ 837:
/***/ ((module) => {

module.exports = __WEBPACK_EXTERNAL_createRequire(import.meta.url)("util");

/***/ }),

/***/ 378:
/***/ ((__webpack_module__, __unused_webpack___webpack_exports__, __nccwpck_require__) => {

__nccwpck_require__.a(__webpack_module__, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony import */ var _actions_core__WEBPACK_IMPORTED_MODULE_0__ = __nccwpck_require__(186);
/* harmony import */ var execa__WEBPACK_IMPORTED_MODULE_2__ = __nccwpck_require__(181);
/* harmony import */ var node_fs_promises__WEBPACK_IMPORTED_MODULE_1__ = __nccwpck_require__(977);




async function run() {
  try {
    const privateKey = (0,_actions_core__WEBPACK_IMPORTED_MODULE_0__.getInput)("ssh-private-key", { required: true });
    const host = (0,_actions_core__WEBPACK_IMPORTED_MODULE_0__.getInput)("ssh-host", { required: true });
    const authSock = (0,_actions_core__WEBPACK_IMPORTED_MODULE_0__.getInput)("ssh-socket");
    const port = (0,_actions_core__WEBPACK_IMPORTED_MODULE_0__.getInput)("ssh-port");
    const sshKeyscanTimeout = (0,_actions_core__WEBPACK_IMPORTED_MODULE_0__.getInput)("ssh-keyscan-timeout");

    // Create the required directory
    const sshDir = process.env["HOME"] + "/.ssh";
    await (0,node_fs_promises__WEBPACK_IMPORTED_MODULE_1__.mkdir)(sshDir, { recursive: true });

    (0,_actions_core__WEBPACK_IMPORTED_MODULE_0__.info)("Starting ssh-agent");

    // Start the ssh agent
    await (0,execa__WEBPACK_IMPORTED_MODULE_2__/* .execa */ .r)("ssh-agent", ["-a", authSock]);

    (0,_actions_core__WEBPACK_IMPORTED_MODULE_0__.exportVariable)("SSH_AUTH_SOCK", authSock);

    (0,_actions_core__WEBPACK_IMPORTED_MODULE_0__.info)("Adding private key");

    // Add the private key
    const key = privateKey.replace(/\r/g, "").trim() + "\n";
    await (0,execa__WEBPACK_IMPORTED_MODULE_2__/* .execa */ .r)("ssh-add", ["-"], { input: key });

    (0,_actions_core__WEBPACK_IMPORTED_MODULE_0__.info)("Adding host to known_hosts");

    // Add the host to the known_hosts file
    const keyScanArgs = ["-p", port, host];
    if (sshKeyscanTimeout) {
      keyScanArgs.unshift("-T", sshKeyscanTimeout);
    }
    const { stdout } = await (0,execa__WEBPACK_IMPORTED_MODULE_2__/* .execa */ .r)("ssh-keyscan", keyScanArgs);
    const knownHostsFile = sshDir + "/known_hosts";

    await (0,node_fs_promises__WEBPACK_IMPORTED_MODULE_1__.appendFile)(knownHostsFile, stdout);
    await (0,node_fs_promises__WEBPACK_IMPORTED_MODULE_1__.chmod)(knownHostsFile, "644");
  } catch (error) {
    (0,_actions_core__WEBPACK_IMPORTED_MODULE_0__.setFailed)(error.message);
  }
}

await run();

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } }, 1);

/***/ }),

/***/ 181:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __nccwpck_require__) => {


// EXPORTS
__nccwpck_require__.d(__webpack_exports__, {
  "r": () => (/* binding */ execa)
});

// UNUSED EXPORTS: $, ExecaError, ExecaSyncError, execaCommand, execaCommandSync, execaNode, execaSync, getCancelSignal, getEachMessage, getOneMessage, parseCommandString, sendMessage

;// CONCATENATED MODULE: ./node_modules/is-plain-obj/index.js
function isPlainObject(value) {
	if (typeof value !== 'object' || value === null) {
		return false;
	}

	const prototype = Object.getPrototypeOf(value);
	return (prototype === null || prototype === Object.prototype || Object.getPrototypeOf(prototype) === null) && !(Symbol.toStringTag in value) && !(Symbol.iterator in value);
}

;// CONCATENATED MODULE: external "node:url"
const external_node_url_namespaceObject = __WEBPACK_EXTERNAL_createRequire(import.meta.url)("node:url");
;// CONCATENATED MODULE: ./node_modules/execa/lib/arguments/file-url.js


// Allow some arguments/options to be either a file path string or a file URL
const safeNormalizeFileUrl = (file, name) => {
	const fileString = normalizeFileUrl(normalizeDenoExecPath(file));

	if (typeof fileString !== 'string') {
		throw new TypeError(`${name} must be a string or a file URL: ${fileString}.`);
	}

	return fileString;
};

// In Deno node:process execPath is a special object, not just a string:
// https://github.com/denoland/deno/blob/f460188e583f00144000aa0d8ade08218d47c3c1/ext/node/polyfills/process.ts#L344
const normalizeDenoExecPath = file => isDenoExecPath(file)
	? file.toString()
	: file;

const isDenoExecPath = file => typeof file !== 'string'
	&& file
	&& Object.getPrototypeOf(file) === String.prototype;

// Same but also allows other values, e.g. `boolean` for the `shell` option
const normalizeFileUrl = file => file instanceof URL ? (0,external_node_url_namespaceObject.fileURLToPath)(file) : file;

;// CONCATENATED MODULE: ./node_modules/execa/lib/methods/parameters.js



// The command `arguments` and `options` are both optional.
// This also does basic validation on them and on the command file.
const normalizeParameters = (rawFile, rawArguments = [], rawOptions = {}) => {
	const filePath = safeNormalizeFileUrl(rawFile, 'First argument');
	const [commandArguments, options] = isPlainObject(rawArguments)
		? [[], rawArguments]
		: [rawArguments, rawOptions];

	if (!Array.isArray(commandArguments)) {
		throw new TypeError(`Second argument must be either an array of arguments or an options object: ${commandArguments}`);
	}

	if (commandArguments.some(commandArgument => typeof commandArgument === 'object' && commandArgument !== null)) {
		throw new TypeError(`Second argument must be an array of strings: ${commandArguments}`);
	}

	const normalizedArguments = commandArguments.map(String);
	const nullByteArgument = normalizedArguments.find(normalizedArgument => normalizedArgument.includes('\0'));
	if (nullByteArgument !== undefined) {
		throw new TypeError(`Arguments cannot contain null bytes ("\\0"): ${nullByteArgument}`);
	}

	if (!isPlainObject(options)) {
		throw new TypeError(`Last argument must be an options object: ${options}`);
	}

	return [filePath, normalizedArguments, options];
};

;// CONCATENATED MODULE: external "node:child_process"
const external_node_child_process_namespaceObject = __WEBPACK_EXTERNAL_createRequire(import.meta.url)("node:child_process");
;// CONCATENATED MODULE: external "node:string_decoder"
const external_node_string_decoder_namespaceObject = __WEBPACK_EXTERNAL_createRequire(import.meta.url)("node:string_decoder");
;// CONCATENATED MODULE: ./node_modules/execa/lib/utils/uint-array.js


const {toString: objectToString} = Object.prototype;

const isArrayBuffer = value => objectToString.call(value) === '[object ArrayBuffer]';

// Is either Uint8Array or Buffer
const isUint8Array = value => objectToString.call(value) === '[object Uint8Array]';

const bufferToUint8Array = buffer => new Uint8Array(buffer.buffer, buffer.byteOffset, buffer.byteLength);

const textEncoder = new TextEncoder();
const stringToUint8Array = string => textEncoder.encode(string);

const textDecoder = new TextDecoder();
const uint8ArrayToString = uint8Array => textDecoder.decode(uint8Array);

const joinToString = (uint8ArraysOrStrings, encoding) => {
	const strings = uint8ArraysToStrings(uint8ArraysOrStrings, encoding);
	return strings.join('');
};

const uint8ArraysToStrings = (uint8ArraysOrStrings, encoding) => {
	if (encoding === 'utf8' && uint8ArraysOrStrings.every(uint8ArrayOrString => typeof uint8ArrayOrString === 'string')) {
		return uint8ArraysOrStrings;
	}

	const decoder = new external_node_string_decoder_namespaceObject.StringDecoder(encoding);
	const strings = uint8ArraysOrStrings
		.map(uint8ArrayOrString => typeof uint8ArrayOrString === 'string'
			? stringToUint8Array(uint8ArrayOrString)
			: uint8ArrayOrString)
		.map(uint8Array => decoder.write(uint8Array));
	const finalString = decoder.end();
	return finalString === '' ? strings : [...strings, finalString];
};

const joinToUint8Array = uint8ArraysOrStrings => {
	if (uint8ArraysOrStrings.length === 1 && isUint8Array(uint8ArraysOrStrings[0])) {
		return uint8ArraysOrStrings[0];
	}

	return concatUint8Arrays(stringsToUint8Arrays(uint8ArraysOrStrings));
};

const stringsToUint8Arrays = uint8ArraysOrStrings => uint8ArraysOrStrings.map(uint8ArrayOrString => typeof uint8ArrayOrString === 'string'
	? stringToUint8Array(uint8ArrayOrString)
	: uint8ArrayOrString);

const concatUint8Arrays = uint8Arrays => {
	const result = new Uint8Array(getJoinLength(uint8Arrays));

	let index = 0;
	for (const uint8Array of uint8Arrays) {
		result.set(uint8Array, index);
		index += uint8Array.length;
	}

	return result;
};

const getJoinLength = uint8Arrays => {
	let joinLength = 0;
	for (const uint8Array of uint8Arrays) {
		joinLength += uint8Array.length;
	}

	return joinLength;
};

;// CONCATENATED MODULE: ./node_modules/execa/lib/methods/template.js




// Check whether the template string syntax is being used
const isTemplateString = templates => Array.isArray(templates) && Array.isArray(templates.raw);

// Convert execa`file ...commandArguments` to execa(file, commandArguments)
const parseTemplates = (templates, expressions) => {
	let tokens = [];

	for (const [index, template] of templates.entries()) {
		tokens = parseTemplate({
			templates,
			expressions,
			tokens,
			index,
			template,
		});
	}

	if (tokens.length === 0) {
		throw new TypeError('Template script must not be empty');
	}

	const [file, ...commandArguments] = tokens;
	return [file, commandArguments, {}];
};

const parseTemplate = ({templates, expressions, tokens, index, template}) => {
	if (template === undefined) {
		throw new TypeError(`Invalid backslash sequence: ${templates.raw[index]}`);
	}

	const {nextTokens, leadingWhitespaces, trailingWhitespaces} = splitByWhitespaces(template, templates.raw[index]);
	const newTokens = concatTokens(tokens, nextTokens, leadingWhitespaces);

	if (index === expressions.length) {
		return newTokens;
	}

	const expression = expressions[index];
	const expressionTokens = Array.isArray(expression)
		? expression.map(expression => parseExpression(expression))
		: [parseExpression(expression)];
	return concatTokens(newTokens, expressionTokens, trailingWhitespaces);
};

// Like `string.split(/[ \t\r\n]+/)` except newlines and tabs are:
//  - ignored when input as a backslash sequence like: `echo foo\n bar`
//  - not ignored when input directly
// The only way to distinguish those in JavaScript is to use a tagged template and compare:
//  - the first array argument, which does not escape backslash sequences
//  - its `raw` property, which escapes them
const splitByWhitespaces = (template, rawTemplate) => {
	if (rawTemplate.length === 0) {
		return {nextTokens: [], leadingWhitespaces: false, trailingWhitespaces: false};
	}

	const nextTokens = [];
	let templateStart = 0;
	const leadingWhitespaces = DELIMITERS.has(rawTemplate[0]);

	for (
		let templateIndex = 0, rawIndex = 0;
		templateIndex < template.length;
		templateIndex += 1, rawIndex += 1
	) {
		const rawCharacter = rawTemplate[rawIndex];
		if (DELIMITERS.has(rawCharacter)) {
			if (templateStart !== templateIndex) {
				nextTokens.push(template.slice(templateStart, templateIndex));
			}

			templateStart = templateIndex + 1;
		} else if (rawCharacter === '\\') {
			const nextRawCharacter = rawTemplate[rawIndex + 1];
			if (nextRawCharacter === '\n') {
				// Handles escaped newlines in templates
				templateIndex -= 1;
				rawIndex += 1;
			} else if (nextRawCharacter === 'u' && rawTemplate[rawIndex + 2] === '{') {
				rawIndex = rawTemplate.indexOf('}', rawIndex + 3);
			} else {
				rawIndex += ESCAPE_LENGTH[nextRawCharacter] ?? 1;
			}
		}
	}

	const trailingWhitespaces = templateStart === template.length;
	if (!trailingWhitespaces) {
		nextTokens.push(template.slice(templateStart));
	}

	return {nextTokens, leadingWhitespaces, trailingWhitespaces};
};

const DELIMITERS = new Set([' ', '\t', '\r', '\n']);

// Number of characters in backslash escape sequences: \0 \xXX or \uXXXX
// \cX is allowed in RegExps but not in strings
// Octal sequences are not allowed in strict mode
const ESCAPE_LENGTH = {x: 3, u: 5};

const concatTokens = (tokens, nextTokens, isSeparated) => isSeparated
	|| tokens.length === 0
	|| nextTokens.length === 0
	? [...tokens, ...nextTokens]
	: [
		...tokens.slice(0, -1),
		`${tokens.at(-1)}${nextTokens[0]}`,
		...nextTokens.slice(1),
	];

// Handle `${expression}` inside the template string syntax
const parseExpression = expression => {
	const typeOfExpression = typeof expression;

	if (typeOfExpression === 'string') {
		return expression;
	}

	if (typeOfExpression === 'number') {
		return String(expression);
	}

	if (isPlainObject(expression) && ('stdout' in expression || 'isMaxBuffer' in expression)) {
		return getSubprocessResult(expression);
	}

	if (expression instanceof external_node_child_process_namespaceObject.ChildProcess || Object.prototype.toString.call(expression) === '[object Promise]') {
		// eslint-disable-next-line no-template-curly-in-string
		throw new TypeError('Unexpected subprocess in template expression. Please use ${await subprocess} instead of ${subprocess}.');
	}

	throw new TypeError(`Unexpected "${typeOfExpression}" in template expression`);
};

const getSubprocessResult = ({stdout}) => {
	if (typeof stdout === 'string') {
		return stdout;
	}

	if (isUint8Array(stdout)) {
		return uint8ArrayToString(stdout);
	}

	if (stdout === undefined) {
		throw new TypeError('Missing result.stdout in template expression. This is probably due to the previous subprocess\' "stdout" option.');
	}

	throw new TypeError(`Unexpected "${typeof stdout}" stdout in template expression`);
};

;// CONCATENATED MODULE: external "node:util"
const external_node_util_namespaceObject = __WEBPACK_EXTERNAL_createRequire(import.meta.url)("node:util");
;// CONCATENATED MODULE: external "node:process"
const external_node_process_namespaceObject = __WEBPACK_EXTERNAL_createRequire(import.meta.url)("node:process");
;// CONCATENATED MODULE: ./node_modules/execa/lib/utils/standard-stream.js


const isStandardStream = stream => STANDARD_STREAMS.includes(stream);
const STANDARD_STREAMS = [external_node_process_namespaceObject.stdin, external_node_process_namespaceObject.stdout, external_node_process_namespaceObject.stderr];
const STANDARD_STREAMS_ALIASES = ['stdin', 'stdout', 'stderr'];
const getStreamName = fdNumber => STANDARD_STREAMS_ALIASES[fdNumber] ?? `stdio[${fdNumber}]`;

;// CONCATENATED MODULE: ./node_modules/execa/lib/arguments/specific.js




// Some options can have different values for `stdout`/`stderr`/`fd3`.
// This normalizes those to array of values.
// For example, `{verbose: {stdout: 'none', stderr: 'full'}}` becomes `{verbose: ['none', 'none', 'full']}`
const normalizeFdSpecificOptions = options => {
	const optionsCopy = {...options};

	for (const optionName of FD_SPECIFIC_OPTIONS) {
		optionsCopy[optionName] = normalizeFdSpecificOption(options, optionName);
	}

	return optionsCopy;
};

const normalizeFdSpecificOption = (options, optionName) => {
	const optionBaseArray = Array.from({length: getStdioLength(options) + 1});
	const optionArray = normalizeFdSpecificValue(options[optionName], optionBaseArray, optionName);
	return addDefaultValue(optionArray, optionName);
};

const getStdioLength = ({stdio}) => Array.isArray(stdio)
	? Math.max(stdio.length, STANDARD_STREAMS_ALIASES.length)
	: STANDARD_STREAMS_ALIASES.length;

const normalizeFdSpecificValue = (optionValue, optionArray, optionName) => isPlainObject(optionValue)
	? normalizeOptionObject(optionValue, optionArray, optionName)
	: optionArray.fill(optionValue);

const normalizeOptionObject = (optionValue, optionArray, optionName) => {
	for (const fdName of Object.keys(optionValue).sort(compareFdName)) {
		for (const fdNumber of parseFdName(fdName, optionName, optionArray)) {
			optionArray[fdNumber] = optionValue[fdName];
		}
	}

	return optionArray;
};

// Ensure priority order when setting both `stdout`/`stderr`, `fd1`/`fd2`, and `all`
const compareFdName = (fdNameA, fdNameB) => getFdNameOrder(fdNameA) < getFdNameOrder(fdNameB) ? 1 : -1;

const getFdNameOrder = fdName => {
	if (fdName === 'stdout' || fdName === 'stderr') {
		return 0;
	}

	return fdName === 'all' ? 2 : 1;
};

const parseFdName = (fdName, optionName, optionArray) => {
	if (fdName === 'ipc') {
		return [optionArray.length - 1];
	}

	const fdNumber = parseFd(fdName);
	if (fdNumber === undefined || fdNumber === 0) {
		throw new TypeError(`"${optionName}.${fdName}" is invalid.
It must be "${optionName}.stdout", "${optionName}.stderr", "${optionName}.all", "${optionName}.ipc", or "${optionName}.fd3", "${optionName}.fd4" (and so on).`);
	}

	if (fdNumber >= optionArray.length) {
		throw new TypeError(`"${optionName}.${fdName}" is invalid: that file descriptor does not exist.
Please set the "stdio" option to ensure that file descriptor exists.`);
	}

	return fdNumber === 'all' ? [1, 2] : [fdNumber];
};

// Use the same syntax for fd-specific options and the `from`/`to` options
const parseFd = fdName => {
	if (fdName === 'all') {
		return fdName;
	}

	if (STANDARD_STREAMS_ALIASES.includes(fdName)) {
		return STANDARD_STREAMS_ALIASES.indexOf(fdName);
	}

	const regexpResult = FD_REGEXP.exec(fdName);
	if (regexpResult !== null) {
		return Number(regexpResult[1]);
	}
};

const FD_REGEXP = /^fd(\d+)$/;

const addDefaultValue = (optionArray, optionName) => optionArray.map(optionValue => optionValue === undefined
	? DEFAULT_OPTIONS[optionName]
	: optionValue);

// Default value for the `verbose` option
const verboseDefault = (0,external_node_util_namespaceObject.debuglog)('execa').enabled ? 'full' : 'none';

const DEFAULT_OPTIONS = {
	lines: false,
	buffer: true,
	maxBuffer: 1000 * 1000 * 100,
	verbose: verboseDefault,
	stripFinalNewline: true,
};

// List of options which can have different values for `stdout`/`stderr`
const FD_SPECIFIC_OPTIONS = ['lines', 'buffer', 'maxBuffer', 'verbose', 'stripFinalNewline'];

// Retrieve fd-specific option
const getFdSpecificValue = (optionArray, fdNumber) => fdNumber === 'ipc'
	? optionArray.at(-1)
	: optionArray[fdNumber];

;// CONCATENATED MODULE: ./node_modules/execa/lib/verbose/values.js


// The `verbose` option can have different values for `stdout`/`stderr`
const isVerbose = ({verbose}, fdNumber) => getFdVerbose(verbose, fdNumber) !== 'none';

// Whether IPC and output and logged
const isFullVerbose = ({verbose}, fdNumber) => !['none', 'short'].includes(getFdVerbose(verbose, fdNumber));

// The `verbose` option can be a function to customize logging
const getVerboseFunction = ({verbose}, fdNumber) => {
	const fdVerbose = getFdVerbose(verbose, fdNumber);
	return isVerboseFunction(fdVerbose) ? fdVerbose : undefined;
};

// When using `verbose: {stdout, stderr, fd3, ipc}`:
//  - `verbose.stdout|stderr|fd3` is used for 'output'
//  - `verbose.ipc` is only used for 'ipc'
//  - highest `verbose.*` value is used for 'command', 'error' and 'duration'
const getFdVerbose = (verbose, fdNumber) => fdNumber === undefined
	? getFdGenericVerbose(verbose)
	: getFdSpecificValue(verbose, fdNumber);

// When using `verbose: {stdout, stderr, fd3, ipc}` and logging is not specific to a file descriptor.
// We then use the highest `verbose.*` value, using the following order:
//  - function > 'full' > 'short' > 'none'
//  - if several functions are defined: stdout > stderr > fd3 > ipc
const getFdGenericVerbose = verbose => verbose.find(fdVerbose => isVerboseFunction(fdVerbose))
	?? VERBOSE_VALUES.findLast(fdVerbose => verbose.includes(fdVerbose));

// Whether the `verbose` option is customized using a function
const isVerboseFunction = fdVerbose => typeof fdVerbose === 'function';

const VERBOSE_VALUES = ['none', 'short', 'full'];

;// CONCATENATED MODULE: ./node_modules/execa/lib/arguments/escape.js



// Compute `result.command` and `result.escapedCommand`
const joinCommand = (filePath, rawArguments) => {
	const fileAndArguments = [filePath, ...rawArguments];
	const command = fileAndArguments.join(' ');
	const escapedCommand = fileAndArguments
		.map(fileAndArgument => quoteString(escapeControlCharacters(fileAndArgument)))
		.join(' ');
	return {command, escapedCommand};
};

// Remove ANSI sequences and escape control characters and newlines
const escapeLines = lines => (0,external_node_util_namespaceObject.stripVTControlCharacters)(lines)
	.split('\n')
	.map(line => escapeControlCharacters(line))
	.join('\n');

const escapeControlCharacters = line => line.replaceAll(SPECIAL_CHAR_REGEXP, character => escapeControlCharacter(character));

const escapeControlCharacter = character => {
	const commonEscape = COMMON_ESCAPES[character];
	if (commonEscape !== undefined) {
		return commonEscape;
	}

	const codepoint = character.codePointAt(0);
	const codepointHex = codepoint.toString(16);
	return codepoint <= ASTRAL_START
		? `\\u${codepointHex.padStart(4, '0')}`
		: `\\U${codepointHex}`;
};

// Characters that would create issues when printed are escaped using the \u or \U notation.
// Those include control characters and newlines.
// The \u and \U notation is Bash specific, but there is no way to do this in a shell-agnostic way.
// Some shells do not even have a way to print those characters in an escaped fashion.
// Therefore, we prioritize printing those safely, instead of allowing those to be copy-pasted.
// List of Unicode character categories: https://www.fileformat.info/info/unicode/category/index.htm
const getSpecialCharRegExp = () => {
	try {
		// This throws when using Node.js without ICU support.
		// When using a RegExp literal, this would throw at parsing-time, instead of runtime.
		// eslint-disable-next-line prefer-regex-literals
		return new RegExp('\\p{Separator}|\\p{Other}', 'gu');
	} catch {
		// Similar to the above RegExp, but works even when Node.js has been built without ICU support.
		// Unlike the above RegExp, it only covers whitespaces and C0/C1 control characters.
		// It does not cover some edge cases, such as Unicode reserved characters.
		// See https://github.com/sindresorhus/execa/issues/1143
		// eslint-disable-next-line no-control-regex
		return /[\s\u0000-\u001F\u007F-\u009F\u00AD]/g;
	}
};

const SPECIAL_CHAR_REGEXP = getSpecialCharRegExp();

// Accepted by $'...' in Bash.
// Exclude \a \e \v which are accepted in Bash but not in JavaScript (except \v) and JSON.
const COMMON_ESCAPES = {
	' ': ' ',
	'\b': '\\b',
	'\f': '\\f',
	'\n': '\\n',
	'\r': '\\r',
	'\t': '\\t',
};

// Up until that codepoint, \u notation can be used instead of \U
const ASTRAL_START = 65_535;

// Some characters are shell-specific, i.e. need to be escaped when the command is copy-pasted then run.
// Escaping is shell-specific. We cannot know which shell is used: `process.platform` detection is not enough.
// For example, Windows users could be using `cmd.exe`, Powershell or Bash for Windows which all use different escaping.
// We use '...' on Unix, which is POSIX shell compliant and escape all characters but ' so this is fairly safe.
// On Windows, we assume cmd.exe is used and escape with "...", which also works with Powershell.
const quoteString = escapedArgument => {
	if (NO_ESCAPE_REGEXP.test(escapedArgument)) {
		return escapedArgument;
	}

	return external_node_process_namespaceObject.platform === 'win32'
		? `"${escapedArgument.replaceAll('"', '""')}"`
		: `'${escapedArgument.replaceAll('\'', '\'\\\'\'')}'`;
};

const NO_ESCAPE_REGEXP = /^[\w./-]+$/;

;// CONCATENATED MODULE: ./node_modules/is-unicode-supported/index.js


function isUnicodeSupported() {
	const {env} = external_node_process_namespaceObject;
	const {TERM, TERM_PROGRAM} = env;

	if (external_node_process_namespaceObject.platform !== 'win32') {
		return TERM !== 'linux'; // Linux console (kernel)
	}

	return Boolean(env.WT_SESSION) // Windows Terminal
		|| Boolean(env.TERMINUS_SUBLIME) // Terminus (<0.2.27)
		|| env.ConEmuTask === '{cmd::Cmder}' // ConEmu and cmder
		|| TERM_PROGRAM === 'Terminus-Sublime'
		|| TERM_PROGRAM === 'vscode'
		|| TERM === 'xterm-256color'
		|| TERM === 'alacritty'
		|| TERM === 'rxvt-unicode'
		|| TERM === 'rxvt-unicode-256color'
		|| env.TERMINAL_EMULATOR === 'JetBrains-JediTerm';
}

;// CONCATENATED MODULE: ./node_modules/figures/index.js


const common = {
	circleQuestionMark: '(?)',
	questionMarkPrefix: '(?)',
	square: '█',
	squareDarkShade: '▓',
	squareMediumShade: '▒',
	squareLightShade: '░',
	squareTop: '▀',
	squareBottom: '▄',
	squareLeft: '▌',
	squareRight: '▐',
	squareCenter: '■',
	bullet: '●',
	dot: '․',
	ellipsis: '…',
	pointerSmall: '›',
	triangleUp: '▲',
	triangleUpSmall: '▴',
	triangleDown: '▼',
	triangleDownSmall: '▾',
	triangleLeftSmall: '◂',
	triangleRightSmall: '▸',
	home: '⌂',
	heart: '♥',
	musicNote: '♪',
	musicNoteBeamed: '♫',
	arrowUp: '↑',
	arrowDown: '↓',
	arrowLeft: '←',
	arrowRight: '→',
	arrowLeftRight: '↔',
	arrowUpDown: '↕',
	almostEqual: '≈',
	notEqual: '≠',
	lessOrEqual: '≤',
	greaterOrEqual: '≥',
	identical: '≡',
	infinity: '∞',
	subscriptZero: '₀',
	subscriptOne: '₁',
	subscriptTwo: '₂',
	subscriptThree: '₃',
	subscriptFour: '₄',
	subscriptFive: '₅',
	subscriptSix: '₆',
	subscriptSeven: '₇',
	subscriptEight: '₈',
	subscriptNine: '₉',
	oneHalf: '½',
	oneThird: '⅓',
	oneQuarter: '¼',
	oneFifth: '⅕',
	oneSixth: '⅙',
	oneEighth: '⅛',
	twoThirds: '⅔',
	twoFifths: '⅖',
	threeQuarters: '¾',
	threeFifths: '⅗',
	threeEighths: '⅜',
	fourFifths: '⅘',
	fiveSixths: '⅚',
	fiveEighths: '⅝',
	sevenEighths: '⅞',
	line: '─',
	lineBold: '━',
	lineDouble: '═',
	lineDashed0: '┄',
	lineDashed1: '┅',
	lineDashed2: '┈',
	lineDashed3: '┉',
	lineDashed4: '╌',
	lineDashed5: '╍',
	lineDashed6: '╴',
	lineDashed7: '╶',
	lineDashed8: '╸',
	lineDashed9: '╺',
	lineDashed10: '╼',
	lineDashed11: '╾',
	lineDashed12: '−',
	lineDashed13: '–',
	lineDashed14: '‐',
	lineDashed15: '⁃',
	lineVertical: '│',
	lineVerticalBold: '┃',
	lineVerticalDouble: '║',
	lineVerticalDashed0: '┆',
	lineVerticalDashed1: '┇',
	lineVerticalDashed2: '┊',
	lineVerticalDashed3: '┋',
	lineVerticalDashed4: '╎',
	lineVerticalDashed5: '╏',
	lineVerticalDashed6: '╵',
	lineVerticalDashed7: '╷',
	lineVerticalDashed8: '╹',
	lineVerticalDashed9: '╻',
	lineVerticalDashed10: '╽',
	lineVerticalDashed11: '╿',
	lineDownLeft: '┐',
	lineDownLeftArc: '╮',
	lineDownBoldLeftBold: '┓',
	lineDownBoldLeft: '┒',
	lineDownLeftBold: '┑',
	lineDownDoubleLeftDouble: '╗',
	lineDownDoubleLeft: '╖',
	lineDownLeftDouble: '╕',
	lineDownRight: '┌',
	lineDownRightArc: '╭',
	lineDownBoldRightBold: '┏',
	lineDownBoldRight: '┎',
	lineDownRightBold: '┍',
	lineDownDoubleRightDouble: '╔',
	lineDownDoubleRight: '╓',
	lineDownRightDouble: '╒',
	lineUpLeft: '┘',
	lineUpLeftArc: '╯',
	lineUpBoldLeftBold: '┛',
	lineUpBoldLeft: '┚',
	lineUpLeftBold: '┙',
	lineUpDoubleLeftDouble: '╝',
	lineUpDoubleLeft: '╜',
	lineUpLeftDouble: '╛',
	lineUpRight: '└',
	lineUpRightArc: '╰',
	lineUpBoldRightBold: '┗',
	lineUpBoldRight: '┖',
	lineUpRightBold: '┕',
	lineUpDoubleRightDouble: '╚',
	lineUpDoubleRight: '╙',
	lineUpRightDouble: '╘',
	lineUpDownLeft: '┤',
	lineUpBoldDownBoldLeftBold: '┫',
	lineUpBoldDownBoldLeft: '┨',
	lineUpDownLeftBold: '┥',
	lineUpBoldDownLeftBold: '┩',
	lineUpDownBoldLeftBold: '┪',
	lineUpDownBoldLeft: '┧',
	lineUpBoldDownLeft: '┦',
	lineUpDoubleDownDoubleLeftDouble: '╣',
	lineUpDoubleDownDoubleLeft: '╢',
	lineUpDownLeftDouble: '╡',
	lineUpDownRight: '├',
	lineUpBoldDownBoldRightBold: '┣',
	lineUpBoldDownBoldRight: '┠',
	lineUpDownRightBold: '┝',
	lineUpBoldDownRightBold: '┡',
	lineUpDownBoldRightBold: '┢',
	lineUpDownBoldRight: '┟',
	lineUpBoldDownRight: '┞',
	lineUpDoubleDownDoubleRightDouble: '╠',
	lineUpDoubleDownDoubleRight: '╟',
	lineUpDownRightDouble: '╞',
	lineDownLeftRight: '┬',
	lineDownBoldLeftBoldRightBold: '┳',
	lineDownLeftBoldRightBold: '┯',
	lineDownBoldLeftRight: '┰',
	lineDownBoldLeftBoldRight: '┱',
	lineDownBoldLeftRightBold: '┲',
	lineDownLeftRightBold: '┮',
	lineDownLeftBoldRight: '┭',
	lineDownDoubleLeftDoubleRightDouble: '╦',
	lineDownDoubleLeftRight: '╥',
	lineDownLeftDoubleRightDouble: '╤',
	lineUpLeftRight: '┴',
	lineUpBoldLeftBoldRightBold: '┻',
	lineUpLeftBoldRightBold: '┷',
	lineUpBoldLeftRight: '┸',
	lineUpBoldLeftBoldRight: '┹',
	lineUpBoldLeftRightBold: '┺',
	lineUpLeftRightBold: '┶',
	lineUpLeftBoldRight: '┵',
	lineUpDoubleLeftDoubleRightDouble: '╩',
	lineUpDoubleLeftRight: '╨',
	lineUpLeftDoubleRightDouble: '╧',
	lineUpDownLeftRight: '┼',
	lineUpBoldDownBoldLeftBoldRightBold: '╋',
	lineUpDownBoldLeftBoldRightBold: '╈',
	lineUpBoldDownLeftBoldRightBold: '╇',
	lineUpBoldDownBoldLeftRightBold: '╊',
	lineUpBoldDownBoldLeftBoldRight: '╉',
	lineUpBoldDownLeftRight: '╀',
	lineUpDownBoldLeftRight: '╁',
	lineUpDownLeftBoldRight: '┽',
	lineUpDownLeftRightBold: '┾',
	lineUpBoldDownBoldLeftRight: '╂',
	lineUpDownLeftBoldRightBold: '┿',
	lineUpBoldDownLeftBoldRight: '╃',
	lineUpBoldDownLeftRightBold: '╄',
	lineUpDownBoldLeftBoldRight: '╅',
	lineUpDownBoldLeftRightBold: '╆',
	lineUpDoubleDownDoubleLeftDoubleRightDouble: '╬',
	lineUpDoubleDownDoubleLeftRight: '╫',
	lineUpDownLeftDoubleRightDouble: '╪',
	lineCross: '╳',
	lineBackslash: '╲',
	lineSlash: '╱',
};

const specialMainSymbols = {
	tick: '✔',
	info: 'ℹ',
	warning: '⚠',
	cross: '✘',
	squareSmall: '◻',
	squareSmallFilled: '◼',
	circle: '◯',
	circleFilled: '◉',
	circleDotted: '◌',
	circleDouble: '◎',
	circleCircle: 'ⓞ',
	circleCross: 'ⓧ',
	circlePipe: 'Ⓘ',
	radioOn: '◉',
	radioOff: '◯',
	checkboxOn: '☒',
	checkboxOff: '☐',
	checkboxCircleOn: 'ⓧ',
	checkboxCircleOff: 'Ⓘ',
	pointer: '❯',
	triangleUpOutline: '△',
	triangleLeft: '◀',
	triangleRight: '▶',
	lozenge: '◆',
	lozengeOutline: '◇',
	hamburger: '☰',
	smiley: '㋡',
	mustache: '෴',
	star: '★',
	play: '▶',
	nodejs: '⬢',
	oneSeventh: '⅐',
	oneNinth: '⅑',
	oneTenth: '⅒',
};

const specialFallbackSymbols = {
	tick: '√',
	info: 'i',
	warning: '‼',
	cross: '×',
	squareSmall: '□',
	squareSmallFilled: '■',
	circle: '( )',
	circleFilled: '(*)',
	circleDotted: '( )',
	circleDouble: '( )',
	circleCircle: '(○)',
	circleCross: '(×)',
	circlePipe: '(│)',
	radioOn: '(*)',
	radioOff: '( )',
	checkboxOn: '[×]',
	checkboxOff: '[ ]',
	checkboxCircleOn: '(×)',
	checkboxCircleOff: '( )',
	pointer: '>',
	triangleUpOutline: '∆',
	triangleLeft: '◄',
	triangleRight: '►',
	lozenge: '♦',
	lozengeOutline: '◊',
	hamburger: '≡',
	smiley: '☺',
	mustache: '┌─┐',
	star: '✶',
	play: '►',
	nodejs: '♦',
	oneSeventh: '1/7',
	oneNinth: '1/9',
	oneTenth: '1/10',
};

const mainSymbols = {...common, ...specialMainSymbols};
const fallbackSymbols = {...common, ...specialFallbackSymbols};

const shouldUseMain = isUnicodeSupported();
const figures = shouldUseMain ? mainSymbols : fallbackSymbols;
/* harmony default export */ const node_modules_figures = (figures);

const replacements = Object.entries(specialMainSymbols);

// On terminals which do not support Unicode symbols, substitute them to other symbols
const replaceSymbols = (string, {useFallback = !shouldUseMain} = {}) => {
	if (useFallback) {
		for (const [key, mainSymbol] of replacements) {
			string = string.replaceAll(mainSymbol, fallbackSymbols[key]);
		}
	}

	return string;
};

;// CONCATENATED MODULE: external "node:tty"
const external_node_tty_namespaceObject = __WEBPACK_EXTERNAL_createRequire(import.meta.url)("node:tty");
;// CONCATENATED MODULE: ./node_modules/yoctocolors/base.js


// eslint-disable-next-line no-warning-comments
// TODO: Use a better method when it's added to Node.js (https://github.com/nodejs/node/pull/40240)
// Lots of optionals here to support Deno.
const hasColors = external_node_tty_namespaceObject?.WriteStream?.prototype?.hasColors?.() ?? false;

const format = (open, close) => {
	if (!hasColors) {
		return input => input;
	}

	const openCode = `\u001B[${open}m`;
	const closeCode = `\u001B[${close}m`;

	return input => {
		const string = input + ''; // eslint-disable-line no-implicit-coercion -- This is faster.
		let index = string.indexOf(closeCode);

		if (index === -1) {
			// Note: Intentionally not using string interpolation for performance reasons.
			return openCode + string + closeCode;
		}

		// Handle nested colors.

		// We could have done this, but it's too slow (as of Node.js 22).
		// return openCode + string.replaceAll(closeCode, openCode) + closeCode;

		let result = openCode;
		let lastIndex = 0;

		while (index !== -1) {
			result += string.slice(lastIndex, index) + openCode;
			lastIndex = index + closeCode.length;
			index = string.indexOf(closeCode, lastIndex);
		}

		result += string.slice(lastIndex) + closeCode;

		return result;
	};
};

const base_reset = format(0, 0);
const bold = format(1, 22);
const dim = format(2, 22);
const italic = format(3, 23);
const underline = format(4, 24);
const overline = format(53, 55);
const inverse = format(7, 27);
const base_hidden = format(8, 28);
const strikethrough = format(9, 29);

const black = format(30, 39);
const red = format(31, 39);
const green = format(32, 39);
const yellow = format(33, 39);
const blue = format(34, 39);
const magenta = format(35, 39);
const cyan = format(36, 39);
const white = format(37, 39);
const gray = format(90, 39);

const bgBlack = format(40, 49);
const bgRed = format(41, 49);
const bgGreen = format(42, 49);
const bgYellow = format(43, 49);
const bgBlue = format(44, 49);
const bgMagenta = format(45, 49);
const bgCyan = format(46, 49);
const bgWhite = format(47, 49);
const bgGray = format(100, 49);

const redBright = format(91, 39);
const greenBright = format(92, 39);
const yellowBright = format(93, 39);
const blueBright = format(94, 39);
const magentaBright = format(95, 39);
const cyanBright = format(96, 39);
const whiteBright = format(97, 39);

const bgRedBright = format(101, 49);
const bgGreenBright = format(102, 49);
const bgYellowBright = format(103, 49);
const bgBlueBright = format(104, 49);
const bgMagentaBright = format(105, 49);
const bgCyanBright = format(106, 49);
const bgWhiteBright = format(107, 49);

;// CONCATENATED MODULE: ./node_modules/execa/lib/verbose/default.js



// Default when `verbose` is not a function
const defaultVerboseFunction = ({
	type,
	message,
	timestamp,
	piped,
	commandId,
	result: {failed = false} = {},
	options: {reject = true},
}) => {
	const timestampString = serializeTimestamp(timestamp);
	const icon = ICONS[type]({failed, reject, piped});
	const color = COLORS[type]({reject});
	return `${gray(`[${timestampString}]`)} ${gray(`[${commandId}]`)} ${color(icon)} ${color(message)}`;
};

// Prepending the timestamp allows debugging the slow paths of a subprocess
const serializeTimestamp = timestamp => `${padField(timestamp.getHours(), 2)}:${padField(timestamp.getMinutes(), 2)}:${padField(timestamp.getSeconds(), 2)}.${padField(timestamp.getMilliseconds(), 3)}`;

const padField = (field, padding) => String(field).padStart(padding, '0');

const getFinalIcon = ({failed, reject}) => {
	if (!failed) {
		return node_modules_figures.tick;
	}

	return reject ? node_modules_figures.cross : node_modules_figures.warning;
};

const ICONS = {
	command: ({piped}) => piped ? '|' : '$',
	output: () => ' ',
	ipc: () => '*',
	error: getFinalIcon,
	duration: getFinalIcon,
};

const identity = string => string;

const COLORS = {
	command: () => bold,
	output: () => identity,
	ipc: () => identity,
	error: ({reject}) => reject ? redBright : yellowBright,
	duration: () => gray,
};

;// CONCATENATED MODULE: ./node_modules/execa/lib/verbose/custom.js


// Apply the `verbose` function on each line
const applyVerboseOnLines = (printedLines, verboseInfo, fdNumber) => {
	const verboseFunction = getVerboseFunction(verboseInfo, fdNumber);
	return printedLines
		.map(({verboseLine, verboseObject}) => applyVerboseFunction(verboseLine, verboseObject, verboseFunction))
		.filter(printedLine => printedLine !== undefined)
		.map(printedLine => appendNewline(printedLine))
		.join('');
};

const applyVerboseFunction = (verboseLine, verboseObject, verboseFunction) => {
	if (verboseFunction === undefined) {
		return verboseLine;
	}

	const printedLine = verboseFunction(verboseLine, verboseObject);
	if (typeof printedLine === 'string') {
		return printedLine;
	}
};

const appendNewline = printedLine => printedLine.endsWith('\n')
	? printedLine
	: `${printedLine}\n`;

;// CONCATENATED MODULE: ./node_modules/execa/lib/verbose/log.js





// This prints on stderr.
// If the subprocess prints on stdout and is using `stdout: 'inherit'`,
// there is a chance both writes will compete (introducing a race condition).
// This means their respective order is not deterministic.
// In particular, this means the verbose command lines might be after the start of the subprocess output.
// Using synchronous I/O does not solve this problem.
// However, this only seems to happen when the stdout/stderr target
// (e.g. a terminal) is being written to by many subprocesses at once, which is unlikely in real scenarios.
const verboseLog = ({type, verboseMessage, fdNumber, verboseInfo, result}) => {
	const verboseObject = getVerboseObject({type, result, verboseInfo});
	const printedLines = getPrintedLines(verboseMessage, verboseObject);
	const finalLines = applyVerboseOnLines(printedLines, verboseInfo, fdNumber);
	if (finalLines !== '') {
		console.warn(finalLines.slice(0, -1));
	}
};

const getVerboseObject = ({
	type,
	result,
	verboseInfo: {escapedCommand, commandId, rawOptions: {piped = false, ...options}},
}) => ({
	type,
	escapedCommand,
	commandId: `${commandId}`,
	timestamp: new Date(),
	piped,
	result,
	options,
});

const getPrintedLines = (verboseMessage, verboseObject) => verboseMessage
	.split('\n')
	.map(message => getPrintedLine({...verboseObject, message}));

const getPrintedLine = verboseObject => {
	const verboseLine = defaultVerboseFunction(verboseObject);
	return {verboseLine, verboseObject};
};

// Serialize any type to a line string, for logging
const serializeVerboseMessage = message => {
	const messageString = typeof message === 'string' ? message : (0,external_node_util_namespaceObject.inspect)(message);
	const escapedMessage = escapeLines(messageString);
	return escapedMessage.replaceAll('\t', ' '.repeat(TAB_SIZE));
};

// Same as `util.inspect()`
const TAB_SIZE = 2;

;// CONCATENATED MODULE: ./node_modules/execa/lib/verbose/start.js



// When `verbose` is `short|full|custom`, print each command
const logCommand = (escapedCommand, verboseInfo) => {
	if (!isVerbose(verboseInfo)) {
		return;
	}

	verboseLog({
		type: 'command',
		verboseMessage: escapedCommand,
		verboseInfo,
	});
};

;// CONCATENATED MODULE: ./node_modules/execa/lib/verbose/info.js


// Information computed before spawning, used by the `verbose` option
const getVerboseInfo = (verbose, escapedCommand, rawOptions) => {
	validateVerbose(verbose);
	const commandId = getCommandId(verbose);
	return {
		verbose,
		escapedCommand,
		commandId,
		rawOptions,
	};
};

const getCommandId = verbose => isVerbose({verbose}) ? COMMAND_ID++ : undefined;

// Prepending the `pid` is useful when multiple commands print their output at the same time.
// However, we cannot use the real PID since this is not available with `child_process.spawnSync()`.
// Also, we cannot use the real PID if we want to print it before `child_process.spawn()` is run.
// As a pro, it is shorter than a normal PID and never re-uses the same id.
// As a con, it cannot be used to send signals.
let COMMAND_ID = 0n;

const validateVerbose = verbose => {
	for (const fdVerbose of verbose) {
		if (fdVerbose === false) {
			throw new TypeError('The "verbose: false" option was renamed to "verbose: \'none\'".');
		}

		if (fdVerbose === true) {
			throw new TypeError('The "verbose: true" option was renamed to "verbose: \'short\'".');
		}

		if (!VERBOSE_VALUES.includes(fdVerbose) && !isVerboseFunction(fdVerbose)) {
			const allowedValues = VERBOSE_VALUES.map(allowedValue => `'${allowedValue}'`).join(', ');
			throw new TypeError(`The "verbose" option must not be ${fdVerbose}. Allowed values are: ${allowedValues} or a function.`);
		}
	}
};

;// CONCATENATED MODULE: ./node_modules/execa/lib/return/duration.js


// Start counting time before spawning the subprocess
const getStartTime = () => external_node_process_namespaceObject.hrtime.bigint();

// Compute duration after the subprocess ended.
// Printed by the `verbose` option.
const getDurationMs = startTime => Number(external_node_process_namespaceObject.hrtime.bigint() - startTime) / 1e6;

;// CONCATENATED MODULE: ./node_modules/execa/lib/arguments/command.js






// Compute `result.command`, `result.escapedCommand` and `verbose`-related information
const handleCommand = (filePath, rawArguments, rawOptions) => {
	const startTime = getStartTime();
	const {command, escapedCommand} = joinCommand(filePath, rawArguments);
	const verbose = normalizeFdSpecificOption(rawOptions, 'verbose');
	const verboseInfo = getVerboseInfo(verbose, escapedCommand, {...rawOptions});
	logCommand(escapedCommand, verboseInfo);
	return {
		command,
		escapedCommand,
		startTime,
		verboseInfo,
	};
};

;// CONCATENATED MODULE: external "node:path"
const external_node_path_namespaceObject = __WEBPACK_EXTERNAL_createRequire(import.meta.url)("node:path");
// EXTERNAL MODULE: ./node_modules/execa/node_modules/cross-spawn/index.js
var cross_spawn = __nccwpck_require__(678);
;// CONCATENATED MODULE: ./node_modules/npm-run-path/node_modules/path-key/index.js
function pathKey(options = {}) {
	const {
		env = process.env,
		platform = process.platform
	} = options;

	if (platform !== 'win32') {
		return 'PATH';
	}

	return Object.keys(env).reverse().find(key => key.toUpperCase() === 'PATH') || 'Path';
}

;// CONCATENATED MODULE: ./node_modules/unicorn-magic/node.js





const execFileOriginal = (0,external_node_util_namespaceObject.promisify)(external_node_child_process_namespaceObject.execFile);

function toPath(urlOrPath) {
	return urlOrPath instanceof URL ? (0,external_node_url_namespaceObject.fileURLToPath)(urlOrPath) : urlOrPath;
}

function rootDirectory(pathInput) {
	return path.parse(toPath(pathInput)).root;
}

function traversePathUp(startPath) {
	return {
		* [Symbol.iterator]() {
			let currentPath = external_node_path_namespaceObject.resolve(toPath(startPath));
			let previousPath;

			while (previousPath !== currentPath) {
				yield currentPath;
				previousPath = currentPath;
				currentPath = external_node_path_namespaceObject.resolve(currentPath, '..');
			}
		},
	};
}

const TEN_MEGABYTES_IN_BYTES = (/* unused pure expression or super */ null && (10 * 1024 * 1024));

async function execFile(file, arguments_, options = {}) {
	return execFileOriginal(file, arguments_, {
		maxBuffer: TEN_MEGABYTES_IN_BYTES,
		...options,
	});
}

function execFileSync(file, arguments_ = [], options = {}) {
	return execFileSyncOriginal(file, arguments_, {
		maxBuffer: TEN_MEGABYTES_IN_BYTES,
		encoding: 'utf8',
		stdio: 'pipe',
		...options,
	});
}



;// CONCATENATED MODULE: ./node_modules/npm-run-path/index.js





const npmRunPath = ({
	cwd = external_node_process_namespaceObject.cwd(),
	path: pathOption = external_node_process_namespaceObject.env[pathKey()],
	preferLocal = true,
	execPath = external_node_process_namespaceObject.execPath,
	addExecPath = true,
} = {}) => {
	const cwdPath = external_node_path_namespaceObject.resolve(toPath(cwd));
	const result = [];
	const pathParts = pathOption.split(external_node_path_namespaceObject.delimiter);

	if (preferLocal) {
		applyPreferLocal(result, pathParts, cwdPath);
	}

	if (addExecPath) {
		applyExecPath(result, pathParts, execPath, cwdPath);
	}

	return pathOption === '' || pathOption === external_node_path_namespaceObject.delimiter
		? `${result.join(external_node_path_namespaceObject.delimiter)}${pathOption}`
		: [...result, pathOption].join(external_node_path_namespaceObject.delimiter);
};

const applyPreferLocal = (result, pathParts, cwdPath) => {
	for (const directory of traversePathUp(cwdPath)) {
		const pathPart = external_node_path_namespaceObject.join(directory, 'node_modules/.bin');
		if (!pathParts.includes(pathPart)) {
			result.push(pathPart);
		}
	}
};

// Ensure the running `node` binary is used
const applyExecPath = (result, pathParts, execPath, cwdPath) => {
	const pathPart = external_node_path_namespaceObject.resolve(cwdPath, toPath(execPath), '..');
	if (!pathParts.includes(pathPart)) {
		result.push(pathPart);
	}
};

const npmRunPathEnv = ({env = external_node_process_namespaceObject.env, ...options} = {}) => {
	env = {...env};

	const pathName = pathKey({env});
	options.path = env[pathName];
	env[pathName] = npmRunPath(options);

	return env;
};

;// CONCATENATED MODULE: external "node:timers/promises"
const promises_namespaceObject = __WEBPACK_EXTERNAL_createRequire(import.meta.url)("node:timers/promises");
;// CONCATENATED MODULE: ./node_modules/execa/lib/return/final-error.js
// When the subprocess fails, this is the error instance being returned.
// If another error instance is being thrown, it is kept as `error.cause`.
const getFinalError = (originalError, message, isSync) => {
	const ErrorClass = isSync ? ExecaSyncError : ExecaError;
	const options = originalError instanceof DiscardedError ? {} : {cause: originalError};
	return new ErrorClass(message, options);
};

// Indicates that the error is used only to interrupt control flow, but not in the return value
class DiscardedError extends Error {}

// Proper way to set `error.name`: it should be inherited and non-enumerable
const setErrorName = (ErrorClass, value) => {
	Object.defineProperty(ErrorClass.prototype, 'name', {
		value,
		writable: true,
		enumerable: false,
		configurable: true,
	});
	Object.defineProperty(ErrorClass.prototype, execaErrorSymbol, {
		value: true,
		writable: false,
		enumerable: false,
		configurable: false,
	});
};

// Unlike `instanceof`, this works across realms
const isExecaError = error => isErrorInstance(error) && execaErrorSymbol in error;

const execaErrorSymbol = Symbol('isExecaError');

const isErrorInstance = value => Object.prototype.toString.call(value) === '[object Error]';

// We use two different Error classes for async/sync methods since they have slightly different shape and types
class ExecaError extends Error {}
setErrorName(ExecaError, ExecaError.name);

class ExecaSyncError extends Error {}
setErrorName(ExecaSyncError, ExecaSyncError.name);

;// CONCATENATED MODULE: external "node:os"
const external_node_os_namespaceObject = __WEBPACK_EXTERNAL_createRequire(import.meta.url)("node:os");
;// CONCATENATED MODULE: ./node_modules/human-signals/build/src/realtime.js

const getRealtimeSignals=()=>{
const length=SIGRTMAX-SIGRTMIN+1;
return Array.from({length},getRealtimeSignal)
};

const getRealtimeSignal=(value,index)=>({
name:`SIGRT${index+1}`,
number:SIGRTMIN+index,
action:"terminate",
description:"Application-specific signal (realtime)",
standard:"posix"
});

const SIGRTMIN=34;
const SIGRTMAX=64;
;// CONCATENATED MODULE: ./node_modules/human-signals/build/src/core.js


const SIGNALS=[
{
name:"SIGHUP",
number:1,
action:"terminate",
description:"Terminal closed",
standard:"posix"
},
{
name:"SIGINT",
number:2,
action:"terminate",
description:"User interruption with CTRL-C",
standard:"ansi"
},
{
name:"SIGQUIT",
number:3,
action:"core",
description:"User interruption with CTRL-\\",
standard:"posix"
},
{
name:"SIGILL",
number:4,
action:"core",
description:"Invalid machine instruction",
standard:"ansi"
},
{
name:"SIGTRAP",
number:5,
action:"core",
description:"Debugger breakpoint",
standard:"posix"
},
{
name:"SIGABRT",
number:6,
action:"core",
description:"Aborted",
standard:"ansi"
},
{
name:"SIGIOT",
number:6,
action:"core",
description:"Aborted",
standard:"bsd"
},
{
name:"SIGBUS",
number:7,
action:"core",
description:
"Bus error due to misaligned, non-existing address or paging error",
standard:"bsd"
},
{
name:"SIGEMT",
number:7,
action:"terminate",
description:"Command should be emulated but is not implemented",
standard:"other"
},
{
name:"SIGFPE",
number:8,
action:"core",
description:"Floating point arithmetic error",
standard:"ansi"
},
{
name:"SIGKILL",
number:9,
action:"terminate",
description:"Forced termination",
standard:"posix",
forced:true
},
{
name:"SIGUSR1",
number:10,
action:"terminate",
description:"Application-specific signal",
standard:"posix"
},
{
name:"SIGSEGV",
number:11,
action:"core",
description:"Segmentation fault",
standard:"ansi"
},
{
name:"SIGUSR2",
number:12,
action:"terminate",
description:"Application-specific signal",
standard:"posix"
},
{
name:"SIGPIPE",
number:13,
action:"terminate",
description:"Broken pipe or socket",
standard:"posix"
},
{
name:"SIGALRM",
number:14,
action:"terminate",
description:"Timeout or timer",
standard:"posix"
},
{
name:"SIGTERM",
number:15,
action:"terminate",
description:"Termination",
standard:"ansi"
},
{
name:"SIGSTKFLT",
number:16,
action:"terminate",
description:"Stack is empty or overflowed",
standard:"other"
},
{
name:"SIGCHLD",
number:17,
action:"ignore",
description:"Child process terminated, paused or unpaused",
standard:"posix"
},
{
name:"SIGCLD",
number:17,
action:"ignore",
description:"Child process terminated, paused or unpaused",
standard:"other"
},
{
name:"SIGCONT",
number:18,
action:"unpause",
description:"Unpaused",
standard:"posix",
forced:true
},
{
name:"SIGSTOP",
number:19,
action:"pause",
description:"Paused",
standard:"posix",
forced:true
},
{
name:"SIGTSTP",
number:20,
action:"pause",
description:"Paused using CTRL-Z or \"suspend\"",
standard:"posix"
},
{
name:"SIGTTIN",
number:21,
action:"pause",
description:"Background process cannot read terminal input",
standard:"posix"
},
{
name:"SIGBREAK",
number:21,
action:"terminate",
description:"User interruption with CTRL-BREAK",
standard:"other"
},
{
name:"SIGTTOU",
number:22,
action:"pause",
description:"Background process cannot write to terminal output",
standard:"posix"
},
{
name:"SIGURG",
number:23,
action:"ignore",
description:"Socket received out-of-band data",
standard:"bsd"
},
{
name:"SIGXCPU",
number:24,
action:"core",
description:"Process timed out",
standard:"bsd"
},
{
name:"SIGXFSZ",
number:25,
action:"core",
description:"File too big",
standard:"bsd"
},
{
name:"SIGVTALRM",
number:26,
action:"terminate",
description:"Timeout or timer",
standard:"bsd"
},
{
name:"SIGPROF",
number:27,
action:"terminate",
description:"Timeout or timer",
standard:"bsd"
},
{
name:"SIGWINCH",
number:28,
action:"ignore",
description:"Terminal window size changed",
standard:"bsd"
},
{
name:"SIGIO",
number:29,
action:"terminate",
description:"I/O is available",
standard:"other"
},
{
name:"SIGPOLL",
number:29,
action:"terminate",
description:"Watched event",
standard:"other"
},
{
name:"SIGINFO",
number:29,
action:"ignore",
description:"Request for process information",
standard:"other"
},
{
name:"SIGPWR",
number:30,
action:"terminate",
description:"Device running out of power",
standard:"systemv"
},
{
name:"SIGSYS",
number:31,
action:"core",
description:"Invalid system call",
standard:"other"
},
{
name:"SIGUNUSED",
number:31,
action:"terminate",
description:"Invalid system call",
standard:"other"
}];
;// CONCATENATED MODULE: ./node_modules/human-signals/build/src/signals.js







const getSignals=()=>{
const realtimeSignals=getRealtimeSignals();
const signals=[...SIGNALS,...realtimeSignals].map(normalizeSignal);
return signals
};







const normalizeSignal=({
name,
number:defaultNumber,
description,
action,
forced=false,
standard
})=>{
const{
signals:{[name]:constantSignal}
}=external_node_os_namespaceObject.constants;
const supported=constantSignal!==undefined;
const number=supported?constantSignal:defaultNumber;
return{name,number,description,supported,action,forced,standard}
};
;// CONCATENATED MODULE: ./node_modules/human-signals/build/src/main.js







const getSignalsByName=()=>{
const signals=getSignals();
return Object.fromEntries(signals.map(getSignalByName))
};

const getSignalByName=({
name,
number,
description,
supported,
action,
forced,
standard
})=>[name,{name,number,description,supported,action,forced,standard}];

const signalsByName=getSignalsByName();




const getSignalsByNumber=()=>{
const signals=getSignals();
const length=SIGRTMAX+1;
const signalsA=Array.from({length},(value,number)=>
getSignalByNumber(number,signals)
);
return Object.assign({},...signalsA)
};

const getSignalByNumber=(number,signals)=>{
const signal=findSignalByNumber(number,signals);

if(signal===undefined){
return{}
}

const{name,description,supported,action,forced,standard}=signal;
return{
[number]:{
name,
number,
description,
supported,
action,
forced,
standard
}
}
};



const findSignalByNumber=(number,signals)=>{
const signal=signals.find(({name})=>external_node_os_namespaceObject.constants.signals[name]===number);

if(signal!==undefined){
return signal
}

return signals.find((signalA)=>signalA.number===number)
};

const signalsByNumber=getSignalsByNumber();
;// CONCATENATED MODULE: ./node_modules/execa/lib/terminate/signal.js



// Normalize signals for comparison purpose.
// Also validate the signal exists.
const normalizeKillSignal = killSignal => {
	const optionName = 'option `killSignal`';
	if (killSignal === 0) {
		throw new TypeError(`Invalid ${optionName}: 0 cannot be used.`);
	}

	return signal_normalizeSignal(killSignal, optionName);
};

const normalizeSignalArgument = signal => signal === 0
	? signal
	: signal_normalizeSignal(signal, '`subprocess.kill()`\'s argument');

const signal_normalizeSignal = (signalNameOrInteger, optionName) => {
	if (Number.isInteger(signalNameOrInteger)) {
		return normalizeSignalInteger(signalNameOrInteger, optionName);
	}

	if (typeof signalNameOrInteger === 'string') {
		return normalizeSignalName(signalNameOrInteger, optionName);
	}

	throw new TypeError(`Invalid ${optionName} ${String(signalNameOrInteger)}: it must be a string or an integer.\n${getAvailableSignals()}`);
};

const normalizeSignalInteger = (signalInteger, optionName) => {
	if (signalsIntegerToName.has(signalInteger)) {
		return signalsIntegerToName.get(signalInteger);
	}

	throw new TypeError(`Invalid ${optionName} ${signalInteger}: this signal integer does not exist.\n${getAvailableSignals()}`);
};

const getSignalsIntegerToName = () => new Map(Object.entries(external_node_os_namespaceObject.constants.signals)
	.reverse()
	.map(([signalName, signalInteger]) => [signalInteger, signalName]));

const signalsIntegerToName = getSignalsIntegerToName();

const normalizeSignalName = (signalName, optionName) => {
	if (signalName in external_node_os_namespaceObject.constants.signals) {
		return signalName;
	}

	if (signalName.toUpperCase() in external_node_os_namespaceObject.constants.signals) {
		throw new TypeError(`Invalid ${optionName} '${signalName}': please rename it to '${signalName.toUpperCase()}'.`);
	}

	throw new TypeError(`Invalid ${optionName} '${signalName}': this signal name does not exist.\n${getAvailableSignals()}`);
};

const getAvailableSignals = () => `Available signal names: ${getAvailableSignalNames()}.
Available signal numbers: ${getAvailableSignalIntegers()}.`;

const getAvailableSignalNames = () => Object.keys(external_node_os_namespaceObject.constants.signals)
	.sort()
	.map(signalName => `'${signalName}'`)
	.join(', ');

const getAvailableSignalIntegers = () => [...new Set(Object.values(external_node_os_namespaceObject.constants.signals)
	.sort((signalInteger, signalIntegerTwo) => signalInteger - signalIntegerTwo))]
	.join(', ');

// Human-friendly description of a signal
const getSignalDescription = signal => signalsByName[signal].description;

;// CONCATENATED MODULE: ./node_modules/execa/lib/terminate/kill.js




// Normalize the `forceKillAfterDelay` option
const normalizeForceKillAfterDelay = forceKillAfterDelay => {
	if (forceKillAfterDelay === false) {
		return forceKillAfterDelay;
	}

	if (forceKillAfterDelay === true) {
		return DEFAULT_FORCE_KILL_TIMEOUT;
	}

	if (!Number.isFinite(forceKillAfterDelay) || forceKillAfterDelay < 0) {
		throw new TypeError(`Expected the \`forceKillAfterDelay\` option to be a non-negative integer, got \`${forceKillAfterDelay}\` (${typeof forceKillAfterDelay})`);
	}

	return forceKillAfterDelay;
};

const DEFAULT_FORCE_KILL_TIMEOUT = 1000 * 5;

// Monkey-patches `subprocess.kill()` to add `forceKillAfterDelay` behavior and `.kill(error)`
const subprocessKill = (
	{kill, options: {forceKillAfterDelay, killSignal}, onInternalError, context, controller},
	signalOrError,
	errorArgument,
) => {
	const {signal, error} = parseKillArguments(signalOrError, errorArgument, killSignal);
	emitKillError(error, onInternalError);
	const killResult = kill(signal);
	setKillTimeout({
		kill,
		signal,
		forceKillAfterDelay,
		killSignal,
		killResult,
		context,
		controller,
	});
	return killResult;
};

const parseKillArguments = (signalOrError, errorArgument, killSignal) => {
	const [signal = killSignal, error] = isErrorInstance(signalOrError)
		? [undefined, signalOrError]
		: [signalOrError, errorArgument];

	if (typeof signal !== 'string' && !Number.isInteger(signal)) {
		throw new TypeError(`The first argument must be an error instance or a signal name string/integer: ${String(signal)}`);
	}

	if (error !== undefined && !isErrorInstance(error)) {
		throw new TypeError(`The second argument is optional. If specified, it must be an error instance: ${error}`);
	}

	return {signal: normalizeSignalArgument(signal), error};
};

// Fails right away when calling `subprocess.kill(error)`.
// Does not wait for actual signal termination.
// Uses a deferred promise instead of the `error` event on the subprocess, as this is less intrusive.
const emitKillError = (error, onInternalError) => {
	if (error !== undefined) {
		onInternalError.reject(error);
	}
};

const setKillTimeout = async ({kill, signal, forceKillAfterDelay, killSignal, killResult, context, controller}) => {
	if (signal === killSignal && killResult) {
		killOnTimeout({
			kill,
			forceKillAfterDelay,
			context,
			controllerSignal: controller.signal,
		});
	}
};

// Forcefully terminate a subprocess after a timeout
const killOnTimeout = async ({kill, forceKillAfterDelay, context, controllerSignal}) => {
	if (forceKillAfterDelay === false) {
		return;
	}

	try {
		await (0,promises_namespaceObject.setTimeout)(forceKillAfterDelay, undefined, {signal: controllerSignal});
		if (kill('SIGKILL')) {
			context.isForcefullyTerminated ??= true;
		}
	} catch {}
};

;// CONCATENATED MODULE: external "node:events"
const external_node_events_namespaceObject = __WEBPACK_EXTERNAL_createRequire(import.meta.url)("node:events");
;// CONCATENATED MODULE: ./node_modules/execa/lib/utils/abort-signal.js


// Combines `util.aborted()` and `events.addAbortListener()`: promise-based and cleaned up with a stop signal
const onAbortedSignal = async (mainSignal, stopSignal) => {
	if (!mainSignal.aborted) {
		await (0,external_node_events_namespaceObject.once)(mainSignal, 'abort', {signal: stopSignal});
	}
};

;// CONCATENATED MODULE: ./node_modules/execa/lib/terminate/cancel.js


// Validate the `cancelSignal` option
const validateCancelSignal = ({cancelSignal}) => {
	if (cancelSignal !== undefined && Object.prototype.toString.call(cancelSignal) !== '[object AbortSignal]') {
		throw new Error(`The \`cancelSignal\` option must be an AbortSignal: ${String(cancelSignal)}`);
	}
};

// Terminate the subprocess when aborting the `cancelSignal` option and `gracefulSignal` is `false`
const throwOnCancel = ({subprocess, cancelSignal, gracefulCancel, context, controller}) => cancelSignal === undefined || gracefulCancel
	? []
	: [terminateOnCancel(subprocess, cancelSignal, context, controller)];

const terminateOnCancel = async (subprocess, cancelSignal, context, {signal}) => {
	await onAbortedSignal(cancelSignal, signal);
	context.terminationReason ??= 'cancel';
	subprocess.kill();
	throw cancelSignal.reason;
};

;// CONCATENATED MODULE: ./node_modules/execa/lib/ipc/validation.js
// Validate the IPC channel is connected before receiving/sending messages
const validateIpcMethod = ({methodName, isSubprocess, ipc, isConnected}) => {
	validateIpcOption(methodName, isSubprocess, ipc);
	validateConnection(methodName, isSubprocess, isConnected);
};

// Better error message when forgetting to set `ipc: true` and using the IPC methods
const validateIpcOption = (methodName, isSubprocess, ipc) => {
	if (!ipc) {
		throw new Error(`${getMethodName(methodName, isSubprocess)} can only be used if the \`ipc\` option is \`true\`.`);
	}
};

// Better error message when one process does not send/receive messages once the other process has disconnected.
// This also makes it clear that any buffered messages are lost once either process has disconnected.
// Also when aborting `cancelSignal` after disconnecting the IPC.
const validateConnection = (methodName, isSubprocess, isConnected) => {
	if (!isConnected) {
		throw new Error(`${getMethodName(methodName, isSubprocess)} cannot be used: the ${getOtherProcessName(isSubprocess)} has already exited or disconnected.`);
	}
};

// When `getOneMessage()` could not complete due to an early disconnection
const throwOnEarlyDisconnect = isSubprocess => {
	throw new Error(`${getMethodName('getOneMessage', isSubprocess)} could not complete: the ${getOtherProcessName(isSubprocess)} exited or disconnected.`);
};

// When both processes use `sendMessage()` with `strict` at the same time
const throwOnStrictDeadlockError = isSubprocess => {
	throw new Error(`${getMethodName('sendMessage', isSubprocess)} failed: the ${getOtherProcessName(isSubprocess)} is sending a message too, instead of listening to incoming messages.
This can be fixed by both sending a message and listening to incoming messages at the same time:

const [receivedMessage] = await Promise.all([
	${getMethodName('getOneMessage', isSubprocess)},
	${getMethodName('sendMessage', isSubprocess, 'message, {strict: true}')},
]);`);
};

// When the other process used `strict` but the current process had I/O error calling `sendMessage()` for the response
const getStrictResponseError = (error, isSubprocess) => new Error(`${getMethodName('sendMessage', isSubprocess)} failed when sending an acknowledgment response to the ${getOtherProcessName(isSubprocess)}.`, {cause: error});

// When using `strict` but the other process was not listening for messages
const throwOnMissingStrict = isSubprocess => {
	throw new Error(`${getMethodName('sendMessage', isSubprocess)} failed: the ${getOtherProcessName(isSubprocess)} is not listening to incoming messages.`);
};

// When using `strict` but the other process disconnected before receiving the message
const throwOnStrictDisconnect = isSubprocess => {
	throw new Error(`${getMethodName('sendMessage', isSubprocess)} failed: the ${getOtherProcessName(isSubprocess)} exited without listening to incoming messages.`);
};

// When the current process disconnects while the subprocess is listening to `cancelSignal`
const getAbortDisconnectError = () => new Error(`\`cancelSignal\` aborted: the ${getOtherProcessName(true)} disconnected.`);

// When the subprocess uses `cancelSignal` but not the current process
const throwOnMissingParent = () => {
	throw new Error('`getCancelSignal()` cannot be used without setting the `cancelSignal` subprocess option.');
};

// EPIPE can happen when sending a message to a subprocess that is closing but has not disconnected yet
const handleEpipeError = ({error, methodName, isSubprocess}) => {
	if (error.code === 'EPIPE') {
		throw new Error(`${getMethodName(methodName, isSubprocess)} cannot be used: the ${getOtherProcessName(isSubprocess)} is disconnecting.`, {cause: error});
	}
};

// Better error message when sending messages which cannot be serialized.
// Works with both `serialization: 'advanced'` and `serialization: 'json'`.
const handleSerializationError = ({error, methodName, isSubprocess, message}) => {
	if (isSerializationError(error)) {
		throw new Error(`${getMethodName(methodName, isSubprocess)}'s argument type is invalid: the message cannot be serialized: ${String(message)}.`, {cause: error});
	}
};

const isSerializationError = ({code, message}) => SERIALIZATION_ERROR_CODES.has(code)
	|| SERIALIZATION_ERROR_MESSAGES.some(serializationErrorMessage => message.includes(serializationErrorMessage));

// `error.code` set by Node.js when it failed to serialize the message
const SERIALIZATION_ERROR_CODES = new Set([
	// Message is `undefined`
	'ERR_MISSING_ARGS',
	// Message is a function, a bigint, a symbol
	'ERR_INVALID_ARG_TYPE',
]);

// `error.message` set by Node.js when it failed to serialize the message
const SERIALIZATION_ERROR_MESSAGES = [
	// Message is a promise or a proxy, with `serialization: 'advanced'`
	'could not be cloned',
	// Message has cycles, with `serialization: 'json'`
	'circular structure',
	// Message has cycles inside toJSON(), with `serialization: 'json'`
	'call stack size exceeded',
];

const getMethodName = (methodName, isSubprocess, parameters = '') => methodName === 'cancelSignal'
	? '`cancelSignal`\'s `controller.abort()`'
	: `${getNamespaceName(isSubprocess)}${methodName}(${parameters})`;

const getNamespaceName = isSubprocess => isSubprocess ? '' : 'subprocess.';

const getOtherProcessName = isSubprocess => isSubprocess ? 'parent process' : 'subprocess';

// When any error arises, we disconnect the IPC.
// Otherwise, it is likely that one of the processes will stop sending/receiving messages.
// This would leave the other process hanging.
const disconnect = anyProcess => {
	if (anyProcess.connected) {
		anyProcess.disconnect();
	}
};

;// CONCATENATED MODULE: ./node_modules/execa/lib/utils/deferred.js
const createDeferred = () => {
	const methods = {};
	const promise = new Promise((resolve, reject) => {
		Object.assign(methods, {resolve, reject});
	});
	return Object.assign(promise, methods);
};

;// CONCATENATED MODULE: ./node_modules/execa/lib/arguments/fd-options.js


// Retrieve stream targeted by the `to` option
const getToStream = (destination, to = 'stdin') => {
	const isWritable = true;
	const {options, fileDescriptors} = SUBPROCESS_OPTIONS.get(destination);
	const fdNumber = getFdNumber(fileDescriptors, to, isWritable);
	const destinationStream = destination.stdio[fdNumber];

	if (destinationStream === null) {
		throw new TypeError(getInvalidStdioOptionMessage(fdNumber, to, options, isWritable));
	}

	return destinationStream;
};

// Retrieve stream targeted by the `from` option
const getFromStream = (source, from = 'stdout') => {
	const isWritable = false;
	const {options, fileDescriptors} = SUBPROCESS_OPTIONS.get(source);
	const fdNumber = getFdNumber(fileDescriptors, from, isWritable);
	const sourceStream = fdNumber === 'all' ? source.all : source.stdio[fdNumber];

	if (sourceStream === null || sourceStream === undefined) {
		throw new TypeError(getInvalidStdioOptionMessage(fdNumber, from, options, isWritable));
	}

	return sourceStream;
};

// Keeps track of the options passed to each Execa call
const SUBPROCESS_OPTIONS = new WeakMap();

const getFdNumber = (fileDescriptors, fdName, isWritable) => {
	const fdNumber = parseFdNumber(fdName, isWritable);
	validateFdNumber(fdNumber, fdName, isWritable, fileDescriptors);
	return fdNumber;
};

const parseFdNumber = (fdName, isWritable) => {
	const fdNumber = parseFd(fdName);
	if (fdNumber !== undefined) {
		return fdNumber;
	}

	const {validOptions, defaultValue} = isWritable
		? {validOptions: '"stdin"', defaultValue: 'stdin'}
		: {validOptions: '"stdout", "stderr", "all"', defaultValue: 'stdout'};
	throw new TypeError(`"${getOptionName(isWritable)}" must not be "${fdName}".
It must be ${validOptions} or "fd3", "fd4" (and so on).
It is optional and defaults to "${defaultValue}".`);
};

const validateFdNumber = (fdNumber, fdName, isWritable, fileDescriptors) => {
	const fileDescriptor = fileDescriptors[getUsedDescriptor(fdNumber)];
	if (fileDescriptor === undefined) {
		throw new TypeError(`"${getOptionName(isWritable)}" must not be ${fdName}. That file descriptor does not exist.
Please set the "stdio" option to ensure that file descriptor exists.`);
	}

	if (fileDescriptor.direction === 'input' && !isWritable) {
		throw new TypeError(`"${getOptionName(isWritable)}" must not be ${fdName}. It must be a readable stream, not writable.`);
	}

	if (fileDescriptor.direction !== 'input' && isWritable) {
		throw new TypeError(`"${getOptionName(isWritable)}" must not be ${fdName}. It must be a writable stream, not readable.`);
	}
};

const getInvalidStdioOptionMessage = (fdNumber, fdName, options, isWritable) => {
	if (fdNumber === 'all' && !options.all) {
		return 'The "all" option must be true to use "from: \'all\'".';
	}

	const {optionName, optionValue} = getInvalidStdioOption(fdNumber, options);
	return `The "${optionName}: ${serializeOptionValue(optionValue)}" option is incompatible with using "${getOptionName(isWritable)}: ${serializeOptionValue(fdName)}".
Please set this option with "pipe" instead.`;
};

const getInvalidStdioOption = (fdNumber, {stdin, stdout, stderr, stdio}) => {
	const usedDescriptor = getUsedDescriptor(fdNumber);

	if (usedDescriptor === 0 && stdin !== undefined) {
		return {optionName: 'stdin', optionValue: stdin};
	}

	if (usedDescriptor === 1 && stdout !== undefined) {
		return {optionName: 'stdout', optionValue: stdout};
	}

	if (usedDescriptor === 2 && stderr !== undefined) {
		return {optionName: 'stderr', optionValue: stderr};
	}

	return {optionName: `stdio[${usedDescriptor}]`, optionValue: stdio[usedDescriptor]};
};

const getUsedDescriptor = fdNumber => fdNumber === 'all' ? 1 : fdNumber;

const getOptionName = isWritable => isWritable ? 'to' : 'from';

const serializeOptionValue = value => {
	if (typeof value === 'string') {
		return `'${value}'`;
	}

	return typeof value === 'number' ? `${value}` : 'Stream';
};

;// CONCATENATED MODULE: ./node_modules/execa/lib/utils/max-listeners.js


// Temporarily increase the maximum number of listeners on an eventEmitter
const incrementMaxListeners = (eventEmitter, maxListenersIncrement, signal) => {
	const maxListeners = eventEmitter.getMaxListeners();
	if (maxListeners === 0 || maxListeners === Number.POSITIVE_INFINITY) {
		return;
	}

	eventEmitter.setMaxListeners(maxListeners + maxListenersIncrement);
	(0,external_node_events_namespaceObject.addAbortListener)(signal, () => {
		eventEmitter.setMaxListeners(eventEmitter.getMaxListeners() - maxListenersIncrement);
	});
};

;// CONCATENATED MODULE: ./node_modules/execa/lib/ipc/reference.js
// By default, Node.js keeps the subprocess alive while it has a `message` or `disconnect` listener.
// We replicate the same logic for the events that we proxy.
// This ensures the subprocess is kept alive while `getOneMessage()` and `getEachMessage()` are ongoing.
// This is not a problem with `sendMessage()` since Node.js handles that method automatically.
// We do not use `anyProcess.channel.ref()` since this would prevent the automatic `.channel.refCounted()` Node.js is doing.
// We keep a reference to `anyProcess.channel` since it might be `null` while `getOneMessage()` or `getEachMessage()` is still processing debounced messages.
// See https://github.com/nodejs/node/blob/2aaeaa863c35befa2ebaa98fb7737ec84df4d8e9/lib/internal/child_process.js#L547
const addReference = (channel, reference) => {
	if (reference) {
		addReferenceCount(channel);
	}
};

const addReferenceCount = channel => {
	channel.refCounted();
};

const removeReference = (channel, reference) => {
	if (reference) {
		removeReferenceCount(channel);
	}
};

const removeReferenceCount = channel => {
	channel.unrefCounted();
};

// To proxy events, we setup some global listeners on the `message` and `disconnect` events.
// Those should not keep the subprocess alive, so we remove the automatic counting that Node.js is doing.
// See https://github.com/nodejs/node/blob/1b965270a9c273d4cf70e8808e9d28b9ada7844f/lib/child_process.js#L180
const undoAddedReferences = (channel, isSubprocess) => {
	if (isSubprocess) {
		removeReferenceCount(channel);
		removeReferenceCount(channel);
	}
};

// Reverse it during `disconnect`
const redoAddedReferences = (channel, isSubprocess) => {
	if (isSubprocess) {
		addReferenceCount(channel);
		addReferenceCount(channel);
	}
};

;// CONCATENATED MODULE: ./node_modules/execa/lib/ipc/incoming.js







// By default, Node.js buffers `message` events.
//  - Buffering happens when there is a `message` event is emitted but there is no handler.
//  - As soon as a `message` event handler is set, all buffered `message` events are emitted, emptying the buffer.
//  - This happens both in the current process and the subprocess.
//  - See https://github.com/nodejs/node/blob/501546e8f37059cd577041e23941b640d0d4d406/lib/internal/child_process.js#L719
// This is helpful. Notably, this allows sending messages to a subprocess that's still initializing.
// However, it has several problems.
//  - This works with `events.on()` but not `events.once()` since all buffered messages are emitted at once.
//    For example, users cannot call `await getOneMessage()`/`getEachMessage()` multiple times in a row.
//  - When a user intentionally starts listening to `message` at a specific point in time, past `message` events are replayed, which might be unexpected.
//  - Buffering is unlimited, which might lead to an out-of-memory crash.
//  - This does not work well with multiple consumers.
//    For example, Execa consumes events with both `result.ipcOutput` and manual IPC calls like `getOneMessage()`.
//    Since `result.ipcOutput` reads all incoming messages, no buffering happens for manual IPC calls.
//  - Forgetting to setup a `message` listener, or setting it up too late, is a programming mistake.
//    The default behavior does not allow users to realize they made that mistake.
// To solve those problems, instead of buffering messages, we debounce them.
// The `message` event so it is emitted at most once per macrotask.
const onMessage = async ({anyProcess, channel, isSubprocess, ipcEmitter}, wrappedMessage) => {
	if (handleStrictResponse(wrappedMessage) || handleAbort(wrappedMessage)) {
		return;
	}

	if (!INCOMING_MESSAGES.has(anyProcess)) {
		INCOMING_MESSAGES.set(anyProcess, []);
	}

	const incomingMessages = INCOMING_MESSAGES.get(anyProcess);
	incomingMessages.push(wrappedMessage);

	if (incomingMessages.length > 1) {
		return;
	}

	while (incomingMessages.length > 0) {
		// eslint-disable-next-line no-await-in-loop
		await waitForOutgoingMessages(anyProcess, ipcEmitter, wrappedMessage);
		// eslint-disable-next-line no-await-in-loop
		await promises_namespaceObject.scheduler["yield"]();

		// eslint-disable-next-line no-await-in-loop
		const message = await handleStrictRequest({
			wrappedMessage: incomingMessages[0],
			anyProcess,
			channel,
			isSubprocess,
			ipcEmitter,
		});

		incomingMessages.shift();
		ipcEmitter.emit('message', message);
		ipcEmitter.emit('message:done');
	}
};

// If the `message` event is currently debounced, the `disconnect` event must wait for it
const onDisconnect = async ({anyProcess, channel, isSubprocess, ipcEmitter, boundOnMessage}) => {
	abortOnDisconnect();

	const incomingMessages = INCOMING_MESSAGES.get(anyProcess);
	while (incomingMessages?.length > 0) {
		// eslint-disable-next-line no-await-in-loop
		await (0,external_node_events_namespaceObject.once)(ipcEmitter, 'message:done');
	}

	anyProcess.removeListener('message', boundOnMessage);
	redoAddedReferences(channel, isSubprocess);
	ipcEmitter.connected = false;
	ipcEmitter.emit('disconnect');
};

const INCOMING_MESSAGES = new WeakMap();

;// CONCATENATED MODULE: ./node_modules/execa/lib/ipc/forward.js




// Forward the `message` and `disconnect` events from the process and subprocess to a proxy emitter.
// This prevents the `error` event from stopping IPC.
// This also allows debouncing the `message` event.
const getIpcEmitter = (anyProcess, channel, isSubprocess) => {
	if (IPC_EMITTERS.has(anyProcess)) {
		return IPC_EMITTERS.get(anyProcess);
	}

	// Use an `EventEmitter`, like the `process` that is being proxied
	// eslint-disable-next-line unicorn/prefer-event-target
	const ipcEmitter = new external_node_events_namespaceObject.EventEmitter();
	ipcEmitter.connected = true;
	IPC_EMITTERS.set(anyProcess, ipcEmitter);
	forwardEvents({
		ipcEmitter,
		anyProcess,
		channel,
		isSubprocess,
	});
	return ipcEmitter;
};

const IPC_EMITTERS = new WeakMap();

// The `message` and `disconnect` events are buffered in the subprocess until the first listener is setup.
// However, unbuffering happens after one tick, so this give enough time for the caller to setup the listener on the proxy emitter first.
// See https://github.com/nodejs/node/blob/2aaeaa863c35befa2ebaa98fb7737ec84df4d8e9/lib/internal/child_process.js#L721
const forwardEvents = ({ipcEmitter, anyProcess, channel, isSubprocess}) => {
	const boundOnMessage = onMessage.bind(undefined, {
		anyProcess,
		channel,
		isSubprocess,
		ipcEmitter,
	});
	anyProcess.on('message', boundOnMessage);
	anyProcess.once('disconnect', onDisconnect.bind(undefined, {
		anyProcess,
		channel,
		isSubprocess,
		ipcEmitter,
		boundOnMessage,
	}));
	undoAddedReferences(channel, isSubprocess);
};

// Check whether there might still be some `message` events to receive
const isConnected = anyProcess => {
	const ipcEmitter = IPC_EMITTERS.get(anyProcess);
	return ipcEmitter === undefined
		? anyProcess.channel !== null
		: ipcEmitter.connected;
};

;// CONCATENATED MODULE: ./node_modules/execa/lib/ipc/strict.js








// When using the `strict` option, wrap the message with metadata during `sendMessage()`
const handleSendStrict = ({anyProcess, channel, isSubprocess, message, strict}) => {
	if (!strict) {
		return message;
	}

	const ipcEmitter = getIpcEmitter(anyProcess, channel, isSubprocess);
	const hasListeners = hasMessageListeners(anyProcess, ipcEmitter);
	return {
		id: count++,
		type: REQUEST_TYPE,
		message,
		hasListeners,
	};
};

let count = 0n;

// Handles when both processes are calling `sendMessage()` with `strict` at the same time.
// If neither process is listening, this would create a deadlock. We detect it and throw.
const validateStrictDeadlock = (outgoingMessages, wrappedMessage) => {
	if (wrappedMessage?.type !== REQUEST_TYPE || wrappedMessage.hasListeners) {
		return;
	}

	for (const {id} of outgoingMessages) {
		if (id !== undefined) {
			STRICT_RESPONSES[id].resolve({isDeadlock: true, hasListeners: false});
		}
	}
};

// The other process then sends the acknowledgment back as a response
const handleStrictRequest = async ({wrappedMessage, anyProcess, channel, isSubprocess, ipcEmitter}) => {
	if (wrappedMessage?.type !== REQUEST_TYPE || !anyProcess.connected) {
		return wrappedMessage;
	}

	const {id, message} = wrappedMessage;
	const response = {id, type: RESPONSE_TYPE, message: hasMessageListeners(anyProcess, ipcEmitter)};

	try {
		await sendMessage({
			anyProcess,
			channel,
			isSubprocess,
			ipc: true,
		}, response);
	} catch (error) {
		ipcEmitter.emit('strict:error', error);
	}

	return message;
};

// Reception of the acknowledgment response
const handleStrictResponse = wrappedMessage => {
	if (wrappedMessage?.type !== RESPONSE_TYPE) {
		return false;
	}

	const {id, message: hasListeners} = wrappedMessage;
	STRICT_RESPONSES[id]?.resolve({isDeadlock: false, hasListeners});
	return true;
};

// Wait for the other process to receive the message from `sendMessage()`
const waitForStrictResponse = async (wrappedMessage, anyProcess, isSubprocess) => {
	if (wrappedMessage?.type !== REQUEST_TYPE) {
		return;
	}

	const deferred = createDeferred();
	STRICT_RESPONSES[wrappedMessage.id] = deferred;
	const controller = new AbortController();

	try {
		const {isDeadlock, hasListeners} = await Promise.race([
			deferred,
			throwOnDisconnect(anyProcess, isSubprocess, controller),
		]);

		if (isDeadlock) {
			throwOnStrictDeadlockError(isSubprocess);
		}

		if (!hasListeners) {
			throwOnMissingStrict(isSubprocess);
		}
	} finally {
		controller.abort();
		delete STRICT_RESPONSES[wrappedMessage.id];
	}
};

const STRICT_RESPONSES = {};

const throwOnDisconnect = async (anyProcess, isSubprocess, {signal}) => {
	incrementMaxListeners(anyProcess, 1, signal);
	await (0,external_node_events_namespaceObject.once)(anyProcess, 'disconnect', {signal});
	throwOnStrictDisconnect(isSubprocess);
};

const REQUEST_TYPE = 'execa:ipc:request';
const RESPONSE_TYPE = 'execa:ipc:response';

;// CONCATENATED MODULE: ./node_modules/execa/lib/ipc/outgoing.js





// When `sendMessage()` is ongoing, any `message` being received waits before being emitted.
// This allows calling one or multiple `await sendMessage()` followed by `await getOneMessage()`/`await getEachMessage()`.
// Without running into a race condition when the other process sends a response too fast, before the current process set up a listener.
const startSendMessage = (anyProcess, wrappedMessage, strict) => {
	if (!OUTGOING_MESSAGES.has(anyProcess)) {
		OUTGOING_MESSAGES.set(anyProcess, new Set());
	}

	const outgoingMessages = OUTGOING_MESSAGES.get(anyProcess);
	const onMessageSent = createDeferred();
	const id = strict ? wrappedMessage.id : undefined;
	const outgoingMessage = {onMessageSent, id};
	outgoingMessages.add(outgoingMessage);
	return {outgoingMessages, outgoingMessage};
};

const endSendMessage = ({outgoingMessages, outgoingMessage}) => {
	outgoingMessages.delete(outgoingMessage);
	outgoingMessage.onMessageSent.resolve();
};

// Await while `sendMessage()` is ongoing, unless there is already a `message` listener
const waitForOutgoingMessages = async (anyProcess, ipcEmitter, wrappedMessage) => {
	while (!hasMessageListeners(anyProcess, ipcEmitter) && OUTGOING_MESSAGES.get(anyProcess)?.size > 0) {
		const outgoingMessages = [...OUTGOING_MESSAGES.get(anyProcess)];
		validateStrictDeadlock(outgoingMessages, wrappedMessage);
		// eslint-disable-next-line no-await-in-loop
		await Promise.all(outgoingMessages.map(({onMessageSent}) => onMessageSent));
	}
};

const OUTGOING_MESSAGES = new WeakMap();

// Whether any `message` listener is setup
const hasMessageListeners = (anyProcess, ipcEmitter) => ipcEmitter.listenerCount('message') > getMinListenerCount(anyProcess);

// When `buffer` is `false`, we set up a `message` listener that should be ignored.
// That listener is only meant to intercept `strict` acknowledgement responses.
const getMinListenerCount = anyProcess => SUBPROCESS_OPTIONS.has(anyProcess)
	&& !getFdSpecificValue(SUBPROCESS_OPTIONS.get(anyProcess).options.buffer, 'ipc')
	? 1
	: 0;

;// CONCATENATED MODULE: ./node_modules/execa/lib/ipc/send.js





// Like `[sub]process.send()` but promise-based.
// We do not `await subprocess` during `.sendMessage()` nor `.getOneMessage()` since those methods are transient.
// Users would still need to `await subprocess` after the method is done.
// Also, this would prevent `unhandledRejection` event from being emitted, making it silent.
const sendMessage = ({anyProcess, channel, isSubprocess, ipc}, message, {strict = false} = {}) => {
	const methodName = 'sendMessage';
	validateIpcMethod({
		methodName,
		isSubprocess,
		ipc,
		isConnected: anyProcess.connected,
	});

	return sendMessageAsync({
		anyProcess,
		channel,
		methodName,
		isSubprocess,
		message,
		strict,
	});
};

const sendMessageAsync = async ({anyProcess, channel, methodName, isSubprocess, message, strict}) => {
	const wrappedMessage = handleSendStrict({
		anyProcess,
		channel,
		isSubprocess,
		message,
		strict,
	});
	const outgoingMessagesState = startSendMessage(anyProcess, wrappedMessage, strict);
	try {
		await sendOneMessage({
			anyProcess,
			methodName,
			isSubprocess,
			wrappedMessage,
			message,
		});
	} catch (error) {
		disconnect(anyProcess);
		throw error;
	} finally {
		endSendMessage(outgoingMessagesState);
	}
};

// Used internally by `cancelSignal`
const sendOneMessage = async ({anyProcess, methodName, isSubprocess, wrappedMessage, message}) => {
	const sendMethod = getSendMethod(anyProcess);

	try {
		await Promise.all([
			waitForStrictResponse(wrappedMessage, anyProcess, isSubprocess),
			sendMethod(wrappedMessage),
		]);
	} catch (error) {
		handleEpipeError({error, methodName, isSubprocess});
		handleSerializationError({
			error,
			methodName,
			isSubprocess,
			message,
		});
		throw error;
	}
};

// [sub]process.send() promisified, memoized
const getSendMethod = anyProcess => {
	if (PROCESS_SEND_METHODS.has(anyProcess)) {
		return PROCESS_SEND_METHODS.get(anyProcess);
	}

	const sendMethod = (0,external_node_util_namespaceObject.promisify)(anyProcess.send.bind(anyProcess));
	PROCESS_SEND_METHODS.set(anyProcess, sendMethod);
	return sendMethod;
};

const PROCESS_SEND_METHODS = new WeakMap();

;// CONCATENATED MODULE: ./node_modules/execa/lib/ipc/graceful.js





// Send an IPC message so the subprocess performs a graceful termination
const sendAbort = (subprocess, message) => {
	const methodName = 'cancelSignal';
	validateConnection(methodName, false, subprocess.connected);
	return sendOneMessage({
		anyProcess: subprocess,
		methodName,
		isSubprocess: false,
		wrappedMessage: {type: GRACEFUL_CANCEL_TYPE, message},
		message,
	});
};

// When the signal is being used, start listening for incoming messages.
// Unbuffering messages takes one microtask to complete, so this must be async.
const getCancelSignal = async ({anyProcess, channel, isSubprocess, ipc}) => {
	await startIpc({
		anyProcess,
		channel,
		isSubprocess,
		ipc,
	});
	return cancelController.signal;
};

const startIpc = async ({anyProcess, channel, isSubprocess, ipc}) => {
	if (cancelListening) {
		return;
	}

	cancelListening = true;

	if (!ipc) {
		throwOnMissingParent();
		return;
	}

	if (channel === null) {
		abortOnDisconnect();
		return;
	}

	getIpcEmitter(anyProcess, channel, isSubprocess);
	await promises_namespaceObject.scheduler["yield"]();
};

let cancelListening = false;

// Reception of IPC message to perform a graceful termination
const handleAbort = wrappedMessage => {
	if (wrappedMessage?.type !== GRACEFUL_CANCEL_TYPE) {
		return false;
	}

	cancelController.abort(wrappedMessage.message);
	return true;
};

const GRACEFUL_CANCEL_TYPE = 'execa:ipc:cancel';

// When the current process disconnects early, the subprocess `cancelSignal` is aborted.
// Otherwise, the signal would never be able to be aborted later on.
const abortOnDisconnect = () => {
	cancelController.abort(getAbortDisconnectError());
};

const cancelController = new AbortController();

;// CONCATENATED MODULE: ./node_modules/execa/lib/terminate/graceful.js




// Validate the `gracefulCancel` option
const validateGracefulCancel = ({gracefulCancel, cancelSignal, ipc, serialization}) => {
	if (!gracefulCancel) {
		return;
	}

	if (cancelSignal === undefined) {
		throw new Error('The `cancelSignal` option must be defined when setting the `gracefulCancel` option.');
	}

	if (!ipc) {
		throw new Error('The `ipc` option cannot be false when setting the `gracefulCancel` option.');
	}

	if (serialization === 'json') {
		throw new Error('The `serialization` option cannot be \'json\' when setting the `gracefulCancel` option.');
	}
};

// Send abort reason to the subprocess when aborting the `cancelSignal` option and `gracefulCancel` is `true`
const throwOnGracefulCancel = ({
	subprocess,
	cancelSignal,
	gracefulCancel,
	forceKillAfterDelay,
	context,
	controller,
}) => gracefulCancel
	? [sendOnAbort({
		subprocess,
		cancelSignal,
		forceKillAfterDelay,
		context,
		controller,
	})]
	: [];

const sendOnAbort = async ({subprocess, cancelSignal, forceKillAfterDelay, context, controller: {signal}}) => {
	await onAbortedSignal(cancelSignal, signal);
	const reason = getReason(cancelSignal);
	await sendAbort(subprocess, reason);
	killOnTimeout({
		kill: subprocess.kill,
		forceKillAfterDelay,
		context,
		controllerSignal: signal,
	});
	context.terminationReason ??= 'gracefulCancel';
	throw cancelSignal.reason;
};

// The default `reason` is a DOMException, which is not serializable with V8
// See https://github.com/nodejs/node/issues/53225
const getReason = ({reason}) => {
	if (!(reason instanceof DOMException)) {
		return reason;
	}

	const error = new Error(reason.message);
	Object.defineProperty(error, 'stack', {
		value: reason.stack,
		enumerable: false,
		configurable: true,
		writable: true,
	});
	return error;
};

;// CONCATENATED MODULE: ./node_modules/execa/lib/terminate/timeout.js



// Validate `timeout` option
const validateTimeout = ({timeout}) => {
	if (timeout !== undefined && (!Number.isFinite(timeout) || timeout < 0)) {
		throw new TypeError(`Expected the \`timeout\` option to be a non-negative integer, got \`${timeout}\` (${typeof timeout})`);
	}
};

// Fails when the `timeout` option is exceeded
const throwOnTimeout = (subprocess, timeout, context, controller) => timeout === 0 || timeout === undefined
	? []
	: [killAfterTimeout(subprocess, timeout, context, controller)];

const killAfterTimeout = async (subprocess, timeout, context, {signal}) => {
	await (0,promises_namespaceObject.setTimeout)(timeout, undefined, {signal});
	context.terminationReason ??= 'timeout';
	subprocess.kill();
	throw new DiscardedError();
};

;// CONCATENATED MODULE: ./node_modules/execa/lib/methods/node.js




// `execaNode()` is a shortcut for `execa(..., {node: true})`
const mapNode = ({options}) => {
	if (options.node === false) {
		throw new TypeError('The "node" option cannot be false with `execaNode()`.');
	}

	return {options: {...options, node: true}};
};

// Applies the `node: true` option, and the related `nodePath`/`nodeOptions` options.
// Modifies the file commands/arguments to ensure the same Node binary and flags are re-used.
// Also adds `ipc: true` and `shell: false`.
const handleNodeOption = (file, commandArguments, {
	node: shouldHandleNode = false,
	nodePath = external_node_process_namespaceObject.execPath,
	nodeOptions = external_node_process_namespaceObject.execArgv.filter(nodeOption => !nodeOption.startsWith('--inspect')),
	cwd,
	execPath: formerNodePath,
	...options
}) => {
	if (formerNodePath !== undefined) {
		throw new TypeError('The "execPath" option has been removed. Please use the "nodePath" option instead.');
	}

	const normalizedNodePath = safeNormalizeFileUrl(nodePath, 'The "nodePath" option');
	const resolvedNodePath = external_node_path_namespaceObject.resolve(cwd, normalizedNodePath);
	const newOptions = {
		...options,
		nodePath: resolvedNodePath,
		node: shouldHandleNode,
		cwd,
	};

	if (!shouldHandleNode) {
		return [file, commandArguments, newOptions];
	}

	if (external_node_path_namespaceObject.basename(file, '.exe') === 'node') {
		throw new TypeError('When the "node" option is true, the first argument does not need to be "node".');
	}

	return [
		resolvedNodePath,
		[...nodeOptions, file, ...commandArguments],
		{ipc: true, ...newOptions, shell: false},
	];
};

;// CONCATENATED MODULE: external "node:v8"
const external_node_v8_namespaceObject = __WEBPACK_EXTERNAL_createRequire(import.meta.url)("node:v8");
;// CONCATENATED MODULE: ./node_modules/execa/lib/ipc/ipc-input.js


// Validate the `ipcInput` option
const validateIpcInputOption = ({ipcInput, ipc, serialization}) => {
	if (ipcInput === undefined) {
		return;
	}

	if (!ipc) {
		throw new Error('The `ipcInput` option cannot be set unless the `ipc` option is `true`.');
	}

	validateIpcInput[serialization](ipcInput);
};

const validateAdvancedInput = ipcInput => {
	try {
		(0,external_node_v8_namespaceObject.serialize)(ipcInput);
	} catch (error) {
		throw new Error('The `ipcInput` option is not serializable with a structured clone.', {cause: error});
	}
};

const validateJsonInput = ipcInput => {
	try {
		JSON.stringify(ipcInput);
	} catch (error) {
		throw new Error('The `ipcInput` option is not serializable with JSON.', {cause: error});
	}
};

const validateIpcInput = {
	advanced: validateAdvancedInput,
	json: validateJsonInput,
};

// When the `ipcInput` option is set, it is sent as an initial IPC message to the subprocess
const sendIpcInput = async (subprocess, ipcInput) => {
	if (ipcInput === undefined) {
		return;
	}

	await subprocess.sendMessage(ipcInput);
};

;// CONCATENATED MODULE: ./node_modules/execa/lib/arguments/encoding-option.js
// Validate `encoding` option
const validateEncoding = ({encoding}) => {
	if (ENCODINGS.has(encoding)) {
		return;
	}

	const correctEncoding = getCorrectEncoding(encoding);
	if (correctEncoding !== undefined) {
		throw new TypeError(`Invalid option \`encoding: ${serializeEncoding(encoding)}\`.
Please rename it to ${serializeEncoding(correctEncoding)}.`);
	}

	const correctEncodings = [...ENCODINGS].map(correctEncoding => serializeEncoding(correctEncoding)).join(', ');
	throw new TypeError(`Invalid option \`encoding: ${serializeEncoding(encoding)}\`.
Please rename it to one of: ${correctEncodings}.`);
};

const TEXT_ENCODINGS = new Set(['utf8', 'utf16le']);
const BINARY_ENCODINGS = new Set(['buffer', 'hex', 'base64', 'base64url', 'latin1', 'ascii']);
const ENCODINGS = new Set([...TEXT_ENCODINGS, ...BINARY_ENCODINGS]);

const getCorrectEncoding = encoding => {
	if (encoding === null) {
		return 'buffer';
	}

	if (typeof encoding !== 'string') {
		return;
	}

	const lowerEncoding = encoding.toLowerCase();
	if (lowerEncoding in ENCODING_ALIASES) {
		return ENCODING_ALIASES[lowerEncoding];
	}

	if (ENCODINGS.has(lowerEncoding)) {
		return lowerEncoding;
	}
};

const ENCODING_ALIASES = {
	// eslint-disable-next-line unicorn/text-encoding-identifier-case
	'utf-8': 'utf8',
	'utf-16le': 'utf16le',
	'ucs-2': 'utf16le',
	ucs2: 'utf16le',
	binary: 'latin1',
};

const serializeEncoding = encoding => typeof encoding === 'string' ? `"${encoding}"` : String(encoding);

;// CONCATENATED MODULE: external "node:fs"
const external_node_fs_namespaceObject = __WEBPACK_EXTERNAL_createRequire(import.meta.url)("node:fs");
;// CONCATENATED MODULE: ./node_modules/execa/lib/arguments/cwd.js





// Normalize `cwd` option
const normalizeCwd = (cwd = getDefaultCwd()) => {
	const cwdString = safeNormalizeFileUrl(cwd, 'The "cwd" option');
	return external_node_path_namespaceObject.resolve(cwdString);
};

const getDefaultCwd = () => {
	try {
		return external_node_process_namespaceObject.cwd();
	} catch (error) {
		error.message = `The current directory does not exist.\n${error.message}`;
		throw error;
	}
};

// When `cwd` option has an invalid value, provide with a better error message
const fixCwdError = (originalMessage, cwd) => {
	if (cwd === getDefaultCwd()) {
		return originalMessage;
	}

	let cwdStat;
	try {
		cwdStat = (0,external_node_fs_namespaceObject.statSync)(cwd);
	} catch (error) {
		return `The "cwd" option is invalid: ${cwd}.\n${error.message}\n${originalMessage}`;
	}

	if (!cwdStat.isDirectory()) {
		return `The "cwd" option is not a directory: ${cwd}.\n${originalMessage}`;
	}

	return originalMessage;
};

;// CONCATENATED MODULE: ./node_modules/execa/lib/arguments/options.js
















// Normalize the options object, and sometimes also the file paths and arguments.
// Applies default values, validate allowed options, normalize them.
const normalizeOptions = (filePath, rawArguments, rawOptions) => {
	rawOptions.cwd = normalizeCwd(rawOptions.cwd);
	const [processedFile, processedArguments, processedOptions] = handleNodeOption(filePath, rawArguments, rawOptions);

	const {command: file, args: commandArguments, options: initialOptions} = cross_spawn._parse(processedFile, processedArguments, processedOptions);

	const fdOptions = normalizeFdSpecificOptions(initialOptions);
	const options = addDefaultOptions(fdOptions);
	validateTimeout(options);
	validateEncoding(options);
	validateIpcInputOption(options);
	validateCancelSignal(options);
	validateGracefulCancel(options);
	options.shell = normalizeFileUrl(options.shell);
	options.env = getEnv(options);
	options.killSignal = normalizeKillSignal(options.killSignal);
	options.forceKillAfterDelay = normalizeForceKillAfterDelay(options.forceKillAfterDelay);
	options.lines = options.lines.map((lines, fdNumber) => lines && !BINARY_ENCODINGS.has(options.encoding) && options.buffer[fdNumber]);

	if (external_node_process_namespaceObject.platform === 'win32' && external_node_path_namespaceObject.basename(file, '.exe') === 'cmd') {
		// #116
		commandArguments.unshift('/q');
	}

	return {file, commandArguments, options};
};

const addDefaultOptions = ({
	extendEnv = true,
	preferLocal = false,
	cwd,
	localDir: localDirectory = cwd,
	encoding = 'utf8',
	reject = true,
	cleanup = true,
	all = false,
	windowsHide = true,
	killSignal = 'SIGTERM',
	forceKillAfterDelay = true,
	gracefulCancel = false,
	ipcInput,
	ipc = ipcInput !== undefined || gracefulCancel,
	serialization = 'advanced',
	...options
}) => ({
	...options,
	extendEnv,
	preferLocal,
	cwd,
	localDirectory,
	encoding,
	reject,
	cleanup,
	all,
	windowsHide,
	killSignal,
	forceKillAfterDelay,
	gracefulCancel,
	ipcInput,
	ipc,
	serialization,
});

const getEnv = ({env: envOption, extendEnv, preferLocal, node, localDirectory, nodePath}) => {
	const env = extendEnv ? {...external_node_process_namespaceObject.env, ...envOption} : envOption;

	if (preferLocal || node) {
		return npmRunPathEnv({
			env,
			cwd: localDirectory,
			execPath: nodePath,
			preferLocal,
			addExecPath: node,
		});
	}

	return env;
};

;// CONCATENATED MODULE: ./node_modules/execa/lib/arguments/shell.js
// When the `shell` option is set, any command argument is concatenated as a single string by Node.js:
// https://github.com/nodejs/node/blob/e38ce27f3ca0a65f68a31cedd984cddb927d4002/lib/child_process.js#L614-L624
// However, since Node 24, it also prints a deprecation warning.
// To avoid this warning, we perform that same operation before calling `node:child_process`.
// Shells only understand strings, which is why Node.js performs that concatenation.
// However, we rely on users splitting command arguments as an array.
// For example, this allows us to easily detect which arguments are passed.
// So we do want users to pass array of arguments even with `shell: true`, but we also want to avoid any warning.
const concatenateShell = (file, commandArguments, options) => options.shell && commandArguments.length > 0
	? [[file, ...commandArguments].join(' '), [], options]
	: [file, commandArguments, options];

;// CONCATENATED MODULE: ./node_modules/strip-final-newline/index.js
function strip_final_newline_stripFinalNewline(input) {
	if (typeof input === 'string') {
		return stripFinalNewlineString(input);
	}

	if (!(ArrayBuffer.isView(input) && input.BYTES_PER_ELEMENT === 1)) {
		throw new Error('Input must be a string or a Uint8Array');
	}

	return stripFinalNewlineBinary(input);
}

const stripFinalNewlineString = input =>
	input.at(-1) === LF
		? input.slice(0, input.at(-2) === CR ? -2 : -1)
		: input;

const stripFinalNewlineBinary = input =>
	input.at(-1) === LF_BINARY
		? input.subarray(0, input.at(-2) === CR_BINARY ? -2 : -1)
		: input;

const LF = '\n';
const LF_BINARY = LF.codePointAt(0);
const CR = '\r';
const CR_BINARY = CR.codePointAt(0);

;// CONCATENATED MODULE: ./node_modules/is-stream/index.js
function isStream(stream, {checkOpen = true} = {}) {
	return stream !== null
		&& typeof stream === 'object'
		&& (stream.writable || stream.readable || !checkOpen || (stream.writable === undefined && stream.readable === undefined))
		&& typeof stream.pipe === 'function';
}

function isWritableStream(stream, {checkOpen = true} = {}) {
	return isStream(stream, {checkOpen})
		&& (stream.writable || !checkOpen)
		&& typeof stream.write === 'function'
		&& typeof stream.end === 'function'
		&& typeof stream.writable === 'boolean'
		&& typeof stream.writableObjectMode === 'boolean'
		&& typeof stream.destroy === 'function'
		&& typeof stream.destroyed === 'boolean';
}

function isReadableStream(stream, {checkOpen = true} = {}) {
	return isStream(stream, {checkOpen})
		&& (stream.readable || !checkOpen)
		&& typeof stream.read === 'function'
		&& typeof stream.readable === 'boolean'
		&& typeof stream.readableObjectMode === 'boolean'
		&& typeof stream.destroy === 'function'
		&& typeof stream.destroyed === 'boolean';
}

function isDuplexStream(stream, options) {
	return isWritableStream(stream, options)
		&& isReadableStream(stream, options);
}

function isTransformStream(stream, options) {
	return isDuplexStream(stream, options)
		&& typeof stream._transform === 'function';
}

;// CONCATENATED MODULE: ./node_modules/@sec-ant/readable-stream/dist/ponyfill/asyncIterator.js
const a = Object.getPrototypeOf(
  Object.getPrototypeOf(
    /* istanbul ignore next */
    async function* () {
    }
  ).prototype
);
class c {
  #t;
  #n;
  #r = !1;
  #e = void 0;
  constructor(e, t) {
    this.#t = e, this.#n = t;
  }
  next() {
    const e = () => this.#s();
    return this.#e = this.#e ? this.#e.then(e, e) : e(), this.#e;
  }
  return(e) {
    const t = () => this.#i(e);
    return this.#e ? this.#e.then(t, t) : t();
  }
  async #s() {
    if (this.#r)
      return {
        done: !0,
        value: void 0
      };
    let e;
    try {
      e = await this.#t.read();
    } catch (t) {
      throw this.#e = void 0, this.#r = !0, this.#t.releaseLock(), t;
    }
    return e.done && (this.#e = void 0, this.#r = !0, this.#t.releaseLock()), e;
  }
  async #i(e) {
    if (this.#r)
      return {
        done: !0,
        value: e
      };
    if (this.#r = !0, !this.#n) {
      const t = this.#t.cancel(e);
      return this.#t.releaseLock(), await t, {
        done: !0,
        value: e
      };
    }
    return this.#t.releaseLock(), {
      done: !0,
      value: e
    };
  }
}
const n = Symbol();
function i() {
  return this[n].next();
}
Object.defineProperty(i, "name", { value: "next" });
function o(r) {
  return this[n].return(r);
}
Object.defineProperty(o, "name", { value: "return" });
const u = Object.create(a, {
  next: {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: i
  },
  return: {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: o
  }
});
function h({ preventCancel: r = !1 } = {}) {
  const e = this.getReader(), t = new c(
    e,
    r
  ), s = Object.create(u);
  return s[n] = t, s;
}


;// CONCATENATED MODULE: ./node_modules/@sec-ant/readable-stream/dist/ponyfill/index.js




;// CONCATENATED MODULE: ./node_modules/get-stream/source/stream.js



const getAsyncIterable = stream => {
	if (isReadableStream(stream, {checkOpen: false}) && nodeImports.on !== undefined) {
		return getStreamIterable(stream);
	}

	if (typeof stream?.[Symbol.asyncIterator] === 'function') {
		return stream;
	}

	// `ReadableStream[Symbol.asyncIterator]` support is missing in multiple browsers, so we ponyfill it
	if (stream_toString.call(stream) === '[object ReadableStream]') {
		return h.call(stream);
	}

	throw new TypeError('The first argument must be a Readable, a ReadableStream, or an async iterable.');
};

const {toString: stream_toString} = Object.prototype;

// The default iterable for Node.js streams does not allow for multiple readers at once, so we re-implement it
const getStreamIterable = async function * (stream) {
	const controller = new AbortController();
	const state = {};
	handleStreamEnd(stream, controller, state);

	try {
		for await (const [chunk] of nodeImports.on(stream, 'data', {signal: controller.signal})) {
			yield chunk;
		}
	} catch (error) {
		// Stream failure, for example due to `stream.destroy(error)`
		if (state.error !== undefined) {
			throw state.error;
		// `error` event directly emitted on stream
		} else if (!controller.signal.aborted) {
			throw error;
		// Otherwise, stream completed successfully
		}
		// The `finally` block also runs when the caller throws, for example due to the `maxBuffer` option
	} finally {
		stream.destroy();
	}
};

const handleStreamEnd = async (stream, controller, state) => {
	try {
		await nodeImports.finished(stream, {
			cleanup: true,
			readable: true,
			writable: false,
			error: false,
		});
	} catch (error) {
		state.error = error;
	} finally {
		controller.abort();
	}
};

// Loaded by the Node entrypoint, but not by the browser one.
// This prevents using dynamic imports.
const nodeImports = {};

;// CONCATENATED MODULE: ./node_modules/get-stream/source/contents.js


const getStreamContents = async (stream, {init, convertChunk, getSize, truncateChunk, addChunk, getFinalChunk, finalize}, {maxBuffer = Number.POSITIVE_INFINITY} = {}) => {
	const asyncIterable = getAsyncIterable(stream);

	const state = init();
	state.length = 0;

	try {
		for await (const chunk of asyncIterable) {
			const chunkType = getChunkType(chunk);
			const convertedChunk = convertChunk[chunkType](chunk, state);
			appendChunk({
				convertedChunk,
				state,
				getSize,
				truncateChunk,
				addChunk,
				maxBuffer,
			});
		}

		appendFinalChunk({
			state,
			convertChunk,
			getSize,
			truncateChunk,
			addChunk,
			getFinalChunk,
			maxBuffer,
		});
		return finalize(state);
	} catch (error) {
		const normalizedError = typeof error === 'object' && error !== null ? error : new Error(error);
		normalizedError.bufferedData = finalize(state);
		throw normalizedError;
	}
};

const appendFinalChunk = ({state, getSize, truncateChunk, addChunk, getFinalChunk, maxBuffer}) => {
	const convertedChunk = getFinalChunk(state);
	if (convertedChunk !== undefined) {
		appendChunk({
			convertedChunk,
			state,
			getSize,
			truncateChunk,
			addChunk,
			maxBuffer,
		});
	}
};

const appendChunk = ({convertedChunk, state, getSize, truncateChunk, addChunk, maxBuffer}) => {
	const chunkSize = getSize(convertedChunk);
	const newLength = state.length + chunkSize;

	if (newLength <= maxBuffer) {
		addNewChunk(convertedChunk, state, addChunk, newLength);
		return;
	}

	const truncatedChunk = truncateChunk(convertedChunk, maxBuffer - state.length);

	if (truncatedChunk !== undefined) {
		addNewChunk(truncatedChunk, state, addChunk, maxBuffer);
	}

	throw new MaxBufferError();
};

const addNewChunk = (convertedChunk, state, addChunk, newLength) => {
	state.contents = addChunk(convertedChunk, state, newLength);
	state.length = newLength;
};

const getChunkType = chunk => {
	const typeOfChunk = typeof chunk;

	if (typeOfChunk === 'string') {
		return 'string';
	}

	if (typeOfChunk !== 'object' || chunk === null) {
		return 'others';
	}

	if (globalThis.Buffer?.isBuffer(chunk)) {
		return 'buffer';
	}

	const prototypeName = contents_objectToString.call(chunk);

	if (prototypeName === '[object ArrayBuffer]') {
		return 'arrayBuffer';
	}

	if (prototypeName === '[object DataView]') {
		return 'dataView';
	}

	if (
		Number.isInteger(chunk.byteLength)
		&& Number.isInteger(chunk.byteOffset)
		&& contents_objectToString.call(chunk.buffer) === '[object ArrayBuffer]'
	) {
		return 'typedArray';
	}

	return 'others';
};

const {toString: contents_objectToString} = Object.prototype;

class MaxBufferError extends Error {
	name = 'MaxBufferError';

	constructor() {
		super('maxBuffer exceeded');
	}
}

;// CONCATENATED MODULE: ./node_modules/execa/lib/io/max-buffer.js




// When the `maxBuffer` option is hit, a MaxBufferError is thrown.
// The stream is aborted, then specific information is kept for the error message.
const handleMaxBuffer = ({error, stream, readableObjectMode, lines, encoding, fdNumber}) => {
	if (!(error instanceof MaxBufferError)) {
		throw error;
	}

	if (fdNumber === 'all') {
		return error;
	}

	const unit = getMaxBufferUnit(readableObjectMode, lines, encoding);
	error.maxBufferInfo = {fdNumber, unit};
	stream.destroy();
	throw error;
};

const getMaxBufferUnit = (readableObjectMode, lines, encoding) => {
	if (readableObjectMode) {
		return 'objects';
	}

	if (lines) {
		return 'lines';
	}

	if (encoding === 'buffer') {
		return 'bytes';
	}

	return 'characters';
};

// Check the `maxBuffer` option with `result.ipcOutput`
const checkIpcMaxBuffer = (subprocess, ipcOutput, maxBuffer) => {
	if (ipcOutput.length !== maxBuffer) {
		return;
	}

	const error = new MaxBufferError();
	error.maxBufferInfo = {fdNumber: 'ipc'};
	throw error;
};

// Error message when `maxBuffer` is hit
const getMaxBufferMessage = (error, maxBuffer) => {
	const {streamName, threshold, unit} = getMaxBufferInfo(error, maxBuffer);
	return `Command's ${streamName} was larger than ${threshold} ${unit}`;
};

const getMaxBufferInfo = (error, maxBuffer) => {
	if (error?.maxBufferInfo === undefined) {
		return {streamName: 'output', threshold: maxBuffer[1], unit: 'bytes'};
	}

	const {maxBufferInfo: {fdNumber, unit}} = error;
	delete error.maxBufferInfo;

	const threshold = getFdSpecificValue(maxBuffer, fdNumber);
	if (fdNumber === 'ipc') {
		return {streamName: 'IPC output', threshold, unit: 'messages'};
	}

	return {streamName: getStreamName(fdNumber), threshold, unit};
};

// The only way to apply `maxBuffer` with `spawnSync()` is to use the native `maxBuffer` option Node.js provides.
// However, this has multiple limitations, and cannot behave the exact same way as the async behavior.
// When the `maxBuffer` is hit, a `ENOBUFS` error is thrown.
const isMaxBufferSync = (resultError, output, maxBuffer) => resultError?.code === 'ENOBUFS'
	&& output !== null
	&& output.some(result => result !== null && result.length > getMaxBufferSync(maxBuffer));

// When `maxBuffer` is hit, ensure the result is truncated
const truncateMaxBufferSync = (result, isMaxBuffer, maxBuffer) => {
	if (!isMaxBuffer) {
		return result;
	}

	const maxBufferValue = getMaxBufferSync(maxBuffer);
	return result.length > maxBufferValue ? result.slice(0, maxBufferValue) : result;
};

// `spawnSync()` does not allow differentiating `maxBuffer` per file descriptor, so we always use `stdout`
const getMaxBufferSync = ([, stdoutMaxBuffer]) => stdoutMaxBuffer;

;// CONCATENATED MODULE: ./node_modules/execa/lib/return/message.js









// Computes `error.message`, `error.shortMessage` and `error.originalMessage`
const createMessages = ({
	stdio,
	all,
	ipcOutput,
	originalError,
	signal,
	signalDescription,
	exitCode,
	escapedCommand,
	timedOut,
	isCanceled,
	isGracefullyCanceled,
	isMaxBuffer,
	isForcefullyTerminated,
	forceKillAfterDelay,
	killSignal,
	maxBuffer,
	timeout,
	cwd,
}) => {
	const errorCode = originalError?.code;
	const prefix = getErrorPrefix({
		originalError,
		timedOut,
		timeout,
		isMaxBuffer,
		maxBuffer,
		errorCode,
		signal,
		signalDescription,
		exitCode,
		isCanceled,
		isGracefullyCanceled,
		isForcefullyTerminated,
		forceKillAfterDelay,
		killSignal,
	});
	const originalMessage = getOriginalMessage(originalError, cwd);
	const suffix = originalMessage === undefined ? '' : `\n${originalMessage}`;
	const shortMessage = `${prefix}: ${escapedCommand}${suffix}`;
	const messageStdio = all === undefined ? [stdio[2], stdio[1]] : [all];
	const message = [
		shortMessage,
		...messageStdio,
		...stdio.slice(3),
		ipcOutput.map(ipcMessage => serializeIpcMessage(ipcMessage)).join('\n'),
	]
		.map(messagePart => escapeLines(strip_final_newline_stripFinalNewline(serializeMessagePart(messagePart))))
		.filter(Boolean)
		.join('\n\n');
	return {originalMessage, shortMessage, message};
};

const getErrorPrefix = ({
	originalError,
	timedOut,
	timeout,
	isMaxBuffer,
	maxBuffer,
	errorCode,
	signal,
	signalDescription,
	exitCode,
	isCanceled,
	isGracefullyCanceled,
	isForcefullyTerminated,
	forceKillAfterDelay,
	killSignal,
}) => {
	const forcefulSuffix = getForcefulSuffix(isForcefullyTerminated, forceKillAfterDelay);

	if (timedOut) {
		return `Command timed out after ${timeout} milliseconds${forcefulSuffix}`;
	}

	if (isGracefullyCanceled) {
		if (signal === undefined) {
			return `Command was gracefully canceled with exit code ${exitCode}`;
		}

		return isForcefullyTerminated
			? `Command was gracefully canceled${forcefulSuffix}`
			: `Command was gracefully canceled with ${signal} (${signalDescription})`;
	}

	if (isCanceled) {
		return `Command was canceled${forcefulSuffix}`;
	}

	if (isMaxBuffer) {
		return `${getMaxBufferMessage(originalError, maxBuffer)}${forcefulSuffix}`;
	}

	if (errorCode !== undefined) {
		return `Command failed with ${errorCode}${forcefulSuffix}`;
	}

	if (isForcefullyTerminated) {
		return `Command was killed with ${killSignal} (${getSignalDescription(killSignal)})${forcefulSuffix}`;
	}

	if (signal !== undefined) {
		return `Command was killed with ${signal} (${signalDescription})`;
	}

	if (exitCode !== undefined) {
		return `Command failed with exit code ${exitCode}`;
	}

	return 'Command failed';
};

const getForcefulSuffix = (isForcefullyTerminated, forceKillAfterDelay) => isForcefullyTerminated
	? ` and was forcefully terminated after ${forceKillAfterDelay} milliseconds`
	: '';

const getOriginalMessage = (originalError, cwd) => {
	if (originalError instanceof DiscardedError) {
		return;
	}

	const originalMessage = isExecaError(originalError)
		? originalError.originalMessage
		: String(originalError?.message ?? originalError);
	const escapedOriginalMessage = escapeLines(fixCwdError(originalMessage, cwd));
	return escapedOriginalMessage === '' ? undefined : escapedOriginalMessage;
};

const serializeIpcMessage = ipcMessage => typeof ipcMessage === 'string'
	? ipcMessage
	: (0,external_node_util_namespaceObject.inspect)(ipcMessage);

const serializeMessagePart = messagePart => Array.isArray(messagePart)
	? messagePart.map(messageItem => strip_final_newline_stripFinalNewline(serializeMessageItem(messageItem))).filter(Boolean).join('\n')
	: serializeMessageItem(messagePart);

const serializeMessageItem = messageItem => {
	if (typeof messageItem === 'string') {
		return messageItem;
	}

	if (isUint8Array(messageItem)) {
		return uint8ArrayToString(messageItem);
	}

	return '';
};

;// CONCATENATED MODULE: ./node_modules/execa/lib/return/result.js





// Object returned on subprocess success
const makeSuccessResult = ({
	command,
	escapedCommand,
	stdio,
	all,
	ipcOutput,
	options: {cwd},
	startTime,
}) => omitUndefinedProperties({
	command,
	escapedCommand,
	cwd,
	durationMs: getDurationMs(startTime),
	failed: false,
	timedOut: false,
	isCanceled: false,
	isGracefullyCanceled: false,
	isTerminated: false,
	isMaxBuffer: false,
	isForcefullyTerminated: false,
	exitCode: 0,
	stdout: stdio[1],
	stderr: stdio[2],
	all,
	stdio,
	ipcOutput,
	pipedFrom: [],
});

// Object returned on subprocess failure before spawning
const makeEarlyError = ({
	error,
	command,
	escapedCommand,
	fileDescriptors,
	options,
	startTime,
	isSync,
}) => makeError({
	error,
	command,
	escapedCommand,
	startTime,
	timedOut: false,
	isCanceled: false,
	isGracefullyCanceled: false,
	isMaxBuffer: false,
	isForcefullyTerminated: false,
	stdio: Array.from({length: fileDescriptors.length}),
	ipcOutput: [],
	options,
	isSync,
});

// Object returned on subprocess failure
const makeError = ({
	error: originalError,
	command,
	escapedCommand,
	startTime,
	timedOut,
	isCanceled,
	isGracefullyCanceled,
	isMaxBuffer,
	isForcefullyTerminated,
	exitCode: rawExitCode,
	signal: rawSignal,
	stdio,
	all,
	ipcOutput,
	options: {
		timeoutDuration,
		timeout = timeoutDuration,
		forceKillAfterDelay,
		killSignal,
		cwd,
		maxBuffer,
	},
	isSync,
}) => {
	const {exitCode, signal, signalDescription} = normalizeExitPayload(rawExitCode, rawSignal);
	const {originalMessage, shortMessage, message} = createMessages({
		stdio,
		all,
		ipcOutput,
		originalError,
		signal,
		signalDescription,
		exitCode,
		escapedCommand,
		timedOut,
		isCanceled,
		isGracefullyCanceled,
		isMaxBuffer,
		isForcefullyTerminated,
		forceKillAfterDelay,
		killSignal,
		maxBuffer,
		timeout,
		cwd,
	});
	const error = getFinalError(originalError, message, isSync);
	Object.assign(error, getErrorProperties({
		error,
		command,
		escapedCommand,
		startTime,
		timedOut,
		isCanceled,
		isGracefullyCanceled,
		isMaxBuffer,
		isForcefullyTerminated,
		exitCode,
		signal,
		signalDescription,
		stdio,
		all,
		ipcOutput,
		cwd,
		originalMessage,
		shortMessage,
	}));
	return error;
};

const getErrorProperties = ({
	error,
	command,
	escapedCommand,
	startTime,
	timedOut,
	isCanceled,
	isGracefullyCanceled,
	isMaxBuffer,
	isForcefullyTerminated,
	exitCode,
	signal,
	signalDescription,
	stdio,
	all,
	ipcOutput,
	cwd,
	originalMessage,
	shortMessage,
}) => omitUndefinedProperties({
	shortMessage,
	originalMessage,
	command,
	escapedCommand,
	cwd,
	durationMs: getDurationMs(startTime),
	failed: true,
	timedOut,
	isCanceled,
	isGracefullyCanceled,
	isTerminated: signal !== undefined,
	isMaxBuffer,
	isForcefullyTerminated,
	exitCode,
	signal,
	signalDescription,
	code: error.cause?.code,
	stdout: stdio[1],
	stderr: stdio[2],
	all,
	stdio,
	ipcOutput,
	pipedFrom: [],
});

const omitUndefinedProperties = result => Object.fromEntries(Object.entries(result).filter(([, value]) => value !== undefined));

// `signal` and `exitCode` emitted on `subprocess.on('exit')` event can be `null`.
// We normalize them to `undefined`
const normalizeExitPayload = (rawExitCode, rawSignal) => {
	const exitCode = rawExitCode === null ? undefined : rawExitCode;
	const signal = rawSignal === null ? undefined : rawSignal;
	const signalDescription = signal === undefined ? undefined : getSignalDescription(rawSignal);
	return {exitCode, signal, signalDescription};
};

;// CONCATENATED MODULE: ./node_modules/parse-ms/index.js
const toZeroIfInfinity = value => Number.isFinite(value) ? value : 0;

function parseNumber(milliseconds) {
	return {
		days: Math.trunc(milliseconds / 86_400_000),
		hours: Math.trunc(milliseconds / 3_600_000 % 24),
		minutes: Math.trunc(milliseconds / 60_000 % 60),
		seconds: Math.trunc(milliseconds / 1000 % 60),
		milliseconds: Math.trunc(milliseconds % 1000),
		microseconds: Math.trunc(toZeroIfInfinity(milliseconds * 1000) % 1000),
		nanoseconds: Math.trunc(toZeroIfInfinity(milliseconds * 1e6) % 1000),
	};
}

function parseBigint(milliseconds) {
	return {
		days: milliseconds / 86_400_000n,
		hours: milliseconds / 3_600_000n % 24n,
		minutes: milliseconds / 60_000n % 60n,
		seconds: milliseconds / 1000n % 60n,
		milliseconds: milliseconds % 1000n,
		microseconds: 0n,
		nanoseconds: 0n,
	};
}

function parseMilliseconds(milliseconds) {
	switch (typeof milliseconds) {
		case 'number': {
			if (Number.isFinite(milliseconds)) {
				return parseNumber(milliseconds);
			}

			break;
		}

		case 'bigint': {
			return parseBigint(milliseconds);
		}

		// No default
	}

	throw new TypeError('Expected a finite number or bigint');
}

;// CONCATENATED MODULE: ./node_modules/pretty-ms/index.js


const isZero = value => value === 0 || value === 0n;
const pluralize = (word, count) => (count === 1 || count === 1n) ? word : `${word}s`;

const SECOND_ROUNDING_EPSILON = 0.000_000_1;
const ONE_DAY_IN_MILLISECONDS = 24n * 60n * 60n * 1000n;

function prettyMilliseconds(milliseconds, options) {
	const isBigInt = typeof milliseconds === 'bigint';
	if (!isBigInt && !Number.isFinite(milliseconds)) {
		throw new TypeError('Expected a finite number or bigint');
	}

	options = {...options};

	const sign = milliseconds < 0 ? '-' : '';
	milliseconds = milliseconds < 0 ? -milliseconds : milliseconds; // Cannot use `Math.abs()` because of BigInt support.

	if (options.colonNotation) {
		options.compact = false;
		options.formatSubMilliseconds = false;
		options.separateMilliseconds = false;
		options.verbose = false;
	}

	if (options.compact) {
		options.unitCount = 1;
		options.secondsDecimalDigits = 0;
		options.millisecondsDecimalDigits = 0;
	}

	let result = [];

	const floorDecimals = (value, decimalDigits) => {
		const flooredInterimValue = Math.floor((value * (10 ** decimalDigits)) + SECOND_ROUNDING_EPSILON);
		const flooredValue = Math.round(flooredInterimValue) / (10 ** decimalDigits);
		return flooredValue.toFixed(decimalDigits);
	};

	const add = (value, long, short, valueString) => {
		if (
			(result.length === 0 || !options.colonNotation)
			&& isZero(value)
			&& !(options.colonNotation && short === 'm')) {
			return;
		}

		valueString ??= String(value);
		if (options.colonNotation) {
			const wholeDigits = valueString.includes('.') ? valueString.split('.')[0].length : valueString.length;
			const minLength = result.length > 0 ? 2 : 1;
			valueString = '0'.repeat(Math.max(0, minLength - wholeDigits)) + valueString;
		} else {
			valueString += options.verbose ? ' ' + pluralize(long, value) : short;
		}

		result.push(valueString);
	};

	const parsed = parseMilliseconds(milliseconds);
	const days = BigInt(parsed.days);

	if (options.hideYearAndDays) {
		add((BigInt(days) * 24n) + BigInt(parsed.hours), 'hour', 'h');
	} else {
		if (options.hideYear) {
			add(days, 'day', 'd');
		} else {
			add(days / 365n, 'year', 'y');
			add(days % 365n, 'day', 'd');
		}

		add(Number(parsed.hours), 'hour', 'h');
	}

	add(Number(parsed.minutes), 'minute', 'm');

	if (!options.hideSeconds) {
		if (
			options.separateMilliseconds
			|| options.formatSubMilliseconds
			|| (!options.colonNotation && milliseconds < 1000)
		) {
			const seconds = Number(parsed.seconds);
			const milliseconds = Number(parsed.milliseconds);
			const microseconds = Number(parsed.microseconds);
			const nanoseconds = Number(parsed.nanoseconds);

			add(seconds, 'second', 's');

			if (options.formatSubMilliseconds) {
				add(milliseconds, 'millisecond', 'ms');
				add(microseconds, 'microsecond', 'µs');
				add(nanoseconds, 'nanosecond', 'ns');
			} else {
				const millisecondsAndBelow
					= milliseconds
					+ (microseconds / 1000)
					+ (nanoseconds / 1e6);

				const millisecondsDecimalDigits
					= typeof options.millisecondsDecimalDigits === 'number'
						? options.millisecondsDecimalDigits
						: 0;

				const roundedMilliseconds = millisecondsAndBelow >= 1
					? Math.round(millisecondsAndBelow)
					: Math.ceil(millisecondsAndBelow);

				const millisecondsString = millisecondsDecimalDigits
					? millisecondsAndBelow.toFixed(millisecondsDecimalDigits)
					: roundedMilliseconds;

				add(
					Number.parseFloat(millisecondsString),
					'millisecond',
					'ms',
					millisecondsString,
				);
			}
		} else {
			const seconds = (
				(isBigInt ? Number(milliseconds % ONE_DAY_IN_MILLISECONDS) : milliseconds)
				/ 1000
			) % 60;
			const secondsDecimalDigits
				= typeof options.secondsDecimalDigits === 'number'
					? options.secondsDecimalDigits
					: 1;
			const secondsFixed = floorDecimals(seconds, secondsDecimalDigits);
			const secondsString = options.keepDecimalsOnWholeSeconds
				? secondsFixed
				: secondsFixed.replace(/\.0+$/, '');
			add(Number.parseFloat(secondsString), 'second', 's', secondsString);
		}
	}

	if (result.length === 0) {
		return sign + '0' + (options.verbose ? ' milliseconds' : 'ms');
	}

	const separator = options.colonNotation ? ':' : ' ';
	if (typeof options.unitCount === 'number') {
		result = result.slice(0, Math.max(options.unitCount, 1));
	}

	return sign + result.join(separator);
}

;// CONCATENATED MODULE: ./node_modules/execa/lib/verbose/error.js


// When `verbose` is `short|full|custom`, print each command's error when it fails
const logError = (result, verboseInfo) => {
	if (result.failed) {
		verboseLog({
			type: 'error',
			verboseMessage: result.shortMessage,
			verboseInfo,
			result,
		});
	}
};

;// CONCATENATED MODULE: ./node_modules/execa/lib/verbose/complete.js





// When `verbose` is `short|full|custom`, print each command's completion, duration and error
const logResult = (result, verboseInfo) => {
	if (!isVerbose(verboseInfo)) {
		return;
	}

	logError(result, verboseInfo);
	logDuration(result, verboseInfo);
};

const logDuration = (result, verboseInfo) => {
	const verboseMessage = `(done in ${prettyMilliseconds(result.durationMs)})`;
	verboseLog({
		type: 'duration',
		verboseMessage,
		verboseInfo,
		result,
	});
};

;// CONCATENATED MODULE: ./node_modules/execa/lib/return/reject.js


// Applies the `reject` option.
// Also print the final log line with `verbose`.
const handleResult = (result, verboseInfo, {reject}) => {
	logResult(result, verboseInfo);

	if (result.failed && reject) {
		throw result;
	}

	return result;
};

;// CONCATENATED MODULE: ./node_modules/execa/lib/stdio/type.js




// The `stdin`/`stdout`/`stderr` option can be of many types. This detects it.
const getStdioItemType = (value, optionName) => {
	if (isAsyncGenerator(value)) {
		return 'asyncGenerator';
	}

	if (isSyncGenerator(value)) {
		return 'generator';
	}

	if (isUrl(value)) {
		return 'fileUrl';
	}

	if (isFilePathObject(value)) {
		return 'filePath';
	}

	if (isWebStream(value)) {
		return 'webStream';
	}

	if (isStream(value, {checkOpen: false})) {
		return 'native';
	}

	if (isUint8Array(value)) {
		return 'uint8Array';
	}

	if (isAsyncIterableObject(value)) {
		return 'asyncIterable';
	}

	if (isIterableObject(value)) {
		return 'iterable';
	}

	if (type_isTransformStream(value)) {
		return getTransformStreamType({transform: value}, optionName);
	}

	if (isTransformOptions(value)) {
		return getTransformObjectType(value, optionName);
	}

	return 'native';
};

const getTransformObjectType = (value, optionName) => {
	if (isDuplexStream(value.transform, {checkOpen: false})) {
		return getDuplexType(value, optionName);
	}

	if (type_isTransformStream(value.transform)) {
		return getTransformStreamType(value, optionName);
	}

	return getGeneratorObjectType(value, optionName);
};

const getDuplexType = (value, optionName) => {
	validateNonGeneratorType(value, optionName, 'Duplex stream');
	return 'duplex';
};

const getTransformStreamType = (value, optionName) => {
	validateNonGeneratorType(value, optionName, 'web TransformStream');
	return 'webTransform';
};

const validateNonGeneratorType = ({final, binary, objectMode}, optionName, typeName) => {
	checkUndefinedOption(final, `${optionName}.final`, typeName);
	checkUndefinedOption(binary, `${optionName}.binary`, typeName);
	checkBooleanOption(objectMode, `${optionName}.objectMode`);
};

const checkUndefinedOption = (value, optionName, typeName) => {
	if (value !== undefined) {
		throw new TypeError(`The \`${optionName}\` option can only be defined when using a generator, not a ${typeName}.`);
	}
};

const getGeneratorObjectType = ({transform, final, binary, objectMode}, optionName) => {
	if (transform !== undefined && !isGenerator(transform)) {
		throw new TypeError(`The \`${optionName}.transform\` option must be a generator, a Duplex stream or a web TransformStream.`);
	}

	if (isDuplexStream(final, {checkOpen: false})) {
		throw new TypeError(`The \`${optionName}.final\` option must not be a Duplex stream.`);
	}

	if (type_isTransformStream(final)) {
		throw new TypeError(`The \`${optionName}.final\` option must not be a web TransformStream.`);
	}

	if (final !== undefined && !isGenerator(final)) {
		throw new TypeError(`The \`${optionName}.final\` option must be a generator.`);
	}

	checkBooleanOption(binary, `${optionName}.binary`);
	checkBooleanOption(objectMode, `${optionName}.objectMode`);

	return isAsyncGenerator(transform) || isAsyncGenerator(final) ? 'asyncGenerator' : 'generator';
};

const checkBooleanOption = (value, optionName) => {
	if (value !== undefined && typeof value !== 'boolean') {
		throw new TypeError(`The \`${optionName}\` option must use a boolean.`);
	}
};

const isGenerator = value => isAsyncGenerator(value) || isSyncGenerator(value);
const isAsyncGenerator = value => Object.prototype.toString.call(value) === '[object AsyncGeneratorFunction]';
const isSyncGenerator = value => Object.prototype.toString.call(value) === '[object GeneratorFunction]';
const isTransformOptions = value => isPlainObject(value)
	&& (value.transform !== undefined || value.final !== undefined);

const isUrl = value => Object.prototype.toString.call(value) === '[object URL]';
const isRegularUrl = value => isUrl(value) && value.protocol !== 'file:';

const isFilePathObject = value => isPlainObject(value)
	&& Object.keys(value).length > 0
	&& Object.keys(value).every(key => FILE_PATH_KEYS.has(key))
	&& isFilePathString(value.file);
const FILE_PATH_KEYS = new Set(['file', 'append']);
const isFilePathString = file => typeof file === 'string';

const isUnknownStdioString = (type, value) => type === 'native'
	&& typeof value === 'string'
	&& !KNOWN_STDIO_STRINGS.has(value);
const KNOWN_STDIO_STRINGS = new Set(['ipc', 'ignore', 'inherit', 'overlapped', 'pipe']);

const type_isReadableStream = value => Object.prototype.toString.call(value) === '[object ReadableStream]';
const type_isWritableStream = value => Object.prototype.toString.call(value) === '[object WritableStream]';
const isWebStream = value => type_isReadableStream(value) || type_isWritableStream(value);
const type_isTransformStream = value => type_isReadableStream(value?.readable) && type_isWritableStream(value?.writable);

const isAsyncIterableObject = value => isObject(value) && typeof value[Symbol.asyncIterator] === 'function';
const isIterableObject = value => isObject(value) && typeof value[Symbol.iterator] === 'function';
const isObject = value => typeof value === 'object' && value !== null;

// Types which modify `subprocess.std*`
const TRANSFORM_TYPES = new Set(['generator', 'asyncGenerator', 'duplex', 'webTransform']);
// Types which write to a file or a file descriptor
const FILE_TYPES = new Set(['fileUrl', 'filePath', 'fileNumber']);
// When two file descriptors of this type share the same target, we need to do some special logic
const SPECIAL_DUPLICATE_TYPES_SYNC = new Set(['fileUrl', 'filePath']);
const SPECIAL_DUPLICATE_TYPES = new Set([...SPECIAL_DUPLICATE_TYPES_SYNC, 'webStream', 'nodeStream']);
// Do not allow two file descriptors of this type sharing the same target
const FORBID_DUPLICATE_TYPES = new Set(['webTransform', 'duplex']);

// Convert types to human-friendly strings for error messages
const TYPE_TO_MESSAGE = {
	generator: 'a generator',
	asyncGenerator: 'an async generator',
	fileUrl: 'a file URL',
	filePath: 'a file path string',
	fileNumber: 'a file descriptor number',
	webStream: 'a web stream',
	nodeStream: 'a Node.js stream',
	webTransform: 'a web TransformStream',
	duplex: 'a Duplex stream',
	native: 'any value',
	iterable: 'an iterable',
	asyncIterable: 'an async iterable',
	string: 'a string',
	uint8Array: 'a Uint8Array',
};

;// CONCATENATED MODULE: ./node_modules/execa/lib/transform/object-mode.js


/*
Retrieve the `objectMode`s of a single transform.
`objectMode` determines the return value's type, i.e. the `readableObjectMode`.
The chunk argument's type is based on the previous generator's return value, i.e. the `writableObjectMode` is based on the previous `readableObjectMode`.
The last input's generator is read by `subprocess.stdin` which:
- should not be in `objectMode` for performance reasons.
- can only be strings, Buffers and Uint8Arrays.
Therefore its `readableObjectMode` must be `false`.
The same applies to the first output's generator's `writableObjectMode`.
*/
const getTransformObjectModes = (objectMode, index, newTransforms, direction) => direction === 'output'
	? getOutputObjectModes(objectMode, index, newTransforms)
	: getInputObjectModes(objectMode, index, newTransforms);

const getOutputObjectModes = (objectMode, index, newTransforms) => {
	const writableObjectMode = index !== 0 && newTransforms[index - 1].value.readableObjectMode;
	const readableObjectMode = objectMode ?? writableObjectMode;
	return {writableObjectMode, readableObjectMode};
};

const getInputObjectModes = (objectMode, index, newTransforms) => {
	const writableObjectMode = index === 0
		? objectMode === true
		: newTransforms[index - 1].value.readableObjectMode;
	const readableObjectMode = index !== newTransforms.length - 1 && (objectMode ?? writableObjectMode);
	return {writableObjectMode, readableObjectMode};
};

// Retrieve the `objectMode` of a file descriptor, e.g. `stdout` or `stderr`
const getFdObjectMode = (stdioItems, direction) => {
	const lastTransform = stdioItems.findLast(({type}) => TRANSFORM_TYPES.has(type));
	if (lastTransform === undefined) {
		return false;
	}

	return direction === 'input'
		? lastTransform.value.writableObjectMode
		: lastTransform.value.readableObjectMode;
};

;// CONCATENATED MODULE: ./node_modules/execa/lib/transform/normalize.js





// Transforms generators/duplex/TransformStream can have multiple shapes.
// This normalizes it and applies default values.
const normalizeTransforms = (stdioItems, optionName, direction, options) => [
	...stdioItems.filter(({type}) => !TRANSFORM_TYPES.has(type)),
	...getTransforms(stdioItems, optionName, direction, options),
];

const getTransforms = (stdioItems, optionName, direction, {encoding}) => {
	const transforms = stdioItems.filter(({type}) => TRANSFORM_TYPES.has(type));
	const newTransforms = Array.from({length: transforms.length});

	for (const [index, stdioItem] of Object.entries(transforms)) {
		newTransforms[index] = normalizeTransform({
			stdioItem,
			index: Number(index),
			newTransforms,
			optionName,
			direction,
			encoding,
		});
	}

	return sortTransforms(newTransforms, direction);
};

const normalizeTransform = ({stdioItem, stdioItem: {type}, index, newTransforms, optionName, direction, encoding}) => {
	if (type === 'duplex') {
		return normalizeDuplex({stdioItem, optionName});
	}

	if (type === 'webTransform') {
		return normalizeTransformStream({
			stdioItem,
			index,
			newTransforms,
			direction,
		});
	}

	return normalizeGenerator({
		stdioItem,
		index,
		newTransforms,
		direction,
		encoding,
	});
};

const normalizeDuplex = ({
	stdioItem,
	stdioItem: {
		value: {
			transform,
			transform: {writableObjectMode, readableObjectMode},
			objectMode = readableObjectMode,
		},
	},
	optionName,
}) => {
	if (objectMode && !readableObjectMode) {
		throw new TypeError(`The \`${optionName}.objectMode\` option can only be \`true\` if \`new Duplex({objectMode: true})\` is used.`);
	}

	if (!objectMode && readableObjectMode) {
		throw new TypeError(`The \`${optionName}.objectMode\` option cannot be \`false\` if \`new Duplex({objectMode: true})\` is used.`);
	}

	return {
		...stdioItem,
		value: {transform, writableObjectMode, readableObjectMode},
	};
};

const normalizeTransformStream = ({stdioItem, stdioItem: {value}, index, newTransforms, direction}) => {
	const {transform, objectMode} = isPlainObject(value) ? value : {transform: value};
	const {writableObjectMode, readableObjectMode} = getTransformObjectModes(objectMode, index, newTransforms, direction);
	return ({
		...stdioItem,
		value: {transform, writableObjectMode, readableObjectMode},
	});
};

const normalizeGenerator = ({stdioItem, stdioItem: {value}, index, newTransforms, direction, encoding}) => {
	const {
		transform,
		final,
		binary: binaryOption = false,
		preserveNewlines = false,
		objectMode,
	} = isPlainObject(value) ? value : {transform: value};
	const binary = binaryOption || BINARY_ENCODINGS.has(encoding);
	const {writableObjectMode, readableObjectMode} = getTransformObjectModes(objectMode, index, newTransforms, direction);
	return {
		...stdioItem,
		value: {
			transform,
			final,
			binary,
			preserveNewlines,
			writableObjectMode,
			readableObjectMode,
		},
	};
};

const sortTransforms = (newTransforms, direction) => direction === 'input' ? newTransforms.reverse() : newTransforms;

;// CONCATENATED MODULE: ./node_modules/execa/lib/stdio/direction.js




// For `stdio[fdNumber]` beyond stdin/stdout/stderr, we need to guess whether the value passed is intended for inputs or outputs.
// This allows us to know whether to pipe _into_ or _from_ the stream.
// When `stdio[fdNumber]` is a single value, this guess is fairly straightforward.
// However, when it is an array instead, we also need to make sure the different values are not incompatible with each other.
const getStreamDirection = (stdioItems, fdNumber, optionName) => {
	const directions = stdioItems.map(stdioItem => getStdioItemDirection(stdioItem, fdNumber));

	if (directions.includes('input') && directions.includes('output')) {
		throw new TypeError(`The \`${optionName}\` option must not be an array of both readable and writable values.`);
	}

	return directions.find(Boolean) ?? DEFAULT_DIRECTION;
};

const getStdioItemDirection = ({type, value}, fdNumber) => KNOWN_DIRECTIONS[fdNumber] ?? guessStreamDirection[type](value);

// `stdin`/`stdout`/`stderr` have a known direction
const KNOWN_DIRECTIONS = ['input', 'output', 'output'];

const anyDirection = () => undefined;
const alwaysInput = () => 'input';

// `string` can only be added through the `input` option, i.e. does not need to be handled here
const guessStreamDirection = {
	generator: anyDirection,
	asyncGenerator: anyDirection,
	fileUrl: anyDirection,
	filePath: anyDirection,
	iterable: alwaysInput,
	asyncIterable: alwaysInput,
	uint8Array: alwaysInput,
	webStream: value => type_isWritableStream(value) ? 'output' : 'input',
	nodeStream(value) {
		if (!isReadableStream(value, {checkOpen: false})) {
			return 'output';
		}

		return isWritableStream(value, {checkOpen: false}) ? undefined : 'input';
	},
	webTransform: anyDirection,
	duplex: anyDirection,
	native(value) {
		const standardStreamDirection = getStandardStreamDirection(value);
		if (standardStreamDirection !== undefined) {
			return standardStreamDirection;
		}

		if (isStream(value, {checkOpen: false})) {
			return guessStreamDirection.nodeStream(value);
		}
	},
};

const getStandardStreamDirection = value => {
	if ([0, external_node_process_namespaceObject.stdin].includes(value)) {
		return 'input';
	}

	if ([1, 2, external_node_process_namespaceObject.stdout, external_node_process_namespaceObject.stderr].includes(value)) {
		return 'output';
	}
};

// When ambiguous, we initially keep the direction as `undefined`.
// This allows arrays of `stdio` values to resolve the ambiguity.
// For example, `stdio[3]: DuplexStream` is ambiguous, but `stdio[3]: [DuplexStream, WritableStream]` is not.
// When the ambiguity remains, we default to `output` since it is the most common use case for additional file descriptors.
const DEFAULT_DIRECTION = 'output';

;// CONCATENATED MODULE: ./node_modules/execa/lib/ipc/array.js
// The `ipc` option adds an `ipc` item to the `stdio` option
const normalizeIpcStdioArray = (stdioArray, ipc) => ipc && !stdioArray.includes('ipc')
	? [...stdioArray, 'ipc']
	: stdioArray;

;// CONCATENATED MODULE: ./node_modules/execa/lib/stdio/stdio-option.js




// Add support for `stdin`/`stdout`/`stderr` as an alias for `stdio`.
// Also normalize the `stdio` option.
const normalizeStdioOption = ({stdio, ipc, buffer, ...options}, verboseInfo, isSync) => {
	const stdioArray = getStdioArray(stdio, options).map((stdioOption, fdNumber) => stdio_option_addDefaultValue(stdioOption, fdNumber));
	return isSync
		? normalizeStdioSync(stdioArray, buffer, verboseInfo)
		: normalizeIpcStdioArray(stdioArray, ipc);
};

const getStdioArray = (stdio, options) => {
	if (stdio === undefined) {
		return STANDARD_STREAMS_ALIASES.map(alias => options[alias]);
	}

	if (hasAlias(options)) {
		throw new Error(`It's not possible to provide \`stdio\` in combination with one of ${STANDARD_STREAMS_ALIASES.map(alias => `\`${alias}\``).join(', ')}`);
	}

	if (typeof stdio === 'string') {
		return [stdio, stdio, stdio];
	}

	if (!Array.isArray(stdio)) {
		throw new TypeError(`Expected \`stdio\` to be of type \`string\` or \`Array\`, got \`${typeof stdio}\``);
	}

	const length = Math.max(stdio.length, STANDARD_STREAMS_ALIASES.length);
	return Array.from({length}, (_, fdNumber) => stdio[fdNumber]);
};

const hasAlias = options => STANDARD_STREAMS_ALIASES.some(alias => options[alias] !== undefined);

const stdio_option_addDefaultValue = (stdioOption, fdNumber) => {
	if (Array.isArray(stdioOption)) {
		return stdioOption.map(item => stdio_option_addDefaultValue(item, fdNumber));
	}

	if (stdioOption === null || stdioOption === undefined) {
		return fdNumber >= STANDARD_STREAMS_ALIASES.length ? 'ignore' : 'pipe';
	}

	return stdioOption;
};

// Using `buffer: false` with synchronous methods implies `stdout`/`stderr`: `ignore`.
// Unless the output is needed, e.g. due to `verbose: 'full'` or to redirecting to a file.
const normalizeStdioSync = (stdioArray, buffer, verboseInfo) => stdioArray.map((stdioOption, fdNumber) =>
	!buffer[fdNumber]
	&& fdNumber !== 0
	&& !isFullVerbose(verboseInfo, fdNumber)
	&& isOutputPipeOnly(stdioOption)
		? 'ignore'
		: stdioOption);

const isOutputPipeOnly = stdioOption => stdioOption === 'pipe'
	|| (Array.isArray(stdioOption) && stdioOption.every(item => item === 'pipe'));

;// CONCATENATED MODULE: ./node_modules/execa/lib/stdio/native.js







// When we use multiple `stdio` values for the same streams, we pass 'pipe' to `child_process.spawn()`.
// We then emulate the piping done by core Node.js.
// To do so, we transform the following values:
//  - Node.js streams are marked as `type: nodeStream`
//  - 'inherit' becomes `process.stdin|stdout|stderr`
//  - any file descriptor integer becomes `process.stdio[fdNumber]`
// All of the above transformations tell Execa to perform manual piping.
const handleNativeStream = ({stdioItem, stdioItem: {type}, isStdioArray, fdNumber, direction, isSync}) => {
	if (!isStdioArray || type !== 'native') {
		return stdioItem;
	}

	return isSync
		? handleNativeStreamSync({stdioItem, fdNumber, direction})
		: handleNativeStreamAsync({stdioItem, fdNumber});
};

// Synchronous methods use a different logic.
// 'inherit', file descriptors and process.std* are handled by readFileSync()/writeFileSync().
const handleNativeStreamSync = ({stdioItem, stdioItem: {value, optionName}, fdNumber, direction}) => {
	const targetFd = getTargetFd({
		value,
		optionName,
		fdNumber,
		direction,
	});
	if (targetFd !== undefined) {
		return targetFd;
	}

	if (isStream(value, {checkOpen: false})) {
		throw new TypeError(`The \`${optionName}: Stream\` option cannot both be an array and include a stream with synchronous methods.`);
	}

	return stdioItem;
};

const getTargetFd = ({value, optionName, fdNumber, direction}) => {
	const targetFdNumber = getTargetFdNumber(value, fdNumber);
	if (targetFdNumber === undefined) {
		return;
	}

	if (direction === 'output') {
		return {type: 'fileNumber', value: targetFdNumber, optionName};
	}

	if (external_node_tty_namespaceObject.isatty(targetFdNumber)) {
		throw new TypeError(`The \`${optionName}: ${serializeOptionValue(value)}\` option is invalid: it cannot be a TTY with synchronous methods.`);
	}

	return {type: 'uint8Array', value: bufferToUint8Array((0,external_node_fs_namespaceObject.readFileSync)(targetFdNumber)), optionName};
};

const getTargetFdNumber = (value, fdNumber) => {
	if (value === 'inherit') {
		return fdNumber;
	}

	if (typeof value === 'number') {
		return value;
	}

	const standardStreamIndex = STANDARD_STREAMS.indexOf(value);
	if (standardStreamIndex !== -1) {
		return standardStreamIndex;
	}
};

const handleNativeStreamAsync = ({stdioItem, stdioItem: {value, optionName}, fdNumber}) => {
	if (value === 'inherit') {
		return {type: 'nodeStream', value: getStandardStream(fdNumber, value, optionName), optionName};
	}

	if (typeof value === 'number') {
		return {type: 'nodeStream', value: getStandardStream(value, value, optionName), optionName};
	}

	if (isStream(value, {checkOpen: false})) {
		return {type: 'nodeStream', value, optionName};
	}

	return stdioItem;
};

// Node.js does not allow to easily retrieve file descriptors beyond stdin/stdout/stderr as streams.
//  - `fs.createReadStream()`/`fs.createWriteStream()` with the `fd` option do not work with character devices that use blocking reads/writes (such as interactive TTYs).
//  - Using a TCP `Socket` would work but be rather complex to implement.
// Since this is an edge case, we simply throw an error message.
// See https://github.com/sindresorhus/execa/pull/643#discussion_r1435905707
const getStandardStream = (fdNumber, value, optionName) => {
	const standardStream = STANDARD_STREAMS[fdNumber];

	if (standardStream === undefined) {
		throw new TypeError(`The \`${optionName}: ${value}\` option is invalid: no such standard stream.`);
	}

	return standardStream;
};

;// CONCATENATED MODULE: ./node_modules/execa/lib/stdio/input-option.js




// Append the `stdin` option with the `input` and `inputFile` options
const handleInputOptions = ({input, inputFile}, fdNumber) => fdNumber === 0
	? [
		...handleInputOption(input),
		...handleInputFileOption(inputFile),
	]
	: [];

const handleInputOption = input => input === undefined ? [] : [{
	type: getInputType(input),
	value: input,
	optionName: 'input',
}];

const getInputType = input => {
	if (isReadableStream(input, {checkOpen: false})) {
		return 'nodeStream';
	}

	if (typeof input === 'string') {
		return 'string';
	}

	if (isUint8Array(input)) {
		return 'uint8Array';
	}

	throw new Error('The `input` option must be a string, a Uint8Array or a Node.js Readable stream.');
};

const handleInputFileOption = inputFile => inputFile === undefined ? [] : [{
	...getInputFileType(inputFile),
	optionName: 'inputFile',
}];

const getInputFileType = inputFile => {
	if (isUrl(inputFile)) {
		return {type: 'fileUrl', value: inputFile};
	}

	if (isFilePathString(inputFile)) {
		return {type: 'filePath', value: {file: inputFile}};
	}

	throw new Error('The `inputFile` option must be a file path string or a file URL.');
};

;// CONCATENATED MODULE: ./node_modules/execa/lib/stdio/duplicate.js


// Duplicates in the same file descriptor is most likely an error.
// However, this can be useful with generators.
const filterDuplicates = stdioItems => stdioItems.filter((stdioItemOne, indexOne) =>
	stdioItems.every((stdioItemTwo, indexTwo) => stdioItemOne.value !== stdioItemTwo.value
		|| indexOne >= indexTwo
		|| stdioItemOne.type === 'generator'
		|| stdioItemOne.type === 'asyncGenerator'));

// Check if two file descriptors are sharing the same target.
// For example `{stdout: {file: './output.txt'}, stderr: {file: './output.txt'}}`.
const getDuplicateStream = ({stdioItem: {type, value, optionName}, direction, fileDescriptors, isSync}) => {
	const otherStdioItems = getOtherStdioItems(fileDescriptors, type);
	if (otherStdioItems.length === 0) {
		return;
	}

	if (isSync) {
		validateDuplicateStreamSync({
			otherStdioItems,
			type,
			value,
			optionName,
			direction,
		});
		return;
	}

	if (SPECIAL_DUPLICATE_TYPES.has(type)) {
		return getDuplicateStreamInstance({
			otherStdioItems,
			type,
			value,
			optionName,
			direction,
		});
	}

	if (FORBID_DUPLICATE_TYPES.has(type)) {
		validateDuplicateTransform({
			otherStdioItems,
			type,
			value,
			optionName,
		});
	}
};

// Values shared by multiple file descriptors
const getOtherStdioItems = (fileDescriptors, type) => fileDescriptors
	.flatMap(({direction, stdioItems}) => stdioItems
		.filter(stdioItem => stdioItem.type === type)
		.map((stdioItem => ({...stdioItem, direction}))));

// With `execaSync()`, do not allow setting a file path both in input and output
const validateDuplicateStreamSync = ({otherStdioItems, type, value, optionName, direction}) => {
	if (SPECIAL_DUPLICATE_TYPES_SYNC.has(type)) {
		getDuplicateStreamInstance({
			otherStdioItems,
			type,
			value,
			optionName,
			direction,
		});
	}
};

// When two file descriptors share the file or stream, we need to re-use the same underlying stream.
// Otherwise, the stream would be closed twice when piping ends.
// This is only an issue with output file descriptors.
// This is not a problem with generator functions since those create a new instance for each file descriptor.
// We also forbid input and output file descriptors sharing the same file or stream, since that does not make sense.
const getDuplicateStreamInstance = ({otherStdioItems, type, value, optionName, direction}) => {
	const duplicateStdioItems = otherStdioItems.filter(stdioItem => hasSameValue(stdioItem, value));
	if (duplicateStdioItems.length === 0) {
		return;
	}

	const differentStdioItem = duplicateStdioItems.find(stdioItem => stdioItem.direction !== direction);
	throwOnDuplicateStream(differentStdioItem, optionName, type);

	return direction === 'output' ? duplicateStdioItems[0].stream : undefined;
};

const hasSameValue = ({type, value}, secondValue) => {
	if (type === 'filePath') {
		return value.file === secondValue.file;
	}

	if (type === 'fileUrl') {
		return value.href === secondValue.href;
	}

	return value === secondValue;
};

// We do not allow two file descriptors to share the same Duplex or TransformStream.
// This is because those are set directly to `subprocess.std*`.
// For example, this could result in `subprocess.stdout` and `subprocess.stderr` being the same value.
// This means reading from either would get data from both stdout and stderr.
const validateDuplicateTransform = ({otherStdioItems, type, value, optionName}) => {
	const duplicateStdioItem = otherStdioItems.find(({value: {transform}}) => transform === value.transform);
	throwOnDuplicateStream(duplicateStdioItem, optionName, type);
};

const throwOnDuplicateStream = (stdioItem, optionName, type) => {
	if (stdioItem !== undefined) {
		throw new TypeError(`The \`${stdioItem.optionName}\` and \`${optionName}\` options must not target ${TYPE_TO_MESSAGE[type]} that is the same.`);
	}
};

;// CONCATENATED MODULE: ./node_modules/execa/lib/stdio/handle.js










// Handle `input`, `inputFile`, `stdin`, `stdout` and `stderr` options, before spawning, in async/sync mode
// They are converted into an array of `fileDescriptors`.
// Each `fileDescriptor` is normalized, validated and contains all information necessary for further handling.
const handleStdio = (addProperties, options, verboseInfo, isSync) => {
	const stdio = normalizeStdioOption(options, verboseInfo, isSync);
	const initialFileDescriptors = stdio.map((stdioOption, fdNumber) => getFileDescriptor({
		stdioOption,
		fdNumber,
		options,
		isSync,
	}));
	const fileDescriptors = getFinalFileDescriptors({
		initialFileDescriptors,
		addProperties,
		options,
		isSync,
	});
	options.stdio = fileDescriptors.map(({stdioItems}) => forwardStdio(stdioItems));
	return fileDescriptors;
};

const getFileDescriptor = ({stdioOption, fdNumber, options, isSync}) => {
	const optionName = getStreamName(fdNumber);
	const {stdioItems: initialStdioItems, isStdioArray} = initializeStdioItems({
		stdioOption,
		fdNumber,
		options,
		optionName,
	});
	const direction = getStreamDirection(initialStdioItems, fdNumber, optionName);
	const stdioItems = initialStdioItems.map(stdioItem => handleNativeStream({
		stdioItem,
		isStdioArray,
		fdNumber,
		direction,
		isSync,
	}));
	const normalizedStdioItems = normalizeTransforms(stdioItems, optionName, direction, options);
	const objectMode = getFdObjectMode(normalizedStdioItems, direction);
	validateFileObjectMode(normalizedStdioItems, objectMode);
	return {direction, objectMode, stdioItems: normalizedStdioItems};
};

// We make sure passing an array with a single item behaves the same as passing that item without an array.
// This is what users would expect.
// For example, `stdout: ['ignore']` behaves the same as `stdout: 'ignore'`.
const initializeStdioItems = ({stdioOption, fdNumber, options, optionName}) => {
	const values = Array.isArray(stdioOption) ? stdioOption : [stdioOption];
	const initialStdioItems = [
		...values.map(value => initializeStdioItem(value, optionName)),
		...handleInputOptions(options, fdNumber),
	];

	const stdioItems = filterDuplicates(initialStdioItems);
	const isStdioArray = stdioItems.length > 1;
	validateStdioArray(stdioItems, isStdioArray, optionName);
	validateStreams(stdioItems);
	return {stdioItems, isStdioArray};
};

const initializeStdioItem = (value, optionName) => ({
	type: getStdioItemType(value, optionName),
	value,
	optionName,
});

const validateStdioArray = (stdioItems, isStdioArray, optionName) => {
	if (stdioItems.length === 0) {
		throw new TypeError(`The \`${optionName}\` option must not be an empty array.`);
	}

	if (!isStdioArray) {
		return;
	}

	for (const {value, optionName} of stdioItems) {
		if (INVALID_STDIO_ARRAY_OPTIONS.has(value)) {
			throw new Error(`The \`${optionName}\` option must not include \`${value}\`.`);
		}
	}
};

// Using those `stdio` values together with others for the same stream does not make sense, so we make it fail.
// However, we do allow it if the array has a single item.
const INVALID_STDIO_ARRAY_OPTIONS = new Set(['ignore', 'ipc']);

const validateStreams = stdioItems => {
	for (const stdioItem of stdioItems) {
		validateFileStdio(stdioItem);
	}
};

const validateFileStdio = ({type, value, optionName}) => {
	if (isRegularUrl(value)) {
		throw new TypeError(`The \`${optionName}: URL\` option must use the \`file:\` scheme.
For example, you can use the \`pathToFileURL()\` method of the \`url\` core module.`);
	}

	if (isUnknownStdioString(type, value)) {
		throw new TypeError(`The \`${optionName}: { file: '...' }\` option must be used instead of \`${optionName}: '...'\`.`);
	}
};

const validateFileObjectMode = (stdioItems, objectMode) => {
	if (!objectMode) {
		return;
	}

	const fileStdioItem = stdioItems.find(({type}) => FILE_TYPES.has(type));
	if (fileStdioItem !== undefined) {
		throw new TypeError(`The \`${fileStdioItem.optionName}\` option cannot use both files and transforms in objectMode.`);
	}
};

// Some `stdio` values require Execa to create streams.
// For example, file paths create file read/write streams.
// Those transformations are specified in `addProperties`, which is both direction-specific and type-specific.
const getFinalFileDescriptors = ({initialFileDescriptors, addProperties, options, isSync}) => {
	const fileDescriptors = [];

	try {
		for (const fileDescriptor of initialFileDescriptors) {
			fileDescriptors.push(getFinalFileDescriptor({
				fileDescriptor,
				fileDescriptors,
				addProperties,
				options,
				isSync,
			}));
		}

		return fileDescriptors;
	} catch (error) {
		cleanupCustomStreams(fileDescriptors);
		throw error;
	}
};

const getFinalFileDescriptor = ({
	fileDescriptor: {direction, objectMode, stdioItems},
	fileDescriptors,
	addProperties,
	options,
	isSync,
}) => {
	const finalStdioItems = stdioItems.map(stdioItem => addStreamProperties({
		stdioItem,
		addProperties,
		direction,
		options,
		fileDescriptors,
		isSync,
	}));
	return {direction, objectMode, stdioItems: finalStdioItems};
};

const addStreamProperties = ({stdioItem, addProperties, direction, options, fileDescriptors, isSync}) => {
	const duplicateStream = getDuplicateStream({
		stdioItem,
		direction,
		fileDescriptors,
		isSync,
	});

	if (duplicateStream !== undefined) {
		return {...stdioItem, stream: duplicateStream};
	}

	return {
		...stdioItem,
		...addProperties[direction][stdioItem.type](stdioItem, options),
	};
};

// The stream error handling is performed by the piping logic above, which cannot be performed before subprocess spawning.
// If the subprocess spawning fails (e.g. due to an invalid command), the streams need to be manually destroyed.
// We need to create those streams before subprocess spawning, in case their creation fails, e.g. when passing an invalid generator as argument.
// Like this, an exception would be thrown, which would prevent spawning a subprocess.
const cleanupCustomStreams = fileDescriptors => {
	for (const {stdioItems} of fileDescriptors) {
		for (const {stream} of stdioItems) {
			if (stream !== undefined && !isStandardStream(stream)) {
				stream.destroy();
			}
		}
	}
};

// When the `std*: Iterable | WebStream | URL | filePath`, `input` or `inputFile` option is used, we pipe to `subprocess.std*`.
// When the `std*: Array` option is used, we emulate some of the native values ('inherit', Node.js stream and file descriptor integer). To do so, we also need to pipe to `subprocess.std*`.
// Therefore the `std*` options must be either `pipe` or `overlapped`. Other values do not set `subprocess.std*`.
const forwardStdio = stdioItems => {
	if (stdioItems.length > 1) {
		return stdioItems.some(({value}) => value === 'overlapped') ? 'overlapped' : 'pipe';
	}

	const [{type, value}] = stdioItems;
	return type === 'native' ? value : 'pipe';
};

;// CONCATENATED MODULE: ./node_modules/execa/lib/stdio/handle-sync.js





// Normalize `input`, `inputFile`, `stdin`, `stdout` and `stderr` options, before spawning, in sync mode
const handleStdioSync = (options, verboseInfo) => handleStdio(addPropertiesSync, options, verboseInfo, true);

const forbiddenIfSync = ({type, optionName}) => {
	throwInvalidSyncValue(optionName, TYPE_TO_MESSAGE[type]);
};

const forbiddenNativeIfSync = ({optionName, value}) => {
	if (value === 'ipc' || value === 'overlapped') {
		throwInvalidSyncValue(optionName, `"${value}"`);
	}

	return {};
};

const throwInvalidSyncValue = (optionName, value) => {
	throw new TypeError(`The \`${optionName}\` option cannot be ${value} with synchronous methods.`);
};

// Create streams used internally for redirecting when using specific values for the `std*` options, in sync mode.
// For example, `stdin: {file}` reads the file synchronously, then passes it as the `input` option.
const addProperties = {
	generator() {},
	asyncGenerator: forbiddenIfSync,
	webStream: forbiddenIfSync,
	nodeStream: forbiddenIfSync,
	webTransform: forbiddenIfSync,
	duplex: forbiddenIfSync,
	asyncIterable: forbiddenIfSync,
	native: forbiddenNativeIfSync,
};

const addPropertiesSync = {
	input: {
		...addProperties,
		fileUrl: ({value}) => ({contents: [bufferToUint8Array((0,external_node_fs_namespaceObject.readFileSync)(value))]}),
		filePath: ({value: {file}}) => ({contents: [bufferToUint8Array((0,external_node_fs_namespaceObject.readFileSync)(file))]}),
		fileNumber: forbiddenIfSync,
		iterable: ({value}) => ({contents: [...value]}),
		string: ({value}) => ({contents: [value]}),
		uint8Array: ({value}) => ({contents: [value]}),
	},
	output: {
		...addProperties,
		fileUrl: ({value}) => ({path: value}),
		filePath: ({value: {file, append}}) => ({path: file, append}),
		fileNumber: ({value}) => ({path: value}),
		iterable: forbiddenIfSync,
		string: forbiddenIfSync,
		uint8Array: forbiddenIfSync,
	},
};

;// CONCATENATED MODULE: ./node_modules/execa/lib/io/strip-newline.js


// Apply `stripFinalNewline` option, which applies to `result.stdout|stderr|all|stdio[*]`.
// If the `lines` option is used, it is applied on each line, but using a different function.
const stripNewline = (value, {stripFinalNewline}, fdNumber) => getStripFinalNewline(stripFinalNewline, fdNumber) && value !== undefined && !Array.isArray(value)
	? strip_final_newline_stripFinalNewline(value)
	: value;

// Retrieve `stripFinalNewline` option value, including with `subprocess.all`
const getStripFinalNewline = (stripFinalNewline, fdNumber) => fdNumber === 'all'
	? stripFinalNewline[1] || stripFinalNewline[2]
	: stripFinalNewline[fdNumber];

;// CONCATENATED MODULE: external "node:stream"
const external_node_stream_namespaceObject = __WEBPACK_EXTERNAL_createRequire(import.meta.url)("node:stream");
;// CONCATENATED MODULE: ./node_modules/execa/lib/transform/split.js
// Split chunks line-wise for generators passed to the `std*` options
const getSplitLinesGenerator = (binary, preserveNewlines, skipped, state) => binary || skipped
	? undefined
	: initializeSplitLines(preserveNewlines, state);

// Same but for synchronous methods
const splitLinesSync = (chunk, preserveNewlines, objectMode) => objectMode
	? chunk.flatMap(item => splitLinesItemSync(item, preserveNewlines))
	: splitLinesItemSync(chunk, preserveNewlines);

const splitLinesItemSync = (chunk, preserveNewlines) => {
	const {transform, final} = initializeSplitLines(preserveNewlines, {});
	return [...transform(chunk), ...final()];
};

const initializeSplitLines = (preserveNewlines, state) => {
	state.previousChunks = '';
	return {
		transform: splitGenerator.bind(undefined, state, preserveNewlines),
		final: linesFinal.bind(undefined, state),
	};
};

// This imperative logic is much faster than using `String.split()` and uses very low memory.
const splitGenerator = function * (state, preserveNewlines, chunk) {
	if (typeof chunk !== 'string') {
		yield chunk;
		return;
	}

	let {previousChunks} = state;
	let start = -1;

	for (let end = 0; end < chunk.length; end += 1) {
		if (chunk[end] === '\n') {
			const newlineLength = getNewlineLength(chunk, end, preserveNewlines, state);
			let line = chunk.slice(start + 1, end + 1 - newlineLength);

			if (previousChunks.length > 0) {
				line = concatString(previousChunks, line);
				previousChunks = '';
			}

			yield line;
			start = end;
		}
	}

	if (start !== chunk.length - 1) {
		previousChunks = concatString(previousChunks, chunk.slice(start + 1));
	}

	state.previousChunks = previousChunks;
};

const getNewlineLength = (chunk, end, preserveNewlines, state) => {
	if (preserveNewlines) {
		return 0;
	}

	state.isWindowsNewline = end !== 0 && chunk[end - 1] === '\r';
	return state.isWindowsNewline ? 2 : 1;
};

const linesFinal = function * ({previousChunks}) {
	if (previousChunks.length > 0) {
		yield previousChunks;
	}
};

// Unless `preserveNewlines: true` is used, we strip the newline of each line.
// This re-adds them after the user `transform` code has run.
const getAppendNewlineGenerator = ({binary, preserveNewlines, readableObjectMode, state}) => binary || preserveNewlines || readableObjectMode
	? undefined
	: {transform: appendNewlineGenerator.bind(undefined, state)};

const appendNewlineGenerator = function * ({isWindowsNewline = false}, chunk) {
	const {unixNewline, windowsNewline, LF, concatBytes} = typeof chunk === 'string' ? linesStringInfo : linesUint8ArrayInfo;

	if (chunk.at(-1) === LF) {
		yield chunk;
		return;
	}

	const newline = isWindowsNewline ? windowsNewline : unixNewline;
	yield concatBytes(chunk, newline);
};

const concatString = (firstChunk, secondChunk) => `${firstChunk}${secondChunk}`;

const linesStringInfo = {
	windowsNewline: '\r\n',
	unixNewline: '\n',
	LF: '\n',
	concatBytes: concatString,
};

const concatUint8Array = (firstChunk, secondChunk) => {
	const chunk = new Uint8Array(firstChunk.length + secondChunk.length);
	chunk.set(firstChunk, 0);
	chunk.set(secondChunk, firstChunk.length);
	return chunk;
};

const linesUint8ArrayInfo = {
	windowsNewline: new Uint8Array([0x0D, 0x0A]),
	unixNewline: new Uint8Array([0x0A]),
	LF: 0x0A,
	concatBytes: concatUint8Array,
};

;// CONCATENATED MODULE: external "node:buffer"
const external_node_buffer_namespaceObject = __WEBPACK_EXTERNAL_createRequire(import.meta.url)("node:buffer");
;// CONCATENATED MODULE: ./node_modules/execa/lib/transform/validate.js



// Validate the type of chunk argument passed to transform generators
const getValidateTransformInput = (writableObjectMode, optionName) => writableObjectMode
	? undefined
	: validateStringTransformInput.bind(undefined, optionName);

const validateStringTransformInput = function * (optionName, chunk) {
	if (typeof chunk !== 'string' && !isUint8Array(chunk) && !external_node_buffer_namespaceObject.Buffer.isBuffer(chunk)) {
		throw new TypeError(`The \`${optionName}\` option's transform must use "objectMode: true" to receive as input: ${typeof chunk}.`);
	}

	yield chunk;
};

// Validate the type of the value returned by transform generators
const getValidateTransformReturn = (readableObjectMode, optionName) => readableObjectMode
	? validateObjectTransformReturn.bind(undefined, optionName)
	: validateStringTransformReturn.bind(undefined, optionName);

const validateObjectTransformReturn = function * (optionName, chunk) {
	validateEmptyReturn(optionName, chunk);
	yield chunk;
};

const validateStringTransformReturn = function * (optionName, chunk) {
	validateEmptyReturn(optionName, chunk);

	if (typeof chunk !== 'string' && !isUint8Array(chunk)) {
		throw new TypeError(`The \`${optionName}\` option's function must yield a string or an Uint8Array, not ${typeof chunk}.`);
	}

	yield chunk;
};

const validateEmptyReturn = (optionName, chunk) => {
	if (chunk === null || chunk === undefined) {
		throw new TypeError(`The \`${optionName}\` option's function must not call \`yield ${chunk}\`.
Instead, \`yield\` should either be called with a value, or not be called at all. For example:
  if (condition) { yield value; }`);
	}
};

;// CONCATENATED MODULE: ./node_modules/execa/lib/transform/encoding-transform.js




/*
When using binary encodings, add an internal generator that converts chunks from `Buffer` to `string` or `Uint8Array`.
Chunks might be Buffer, Uint8Array or strings since:
- `subprocess.stdout|stderr` emits Buffers
- `subprocess.stdin.write()` accepts Buffer, Uint8Array or string
- Previous generators might return Uint8Array or string

However, those are converted to Buffer:
- on writes: `Duplex.writable` `decodeStrings: true` default option
- on reads: `Duplex.readable` `readableEncoding: null` default option
*/
const getEncodingTransformGenerator = (binary, encoding, skipped) => {
	if (skipped) {
		return;
	}

	if (binary) {
		return {transform: encodingUint8ArrayGenerator.bind(undefined, new TextEncoder())};
	}

	const stringDecoder = new external_node_string_decoder_namespaceObject.StringDecoder(encoding);
	return {
		transform: encodingStringGenerator.bind(undefined, stringDecoder),
		final: encodingStringFinal.bind(undefined, stringDecoder),
	};
};

const encodingUint8ArrayGenerator = function * (textEncoder, chunk) {
	if (external_node_buffer_namespaceObject.Buffer.isBuffer(chunk)) {
		yield bufferToUint8Array(chunk);
	} else if (typeof chunk === 'string') {
		yield textEncoder.encode(chunk);
	} else {
		yield chunk;
	}
};

const encodingStringGenerator = function * (stringDecoder, chunk) {
	yield isUint8Array(chunk) ? stringDecoder.write(chunk) : chunk;
};

const encodingStringFinal = function * (stringDecoder) {
	const lastChunk = stringDecoder.end();
	if (lastChunk !== '') {
		yield lastChunk;
	}
};

;// CONCATENATED MODULE: ./node_modules/execa/lib/transform/run-async.js


// Applies a series of generator functions asynchronously
const pushChunks = (0,external_node_util_namespaceObject.callbackify)(async (getChunks, state, getChunksArguments, transformStream) => {
	state.currentIterable = getChunks(...getChunksArguments);

	try {
		for await (const chunk of state.currentIterable) {
			transformStream.push(chunk);
		}
	} finally {
		delete state.currentIterable;
	}
});

// For each new chunk, apply each `transform()` method
const transformChunk = async function * (chunk, generators, index) {
	if (index === generators.length) {
		yield chunk;
		return;
	}

	const {transform = identityGenerator} = generators[index];
	for await (const transformedChunk of transform(chunk)) {
		yield * transformChunk(transformedChunk, generators, index + 1);
	}
};

// At the end, apply each `final()` method, followed by the `transform()` method of the next transforms
const finalChunks = async function * (generators) {
	for (const [index, {final}] of Object.entries(generators)) {
		yield * generatorFinalChunks(final, Number(index), generators);
	}
};

const generatorFinalChunks = async function * (final, index, generators) {
	if (final === undefined) {
		return;
	}

	for await (const finalChunk of final()) {
		yield * transformChunk(finalChunk, generators, index + 1);
	}
};

// Cancel any ongoing async generator when the Transform is destroyed, e.g. when the subprocess errors
const destroyTransform = (0,external_node_util_namespaceObject.callbackify)(async ({currentIterable}, error) => {
	if (currentIterable !== undefined) {
		await (error ? currentIterable.throw(error) : currentIterable.return());
		return;
	}

	if (error) {
		throw error;
	}
});

const identityGenerator = function * (chunk) {
	yield chunk;
};

;// CONCATENATED MODULE: ./node_modules/execa/lib/transform/run-sync.js
// Duplicate the code from `run-async.js` but as synchronous functions
const pushChunksSync = (getChunksSync, getChunksArguments, transformStream, done) => {
	try {
		for (const chunk of getChunksSync(...getChunksArguments)) {
			transformStream.push(chunk);
		}

		done();
	} catch (error) {
		done(error);
	}
};

// Run synchronous generators with `execaSync()`
const runTransformSync = (generators, chunks) => [
	...chunks.flatMap(chunk => [...transformChunkSync(chunk, generators, 0)]),
	...finalChunksSync(generators),
];

const transformChunkSync = function * (chunk, generators, index) {
	if (index === generators.length) {
		yield chunk;
		return;
	}

	const {transform = run_sync_identityGenerator} = generators[index];
	for (const transformedChunk of transform(chunk)) {
		yield * transformChunkSync(transformedChunk, generators, index + 1);
	}
};

const finalChunksSync = function * (generators) {
	for (const [index, {final}] of Object.entries(generators)) {
		yield * generatorFinalChunksSync(final, Number(index), generators);
	}
};

const generatorFinalChunksSync = function * (final, index, generators) {
	if (final === undefined) {
		return;
	}

	for (const finalChunk of final()) {
		yield * transformChunkSync(finalChunk, generators, index + 1);
	}
};

const run_sync_identityGenerator = function * (chunk) {
	yield chunk;
};

;// CONCATENATED MODULE: ./node_modules/execa/lib/transform/generator.js








/*
Generators can be used to transform/filter standard streams.

Generators have a simple syntax, yet allows all of the following:
- Sharing `state` between chunks
- Flushing logic, by using a `final` function
- Asynchronous logic
- Emitting multiple chunks from a single source chunk, even if spaced in time, by using multiple `yield`
- Filtering, by using no `yield`

Therefore, there is no need to allow Node.js or web transform streams.

The `highWaterMark` is kept as the default value, since this is what `subprocess.std*` uses.

Chunks are currently processed serially. We could add a `concurrency` option to parallelize in the future.

Transform an array of generator functions into a `Transform` stream.
`Duplex.from(generator)` cannot be used because it does not allow setting the `objectMode` and `highWaterMark`.
*/
const generatorToStream = ({
	value,
	value: {transform, final, writableObjectMode, readableObjectMode},
	optionName,
}, {encoding}) => {
	const state = {};
	const generators = addInternalGenerators(value, encoding, optionName);

	const transformAsync = isAsyncGenerator(transform);
	const finalAsync = isAsyncGenerator(final);
	const transformMethod = transformAsync
		? pushChunks.bind(undefined, transformChunk, state)
		: pushChunksSync.bind(undefined, transformChunkSync);
	const finalMethod = transformAsync || finalAsync
		? pushChunks.bind(undefined, finalChunks, state)
		: pushChunksSync.bind(undefined, finalChunksSync);
	const destroyMethod = transformAsync || finalAsync
		? destroyTransform.bind(undefined, state)
		: undefined;

	const stream = new external_node_stream_namespaceObject.Transform({
		writableObjectMode,
		writableHighWaterMark: (0,external_node_stream_namespaceObject.getDefaultHighWaterMark)(writableObjectMode),
		readableObjectMode,
		readableHighWaterMark: (0,external_node_stream_namespaceObject.getDefaultHighWaterMark)(readableObjectMode),
		transform(chunk, encoding, done) {
			transformMethod([chunk, generators, 0], this, done);
		},
		flush(done) {
			finalMethod([generators], this, done);
		},
		destroy: destroyMethod,
	});
	return {stream};
};

// Applies transform generators in sync mode
const runGeneratorsSync = (chunks, stdioItems, encoding, isInput) => {
	const generators = stdioItems.filter(({type}) => type === 'generator');
	const reversedGenerators = isInput ? generators.reverse() : generators;

	for (const {value, optionName} of reversedGenerators) {
		const generators = addInternalGenerators(value, encoding, optionName);
		chunks = runTransformSync(generators, chunks);
	}

	return chunks;
};

// Generators used internally to convert the chunk type, validate it, and split into lines
const addInternalGenerators = (
	{transform, final, binary, writableObjectMode, readableObjectMode, preserveNewlines},
	encoding,
	optionName,
) => {
	const state = {};
	return [
		{transform: getValidateTransformInput(writableObjectMode, optionName)},
		getEncodingTransformGenerator(binary, encoding, writableObjectMode),
		getSplitLinesGenerator(binary, preserveNewlines, writableObjectMode, state),
		{transform, final},
		{transform: getValidateTransformReturn(readableObjectMode, optionName)},
		getAppendNewlineGenerator({
			binary,
			preserveNewlines,
			readableObjectMode,
			state,
		}),
	].filter(Boolean);
};

;// CONCATENATED MODULE: ./node_modules/execa/lib/io/input-sync.js




// Apply `stdin`/`input`/`inputFile` options, before spawning, in sync mode, by converting it to the `input` option
const addInputOptionsSync = (fileDescriptors, options) => {
	for (const fdNumber of getInputFdNumbers(fileDescriptors)) {
		addInputOptionSync(fileDescriptors, fdNumber, options);
	}
};

const getInputFdNumbers = fileDescriptors => new Set(Object.entries(fileDescriptors)
	.filter(([, {direction}]) => direction === 'input')
	.map(([fdNumber]) => Number(fdNumber)));

const addInputOptionSync = (fileDescriptors, fdNumber, options) => {
	const {stdioItems} = fileDescriptors[fdNumber];
	const allStdioItems = stdioItems.filter(({contents}) => contents !== undefined);
	if (allStdioItems.length === 0) {
		return;
	}

	if (fdNumber !== 0) {
		const [{type, optionName}] = allStdioItems;
		throw new TypeError(`Only the \`stdin\` option, not \`${optionName}\`, can be ${TYPE_TO_MESSAGE[type]} with synchronous methods.`);
	}

	const allContents = allStdioItems.map(({contents}) => contents);
	const transformedContents = allContents.map(contents => applySingleInputGeneratorsSync(contents, stdioItems));
	options.input = joinToUint8Array(transformedContents);
};

const applySingleInputGeneratorsSync = (contents, stdioItems) => {
	const newContents = runGeneratorsSync(contents, stdioItems, 'utf8', true);
	validateSerializable(newContents);
	return joinToUint8Array(newContents);
};

const validateSerializable = newContents => {
	const invalidItem = newContents.find(item => typeof item !== 'string' && !isUint8Array(item));
	if (invalidItem !== undefined) {
		throw new TypeError(`The \`stdin\` option is invalid: when passing objects as input, a transform must be used to serialize them to strings or Uint8Arrays: ${invalidItem}.`);
	}
};

;// CONCATENATED MODULE: ./node_modules/execa/lib/verbose/output.js





// `ignore` opts-out of `verbose` for a specific stream.
// `ipc` cannot use piping.
// `inherit` would result in double printing.
// They can also lead to double printing when passing file descriptor integers or `process.std*`.
// This only leaves with `pipe` and `overlapped`.
const shouldLogOutput = ({stdioItems, encoding, verboseInfo, fdNumber}) => fdNumber !== 'all'
	&& isFullVerbose(verboseInfo, fdNumber)
	&& !BINARY_ENCODINGS.has(encoding)
	&& fdUsesVerbose(fdNumber)
	&& (stdioItems.some(({type, value}) => type === 'native' && PIPED_STDIO_VALUES.has(value))
	|| stdioItems.every(({type}) => TRANSFORM_TYPES.has(type)));

// Printing input streams would be confusing.
// Files and streams can produce big outputs, which we don't want to print.
// We could print `stdio[3+]` but it often is redirected to files and streams, with the same issue.
// So we only print stdout and stderr.
const fdUsesVerbose = fdNumber => fdNumber === 1 || fdNumber === 2;

const PIPED_STDIO_VALUES = new Set(['pipe', 'overlapped']);

// `verbose: 'full'` printing logic with async methods
const logLines = async (linesIterable, stream, fdNumber, verboseInfo) => {
	for await (const line of linesIterable) {
		if (!isPipingStream(stream)) {
			logLine(line, fdNumber, verboseInfo);
		}
	}
};

// `verbose: 'full'` printing logic with sync methods
const logLinesSync = (linesArray, fdNumber, verboseInfo) => {
	for (const line of linesArray) {
		logLine(line, fdNumber, verboseInfo);
	}
};

// When `subprocess.stdout|stderr.pipe()` is called, `verbose` becomes a noop.
// This prevents the following problems:
//  - `.pipe()` achieves the same result as using `stdout: 'inherit'`, `stdout: stream`, etc. which also make `verbose` a noop.
//    For example, `subprocess.stdout.pipe(process.stdin)` would print each line twice.
//  - When chaining subprocesses with `subprocess.pipe(otherSubprocess)`, only the last one should print its output.
// Detecting whether `.pipe()` is impossible without monkey-patching it, so we use the following undocumented property.
// This is not a critical behavior since changes of the following property would only make `verbose` more verbose.
const isPipingStream = stream => stream._readableState.pipes.length > 0;

// When `verbose` is `full`, print stdout|stderr
const logLine = (line, fdNumber, verboseInfo) => {
	const verboseMessage = serializeVerboseMessage(line);
	verboseLog({
		type: 'output',
		verboseMessage,
		fdNumber,
		verboseInfo,
	});
};

;// CONCATENATED MODULE: ./node_modules/execa/lib/io/output-sync.js








// Apply `stdout`/`stderr` options, after spawning, in sync mode
const transformOutputSync = ({fileDescriptors, syncResult: {output}, options, isMaxBuffer, verboseInfo}) => {
	if (output === null) {
		return {output: Array.from({length: 3})};
	}

	const state = {};
	const outputFiles = new Set([]);
	const transformedOutput = output.map((result, fdNumber) =>
		transformOutputResultSync({
			result,
			fileDescriptors,
			fdNumber,
			state,
			outputFiles,
			isMaxBuffer,
			verboseInfo,
		}, options));
	return {output: transformedOutput, ...state};
};

const transformOutputResultSync = (
	{result, fileDescriptors, fdNumber, state, outputFiles, isMaxBuffer, verboseInfo},
	{buffer, encoding, lines, stripFinalNewline, maxBuffer},
) => {
	if (result === null) {
		return;
	}

	const truncatedResult = truncateMaxBufferSync(result, isMaxBuffer, maxBuffer);
	const uint8ArrayResult = bufferToUint8Array(truncatedResult);
	const {stdioItems, objectMode} = fileDescriptors[fdNumber];
	const chunks = runOutputGeneratorsSync([uint8ArrayResult], stdioItems, encoding, state);
	const {serializedResult, finalResult = serializedResult} = serializeChunks({
		chunks,
		objectMode,
		encoding,
		lines,
		stripFinalNewline,
		fdNumber,
	});

	logOutputSync({
		serializedResult,
		fdNumber,
		state,
		verboseInfo,
		encoding,
		stdioItems,
		objectMode,
	});

	const returnedResult = buffer[fdNumber] ? finalResult : undefined;

	try {
		if (state.error === undefined) {
			writeToFiles(serializedResult, stdioItems, outputFiles);
		}

		return returnedResult;
	} catch (error) {
		state.error = error;
		return returnedResult;
	}
};

// Applies transform generators to `stdout`/`stderr`
const runOutputGeneratorsSync = (chunks, stdioItems, encoding, state) => {
	try {
		return runGeneratorsSync(chunks, stdioItems, encoding, false);
	} catch (error) {
		state.error = error;
		return chunks;
	}
};

// The contents is converted to three stages:
//  - serializedResult: used when the target is a file path/URL or a file descriptor (including 'inherit')
//  - finalResult/returnedResult: returned as `result.std*`
const serializeChunks = ({chunks, objectMode, encoding, lines, stripFinalNewline, fdNumber}) => {
	if (objectMode) {
		return {serializedResult: chunks};
	}

	if (encoding === 'buffer') {
		return {serializedResult: joinToUint8Array(chunks)};
	}

	const serializedResult = joinToString(chunks, encoding);
	if (lines[fdNumber]) {
		return {serializedResult, finalResult: splitLinesSync(serializedResult, !stripFinalNewline[fdNumber], objectMode)};
	}

	return {serializedResult};
};

const logOutputSync = ({serializedResult, fdNumber, state, verboseInfo, encoding, stdioItems, objectMode}) => {
	if (!shouldLogOutput({
		stdioItems,
		encoding,
		verboseInfo,
		fdNumber,
	})) {
		return;
	}

	const linesArray = splitLinesSync(serializedResult, false, objectMode);

	try {
		logLinesSync(linesArray, fdNumber, verboseInfo);
	} catch (error) {
		state.error ??= error;
	}
};

// When the `std*` target is a file path/URL or a file descriptor
const writeToFiles = (serializedResult, stdioItems, outputFiles) => {
	for (const {path, append} of stdioItems.filter(({type}) => FILE_TYPES.has(type))) {
		const pathString = typeof path === 'string' ? path : path.toString();
		if (append || outputFiles.has(pathString)) {
			(0,external_node_fs_namespaceObject.appendFileSync)(path, serializedResult);
		} else {
			outputFiles.add(pathString);
			(0,external_node_fs_namespaceObject.writeFileSync)(path, serializedResult);
		}
	}
};

;// CONCATENATED MODULE: ./node_modules/execa/lib/resolve/all-sync.js



// Retrieve `result.all` with synchronous methods
const getAllSync = ([, stdout, stderr], options) => {
	if (!options.all) {
		return;
	}

	if (stdout === undefined) {
		return stderr;
	}

	if (stderr === undefined) {
		return stdout;
	}

	if (Array.isArray(stdout)) {
		return Array.isArray(stderr)
			? [...stdout, ...stderr]
			: [...stdout, stripNewline(stderr, options, 'all')];
	}

	if (Array.isArray(stderr)) {
		return [stripNewline(stdout, options, 'all'), ...stderr];
	}

	if (isUint8Array(stdout) && isUint8Array(stderr)) {
		return concatUint8Arrays([stdout, stderr]);
	}

	return `${stdout}${stderr}`;
};

;// CONCATENATED MODULE: ./node_modules/execa/lib/resolve/exit-async.js



// If `error` is emitted before `spawn`, `exit` will never be emitted.
// However, `error` might be emitted after `spawn`.
// In that case, `exit` will still be emitted.
// Since the `exit` event contains the signal name, we want to make sure we are listening for it.
// This function also takes into account the following unlikely cases:
//  - `exit` being emitted in the same microtask as `spawn`
//  - `error` being emitted multiple times
const waitForExit = async (subprocess, context) => {
	const [exitCode, signal] = await waitForExitOrError(subprocess);
	context.isForcefullyTerminated ??= false;
	return [exitCode, signal];
};

const waitForExitOrError = async subprocess => {
	const [spawnPayload, exitPayload] = await Promise.allSettled([
		(0,external_node_events_namespaceObject.once)(subprocess, 'spawn'),
		(0,external_node_events_namespaceObject.once)(subprocess, 'exit'),
	]);

	if (spawnPayload.status === 'rejected') {
		return [];
	}

	return exitPayload.status === 'rejected'
		? waitForSubprocessExit(subprocess)
		: exitPayload.value;
};

const waitForSubprocessExit = async subprocess => {
	try {
		return await (0,external_node_events_namespaceObject.once)(subprocess, 'exit');
	} catch {
		return waitForSubprocessExit(subprocess);
	}
};

// Retrieve the final exit code and|or signal name
const waitForSuccessfulExit = async exitPromise => {
	const [exitCode, signal] = await exitPromise;

	if (!isSubprocessErrorExit(exitCode, signal) && isFailedExit(exitCode, signal)) {
		throw new DiscardedError();
	}

	return [exitCode, signal];
};

// When the subprocess fails due to an `error` event
const isSubprocessErrorExit = (exitCode, signal) => exitCode === undefined && signal === undefined;
// When the subprocess fails due to a non-0 exit code or to a signal termination
const isFailedExit = (exitCode, signal) => exitCode !== 0 || signal !== null;

;// CONCATENATED MODULE: ./node_modules/execa/lib/resolve/exit-sync.js




// Retrieve exit code, signal name and error information, with synchronous methods
const getExitResultSync = ({error, status: exitCode, signal, output}, {maxBuffer}) => {
	const resultError = getResultError(error, exitCode, signal);
	const timedOut = resultError?.code === 'ETIMEDOUT';
	const isMaxBuffer = isMaxBufferSync(resultError, output, maxBuffer);
	return {
		resultError,
		exitCode,
		signal,
		timedOut,
		isMaxBuffer,
	};
};

const getResultError = (error, exitCode, signal) => {
	if (error !== undefined) {
		return error;
	}

	return isFailedExit(exitCode, signal) ? new DiscardedError() : undefined;
};

;// CONCATENATED MODULE: ./node_modules/execa/lib/methods/main-sync.js














// Main shared logic for all sync methods: `execaSync()`, `$.sync()`
const execaCoreSync = (rawFile, rawArguments, rawOptions) => {
	const {file, commandArguments, command, escapedCommand, startTime, verboseInfo, options, fileDescriptors} = handleSyncArguments(rawFile, rawArguments, rawOptions);
	const result = spawnSubprocessSync({
		file,
		commandArguments,
		options,
		command,
		escapedCommand,
		verboseInfo,
		fileDescriptors,
		startTime,
	});
	return handleResult(result, verboseInfo, options);
};

// Compute arguments to pass to `child_process.spawnSync()`
const handleSyncArguments = (rawFile, rawArguments, rawOptions) => {
	const {command, escapedCommand, startTime, verboseInfo} = handleCommand(rawFile, rawArguments, rawOptions);
	const syncOptions = normalizeSyncOptions(rawOptions);
	const {file, commandArguments, options} = normalizeOptions(rawFile, rawArguments, syncOptions);
	validateSyncOptions(options);
	const fileDescriptors = handleStdioSync(options, verboseInfo);
	return {
		file,
		commandArguments,
		command,
		escapedCommand,
		startTime,
		verboseInfo,
		options,
		fileDescriptors,
	};
};

// Options normalization logic specific to sync methods
const normalizeSyncOptions = options => options.node && !options.ipc ? {...options, ipc: false} : options;

// Options validation logic specific to sync methods
const validateSyncOptions = ({ipc, ipcInput, detached, cancelSignal}) => {
	if (ipcInput) {
		throwInvalidSyncOption('ipcInput');
	}

	if (ipc) {
		throwInvalidSyncOption('ipc: true');
	}

	if (detached) {
		throwInvalidSyncOption('detached: true');
	}

	if (cancelSignal) {
		throwInvalidSyncOption('cancelSignal');
	}
};

const throwInvalidSyncOption = value => {
	throw new TypeError(`The "${value}" option cannot be used with synchronous methods.`);
};

const spawnSubprocessSync = ({file, commandArguments, options, command, escapedCommand, verboseInfo, fileDescriptors, startTime}) => {
	const syncResult = runSubprocessSync({
		file,
		commandArguments,
		options,
		command,
		escapedCommand,
		fileDescriptors,
		startTime,
	});
	if (syncResult.failed) {
		return syncResult;
	}

	const {resultError, exitCode, signal, timedOut, isMaxBuffer} = getExitResultSync(syncResult, options);
	const {output, error = resultError} = transformOutputSync({
		fileDescriptors,
		syncResult,
		options,
		isMaxBuffer,
		verboseInfo,
	});
	const stdio = output.map((stdioOutput, fdNumber) => stripNewline(stdioOutput, options, fdNumber));
	const all = stripNewline(getAllSync(output, options), options, 'all');
	return getSyncResult({
		error,
		exitCode,
		signal,
		timedOut,
		isMaxBuffer,
		stdio,
		all,
		options,
		command,
		escapedCommand,
		startTime,
	});
};

const runSubprocessSync = ({file, commandArguments, options, command, escapedCommand, fileDescriptors, startTime}) => {
	try {
		addInputOptionsSync(fileDescriptors, options);
		const normalizedOptions = normalizeSpawnSyncOptions(options);
		return (0,external_node_child_process_namespaceObject.spawnSync)(...concatenateShell(file, commandArguments, normalizedOptions));
	} catch (error) {
		return makeEarlyError({
			error,
			command,
			escapedCommand,
			fileDescriptors,
			options,
			startTime,
			isSync: true,
		});
	}
};

// The `encoding` option is handled by Execa, not by `child_process.spawnSync()`
const normalizeSpawnSyncOptions = ({encoding, maxBuffer, ...options}) => ({...options, encoding: 'buffer', maxBuffer: getMaxBufferSync(maxBuffer)});

const getSyncResult = ({error, exitCode, signal, timedOut, isMaxBuffer, stdio, all, options, command, escapedCommand, startTime}) => error === undefined
	? makeSuccessResult({
		command,
		escapedCommand,
		stdio,
		all,
		ipcOutput: [],
		options,
		startTime,
	})
	: makeError({
		error,
		command,
		escapedCommand,
		timedOut,
		isCanceled: false,
		isGracefullyCanceled: false,
		isMaxBuffer,
		isForcefullyTerminated: false,
		exitCode,
		signal,
		stdio,
		all,
		ipcOutput: [],
		options,
		startTime,
		isSync: true,
	});

;// CONCATENATED MODULE: ./node_modules/execa/lib/ipc/get-one.js





// Like `[sub]process.once('message')` but promise-based
const getOneMessage = ({anyProcess, channel, isSubprocess, ipc}, {reference = true, filter} = {}) => {
	validateIpcMethod({
		methodName: 'getOneMessage',
		isSubprocess,
		ipc,
		isConnected: isConnected(anyProcess),
	});

	return getOneMessageAsync({
		anyProcess,
		channel,
		isSubprocess,
		filter,
		reference,
	});
};

const getOneMessageAsync = async ({anyProcess, channel, isSubprocess, filter, reference}) => {
	addReference(channel, reference);
	const ipcEmitter = getIpcEmitter(anyProcess, channel, isSubprocess);
	const controller = new AbortController();
	try {
		return await Promise.race([
			getMessage(ipcEmitter, filter, controller),
			get_one_throwOnDisconnect(ipcEmitter, isSubprocess, controller),
			throwOnStrictError(ipcEmitter, isSubprocess, controller),
		]);
	} catch (error) {
		disconnect(anyProcess);
		throw error;
	} finally {
		controller.abort();
		removeReference(channel, reference);
	}
};

const getMessage = async (ipcEmitter, filter, {signal}) => {
	if (filter === undefined) {
		const [message] = await (0,external_node_events_namespaceObject.once)(ipcEmitter, 'message', {signal});
		return message;
	}

	for await (const [message] of (0,external_node_events_namespaceObject.on)(ipcEmitter, 'message', {signal})) {
		if (filter(message)) {
			return message;
		}
	}
};

const get_one_throwOnDisconnect = async (ipcEmitter, isSubprocess, {signal}) => {
	await (0,external_node_events_namespaceObject.once)(ipcEmitter, 'disconnect', {signal});
	throwOnEarlyDisconnect(isSubprocess);
};

const throwOnStrictError = async (ipcEmitter, isSubprocess, {signal}) => {
	const [error] = await (0,external_node_events_namespaceObject.once)(ipcEmitter, 'strict:error', {signal});
	throw getStrictResponseError(error, isSubprocess);
};

;// CONCATENATED MODULE: ./node_modules/execa/lib/ipc/get-each.js





// Like `[sub]process.on('message')` but promise-based
const getEachMessage = ({anyProcess, channel, isSubprocess, ipc}, {reference = true} = {}) => loopOnMessages({
	anyProcess,
	channel,
	isSubprocess,
	ipc,
	shouldAwait: !isSubprocess,
	reference,
});

// Same but used internally
const loopOnMessages = ({anyProcess, channel, isSubprocess, ipc, shouldAwait, reference}) => {
	validateIpcMethod({
		methodName: 'getEachMessage',
		isSubprocess,
		ipc,
		isConnected: isConnected(anyProcess),
	});

	addReference(channel, reference);
	const ipcEmitter = getIpcEmitter(anyProcess, channel, isSubprocess);
	const controller = new AbortController();
	const state = {};
	stopOnDisconnect(anyProcess, ipcEmitter, controller);
	abortOnStrictError({
		ipcEmitter,
		isSubprocess,
		controller,
		state,
	});
	return iterateOnMessages({
		anyProcess,
		channel,
		ipcEmitter,
		isSubprocess,
		shouldAwait,
		controller,
		state,
		reference,
	});
};

const stopOnDisconnect = async (anyProcess, ipcEmitter, controller) => {
	try {
		await (0,external_node_events_namespaceObject.once)(ipcEmitter, 'disconnect', {signal: controller.signal});
		controller.abort();
	} catch {}
};

const abortOnStrictError = async ({ipcEmitter, isSubprocess, controller, state}) => {
	try {
		const [error] = await (0,external_node_events_namespaceObject.once)(ipcEmitter, 'strict:error', {signal: controller.signal});
		state.error = getStrictResponseError(error, isSubprocess);
		controller.abort();
	} catch {}
};

const iterateOnMessages = async function * ({anyProcess, channel, ipcEmitter, isSubprocess, shouldAwait, controller, state, reference}) {
	try {
		for await (const [message] of (0,external_node_events_namespaceObject.on)(ipcEmitter, 'message', {signal: controller.signal})) {
			throwIfStrictError(state);
			yield message;
		}
	} catch {
		throwIfStrictError(state);
	} finally {
		controller.abort();
		removeReference(channel, reference);

		if (!isSubprocess) {
			disconnect(anyProcess);
		}

		if (shouldAwait) {
			await anyProcess;
		}
	}
};

const throwIfStrictError = ({error}) => {
	if (error) {
		throw error;
	}
};

;// CONCATENATED MODULE: ./node_modules/execa/lib/ipc/methods.js






// Add promise-based IPC methods in current process
const addIpcMethods = (subprocess, {ipc}) => {
	Object.assign(subprocess, getIpcMethods(subprocess, false, ipc));
};

// Get promise-based IPC in the subprocess
const getIpcExport = () => {
	const anyProcess = external_node_process_namespaceObject;
	const isSubprocess = true;
	const ipc = external_node_process_namespaceObject.channel !== undefined;

	return {
		...getIpcMethods(anyProcess, isSubprocess, ipc),
		getCancelSignal: getCancelSignal.bind(undefined, {
			anyProcess,
			channel: anyProcess.channel,
			isSubprocess,
			ipc,
		}),
	};
};

// Retrieve the `ipc` shared by both the current process and the subprocess
const getIpcMethods = (anyProcess, isSubprocess, ipc) => ({
	sendMessage: sendMessage.bind(undefined, {
		anyProcess,
		channel: anyProcess.channel,
		isSubprocess,
		ipc,
	}),
	getOneMessage: getOneMessage.bind(undefined, {
		anyProcess,
		channel: anyProcess.channel,
		isSubprocess,
		ipc,
	}),
	getEachMessage: getEachMessage.bind(undefined, {
		anyProcess,
		channel: anyProcess.channel,
		isSubprocess,
		ipc,
	}),
});

;// CONCATENATED MODULE: ./node_modules/execa/lib/return/early-error.js






// When the subprocess fails to spawn.
// We ensure the returned error is always both a promise and a subprocess.
const handleEarlyError = ({error, command, escapedCommand, fileDescriptors, options, startTime, verboseInfo}) => {
	cleanupCustomStreams(fileDescriptors);

	const subprocess = new external_node_child_process_namespaceObject.ChildProcess();
	createDummyStreams(subprocess, fileDescriptors);
	Object.assign(subprocess, {readable, writable, duplex});

	const earlyError = makeEarlyError({
		error,
		command,
		escapedCommand,
		fileDescriptors,
		options,
		startTime,
		isSync: false,
	});
	const promise = handleDummyPromise(earlyError, verboseInfo, options);
	return {subprocess, promise};
};

const createDummyStreams = (subprocess, fileDescriptors) => {
	const stdin = createDummyStream();
	const stdout = createDummyStream();
	const stderr = createDummyStream();
	const extraStdio = Array.from({length: fileDescriptors.length - 3}, createDummyStream);
	const all = createDummyStream();
	const stdio = [stdin, stdout, stderr, ...extraStdio];
	Object.assign(subprocess, {
		stdin,
		stdout,
		stderr,
		all,
		stdio,
	});
};

const createDummyStream = () => {
	const stream = new external_node_stream_namespaceObject.PassThrough();
	stream.end();
	return stream;
};

const readable = () => new external_node_stream_namespaceObject.Readable({read() {}});
const writable = () => new external_node_stream_namespaceObject.Writable({write() {}});
const duplex = () => new external_node_stream_namespaceObject.Duplex({read() {}, write() {}});

const handleDummyPromise = async (error, verboseInfo, options) => handleResult(error, verboseInfo, options);

;// CONCATENATED MODULE: ./node_modules/execa/lib/stdio/handle-async.js







// Handle `input`, `inputFile`, `stdin`, `stdout` and `stderr` options, before spawning, in async mode
const handleStdioAsync = (options, verboseInfo) => handleStdio(addPropertiesAsync, options, verboseInfo, false);

const forbiddenIfAsync = ({type, optionName}) => {
	throw new TypeError(`The \`${optionName}\` option cannot be ${TYPE_TO_MESSAGE[type]}.`);
};

// Create streams used internally for piping when using specific values for the `std*` options, in async mode.
// For example, `stdout: {file}` creates a file stream, which is piped from/to.
const handle_async_addProperties = {
	fileNumber: forbiddenIfAsync,
	generator: generatorToStream,
	asyncGenerator: generatorToStream,
	nodeStream: ({value}) => ({stream: value}),
	webTransform({value: {transform, writableObjectMode, readableObjectMode}}) {
		const objectMode = writableObjectMode || readableObjectMode;
		const stream = external_node_stream_namespaceObject.Duplex.fromWeb(transform, {objectMode});
		return {stream};
	},
	duplex: ({value: {transform}}) => ({stream: transform}),
	native() {},
};

const addPropertiesAsync = {
	input: {
		...handle_async_addProperties,
		fileUrl: ({value}) => ({stream: (0,external_node_fs_namespaceObject.createReadStream)(value)}),
		filePath: ({value: {file}}) => ({stream: (0,external_node_fs_namespaceObject.createReadStream)(file)}),
		webStream: ({value}) => ({stream: external_node_stream_namespaceObject.Readable.fromWeb(value)}),
		iterable: ({value}) => ({stream: external_node_stream_namespaceObject.Readable.from(value)}),
		asyncIterable: ({value}) => ({stream: external_node_stream_namespaceObject.Readable.from(value)}),
		string: ({value}) => ({stream: external_node_stream_namespaceObject.Readable.from(value)}),
		uint8Array: ({value}) => ({stream: external_node_stream_namespaceObject.Readable.from(external_node_buffer_namespaceObject.Buffer.from(value))}),
	},
	output: {
		...handle_async_addProperties,
		fileUrl: ({value}) => ({stream: (0,external_node_fs_namespaceObject.createWriteStream)(value)}),
		filePath: ({value: {file, append}}) => ({stream: (0,external_node_fs_namespaceObject.createWriteStream)(file, append ? {flags: 'a'} : {})}),
		webStream: ({value}) => ({stream: external_node_stream_namespaceObject.Writable.fromWeb(value)}),
		iterable: forbiddenIfAsync,
		asyncIterable: forbiddenIfAsync,
		string: forbiddenIfAsync,
		uint8Array: forbiddenIfAsync,
	},
};

;// CONCATENATED MODULE: external "node:stream/promises"
const external_node_stream_promises_namespaceObject = __WEBPACK_EXTERNAL_createRequire(import.meta.url)("node:stream/promises");
;// CONCATENATED MODULE: ./node_modules/@sindresorhus/merge-streams/index.js




function mergeStreams(streams) {
	if (!Array.isArray(streams)) {
		throw new TypeError(`Expected an array, got \`${typeof streams}\`.`);
	}

	for (const stream of streams) {
		validateStream(stream);
	}

	const objectMode = streams.some(({readableObjectMode}) => readableObjectMode);
	const highWaterMark = getHighWaterMark(streams, objectMode);
	const passThroughStream = new MergedStream({
		objectMode,
		writableHighWaterMark: highWaterMark,
		readableHighWaterMark: highWaterMark,
	});

	for (const stream of streams) {
		passThroughStream.add(stream);
	}

	return passThroughStream;
}

const getHighWaterMark = (streams, objectMode) => {
	if (streams.length === 0) {
		return (0,external_node_stream_namespaceObject.getDefaultHighWaterMark)(objectMode);
	}

	const highWaterMarks = streams
		.filter(({readableObjectMode}) => readableObjectMode === objectMode)
		.map(({readableHighWaterMark}) => readableHighWaterMark);
	return Math.max(...highWaterMarks);
};

class MergedStream extends external_node_stream_namespaceObject.PassThrough {
	#streams = new Set([]);
	#ended = new Set([]);
	#aborted = new Set([]);
	#onFinished;
	#unpipeEvent = Symbol('unpipe');
	#streamPromises = new WeakMap();

	add(stream) {
		validateStream(stream);

		if (this.#streams.has(stream)) {
			return;
		}

		this.#streams.add(stream);

		this.#onFinished ??= onMergedStreamFinished(this, this.#streams, this.#unpipeEvent);
		const streamPromise = endWhenStreamsDone({
			passThroughStream: this,
			stream,
			streams: this.#streams,
			ended: this.#ended,
			aborted: this.#aborted,
			onFinished: this.#onFinished,
			unpipeEvent: this.#unpipeEvent,
		});
		this.#streamPromises.set(stream, streamPromise);

		stream.pipe(this, {end: false});
	}

	async remove(stream) {
		validateStream(stream);

		if (!this.#streams.has(stream)) {
			return false;
		}

		const streamPromise = this.#streamPromises.get(stream);
		if (streamPromise === undefined) {
			return false;
		}

		this.#streamPromises.delete(stream);

		stream.unpipe(this);
		await streamPromise;
		return true;
	}
}

const onMergedStreamFinished = async (passThroughStream, streams, unpipeEvent) => {
	updateMaxListeners(passThroughStream, PASSTHROUGH_LISTENERS_COUNT);
	const controller = new AbortController();

	try {
		await Promise.race([
			onMergedStreamEnd(passThroughStream, controller),
			onInputStreamsUnpipe(passThroughStream, streams, unpipeEvent, controller),
		]);
	} finally {
		controller.abort();
		updateMaxListeners(passThroughStream, -PASSTHROUGH_LISTENERS_COUNT);
	}
};

const onMergedStreamEnd = async (passThroughStream, {signal}) => {
	try {
		await (0,external_node_stream_promises_namespaceObject.finished)(passThroughStream, {signal, cleanup: true});
	} catch (error) {
		errorOrAbortStream(passThroughStream, error);
		throw error;
	}
};

const onInputStreamsUnpipe = async (passThroughStream, streams, unpipeEvent, {signal}) => {
	for await (const [unpipedStream] of (0,external_node_events_namespaceObject.on)(passThroughStream, 'unpipe', {signal})) {
		if (streams.has(unpipedStream)) {
			unpipedStream.emit(unpipeEvent);
		}
	}
};

const validateStream = stream => {
	if (typeof stream?.pipe !== 'function') {
		throw new TypeError(`Expected a readable stream, got: \`${typeof stream}\`.`);
	}
};

const endWhenStreamsDone = async ({passThroughStream, stream, streams, ended, aborted, onFinished, unpipeEvent}) => {
	updateMaxListeners(passThroughStream, PASSTHROUGH_LISTENERS_PER_STREAM);
	const controller = new AbortController();

	try {
		await Promise.race([
			afterMergedStreamFinished(onFinished, stream, controller),
			onInputStreamEnd({
				passThroughStream,
				stream,
				streams,
				ended,
				aborted,
				controller,
			}),
			onInputStreamUnpipe({
				stream,
				streams,
				ended,
				aborted,
				unpipeEvent,
				controller,
			}),
		]);
	} finally {
		controller.abort();
		updateMaxListeners(passThroughStream, -PASSTHROUGH_LISTENERS_PER_STREAM);
	}

	if (streams.size > 0 && streams.size === ended.size + aborted.size) {
		if (ended.size === 0 && aborted.size > 0) {
			abortStream(passThroughStream);
		} else {
			endStream(passThroughStream);
		}
	}
};

const afterMergedStreamFinished = async (onFinished, stream, {signal}) => {
	try {
		await onFinished;
		if (!signal.aborted) {
			abortStream(stream);
		}
	} catch (error) {
		if (!signal.aborted) {
			errorOrAbortStream(stream, error);
		}
	}
};

const onInputStreamEnd = async ({passThroughStream, stream, streams, ended, aborted, controller: {signal}}) => {
	try {
		await (0,external_node_stream_promises_namespaceObject.finished)(stream, {
			signal,
			cleanup: true,
			readable: true,
			writable: false,
		});
		if (streams.has(stream)) {
			ended.add(stream);
		}
	} catch (error) {
		if (signal.aborted || !streams.has(stream)) {
			return;
		}

		if (isAbortError(error)) {
			aborted.add(stream);
		} else {
			errorStream(passThroughStream, error);
		}
	}
};

const onInputStreamUnpipe = async ({stream, streams, ended, aborted, unpipeEvent, controller: {signal}}) => {
	await (0,external_node_events_namespaceObject.once)(stream, unpipeEvent, {signal});

	if (!stream.readable) {
		return (0,external_node_events_namespaceObject.once)(signal, 'abort', {signal});
	}

	streams.delete(stream);
	ended.delete(stream);
	aborted.delete(stream);
};

const endStream = stream => {
	if (stream.writable) {
		stream.end();
	}
};

const errorOrAbortStream = (stream, error) => {
	if (isAbortError(error)) {
		abortStream(stream);
	} else {
		errorStream(stream, error);
	}
};

// This is the error thrown by `finished()` on `stream.destroy()`
const isAbortError = error => error?.code === 'ERR_STREAM_PREMATURE_CLOSE';

const abortStream = stream => {
	if (stream.readable || stream.writable) {
		stream.destroy();
	}
};

// `stream.destroy(error)` crashes the process with `uncaughtException` if no `error` event listener exists on `stream`.
// We take care of error handling on user behalf, so we do not want this to happen.
const errorStream = (stream, error) => {
	if (!stream.destroyed) {
		stream.once('error', noop);
		stream.destroy(error);
	}
};

const noop = () => {};

const updateMaxListeners = (passThroughStream, increment) => {
	const maxListeners = passThroughStream.getMaxListeners();
	if (maxListeners !== 0 && maxListeners !== Number.POSITIVE_INFINITY) {
		passThroughStream.setMaxListeners(maxListeners + increment);
	}
};

// Number of times `passThroughStream.on()` is called regardless of streams:
//  - once due to `finished(passThroughStream)`
//  - once due to `on(passThroughStream)`
const PASSTHROUGH_LISTENERS_COUNT = 2;

// Number of times `passThroughStream.on()` is called per stream:
//  - once due to `stream.pipe(passThroughStream)`
const PASSTHROUGH_LISTENERS_PER_STREAM = 1;

;// CONCATENATED MODULE: ./node_modules/execa/lib/io/pipeline.js



// Similar to `Stream.pipeline(source, destination)`, but does not destroy standard streams
const pipeStreams = (source, destination) => {
	source.pipe(destination);
	onSourceFinish(source, destination);
	onDestinationFinish(source, destination);
};

// `source.pipe(destination)` makes `destination` end when `source` ends.
// But it does not propagate aborts or errors. This function does it.
const onSourceFinish = async (source, destination) => {
	if (isStandardStream(source) || isStandardStream(destination)) {
		return;
	}

	try {
		await (0,external_node_stream_promises_namespaceObject.finished)(source, {cleanup: true, readable: true, writable: false});
	} catch {}

	endDestinationStream(destination);
};

const endDestinationStream = destination => {
	if (destination.writable) {
		destination.end();
	}
};

// We do the same thing in the other direction as well.
const onDestinationFinish = async (source, destination) => {
	if (isStandardStream(source) || isStandardStream(destination)) {
		return;
	}

	try {
		await (0,external_node_stream_promises_namespaceObject.finished)(destination, {cleanup: true, readable: false, writable: true});
	} catch {}

	abortSourceStream(source);
};

const abortSourceStream = source => {
	if (source.readable) {
		source.destroy();
	}
};

;// CONCATENATED MODULE: ./node_modules/execa/lib/io/output-async.js






// Handle `input`, `inputFile`, `stdin`, `stdout` and `stderr` options, after spawning, in async mode
// When multiple input streams are used, we merge them to ensure the output stream ends only once each input stream has ended
const pipeOutputAsync = (subprocess, fileDescriptors, controller) => {
	const pipeGroups = new Map();

	for (const [fdNumber, {stdioItems, direction}] of Object.entries(fileDescriptors)) {
		for (const {stream} of stdioItems.filter(({type}) => TRANSFORM_TYPES.has(type))) {
			pipeTransform(subprocess, stream, direction, fdNumber);
		}

		for (const {stream} of stdioItems.filter(({type}) => !TRANSFORM_TYPES.has(type))) {
			pipeStdioItem({
				subprocess,
				stream,
				direction,
				fdNumber,
				pipeGroups,
				controller,
			});
		}
	}

	for (const [outputStream, inputStreams] of pipeGroups.entries()) {
		const inputStream = inputStreams.length === 1 ? inputStreams[0] : mergeStreams(inputStreams);
		pipeStreams(inputStream, outputStream);
	}
};

// When using transforms, `subprocess.stdin|stdout|stderr|stdio` is directly mutated
const pipeTransform = (subprocess, stream, direction, fdNumber) => {
	if (direction === 'output') {
		pipeStreams(subprocess.stdio[fdNumber], stream);
	} else {
		pipeStreams(stream, subprocess.stdio[fdNumber]);
	}

	const streamProperty = SUBPROCESS_STREAM_PROPERTIES[fdNumber];
	if (streamProperty !== undefined) {
		subprocess[streamProperty] = stream;
	}

	subprocess.stdio[fdNumber] = stream;
};

const SUBPROCESS_STREAM_PROPERTIES = ['stdin', 'stdout', 'stderr'];

// Most `std*` option values involve piping `subprocess.std*` to a stream.
// The stream is either passed by the user or created internally.
const pipeStdioItem = ({subprocess, stream, direction, fdNumber, pipeGroups, controller}) => {
	if (stream === undefined) {
		return;
	}

	setStandardStreamMaxListeners(stream, controller);

	const [inputStream, outputStream] = direction === 'output'
		? [stream, subprocess.stdio[fdNumber]]
		: [subprocess.stdio[fdNumber], stream];
	const outputStreams = pipeGroups.get(inputStream) ?? [];
	pipeGroups.set(inputStream, [...outputStreams, outputStream]);
};

// Multiple subprocesses might be piping from/to `process.std*` at the same time.
// This is not necessarily an error and should not print a `maxListeners` warning.
const setStandardStreamMaxListeners = (stream, {signal}) => {
	if (isStandardStream(stream)) {
		incrementMaxListeners(stream, MAX_LISTENERS_INCREMENT, signal);
	}
};

// `source.pipe(destination)` adds at most 1 listener for each event.
// If `stdin` option is an array, the values might be combined with `merge-streams`.
// That library also listens for `source` end, which adds 1 more listener.
const MAX_LISTENERS_INCREMENT = 2;

;// CONCATENATED MODULE: ./node_modules/signal-exit/dist/mjs/signals.js
/**
 * This is not the set of all possible signals.
 *
 * It IS, however, the set of all signals that trigger
 * an exit on either Linux or BSD systems.  Linux is a
 * superset of the signal names supported on BSD, and
 * the unknown signals just fail to register, so we can
 * catch that easily enough.
 *
 * Windows signals are a different set, since there are
 * signals that terminate Windows processes, but don't
 * terminate (or don't even exist) on Posix systems.
 *
 * Don't bother with SIGKILL.  It's uncatchable, which
 * means that we can't fire any callbacks anyway.
 *
 * If a user does happen to register a handler on a non-
 * fatal signal like SIGWINCH or something, and then
 * exit, it'll end up firing `process.emit('exit')`, so
 * the handler will be fired anyway.
 *
 * SIGBUS, SIGFPE, SIGSEGV and SIGILL, when not raised
 * artificially, inherently leave the process in a
 * state from which it is not safe to try and enter JS
 * listeners.
 */
const signals = [];
signals.push('SIGHUP', 'SIGINT', 'SIGTERM');
if (process.platform !== 'win32') {
    signals.push('SIGALRM', 'SIGABRT', 'SIGVTALRM', 'SIGXCPU', 'SIGXFSZ', 'SIGUSR2', 'SIGTRAP', 'SIGSYS', 'SIGQUIT', 'SIGIOT'
    // should detect profiler and enable/disable accordingly.
    // see #21
    // 'SIGPROF'
    );
}
if (process.platform === 'linux') {
    signals.push('SIGIO', 'SIGPOLL', 'SIGPWR', 'SIGSTKFLT');
}
//# sourceMappingURL=signals.js.map
;// CONCATENATED MODULE: ./node_modules/signal-exit/dist/mjs/index.js
// Note: since nyc uses this module to output coverage, any lines
// that are in the direct sync flow of nyc's outputCoverage are
// ignored, since we can never get coverage for them.
// grab a reference to node's real process object right away


const processOk = (process) => !!process &&
    typeof process === 'object' &&
    typeof process.removeListener === 'function' &&
    typeof process.emit === 'function' &&
    typeof process.reallyExit === 'function' &&
    typeof process.listeners === 'function' &&
    typeof process.kill === 'function' &&
    typeof process.pid === 'number' &&
    typeof process.on === 'function';
const kExitEmitter = Symbol.for('signal-exit emitter');
const global = globalThis;
const ObjectDefineProperty = Object.defineProperty.bind(Object);
// teeny special purpose ee
class Emitter {
    emitted = {
        afterExit: false,
        exit: false,
    };
    listeners = {
        afterExit: [],
        exit: [],
    };
    count = 0;
    id = Math.random();
    constructor() {
        if (global[kExitEmitter]) {
            return global[kExitEmitter];
        }
        ObjectDefineProperty(global, kExitEmitter, {
            value: this,
            writable: false,
            enumerable: false,
            configurable: false,
        });
    }
    on(ev, fn) {
        this.listeners[ev].push(fn);
    }
    removeListener(ev, fn) {
        const list = this.listeners[ev];
        const i = list.indexOf(fn);
        /* c8 ignore start */
        if (i === -1) {
            return;
        }
        /* c8 ignore stop */
        if (i === 0 && list.length === 1) {
            list.length = 0;
        }
        else {
            list.splice(i, 1);
        }
    }
    emit(ev, code, signal) {
        if (this.emitted[ev]) {
            return false;
        }
        this.emitted[ev] = true;
        let ret = false;
        for (const fn of this.listeners[ev]) {
            ret = fn(code, signal) === true || ret;
        }
        if (ev === 'exit') {
            ret = this.emit('afterExit', code, signal) || ret;
        }
        return ret;
    }
}
class SignalExitBase {
}
const signalExitWrap = (handler) => {
    return {
        onExit(cb, opts) {
            return handler.onExit(cb, opts);
        },
        load() {
            return handler.load();
        },
        unload() {
            return handler.unload();
        },
    };
};
class SignalExitFallback extends SignalExitBase {
    onExit() {
        return () => { };
    }
    load() { }
    unload() { }
}
class SignalExit extends SignalExitBase {
    // "SIGHUP" throws an `ENOSYS` error on Windows,
    // so use a supported signal instead
    /* c8 ignore start */
    #hupSig = mjs_process.platform === 'win32' ? 'SIGINT' : 'SIGHUP';
    /* c8 ignore stop */
    #emitter = new Emitter();
    #process;
    #originalProcessEmit;
    #originalProcessReallyExit;
    #sigListeners = {};
    #loaded = false;
    constructor(process) {
        super();
        this.#process = process;
        // { <signal>: <listener fn>, ... }
        this.#sigListeners = {};
        for (const sig of signals) {
            this.#sigListeners[sig] = () => {
                // If there are no other listeners, an exit is coming!
                // Simplest way: remove us and then re-send the signal.
                // We know that this will kill the process, so we can
                // safely emit now.
                const listeners = this.#process.listeners(sig);
                let { count } = this.#emitter;
                // This is a workaround for the fact that signal-exit v3 and signal
                // exit v4 are not aware of each other, and each will attempt to let
                // the other handle it, so neither of them do. To correct this, we
                // detect if we're the only handler *except* for previous versions
                // of signal-exit, and increment by the count of listeners it has
                // created.
                /* c8 ignore start */
                const p = process;
                if (typeof p.__signal_exit_emitter__ === 'object' &&
                    typeof p.__signal_exit_emitter__.count === 'number') {
                    count += p.__signal_exit_emitter__.count;
                }
                /* c8 ignore stop */
                if (listeners.length === count) {
                    this.unload();
                    const ret = this.#emitter.emit('exit', null, sig);
                    /* c8 ignore start */
                    const s = sig === 'SIGHUP' ? this.#hupSig : sig;
                    if (!ret)
                        process.kill(process.pid, s);
                    /* c8 ignore stop */
                }
            };
        }
        this.#originalProcessReallyExit = process.reallyExit;
        this.#originalProcessEmit = process.emit;
    }
    onExit(cb, opts) {
        /* c8 ignore start */
        if (!processOk(this.#process)) {
            return () => { };
        }
        /* c8 ignore stop */
        if (this.#loaded === false) {
            this.load();
        }
        const ev = opts?.alwaysLast ? 'afterExit' : 'exit';
        this.#emitter.on(ev, cb);
        return () => {
            this.#emitter.removeListener(ev, cb);
            if (this.#emitter.listeners['exit'].length === 0 &&
                this.#emitter.listeners['afterExit'].length === 0) {
                this.unload();
            }
        };
    }
    load() {
        if (this.#loaded) {
            return;
        }
        this.#loaded = true;
        // This is the number of onSignalExit's that are in play.
        // It's important so that we can count the correct number of
        // listeners on signals, and don't wait for the other one to
        // handle it instead of us.
        this.#emitter.count += 1;
        for (const sig of signals) {
            try {
                const fn = this.#sigListeners[sig];
                if (fn)
                    this.#process.on(sig, fn);
            }
            catch (_) { }
        }
        this.#process.emit = (ev, ...a) => {
            return this.#processEmit(ev, ...a);
        };
        this.#process.reallyExit = (code) => {
            return this.#processReallyExit(code);
        };
    }
    unload() {
        if (!this.#loaded) {
            return;
        }
        this.#loaded = false;
        signals.forEach(sig => {
            const listener = this.#sigListeners[sig];
            /* c8 ignore start */
            if (!listener) {
                throw new Error('Listener not defined for signal: ' + sig);
            }
            /* c8 ignore stop */
            try {
                this.#process.removeListener(sig, listener);
                /* c8 ignore start */
            }
            catch (_) { }
            /* c8 ignore stop */
        });
        this.#process.emit = this.#originalProcessEmit;
        this.#process.reallyExit = this.#originalProcessReallyExit;
        this.#emitter.count -= 1;
    }
    #processReallyExit(code) {
        /* c8 ignore start */
        if (!processOk(this.#process)) {
            return 0;
        }
        this.#process.exitCode = code || 0;
        /* c8 ignore stop */
        this.#emitter.emit('exit', this.#process.exitCode, null);
        return this.#originalProcessReallyExit.call(this.#process, this.#process.exitCode);
    }
    #processEmit(ev, ...args) {
        const og = this.#originalProcessEmit;
        if (ev === 'exit' && processOk(this.#process)) {
            if (typeof args[0] === 'number') {
                this.#process.exitCode = args[0];
                /* c8 ignore start */
            }
            /* c8 ignore start */
            const ret = og.call(this.#process, ev, ...args);
            /* c8 ignore start */
            this.#emitter.emit('exit', this.#process.exitCode, null);
            /* c8 ignore stop */
            return ret;
        }
        else {
            return og.call(this.#process, ev, ...args);
        }
    }
}
const mjs_process = globalThis.process;
// wrap so that we call the method on the actual handler, without
// exporting it directly.
const { 
/**
 * Called when the process is exiting, whether via signal, explicit
 * exit, or running out of stuff to do.
 *
 * If the global process object is not suitable for instrumentation,
 * then this will be a no-op.
 *
 * Returns a function that may be used to unload signal-exit.
 */
onExit, 
/**
 * Load the listeners.  Likely you never need to call this, unless
 * doing a rather deep integration with signal-exit functionality.
 * Mostly exposed for the benefit of testing.
 *
 * @internal
 */
load, 
/**
 * Unload the listeners.  Likely you never need to call this, unless
 * doing a rather deep integration with signal-exit functionality.
 * Mostly exposed for the benefit of testing.
 *
 * @internal
 */
unload, } = signalExitWrap(processOk(mjs_process) ? new SignalExit(mjs_process) : new SignalExitFallback());
//# sourceMappingURL=index.js.map
;// CONCATENATED MODULE: ./node_modules/execa/lib/terminate/cleanup.js



// If the `cleanup` option is used, call `subprocess.kill()` when the parent process exits
const cleanupOnExit = (subprocess, {cleanup, detached}, {signal}) => {
	if (!cleanup || detached) {
		return;
	}

	const removeExitHandler = onExit(() => {
		subprocess.kill();
	});
	(0,external_node_events_namespaceObject.addAbortListener)(signal, () => {
		removeExitHandler();
	});
};

;// CONCATENATED MODULE: ./node_modules/execa/lib/pipe/pipe-arguments.js





// Normalize and validate arguments passed to `source.pipe(destination)`
const normalizePipeArguments = ({source, sourcePromise, boundOptions, createNested}, ...pipeArguments) => {
	const startTime = getStartTime();
	const {
		destination,
		destinationStream,
		destinationError,
		from,
		unpipeSignal,
	} = getDestinationStream(boundOptions, createNested, pipeArguments);
	const {sourceStream, sourceError} = getSourceStream(source, from);
	const {options: sourceOptions, fileDescriptors} = SUBPROCESS_OPTIONS.get(source);
	return {
		sourcePromise,
		sourceStream,
		sourceOptions,
		sourceError,
		destination,
		destinationStream,
		destinationError,
		unpipeSignal,
		fileDescriptors,
		startTime,
	};
};

const getDestinationStream = (boundOptions, createNested, pipeArguments) => {
	try {
		const {
			destination,
			pipeOptions: {from, to, unpipeSignal} = {},
		} = getDestination(boundOptions, createNested, ...pipeArguments);
		const destinationStream = getToStream(destination, to);
		return {
			destination,
			destinationStream,
			from,
			unpipeSignal,
		};
	} catch (error) {
		return {destinationError: error};
	}
};

// Piping subprocesses can use three syntaxes:
//  - source.pipe('command', commandArguments, pipeOptionsOrDestinationOptions)
//  - source.pipe`command commandArgument` or source.pipe(pipeOptionsOrDestinationOptions)`command commandArgument`
//  - source.pipe(execa(...), pipeOptions)
const getDestination = (boundOptions, createNested, firstArgument, ...pipeArguments) => {
	if (Array.isArray(firstArgument)) {
		const destination = createNested(mapDestinationArguments, boundOptions)(firstArgument, ...pipeArguments);
		return {destination, pipeOptions: boundOptions};
	}

	if (typeof firstArgument === 'string' || firstArgument instanceof URL || isDenoExecPath(firstArgument)) {
		if (Object.keys(boundOptions).length > 0) {
			throw new TypeError('Please use .pipe("file", ..., options) or .pipe(execa("file", ..., options)) instead of .pipe(options)("file", ...).');
		}

		const [rawFile, rawArguments, rawOptions] = normalizeParameters(firstArgument, ...pipeArguments);
		const destination = createNested(mapDestinationArguments)(rawFile, rawArguments, rawOptions);
		return {destination, pipeOptions: rawOptions};
	}

	if (SUBPROCESS_OPTIONS.has(firstArgument)) {
		if (Object.keys(boundOptions).length > 0) {
			throw new TypeError('Please use .pipe(options)`command` or .pipe($(options)`command`) instead of .pipe(options)($`command`).');
		}

		return {destination: firstArgument, pipeOptions: pipeArguments[0]};
	}

	throw new TypeError(`The first argument must be a template string, an options object, or an Execa subprocess: ${firstArgument}`);
};

// Force `stdin: 'pipe'` with the destination subprocess
const mapDestinationArguments = ({options}) => ({options: {...options, stdin: 'pipe', piped: true}});

const getSourceStream = (source, from) => {
	try {
		const sourceStream = getFromStream(source, from);
		return {sourceStream};
	} catch (error) {
		return {sourceError: error};
	}
};

;// CONCATENATED MODULE: ./node_modules/execa/lib/pipe/throw.js



// When passing invalid arguments to `source.pipe()`, throw asynchronously.
// We also abort both subprocesses.
const handlePipeArgumentsError = ({
	sourceStream,
	sourceError,
	destinationStream,
	destinationError,
	fileDescriptors,
	sourceOptions,
	startTime,
}) => {
	const error = getPipeArgumentsError({
		sourceStream,
		sourceError,
		destinationStream,
		destinationError,
	});
	if (error !== undefined) {
		throw createNonCommandError({
			error,
			fileDescriptors,
			sourceOptions,
			startTime,
		});
	}
};

const getPipeArgumentsError = ({sourceStream, sourceError, destinationStream, destinationError}) => {
	if (sourceError !== undefined && destinationError !== undefined) {
		return destinationError;
	}

	if (destinationError !== undefined) {
		abortSourceStream(sourceStream);
		return destinationError;
	}

	if (sourceError !== undefined) {
		endDestinationStream(destinationStream);
		return sourceError;
	}
};

// Specific error return value when passing invalid arguments to `subprocess.pipe()` or when using `unpipeSignal`
const createNonCommandError = ({error, fileDescriptors, sourceOptions, startTime}) => makeEarlyError({
	error,
	command: PIPE_COMMAND_MESSAGE,
	escapedCommand: PIPE_COMMAND_MESSAGE,
	fileDescriptors,
	options: sourceOptions,
	startTime,
	isSync: false,
});

const PIPE_COMMAND_MESSAGE = 'source.pipe(destination)';

;// CONCATENATED MODULE: ./node_modules/execa/lib/pipe/sequence.js
// Like Bash, we await both subprocesses. This is unlike some other shells which only await the destination subprocess.
// Like Bash with the `pipefail` option, if either subprocess fails, the whole pipe fails.
// Like Bash, if both subprocesses fail, we return the failure of the destination.
// This ensures both subprocesses' errors are present, using `error.pipedFrom`.
const waitForBothSubprocesses = async subprocessPromises => {
	const [
		{status: sourceStatus, reason: sourceReason, value: sourceResult = sourceReason},
		{status: destinationStatus, reason: destinationReason, value: destinationResult = destinationReason},
	] = await subprocessPromises;

	if (!destinationResult.pipedFrom.includes(sourceResult)) {
		destinationResult.pipedFrom.push(sourceResult);
	}

	if (destinationStatus === 'rejected') {
		throw destinationResult;
	}

	if (sourceStatus === 'rejected') {
		throw sourceResult;
	}

	return destinationResult;
};

;// CONCATENATED MODULE: ./node_modules/execa/lib/pipe/streaming.js





// The piping behavior is like Bash.
// In particular, when one subprocess exits, the other is not terminated by a signal.
// Instead, its stdout (for the source) or stdin (for the destination) closes.
// If the subprocess uses it, it will make it error with SIGPIPE or EPIPE (for the source) or end (for the destination).
// If it does not use it, it will continue running.
// This allows for subprocesses to gracefully exit and lower the coupling between subprocesses.
const pipeSubprocessStream = (sourceStream, destinationStream, maxListenersController) => {
	const mergedStream = MERGED_STREAMS.has(destinationStream)
		? pipeMoreSubprocessStream(sourceStream, destinationStream)
		: pipeFirstSubprocessStream(sourceStream, destinationStream);
	incrementMaxListeners(sourceStream, SOURCE_LISTENERS_PER_PIPE, maxListenersController.signal);
	incrementMaxListeners(destinationStream, DESTINATION_LISTENERS_PER_PIPE, maxListenersController.signal);
	cleanupMergedStreamsMap(destinationStream);
	return mergedStream;
};

// We use `merge-streams` to allow for multiple sources to pipe to the same destination.
const pipeFirstSubprocessStream = (sourceStream, destinationStream) => {
	const mergedStream = mergeStreams([sourceStream]);
	pipeStreams(mergedStream, destinationStream);
	MERGED_STREAMS.set(destinationStream, mergedStream);
	return mergedStream;
};

const pipeMoreSubprocessStream = (sourceStream, destinationStream) => {
	const mergedStream = MERGED_STREAMS.get(destinationStream);
	mergedStream.add(sourceStream);
	return mergedStream;
};

const cleanupMergedStreamsMap = async destinationStream => {
	try {
		await (0,external_node_stream_promises_namespaceObject.finished)(destinationStream, {cleanup: true, readable: false, writable: true});
	} catch {}

	MERGED_STREAMS.delete(destinationStream);
};

const MERGED_STREAMS = new WeakMap();

// Number of listeners set up on `sourceStream` by each `sourceStream.pipe(destinationStream)`
// Those are added by `merge-streams`
const SOURCE_LISTENERS_PER_PIPE = 2;
// Number of listeners set up on `destinationStream` by each `sourceStream.pipe(destinationStream)`
// Those are added by `finished()` in `cleanupMergedStreamsMap()`
const DESTINATION_LISTENERS_PER_PIPE = 1;

;// CONCATENATED MODULE: ./node_modules/execa/lib/pipe/abort.js



// When passing an `unpipeSignal` option, abort piping when the signal is aborted.
// However, do not terminate the subprocesses.
const unpipeOnAbort = (unpipeSignal, unpipeContext) => unpipeSignal === undefined
	? []
	: [unpipeOnSignalAbort(unpipeSignal, unpipeContext)];

const unpipeOnSignalAbort = async (unpipeSignal, {sourceStream, mergedStream, fileDescriptors, sourceOptions, startTime}) => {
	await (0,external_node_util_namespaceObject.aborted)(unpipeSignal, sourceStream);
	await mergedStream.remove(sourceStream);
	const error = new Error('Pipe canceled by `unpipeSignal` option.');
	throw createNonCommandError({
		error,
		fileDescriptors,
		sourceOptions,
		startTime,
	});
};

;// CONCATENATED MODULE: ./node_modules/execa/lib/pipe/setup.js







// Pipe a subprocess' `stdout`/`stderr`/`stdio` into another subprocess' `stdin`
const pipeToSubprocess = (sourceInfo, ...pipeArguments) => {
	if (isPlainObject(pipeArguments[0])) {
		return pipeToSubprocess.bind(undefined, {
			...sourceInfo,
			boundOptions: {...sourceInfo.boundOptions, ...pipeArguments[0]},
		});
	}

	const {destination, ...normalizedInfo} = normalizePipeArguments(sourceInfo, ...pipeArguments);
	const promise = handlePipePromise({...normalizedInfo, destination});
	promise.pipe = pipeToSubprocess.bind(undefined, {
		...sourceInfo,
		source: destination,
		sourcePromise: promise,
		boundOptions: {},
	});
	return promise;
};

// Asynchronous logic when piping subprocesses
const handlePipePromise = async ({
	sourcePromise,
	sourceStream,
	sourceOptions,
	sourceError,
	destination,
	destinationStream,
	destinationError,
	unpipeSignal,
	fileDescriptors,
	startTime,
}) => {
	const subprocessPromises = getSubprocessPromises(sourcePromise, destination);
	handlePipeArgumentsError({
		sourceStream,
		sourceError,
		destinationStream,
		destinationError,
		fileDescriptors,
		sourceOptions,
		startTime,
	});
	const maxListenersController = new AbortController();
	try {
		const mergedStream = pipeSubprocessStream(sourceStream, destinationStream, maxListenersController);
		return await Promise.race([
			waitForBothSubprocesses(subprocessPromises),
			...unpipeOnAbort(unpipeSignal, {
				sourceStream,
				mergedStream,
				sourceOptions,
				fileDescriptors,
				startTime,
			}),
		]);
	} finally {
		maxListenersController.abort();
	}
};

// `.pipe()` awaits the subprocess promises.
// When invalid arguments are passed to `.pipe()`, we throw an error, which prevents awaiting them.
// We need to ensure this does not create unhandled rejections.
const getSubprocessPromises = (sourcePromise, destination) => Promise.allSettled([sourcePromise, destination]);

;// CONCATENATED MODULE: ./node_modules/get-stream/source/utils.js
const utils_identity = value => value;

const utils_noop = () => undefined;

const getContentsProperty = ({contents}) => contents;

const throwObjectStream = chunk => {
	throw new Error(`Streams in object mode are not supported: ${String(chunk)}`);
};

const getLengthProperty = convertedChunk => convertedChunk.length;

;// CONCATENATED MODULE: ./node_modules/get-stream/source/array.js



async function getStreamAsArray(stream, options) {
	return getStreamContents(stream, arrayMethods, options);
}

const initArray = () => ({contents: []});

const increment = () => 1;

const addArrayChunk = (convertedChunk, {contents}) => {
	contents.push(convertedChunk);
	return contents;
};

const arrayMethods = {
	init: initArray,
	convertChunk: {
		string: utils_identity,
		buffer: utils_identity,
		arrayBuffer: utils_identity,
		dataView: utils_identity,
		typedArray: utils_identity,
		others: utils_identity,
	},
	getSize: increment,
	truncateChunk: utils_noop,
	addChunk: addArrayChunk,
	getFinalChunk: utils_noop,
	finalize: getContentsProperty,
};

;// CONCATENATED MODULE: ./node_modules/get-stream/source/array-buffer.js



async function getStreamAsArrayBuffer(stream, options) {
	return getStreamContents(stream, arrayBufferMethods, options);
}

const initArrayBuffer = () => ({contents: new ArrayBuffer(0)});

const useTextEncoder = chunk => array_buffer_textEncoder.encode(chunk);
const array_buffer_textEncoder = new TextEncoder();

const useUint8Array = chunk => new Uint8Array(chunk);

const useUint8ArrayWithOffset = chunk => new Uint8Array(chunk.buffer, chunk.byteOffset, chunk.byteLength);

const truncateArrayBufferChunk = (convertedChunk, chunkSize) => convertedChunk.slice(0, chunkSize);

// `contents` is an increasingly growing `Uint8Array`.
const addArrayBufferChunk = (convertedChunk, {contents, length: previousLength}, length) => {
	const newContents = hasArrayBufferResize() ? resizeArrayBuffer(contents, length) : resizeArrayBufferSlow(contents, length);
	new Uint8Array(newContents).set(convertedChunk, previousLength);
	return newContents;
};

// Without `ArrayBuffer.resize()`, `contents` size is always a power of 2.
// This means its last bytes are zeroes (not stream data), which need to be
// trimmed at the end with `ArrayBuffer.slice()`.
const resizeArrayBufferSlow = (contents, length) => {
	if (length <= contents.byteLength) {
		return contents;
	}

	const arrayBuffer = new ArrayBuffer(getNewContentsLength(length));
	new Uint8Array(arrayBuffer).set(new Uint8Array(contents), 0);
	return arrayBuffer;
};

// With `ArrayBuffer.resize()`, `contents` size matches exactly the size of
// the stream data. It does not include extraneous zeroes to trim at the end.
// The underlying `ArrayBuffer` does allocate a number of bytes that is a power
// of 2, but those bytes are only visible after calling `ArrayBuffer.resize()`.
const resizeArrayBuffer = (contents, length) => {
	if (length <= contents.maxByteLength) {
		contents.resize(length);
		return contents;
	}

	const arrayBuffer = new ArrayBuffer(length, {maxByteLength: getNewContentsLength(length)});
	new Uint8Array(arrayBuffer).set(new Uint8Array(contents), 0);
	return arrayBuffer;
};

// Retrieve the closest `length` that is both >= and a power of 2
const getNewContentsLength = length => SCALE_FACTOR ** Math.ceil(Math.log(length) / Math.log(SCALE_FACTOR));

const SCALE_FACTOR = 2;

const finalizeArrayBuffer = ({contents, length}) => hasArrayBufferResize() ? contents : contents.slice(0, length);

// `ArrayBuffer.slice()` is slow. When `ArrayBuffer.resize()` is available
// (Node >=20.0.0, Safari >=16.4 and Chrome), we can use it instead.
// eslint-disable-next-line no-warning-comments
// TODO: remove after dropping support for Node 20.
// eslint-disable-next-line no-warning-comments
// TODO: use `ArrayBuffer.transferToFixedLength()` instead once it is available
const hasArrayBufferResize = () => 'resize' in ArrayBuffer.prototype;

const arrayBufferMethods = {
	init: initArrayBuffer,
	convertChunk: {
		string: useTextEncoder,
		buffer: useUint8Array,
		arrayBuffer: useUint8Array,
		dataView: useUint8ArrayWithOffset,
		typedArray: useUint8ArrayWithOffset,
		others: throwObjectStream,
	},
	getSize: getLengthProperty,
	truncateChunk: truncateArrayBufferChunk,
	addChunk: addArrayBufferChunk,
	getFinalChunk: utils_noop,
	finalize: finalizeArrayBuffer,
};

;// CONCATENATED MODULE: ./node_modules/get-stream/source/string.js



async function getStreamAsString(stream, options) {
	return getStreamContents(stream, stringMethods, options);
}

const initString = () => ({contents: '', textDecoder: new TextDecoder()});

const useTextDecoder = (chunk, {textDecoder}) => textDecoder.decode(chunk, {stream: true});

const addStringChunk = (convertedChunk, {contents}) => contents + convertedChunk;

const truncateStringChunk = (convertedChunk, chunkSize) => convertedChunk.slice(0, chunkSize);

const getFinalStringChunk = ({textDecoder}) => {
	const finalChunk = textDecoder.decode();
	return finalChunk === '' ? undefined : finalChunk;
};

const stringMethods = {
	init: initString,
	convertChunk: {
		string: utils_identity,
		buffer: useTextDecoder,
		arrayBuffer: useTextDecoder,
		dataView: useTextDecoder,
		typedArray: useTextDecoder,
		others: throwObjectStream,
	},
	getSize: getLengthProperty,
	truncateChunk: truncateStringChunk,
	addChunk: addStringChunk,
	getFinalChunk: getFinalStringChunk,
	finalize: getContentsProperty,
};

;// CONCATENATED MODULE: ./node_modules/execa/lib/io/iterate.js






// Iterate over lines of `subprocess.stdout`, used by `subprocess.readable|duplex|iterable()`
const iterateOnSubprocessStream = ({subprocessStdout, subprocess, binary, shouldEncode, encoding, preserveNewlines}) => {
	const controller = new AbortController();
	stopReadingOnExit(subprocess, controller);
	return iterateOnStream({
		stream: subprocessStdout,
		controller,
		binary,
		shouldEncode: !subprocessStdout.readableObjectMode && shouldEncode,
		encoding,
		shouldSplit: !subprocessStdout.readableObjectMode,
		preserveNewlines,
	});
};

const stopReadingOnExit = async (subprocess, controller) => {
	try {
		await subprocess;
	} catch {} finally {
		controller.abort();
	}
};

// Iterate over lines of `subprocess.stdout`, used by `result.stdout` and the `verbose: 'full'` option.
// Applies the `lines` and `encoding` options.
const iterateForResult = ({stream, onStreamEnd, lines, encoding, stripFinalNewline, allMixed}) => {
	const controller = new AbortController();
	stopReadingOnStreamEnd(onStreamEnd, controller, stream);
	const objectMode = stream.readableObjectMode && !allMixed;
	return iterateOnStream({
		stream,
		controller,
		binary: encoding === 'buffer',
		shouldEncode: !objectMode,
		encoding,
		shouldSplit: !objectMode && lines,
		preserveNewlines: !stripFinalNewline,
	});
};

const stopReadingOnStreamEnd = async (onStreamEnd, controller, stream) => {
	try {
		await onStreamEnd;
	} catch {
		stream.destroy();
	} finally {
		controller.abort();
	}
};

const iterateOnStream = ({stream, controller, binary, shouldEncode, encoding, shouldSplit, preserveNewlines}) => {
	const onStdoutChunk = (0,external_node_events_namespaceObject.on)(stream, 'data', {
		signal: controller.signal,
		highWaterMark: HIGH_WATER_MARK,
		// Backward compatibility with older name for this option
		// See https://github.com/nodejs/node/pull/52080#discussion_r1525227861
		// @todo Remove after removing support for Node 21
		highWatermark: HIGH_WATER_MARK,
	});
	return iterateOnData({
		onStdoutChunk,
		controller,
		binary,
		shouldEncode,
		encoding,
		shouldSplit,
		preserveNewlines,
	});
};

const DEFAULT_OBJECT_HIGH_WATER_MARK = (0,external_node_stream_namespaceObject.getDefaultHighWaterMark)(true);

// The `highWaterMark` of `events.on()` is measured in number of events, not in bytes.
// Not knowing the average amount of bytes per `data` event, we use the same heuristic as streams in objectMode, since they have the same issue.
// Therefore, we use the value of `getDefaultHighWaterMark(true)`.
// Note: this option does not exist on Node 18, but this is ok since the logic works without it. It just consumes more memory.
const HIGH_WATER_MARK = DEFAULT_OBJECT_HIGH_WATER_MARK;

const iterateOnData = async function * ({onStdoutChunk, controller, binary, shouldEncode, encoding, shouldSplit, preserveNewlines}) {
	const generators = getGenerators({
		binary,
		shouldEncode,
		encoding,
		shouldSplit,
		preserveNewlines,
	});

	try {
		for await (const [chunk] of onStdoutChunk) {
			yield * transformChunkSync(chunk, generators, 0);
		}
	} catch (error) {
		if (!controller.signal.aborted) {
			throw error;
		}
	} finally {
		yield * finalChunksSync(generators);
	}
};

const getGenerators = ({binary, shouldEncode, encoding, shouldSplit, preserveNewlines}) => [
	getEncodingTransformGenerator(binary, encoding, !shouldEncode),
	getSplitLinesGenerator(binary, preserveNewlines, !shouldSplit, {}),
].filter(Boolean);

;// CONCATENATED MODULE: ./node_modules/execa/lib/io/contents.js








// Retrieve `result.stdout|stderr|all|stdio[*]`
const getStreamOutput = async ({stream, onStreamEnd, fdNumber, encoding, buffer, maxBuffer, lines, allMixed, stripFinalNewline, verboseInfo, streamInfo}) => {
	const logPromise = logOutputAsync({
		stream,
		onStreamEnd,
		fdNumber,
		encoding,
		allMixed,
		verboseInfo,
		streamInfo,
	});

	if (!buffer) {
		await Promise.all([resumeStream(stream), logPromise]);
		return;
	}

	const stripFinalNewlineValue = getStripFinalNewline(stripFinalNewline, fdNumber);
	const iterable = iterateForResult({
		stream,
		onStreamEnd,
		lines,
		encoding,
		stripFinalNewline: stripFinalNewlineValue,
		allMixed,
	});
	const [output] = await Promise.all([
		contents_getStreamContents({
			stream,
			iterable,
			fdNumber,
			encoding,
			maxBuffer,
			lines,
		}),
		logPromise,
	]);
	return output;
};

const logOutputAsync = async ({stream, onStreamEnd, fdNumber, encoding, allMixed, verboseInfo, streamInfo: {fileDescriptors}}) => {
	if (!shouldLogOutput({
		stdioItems: fileDescriptors[fdNumber]?.stdioItems,
		encoding,
		verboseInfo,
		fdNumber,
	})) {
		return;
	}

	const linesIterable = iterateForResult({
		stream,
		onStreamEnd,
		lines: true,
		encoding,
		stripFinalNewline: true,
		allMixed,
	});
	await logLines(linesIterable, stream, fdNumber, verboseInfo);
};

// When using `buffer: false`, users need to read `subprocess.stdout|stderr|all` right away
// See https://github.com/sindresorhus/execa/issues/730 and https://github.com/sindresorhus/execa/pull/729#discussion_r1465496310
const resumeStream = async stream => {
	await (0,promises_namespaceObject.setImmediate)();
	if (stream.readableFlowing === null) {
		stream.resume();
	}
};

const contents_getStreamContents = async ({stream, stream: {readableObjectMode}, iterable, fdNumber, encoding, maxBuffer, lines}) => {
	try {
		if (readableObjectMode || lines) {
			return await getStreamAsArray(iterable, {maxBuffer});
		}

		if (encoding === 'buffer') {
			return new Uint8Array(await getStreamAsArrayBuffer(iterable, {maxBuffer}));
		}

		return await getStreamAsString(iterable, {maxBuffer});
	} catch (error) {
		return handleBufferedData(handleMaxBuffer({
			error,
			stream,
			readableObjectMode,
			lines,
			encoding,
			fdNumber,
		}));
	}
};

// On failure, `result.stdout|stderr|all` should contain the currently buffered stream
// They are automatically closed and flushed by Node.js when the subprocess exits
// When `buffer` is `false`, `streamPromise` is `undefined` and there is no buffered data to retrieve
const getBufferedData = async streamPromise => {
	try {
		return await streamPromise;
	} catch (error) {
		return handleBufferedData(error);
	}
};

// Ensure we are returning Uint8Arrays when using `encoding: 'buffer'`
const handleBufferedData = ({bufferedData}) => isArrayBuffer(bufferedData)
	? new Uint8Array(bufferedData)
	: bufferedData;

;// CONCATENATED MODULE: ./node_modules/execa/lib/resolve/wait-stream.js


// Wraps `finished(stream)` to handle the following case:
//  - When the subprocess exits, Node.js automatically calls `subprocess.stdin.destroy()`, which we need to ignore.
//  - However, we still need to throw if `subprocess.stdin.destroy()` is called before subprocess exit.
const waitForStream = async (stream, fdNumber, streamInfo, {isSameDirection, stopOnExit = false} = {}) => {
	const state = handleStdinDestroy(stream, streamInfo);
	const abortController = new AbortController();
	try {
		await Promise.race([
			...(stopOnExit ? [streamInfo.exitPromise] : []),
			(0,external_node_stream_promises_namespaceObject.finished)(stream, {cleanup: true, signal: abortController.signal}),
		]);
	} catch (error) {
		if (!state.stdinCleanedUp) {
			handleStreamError(error, fdNumber, streamInfo, isSameDirection);
		}
	} finally {
		abortController.abort();
	}
};

// If `subprocess.stdin` is destroyed before being fully written to, it is considered aborted and should throw an error.
// This can happen for example when user called `subprocess.stdin.destroy()` before `subprocess.stdin.end()`.
// However, Node.js calls `subprocess.stdin.destroy()` on exit for cleanup purposes.
// https://github.com/nodejs/node/blob/0b4cdb4b42956cbd7019058e409e06700a199e11/lib/internal/child_process.js#L278
// This is normal and should not throw an error.
// Therefore, we need to differentiate between both situations to know whether to throw an error.
// Unfortunately, events (`close`, `error`, `end`, `exit`) cannot be used because `.destroy()` can take an arbitrary amount of time.
// For example, `stdin: 'pipe'` is implemented as a TCP socket, and its `.destroy()` method waits for TCP disconnection.
// Therefore `.destroy()` might end before or after subprocess exit, based on OS speed and load.
// The only way to detect this is to spy on `subprocess.stdin._destroy()` by wrapping it.
// If `subprocess.exitCode` or `subprocess.signalCode` is set, it means `.destroy()` is being called by Node.js itself.
const handleStdinDestroy = (stream, {originalStreams: [originalStdin], subprocess}) => {
	const state = {stdinCleanedUp: false};
	if (stream === originalStdin) {
		spyOnStdinDestroy(stream, subprocess, state);
	}

	return state;
};

const spyOnStdinDestroy = (subprocessStdin, subprocess, state) => {
	const {_destroy} = subprocessStdin;
	subprocessStdin._destroy = (...destroyArguments) => {
		setStdinCleanedUp(subprocess, state);
		_destroy.call(subprocessStdin, ...destroyArguments);
	};
};

const setStdinCleanedUp = ({exitCode, signalCode}, state) => {
	if (exitCode !== null || signalCode !== null) {
		state.stdinCleanedUp = true;
	}
};

// We ignore EPIPEs on writable streams and aborts on readable streams since those can happen normally.
// When one stream errors, the error is propagated to the other streams on the same file descriptor.
// Those other streams might have a different direction due to the above.
// When this happens, the direction of both the initial stream and the others should then be taken into account.
// Therefore, we keep track of whether a stream error is currently propagating.
const handleStreamError = (error, fdNumber, streamInfo, isSameDirection) => {
	if (!shouldIgnoreStreamError(error, fdNumber, streamInfo, isSameDirection)) {
		throw error;
	}
};

const shouldIgnoreStreamError = (error, fdNumber, streamInfo, isSameDirection = true) => {
	if (streamInfo.propagating) {
		return isStreamEpipe(error) || isStreamAbort(error);
	}

	streamInfo.propagating = true;
	return isInputFileDescriptor(streamInfo, fdNumber) === isSameDirection
		? isStreamEpipe(error)
		: isStreamAbort(error);
};

// Unfortunately, we cannot use the stream's class or properties to know whether it is readable or writable.
// For example, `subprocess.stdin` is technically a Duplex, but can only be used as a writable.
// Therefore, we need to use the file descriptor's direction (`stdin` is input, `stdout` is output, etc.).
// However, while `subprocess.std*` and transforms follow that direction, any stream passed the `std*` option has the opposite direction.
// For example, `subprocess.stdin` is a writable, but the `stdin` option is a readable.
const isInputFileDescriptor = ({fileDescriptors}, fdNumber) => fdNumber !== 'all' && fileDescriptors[fdNumber].direction === 'input';

// When `stream.destroy()` is called without an `error` argument, stream is aborted.
// This is the only way to abort a readable stream, which can be useful in some instances.
// Therefore, we ignore this error on readable streams.
const isStreamAbort = error => error?.code === 'ERR_STREAM_PREMATURE_CLOSE';

// When `stream.write()` is called but the underlying source has been closed, `EPIPE` is emitted.
// When piping subprocesses, the source subprocess usually decides when to stop piping.
// However, there are some instances when the destination does instead, such as `... | head -n1`.
// It notifies the source by using `EPIPE`.
// Therefore, we ignore this error on writable streams.
const isStreamEpipe = error => error?.code === 'EPIPE';

;// CONCATENATED MODULE: ./node_modules/execa/lib/resolve/stdio.js



// Read the contents of `subprocess.std*` and|or wait for its completion
const waitForStdioStreams = ({subprocess, encoding, buffer, maxBuffer, lines, stripFinalNewline, verboseInfo, streamInfo}) => subprocess.stdio.map((stream, fdNumber) => waitForSubprocessStream({
	stream,
	fdNumber,
	encoding,
	buffer: buffer[fdNumber],
	maxBuffer: maxBuffer[fdNumber],
	lines: lines[fdNumber],
	allMixed: false,
	stripFinalNewline,
	verboseInfo,
	streamInfo,
}));

// Read the contents of `subprocess.std*` or `subprocess.all` and|or wait for its completion
const waitForSubprocessStream = async ({stream, fdNumber, encoding, buffer, maxBuffer, lines, allMixed, stripFinalNewline, verboseInfo, streamInfo}) => {
	if (!stream) {
		return;
	}

	const onStreamEnd = waitForStream(stream, fdNumber, streamInfo);
	if (isInputFileDescriptor(streamInfo, fdNumber)) {
		await onStreamEnd;
		return;
	}

	const [output] = await Promise.all([
		getStreamOutput({
			stream,
			onStreamEnd,
			fdNumber,
			encoding,
			buffer,
			maxBuffer,
			lines,
			allMixed,
			stripFinalNewline,
			verboseInfo,
			streamInfo,
		}),
		onStreamEnd,
	]);
	return output;
};

;// CONCATENATED MODULE: ./node_modules/execa/lib/resolve/all-async.js



// `all` interleaves `stdout` and `stderr`
const makeAllStream = ({stdout, stderr}, {all}) => all && (stdout || stderr)
	? mergeStreams([stdout, stderr].filter(Boolean))
	: undefined;

// Read the contents of `subprocess.all` and|or wait for its completion
const waitForAllStream = ({subprocess, encoding, buffer, maxBuffer, lines, stripFinalNewline, verboseInfo, streamInfo}) => waitForSubprocessStream({
	...getAllStream(subprocess, buffer),
	fdNumber: 'all',
	encoding,
	maxBuffer: maxBuffer[1] + maxBuffer[2],
	lines: lines[1] || lines[2],
	allMixed: getAllMixed(subprocess),
	stripFinalNewline,
	verboseInfo,
	streamInfo,
});

const getAllStream = ({stdout, stderr, all}, [, bufferStdout, bufferStderr]) => {
	const buffer = bufferStdout || bufferStderr;
	if (!buffer) {
		return {stream: all, buffer};
	}

	if (!bufferStdout) {
		return {stream: stderr, buffer};
	}

	if (!bufferStderr) {
		return {stream: stdout, buffer};
	}

	return {stream: all, buffer};
};

// When `subprocess.stdout` is in objectMode but not `subprocess.stderr` (or the opposite), we need to use both:
//  - `getStreamAsArray()` for the chunks in objectMode, to return as an array without changing each chunk
//  - `getStreamAsArrayBuffer()` or `getStream()` for the chunks not in objectMode, to convert them from Buffers to string or Uint8Array
// We do this by emulating the Buffer -> string|Uint8Array conversion performed by `get-stream` with our own, which is identical.
const getAllMixed = ({all, stdout, stderr}) => all
	&& stdout
	&& stderr
	&& stdout.readableObjectMode !== stderr.readableObjectMode;

;// CONCATENATED MODULE: ./node_modules/execa/lib/verbose/ipc.js



// When `verbose` is `'full'`, print IPC messages from the subprocess
const shouldLogIpc = verboseInfo => isFullVerbose(verboseInfo, 'ipc');

const logIpcOutput = (message, verboseInfo) => {
	const verboseMessage = serializeVerboseMessage(message);
	verboseLog({
		type: 'ipc',
		verboseMessage,
		fdNumber: 'ipc',
		verboseInfo,
	});
};

;// CONCATENATED MODULE: ./node_modules/execa/lib/ipc/buffer-messages.js





// Iterate through IPC messages sent by the subprocess
const waitForIpcOutput = async ({
	subprocess,
	buffer: bufferArray,
	maxBuffer: maxBufferArray,
	ipc,
	ipcOutput,
	verboseInfo,
}) => {
	if (!ipc) {
		return ipcOutput;
	}

	const isVerbose = shouldLogIpc(verboseInfo);
	const buffer = getFdSpecificValue(bufferArray, 'ipc');
	const maxBuffer = getFdSpecificValue(maxBufferArray, 'ipc');

	for await (const message of loopOnMessages({
		anyProcess: subprocess,
		channel: subprocess.channel,
		isSubprocess: false,
		ipc,
		shouldAwait: false,
		reference: true,
	})) {
		if (buffer) {
			checkIpcMaxBuffer(subprocess, ipcOutput, maxBuffer);
			ipcOutput.push(message);
		}

		if (isVerbose) {
			logIpcOutput(message, verboseInfo);
		}
	}

	return ipcOutput;
};

const getBufferedIpcOutput = async (ipcOutputPromise, ipcOutput) => {
	await Promise.allSettled([ipcOutputPromise]);
	return ipcOutput;
};

;// CONCATENATED MODULE: ./node_modules/execa/lib/resolve/wait-subprocess.js















// Retrieve result of subprocess: exit code, signal, error, streams (stdout/stderr/all)
const waitForSubprocessResult = async ({
	subprocess,
	options: {
		encoding,
		buffer,
		maxBuffer,
		lines,
		timeoutDuration: timeout,
		cancelSignal,
		gracefulCancel,
		forceKillAfterDelay,
		stripFinalNewline,
		ipc,
		ipcInput,
	},
	context,
	verboseInfo,
	fileDescriptors,
	originalStreams,
	onInternalError,
	controller,
}) => {
	const exitPromise = waitForExit(subprocess, context);
	const streamInfo = {
		originalStreams,
		fileDescriptors,
		subprocess,
		exitPromise,
		propagating: false,
	};

	const stdioPromises = waitForStdioStreams({
		subprocess,
		encoding,
		buffer,
		maxBuffer,
		lines,
		stripFinalNewline,
		verboseInfo,
		streamInfo,
	});
	const allPromise = waitForAllStream({
		subprocess,
		encoding,
		buffer,
		maxBuffer,
		lines,
		stripFinalNewline,
		verboseInfo,
		streamInfo,
	});
	const ipcOutput = [];
	const ipcOutputPromise = waitForIpcOutput({
		subprocess,
		buffer,
		maxBuffer,
		ipc,
		ipcOutput,
		verboseInfo,
	});
	const originalPromises = waitForOriginalStreams(originalStreams, subprocess, streamInfo);
	const customStreamsEndPromises = waitForCustomStreamsEnd(fileDescriptors, streamInfo);

	try {
		return await Promise.race([
			Promise.all([
				{},
				waitForSuccessfulExit(exitPromise),
				Promise.all(stdioPromises),
				allPromise,
				ipcOutputPromise,
				sendIpcInput(subprocess, ipcInput),
				...originalPromises,
				...customStreamsEndPromises,
			]),
			onInternalError,
			throwOnSubprocessError(subprocess, controller),
			...throwOnTimeout(subprocess, timeout, context, controller),
			...throwOnCancel({
				subprocess,
				cancelSignal,
				gracefulCancel,
				context,
				controller,
			}),
			...throwOnGracefulCancel({
				subprocess,
				cancelSignal,
				gracefulCancel,
				forceKillAfterDelay,
				context,
				controller,
			}),
		]);
	} catch (error) {
		context.terminationReason ??= 'other';
		return Promise.all([
			{error},
			exitPromise,
			Promise.all(stdioPromises.map(stdioPromise => getBufferedData(stdioPromise))),
			getBufferedData(allPromise),
			getBufferedIpcOutput(ipcOutputPromise, ipcOutput),
			Promise.allSettled(originalPromises),
			Promise.allSettled(customStreamsEndPromises),
		]);
	}
};

// Transforms replace `subprocess.std*`, which means they are not exposed to users.
// However, we still want to wait for their completion.
const waitForOriginalStreams = (originalStreams, subprocess, streamInfo) =>
	originalStreams.map((stream, fdNumber) => stream === subprocess.stdio[fdNumber]
		? undefined
		: waitForStream(stream, fdNumber, streamInfo));

// Some `stdin`/`stdout`/`stderr` options create a stream, e.g. when passing a file path.
// The `.pipe()` method automatically ends that stream when `subprocess` ends.
// This makes sure we wait for the completion of those streams, in order to catch any error.
const waitForCustomStreamsEnd = (fileDescriptors, streamInfo) => fileDescriptors.flatMap(({stdioItems}, fdNumber) => stdioItems
	.filter(({value, stream = value}) => isStream(stream, {checkOpen: false}) && !isStandardStream(stream))
	.map(({type, value, stream = value}) => waitForStream(stream, fdNumber, streamInfo, {
		isSameDirection: TRANSFORM_TYPES.has(type),
		stopOnExit: type === 'native',
	})));

// Fails when the subprocess emits an `error` event
const throwOnSubprocessError = async (subprocess, {signal}) => {
	const [error] = await (0,external_node_events_namespaceObject.once)(subprocess, 'error', {signal});
	throw error;
};

;// CONCATENATED MODULE: ./node_modules/execa/lib/convert/concurrent.js


// When using multiple `.readable()`/`.writable()`/`.duplex()`, `final` and `destroy` should wait for other streams
const initializeConcurrentStreams = () => ({
	readableDestroy: new WeakMap(),
	writableFinal: new WeakMap(),
	writableDestroy: new WeakMap(),
});

// Each file descriptor + `waitName` has its own array of promises.
// Each promise is a single `.readable()`/`.writable()`/`.duplex()` call.
const addConcurrentStream = (concurrentStreams, stream, waitName) => {
	const weakMap = concurrentStreams[waitName];
	if (!weakMap.has(stream)) {
		weakMap.set(stream, []);
	}

	const promises = weakMap.get(stream);
	const promise = createDeferred();
	promises.push(promise);
	const resolve = promise.resolve.bind(promise);
	return {resolve, promises};
};

// Wait for other streams, but stop waiting when subprocess ends
const waitForConcurrentStreams = async ({resolve, promises}, subprocess) => {
	resolve();
	const [isSubprocessExit] = await Promise.race([
		Promise.allSettled([true, subprocess]),
		Promise.all([false, ...promises]),
	]);
	return !isSubprocessExit;
};

;// CONCATENATED MODULE: ./node_modules/execa/lib/convert/shared.js



const safeWaitForSubprocessStdin = async subprocessStdin => {
	if (subprocessStdin === undefined) {
		return;
	}

	try {
		await waitForSubprocessStdin(subprocessStdin);
	} catch {}
};

const safeWaitForSubprocessStdout = async subprocessStdout => {
	if (subprocessStdout === undefined) {
		return;
	}

	try {
		await waitForSubprocessStdout(subprocessStdout);
	} catch {}
};

const waitForSubprocessStdin = async subprocessStdin => {
	await (0,external_node_stream_promises_namespaceObject.finished)(subprocessStdin, {cleanup: true, readable: false, writable: true});
};

const waitForSubprocessStdout = async subprocessStdout => {
	await (0,external_node_stream_promises_namespaceObject.finished)(subprocessStdout, {cleanup: true, readable: true, writable: false});
};

// When `readable` or `writable` aborts/errors, awaits the subprocess, for the reason mentioned above
const waitForSubprocess = async (subprocess, error) => {
	await subprocess;
	if (error) {
		throw error;
	}
};

const destroyOtherStream = (stream, isOpen, error) => {
	if (error && !isStreamAbort(error)) {
		stream.destroy(error);
	} else if (isOpen) {
		stream.destroy();
	}
};

;// CONCATENATED MODULE: ./node_modules/execa/lib/convert/readable.js









// Create a `Readable` stream that forwards from `stdout` and awaits the subprocess
const createReadable = ({subprocess, concurrentStreams, encoding}, {from, binary: binaryOption = true, preserveNewlines = true} = {}) => {
	const binary = binaryOption || BINARY_ENCODINGS.has(encoding);
	const {subprocessStdout, waitReadableDestroy} = getSubprocessStdout(subprocess, from, concurrentStreams);
	const {readableEncoding, readableObjectMode, readableHighWaterMark} = getReadableOptions(subprocessStdout, binary);
	const {read, onStdoutDataDone} = getReadableMethods({
		subprocessStdout,
		subprocess,
		binary,
		encoding,
		preserveNewlines,
	});
	const readable = new external_node_stream_namespaceObject.Readable({
		read,
		destroy: (0,external_node_util_namespaceObject.callbackify)(onReadableDestroy.bind(undefined, {subprocessStdout, subprocess, waitReadableDestroy})),
		highWaterMark: readableHighWaterMark,
		objectMode: readableObjectMode,
		encoding: readableEncoding,
	});
	onStdoutFinished({
		subprocessStdout,
		onStdoutDataDone,
		readable,
		subprocess,
	});
	return readable;
};

// Retrieve `stdout` (or other stream depending on `from`)
const getSubprocessStdout = (subprocess, from, concurrentStreams) => {
	const subprocessStdout = getFromStream(subprocess, from);
	const waitReadableDestroy = addConcurrentStream(concurrentStreams, subprocessStdout, 'readableDestroy');
	return {subprocessStdout, waitReadableDestroy};
};

const getReadableOptions = ({readableEncoding, readableObjectMode, readableHighWaterMark}, binary) => binary
	? {readableEncoding, readableObjectMode, readableHighWaterMark}
	: {readableEncoding, readableObjectMode: true, readableHighWaterMark: DEFAULT_OBJECT_HIGH_WATER_MARK};

const getReadableMethods = ({subprocessStdout, subprocess, binary, encoding, preserveNewlines}) => {
	const onStdoutDataDone = createDeferred();
	const onStdoutData = iterateOnSubprocessStream({
		subprocessStdout,
		subprocess,
		binary,
		shouldEncode: !binary,
		encoding,
		preserveNewlines,
	});

	return {
		read() {
			onRead(this, onStdoutData, onStdoutDataDone);
		},
		onStdoutDataDone,
	};
};

// Forwards data from `stdout` to `readable`
const onRead = async (readable, onStdoutData, onStdoutDataDone) => {
	try {
		const {value, done} = await onStdoutData.next();
		if (done) {
			onStdoutDataDone.resolve();
		} else {
			readable.push(value);
		}
	} catch {}
};

// When `subprocess.stdout` ends/aborts/errors, do the same on `readable`.
// Await the subprocess, for the same reason as above.
const onStdoutFinished = async ({subprocessStdout, onStdoutDataDone, readable, subprocess, subprocessStdin}) => {
	try {
		await waitForSubprocessStdout(subprocessStdout);
		await subprocess;
		await safeWaitForSubprocessStdin(subprocessStdin);
		await onStdoutDataDone;

		if (readable.readable) {
			readable.push(null);
		}
	} catch (error) {
		await safeWaitForSubprocessStdin(subprocessStdin);
		destroyOtherReadable(readable, error);
	}
};

// When `readable` aborts/errors, do the same on `subprocess.stdout`
const onReadableDestroy = async ({subprocessStdout, subprocess, waitReadableDestroy}, error) => {
	if (await waitForConcurrentStreams(waitReadableDestroy, subprocess)) {
		destroyOtherReadable(subprocessStdout, error);
		await waitForSubprocess(subprocess, error);
	}
};

const destroyOtherReadable = (stream, error) => {
	destroyOtherStream(stream, stream.readable, error);
};

;// CONCATENATED MODULE: ./node_modules/execa/lib/convert/writable.js






// Create a `Writable` stream that forwards to `stdin` and awaits the subprocess
const createWritable = ({subprocess, concurrentStreams}, {to} = {}) => {
	const {subprocessStdin, waitWritableFinal, waitWritableDestroy} = getSubprocessStdin(subprocess, to, concurrentStreams);
	const writable = new external_node_stream_namespaceObject.Writable({
		...getWritableMethods(subprocessStdin, subprocess, waitWritableFinal),
		destroy: (0,external_node_util_namespaceObject.callbackify)(onWritableDestroy.bind(undefined, {
			subprocessStdin,
			subprocess,
			waitWritableFinal,
			waitWritableDestroy,
		})),
		highWaterMark: subprocessStdin.writableHighWaterMark,
		objectMode: subprocessStdin.writableObjectMode,
	});
	onStdinFinished(subprocessStdin, writable);
	return writable;
};

// Retrieve `stdin` (or other stream depending on `to`)
const getSubprocessStdin = (subprocess, to, concurrentStreams) => {
	const subprocessStdin = getToStream(subprocess, to);
	const waitWritableFinal = addConcurrentStream(concurrentStreams, subprocessStdin, 'writableFinal');
	const waitWritableDestroy = addConcurrentStream(concurrentStreams, subprocessStdin, 'writableDestroy');
	return {subprocessStdin, waitWritableFinal, waitWritableDestroy};
};

const getWritableMethods = (subprocessStdin, subprocess, waitWritableFinal) => ({
	write: onWrite.bind(undefined, subprocessStdin),
	final: (0,external_node_util_namespaceObject.callbackify)(onWritableFinal.bind(undefined, subprocessStdin, subprocess, waitWritableFinal)),
});

// Forwards data from `writable` to `stdin`
const onWrite = (subprocessStdin, chunk, encoding, done) => {
	if (subprocessStdin.write(chunk, encoding)) {
		done();
	} else {
		subprocessStdin.once('drain', done);
	}
};

// Ensures that the writable `final` and readable `end` events awaits the subprocess.
// Like this, any subprocess failure is propagated as a stream `error` event, instead of being lost.
// The user does not need to `await` the subprocess anymore, but now needs to await the stream completion or error.
// When multiple writables are targeting the same stream, they wait for each other, unless the subprocess ends first.
const onWritableFinal = async (subprocessStdin, subprocess, waitWritableFinal) => {
	if (await waitForConcurrentStreams(waitWritableFinal, subprocess)) {
		if (subprocessStdin.writable) {
			subprocessStdin.end();
		}

		await subprocess;
	}
};

// When `subprocess.stdin` ends/aborts/errors, do the same on `writable`.
const onStdinFinished = async (subprocessStdin, writable, subprocessStdout) => {
	try {
		await waitForSubprocessStdin(subprocessStdin);
		if (writable.writable) {
			writable.end();
		}
	} catch (error) {
		await safeWaitForSubprocessStdout(subprocessStdout);
		destroyOtherWritable(writable, error);
	}
};

// When `writable` aborts/errors, do the same on `subprocess.stdin`
const onWritableDestroy = async ({subprocessStdin, subprocess, waitWritableFinal, waitWritableDestroy}, error) => {
	await waitForConcurrentStreams(waitWritableFinal, subprocess);
	if (await waitForConcurrentStreams(waitWritableDestroy, subprocess)) {
		destroyOtherWritable(subprocessStdin, error);
		await waitForSubprocess(subprocess, error);
	}
};

const destroyOtherWritable = (stream, error) => {
	destroyOtherStream(stream, stream.writable, error);
};

;// CONCATENATED MODULE: ./node_modules/execa/lib/convert/duplex.js






// Create a `Duplex` stream combining both `subprocess.readable()` and `subprocess.writable()`
const createDuplex = ({subprocess, concurrentStreams, encoding}, {from, to, binary: binaryOption = true, preserveNewlines = true} = {}) => {
	const binary = binaryOption || BINARY_ENCODINGS.has(encoding);
	const {subprocessStdout, waitReadableDestroy} = getSubprocessStdout(subprocess, from, concurrentStreams);
	const {subprocessStdin, waitWritableFinal, waitWritableDestroy} = getSubprocessStdin(subprocess, to, concurrentStreams);
	const {readableEncoding, readableObjectMode, readableHighWaterMark} = getReadableOptions(subprocessStdout, binary);
	const {read, onStdoutDataDone} = getReadableMethods({
		subprocessStdout,
		subprocess,
		binary,
		encoding,
		preserveNewlines,
	});
	const duplex = new external_node_stream_namespaceObject.Duplex({
		read,
		...getWritableMethods(subprocessStdin, subprocess, waitWritableFinal),
		destroy: (0,external_node_util_namespaceObject.callbackify)(onDuplexDestroy.bind(undefined, {
			subprocessStdout,
			subprocessStdin,
			subprocess,
			waitReadableDestroy,
			waitWritableFinal,
			waitWritableDestroy,
		})),
		readableHighWaterMark,
		writableHighWaterMark: subprocessStdin.writableHighWaterMark,
		readableObjectMode,
		writableObjectMode: subprocessStdin.writableObjectMode,
		encoding: readableEncoding,
	});
	onStdoutFinished({
		subprocessStdout,
		onStdoutDataDone,
		readable: duplex,
		subprocess,
		subprocessStdin,
	});
	onStdinFinished(subprocessStdin, duplex, subprocessStdout);
	return duplex;
};

const onDuplexDestroy = async ({subprocessStdout, subprocessStdin, subprocess, waitReadableDestroy, waitWritableFinal, waitWritableDestroy}, error) => {
	await Promise.all([
		onReadableDestroy({subprocessStdout, subprocess, waitReadableDestroy}, error),
		onWritableDestroy({
			subprocessStdin,
			subprocess,
			waitWritableFinal,
			waitWritableDestroy,
		}, error),
	]);
};

;// CONCATENATED MODULE: ./node_modules/execa/lib/convert/iterable.js




// Convert the subprocess to an async iterable
const createIterable = (subprocess, encoding, {
	from,
	binary: binaryOption = false,
	preserveNewlines = false,
} = {}) => {
	const binary = binaryOption || BINARY_ENCODINGS.has(encoding);
	const subprocessStdout = getFromStream(subprocess, from);
	const onStdoutData = iterateOnSubprocessStream({
		subprocessStdout,
		subprocess,
		binary,
		shouldEncode: true,
		encoding,
		preserveNewlines,
	});
	return iterateOnStdoutData(onStdoutData, subprocessStdout, subprocess);
};

const iterateOnStdoutData = async function * (onStdoutData, subprocessStdout, subprocess) {
	try {
		yield * onStdoutData;
	} finally {
		if (subprocessStdout.readable) {
			subprocessStdout.destroy();
		}

		await subprocess;
	}
};

;// CONCATENATED MODULE: ./node_modules/execa/lib/convert/add.js






// Add methods to convert the subprocess to a stream or iterable
const addConvertedStreams = (subprocess, {encoding}) => {
	const concurrentStreams = initializeConcurrentStreams();
	subprocess.readable = createReadable.bind(undefined, {subprocess, concurrentStreams, encoding});
	subprocess.writable = createWritable.bind(undefined, {subprocess, concurrentStreams});
	subprocess.duplex = createDuplex.bind(undefined, {subprocess, concurrentStreams, encoding});
	subprocess.iterable = createIterable.bind(undefined, subprocess, encoding);
	subprocess[Symbol.asyncIterator] = createIterable.bind(undefined, subprocess, encoding, {});
};

;// CONCATENATED MODULE: ./node_modules/execa/lib/methods/promise.js
// The return value is a mixin of `subprocess` and `Promise`
const mergePromise = (subprocess, promise) => {
	for (const [property, descriptor] of descriptors) {
		const value = descriptor.value.bind(promise);
		Reflect.defineProperty(subprocess, property, {...descriptor, value});
	}
};

// eslint-disable-next-line unicorn/prefer-top-level-await
const nativePromisePrototype = (async () => {})().constructor.prototype;

const descriptors = ['then', 'catch', 'finally'].map(property => [
	property,
	Reflect.getOwnPropertyDescriptor(nativePromisePrototype, property),
]);

;// CONCATENATED MODULE: ./node_modules/execa/lib/methods/main-async.js























// Main shared logic for all async methods: `execa()`, `$`, `execaNode()`
const execaCoreAsync = (rawFile, rawArguments, rawOptions, createNested) => {
	const {file, commandArguments, command, escapedCommand, startTime, verboseInfo, options, fileDescriptors} = handleAsyncArguments(rawFile, rawArguments, rawOptions);
	const {subprocess, promise} = spawnSubprocessAsync({
		file,
		commandArguments,
		options,
		startTime,
		verboseInfo,
		command,
		escapedCommand,
		fileDescriptors,
	});
	subprocess.pipe = pipeToSubprocess.bind(undefined, {
		source: subprocess,
		sourcePromise: promise,
		boundOptions: {},
		createNested,
	});
	mergePromise(subprocess, promise);
	SUBPROCESS_OPTIONS.set(subprocess, {options, fileDescriptors});
	return subprocess;
};

// Compute arguments to pass to `child_process.spawn()`
const handleAsyncArguments = (rawFile, rawArguments, rawOptions) => {
	const {command, escapedCommand, startTime, verboseInfo} = handleCommand(rawFile, rawArguments, rawOptions);
	const {file, commandArguments, options: normalizedOptions} = normalizeOptions(rawFile, rawArguments, rawOptions);
	const options = handleAsyncOptions(normalizedOptions);
	const fileDescriptors = handleStdioAsync(options, verboseInfo);
	return {
		file,
		commandArguments,
		command,
		escapedCommand,
		startTime,
		verboseInfo,
		options,
		fileDescriptors,
	};
};

// Options normalization logic specific to async methods.
// Prevent passing the `timeout` option directly to `child_process.spawn()`.
const handleAsyncOptions = ({timeout, signal, ...options}) => {
	if (signal !== undefined) {
		throw new TypeError('The "signal" option has been renamed to "cancelSignal" instead.');
	}

	return {...options, timeoutDuration: timeout};
};

const spawnSubprocessAsync = ({file, commandArguments, options, startTime, verboseInfo, command, escapedCommand, fileDescriptors}) => {
	let subprocess;
	try {
		subprocess = (0,external_node_child_process_namespaceObject.spawn)(...concatenateShell(file, commandArguments, options));
	} catch (error) {
		return handleEarlyError({
			error,
			command,
			escapedCommand,
			fileDescriptors,
			options,
			startTime,
			verboseInfo,
		});
	}

	const controller = new AbortController();
	(0,external_node_events_namespaceObject.setMaxListeners)(Number.POSITIVE_INFINITY, controller.signal);

	const originalStreams = [...subprocess.stdio];
	pipeOutputAsync(subprocess, fileDescriptors, controller);
	cleanupOnExit(subprocess, options, controller);

	const context = {};
	const onInternalError = createDeferred();
	subprocess.kill = subprocessKill.bind(undefined, {
		kill: subprocess.kill.bind(subprocess),
		options,
		onInternalError,
		context,
		controller,
	});
	subprocess.all = makeAllStream(subprocess, options);
	addConvertedStreams(subprocess, options);
	addIpcMethods(subprocess, options);

	const promise = handlePromise({
		subprocess,
		options,
		startTime,
		verboseInfo,
		fileDescriptors,
		originalStreams,
		command,
		escapedCommand,
		context,
		onInternalError,
		controller,
	});
	return {subprocess, promise};
};

// Asynchronous logic, as opposed to the previous logic which can be run synchronously, i.e. can be returned to user right away
const handlePromise = async ({subprocess, options, startTime, verboseInfo, fileDescriptors, originalStreams, command, escapedCommand, context, onInternalError, controller}) => {
	const [
		errorInfo,
		[exitCode, signal],
		stdioResults,
		allResult,
		ipcOutput,
	] = await waitForSubprocessResult({
		subprocess,
		options,
		context,
		verboseInfo,
		fileDescriptors,
		originalStreams,
		onInternalError,
		controller,
	});
	controller.abort();
	onInternalError.resolve();

	const stdio = stdioResults.map((stdioResult, fdNumber) => stripNewline(stdioResult, options, fdNumber));
	const all = stripNewline(allResult, options, 'all');
	const result = getAsyncResult({
		errorInfo,
		exitCode,
		signal,
		stdio,
		all,
		ipcOutput,
		context,
		options,
		command,
		escapedCommand,
		startTime,
	});
	return handleResult(result, verboseInfo, options);
};

const getAsyncResult = ({errorInfo, exitCode, signal, stdio, all, ipcOutput, context, options, command, escapedCommand, startTime}) => 'error' in errorInfo
	? makeError({
		error: errorInfo.error,
		command,
		escapedCommand,
		timedOut: context.terminationReason === 'timeout',
		isCanceled: context.terminationReason === 'cancel' || context.terminationReason === 'gracefulCancel',
		isGracefullyCanceled: context.terminationReason === 'gracefulCancel',
		isMaxBuffer: errorInfo.error instanceof MaxBufferError,
		isForcefullyTerminated: context.isForcefullyTerminated,
		exitCode,
		signal,
		stdio,
		all,
		ipcOutput,
		options,
		startTime,
		isSync: false,
	})
	: makeSuccessResult({
		command,
		escapedCommand,
		stdio,
		all,
		ipcOutput,
		options,
		startTime,
	});

;// CONCATENATED MODULE: ./node_modules/execa/lib/methods/bind.js



// Deep merge specific options like `env`. Shallow merge the other ones.
const mergeOptions = (boundOptions, options) => {
	const newOptions = Object.fromEntries(
		Object.entries(options).map(([optionName, optionValue]) => [
			optionName,
			mergeOption(optionName, boundOptions[optionName], optionValue),
		]),
	);
	return {...boundOptions, ...newOptions};
};

const mergeOption = (optionName, boundOptionValue, optionValue) => {
	if (DEEP_OPTIONS.has(optionName) && isPlainObject(boundOptionValue) && isPlainObject(optionValue)) {
		return {...boundOptionValue, ...optionValue};
	}

	return optionValue;
};

const DEEP_OPTIONS = new Set(['env', ...FD_SPECIFIC_OPTIONS]);

;// CONCATENATED MODULE: ./node_modules/execa/lib/methods/create.js







// Wraps every exported methods to provide the following features:
//  - template string syntax: execa`command argument`
//  - options binding: boundExeca = execa(options)
//  - optional argument/options: execa(file), execa(file, args), execa(file, options), execa(file, args, options)
// `mapArguments()` and `setBoundExeca()` allows for method-specific logic.
const createExeca = (mapArguments, boundOptions, deepOptions, setBoundExeca) => {
	const createNested = (mapArguments, boundOptions, setBoundExeca) => createExeca(mapArguments, boundOptions, deepOptions, setBoundExeca);
	const boundExeca = (...execaArguments) => callBoundExeca({
		mapArguments,
		deepOptions,
		boundOptions,
		setBoundExeca,
		createNested,
	}, ...execaArguments);

	if (setBoundExeca !== undefined) {
		setBoundExeca(boundExeca, createNested, boundOptions);
	}

	return boundExeca;
};

const callBoundExeca = ({mapArguments, deepOptions = {}, boundOptions = {}, setBoundExeca, createNested}, firstArgument, ...nextArguments) => {
	if (isPlainObject(firstArgument)) {
		return createNested(mapArguments, mergeOptions(boundOptions, firstArgument), setBoundExeca);
	}

	const {file, commandArguments, options, isSync} = parseArguments({
		mapArguments,
		firstArgument,
		nextArguments,
		deepOptions,
		boundOptions,
	});
	return isSync
		? execaCoreSync(file, commandArguments, options)
		: execaCoreAsync(file, commandArguments, options, createNested);
};

const parseArguments = ({mapArguments, firstArgument, nextArguments, deepOptions, boundOptions}) => {
	const callArguments = isTemplateString(firstArgument)
		? parseTemplates(firstArgument, nextArguments)
		: [firstArgument, ...nextArguments];
	const [initialFile, initialArguments, initialOptions] = normalizeParameters(...callArguments);
	const mergedOptions = mergeOptions(mergeOptions(deepOptions, boundOptions), initialOptions);
	const {
		file = initialFile,
		commandArguments = initialArguments,
		options = mergedOptions,
		isSync = false,
	} = mapArguments({file: initialFile, commandArguments: initialArguments, options: mergedOptions});
	return {
		file,
		commandArguments,
		options,
		isSync,
	};
};

;// CONCATENATED MODULE: ./node_modules/execa/lib/methods/command.js
// Main logic for `execaCommand()`
const mapCommandAsync = ({file, commandArguments}) => parseCommand(file, commandArguments);

// Main logic for `execaCommandSync()`
const mapCommandSync = ({file, commandArguments}) => ({...parseCommand(file, commandArguments), isSync: true});

// Convert `execaCommand(command)` into `execa(file, ...commandArguments)`
const parseCommand = (command, unusedArguments) => {
	if (unusedArguments.length > 0) {
		throw new TypeError(`The command and its arguments must be passed as a single string: ${command} ${unusedArguments}.`);
	}

	const [file, ...commandArguments] = parseCommandString(command);
	return {file, commandArguments};
};

// Convert `command` string into an array of file or arguments to pass to $`${...fileOrCommandArguments}`
const parseCommandString = command => {
	if (typeof command !== 'string') {
		throw new TypeError(`The command must be a string: ${String(command)}.`);
	}

	const trimmedCommand = command.trim();
	if (trimmedCommand === '') {
		return [];
	}

	const tokens = [];
	for (const token of trimmedCommand.split(SPACES_REGEXP)) {
		// Allow spaces to be escaped by a backslash if not meant as a delimiter
		const previousToken = tokens.at(-1);
		if (previousToken && previousToken.endsWith('\\')) {
			// Merge previous token with current one
			tokens[tokens.length - 1] = `${previousToken.slice(0, -1)} ${token}`;
		} else {
			tokens.push(token);
		}
	}

	return tokens;
};

const SPACES_REGEXP = / +/g;

;// CONCATENATED MODULE: ./node_modules/execa/lib/methods/script.js
// Sets `$.sync` and `$.s`
const setScriptSync = (boundExeca, createNested, boundOptions) => {
	boundExeca.sync = createNested(mapScriptSync, boundOptions);
	boundExeca.s = boundExeca.sync;
};

// Main logic for `$`
const mapScriptAsync = ({options}) => getScriptOptions(options);

// Main logic for `$.sync`
const mapScriptSync = ({options}) => ({...getScriptOptions(options), isSync: true});

// `$` is like `execa` but with script-friendly options: `{stdin: 'inherit', preferLocal: true}`
const getScriptOptions = options => ({options: {...getScriptStdinOption(options), ...options}});

const getScriptStdinOption = ({input, inputFile, stdio}) => input === undefined && inputFile === undefined && stdio === undefined
	? {stdin: 'inherit'}
	: {};

// When using $(...).pipe(...), most script-friendly options should apply to both commands.
// However, some options (like `stdin: 'inherit'`) would create issues with piping, i.e. cannot be deep.
const deepScriptOptions = {preferLocal: true};

;// CONCATENATED MODULE: ./node_modules/execa/index.js









const execa = createExeca(() => ({}));
const execaSync = createExeca(() => ({isSync: true}));
const execaCommand = createExeca(mapCommandAsync);
const execaCommandSync = createExeca(mapCommandSync);
const execaNode = createExeca(mapNode);
const $ = createExeca(mapScriptAsync, {}, deepScriptOptions, setScriptSync);

const {
	sendMessage: execa_sendMessage,
	getOneMessage: execa_getOneMessage,
	getEachMessage: execa_getEachMessage,
	getCancelSignal: execa_getCancelSignal,
} = getIpcExport();



/***/ })

/******/ });
/************************************************************************/
/******/ // The module cache
/******/ var __webpack_module_cache__ = {};
/******/ 
/******/ // The require function
/******/ function __nccwpck_require__(moduleId) {
/******/ 	// Check if module is in cache
/******/ 	var cachedModule = __webpack_module_cache__[moduleId];
/******/ 	if (cachedModule !== undefined) {
/******/ 		return cachedModule.exports;
/******/ 	}
/******/ 	// Create a new module (and put it into the cache)
/******/ 	var module = __webpack_module_cache__[moduleId] = {
/******/ 		// no module.id needed
/******/ 		// no module.loaded needed
/******/ 		exports: {}
/******/ 	};
/******/ 
/******/ 	// Execute the module function
/******/ 	var threw = true;
/******/ 	try {
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __nccwpck_require__);
/******/ 		threw = false;
/******/ 	} finally {
/******/ 		if(threw) delete __webpack_module_cache__[moduleId];
/******/ 	}
/******/ 
/******/ 	// Return the exports of the module
/******/ 	return module.exports;
/******/ }
/******/ 
/************************************************************************/
/******/ /* webpack/runtime/async module */
/******/ (() => {
/******/ 	var webpackQueues = typeof Symbol === "function" ? Symbol("webpack queues") : "__webpack_queues__";
/******/ 	var webpackExports = typeof Symbol === "function" ? Symbol("webpack exports") : "__webpack_exports__";
/******/ 	var webpackError = typeof Symbol === "function" ? Symbol("webpack error") : "__webpack_error__";
/******/ 	var resolveQueue = (queue) => {
/******/ 		if(queue && !queue.d) {
/******/ 			queue.d = 1;
/******/ 			queue.forEach((fn) => (fn.r--));
/******/ 			queue.forEach((fn) => (fn.r-- ? fn.r++ : fn()));
/******/ 		}
/******/ 	}
/******/ 	var wrapDeps = (deps) => (deps.map((dep) => {
/******/ 		if(dep !== null && typeof dep === "object") {
/******/ 			if(dep[webpackQueues]) return dep;
/******/ 			if(dep.then) {
/******/ 				var queue = [];
/******/ 				queue.d = 0;
/******/ 				dep.then((r) => {
/******/ 					obj[webpackExports] = r;
/******/ 					resolveQueue(queue);
/******/ 				}, (e) => {
/******/ 					obj[webpackError] = e;
/******/ 					resolveQueue(queue);
/******/ 				});
/******/ 				var obj = {};
/******/ 				obj[webpackQueues] = (fn) => (fn(queue));
/******/ 				return obj;
/******/ 			}
/******/ 		}
/******/ 		var ret = {};
/******/ 		ret[webpackQueues] = x => {};
/******/ 		ret[webpackExports] = dep;
/******/ 		return ret;
/******/ 	}));
/******/ 	__nccwpck_require__.a = (module, body, hasAwait) => {
/******/ 		var queue;
/******/ 		hasAwait && ((queue = []).d = 1);
/******/ 		var depQueues = new Set();
/******/ 		var exports = module.exports;
/******/ 		var currentDeps;
/******/ 		var outerResolve;
/******/ 		var reject;
/******/ 		var promise = new Promise((resolve, rej) => {
/******/ 			reject = rej;
/******/ 			outerResolve = resolve;
/******/ 		});
/******/ 		promise[webpackExports] = exports;
/******/ 		promise[webpackQueues] = (fn) => (queue && fn(queue), depQueues.forEach(fn), promise["catch"](x => {}));
/******/ 		module.exports = promise;
/******/ 		body((deps) => {
/******/ 			currentDeps = wrapDeps(deps);
/******/ 			var fn;
/******/ 			var getResult = () => (currentDeps.map((d) => {
/******/ 				if(d[webpackError]) throw d[webpackError];
/******/ 				return d[webpackExports];
/******/ 			}))
/******/ 			var promise = new Promise((resolve) => {
/******/ 				fn = () => (resolve(getResult));
/******/ 				fn.r = 0;
/******/ 				var fnQueue = (q) => (q !== queue && !depQueues.has(q) && (depQueues.add(q), q && !q.d && (fn.r++, q.push(fn))));
/******/ 				currentDeps.map((dep) => (dep[webpackQueues](fnQueue)));
/******/ 			});
/******/ 			return fn.r ? promise : getResult();
/******/ 		}, (err) => ((err ? reject(promise[webpackError] = err) : outerResolve(exports)), resolveQueue(queue)));
/******/ 		queue && (queue.d = 0);
/******/ 	};
/******/ })();
/******/ 
/******/ /* webpack/runtime/define property getters */
/******/ (() => {
/******/ 	// define getter functions for harmony exports
/******/ 	__nccwpck_require__.d = (exports, definition) => {
/******/ 		for(var key in definition) {
/******/ 			if(__nccwpck_require__.o(definition, key) && !__nccwpck_require__.o(exports, key)) {
/******/ 				Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 			}
/******/ 		}
/******/ 	};
/******/ })();
/******/ 
/******/ /* webpack/runtime/hasOwnProperty shorthand */
/******/ (() => {
/******/ 	__nccwpck_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ })();
/******/ 
/******/ /* webpack/runtime/compat */
/******/ 
/******/ if (typeof __nccwpck_require__ !== 'undefined') __nccwpck_require__.ab = new URL('.', import.meta.url).pathname.slice(import.meta.url.match(/^file:\/\/\/\w:/) ? 1 : 0, -1) + "/";
/******/ 
/************************************************************************/
/******/ 
/******/ // startup
/******/ // Load entry module and return exports
/******/ // This entry module used 'module' so it can't be inlined
/******/ var __webpack_exports__ = __nccwpck_require__(378);
/******/ __webpack_exports__ = await __webpack_exports__;
/******/ 
