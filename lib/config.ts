import type {ArmorConfigJsonSchema} from './schema';
import {ArmorConfiguration, ServerConfig} from './armor-config';
import {Associated, KebabToCamel} from './util';

/**
 * The Armor configuration as it would be in a user-provided configuration file.
 */
export type ArmorConfig = Partial<ArmorConfiguration>;

/**
 * Derive the "constant" type of the server properties from the schema.
 */
type ArmorServerJsonSchema = (typeof ArmorConfigJsonSchema)['properties']['server']['properties'];

/**
 * This type associates the types generated from the schema ({@linkcode ArmorConfiguration})
 * with the schema itself (beginning with the `server` prop).
 */
type ServerConfigMapping = Associated<ServerConfig, ArmorServerJsonSchema>;

/**
 * Camel-cased server config. _Not_ flattened.
 */
export type NormalizedServerConfig = {
  [Prop in keyof ServerConfigMapping as ArmorServerJsonSchema[Prop] extends WithDest
    ? ArmorServerJsonSchema[Prop]['armorCliDest']
    : KebabToCamel<Prop>]: ServerConfig[Prop];
};

/**
 * "Normalized" config, which is camel-cased (instead of kebab-case, like the schema). It is _not_ flattened.
 */
export type NormalizedArmorConfig = {
  server: NormalizedServerConfig;
};

/**
 * This type checks if `armorCliDest` is present in the object via
 * {@linkcode WithDest}, and uses the _value_ of that property for the key name;
 * otherwise uses the camel-cased value of the key name.
 */
type SetKeyForProp<Prop extends keyof ServerConfigMapping> =
  ArmorServerJsonSchema[Prop] extends WithDest
    ? ArmorServerJsonSchema[Prop]['armorCliDest']
    : KebabToCamel<Prop>;

/**
 * Checks for the existence of default values, and ensures those properties will
 * always be defined (eliminates `| undefined` from the type).
 * If no default value, just a type.
 */
type KeyOrDefaultForProp<Prop extends keyof ServerConfigMapping> =
  ArmorServerJsonSchema[Prop] extends WithDefault
    ? NonNullable<ServerConfig[Prop]>
    : ServerConfig[Prop];

/**
 * The final shape of the parsed CLI arguments.
 *
 * These will be camel-cased unless overridden by `armorCliDest` field in schema(s).
 */
export type ServerArgs = {
  [Prop in keyof ServerConfigMapping as SetKeyForProp<Prop>]: KeyOrDefaultForProp<Prop>;
};

// begin conditionals

// These types describe what a particular prop in the schema _could_ look like. We use them as conditionals in the above types.

/**
 * Certain properties have an `armorCliDest` prop, which affects the shape of
 * `ParsedArgs`. This type helps recognize these properties.
 *
 * See `armor/lib/schema/keywords` for definition of `armorCliDest`.
 */
interface WithDest {
  armorCliDest: string;
}

/**
 * Some properties have a `default` prop, which means practically they will not
 * be `undefined` upon parsing.
 *
 * We use this to ensure that the `ParsedArgs` makes guarantees
 * about the presence of properties.
 */
interface WithDefault<T = any> {
  default: T;
}

// end conditionals
