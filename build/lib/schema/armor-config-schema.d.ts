export namespace ArmorConfigJsonSchema {
    export const $schema: "http://json-schema.org/draft-07/schema";
    export const additionalProperties: false;
    export const description: "A schema for Armor configuration files";
    export namespace properties {
        export namespace $schema_1 {
            const description_1: "The JSON schema for this file";
            export { description_1 as description };
            const _default: "https://raw.githubusercontent.com/armor/armor/master/packages/schema/lib/armor-config.schema.json";
            export { _default as default };
            export const type: "string";
            export const format: "uri";
        }
        export { $schema_1 as $schema };
        export namespace server {
            const additionalProperties_1: false;
            export { additionalProperties_1 as additionalProperties };
            const description_2: "Configuration when running Armor as a server";
            export { description_2 as description };
            const properties_1: {
                readonly address: {
                    readonly armorCliAliases: readonly ["a"];
                    readonly default: "0.0.0.0";
                    readonly description: "IPv4/IPv6 address or a hostname to listen on";
                    readonly title: "address config";
                    readonly type: "string";
                    readonly anyOf: readonly [{
                        readonly type: "string";
                        readonly format: "hostname";
                    }, {
                        readonly type: "string";
                        readonly format: "ipv6";
                    }];
                };
                readonly 'allow-cors': {
                    readonly description: "Whether the Armor server should allow web browser connections from any host";
                    readonly title: "allow-cors config";
                    readonly type: "boolean";
                    readonly default: false;
                };
                readonly 'allow-insecure': {
                    readonly armorCliTransformer: "csv";
                    readonly default: readonly [];
                    readonly description: "Set which insecure features are allowed to run in this server's sessions. Features are defined on a driver level; see documentation for more details. Note that features defined via \"deny-insecure\" will be disabled, even if also listed here. If string, a path to a text file containing policy or a comma-delimited list.";
                    readonly items: {
                        readonly type: "string";
                    };
                    readonly title: "allow-insecure config";
                    readonly type: "array";
                    readonly uniqueItems: true;
                };
                readonly 'base-path': {
                    readonly armorCliAliases: readonly ["pa"];
                    readonly default: "";
                    readonly description: "Base path to use as the prefix for all webdriver routes running on the server";
                    readonly title: "base-path config";
                    readonly type: "string";
                };
                readonly 'callback-address': {
                    readonly armorCliAliases: readonly ["ca"];
                    readonly description: "Callback IP address (default: same as \"address\")";
                    readonly title: "callback-address config";
                    readonly type: "string";
                };
                readonly 'callback-port': {
                    readonly armorCliAliases: readonly ["cp"];
                    readonly default: 4723;
                    readonly description: "Callback port (default: same as \"port\")";
                    readonly maximum: 65535;
                    readonly minimum: 1;
                    readonly title: "callback-port config";
                    readonly type: "integer";
                };
                readonly 'debug-log-spacing': {
                    readonly default: false;
                    readonly description: "Add exaggerated spacing in logs to help with visual inspection";
                    readonly title: "debug-log-spacing config";
                    readonly type: "boolean";
                };
                readonly 'default-capabilities': {
                    readonly $comment: "TODO";
                    readonly armorCliAliases: readonly ["dc"];
                    readonly description: "Set the default desired capabilities, which will be set on each session unless overridden by received capabilities. If a string, a path to a JSON file containing the capabilities, or raw JSON.";
                    readonly title: "default-capabilities config";
                    readonly type: "object";
                };
                readonly 'deny-insecure': {
                    readonly $comment: "Allowed values are defined by drivers";
                    readonly armorCliTransformer: "csv";
                    readonly default: readonly [];
                    readonly description: "Set which insecure features are not allowed to run in this server's sessions. Features are defined on a driver level; see documentation for more details. Features listed here will not be enabled even if also listed in \"allow-insecure\", and even if \"relaxed-security\" is enabled. If string, a path to a text file containing policy or a comma-delimited list.";
                    readonly items: {
                        readonly type: "string";
                    };
                    readonly title: "deny-insecure config";
                    readonly type: "array";
                    readonly uniqueItems: true;
                };
                readonly driver: {
                    readonly description: "Driver-specific configuration. Keys should correspond to driver package names";
                    readonly properties: Record<string, import("json-schema").JSONSchema7>;
                    readonly title: "driver config";
                    readonly type: "object";
                };
                readonly 'keep-alive-timeout': {
                    readonly armorCliAliases: readonly ["ka"];
                    readonly default: 600;
                    readonly description: "Number of seconds the Armor server should apply as both the keep-alive timeout and the connection timeout for all requests. A value of 0 disables the timeout.";
                    readonly minimum: 0;
                    readonly title: "keep-alive-timeout config";
                    readonly type: "integer";
                };
                readonly 'local-timezone': {
                    readonly default: false;
                    readonly description: "Use local timezone for timestamps";
                    readonly title: "local-timezone config";
                    readonly type: "boolean";
                };
                readonly log: {
                    readonly armorCliAliases: readonly ["g"];
                    readonly armorCliDest: "logFile";
                    readonly description: "Also send log output to this file";
                    readonly title: "log config";
                    readonly type: "string";
                };
                readonly 'log-filters': {
                    readonly description: "One or more log filtering rules";
                    readonly title: "log-filters config";
                    readonly type: "array";
                    readonly items: {
                        readonly $ref: "#/$defs/logFilter";
                    };
                    readonly armorCliTransformer: "json";
                };
                readonly 'log-level': {
                    readonly armorCliDest: "loglevel";
                    readonly default: "debug";
                    readonly description: "Log level (console[:file])";
                    readonly enum: readonly ["info", "info:debug", "info:info", "info:warn", "info:error", "warn", "warn:debug", "warn:info", "warn:warn", "warn:error", "error", "error:debug", "error:info", "error:warn", "error:error", "debug", "debug:debug", "debug:info", "debug:warn", "debug:error"];
                    readonly title: "log-level config";
                    readonly type: "string";
                };
                readonly 'log-no-colors': {
                    readonly default: false;
                    readonly description: "Do not use color in console output";
                    readonly title: "log-no-colors config";
                    readonly type: "boolean";
                };
                readonly 'log-timestamp': {
                    readonly default: false;
                    readonly description: "Show timestamps in console output";
                    readonly title: "log-timestamp config";
                    readonly type: "boolean";
                };
                readonly 'long-stacktrace': {
                    readonly default: false;
                    readonly description: "Add long stack traces to log entries. Recommended for debugging only.";
                    readonly title: "long-stacktrace config";
                    readonly type: "boolean";
                };
                readonly 'no-perms-check': {
                    readonly default: false;
                    readonly description: "Do not check that needed files are readable and/or writable";
                    readonly title: "no-perms-check config";
                    readonly type: "boolean";
                };
                readonly nodeconfig: {
                    readonly $comment: "Selenium Grid 3 is unmaintained and Selenium Grid 4 no longer supports this file.";
                    readonly description: "Path to configuration JSON file to register Armor as a node with Selenium Grid 3; otherwise the configuration itself";
                    readonly title: "nodeconfig config";
                    readonly type: "object";
                };
                readonly plugin: {
                    readonly description: "Plugin-specific configuration. Keys should correspond to plugin package names";
                    readonly properties: Record<string, import("json-schema").JSONSchema7>;
                    readonly title: "plugin config";
                    readonly type: "object";
                };
                readonly port: {
                    readonly armorCliAliases: readonly ["p"];
                    readonly default: 4723;
                    readonly description: "Port to listen on";
                    readonly maximum: 65535;
                    readonly minimum: 1;
                    readonly title: "port config";
                    readonly type: "integer";
                };
                readonly 'relaxed-security': {
                    readonly default: false;
                    readonly description: "Disable additional security checks, so it is possible to use some advanced features, provided by drivers supporting this option. Only enable it if all the clients are in the trusted network and it's not the case if a client could potentially break out of the session sandbox. Specific features can be overridden by using \"deny-insecure\"";
                    readonly title: "relaxed-security config";
                    readonly type: "boolean";
                    readonly armorCliDest: "relaxedSecurityEnabled";
                };
                readonly 'session-override': {
                    readonly default: false;
                    readonly description: "Enables session override (clobbering)";
                    readonly title: "session-override config";
                    readonly type: "boolean";
                };
                readonly 'strict-caps': {
                    readonly default: false;
                    readonly description: "Cause sessions to fail if desired caps are sent in that Armor does not recognize as valid for the selected device";
                    readonly title: "strict-caps config";
                    readonly type: "boolean";
                };
                readonly tmp: {
                    readonly armorCliDest: "tmpDir";
                    readonly description: "Absolute path to directory Armor can use to manage temp files. Defaults to C:\\Windows\\Temp on Windows and /tmp otherwise.";
                    readonly title: "tmp config";
                    readonly type: "string";
                };
                readonly 'trace-dir': {
                    readonly description: "Absolute path to directory Armor can use to save iOS instrument traces; defaults to <tmp>/armor-instruments";
                    readonly title: "trace-dir config";
                    readonly type: "string";
                };
                readonly 'use-drivers': {
                    readonly armorCliDescription: "A list of drivers to activate. Can be a comma-delimited string or path to CSV file. By default, all installed drivers will be activated. Windows environments may require wrapping the comma-delimited string with quotes to escape the comma.";
                    readonly default: readonly [];
                    readonly description: "A list of drivers to activate. By default, all installed drivers will be activated.";
                    readonly items: {
                        readonly type: "string";
                    };
                    readonly title: "use-drivers config";
                    readonly type: "array";
                    readonly uniqueItems: true;
                };
                readonly 'use-plugins': {
                    readonly armorCliDescription: "A list of plugins to activate. Can be a comma-delimited string, path to CSV file, or the string \"all\" to use all installed plugins. Windows environments may require wrapping the comma-delimited string with quotes to escape the comma.";
                    readonly default: readonly [];
                    readonly description: "A list of plugins to activate. To activate all plugins, the value should be an array with a single item \"all\".";
                    readonly items: {
                        readonly type: "string";
                    };
                    readonly title: "use-plugins config";
                    readonly type: "array";
                    readonly uniqueItems: true;
                };
                readonly webhook: {
                    readonly $comment: "This should probably use a uri-template format to restrict the protocol to http/https";
                    readonly armorCliAliases: readonly ["G"];
                    readonly description: "Also send log output to this http listener";
                    readonly format: "uri";
                    readonly title: "webhook config";
                    readonly type: "string";
                };
                readonly 'ssl-cert-path': {
                    readonly description: "Full path to the .cert file if TLS is used. Must be provided together with \"ssl-key-path\"";
                    readonly title: ".cert file path";
                    readonly armorCliDest: "sslCertificatePath";
                    readonly type: "string";
                };
                readonly 'ssl-key-path': {
                    readonly description: "Full path to the .key file if TLS is used. Must be provided together with \"ssl-cert-path\"";
                    readonly title: ".key file path";
                    readonly armorCliDest: "sslKeyPath";
                    readonly type: "string";
                };
            };
            export { properties_1 as properties };
            export const title: "server config";
            const type_1: "object";
            export { type_1 as type };
        }
    }
    const title_1: "Armor Configuration";
    export { title_1 as title };
    const type_2: "object";
    export { type_2 as type };
    export namespace $defs {
        namespace logFilterText {
            const type_3: "object";
            export { type_3 as type };
            const description_3: "Log filter with plain text";
            export { description_3 as description };
            export namespace properties_2 {
                namespace text {
                    const description_4: "Text to match";
                    export { description_4 as description };
                    const type_4: "string";
                    export { type_4 as type };
                }
            }
            export { properties_2 as properties };
            export const required: readonly ["text"];
            export namespace not {
                const required_1: readonly ["pattern"];
                export { required_1 as required };
            }
        }
        namespace logFilterRegex {
            const type_5: "object";
            export { type_5 as type };
            const description_5: "Log filter with regular expression";
            export { description_5 as description };
            export namespace properties_3 {
                namespace pattern {
                    const description_6: "Regex pattern to match";
                    export { description_6 as description };
                    const type_6: "string";
                    export { type_6 as type };
                    const format_1: "regex";
                    export { format_1 as format };
                }
            }
            export { properties_3 as properties };
            const required_2: readonly ["pattern"];
            export { required_2 as required };
            export namespace not_1 {
                const required_3: readonly ["text"];
                export { required_3 as required };
            }
            export { not_1 as not };
        }
        namespace logFilter {
            const type_7: "object";
            export { type_7 as type };
            const description_7: "Log filtering rule";
            export { description_7 as description };
            export const allOf: readonly [{
                readonly type: "object";
                readonly properties: {
                    readonly replacer: {
                        readonly description: "Replacement string for matched text";
                        readonly type: "string";
                        readonly default: "**SECURE**";
                    };
                    readonly flags: {
                        readonly description: "Matching flags; see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions#advanced_searching_with_flags";
                        readonly type: "string";
                        readonly pattern: "^[igmsduy](,[igmsduy])*$";
                    };
                };
            }, {
                readonly anyOf: readonly [{
                    readonly $ref: "#/$defs/logFilterText";
                }, {
                    readonly $ref: "#/$defs/logFilterRegex";
                }];
            }];
        }
    }
}
//# sourceMappingURL=armor-config-schema.d.ts.map