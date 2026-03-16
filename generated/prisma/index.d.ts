
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Account
 * 
 */
export type Account = $Result.DefaultSelection<Prisma.$AccountPayload>
/**
 * Model Session
 * 
 */
export type Session = $Result.DefaultSelection<Prisma.$SessionPayload>
/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model VerificationToken
 * 
 */
export type VerificationToken = $Result.DefaultSelection<Prisma.$VerificationTokenPayload>
/**
 * Model UserFeature
 * 
 */
export type UserFeature = $Result.DefaultSelection<Prisma.$UserFeaturePayload>
/**
 * Model FeatureInstance
 * 
 */
export type FeatureInstance = $Result.DefaultSelection<Prisma.$FeatureInstancePayload>
/**
 * Model FeatureMembership
 * 
 */
export type FeatureMembership = $Result.DefaultSelection<Prisma.$FeatureMembershipPayload>
/**
 * Model FeatureInvite
 * 
 */
export type FeatureInvite = $Result.DefaultSelection<Prisma.$FeatureInvitePayload>
/**
 * Model Watchlist
 * 
 */
export type Watchlist = $Result.DefaultSelection<Prisma.$WatchlistPayload>
/**
 * Model WatchlistItem
 * 
 */
export type WatchlistItem = $Result.DefaultSelection<Prisma.$WatchlistItemPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const FeatureKey: {
  WATCHLIST: 'WATCHLIST'
};

export type FeatureKey = (typeof FeatureKey)[keyof typeof FeatureKey]


export const FeatureMembershipRole: {
  OWNER: 'OWNER',
  MEMBER: 'MEMBER'
};

export type FeatureMembershipRole = (typeof FeatureMembershipRole)[keyof typeof FeatureMembershipRole]


export const WatchlistItemStatus: {
  QUEUED: 'QUEUED',
  WATCHED: 'WATCHED'
};

export type WatchlistItemStatus = (typeof WatchlistItemStatus)[keyof typeof WatchlistItemStatus]


export const WatchlistMediaType: {
  MOVIE: 'MOVIE',
  TV: 'TV'
};

export type WatchlistMediaType = (typeof WatchlistMediaType)[keyof typeof WatchlistMediaType]

}

export type FeatureKey = $Enums.FeatureKey

export const FeatureKey: typeof $Enums.FeatureKey

export type FeatureMembershipRole = $Enums.FeatureMembershipRole

export const FeatureMembershipRole: typeof $Enums.FeatureMembershipRole

export type WatchlistItemStatus = $Enums.WatchlistItemStatus

export const WatchlistItemStatus: typeof $Enums.WatchlistItemStatus

export type WatchlistMediaType = $Enums.WatchlistMediaType

export const WatchlistMediaType: typeof $Enums.WatchlistMediaType

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Accounts
 * const accounts = await prisma.account.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Accounts
   * const accounts = await prisma.account.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.account`: Exposes CRUD operations for the **Account** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Accounts
    * const accounts = await prisma.account.findMany()
    * ```
    */
  get account(): Prisma.AccountDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.session`: Exposes CRUD operations for the **Session** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Sessions
    * const sessions = await prisma.session.findMany()
    * ```
    */
  get session(): Prisma.SessionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.verificationToken`: Exposes CRUD operations for the **VerificationToken** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more VerificationTokens
    * const verificationTokens = await prisma.verificationToken.findMany()
    * ```
    */
  get verificationToken(): Prisma.VerificationTokenDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.userFeature`: Exposes CRUD operations for the **UserFeature** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UserFeatures
    * const userFeatures = await prisma.userFeature.findMany()
    * ```
    */
  get userFeature(): Prisma.UserFeatureDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.featureInstance`: Exposes CRUD operations for the **FeatureInstance** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more FeatureInstances
    * const featureInstances = await prisma.featureInstance.findMany()
    * ```
    */
  get featureInstance(): Prisma.FeatureInstanceDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.featureMembership`: Exposes CRUD operations for the **FeatureMembership** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more FeatureMemberships
    * const featureMemberships = await prisma.featureMembership.findMany()
    * ```
    */
  get featureMembership(): Prisma.FeatureMembershipDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.featureInvite`: Exposes CRUD operations for the **FeatureInvite** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more FeatureInvites
    * const featureInvites = await prisma.featureInvite.findMany()
    * ```
    */
  get featureInvite(): Prisma.FeatureInviteDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.watchlist`: Exposes CRUD operations for the **Watchlist** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Watchlists
    * const watchlists = await prisma.watchlist.findMany()
    * ```
    */
  get watchlist(): Prisma.WatchlistDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.watchlistItem`: Exposes CRUD operations for the **WatchlistItem** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more WatchlistItems
    * const watchlistItems = await prisma.watchlistItem.findMany()
    * ```
    */
  get watchlistItem(): Prisma.WatchlistItemDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.19.2
   * Query Engine version: c2990dca591cba766e3b7ef5d9e8a84796e47ab7
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Account: 'Account',
    Session: 'Session',
    User: 'User',
    VerificationToken: 'VerificationToken',
    UserFeature: 'UserFeature',
    FeatureInstance: 'FeatureInstance',
    FeatureMembership: 'FeatureMembership',
    FeatureInvite: 'FeatureInvite',
    Watchlist: 'Watchlist',
    WatchlistItem: 'WatchlistItem'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "account" | "session" | "user" | "verificationToken" | "userFeature" | "featureInstance" | "featureMembership" | "featureInvite" | "watchlist" | "watchlistItem"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Account: {
        payload: Prisma.$AccountPayload<ExtArgs>
        fields: Prisma.AccountFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AccountFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AccountFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          findFirst: {
            args: Prisma.AccountFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AccountFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          findMany: {
            args: Prisma.AccountFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>[]
          }
          create: {
            args: Prisma.AccountCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          createMany: {
            args: Prisma.AccountCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AccountCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>[]
          }
          delete: {
            args: Prisma.AccountDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          update: {
            args: Prisma.AccountUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          deleteMany: {
            args: Prisma.AccountDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AccountUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AccountUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>[]
          }
          upsert: {
            args: Prisma.AccountUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          aggregate: {
            args: Prisma.AccountAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAccount>
          }
          groupBy: {
            args: Prisma.AccountGroupByArgs<ExtArgs>
            result: $Utils.Optional<AccountGroupByOutputType>[]
          }
          count: {
            args: Prisma.AccountCountArgs<ExtArgs>
            result: $Utils.Optional<AccountCountAggregateOutputType> | number
          }
        }
      }
      Session: {
        payload: Prisma.$SessionPayload<ExtArgs>
        fields: Prisma.SessionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SessionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SessionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          findFirst: {
            args: Prisma.SessionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SessionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          findMany: {
            args: Prisma.SessionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>[]
          }
          create: {
            args: Prisma.SessionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          createMany: {
            args: Prisma.SessionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SessionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>[]
          }
          delete: {
            args: Prisma.SessionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          update: {
            args: Prisma.SessionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          deleteMany: {
            args: Prisma.SessionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SessionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SessionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>[]
          }
          upsert: {
            args: Prisma.SessionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          aggregate: {
            args: Prisma.SessionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSession>
          }
          groupBy: {
            args: Prisma.SessionGroupByArgs<ExtArgs>
            result: $Utils.Optional<SessionGroupByOutputType>[]
          }
          count: {
            args: Prisma.SessionCountArgs<ExtArgs>
            result: $Utils.Optional<SessionCountAggregateOutputType> | number
          }
        }
      }
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      VerificationToken: {
        payload: Prisma.$VerificationTokenPayload<ExtArgs>
        fields: Prisma.VerificationTokenFieldRefs
        operations: {
          findUnique: {
            args: Prisma.VerificationTokenFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.VerificationTokenFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>
          }
          findFirst: {
            args: Prisma.VerificationTokenFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.VerificationTokenFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>
          }
          findMany: {
            args: Prisma.VerificationTokenFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>[]
          }
          create: {
            args: Prisma.VerificationTokenCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>
          }
          createMany: {
            args: Prisma.VerificationTokenCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.VerificationTokenCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>[]
          }
          delete: {
            args: Prisma.VerificationTokenDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>
          }
          update: {
            args: Prisma.VerificationTokenUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>
          }
          deleteMany: {
            args: Prisma.VerificationTokenDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.VerificationTokenUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.VerificationTokenUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>[]
          }
          upsert: {
            args: Prisma.VerificationTokenUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>
          }
          aggregate: {
            args: Prisma.VerificationTokenAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateVerificationToken>
          }
          groupBy: {
            args: Prisma.VerificationTokenGroupByArgs<ExtArgs>
            result: $Utils.Optional<VerificationTokenGroupByOutputType>[]
          }
          count: {
            args: Prisma.VerificationTokenCountArgs<ExtArgs>
            result: $Utils.Optional<VerificationTokenCountAggregateOutputType> | number
          }
        }
      }
      UserFeature: {
        payload: Prisma.$UserFeaturePayload<ExtArgs>
        fields: Prisma.UserFeatureFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFeatureFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserFeaturePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFeatureFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserFeaturePayload>
          }
          findFirst: {
            args: Prisma.UserFeatureFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserFeaturePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFeatureFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserFeaturePayload>
          }
          findMany: {
            args: Prisma.UserFeatureFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserFeaturePayload>[]
          }
          create: {
            args: Prisma.UserFeatureCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserFeaturePayload>
          }
          createMany: {
            args: Prisma.UserFeatureCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserFeatureCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserFeaturePayload>[]
          }
          delete: {
            args: Prisma.UserFeatureDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserFeaturePayload>
          }
          update: {
            args: Prisma.UserFeatureUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserFeaturePayload>
          }
          deleteMany: {
            args: Prisma.UserFeatureDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserFeatureUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserFeatureUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserFeaturePayload>[]
          }
          upsert: {
            args: Prisma.UserFeatureUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserFeaturePayload>
          }
          aggregate: {
            args: Prisma.UserFeatureAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUserFeature>
          }
          groupBy: {
            args: Prisma.UserFeatureGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserFeatureGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserFeatureCountArgs<ExtArgs>
            result: $Utils.Optional<UserFeatureCountAggregateOutputType> | number
          }
        }
      }
      FeatureInstance: {
        payload: Prisma.$FeatureInstancePayload<ExtArgs>
        fields: Prisma.FeatureInstanceFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FeatureInstanceFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeatureInstancePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FeatureInstanceFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeatureInstancePayload>
          }
          findFirst: {
            args: Prisma.FeatureInstanceFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeatureInstancePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FeatureInstanceFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeatureInstancePayload>
          }
          findMany: {
            args: Prisma.FeatureInstanceFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeatureInstancePayload>[]
          }
          create: {
            args: Prisma.FeatureInstanceCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeatureInstancePayload>
          }
          createMany: {
            args: Prisma.FeatureInstanceCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.FeatureInstanceCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeatureInstancePayload>[]
          }
          delete: {
            args: Prisma.FeatureInstanceDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeatureInstancePayload>
          }
          update: {
            args: Prisma.FeatureInstanceUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeatureInstancePayload>
          }
          deleteMany: {
            args: Prisma.FeatureInstanceDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.FeatureInstanceUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.FeatureInstanceUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeatureInstancePayload>[]
          }
          upsert: {
            args: Prisma.FeatureInstanceUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeatureInstancePayload>
          }
          aggregate: {
            args: Prisma.FeatureInstanceAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFeatureInstance>
          }
          groupBy: {
            args: Prisma.FeatureInstanceGroupByArgs<ExtArgs>
            result: $Utils.Optional<FeatureInstanceGroupByOutputType>[]
          }
          count: {
            args: Prisma.FeatureInstanceCountArgs<ExtArgs>
            result: $Utils.Optional<FeatureInstanceCountAggregateOutputType> | number
          }
        }
      }
      FeatureMembership: {
        payload: Prisma.$FeatureMembershipPayload<ExtArgs>
        fields: Prisma.FeatureMembershipFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FeatureMembershipFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeatureMembershipPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FeatureMembershipFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeatureMembershipPayload>
          }
          findFirst: {
            args: Prisma.FeatureMembershipFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeatureMembershipPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FeatureMembershipFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeatureMembershipPayload>
          }
          findMany: {
            args: Prisma.FeatureMembershipFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeatureMembershipPayload>[]
          }
          create: {
            args: Prisma.FeatureMembershipCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeatureMembershipPayload>
          }
          createMany: {
            args: Prisma.FeatureMembershipCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.FeatureMembershipCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeatureMembershipPayload>[]
          }
          delete: {
            args: Prisma.FeatureMembershipDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeatureMembershipPayload>
          }
          update: {
            args: Prisma.FeatureMembershipUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeatureMembershipPayload>
          }
          deleteMany: {
            args: Prisma.FeatureMembershipDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.FeatureMembershipUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.FeatureMembershipUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeatureMembershipPayload>[]
          }
          upsert: {
            args: Prisma.FeatureMembershipUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeatureMembershipPayload>
          }
          aggregate: {
            args: Prisma.FeatureMembershipAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFeatureMembership>
          }
          groupBy: {
            args: Prisma.FeatureMembershipGroupByArgs<ExtArgs>
            result: $Utils.Optional<FeatureMembershipGroupByOutputType>[]
          }
          count: {
            args: Prisma.FeatureMembershipCountArgs<ExtArgs>
            result: $Utils.Optional<FeatureMembershipCountAggregateOutputType> | number
          }
        }
      }
      FeatureInvite: {
        payload: Prisma.$FeatureInvitePayload<ExtArgs>
        fields: Prisma.FeatureInviteFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FeatureInviteFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeatureInvitePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FeatureInviteFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeatureInvitePayload>
          }
          findFirst: {
            args: Prisma.FeatureInviteFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeatureInvitePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FeatureInviteFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeatureInvitePayload>
          }
          findMany: {
            args: Prisma.FeatureInviteFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeatureInvitePayload>[]
          }
          create: {
            args: Prisma.FeatureInviteCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeatureInvitePayload>
          }
          createMany: {
            args: Prisma.FeatureInviteCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.FeatureInviteCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeatureInvitePayload>[]
          }
          delete: {
            args: Prisma.FeatureInviteDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeatureInvitePayload>
          }
          update: {
            args: Prisma.FeatureInviteUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeatureInvitePayload>
          }
          deleteMany: {
            args: Prisma.FeatureInviteDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.FeatureInviteUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.FeatureInviteUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeatureInvitePayload>[]
          }
          upsert: {
            args: Prisma.FeatureInviteUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeatureInvitePayload>
          }
          aggregate: {
            args: Prisma.FeatureInviteAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFeatureInvite>
          }
          groupBy: {
            args: Prisma.FeatureInviteGroupByArgs<ExtArgs>
            result: $Utils.Optional<FeatureInviteGroupByOutputType>[]
          }
          count: {
            args: Prisma.FeatureInviteCountArgs<ExtArgs>
            result: $Utils.Optional<FeatureInviteCountAggregateOutputType> | number
          }
        }
      }
      Watchlist: {
        payload: Prisma.$WatchlistPayload<ExtArgs>
        fields: Prisma.WatchlistFieldRefs
        operations: {
          findUnique: {
            args: Prisma.WatchlistFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WatchlistPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.WatchlistFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WatchlistPayload>
          }
          findFirst: {
            args: Prisma.WatchlistFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WatchlistPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.WatchlistFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WatchlistPayload>
          }
          findMany: {
            args: Prisma.WatchlistFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WatchlistPayload>[]
          }
          create: {
            args: Prisma.WatchlistCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WatchlistPayload>
          }
          createMany: {
            args: Prisma.WatchlistCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.WatchlistCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WatchlistPayload>[]
          }
          delete: {
            args: Prisma.WatchlistDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WatchlistPayload>
          }
          update: {
            args: Prisma.WatchlistUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WatchlistPayload>
          }
          deleteMany: {
            args: Prisma.WatchlistDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.WatchlistUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.WatchlistUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WatchlistPayload>[]
          }
          upsert: {
            args: Prisma.WatchlistUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WatchlistPayload>
          }
          aggregate: {
            args: Prisma.WatchlistAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateWatchlist>
          }
          groupBy: {
            args: Prisma.WatchlistGroupByArgs<ExtArgs>
            result: $Utils.Optional<WatchlistGroupByOutputType>[]
          }
          count: {
            args: Prisma.WatchlistCountArgs<ExtArgs>
            result: $Utils.Optional<WatchlistCountAggregateOutputType> | number
          }
        }
      }
      WatchlistItem: {
        payload: Prisma.$WatchlistItemPayload<ExtArgs>
        fields: Prisma.WatchlistItemFieldRefs
        operations: {
          findUnique: {
            args: Prisma.WatchlistItemFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WatchlistItemPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.WatchlistItemFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WatchlistItemPayload>
          }
          findFirst: {
            args: Prisma.WatchlistItemFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WatchlistItemPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.WatchlistItemFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WatchlistItemPayload>
          }
          findMany: {
            args: Prisma.WatchlistItemFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WatchlistItemPayload>[]
          }
          create: {
            args: Prisma.WatchlistItemCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WatchlistItemPayload>
          }
          createMany: {
            args: Prisma.WatchlistItemCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.WatchlistItemCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WatchlistItemPayload>[]
          }
          delete: {
            args: Prisma.WatchlistItemDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WatchlistItemPayload>
          }
          update: {
            args: Prisma.WatchlistItemUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WatchlistItemPayload>
          }
          deleteMany: {
            args: Prisma.WatchlistItemDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.WatchlistItemUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.WatchlistItemUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WatchlistItemPayload>[]
          }
          upsert: {
            args: Prisma.WatchlistItemUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WatchlistItemPayload>
          }
          aggregate: {
            args: Prisma.WatchlistItemAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateWatchlistItem>
          }
          groupBy: {
            args: Prisma.WatchlistItemGroupByArgs<ExtArgs>
            result: $Utils.Optional<WatchlistItemGroupByOutputType>[]
          }
          count: {
            args: Prisma.WatchlistItemCountArgs<ExtArgs>
            result: $Utils.Optional<WatchlistItemCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory | null
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    account?: AccountOmit
    session?: SessionOmit
    user?: UserOmit
    verificationToken?: VerificationTokenOmit
    userFeature?: UserFeatureOmit
    featureInstance?: FeatureInstanceOmit
    featureMembership?: FeatureMembershipOmit
    featureInvite?: FeatureInviteOmit
    watchlist?: WatchlistOmit
    watchlistItem?: WatchlistItemOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    accounts: number
    featureInvites: number
    featureMemberships: number
    ownedFeatureInstances: number
    sessions: number
    userFeatures: number
    watchlistItems: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    accounts?: boolean | UserCountOutputTypeCountAccountsArgs
    featureInvites?: boolean | UserCountOutputTypeCountFeatureInvitesArgs
    featureMemberships?: boolean | UserCountOutputTypeCountFeatureMembershipsArgs
    ownedFeatureInstances?: boolean | UserCountOutputTypeCountOwnedFeatureInstancesArgs
    sessions?: boolean | UserCountOutputTypeCountSessionsArgs
    userFeatures?: boolean | UserCountOutputTypeCountUserFeaturesArgs
    watchlistItems?: boolean | UserCountOutputTypeCountWatchlistItemsArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountAccountsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AccountWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountFeatureInvitesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FeatureInviteWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountFeatureMembershipsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FeatureMembershipWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountOwnedFeatureInstancesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FeatureInstanceWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountSessionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SessionWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountUserFeaturesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserFeatureWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountWatchlistItemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WatchlistItemWhereInput
  }


  /**
   * Count Type FeatureInstanceCountOutputType
   */

  export type FeatureInstanceCountOutputType = {
    invites: number
    memberships: number
  }

  export type FeatureInstanceCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    invites?: boolean | FeatureInstanceCountOutputTypeCountInvitesArgs
    memberships?: boolean | FeatureInstanceCountOutputTypeCountMembershipsArgs
  }

  // Custom InputTypes
  /**
   * FeatureInstanceCountOutputType without action
   */
  export type FeatureInstanceCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FeatureInstanceCountOutputType
     */
    select?: FeatureInstanceCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * FeatureInstanceCountOutputType without action
   */
  export type FeatureInstanceCountOutputTypeCountInvitesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FeatureInviteWhereInput
  }

  /**
   * FeatureInstanceCountOutputType without action
   */
  export type FeatureInstanceCountOutputTypeCountMembershipsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FeatureMembershipWhereInput
  }


  /**
   * Count Type WatchlistCountOutputType
   */

  export type WatchlistCountOutputType = {
    items: number
  }

  export type WatchlistCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    items?: boolean | WatchlistCountOutputTypeCountItemsArgs
  }

  // Custom InputTypes
  /**
   * WatchlistCountOutputType without action
   */
  export type WatchlistCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WatchlistCountOutputType
     */
    select?: WatchlistCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * WatchlistCountOutputType without action
   */
  export type WatchlistCountOutputTypeCountItemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WatchlistItemWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Account
   */

  export type AggregateAccount = {
    _count: AccountCountAggregateOutputType | null
    _avg: AccountAvgAggregateOutputType | null
    _sum: AccountSumAggregateOutputType | null
    _min: AccountMinAggregateOutputType | null
    _max: AccountMaxAggregateOutputType | null
  }

  export type AccountAvgAggregateOutputType = {
    expires_at: number | null
    refresh_token_expires_in: number | null
  }

  export type AccountSumAggregateOutputType = {
    expires_at: number | null
    refresh_token_expires_in: number | null
  }

  export type AccountMinAggregateOutputType = {
    id: string | null
    userId: string | null
    type: string | null
    provider: string | null
    providerAccountId: string | null
    refresh_token: string | null
    access_token: string | null
    expires_at: number | null
    token_type: string | null
    scope: string | null
    id_token: string | null
    session_state: string | null
    refresh_token_expires_in: number | null
  }

  export type AccountMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    type: string | null
    provider: string | null
    providerAccountId: string | null
    refresh_token: string | null
    access_token: string | null
    expires_at: number | null
    token_type: string | null
    scope: string | null
    id_token: string | null
    session_state: string | null
    refresh_token_expires_in: number | null
  }

  export type AccountCountAggregateOutputType = {
    id: number
    userId: number
    type: number
    provider: number
    providerAccountId: number
    refresh_token: number
    access_token: number
    expires_at: number
    token_type: number
    scope: number
    id_token: number
    session_state: number
    refresh_token_expires_in: number
    _all: number
  }


  export type AccountAvgAggregateInputType = {
    expires_at?: true
    refresh_token_expires_in?: true
  }

  export type AccountSumAggregateInputType = {
    expires_at?: true
    refresh_token_expires_in?: true
  }

  export type AccountMinAggregateInputType = {
    id?: true
    userId?: true
    type?: true
    provider?: true
    providerAccountId?: true
    refresh_token?: true
    access_token?: true
    expires_at?: true
    token_type?: true
    scope?: true
    id_token?: true
    session_state?: true
    refresh_token_expires_in?: true
  }

  export type AccountMaxAggregateInputType = {
    id?: true
    userId?: true
    type?: true
    provider?: true
    providerAccountId?: true
    refresh_token?: true
    access_token?: true
    expires_at?: true
    token_type?: true
    scope?: true
    id_token?: true
    session_state?: true
    refresh_token_expires_in?: true
  }

  export type AccountCountAggregateInputType = {
    id?: true
    userId?: true
    type?: true
    provider?: true
    providerAccountId?: true
    refresh_token?: true
    access_token?: true
    expires_at?: true
    token_type?: true
    scope?: true
    id_token?: true
    session_state?: true
    refresh_token_expires_in?: true
    _all?: true
  }

  export type AccountAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Account to aggregate.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Accounts
    **/
    _count?: true | AccountCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AccountAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AccountSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AccountMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AccountMaxAggregateInputType
  }

  export type GetAccountAggregateType<T extends AccountAggregateArgs> = {
        [P in keyof T & keyof AggregateAccount]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAccount[P]>
      : GetScalarType<T[P], AggregateAccount[P]>
  }




  export type AccountGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AccountWhereInput
    orderBy?: AccountOrderByWithAggregationInput | AccountOrderByWithAggregationInput[]
    by: AccountScalarFieldEnum[] | AccountScalarFieldEnum
    having?: AccountScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AccountCountAggregateInputType | true
    _avg?: AccountAvgAggregateInputType
    _sum?: AccountSumAggregateInputType
    _min?: AccountMinAggregateInputType
    _max?: AccountMaxAggregateInputType
  }

  export type AccountGroupByOutputType = {
    id: string
    userId: string
    type: string
    provider: string
    providerAccountId: string
    refresh_token: string | null
    access_token: string | null
    expires_at: number | null
    token_type: string | null
    scope: string | null
    id_token: string | null
    session_state: string | null
    refresh_token_expires_in: number | null
    _count: AccountCountAggregateOutputType | null
    _avg: AccountAvgAggregateOutputType | null
    _sum: AccountSumAggregateOutputType | null
    _min: AccountMinAggregateOutputType | null
    _max: AccountMaxAggregateOutputType | null
  }

  type GetAccountGroupByPayload<T extends AccountGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AccountGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AccountGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AccountGroupByOutputType[P]>
            : GetScalarType<T[P], AccountGroupByOutputType[P]>
        }
      >
    >


  export type AccountSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    type?: boolean
    provider?: boolean
    providerAccountId?: boolean
    refresh_token?: boolean
    access_token?: boolean
    expires_at?: boolean
    token_type?: boolean
    scope?: boolean
    id_token?: boolean
    session_state?: boolean
    refresh_token_expires_in?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["account"]>

  export type AccountSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    type?: boolean
    provider?: boolean
    providerAccountId?: boolean
    refresh_token?: boolean
    access_token?: boolean
    expires_at?: boolean
    token_type?: boolean
    scope?: boolean
    id_token?: boolean
    session_state?: boolean
    refresh_token_expires_in?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["account"]>

  export type AccountSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    type?: boolean
    provider?: boolean
    providerAccountId?: boolean
    refresh_token?: boolean
    access_token?: boolean
    expires_at?: boolean
    token_type?: boolean
    scope?: boolean
    id_token?: boolean
    session_state?: boolean
    refresh_token_expires_in?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["account"]>

  export type AccountSelectScalar = {
    id?: boolean
    userId?: boolean
    type?: boolean
    provider?: boolean
    providerAccountId?: boolean
    refresh_token?: boolean
    access_token?: boolean
    expires_at?: boolean
    token_type?: boolean
    scope?: boolean
    id_token?: boolean
    session_state?: boolean
    refresh_token_expires_in?: boolean
  }

  export type AccountOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "type" | "provider" | "providerAccountId" | "refresh_token" | "access_token" | "expires_at" | "token_type" | "scope" | "id_token" | "session_state" | "refresh_token_expires_in", ExtArgs["result"]["account"]>
  export type AccountInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type AccountIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type AccountIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $AccountPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Account"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      type: string
      provider: string
      providerAccountId: string
      refresh_token: string | null
      access_token: string | null
      expires_at: number | null
      token_type: string | null
      scope: string | null
      id_token: string | null
      session_state: string | null
      refresh_token_expires_in: number | null
    }, ExtArgs["result"]["account"]>
    composites: {}
  }

  type AccountGetPayload<S extends boolean | null | undefined | AccountDefaultArgs> = $Result.GetResult<Prisma.$AccountPayload, S>

  type AccountCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AccountFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AccountCountAggregateInputType | true
    }

  export interface AccountDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Account'], meta: { name: 'Account' } }
    /**
     * Find zero or one Account that matches the filter.
     * @param {AccountFindUniqueArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AccountFindUniqueArgs>(args: SelectSubset<T, AccountFindUniqueArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Account that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AccountFindUniqueOrThrowArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AccountFindUniqueOrThrowArgs>(args: SelectSubset<T, AccountFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Account that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountFindFirstArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AccountFindFirstArgs>(args?: SelectSubset<T, AccountFindFirstArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Account that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountFindFirstOrThrowArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AccountFindFirstOrThrowArgs>(args?: SelectSubset<T, AccountFindFirstOrThrowArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Accounts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Accounts
     * const accounts = await prisma.account.findMany()
     * 
     * // Get first 10 Accounts
     * const accounts = await prisma.account.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const accountWithIdOnly = await prisma.account.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AccountFindManyArgs>(args?: SelectSubset<T, AccountFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Account.
     * @param {AccountCreateArgs} args - Arguments to create a Account.
     * @example
     * // Create one Account
     * const Account = await prisma.account.create({
     *   data: {
     *     // ... data to create a Account
     *   }
     * })
     * 
     */
    create<T extends AccountCreateArgs>(args: SelectSubset<T, AccountCreateArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Accounts.
     * @param {AccountCreateManyArgs} args - Arguments to create many Accounts.
     * @example
     * // Create many Accounts
     * const account = await prisma.account.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AccountCreateManyArgs>(args?: SelectSubset<T, AccountCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Accounts and returns the data saved in the database.
     * @param {AccountCreateManyAndReturnArgs} args - Arguments to create many Accounts.
     * @example
     * // Create many Accounts
     * const account = await prisma.account.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Accounts and only return the `id`
     * const accountWithIdOnly = await prisma.account.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AccountCreateManyAndReturnArgs>(args?: SelectSubset<T, AccountCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Account.
     * @param {AccountDeleteArgs} args - Arguments to delete one Account.
     * @example
     * // Delete one Account
     * const Account = await prisma.account.delete({
     *   where: {
     *     // ... filter to delete one Account
     *   }
     * })
     * 
     */
    delete<T extends AccountDeleteArgs>(args: SelectSubset<T, AccountDeleteArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Account.
     * @param {AccountUpdateArgs} args - Arguments to update one Account.
     * @example
     * // Update one Account
     * const account = await prisma.account.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AccountUpdateArgs>(args: SelectSubset<T, AccountUpdateArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Accounts.
     * @param {AccountDeleteManyArgs} args - Arguments to filter Accounts to delete.
     * @example
     * // Delete a few Accounts
     * const { count } = await prisma.account.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AccountDeleteManyArgs>(args?: SelectSubset<T, AccountDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Accounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Accounts
     * const account = await prisma.account.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AccountUpdateManyArgs>(args: SelectSubset<T, AccountUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Accounts and returns the data updated in the database.
     * @param {AccountUpdateManyAndReturnArgs} args - Arguments to update many Accounts.
     * @example
     * // Update many Accounts
     * const account = await prisma.account.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Accounts and only return the `id`
     * const accountWithIdOnly = await prisma.account.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends AccountUpdateManyAndReturnArgs>(args: SelectSubset<T, AccountUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Account.
     * @param {AccountUpsertArgs} args - Arguments to update or create a Account.
     * @example
     * // Update or create a Account
     * const account = await prisma.account.upsert({
     *   create: {
     *     // ... data to create a Account
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Account we want to update
     *   }
     * })
     */
    upsert<T extends AccountUpsertArgs>(args: SelectSubset<T, AccountUpsertArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Accounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountCountArgs} args - Arguments to filter Accounts to count.
     * @example
     * // Count the number of Accounts
     * const count = await prisma.account.count({
     *   where: {
     *     // ... the filter for the Accounts we want to count
     *   }
     * })
    **/
    count<T extends AccountCountArgs>(
      args?: Subset<T, AccountCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AccountCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Account.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AccountAggregateArgs>(args: Subset<T, AccountAggregateArgs>): Prisma.PrismaPromise<GetAccountAggregateType<T>>

    /**
     * Group by Account.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AccountGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AccountGroupByArgs['orderBy'] }
        : { orderBy?: AccountGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AccountGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAccountGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Account model
   */
  readonly fields: AccountFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Account.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AccountClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Account model
   */
  interface AccountFieldRefs {
    readonly id: FieldRef<"Account", 'String'>
    readonly userId: FieldRef<"Account", 'String'>
    readonly type: FieldRef<"Account", 'String'>
    readonly provider: FieldRef<"Account", 'String'>
    readonly providerAccountId: FieldRef<"Account", 'String'>
    readonly refresh_token: FieldRef<"Account", 'String'>
    readonly access_token: FieldRef<"Account", 'String'>
    readonly expires_at: FieldRef<"Account", 'Int'>
    readonly token_type: FieldRef<"Account", 'String'>
    readonly scope: FieldRef<"Account", 'String'>
    readonly id_token: FieldRef<"Account", 'String'>
    readonly session_state: FieldRef<"Account", 'String'>
    readonly refresh_token_expires_in: FieldRef<"Account", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Account findUnique
   */
  export type AccountFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Account to fetch.
     */
    where: AccountWhereUniqueInput
  }

  /**
   * Account findUniqueOrThrow
   */
  export type AccountFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Account to fetch.
     */
    where: AccountWhereUniqueInput
  }

  /**
   * Account findFirst
   */
  export type AccountFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Account to fetch.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Accounts.
     */
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Accounts.
     */
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[]
  }

  /**
   * Account findFirstOrThrow
   */
  export type AccountFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Account to fetch.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Accounts.
     */
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Accounts.
     */
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[]
  }

  /**
   * Account findMany
   */
  export type AccountFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Accounts to fetch.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Accounts.
     */
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[]
  }

  /**
   * Account create
   */
  export type AccountCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * The data needed to create a Account.
     */
    data: XOR<AccountCreateInput, AccountUncheckedCreateInput>
  }

  /**
   * Account createMany
   */
  export type AccountCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Accounts.
     */
    data: AccountCreateManyInput | AccountCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Account createManyAndReturn
   */
  export type AccountCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * The data used to create many Accounts.
     */
    data: AccountCreateManyInput | AccountCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Account update
   */
  export type AccountUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * The data needed to update a Account.
     */
    data: XOR<AccountUpdateInput, AccountUncheckedUpdateInput>
    /**
     * Choose, which Account to update.
     */
    where: AccountWhereUniqueInput
  }

  /**
   * Account updateMany
   */
  export type AccountUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Accounts.
     */
    data: XOR<AccountUpdateManyMutationInput, AccountUncheckedUpdateManyInput>
    /**
     * Filter which Accounts to update
     */
    where?: AccountWhereInput
    /**
     * Limit how many Accounts to update.
     */
    limit?: number
  }

  /**
   * Account updateManyAndReturn
   */
  export type AccountUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * The data used to update Accounts.
     */
    data: XOR<AccountUpdateManyMutationInput, AccountUncheckedUpdateManyInput>
    /**
     * Filter which Accounts to update
     */
    where?: AccountWhereInput
    /**
     * Limit how many Accounts to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Account upsert
   */
  export type AccountUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * The filter to search for the Account to update in case it exists.
     */
    where: AccountWhereUniqueInput
    /**
     * In case the Account found by the `where` argument doesn't exist, create a new Account with this data.
     */
    create: XOR<AccountCreateInput, AccountUncheckedCreateInput>
    /**
     * In case the Account was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AccountUpdateInput, AccountUncheckedUpdateInput>
  }

  /**
   * Account delete
   */
  export type AccountDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter which Account to delete.
     */
    where: AccountWhereUniqueInput
  }

  /**
   * Account deleteMany
   */
  export type AccountDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Accounts to delete
     */
    where?: AccountWhereInput
    /**
     * Limit how many Accounts to delete.
     */
    limit?: number
  }

  /**
   * Account without action
   */
  export type AccountDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
  }


  /**
   * Model Session
   */

  export type AggregateSession = {
    _count: SessionCountAggregateOutputType | null
    _min: SessionMinAggregateOutputType | null
    _max: SessionMaxAggregateOutputType | null
  }

  export type SessionMinAggregateOutputType = {
    id: string | null
    sessionToken: string | null
    userId: string | null
    expires: Date | null
  }

  export type SessionMaxAggregateOutputType = {
    id: string | null
    sessionToken: string | null
    userId: string | null
    expires: Date | null
  }

  export type SessionCountAggregateOutputType = {
    id: number
    sessionToken: number
    userId: number
    expires: number
    _all: number
  }


  export type SessionMinAggregateInputType = {
    id?: true
    sessionToken?: true
    userId?: true
    expires?: true
  }

  export type SessionMaxAggregateInputType = {
    id?: true
    sessionToken?: true
    userId?: true
    expires?: true
  }

  export type SessionCountAggregateInputType = {
    id?: true
    sessionToken?: true
    userId?: true
    expires?: true
    _all?: true
  }

  export type SessionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Session to aggregate.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Sessions
    **/
    _count?: true | SessionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SessionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SessionMaxAggregateInputType
  }

  export type GetSessionAggregateType<T extends SessionAggregateArgs> = {
        [P in keyof T & keyof AggregateSession]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSession[P]>
      : GetScalarType<T[P], AggregateSession[P]>
  }




  export type SessionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SessionWhereInput
    orderBy?: SessionOrderByWithAggregationInput | SessionOrderByWithAggregationInput[]
    by: SessionScalarFieldEnum[] | SessionScalarFieldEnum
    having?: SessionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SessionCountAggregateInputType | true
    _min?: SessionMinAggregateInputType
    _max?: SessionMaxAggregateInputType
  }

  export type SessionGroupByOutputType = {
    id: string
    sessionToken: string
    userId: string
    expires: Date
    _count: SessionCountAggregateOutputType | null
    _min: SessionMinAggregateOutputType | null
    _max: SessionMaxAggregateOutputType | null
  }

  type GetSessionGroupByPayload<T extends SessionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SessionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SessionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SessionGroupByOutputType[P]>
            : GetScalarType<T[P], SessionGroupByOutputType[P]>
        }
      >
    >


  export type SessionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sessionToken?: boolean
    userId?: boolean
    expires?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["session"]>

  export type SessionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sessionToken?: boolean
    userId?: boolean
    expires?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["session"]>

  export type SessionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sessionToken?: boolean
    userId?: boolean
    expires?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["session"]>

  export type SessionSelectScalar = {
    id?: boolean
    sessionToken?: boolean
    userId?: boolean
    expires?: boolean
  }

  export type SessionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "sessionToken" | "userId" | "expires", ExtArgs["result"]["session"]>
  export type SessionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type SessionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type SessionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $SessionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Session"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      sessionToken: string
      userId: string
      expires: Date
    }, ExtArgs["result"]["session"]>
    composites: {}
  }

  type SessionGetPayload<S extends boolean | null | undefined | SessionDefaultArgs> = $Result.GetResult<Prisma.$SessionPayload, S>

  type SessionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SessionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SessionCountAggregateInputType | true
    }

  export interface SessionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Session'], meta: { name: 'Session' } }
    /**
     * Find zero or one Session that matches the filter.
     * @param {SessionFindUniqueArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SessionFindUniqueArgs>(args: SelectSubset<T, SessionFindUniqueArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Session that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SessionFindUniqueOrThrowArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SessionFindUniqueOrThrowArgs>(args: SelectSubset<T, SessionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Session that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionFindFirstArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SessionFindFirstArgs>(args?: SelectSubset<T, SessionFindFirstArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Session that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionFindFirstOrThrowArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SessionFindFirstOrThrowArgs>(args?: SelectSubset<T, SessionFindFirstOrThrowArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Sessions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Sessions
     * const sessions = await prisma.session.findMany()
     * 
     * // Get first 10 Sessions
     * const sessions = await prisma.session.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const sessionWithIdOnly = await prisma.session.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SessionFindManyArgs>(args?: SelectSubset<T, SessionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Session.
     * @param {SessionCreateArgs} args - Arguments to create a Session.
     * @example
     * // Create one Session
     * const Session = await prisma.session.create({
     *   data: {
     *     // ... data to create a Session
     *   }
     * })
     * 
     */
    create<T extends SessionCreateArgs>(args: SelectSubset<T, SessionCreateArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Sessions.
     * @param {SessionCreateManyArgs} args - Arguments to create many Sessions.
     * @example
     * // Create many Sessions
     * const session = await prisma.session.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SessionCreateManyArgs>(args?: SelectSubset<T, SessionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Sessions and returns the data saved in the database.
     * @param {SessionCreateManyAndReturnArgs} args - Arguments to create many Sessions.
     * @example
     * // Create many Sessions
     * const session = await prisma.session.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Sessions and only return the `id`
     * const sessionWithIdOnly = await prisma.session.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SessionCreateManyAndReturnArgs>(args?: SelectSubset<T, SessionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Session.
     * @param {SessionDeleteArgs} args - Arguments to delete one Session.
     * @example
     * // Delete one Session
     * const Session = await prisma.session.delete({
     *   where: {
     *     // ... filter to delete one Session
     *   }
     * })
     * 
     */
    delete<T extends SessionDeleteArgs>(args: SelectSubset<T, SessionDeleteArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Session.
     * @param {SessionUpdateArgs} args - Arguments to update one Session.
     * @example
     * // Update one Session
     * const session = await prisma.session.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SessionUpdateArgs>(args: SelectSubset<T, SessionUpdateArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Sessions.
     * @param {SessionDeleteManyArgs} args - Arguments to filter Sessions to delete.
     * @example
     * // Delete a few Sessions
     * const { count } = await prisma.session.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SessionDeleteManyArgs>(args?: SelectSubset<T, SessionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Sessions
     * const session = await prisma.session.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SessionUpdateManyArgs>(args: SelectSubset<T, SessionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sessions and returns the data updated in the database.
     * @param {SessionUpdateManyAndReturnArgs} args - Arguments to update many Sessions.
     * @example
     * // Update many Sessions
     * const session = await prisma.session.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Sessions and only return the `id`
     * const sessionWithIdOnly = await prisma.session.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends SessionUpdateManyAndReturnArgs>(args: SelectSubset<T, SessionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Session.
     * @param {SessionUpsertArgs} args - Arguments to update or create a Session.
     * @example
     * // Update or create a Session
     * const session = await prisma.session.upsert({
     *   create: {
     *     // ... data to create a Session
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Session we want to update
     *   }
     * })
     */
    upsert<T extends SessionUpsertArgs>(args: SelectSubset<T, SessionUpsertArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Sessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionCountArgs} args - Arguments to filter Sessions to count.
     * @example
     * // Count the number of Sessions
     * const count = await prisma.session.count({
     *   where: {
     *     // ... the filter for the Sessions we want to count
     *   }
     * })
    **/
    count<T extends SessionCountArgs>(
      args?: Subset<T, SessionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SessionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Session.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SessionAggregateArgs>(args: Subset<T, SessionAggregateArgs>): Prisma.PrismaPromise<GetSessionAggregateType<T>>

    /**
     * Group by Session.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SessionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SessionGroupByArgs['orderBy'] }
        : { orderBy?: SessionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SessionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSessionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Session model
   */
  readonly fields: SessionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Session.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SessionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Session model
   */
  interface SessionFieldRefs {
    readonly id: FieldRef<"Session", 'String'>
    readonly sessionToken: FieldRef<"Session", 'String'>
    readonly userId: FieldRef<"Session", 'String'>
    readonly expires: FieldRef<"Session", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Session findUnique
   */
  export type SessionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session findUniqueOrThrow
   */
  export type SessionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session findFirst
   */
  export type SessionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sessions.
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sessions.
     */
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * Session findFirstOrThrow
   */
  export type SessionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sessions.
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sessions.
     */
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * Session findMany
   */
  export type SessionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Sessions to fetch.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Sessions.
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * Session create
   */
  export type SessionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * The data needed to create a Session.
     */
    data: XOR<SessionCreateInput, SessionUncheckedCreateInput>
  }

  /**
   * Session createMany
   */
  export type SessionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Sessions.
     */
    data: SessionCreateManyInput | SessionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Session createManyAndReturn
   */
  export type SessionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * The data used to create many Sessions.
     */
    data: SessionCreateManyInput | SessionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Session update
   */
  export type SessionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * The data needed to update a Session.
     */
    data: XOR<SessionUpdateInput, SessionUncheckedUpdateInput>
    /**
     * Choose, which Session to update.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session updateMany
   */
  export type SessionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Sessions.
     */
    data: XOR<SessionUpdateManyMutationInput, SessionUncheckedUpdateManyInput>
    /**
     * Filter which Sessions to update
     */
    where?: SessionWhereInput
    /**
     * Limit how many Sessions to update.
     */
    limit?: number
  }

  /**
   * Session updateManyAndReturn
   */
  export type SessionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * The data used to update Sessions.
     */
    data: XOR<SessionUpdateManyMutationInput, SessionUncheckedUpdateManyInput>
    /**
     * Filter which Sessions to update
     */
    where?: SessionWhereInput
    /**
     * Limit how many Sessions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Session upsert
   */
  export type SessionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * The filter to search for the Session to update in case it exists.
     */
    where: SessionWhereUniqueInput
    /**
     * In case the Session found by the `where` argument doesn't exist, create a new Session with this data.
     */
    create: XOR<SessionCreateInput, SessionUncheckedCreateInput>
    /**
     * In case the Session was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SessionUpdateInput, SessionUncheckedUpdateInput>
  }

  /**
   * Session delete
   */
  export type SessionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter which Session to delete.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session deleteMany
   */
  export type SessionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Sessions to delete
     */
    where?: SessionWhereInput
    /**
     * Limit how many Sessions to delete.
     */
    limit?: number
  }

  /**
   * Session without action
   */
  export type SessionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
  }


  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    emailVerified: Date | null
    image: string | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    emailVerified: Date | null
    image: string | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    name: number
    email: number
    emailVerified: number
    image: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    emailVerified?: true
    image?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    emailVerified?: true
    image?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    emailVerified?: true
    image?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    name: string | null
    email: string | null
    emailVerified: Date | null
    image: string | null
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    emailVerified?: boolean
    image?: boolean
    accounts?: boolean | User$accountsArgs<ExtArgs>
    featureInvites?: boolean | User$featureInvitesArgs<ExtArgs>
    featureMemberships?: boolean | User$featureMembershipsArgs<ExtArgs>
    ownedFeatureInstances?: boolean | User$ownedFeatureInstancesArgs<ExtArgs>
    sessions?: boolean | User$sessionsArgs<ExtArgs>
    userFeatures?: boolean | User$userFeaturesArgs<ExtArgs>
    watchlistItems?: boolean | User$watchlistItemsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    emailVerified?: boolean
    image?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    emailVerified?: boolean
    image?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    emailVerified?: boolean
    image?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "email" | "emailVerified" | "image", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    accounts?: boolean | User$accountsArgs<ExtArgs>
    featureInvites?: boolean | User$featureInvitesArgs<ExtArgs>
    featureMemberships?: boolean | User$featureMembershipsArgs<ExtArgs>
    ownedFeatureInstances?: boolean | User$ownedFeatureInstancesArgs<ExtArgs>
    sessions?: boolean | User$sessionsArgs<ExtArgs>
    userFeatures?: boolean | User$userFeaturesArgs<ExtArgs>
    watchlistItems?: boolean | User$watchlistItemsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      accounts: Prisma.$AccountPayload<ExtArgs>[]
      featureInvites: Prisma.$FeatureInvitePayload<ExtArgs>[]
      featureMemberships: Prisma.$FeatureMembershipPayload<ExtArgs>[]
      ownedFeatureInstances: Prisma.$FeatureInstancePayload<ExtArgs>[]
      sessions: Prisma.$SessionPayload<ExtArgs>[]
      userFeatures: Prisma.$UserFeaturePayload<ExtArgs>[]
      watchlistItems: Prisma.$WatchlistItemPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string | null
      email: string | null
      emailVerified: Date | null
      image: string | null
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    accounts<T extends User$accountsArgs<ExtArgs> = {}>(args?: Subset<T, User$accountsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    featureInvites<T extends User$featureInvitesArgs<ExtArgs> = {}>(args?: Subset<T, User$featureInvitesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FeatureInvitePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    featureMemberships<T extends User$featureMembershipsArgs<ExtArgs> = {}>(args?: Subset<T, User$featureMembershipsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FeatureMembershipPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    ownedFeatureInstances<T extends User$ownedFeatureInstancesArgs<ExtArgs> = {}>(args?: Subset<T, User$ownedFeatureInstancesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FeatureInstancePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    sessions<T extends User$sessionsArgs<ExtArgs> = {}>(args?: Subset<T, User$sessionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    userFeatures<T extends User$userFeaturesArgs<ExtArgs> = {}>(args?: Subset<T, User$userFeaturesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserFeaturePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    watchlistItems<T extends User$watchlistItemsArgs<ExtArgs> = {}>(args?: Subset<T, User$watchlistItemsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WatchlistItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly emailVerified: FieldRef<"User", 'DateTime'>
    readonly image: FieldRef<"User", 'String'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data?: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.accounts
   */
  export type User$accountsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    where?: AccountWhereInput
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    cursor?: AccountWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[]
  }

  /**
   * User.featureInvites
   */
  export type User$featureInvitesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FeatureInvite
     */
    select?: FeatureInviteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FeatureInvite
     */
    omit?: FeatureInviteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeatureInviteInclude<ExtArgs> | null
    where?: FeatureInviteWhereInput
    orderBy?: FeatureInviteOrderByWithRelationInput | FeatureInviteOrderByWithRelationInput[]
    cursor?: FeatureInviteWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FeatureInviteScalarFieldEnum | FeatureInviteScalarFieldEnum[]
  }

  /**
   * User.featureMemberships
   */
  export type User$featureMembershipsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FeatureMembership
     */
    select?: FeatureMembershipSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FeatureMembership
     */
    omit?: FeatureMembershipOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeatureMembershipInclude<ExtArgs> | null
    where?: FeatureMembershipWhereInput
    orderBy?: FeatureMembershipOrderByWithRelationInput | FeatureMembershipOrderByWithRelationInput[]
    cursor?: FeatureMembershipWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FeatureMembershipScalarFieldEnum | FeatureMembershipScalarFieldEnum[]
  }

  /**
   * User.ownedFeatureInstances
   */
  export type User$ownedFeatureInstancesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FeatureInstance
     */
    select?: FeatureInstanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FeatureInstance
     */
    omit?: FeatureInstanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeatureInstanceInclude<ExtArgs> | null
    where?: FeatureInstanceWhereInput
    orderBy?: FeatureInstanceOrderByWithRelationInput | FeatureInstanceOrderByWithRelationInput[]
    cursor?: FeatureInstanceWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FeatureInstanceScalarFieldEnum | FeatureInstanceScalarFieldEnum[]
  }

  /**
   * User.sessions
   */
  export type User$sessionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    where?: SessionWhereInput
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    cursor?: SessionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * User.userFeatures
   */
  export type User$userFeaturesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserFeature
     */
    select?: UserFeatureSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserFeature
     */
    omit?: UserFeatureOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserFeatureInclude<ExtArgs> | null
    where?: UserFeatureWhereInput
    orderBy?: UserFeatureOrderByWithRelationInput | UserFeatureOrderByWithRelationInput[]
    cursor?: UserFeatureWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserFeatureScalarFieldEnum | UserFeatureScalarFieldEnum[]
  }

  /**
   * User.watchlistItems
   */
  export type User$watchlistItemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WatchlistItem
     */
    select?: WatchlistItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WatchlistItem
     */
    omit?: WatchlistItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WatchlistItemInclude<ExtArgs> | null
    where?: WatchlistItemWhereInput
    orderBy?: WatchlistItemOrderByWithRelationInput | WatchlistItemOrderByWithRelationInput[]
    cursor?: WatchlistItemWhereUniqueInput
    take?: number
    skip?: number
    distinct?: WatchlistItemScalarFieldEnum | WatchlistItemScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model VerificationToken
   */

  export type AggregateVerificationToken = {
    _count: VerificationTokenCountAggregateOutputType | null
    _min: VerificationTokenMinAggregateOutputType | null
    _max: VerificationTokenMaxAggregateOutputType | null
  }

  export type VerificationTokenMinAggregateOutputType = {
    identifier: string | null
    token: string | null
    expires: Date | null
  }

  export type VerificationTokenMaxAggregateOutputType = {
    identifier: string | null
    token: string | null
    expires: Date | null
  }

  export type VerificationTokenCountAggregateOutputType = {
    identifier: number
    token: number
    expires: number
    _all: number
  }


  export type VerificationTokenMinAggregateInputType = {
    identifier?: true
    token?: true
    expires?: true
  }

  export type VerificationTokenMaxAggregateInputType = {
    identifier?: true
    token?: true
    expires?: true
  }

  export type VerificationTokenCountAggregateInputType = {
    identifier?: true
    token?: true
    expires?: true
    _all?: true
  }

  export type VerificationTokenAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which VerificationToken to aggregate.
     */
    where?: VerificationTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VerificationTokens to fetch.
     */
    orderBy?: VerificationTokenOrderByWithRelationInput | VerificationTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: VerificationTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VerificationTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VerificationTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned VerificationTokens
    **/
    _count?: true | VerificationTokenCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: VerificationTokenMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: VerificationTokenMaxAggregateInputType
  }

  export type GetVerificationTokenAggregateType<T extends VerificationTokenAggregateArgs> = {
        [P in keyof T & keyof AggregateVerificationToken]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVerificationToken[P]>
      : GetScalarType<T[P], AggregateVerificationToken[P]>
  }




  export type VerificationTokenGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VerificationTokenWhereInput
    orderBy?: VerificationTokenOrderByWithAggregationInput | VerificationTokenOrderByWithAggregationInput[]
    by: VerificationTokenScalarFieldEnum[] | VerificationTokenScalarFieldEnum
    having?: VerificationTokenScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: VerificationTokenCountAggregateInputType | true
    _min?: VerificationTokenMinAggregateInputType
    _max?: VerificationTokenMaxAggregateInputType
  }

  export type VerificationTokenGroupByOutputType = {
    identifier: string
    token: string
    expires: Date
    _count: VerificationTokenCountAggregateOutputType | null
    _min: VerificationTokenMinAggregateOutputType | null
    _max: VerificationTokenMaxAggregateOutputType | null
  }

  type GetVerificationTokenGroupByPayload<T extends VerificationTokenGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<VerificationTokenGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof VerificationTokenGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], VerificationTokenGroupByOutputType[P]>
            : GetScalarType<T[P], VerificationTokenGroupByOutputType[P]>
        }
      >
    >


  export type VerificationTokenSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    identifier?: boolean
    token?: boolean
    expires?: boolean
  }, ExtArgs["result"]["verificationToken"]>

  export type VerificationTokenSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    identifier?: boolean
    token?: boolean
    expires?: boolean
  }, ExtArgs["result"]["verificationToken"]>

  export type VerificationTokenSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    identifier?: boolean
    token?: boolean
    expires?: boolean
  }, ExtArgs["result"]["verificationToken"]>

  export type VerificationTokenSelectScalar = {
    identifier?: boolean
    token?: boolean
    expires?: boolean
  }

  export type VerificationTokenOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"identifier" | "token" | "expires", ExtArgs["result"]["verificationToken"]>

  export type $VerificationTokenPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "VerificationToken"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      identifier: string
      token: string
      expires: Date
    }, ExtArgs["result"]["verificationToken"]>
    composites: {}
  }

  type VerificationTokenGetPayload<S extends boolean | null | undefined | VerificationTokenDefaultArgs> = $Result.GetResult<Prisma.$VerificationTokenPayload, S>

  type VerificationTokenCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<VerificationTokenFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: VerificationTokenCountAggregateInputType | true
    }

  export interface VerificationTokenDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['VerificationToken'], meta: { name: 'VerificationToken' } }
    /**
     * Find zero or one VerificationToken that matches the filter.
     * @param {VerificationTokenFindUniqueArgs} args - Arguments to find a VerificationToken
     * @example
     * // Get one VerificationToken
     * const verificationToken = await prisma.verificationToken.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends VerificationTokenFindUniqueArgs>(args: SelectSubset<T, VerificationTokenFindUniqueArgs<ExtArgs>>): Prisma__VerificationTokenClient<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one VerificationToken that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {VerificationTokenFindUniqueOrThrowArgs} args - Arguments to find a VerificationToken
     * @example
     * // Get one VerificationToken
     * const verificationToken = await prisma.verificationToken.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends VerificationTokenFindUniqueOrThrowArgs>(args: SelectSubset<T, VerificationTokenFindUniqueOrThrowArgs<ExtArgs>>): Prisma__VerificationTokenClient<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first VerificationToken that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationTokenFindFirstArgs} args - Arguments to find a VerificationToken
     * @example
     * // Get one VerificationToken
     * const verificationToken = await prisma.verificationToken.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends VerificationTokenFindFirstArgs>(args?: SelectSubset<T, VerificationTokenFindFirstArgs<ExtArgs>>): Prisma__VerificationTokenClient<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first VerificationToken that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationTokenFindFirstOrThrowArgs} args - Arguments to find a VerificationToken
     * @example
     * // Get one VerificationToken
     * const verificationToken = await prisma.verificationToken.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends VerificationTokenFindFirstOrThrowArgs>(args?: SelectSubset<T, VerificationTokenFindFirstOrThrowArgs<ExtArgs>>): Prisma__VerificationTokenClient<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more VerificationTokens that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationTokenFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all VerificationTokens
     * const verificationTokens = await prisma.verificationToken.findMany()
     * 
     * // Get first 10 VerificationTokens
     * const verificationTokens = await prisma.verificationToken.findMany({ take: 10 })
     * 
     * // Only select the `identifier`
     * const verificationTokenWithIdentifierOnly = await prisma.verificationToken.findMany({ select: { identifier: true } })
     * 
     */
    findMany<T extends VerificationTokenFindManyArgs>(args?: SelectSubset<T, VerificationTokenFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a VerificationToken.
     * @param {VerificationTokenCreateArgs} args - Arguments to create a VerificationToken.
     * @example
     * // Create one VerificationToken
     * const VerificationToken = await prisma.verificationToken.create({
     *   data: {
     *     // ... data to create a VerificationToken
     *   }
     * })
     * 
     */
    create<T extends VerificationTokenCreateArgs>(args: SelectSubset<T, VerificationTokenCreateArgs<ExtArgs>>): Prisma__VerificationTokenClient<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many VerificationTokens.
     * @param {VerificationTokenCreateManyArgs} args - Arguments to create many VerificationTokens.
     * @example
     * // Create many VerificationTokens
     * const verificationToken = await prisma.verificationToken.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends VerificationTokenCreateManyArgs>(args?: SelectSubset<T, VerificationTokenCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many VerificationTokens and returns the data saved in the database.
     * @param {VerificationTokenCreateManyAndReturnArgs} args - Arguments to create many VerificationTokens.
     * @example
     * // Create many VerificationTokens
     * const verificationToken = await prisma.verificationToken.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many VerificationTokens and only return the `identifier`
     * const verificationTokenWithIdentifierOnly = await prisma.verificationToken.createManyAndReturn({
     *   select: { identifier: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends VerificationTokenCreateManyAndReturnArgs>(args?: SelectSubset<T, VerificationTokenCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a VerificationToken.
     * @param {VerificationTokenDeleteArgs} args - Arguments to delete one VerificationToken.
     * @example
     * // Delete one VerificationToken
     * const VerificationToken = await prisma.verificationToken.delete({
     *   where: {
     *     // ... filter to delete one VerificationToken
     *   }
     * })
     * 
     */
    delete<T extends VerificationTokenDeleteArgs>(args: SelectSubset<T, VerificationTokenDeleteArgs<ExtArgs>>): Prisma__VerificationTokenClient<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one VerificationToken.
     * @param {VerificationTokenUpdateArgs} args - Arguments to update one VerificationToken.
     * @example
     * // Update one VerificationToken
     * const verificationToken = await prisma.verificationToken.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends VerificationTokenUpdateArgs>(args: SelectSubset<T, VerificationTokenUpdateArgs<ExtArgs>>): Prisma__VerificationTokenClient<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more VerificationTokens.
     * @param {VerificationTokenDeleteManyArgs} args - Arguments to filter VerificationTokens to delete.
     * @example
     * // Delete a few VerificationTokens
     * const { count } = await prisma.verificationToken.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends VerificationTokenDeleteManyArgs>(args?: SelectSubset<T, VerificationTokenDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more VerificationTokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationTokenUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many VerificationTokens
     * const verificationToken = await prisma.verificationToken.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends VerificationTokenUpdateManyArgs>(args: SelectSubset<T, VerificationTokenUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more VerificationTokens and returns the data updated in the database.
     * @param {VerificationTokenUpdateManyAndReturnArgs} args - Arguments to update many VerificationTokens.
     * @example
     * // Update many VerificationTokens
     * const verificationToken = await prisma.verificationToken.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more VerificationTokens and only return the `identifier`
     * const verificationTokenWithIdentifierOnly = await prisma.verificationToken.updateManyAndReturn({
     *   select: { identifier: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends VerificationTokenUpdateManyAndReturnArgs>(args: SelectSubset<T, VerificationTokenUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one VerificationToken.
     * @param {VerificationTokenUpsertArgs} args - Arguments to update or create a VerificationToken.
     * @example
     * // Update or create a VerificationToken
     * const verificationToken = await prisma.verificationToken.upsert({
     *   create: {
     *     // ... data to create a VerificationToken
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the VerificationToken we want to update
     *   }
     * })
     */
    upsert<T extends VerificationTokenUpsertArgs>(args: SelectSubset<T, VerificationTokenUpsertArgs<ExtArgs>>): Prisma__VerificationTokenClient<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of VerificationTokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationTokenCountArgs} args - Arguments to filter VerificationTokens to count.
     * @example
     * // Count the number of VerificationTokens
     * const count = await prisma.verificationToken.count({
     *   where: {
     *     // ... the filter for the VerificationTokens we want to count
     *   }
     * })
    **/
    count<T extends VerificationTokenCountArgs>(
      args?: Subset<T, VerificationTokenCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], VerificationTokenCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a VerificationToken.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationTokenAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends VerificationTokenAggregateArgs>(args: Subset<T, VerificationTokenAggregateArgs>): Prisma.PrismaPromise<GetVerificationTokenAggregateType<T>>

    /**
     * Group by VerificationToken.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationTokenGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends VerificationTokenGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: VerificationTokenGroupByArgs['orderBy'] }
        : { orderBy?: VerificationTokenGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, VerificationTokenGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVerificationTokenGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the VerificationToken model
   */
  readonly fields: VerificationTokenFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for VerificationToken.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__VerificationTokenClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the VerificationToken model
   */
  interface VerificationTokenFieldRefs {
    readonly identifier: FieldRef<"VerificationToken", 'String'>
    readonly token: FieldRef<"VerificationToken", 'String'>
    readonly expires: FieldRef<"VerificationToken", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * VerificationToken findUnique
   */
  export type VerificationTokenFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * Filter, which VerificationToken to fetch.
     */
    where: VerificationTokenWhereUniqueInput
  }

  /**
   * VerificationToken findUniqueOrThrow
   */
  export type VerificationTokenFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * Filter, which VerificationToken to fetch.
     */
    where: VerificationTokenWhereUniqueInput
  }

  /**
   * VerificationToken findFirst
   */
  export type VerificationTokenFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * Filter, which VerificationToken to fetch.
     */
    where?: VerificationTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VerificationTokens to fetch.
     */
    orderBy?: VerificationTokenOrderByWithRelationInput | VerificationTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for VerificationTokens.
     */
    cursor?: VerificationTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VerificationTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VerificationTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of VerificationTokens.
     */
    distinct?: VerificationTokenScalarFieldEnum | VerificationTokenScalarFieldEnum[]
  }

  /**
   * VerificationToken findFirstOrThrow
   */
  export type VerificationTokenFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * Filter, which VerificationToken to fetch.
     */
    where?: VerificationTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VerificationTokens to fetch.
     */
    orderBy?: VerificationTokenOrderByWithRelationInput | VerificationTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for VerificationTokens.
     */
    cursor?: VerificationTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VerificationTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VerificationTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of VerificationTokens.
     */
    distinct?: VerificationTokenScalarFieldEnum | VerificationTokenScalarFieldEnum[]
  }

  /**
   * VerificationToken findMany
   */
  export type VerificationTokenFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * Filter, which VerificationTokens to fetch.
     */
    where?: VerificationTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VerificationTokens to fetch.
     */
    orderBy?: VerificationTokenOrderByWithRelationInput | VerificationTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing VerificationTokens.
     */
    cursor?: VerificationTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VerificationTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VerificationTokens.
     */
    skip?: number
    distinct?: VerificationTokenScalarFieldEnum | VerificationTokenScalarFieldEnum[]
  }

  /**
   * VerificationToken create
   */
  export type VerificationTokenCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * The data needed to create a VerificationToken.
     */
    data: XOR<VerificationTokenCreateInput, VerificationTokenUncheckedCreateInput>
  }

  /**
   * VerificationToken createMany
   */
  export type VerificationTokenCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many VerificationTokens.
     */
    data: VerificationTokenCreateManyInput | VerificationTokenCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * VerificationToken createManyAndReturn
   */
  export type VerificationTokenCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * The data used to create many VerificationTokens.
     */
    data: VerificationTokenCreateManyInput | VerificationTokenCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * VerificationToken update
   */
  export type VerificationTokenUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * The data needed to update a VerificationToken.
     */
    data: XOR<VerificationTokenUpdateInput, VerificationTokenUncheckedUpdateInput>
    /**
     * Choose, which VerificationToken to update.
     */
    where: VerificationTokenWhereUniqueInput
  }

  /**
   * VerificationToken updateMany
   */
  export type VerificationTokenUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update VerificationTokens.
     */
    data: XOR<VerificationTokenUpdateManyMutationInput, VerificationTokenUncheckedUpdateManyInput>
    /**
     * Filter which VerificationTokens to update
     */
    where?: VerificationTokenWhereInput
    /**
     * Limit how many VerificationTokens to update.
     */
    limit?: number
  }

  /**
   * VerificationToken updateManyAndReturn
   */
  export type VerificationTokenUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * The data used to update VerificationTokens.
     */
    data: XOR<VerificationTokenUpdateManyMutationInput, VerificationTokenUncheckedUpdateManyInput>
    /**
     * Filter which VerificationTokens to update
     */
    where?: VerificationTokenWhereInput
    /**
     * Limit how many VerificationTokens to update.
     */
    limit?: number
  }

  /**
   * VerificationToken upsert
   */
  export type VerificationTokenUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * The filter to search for the VerificationToken to update in case it exists.
     */
    where: VerificationTokenWhereUniqueInput
    /**
     * In case the VerificationToken found by the `where` argument doesn't exist, create a new VerificationToken with this data.
     */
    create: XOR<VerificationTokenCreateInput, VerificationTokenUncheckedCreateInput>
    /**
     * In case the VerificationToken was found with the provided `where` argument, update it with this data.
     */
    update: XOR<VerificationTokenUpdateInput, VerificationTokenUncheckedUpdateInput>
  }

  /**
   * VerificationToken delete
   */
  export type VerificationTokenDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * Filter which VerificationToken to delete.
     */
    where: VerificationTokenWhereUniqueInput
  }

  /**
   * VerificationToken deleteMany
   */
  export type VerificationTokenDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which VerificationTokens to delete
     */
    where?: VerificationTokenWhereInput
    /**
     * Limit how many VerificationTokens to delete.
     */
    limit?: number
  }

  /**
   * VerificationToken without action
   */
  export type VerificationTokenDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
  }


  /**
   * Model UserFeature
   */

  export type AggregateUserFeature = {
    _count: UserFeatureCountAggregateOutputType | null
    _min: UserFeatureMinAggregateOutputType | null
    _max: UserFeatureMaxAggregateOutputType | null
  }

  export type UserFeatureMinAggregateOutputType = {
    id: string | null
    userId: string | null
    featureKey: $Enums.FeatureKey | null
    enabledAt: Date | null
    lastVisitedAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserFeatureMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    featureKey: $Enums.FeatureKey | null
    enabledAt: Date | null
    lastVisitedAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserFeatureCountAggregateOutputType = {
    id: number
    userId: number
    featureKey: number
    enabledAt: number
    lastVisitedAt: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserFeatureMinAggregateInputType = {
    id?: true
    userId?: true
    featureKey?: true
    enabledAt?: true
    lastVisitedAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserFeatureMaxAggregateInputType = {
    id?: true
    userId?: true
    featureKey?: true
    enabledAt?: true
    lastVisitedAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserFeatureCountAggregateInputType = {
    id?: true
    userId?: true
    featureKey?: true
    enabledAt?: true
    lastVisitedAt?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserFeatureAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserFeature to aggregate.
     */
    where?: UserFeatureWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserFeatures to fetch.
     */
    orderBy?: UserFeatureOrderByWithRelationInput | UserFeatureOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserFeatureWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserFeatures from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserFeatures.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UserFeatures
    **/
    _count?: true | UserFeatureCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserFeatureMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserFeatureMaxAggregateInputType
  }

  export type GetUserFeatureAggregateType<T extends UserFeatureAggregateArgs> = {
        [P in keyof T & keyof AggregateUserFeature]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUserFeature[P]>
      : GetScalarType<T[P], AggregateUserFeature[P]>
  }




  export type UserFeatureGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserFeatureWhereInput
    orderBy?: UserFeatureOrderByWithAggregationInput | UserFeatureOrderByWithAggregationInput[]
    by: UserFeatureScalarFieldEnum[] | UserFeatureScalarFieldEnum
    having?: UserFeatureScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserFeatureCountAggregateInputType | true
    _min?: UserFeatureMinAggregateInputType
    _max?: UserFeatureMaxAggregateInputType
  }

  export type UserFeatureGroupByOutputType = {
    id: string
    userId: string
    featureKey: $Enums.FeatureKey
    enabledAt: Date
    lastVisitedAt: Date | null
    createdAt: Date
    updatedAt: Date
    _count: UserFeatureCountAggregateOutputType | null
    _min: UserFeatureMinAggregateOutputType | null
    _max: UserFeatureMaxAggregateOutputType | null
  }

  type GetUserFeatureGroupByPayload<T extends UserFeatureGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserFeatureGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserFeatureGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserFeatureGroupByOutputType[P]>
            : GetScalarType<T[P], UserFeatureGroupByOutputType[P]>
        }
      >
    >


  export type UserFeatureSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    featureKey?: boolean
    enabledAt?: boolean
    lastVisitedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userFeature"]>

  export type UserFeatureSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    featureKey?: boolean
    enabledAt?: boolean
    lastVisitedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userFeature"]>

  export type UserFeatureSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    featureKey?: boolean
    enabledAt?: boolean
    lastVisitedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userFeature"]>

  export type UserFeatureSelectScalar = {
    id?: boolean
    userId?: boolean
    featureKey?: boolean
    enabledAt?: boolean
    lastVisitedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserFeatureOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "featureKey" | "enabledAt" | "lastVisitedAt" | "createdAt" | "updatedAt", ExtArgs["result"]["userFeature"]>
  export type UserFeatureInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type UserFeatureIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type UserFeatureIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $UserFeaturePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "UserFeature"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      featureKey: $Enums.FeatureKey
      enabledAt: Date
      lastVisitedAt: Date | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["userFeature"]>
    composites: {}
  }

  type UserFeatureGetPayload<S extends boolean | null | undefined | UserFeatureDefaultArgs> = $Result.GetResult<Prisma.$UserFeaturePayload, S>

  type UserFeatureCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFeatureFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserFeatureCountAggregateInputType | true
    }

  export interface UserFeatureDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['UserFeature'], meta: { name: 'UserFeature' } }
    /**
     * Find zero or one UserFeature that matches the filter.
     * @param {UserFeatureFindUniqueArgs} args - Arguments to find a UserFeature
     * @example
     * // Get one UserFeature
     * const userFeature = await prisma.userFeature.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFeatureFindUniqueArgs>(args: SelectSubset<T, UserFeatureFindUniqueArgs<ExtArgs>>): Prisma__UserFeatureClient<$Result.GetResult<Prisma.$UserFeaturePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one UserFeature that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFeatureFindUniqueOrThrowArgs} args - Arguments to find a UserFeature
     * @example
     * // Get one UserFeature
     * const userFeature = await prisma.userFeature.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFeatureFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFeatureFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserFeatureClient<$Result.GetResult<Prisma.$UserFeaturePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserFeature that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFeatureFindFirstArgs} args - Arguments to find a UserFeature
     * @example
     * // Get one UserFeature
     * const userFeature = await prisma.userFeature.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFeatureFindFirstArgs>(args?: SelectSubset<T, UserFeatureFindFirstArgs<ExtArgs>>): Prisma__UserFeatureClient<$Result.GetResult<Prisma.$UserFeaturePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserFeature that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFeatureFindFirstOrThrowArgs} args - Arguments to find a UserFeature
     * @example
     * // Get one UserFeature
     * const userFeature = await prisma.userFeature.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFeatureFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFeatureFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserFeatureClient<$Result.GetResult<Prisma.$UserFeaturePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more UserFeatures that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFeatureFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UserFeatures
     * const userFeatures = await prisma.userFeature.findMany()
     * 
     * // Get first 10 UserFeatures
     * const userFeatures = await prisma.userFeature.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userFeatureWithIdOnly = await prisma.userFeature.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFeatureFindManyArgs>(args?: SelectSubset<T, UserFeatureFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserFeaturePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a UserFeature.
     * @param {UserFeatureCreateArgs} args - Arguments to create a UserFeature.
     * @example
     * // Create one UserFeature
     * const UserFeature = await prisma.userFeature.create({
     *   data: {
     *     // ... data to create a UserFeature
     *   }
     * })
     * 
     */
    create<T extends UserFeatureCreateArgs>(args: SelectSubset<T, UserFeatureCreateArgs<ExtArgs>>): Prisma__UserFeatureClient<$Result.GetResult<Prisma.$UserFeaturePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many UserFeatures.
     * @param {UserFeatureCreateManyArgs} args - Arguments to create many UserFeatures.
     * @example
     * // Create many UserFeatures
     * const userFeature = await prisma.userFeature.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserFeatureCreateManyArgs>(args?: SelectSubset<T, UserFeatureCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many UserFeatures and returns the data saved in the database.
     * @param {UserFeatureCreateManyAndReturnArgs} args - Arguments to create many UserFeatures.
     * @example
     * // Create many UserFeatures
     * const userFeature = await prisma.userFeature.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many UserFeatures and only return the `id`
     * const userFeatureWithIdOnly = await prisma.userFeature.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserFeatureCreateManyAndReturnArgs>(args?: SelectSubset<T, UserFeatureCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserFeaturePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a UserFeature.
     * @param {UserFeatureDeleteArgs} args - Arguments to delete one UserFeature.
     * @example
     * // Delete one UserFeature
     * const UserFeature = await prisma.userFeature.delete({
     *   where: {
     *     // ... filter to delete one UserFeature
     *   }
     * })
     * 
     */
    delete<T extends UserFeatureDeleteArgs>(args: SelectSubset<T, UserFeatureDeleteArgs<ExtArgs>>): Prisma__UserFeatureClient<$Result.GetResult<Prisma.$UserFeaturePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one UserFeature.
     * @param {UserFeatureUpdateArgs} args - Arguments to update one UserFeature.
     * @example
     * // Update one UserFeature
     * const userFeature = await prisma.userFeature.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserFeatureUpdateArgs>(args: SelectSubset<T, UserFeatureUpdateArgs<ExtArgs>>): Prisma__UserFeatureClient<$Result.GetResult<Prisma.$UserFeaturePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more UserFeatures.
     * @param {UserFeatureDeleteManyArgs} args - Arguments to filter UserFeatures to delete.
     * @example
     * // Delete a few UserFeatures
     * const { count } = await prisma.userFeature.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserFeatureDeleteManyArgs>(args?: SelectSubset<T, UserFeatureDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserFeatures.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFeatureUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UserFeatures
     * const userFeature = await prisma.userFeature.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserFeatureUpdateManyArgs>(args: SelectSubset<T, UserFeatureUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserFeatures and returns the data updated in the database.
     * @param {UserFeatureUpdateManyAndReturnArgs} args - Arguments to update many UserFeatures.
     * @example
     * // Update many UserFeatures
     * const userFeature = await prisma.userFeature.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more UserFeatures and only return the `id`
     * const userFeatureWithIdOnly = await prisma.userFeature.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserFeatureUpdateManyAndReturnArgs>(args: SelectSubset<T, UserFeatureUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserFeaturePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one UserFeature.
     * @param {UserFeatureUpsertArgs} args - Arguments to update or create a UserFeature.
     * @example
     * // Update or create a UserFeature
     * const userFeature = await prisma.userFeature.upsert({
     *   create: {
     *     // ... data to create a UserFeature
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UserFeature we want to update
     *   }
     * })
     */
    upsert<T extends UserFeatureUpsertArgs>(args: SelectSubset<T, UserFeatureUpsertArgs<ExtArgs>>): Prisma__UserFeatureClient<$Result.GetResult<Prisma.$UserFeaturePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of UserFeatures.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFeatureCountArgs} args - Arguments to filter UserFeatures to count.
     * @example
     * // Count the number of UserFeatures
     * const count = await prisma.userFeature.count({
     *   where: {
     *     // ... the filter for the UserFeatures we want to count
     *   }
     * })
    **/
    count<T extends UserFeatureCountArgs>(
      args?: Subset<T, UserFeatureCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserFeatureCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UserFeature.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFeatureAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserFeatureAggregateArgs>(args: Subset<T, UserFeatureAggregateArgs>): Prisma.PrismaPromise<GetUserFeatureAggregateType<T>>

    /**
     * Group by UserFeature.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFeatureGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserFeatureGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserFeatureGroupByArgs['orderBy'] }
        : { orderBy?: UserFeatureGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserFeatureGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserFeatureGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the UserFeature model
   */
  readonly fields: UserFeatureFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for UserFeature.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserFeatureClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the UserFeature model
   */
  interface UserFeatureFieldRefs {
    readonly id: FieldRef<"UserFeature", 'String'>
    readonly userId: FieldRef<"UserFeature", 'String'>
    readonly featureKey: FieldRef<"UserFeature", 'FeatureKey'>
    readonly enabledAt: FieldRef<"UserFeature", 'DateTime'>
    readonly lastVisitedAt: FieldRef<"UserFeature", 'DateTime'>
    readonly createdAt: FieldRef<"UserFeature", 'DateTime'>
    readonly updatedAt: FieldRef<"UserFeature", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * UserFeature findUnique
   */
  export type UserFeatureFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserFeature
     */
    select?: UserFeatureSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserFeature
     */
    omit?: UserFeatureOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserFeatureInclude<ExtArgs> | null
    /**
     * Filter, which UserFeature to fetch.
     */
    where: UserFeatureWhereUniqueInput
  }

  /**
   * UserFeature findUniqueOrThrow
   */
  export type UserFeatureFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserFeature
     */
    select?: UserFeatureSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserFeature
     */
    omit?: UserFeatureOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserFeatureInclude<ExtArgs> | null
    /**
     * Filter, which UserFeature to fetch.
     */
    where: UserFeatureWhereUniqueInput
  }

  /**
   * UserFeature findFirst
   */
  export type UserFeatureFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserFeature
     */
    select?: UserFeatureSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserFeature
     */
    omit?: UserFeatureOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserFeatureInclude<ExtArgs> | null
    /**
     * Filter, which UserFeature to fetch.
     */
    where?: UserFeatureWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserFeatures to fetch.
     */
    orderBy?: UserFeatureOrderByWithRelationInput | UserFeatureOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserFeatures.
     */
    cursor?: UserFeatureWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserFeatures from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserFeatures.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserFeatures.
     */
    distinct?: UserFeatureScalarFieldEnum | UserFeatureScalarFieldEnum[]
  }

  /**
   * UserFeature findFirstOrThrow
   */
  export type UserFeatureFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserFeature
     */
    select?: UserFeatureSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserFeature
     */
    omit?: UserFeatureOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserFeatureInclude<ExtArgs> | null
    /**
     * Filter, which UserFeature to fetch.
     */
    where?: UserFeatureWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserFeatures to fetch.
     */
    orderBy?: UserFeatureOrderByWithRelationInput | UserFeatureOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserFeatures.
     */
    cursor?: UserFeatureWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserFeatures from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserFeatures.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserFeatures.
     */
    distinct?: UserFeatureScalarFieldEnum | UserFeatureScalarFieldEnum[]
  }

  /**
   * UserFeature findMany
   */
  export type UserFeatureFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserFeature
     */
    select?: UserFeatureSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserFeature
     */
    omit?: UserFeatureOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserFeatureInclude<ExtArgs> | null
    /**
     * Filter, which UserFeatures to fetch.
     */
    where?: UserFeatureWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserFeatures to fetch.
     */
    orderBy?: UserFeatureOrderByWithRelationInput | UserFeatureOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UserFeatures.
     */
    cursor?: UserFeatureWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserFeatures from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserFeatures.
     */
    skip?: number
    distinct?: UserFeatureScalarFieldEnum | UserFeatureScalarFieldEnum[]
  }

  /**
   * UserFeature create
   */
  export type UserFeatureCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserFeature
     */
    select?: UserFeatureSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserFeature
     */
    omit?: UserFeatureOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserFeatureInclude<ExtArgs> | null
    /**
     * The data needed to create a UserFeature.
     */
    data: XOR<UserFeatureCreateInput, UserFeatureUncheckedCreateInput>
  }

  /**
   * UserFeature createMany
   */
  export type UserFeatureCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many UserFeatures.
     */
    data: UserFeatureCreateManyInput | UserFeatureCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * UserFeature createManyAndReturn
   */
  export type UserFeatureCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserFeature
     */
    select?: UserFeatureSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserFeature
     */
    omit?: UserFeatureOmit<ExtArgs> | null
    /**
     * The data used to create many UserFeatures.
     */
    data: UserFeatureCreateManyInput | UserFeatureCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserFeatureIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * UserFeature update
   */
  export type UserFeatureUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserFeature
     */
    select?: UserFeatureSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserFeature
     */
    omit?: UserFeatureOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserFeatureInclude<ExtArgs> | null
    /**
     * The data needed to update a UserFeature.
     */
    data: XOR<UserFeatureUpdateInput, UserFeatureUncheckedUpdateInput>
    /**
     * Choose, which UserFeature to update.
     */
    where: UserFeatureWhereUniqueInput
  }

  /**
   * UserFeature updateMany
   */
  export type UserFeatureUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update UserFeatures.
     */
    data: XOR<UserFeatureUpdateManyMutationInput, UserFeatureUncheckedUpdateManyInput>
    /**
     * Filter which UserFeatures to update
     */
    where?: UserFeatureWhereInput
    /**
     * Limit how many UserFeatures to update.
     */
    limit?: number
  }

  /**
   * UserFeature updateManyAndReturn
   */
  export type UserFeatureUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserFeature
     */
    select?: UserFeatureSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserFeature
     */
    omit?: UserFeatureOmit<ExtArgs> | null
    /**
     * The data used to update UserFeatures.
     */
    data: XOR<UserFeatureUpdateManyMutationInput, UserFeatureUncheckedUpdateManyInput>
    /**
     * Filter which UserFeatures to update
     */
    where?: UserFeatureWhereInput
    /**
     * Limit how many UserFeatures to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserFeatureIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * UserFeature upsert
   */
  export type UserFeatureUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserFeature
     */
    select?: UserFeatureSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserFeature
     */
    omit?: UserFeatureOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserFeatureInclude<ExtArgs> | null
    /**
     * The filter to search for the UserFeature to update in case it exists.
     */
    where: UserFeatureWhereUniqueInput
    /**
     * In case the UserFeature found by the `where` argument doesn't exist, create a new UserFeature with this data.
     */
    create: XOR<UserFeatureCreateInput, UserFeatureUncheckedCreateInput>
    /**
     * In case the UserFeature was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserFeatureUpdateInput, UserFeatureUncheckedUpdateInput>
  }

  /**
   * UserFeature delete
   */
  export type UserFeatureDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserFeature
     */
    select?: UserFeatureSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserFeature
     */
    omit?: UserFeatureOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserFeatureInclude<ExtArgs> | null
    /**
     * Filter which UserFeature to delete.
     */
    where: UserFeatureWhereUniqueInput
  }

  /**
   * UserFeature deleteMany
   */
  export type UserFeatureDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserFeatures to delete
     */
    where?: UserFeatureWhereInput
    /**
     * Limit how many UserFeatures to delete.
     */
    limit?: number
  }

  /**
   * UserFeature without action
   */
  export type UserFeatureDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserFeature
     */
    select?: UserFeatureSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserFeature
     */
    omit?: UserFeatureOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserFeatureInclude<ExtArgs> | null
  }


  /**
   * Model FeatureInstance
   */

  export type AggregateFeatureInstance = {
    _count: FeatureInstanceCountAggregateOutputType | null
    _min: FeatureInstanceMinAggregateOutputType | null
    _max: FeatureInstanceMaxAggregateOutputType | null
  }

  export type FeatureInstanceMinAggregateOutputType = {
    id: string | null
    featureKey: $Enums.FeatureKey | null
    ownerId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type FeatureInstanceMaxAggregateOutputType = {
    id: string | null
    featureKey: $Enums.FeatureKey | null
    ownerId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type FeatureInstanceCountAggregateOutputType = {
    id: number
    featureKey: number
    ownerId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type FeatureInstanceMinAggregateInputType = {
    id?: true
    featureKey?: true
    ownerId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type FeatureInstanceMaxAggregateInputType = {
    id?: true
    featureKey?: true
    ownerId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type FeatureInstanceCountAggregateInputType = {
    id?: true
    featureKey?: true
    ownerId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type FeatureInstanceAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FeatureInstance to aggregate.
     */
    where?: FeatureInstanceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FeatureInstances to fetch.
     */
    orderBy?: FeatureInstanceOrderByWithRelationInput | FeatureInstanceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FeatureInstanceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FeatureInstances from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FeatureInstances.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned FeatureInstances
    **/
    _count?: true | FeatureInstanceCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FeatureInstanceMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FeatureInstanceMaxAggregateInputType
  }

  export type GetFeatureInstanceAggregateType<T extends FeatureInstanceAggregateArgs> = {
        [P in keyof T & keyof AggregateFeatureInstance]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFeatureInstance[P]>
      : GetScalarType<T[P], AggregateFeatureInstance[P]>
  }




  export type FeatureInstanceGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FeatureInstanceWhereInput
    orderBy?: FeatureInstanceOrderByWithAggregationInput | FeatureInstanceOrderByWithAggregationInput[]
    by: FeatureInstanceScalarFieldEnum[] | FeatureInstanceScalarFieldEnum
    having?: FeatureInstanceScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FeatureInstanceCountAggregateInputType | true
    _min?: FeatureInstanceMinAggregateInputType
    _max?: FeatureInstanceMaxAggregateInputType
  }

  export type FeatureInstanceGroupByOutputType = {
    id: string
    featureKey: $Enums.FeatureKey
    ownerId: string
    createdAt: Date
    updatedAt: Date
    _count: FeatureInstanceCountAggregateOutputType | null
    _min: FeatureInstanceMinAggregateOutputType | null
    _max: FeatureInstanceMaxAggregateOutputType | null
  }

  type GetFeatureInstanceGroupByPayload<T extends FeatureInstanceGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FeatureInstanceGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FeatureInstanceGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FeatureInstanceGroupByOutputType[P]>
            : GetScalarType<T[P], FeatureInstanceGroupByOutputType[P]>
        }
      >
    >


  export type FeatureInstanceSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    featureKey?: boolean
    ownerId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    invites?: boolean | FeatureInstance$invitesArgs<ExtArgs>
    memberships?: boolean | FeatureInstance$membershipsArgs<ExtArgs>
    owner?: boolean | UserDefaultArgs<ExtArgs>
    watchlist?: boolean | FeatureInstance$watchlistArgs<ExtArgs>
    _count?: boolean | FeatureInstanceCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["featureInstance"]>

  export type FeatureInstanceSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    featureKey?: boolean
    ownerId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    owner?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["featureInstance"]>

  export type FeatureInstanceSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    featureKey?: boolean
    ownerId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    owner?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["featureInstance"]>

  export type FeatureInstanceSelectScalar = {
    id?: boolean
    featureKey?: boolean
    ownerId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type FeatureInstanceOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "featureKey" | "ownerId" | "createdAt" | "updatedAt", ExtArgs["result"]["featureInstance"]>
  export type FeatureInstanceInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    invites?: boolean | FeatureInstance$invitesArgs<ExtArgs>
    memberships?: boolean | FeatureInstance$membershipsArgs<ExtArgs>
    owner?: boolean | UserDefaultArgs<ExtArgs>
    watchlist?: boolean | FeatureInstance$watchlistArgs<ExtArgs>
    _count?: boolean | FeatureInstanceCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type FeatureInstanceIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    owner?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type FeatureInstanceIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    owner?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $FeatureInstancePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "FeatureInstance"
    objects: {
      invites: Prisma.$FeatureInvitePayload<ExtArgs>[]
      memberships: Prisma.$FeatureMembershipPayload<ExtArgs>[]
      owner: Prisma.$UserPayload<ExtArgs>
      watchlist: Prisma.$WatchlistPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      featureKey: $Enums.FeatureKey
      ownerId: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["featureInstance"]>
    composites: {}
  }

  type FeatureInstanceGetPayload<S extends boolean | null | undefined | FeatureInstanceDefaultArgs> = $Result.GetResult<Prisma.$FeatureInstancePayload, S>

  type FeatureInstanceCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<FeatureInstanceFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: FeatureInstanceCountAggregateInputType | true
    }

  export interface FeatureInstanceDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['FeatureInstance'], meta: { name: 'FeatureInstance' } }
    /**
     * Find zero or one FeatureInstance that matches the filter.
     * @param {FeatureInstanceFindUniqueArgs} args - Arguments to find a FeatureInstance
     * @example
     * // Get one FeatureInstance
     * const featureInstance = await prisma.featureInstance.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends FeatureInstanceFindUniqueArgs>(args: SelectSubset<T, FeatureInstanceFindUniqueArgs<ExtArgs>>): Prisma__FeatureInstanceClient<$Result.GetResult<Prisma.$FeatureInstancePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one FeatureInstance that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {FeatureInstanceFindUniqueOrThrowArgs} args - Arguments to find a FeatureInstance
     * @example
     * // Get one FeatureInstance
     * const featureInstance = await prisma.featureInstance.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends FeatureInstanceFindUniqueOrThrowArgs>(args: SelectSubset<T, FeatureInstanceFindUniqueOrThrowArgs<ExtArgs>>): Prisma__FeatureInstanceClient<$Result.GetResult<Prisma.$FeatureInstancePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first FeatureInstance that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FeatureInstanceFindFirstArgs} args - Arguments to find a FeatureInstance
     * @example
     * // Get one FeatureInstance
     * const featureInstance = await prisma.featureInstance.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends FeatureInstanceFindFirstArgs>(args?: SelectSubset<T, FeatureInstanceFindFirstArgs<ExtArgs>>): Prisma__FeatureInstanceClient<$Result.GetResult<Prisma.$FeatureInstancePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first FeatureInstance that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FeatureInstanceFindFirstOrThrowArgs} args - Arguments to find a FeatureInstance
     * @example
     * // Get one FeatureInstance
     * const featureInstance = await prisma.featureInstance.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends FeatureInstanceFindFirstOrThrowArgs>(args?: SelectSubset<T, FeatureInstanceFindFirstOrThrowArgs<ExtArgs>>): Prisma__FeatureInstanceClient<$Result.GetResult<Prisma.$FeatureInstancePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more FeatureInstances that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FeatureInstanceFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all FeatureInstances
     * const featureInstances = await prisma.featureInstance.findMany()
     * 
     * // Get first 10 FeatureInstances
     * const featureInstances = await prisma.featureInstance.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const featureInstanceWithIdOnly = await prisma.featureInstance.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends FeatureInstanceFindManyArgs>(args?: SelectSubset<T, FeatureInstanceFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FeatureInstancePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a FeatureInstance.
     * @param {FeatureInstanceCreateArgs} args - Arguments to create a FeatureInstance.
     * @example
     * // Create one FeatureInstance
     * const FeatureInstance = await prisma.featureInstance.create({
     *   data: {
     *     // ... data to create a FeatureInstance
     *   }
     * })
     * 
     */
    create<T extends FeatureInstanceCreateArgs>(args: SelectSubset<T, FeatureInstanceCreateArgs<ExtArgs>>): Prisma__FeatureInstanceClient<$Result.GetResult<Prisma.$FeatureInstancePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many FeatureInstances.
     * @param {FeatureInstanceCreateManyArgs} args - Arguments to create many FeatureInstances.
     * @example
     * // Create many FeatureInstances
     * const featureInstance = await prisma.featureInstance.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends FeatureInstanceCreateManyArgs>(args?: SelectSubset<T, FeatureInstanceCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many FeatureInstances and returns the data saved in the database.
     * @param {FeatureInstanceCreateManyAndReturnArgs} args - Arguments to create many FeatureInstances.
     * @example
     * // Create many FeatureInstances
     * const featureInstance = await prisma.featureInstance.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many FeatureInstances and only return the `id`
     * const featureInstanceWithIdOnly = await prisma.featureInstance.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends FeatureInstanceCreateManyAndReturnArgs>(args?: SelectSubset<T, FeatureInstanceCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FeatureInstancePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a FeatureInstance.
     * @param {FeatureInstanceDeleteArgs} args - Arguments to delete one FeatureInstance.
     * @example
     * // Delete one FeatureInstance
     * const FeatureInstance = await prisma.featureInstance.delete({
     *   where: {
     *     // ... filter to delete one FeatureInstance
     *   }
     * })
     * 
     */
    delete<T extends FeatureInstanceDeleteArgs>(args: SelectSubset<T, FeatureInstanceDeleteArgs<ExtArgs>>): Prisma__FeatureInstanceClient<$Result.GetResult<Prisma.$FeatureInstancePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one FeatureInstance.
     * @param {FeatureInstanceUpdateArgs} args - Arguments to update one FeatureInstance.
     * @example
     * // Update one FeatureInstance
     * const featureInstance = await prisma.featureInstance.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends FeatureInstanceUpdateArgs>(args: SelectSubset<T, FeatureInstanceUpdateArgs<ExtArgs>>): Prisma__FeatureInstanceClient<$Result.GetResult<Prisma.$FeatureInstancePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more FeatureInstances.
     * @param {FeatureInstanceDeleteManyArgs} args - Arguments to filter FeatureInstances to delete.
     * @example
     * // Delete a few FeatureInstances
     * const { count } = await prisma.featureInstance.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends FeatureInstanceDeleteManyArgs>(args?: SelectSubset<T, FeatureInstanceDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more FeatureInstances.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FeatureInstanceUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many FeatureInstances
     * const featureInstance = await prisma.featureInstance.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends FeatureInstanceUpdateManyArgs>(args: SelectSubset<T, FeatureInstanceUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more FeatureInstances and returns the data updated in the database.
     * @param {FeatureInstanceUpdateManyAndReturnArgs} args - Arguments to update many FeatureInstances.
     * @example
     * // Update many FeatureInstances
     * const featureInstance = await prisma.featureInstance.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more FeatureInstances and only return the `id`
     * const featureInstanceWithIdOnly = await prisma.featureInstance.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends FeatureInstanceUpdateManyAndReturnArgs>(args: SelectSubset<T, FeatureInstanceUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FeatureInstancePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one FeatureInstance.
     * @param {FeatureInstanceUpsertArgs} args - Arguments to update or create a FeatureInstance.
     * @example
     * // Update or create a FeatureInstance
     * const featureInstance = await prisma.featureInstance.upsert({
     *   create: {
     *     // ... data to create a FeatureInstance
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the FeatureInstance we want to update
     *   }
     * })
     */
    upsert<T extends FeatureInstanceUpsertArgs>(args: SelectSubset<T, FeatureInstanceUpsertArgs<ExtArgs>>): Prisma__FeatureInstanceClient<$Result.GetResult<Prisma.$FeatureInstancePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of FeatureInstances.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FeatureInstanceCountArgs} args - Arguments to filter FeatureInstances to count.
     * @example
     * // Count the number of FeatureInstances
     * const count = await prisma.featureInstance.count({
     *   where: {
     *     // ... the filter for the FeatureInstances we want to count
     *   }
     * })
    **/
    count<T extends FeatureInstanceCountArgs>(
      args?: Subset<T, FeatureInstanceCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FeatureInstanceCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a FeatureInstance.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FeatureInstanceAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends FeatureInstanceAggregateArgs>(args: Subset<T, FeatureInstanceAggregateArgs>): Prisma.PrismaPromise<GetFeatureInstanceAggregateType<T>>

    /**
     * Group by FeatureInstance.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FeatureInstanceGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends FeatureInstanceGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FeatureInstanceGroupByArgs['orderBy'] }
        : { orderBy?: FeatureInstanceGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, FeatureInstanceGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFeatureInstanceGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the FeatureInstance model
   */
  readonly fields: FeatureInstanceFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for FeatureInstance.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FeatureInstanceClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    invites<T extends FeatureInstance$invitesArgs<ExtArgs> = {}>(args?: Subset<T, FeatureInstance$invitesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FeatureInvitePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    memberships<T extends FeatureInstance$membershipsArgs<ExtArgs> = {}>(args?: Subset<T, FeatureInstance$membershipsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FeatureMembershipPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    owner<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    watchlist<T extends FeatureInstance$watchlistArgs<ExtArgs> = {}>(args?: Subset<T, FeatureInstance$watchlistArgs<ExtArgs>>): Prisma__WatchlistClient<$Result.GetResult<Prisma.$WatchlistPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the FeatureInstance model
   */
  interface FeatureInstanceFieldRefs {
    readonly id: FieldRef<"FeatureInstance", 'String'>
    readonly featureKey: FieldRef<"FeatureInstance", 'FeatureKey'>
    readonly ownerId: FieldRef<"FeatureInstance", 'String'>
    readonly createdAt: FieldRef<"FeatureInstance", 'DateTime'>
    readonly updatedAt: FieldRef<"FeatureInstance", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * FeatureInstance findUnique
   */
  export type FeatureInstanceFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FeatureInstance
     */
    select?: FeatureInstanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FeatureInstance
     */
    omit?: FeatureInstanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeatureInstanceInclude<ExtArgs> | null
    /**
     * Filter, which FeatureInstance to fetch.
     */
    where: FeatureInstanceWhereUniqueInput
  }

  /**
   * FeatureInstance findUniqueOrThrow
   */
  export type FeatureInstanceFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FeatureInstance
     */
    select?: FeatureInstanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FeatureInstance
     */
    omit?: FeatureInstanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeatureInstanceInclude<ExtArgs> | null
    /**
     * Filter, which FeatureInstance to fetch.
     */
    where: FeatureInstanceWhereUniqueInput
  }

  /**
   * FeatureInstance findFirst
   */
  export type FeatureInstanceFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FeatureInstance
     */
    select?: FeatureInstanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FeatureInstance
     */
    omit?: FeatureInstanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeatureInstanceInclude<ExtArgs> | null
    /**
     * Filter, which FeatureInstance to fetch.
     */
    where?: FeatureInstanceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FeatureInstances to fetch.
     */
    orderBy?: FeatureInstanceOrderByWithRelationInput | FeatureInstanceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FeatureInstances.
     */
    cursor?: FeatureInstanceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FeatureInstances from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FeatureInstances.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FeatureInstances.
     */
    distinct?: FeatureInstanceScalarFieldEnum | FeatureInstanceScalarFieldEnum[]
  }

  /**
   * FeatureInstance findFirstOrThrow
   */
  export type FeatureInstanceFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FeatureInstance
     */
    select?: FeatureInstanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FeatureInstance
     */
    omit?: FeatureInstanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeatureInstanceInclude<ExtArgs> | null
    /**
     * Filter, which FeatureInstance to fetch.
     */
    where?: FeatureInstanceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FeatureInstances to fetch.
     */
    orderBy?: FeatureInstanceOrderByWithRelationInput | FeatureInstanceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FeatureInstances.
     */
    cursor?: FeatureInstanceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FeatureInstances from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FeatureInstances.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FeatureInstances.
     */
    distinct?: FeatureInstanceScalarFieldEnum | FeatureInstanceScalarFieldEnum[]
  }

  /**
   * FeatureInstance findMany
   */
  export type FeatureInstanceFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FeatureInstance
     */
    select?: FeatureInstanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FeatureInstance
     */
    omit?: FeatureInstanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeatureInstanceInclude<ExtArgs> | null
    /**
     * Filter, which FeatureInstances to fetch.
     */
    where?: FeatureInstanceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FeatureInstances to fetch.
     */
    orderBy?: FeatureInstanceOrderByWithRelationInput | FeatureInstanceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing FeatureInstances.
     */
    cursor?: FeatureInstanceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FeatureInstances from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FeatureInstances.
     */
    skip?: number
    distinct?: FeatureInstanceScalarFieldEnum | FeatureInstanceScalarFieldEnum[]
  }

  /**
   * FeatureInstance create
   */
  export type FeatureInstanceCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FeatureInstance
     */
    select?: FeatureInstanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FeatureInstance
     */
    omit?: FeatureInstanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeatureInstanceInclude<ExtArgs> | null
    /**
     * The data needed to create a FeatureInstance.
     */
    data: XOR<FeatureInstanceCreateInput, FeatureInstanceUncheckedCreateInput>
  }

  /**
   * FeatureInstance createMany
   */
  export type FeatureInstanceCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many FeatureInstances.
     */
    data: FeatureInstanceCreateManyInput | FeatureInstanceCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * FeatureInstance createManyAndReturn
   */
  export type FeatureInstanceCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FeatureInstance
     */
    select?: FeatureInstanceSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the FeatureInstance
     */
    omit?: FeatureInstanceOmit<ExtArgs> | null
    /**
     * The data used to create many FeatureInstances.
     */
    data: FeatureInstanceCreateManyInput | FeatureInstanceCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeatureInstanceIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * FeatureInstance update
   */
  export type FeatureInstanceUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FeatureInstance
     */
    select?: FeatureInstanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FeatureInstance
     */
    omit?: FeatureInstanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeatureInstanceInclude<ExtArgs> | null
    /**
     * The data needed to update a FeatureInstance.
     */
    data: XOR<FeatureInstanceUpdateInput, FeatureInstanceUncheckedUpdateInput>
    /**
     * Choose, which FeatureInstance to update.
     */
    where: FeatureInstanceWhereUniqueInput
  }

  /**
   * FeatureInstance updateMany
   */
  export type FeatureInstanceUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update FeatureInstances.
     */
    data: XOR<FeatureInstanceUpdateManyMutationInput, FeatureInstanceUncheckedUpdateManyInput>
    /**
     * Filter which FeatureInstances to update
     */
    where?: FeatureInstanceWhereInput
    /**
     * Limit how many FeatureInstances to update.
     */
    limit?: number
  }

  /**
   * FeatureInstance updateManyAndReturn
   */
  export type FeatureInstanceUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FeatureInstance
     */
    select?: FeatureInstanceSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the FeatureInstance
     */
    omit?: FeatureInstanceOmit<ExtArgs> | null
    /**
     * The data used to update FeatureInstances.
     */
    data: XOR<FeatureInstanceUpdateManyMutationInput, FeatureInstanceUncheckedUpdateManyInput>
    /**
     * Filter which FeatureInstances to update
     */
    where?: FeatureInstanceWhereInput
    /**
     * Limit how many FeatureInstances to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeatureInstanceIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * FeatureInstance upsert
   */
  export type FeatureInstanceUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FeatureInstance
     */
    select?: FeatureInstanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FeatureInstance
     */
    omit?: FeatureInstanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeatureInstanceInclude<ExtArgs> | null
    /**
     * The filter to search for the FeatureInstance to update in case it exists.
     */
    where: FeatureInstanceWhereUniqueInput
    /**
     * In case the FeatureInstance found by the `where` argument doesn't exist, create a new FeatureInstance with this data.
     */
    create: XOR<FeatureInstanceCreateInput, FeatureInstanceUncheckedCreateInput>
    /**
     * In case the FeatureInstance was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FeatureInstanceUpdateInput, FeatureInstanceUncheckedUpdateInput>
  }

  /**
   * FeatureInstance delete
   */
  export type FeatureInstanceDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FeatureInstance
     */
    select?: FeatureInstanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FeatureInstance
     */
    omit?: FeatureInstanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeatureInstanceInclude<ExtArgs> | null
    /**
     * Filter which FeatureInstance to delete.
     */
    where: FeatureInstanceWhereUniqueInput
  }

  /**
   * FeatureInstance deleteMany
   */
  export type FeatureInstanceDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FeatureInstances to delete
     */
    where?: FeatureInstanceWhereInput
    /**
     * Limit how many FeatureInstances to delete.
     */
    limit?: number
  }

  /**
   * FeatureInstance.invites
   */
  export type FeatureInstance$invitesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FeatureInvite
     */
    select?: FeatureInviteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FeatureInvite
     */
    omit?: FeatureInviteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeatureInviteInclude<ExtArgs> | null
    where?: FeatureInviteWhereInput
    orderBy?: FeatureInviteOrderByWithRelationInput | FeatureInviteOrderByWithRelationInput[]
    cursor?: FeatureInviteWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FeatureInviteScalarFieldEnum | FeatureInviteScalarFieldEnum[]
  }

  /**
   * FeatureInstance.memberships
   */
  export type FeatureInstance$membershipsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FeatureMembership
     */
    select?: FeatureMembershipSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FeatureMembership
     */
    omit?: FeatureMembershipOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeatureMembershipInclude<ExtArgs> | null
    where?: FeatureMembershipWhereInput
    orderBy?: FeatureMembershipOrderByWithRelationInput | FeatureMembershipOrderByWithRelationInput[]
    cursor?: FeatureMembershipWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FeatureMembershipScalarFieldEnum | FeatureMembershipScalarFieldEnum[]
  }

  /**
   * FeatureInstance.watchlist
   */
  export type FeatureInstance$watchlistArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Watchlist
     */
    select?: WatchlistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Watchlist
     */
    omit?: WatchlistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WatchlistInclude<ExtArgs> | null
    where?: WatchlistWhereInput
  }

  /**
   * FeatureInstance without action
   */
  export type FeatureInstanceDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FeatureInstance
     */
    select?: FeatureInstanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FeatureInstance
     */
    omit?: FeatureInstanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeatureInstanceInclude<ExtArgs> | null
  }


  /**
   * Model FeatureMembership
   */

  export type AggregateFeatureMembership = {
    _count: FeatureMembershipCountAggregateOutputType | null
    _min: FeatureMembershipMinAggregateOutputType | null
    _max: FeatureMembershipMaxAggregateOutputType | null
  }

  export type FeatureMembershipMinAggregateOutputType = {
    id: string | null
    featureInstanceId: string | null
    userId: string | null
    role: $Enums.FeatureMembershipRole | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type FeatureMembershipMaxAggregateOutputType = {
    id: string | null
    featureInstanceId: string | null
    userId: string | null
    role: $Enums.FeatureMembershipRole | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type FeatureMembershipCountAggregateOutputType = {
    id: number
    featureInstanceId: number
    userId: number
    role: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type FeatureMembershipMinAggregateInputType = {
    id?: true
    featureInstanceId?: true
    userId?: true
    role?: true
    createdAt?: true
    updatedAt?: true
  }

  export type FeatureMembershipMaxAggregateInputType = {
    id?: true
    featureInstanceId?: true
    userId?: true
    role?: true
    createdAt?: true
    updatedAt?: true
  }

  export type FeatureMembershipCountAggregateInputType = {
    id?: true
    featureInstanceId?: true
    userId?: true
    role?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type FeatureMembershipAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FeatureMembership to aggregate.
     */
    where?: FeatureMembershipWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FeatureMemberships to fetch.
     */
    orderBy?: FeatureMembershipOrderByWithRelationInput | FeatureMembershipOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FeatureMembershipWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FeatureMemberships from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FeatureMemberships.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned FeatureMemberships
    **/
    _count?: true | FeatureMembershipCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FeatureMembershipMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FeatureMembershipMaxAggregateInputType
  }

  export type GetFeatureMembershipAggregateType<T extends FeatureMembershipAggregateArgs> = {
        [P in keyof T & keyof AggregateFeatureMembership]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFeatureMembership[P]>
      : GetScalarType<T[P], AggregateFeatureMembership[P]>
  }




  export type FeatureMembershipGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FeatureMembershipWhereInput
    orderBy?: FeatureMembershipOrderByWithAggregationInput | FeatureMembershipOrderByWithAggregationInput[]
    by: FeatureMembershipScalarFieldEnum[] | FeatureMembershipScalarFieldEnum
    having?: FeatureMembershipScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FeatureMembershipCountAggregateInputType | true
    _min?: FeatureMembershipMinAggregateInputType
    _max?: FeatureMembershipMaxAggregateInputType
  }

  export type FeatureMembershipGroupByOutputType = {
    id: string
    featureInstanceId: string
    userId: string
    role: $Enums.FeatureMembershipRole
    createdAt: Date
    updatedAt: Date
    _count: FeatureMembershipCountAggregateOutputType | null
    _min: FeatureMembershipMinAggregateOutputType | null
    _max: FeatureMembershipMaxAggregateOutputType | null
  }

  type GetFeatureMembershipGroupByPayload<T extends FeatureMembershipGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FeatureMembershipGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FeatureMembershipGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FeatureMembershipGroupByOutputType[P]>
            : GetScalarType<T[P], FeatureMembershipGroupByOutputType[P]>
        }
      >
    >


  export type FeatureMembershipSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    featureInstanceId?: boolean
    userId?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    featureInstance?: boolean | FeatureInstanceDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["featureMembership"]>

  export type FeatureMembershipSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    featureInstanceId?: boolean
    userId?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    featureInstance?: boolean | FeatureInstanceDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["featureMembership"]>

  export type FeatureMembershipSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    featureInstanceId?: boolean
    userId?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    featureInstance?: boolean | FeatureInstanceDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["featureMembership"]>

  export type FeatureMembershipSelectScalar = {
    id?: boolean
    featureInstanceId?: boolean
    userId?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type FeatureMembershipOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "featureInstanceId" | "userId" | "role" | "createdAt" | "updatedAt", ExtArgs["result"]["featureMembership"]>
  export type FeatureMembershipInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    featureInstance?: boolean | FeatureInstanceDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type FeatureMembershipIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    featureInstance?: boolean | FeatureInstanceDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type FeatureMembershipIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    featureInstance?: boolean | FeatureInstanceDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $FeatureMembershipPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "FeatureMembership"
    objects: {
      featureInstance: Prisma.$FeatureInstancePayload<ExtArgs>
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      featureInstanceId: string
      userId: string
      role: $Enums.FeatureMembershipRole
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["featureMembership"]>
    composites: {}
  }

  type FeatureMembershipGetPayload<S extends boolean | null | undefined | FeatureMembershipDefaultArgs> = $Result.GetResult<Prisma.$FeatureMembershipPayload, S>

  type FeatureMembershipCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<FeatureMembershipFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: FeatureMembershipCountAggregateInputType | true
    }

  export interface FeatureMembershipDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['FeatureMembership'], meta: { name: 'FeatureMembership' } }
    /**
     * Find zero or one FeatureMembership that matches the filter.
     * @param {FeatureMembershipFindUniqueArgs} args - Arguments to find a FeatureMembership
     * @example
     * // Get one FeatureMembership
     * const featureMembership = await prisma.featureMembership.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends FeatureMembershipFindUniqueArgs>(args: SelectSubset<T, FeatureMembershipFindUniqueArgs<ExtArgs>>): Prisma__FeatureMembershipClient<$Result.GetResult<Prisma.$FeatureMembershipPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one FeatureMembership that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {FeatureMembershipFindUniqueOrThrowArgs} args - Arguments to find a FeatureMembership
     * @example
     * // Get one FeatureMembership
     * const featureMembership = await prisma.featureMembership.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends FeatureMembershipFindUniqueOrThrowArgs>(args: SelectSubset<T, FeatureMembershipFindUniqueOrThrowArgs<ExtArgs>>): Prisma__FeatureMembershipClient<$Result.GetResult<Prisma.$FeatureMembershipPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first FeatureMembership that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FeatureMembershipFindFirstArgs} args - Arguments to find a FeatureMembership
     * @example
     * // Get one FeatureMembership
     * const featureMembership = await prisma.featureMembership.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends FeatureMembershipFindFirstArgs>(args?: SelectSubset<T, FeatureMembershipFindFirstArgs<ExtArgs>>): Prisma__FeatureMembershipClient<$Result.GetResult<Prisma.$FeatureMembershipPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first FeatureMembership that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FeatureMembershipFindFirstOrThrowArgs} args - Arguments to find a FeatureMembership
     * @example
     * // Get one FeatureMembership
     * const featureMembership = await prisma.featureMembership.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends FeatureMembershipFindFirstOrThrowArgs>(args?: SelectSubset<T, FeatureMembershipFindFirstOrThrowArgs<ExtArgs>>): Prisma__FeatureMembershipClient<$Result.GetResult<Prisma.$FeatureMembershipPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more FeatureMemberships that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FeatureMembershipFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all FeatureMemberships
     * const featureMemberships = await prisma.featureMembership.findMany()
     * 
     * // Get first 10 FeatureMemberships
     * const featureMemberships = await prisma.featureMembership.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const featureMembershipWithIdOnly = await prisma.featureMembership.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends FeatureMembershipFindManyArgs>(args?: SelectSubset<T, FeatureMembershipFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FeatureMembershipPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a FeatureMembership.
     * @param {FeatureMembershipCreateArgs} args - Arguments to create a FeatureMembership.
     * @example
     * // Create one FeatureMembership
     * const FeatureMembership = await prisma.featureMembership.create({
     *   data: {
     *     // ... data to create a FeatureMembership
     *   }
     * })
     * 
     */
    create<T extends FeatureMembershipCreateArgs>(args: SelectSubset<T, FeatureMembershipCreateArgs<ExtArgs>>): Prisma__FeatureMembershipClient<$Result.GetResult<Prisma.$FeatureMembershipPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many FeatureMemberships.
     * @param {FeatureMembershipCreateManyArgs} args - Arguments to create many FeatureMemberships.
     * @example
     * // Create many FeatureMemberships
     * const featureMembership = await prisma.featureMembership.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends FeatureMembershipCreateManyArgs>(args?: SelectSubset<T, FeatureMembershipCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many FeatureMemberships and returns the data saved in the database.
     * @param {FeatureMembershipCreateManyAndReturnArgs} args - Arguments to create many FeatureMemberships.
     * @example
     * // Create many FeatureMemberships
     * const featureMembership = await prisma.featureMembership.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many FeatureMemberships and only return the `id`
     * const featureMembershipWithIdOnly = await prisma.featureMembership.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends FeatureMembershipCreateManyAndReturnArgs>(args?: SelectSubset<T, FeatureMembershipCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FeatureMembershipPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a FeatureMembership.
     * @param {FeatureMembershipDeleteArgs} args - Arguments to delete one FeatureMembership.
     * @example
     * // Delete one FeatureMembership
     * const FeatureMembership = await prisma.featureMembership.delete({
     *   where: {
     *     // ... filter to delete one FeatureMembership
     *   }
     * })
     * 
     */
    delete<T extends FeatureMembershipDeleteArgs>(args: SelectSubset<T, FeatureMembershipDeleteArgs<ExtArgs>>): Prisma__FeatureMembershipClient<$Result.GetResult<Prisma.$FeatureMembershipPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one FeatureMembership.
     * @param {FeatureMembershipUpdateArgs} args - Arguments to update one FeatureMembership.
     * @example
     * // Update one FeatureMembership
     * const featureMembership = await prisma.featureMembership.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends FeatureMembershipUpdateArgs>(args: SelectSubset<T, FeatureMembershipUpdateArgs<ExtArgs>>): Prisma__FeatureMembershipClient<$Result.GetResult<Prisma.$FeatureMembershipPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more FeatureMemberships.
     * @param {FeatureMembershipDeleteManyArgs} args - Arguments to filter FeatureMemberships to delete.
     * @example
     * // Delete a few FeatureMemberships
     * const { count } = await prisma.featureMembership.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends FeatureMembershipDeleteManyArgs>(args?: SelectSubset<T, FeatureMembershipDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more FeatureMemberships.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FeatureMembershipUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many FeatureMemberships
     * const featureMembership = await prisma.featureMembership.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends FeatureMembershipUpdateManyArgs>(args: SelectSubset<T, FeatureMembershipUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more FeatureMemberships and returns the data updated in the database.
     * @param {FeatureMembershipUpdateManyAndReturnArgs} args - Arguments to update many FeatureMemberships.
     * @example
     * // Update many FeatureMemberships
     * const featureMembership = await prisma.featureMembership.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more FeatureMemberships and only return the `id`
     * const featureMembershipWithIdOnly = await prisma.featureMembership.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends FeatureMembershipUpdateManyAndReturnArgs>(args: SelectSubset<T, FeatureMembershipUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FeatureMembershipPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one FeatureMembership.
     * @param {FeatureMembershipUpsertArgs} args - Arguments to update or create a FeatureMembership.
     * @example
     * // Update or create a FeatureMembership
     * const featureMembership = await prisma.featureMembership.upsert({
     *   create: {
     *     // ... data to create a FeatureMembership
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the FeatureMembership we want to update
     *   }
     * })
     */
    upsert<T extends FeatureMembershipUpsertArgs>(args: SelectSubset<T, FeatureMembershipUpsertArgs<ExtArgs>>): Prisma__FeatureMembershipClient<$Result.GetResult<Prisma.$FeatureMembershipPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of FeatureMemberships.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FeatureMembershipCountArgs} args - Arguments to filter FeatureMemberships to count.
     * @example
     * // Count the number of FeatureMemberships
     * const count = await prisma.featureMembership.count({
     *   where: {
     *     // ... the filter for the FeatureMemberships we want to count
     *   }
     * })
    **/
    count<T extends FeatureMembershipCountArgs>(
      args?: Subset<T, FeatureMembershipCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FeatureMembershipCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a FeatureMembership.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FeatureMembershipAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends FeatureMembershipAggregateArgs>(args: Subset<T, FeatureMembershipAggregateArgs>): Prisma.PrismaPromise<GetFeatureMembershipAggregateType<T>>

    /**
     * Group by FeatureMembership.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FeatureMembershipGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends FeatureMembershipGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FeatureMembershipGroupByArgs['orderBy'] }
        : { orderBy?: FeatureMembershipGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, FeatureMembershipGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFeatureMembershipGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the FeatureMembership model
   */
  readonly fields: FeatureMembershipFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for FeatureMembership.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FeatureMembershipClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    featureInstance<T extends FeatureInstanceDefaultArgs<ExtArgs> = {}>(args?: Subset<T, FeatureInstanceDefaultArgs<ExtArgs>>): Prisma__FeatureInstanceClient<$Result.GetResult<Prisma.$FeatureInstancePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the FeatureMembership model
   */
  interface FeatureMembershipFieldRefs {
    readonly id: FieldRef<"FeatureMembership", 'String'>
    readonly featureInstanceId: FieldRef<"FeatureMembership", 'String'>
    readonly userId: FieldRef<"FeatureMembership", 'String'>
    readonly role: FieldRef<"FeatureMembership", 'FeatureMembershipRole'>
    readonly createdAt: FieldRef<"FeatureMembership", 'DateTime'>
    readonly updatedAt: FieldRef<"FeatureMembership", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * FeatureMembership findUnique
   */
  export type FeatureMembershipFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FeatureMembership
     */
    select?: FeatureMembershipSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FeatureMembership
     */
    omit?: FeatureMembershipOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeatureMembershipInclude<ExtArgs> | null
    /**
     * Filter, which FeatureMembership to fetch.
     */
    where: FeatureMembershipWhereUniqueInput
  }

  /**
   * FeatureMembership findUniqueOrThrow
   */
  export type FeatureMembershipFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FeatureMembership
     */
    select?: FeatureMembershipSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FeatureMembership
     */
    omit?: FeatureMembershipOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeatureMembershipInclude<ExtArgs> | null
    /**
     * Filter, which FeatureMembership to fetch.
     */
    where: FeatureMembershipWhereUniqueInput
  }

  /**
   * FeatureMembership findFirst
   */
  export type FeatureMembershipFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FeatureMembership
     */
    select?: FeatureMembershipSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FeatureMembership
     */
    omit?: FeatureMembershipOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeatureMembershipInclude<ExtArgs> | null
    /**
     * Filter, which FeatureMembership to fetch.
     */
    where?: FeatureMembershipWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FeatureMemberships to fetch.
     */
    orderBy?: FeatureMembershipOrderByWithRelationInput | FeatureMembershipOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FeatureMemberships.
     */
    cursor?: FeatureMembershipWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FeatureMemberships from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FeatureMemberships.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FeatureMemberships.
     */
    distinct?: FeatureMembershipScalarFieldEnum | FeatureMembershipScalarFieldEnum[]
  }

  /**
   * FeatureMembership findFirstOrThrow
   */
  export type FeatureMembershipFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FeatureMembership
     */
    select?: FeatureMembershipSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FeatureMembership
     */
    omit?: FeatureMembershipOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeatureMembershipInclude<ExtArgs> | null
    /**
     * Filter, which FeatureMembership to fetch.
     */
    where?: FeatureMembershipWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FeatureMemberships to fetch.
     */
    orderBy?: FeatureMembershipOrderByWithRelationInput | FeatureMembershipOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FeatureMemberships.
     */
    cursor?: FeatureMembershipWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FeatureMemberships from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FeatureMemberships.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FeatureMemberships.
     */
    distinct?: FeatureMembershipScalarFieldEnum | FeatureMembershipScalarFieldEnum[]
  }

  /**
   * FeatureMembership findMany
   */
  export type FeatureMembershipFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FeatureMembership
     */
    select?: FeatureMembershipSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FeatureMembership
     */
    omit?: FeatureMembershipOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeatureMembershipInclude<ExtArgs> | null
    /**
     * Filter, which FeatureMemberships to fetch.
     */
    where?: FeatureMembershipWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FeatureMemberships to fetch.
     */
    orderBy?: FeatureMembershipOrderByWithRelationInput | FeatureMembershipOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing FeatureMemberships.
     */
    cursor?: FeatureMembershipWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FeatureMemberships from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FeatureMemberships.
     */
    skip?: number
    distinct?: FeatureMembershipScalarFieldEnum | FeatureMembershipScalarFieldEnum[]
  }

  /**
   * FeatureMembership create
   */
  export type FeatureMembershipCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FeatureMembership
     */
    select?: FeatureMembershipSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FeatureMembership
     */
    omit?: FeatureMembershipOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeatureMembershipInclude<ExtArgs> | null
    /**
     * The data needed to create a FeatureMembership.
     */
    data: XOR<FeatureMembershipCreateInput, FeatureMembershipUncheckedCreateInput>
  }

  /**
   * FeatureMembership createMany
   */
  export type FeatureMembershipCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many FeatureMemberships.
     */
    data: FeatureMembershipCreateManyInput | FeatureMembershipCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * FeatureMembership createManyAndReturn
   */
  export type FeatureMembershipCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FeatureMembership
     */
    select?: FeatureMembershipSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the FeatureMembership
     */
    omit?: FeatureMembershipOmit<ExtArgs> | null
    /**
     * The data used to create many FeatureMemberships.
     */
    data: FeatureMembershipCreateManyInput | FeatureMembershipCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeatureMembershipIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * FeatureMembership update
   */
  export type FeatureMembershipUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FeatureMembership
     */
    select?: FeatureMembershipSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FeatureMembership
     */
    omit?: FeatureMembershipOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeatureMembershipInclude<ExtArgs> | null
    /**
     * The data needed to update a FeatureMembership.
     */
    data: XOR<FeatureMembershipUpdateInput, FeatureMembershipUncheckedUpdateInput>
    /**
     * Choose, which FeatureMembership to update.
     */
    where: FeatureMembershipWhereUniqueInput
  }

  /**
   * FeatureMembership updateMany
   */
  export type FeatureMembershipUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update FeatureMemberships.
     */
    data: XOR<FeatureMembershipUpdateManyMutationInput, FeatureMembershipUncheckedUpdateManyInput>
    /**
     * Filter which FeatureMemberships to update
     */
    where?: FeatureMembershipWhereInput
    /**
     * Limit how many FeatureMemberships to update.
     */
    limit?: number
  }

  /**
   * FeatureMembership updateManyAndReturn
   */
  export type FeatureMembershipUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FeatureMembership
     */
    select?: FeatureMembershipSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the FeatureMembership
     */
    omit?: FeatureMembershipOmit<ExtArgs> | null
    /**
     * The data used to update FeatureMemberships.
     */
    data: XOR<FeatureMembershipUpdateManyMutationInput, FeatureMembershipUncheckedUpdateManyInput>
    /**
     * Filter which FeatureMemberships to update
     */
    where?: FeatureMembershipWhereInput
    /**
     * Limit how many FeatureMemberships to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeatureMembershipIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * FeatureMembership upsert
   */
  export type FeatureMembershipUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FeatureMembership
     */
    select?: FeatureMembershipSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FeatureMembership
     */
    omit?: FeatureMembershipOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeatureMembershipInclude<ExtArgs> | null
    /**
     * The filter to search for the FeatureMembership to update in case it exists.
     */
    where: FeatureMembershipWhereUniqueInput
    /**
     * In case the FeatureMembership found by the `where` argument doesn't exist, create a new FeatureMembership with this data.
     */
    create: XOR<FeatureMembershipCreateInput, FeatureMembershipUncheckedCreateInput>
    /**
     * In case the FeatureMembership was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FeatureMembershipUpdateInput, FeatureMembershipUncheckedUpdateInput>
  }

  /**
   * FeatureMembership delete
   */
  export type FeatureMembershipDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FeatureMembership
     */
    select?: FeatureMembershipSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FeatureMembership
     */
    omit?: FeatureMembershipOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeatureMembershipInclude<ExtArgs> | null
    /**
     * Filter which FeatureMembership to delete.
     */
    where: FeatureMembershipWhereUniqueInput
  }

  /**
   * FeatureMembership deleteMany
   */
  export type FeatureMembershipDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FeatureMemberships to delete
     */
    where?: FeatureMembershipWhereInput
    /**
     * Limit how many FeatureMemberships to delete.
     */
    limit?: number
  }

  /**
   * FeatureMembership without action
   */
  export type FeatureMembershipDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FeatureMembership
     */
    select?: FeatureMembershipSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FeatureMembership
     */
    omit?: FeatureMembershipOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeatureMembershipInclude<ExtArgs> | null
  }


  /**
   * Model FeatureInvite
   */

  export type AggregateFeatureInvite = {
    _count: FeatureInviteCountAggregateOutputType | null
    _min: FeatureInviteMinAggregateOutputType | null
    _max: FeatureInviteMaxAggregateOutputType | null
  }

  export type FeatureInviteMinAggregateOutputType = {
    id: string | null
    featureInstanceId: string | null
    featureKey: $Enums.FeatureKey | null
    inviterId: string | null
    email: string | null
    tokenHash: string | null
    expiresAt: Date | null
    acceptedAt: Date | null
    revokedAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type FeatureInviteMaxAggregateOutputType = {
    id: string | null
    featureInstanceId: string | null
    featureKey: $Enums.FeatureKey | null
    inviterId: string | null
    email: string | null
    tokenHash: string | null
    expiresAt: Date | null
    acceptedAt: Date | null
    revokedAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type FeatureInviteCountAggregateOutputType = {
    id: number
    featureInstanceId: number
    featureKey: number
    inviterId: number
    email: number
    tokenHash: number
    expiresAt: number
    acceptedAt: number
    revokedAt: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type FeatureInviteMinAggregateInputType = {
    id?: true
    featureInstanceId?: true
    featureKey?: true
    inviterId?: true
    email?: true
    tokenHash?: true
    expiresAt?: true
    acceptedAt?: true
    revokedAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type FeatureInviteMaxAggregateInputType = {
    id?: true
    featureInstanceId?: true
    featureKey?: true
    inviterId?: true
    email?: true
    tokenHash?: true
    expiresAt?: true
    acceptedAt?: true
    revokedAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type FeatureInviteCountAggregateInputType = {
    id?: true
    featureInstanceId?: true
    featureKey?: true
    inviterId?: true
    email?: true
    tokenHash?: true
    expiresAt?: true
    acceptedAt?: true
    revokedAt?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type FeatureInviteAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FeatureInvite to aggregate.
     */
    where?: FeatureInviteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FeatureInvites to fetch.
     */
    orderBy?: FeatureInviteOrderByWithRelationInput | FeatureInviteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FeatureInviteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FeatureInvites from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FeatureInvites.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned FeatureInvites
    **/
    _count?: true | FeatureInviteCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FeatureInviteMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FeatureInviteMaxAggregateInputType
  }

  export type GetFeatureInviteAggregateType<T extends FeatureInviteAggregateArgs> = {
        [P in keyof T & keyof AggregateFeatureInvite]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFeatureInvite[P]>
      : GetScalarType<T[P], AggregateFeatureInvite[P]>
  }




  export type FeatureInviteGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FeatureInviteWhereInput
    orderBy?: FeatureInviteOrderByWithAggregationInput | FeatureInviteOrderByWithAggregationInput[]
    by: FeatureInviteScalarFieldEnum[] | FeatureInviteScalarFieldEnum
    having?: FeatureInviteScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FeatureInviteCountAggregateInputType | true
    _min?: FeatureInviteMinAggregateInputType
    _max?: FeatureInviteMaxAggregateInputType
  }

  export type FeatureInviteGroupByOutputType = {
    id: string
    featureInstanceId: string
    featureKey: $Enums.FeatureKey
    inviterId: string
    email: string
    tokenHash: string
    expiresAt: Date
    acceptedAt: Date | null
    revokedAt: Date | null
    createdAt: Date
    updatedAt: Date
    _count: FeatureInviteCountAggregateOutputType | null
    _min: FeatureInviteMinAggregateOutputType | null
    _max: FeatureInviteMaxAggregateOutputType | null
  }

  type GetFeatureInviteGroupByPayload<T extends FeatureInviteGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FeatureInviteGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FeatureInviteGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FeatureInviteGroupByOutputType[P]>
            : GetScalarType<T[P], FeatureInviteGroupByOutputType[P]>
        }
      >
    >


  export type FeatureInviteSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    featureInstanceId?: boolean
    featureKey?: boolean
    inviterId?: boolean
    email?: boolean
    tokenHash?: boolean
    expiresAt?: boolean
    acceptedAt?: boolean
    revokedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    featureInstance?: boolean | FeatureInstanceDefaultArgs<ExtArgs>
    inviter?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["featureInvite"]>

  export type FeatureInviteSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    featureInstanceId?: boolean
    featureKey?: boolean
    inviterId?: boolean
    email?: boolean
    tokenHash?: boolean
    expiresAt?: boolean
    acceptedAt?: boolean
    revokedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    featureInstance?: boolean | FeatureInstanceDefaultArgs<ExtArgs>
    inviter?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["featureInvite"]>

  export type FeatureInviteSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    featureInstanceId?: boolean
    featureKey?: boolean
    inviterId?: boolean
    email?: boolean
    tokenHash?: boolean
    expiresAt?: boolean
    acceptedAt?: boolean
    revokedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    featureInstance?: boolean | FeatureInstanceDefaultArgs<ExtArgs>
    inviter?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["featureInvite"]>

  export type FeatureInviteSelectScalar = {
    id?: boolean
    featureInstanceId?: boolean
    featureKey?: boolean
    inviterId?: boolean
    email?: boolean
    tokenHash?: boolean
    expiresAt?: boolean
    acceptedAt?: boolean
    revokedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type FeatureInviteOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "featureInstanceId" | "featureKey" | "inviterId" | "email" | "tokenHash" | "expiresAt" | "acceptedAt" | "revokedAt" | "createdAt" | "updatedAt", ExtArgs["result"]["featureInvite"]>
  export type FeatureInviteInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    featureInstance?: boolean | FeatureInstanceDefaultArgs<ExtArgs>
    inviter?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type FeatureInviteIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    featureInstance?: boolean | FeatureInstanceDefaultArgs<ExtArgs>
    inviter?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type FeatureInviteIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    featureInstance?: boolean | FeatureInstanceDefaultArgs<ExtArgs>
    inviter?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $FeatureInvitePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "FeatureInvite"
    objects: {
      featureInstance: Prisma.$FeatureInstancePayload<ExtArgs>
      inviter: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      featureInstanceId: string
      featureKey: $Enums.FeatureKey
      inviterId: string
      email: string
      tokenHash: string
      expiresAt: Date
      acceptedAt: Date | null
      revokedAt: Date | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["featureInvite"]>
    composites: {}
  }

  type FeatureInviteGetPayload<S extends boolean | null | undefined | FeatureInviteDefaultArgs> = $Result.GetResult<Prisma.$FeatureInvitePayload, S>

  type FeatureInviteCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<FeatureInviteFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: FeatureInviteCountAggregateInputType | true
    }

  export interface FeatureInviteDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['FeatureInvite'], meta: { name: 'FeatureInvite' } }
    /**
     * Find zero or one FeatureInvite that matches the filter.
     * @param {FeatureInviteFindUniqueArgs} args - Arguments to find a FeatureInvite
     * @example
     * // Get one FeatureInvite
     * const featureInvite = await prisma.featureInvite.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends FeatureInviteFindUniqueArgs>(args: SelectSubset<T, FeatureInviteFindUniqueArgs<ExtArgs>>): Prisma__FeatureInviteClient<$Result.GetResult<Prisma.$FeatureInvitePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one FeatureInvite that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {FeatureInviteFindUniqueOrThrowArgs} args - Arguments to find a FeatureInvite
     * @example
     * // Get one FeatureInvite
     * const featureInvite = await prisma.featureInvite.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends FeatureInviteFindUniqueOrThrowArgs>(args: SelectSubset<T, FeatureInviteFindUniqueOrThrowArgs<ExtArgs>>): Prisma__FeatureInviteClient<$Result.GetResult<Prisma.$FeatureInvitePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first FeatureInvite that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FeatureInviteFindFirstArgs} args - Arguments to find a FeatureInvite
     * @example
     * // Get one FeatureInvite
     * const featureInvite = await prisma.featureInvite.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends FeatureInviteFindFirstArgs>(args?: SelectSubset<T, FeatureInviteFindFirstArgs<ExtArgs>>): Prisma__FeatureInviteClient<$Result.GetResult<Prisma.$FeatureInvitePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first FeatureInvite that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FeatureInviteFindFirstOrThrowArgs} args - Arguments to find a FeatureInvite
     * @example
     * // Get one FeatureInvite
     * const featureInvite = await prisma.featureInvite.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends FeatureInviteFindFirstOrThrowArgs>(args?: SelectSubset<T, FeatureInviteFindFirstOrThrowArgs<ExtArgs>>): Prisma__FeatureInviteClient<$Result.GetResult<Prisma.$FeatureInvitePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more FeatureInvites that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FeatureInviteFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all FeatureInvites
     * const featureInvites = await prisma.featureInvite.findMany()
     * 
     * // Get first 10 FeatureInvites
     * const featureInvites = await prisma.featureInvite.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const featureInviteWithIdOnly = await prisma.featureInvite.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends FeatureInviteFindManyArgs>(args?: SelectSubset<T, FeatureInviteFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FeatureInvitePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a FeatureInvite.
     * @param {FeatureInviteCreateArgs} args - Arguments to create a FeatureInvite.
     * @example
     * // Create one FeatureInvite
     * const FeatureInvite = await prisma.featureInvite.create({
     *   data: {
     *     // ... data to create a FeatureInvite
     *   }
     * })
     * 
     */
    create<T extends FeatureInviteCreateArgs>(args: SelectSubset<T, FeatureInviteCreateArgs<ExtArgs>>): Prisma__FeatureInviteClient<$Result.GetResult<Prisma.$FeatureInvitePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many FeatureInvites.
     * @param {FeatureInviteCreateManyArgs} args - Arguments to create many FeatureInvites.
     * @example
     * // Create many FeatureInvites
     * const featureInvite = await prisma.featureInvite.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends FeatureInviteCreateManyArgs>(args?: SelectSubset<T, FeatureInviteCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many FeatureInvites and returns the data saved in the database.
     * @param {FeatureInviteCreateManyAndReturnArgs} args - Arguments to create many FeatureInvites.
     * @example
     * // Create many FeatureInvites
     * const featureInvite = await prisma.featureInvite.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many FeatureInvites and only return the `id`
     * const featureInviteWithIdOnly = await prisma.featureInvite.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends FeatureInviteCreateManyAndReturnArgs>(args?: SelectSubset<T, FeatureInviteCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FeatureInvitePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a FeatureInvite.
     * @param {FeatureInviteDeleteArgs} args - Arguments to delete one FeatureInvite.
     * @example
     * // Delete one FeatureInvite
     * const FeatureInvite = await prisma.featureInvite.delete({
     *   where: {
     *     // ... filter to delete one FeatureInvite
     *   }
     * })
     * 
     */
    delete<T extends FeatureInviteDeleteArgs>(args: SelectSubset<T, FeatureInviteDeleteArgs<ExtArgs>>): Prisma__FeatureInviteClient<$Result.GetResult<Prisma.$FeatureInvitePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one FeatureInvite.
     * @param {FeatureInviteUpdateArgs} args - Arguments to update one FeatureInvite.
     * @example
     * // Update one FeatureInvite
     * const featureInvite = await prisma.featureInvite.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends FeatureInviteUpdateArgs>(args: SelectSubset<T, FeatureInviteUpdateArgs<ExtArgs>>): Prisma__FeatureInviteClient<$Result.GetResult<Prisma.$FeatureInvitePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more FeatureInvites.
     * @param {FeatureInviteDeleteManyArgs} args - Arguments to filter FeatureInvites to delete.
     * @example
     * // Delete a few FeatureInvites
     * const { count } = await prisma.featureInvite.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends FeatureInviteDeleteManyArgs>(args?: SelectSubset<T, FeatureInviteDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more FeatureInvites.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FeatureInviteUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many FeatureInvites
     * const featureInvite = await prisma.featureInvite.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends FeatureInviteUpdateManyArgs>(args: SelectSubset<T, FeatureInviteUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more FeatureInvites and returns the data updated in the database.
     * @param {FeatureInviteUpdateManyAndReturnArgs} args - Arguments to update many FeatureInvites.
     * @example
     * // Update many FeatureInvites
     * const featureInvite = await prisma.featureInvite.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more FeatureInvites and only return the `id`
     * const featureInviteWithIdOnly = await prisma.featureInvite.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends FeatureInviteUpdateManyAndReturnArgs>(args: SelectSubset<T, FeatureInviteUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FeatureInvitePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one FeatureInvite.
     * @param {FeatureInviteUpsertArgs} args - Arguments to update or create a FeatureInvite.
     * @example
     * // Update or create a FeatureInvite
     * const featureInvite = await prisma.featureInvite.upsert({
     *   create: {
     *     // ... data to create a FeatureInvite
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the FeatureInvite we want to update
     *   }
     * })
     */
    upsert<T extends FeatureInviteUpsertArgs>(args: SelectSubset<T, FeatureInviteUpsertArgs<ExtArgs>>): Prisma__FeatureInviteClient<$Result.GetResult<Prisma.$FeatureInvitePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of FeatureInvites.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FeatureInviteCountArgs} args - Arguments to filter FeatureInvites to count.
     * @example
     * // Count the number of FeatureInvites
     * const count = await prisma.featureInvite.count({
     *   where: {
     *     // ... the filter for the FeatureInvites we want to count
     *   }
     * })
    **/
    count<T extends FeatureInviteCountArgs>(
      args?: Subset<T, FeatureInviteCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FeatureInviteCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a FeatureInvite.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FeatureInviteAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends FeatureInviteAggregateArgs>(args: Subset<T, FeatureInviteAggregateArgs>): Prisma.PrismaPromise<GetFeatureInviteAggregateType<T>>

    /**
     * Group by FeatureInvite.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FeatureInviteGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends FeatureInviteGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FeatureInviteGroupByArgs['orderBy'] }
        : { orderBy?: FeatureInviteGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, FeatureInviteGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFeatureInviteGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the FeatureInvite model
   */
  readonly fields: FeatureInviteFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for FeatureInvite.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FeatureInviteClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    featureInstance<T extends FeatureInstanceDefaultArgs<ExtArgs> = {}>(args?: Subset<T, FeatureInstanceDefaultArgs<ExtArgs>>): Prisma__FeatureInstanceClient<$Result.GetResult<Prisma.$FeatureInstancePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    inviter<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the FeatureInvite model
   */
  interface FeatureInviteFieldRefs {
    readonly id: FieldRef<"FeatureInvite", 'String'>
    readonly featureInstanceId: FieldRef<"FeatureInvite", 'String'>
    readonly featureKey: FieldRef<"FeatureInvite", 'FeatureKey'>
    readonly inviterId: FieldRef<"FeatureInvite", 'String'>
    readonly email: FieldRef<"FeatureInvite", 'String'>
    readonly tokenHash: FieldRef<"FeatureInvite", 'String'>
    readonly expiresAt: FieldRef<"FeatureInvite", 'DateTime'>
    readonly acceptedAt: FieldRef<"FeatureInvite", 'DateTime'>
    readonly revokedAt: FieldRef<"FeatureInvite", 'DateTime'>
    readonly createdAt: FieldRef<"FeatureInvite", 'DateTime'>
    readonly updatedAt: FieldRef<"FeatureInvite", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * FeatureInvite findUnique
   */
  export type FeatureInviteFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FeatureInvite
     */
    select?: FeatureInviteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FeatureInvite
     */
    omit?: FeatureInviteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeatureInviteInclude<ExtArgs> | null
    /**
     * Filter, which FeatureInvite to fetch.
     */
    where: FeatureInviteWhereUniqueInput
  }

  /**
   * FeatureInvite findUniqueOrThrow
   */
  export type FeatureInviteFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FeatureInvite
     */
    select?: FeatureInviteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FeatureInvite
     */
    omit?: FeatureInviteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeatureInviteInclude<ExtArgs> | null
    /**
     * Filter, which FeatureInvite to fetch.
     */
    where: FeatureInviteWhereUniqueInput
  }

  /**
   * FeatureInvite findFirst
   */
  export type FeatureInviteFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FeatureInvite
     */
    select?: FeatureInviteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FeatureInvite
     */
    omit?: FeatureInviteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeatureInviteInclude<ExtArgs> | null
    /**
     * Filter, which FeatureInvite to fetch.
     */
    where?: FeatureInviteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FeatureInvites to fetch.
     */
    orderBy?: FeatureInviteOrderByWithRelationInput | FeatureInviteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FeatureInvites.
     */
    cursor?: FeatureInviteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FeatureInvites from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FeatureInvites.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FeatureInvites.
     */
    distinct?: FeatureInviteScalarFieldEnum | FeatureInviteScalarFieldEnum[]
  }

  /**
   * FeatureInvite findFirstOrThrow
   */
  export type FeatureInviteFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FeatureInvite
     */
    select?: FeatureInviteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FeatureInvite
     */
    omit?: FeatureInviteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeatureInviteInclude<ExtArgs> | null
    /**
     * Filter, which FeatureInvite to fetch.
     */
    where?: FeatureInviteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FeatureInvites to fetch.
     */
    orderBy?: FeatureInviteOrderByWithRelationInput | FeatureInviteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FeatureInvites.
     */
    cursor?: FeatureInviteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FeatureInvites from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FeatureInvites.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FeatureInvites.
     */
    distinct?: FeatureInviteScalarFieldEnum | FeatureInviteScalarFieldEnum[]
  }

  /**
   * FeatureInvite findMany
   */
  export type FeatureInviteFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FeatureInvite
     */
    select?: FeatureInviteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FeatureInvite
     */
    omit?: FeatureInviteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeatureInviteInclude<ExtArgs> | null
    /**
     * Filter, which FeatureInvites to fetch.
     */
    where?: FeatureInviteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FeatureInvites to fetch.
     */
    orderBy?: FeatureInviteOrderByWithRelationInput | FeatureInviteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing FeatureInvites.
     */
    cursor?: FeatureInviteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FeatureInvites from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FeatureInvites.
     */
    skip?: number
    distinct?: FeatureInviteScalarFieldEnum | FeatureInviteScalarFieldEnum[]
  }

  /**
   * FeatureInvite create
   */
  export type FeatureInviteCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FeatureInvite
     */
    select?: FeatureInviteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FeatureInvite
     */
    omit?: FeatureInviteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeatureInviteInclude<ExtArgs> | null
    /**
     * The data needed to create a FeatureInvite.
     */
    data: XOR<FeatureInviteCreateInput, FeatureInviteUncheckedCreateInput>
  }

  /**
   * FeatureInvite createMany
   */
  export type FeatureInviteCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many FeatureInvites.
     */
    data: FeatureInviteCreateManyInput | FeatureInviteCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * FeatureInvite createManyAndReturn
   */
  export type FeatureInviteCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FeatureInvite
     */
    select?: FeatureInviteSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the FeatureInvite
     */
    omit?: FeatureInviteOmit<ExtArgs> | null
    /**
     * The data used to create many FeatureInvites.
     */
    data: FeatureInviteCreateManyInput | FeatureInviteCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeatureInviteIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * FeatureInvite update
   */
  export type FeatureInviteUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FeatureInvite
     */
    select?: FeatureInviteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FeatureInvite
     */
    omit?: FeatureInviteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeatureInviteInclude<ExtArgs> | null
    /**
     * The data needed to update a FeatureInvite.
     */
    data: XOR<FeatureInviteUpdateInput, FeatureInviteUncheckedUpdateInput>
    /**
     * Choose, which FeatureInvite to update.
     */
    where: FeatureInviteWhereUniqueInput
  }

  /**
   * FeatureInvite updateMany
   */
  export type FeatureInviteUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update FeatureInvites.
     */
    data: XOR<FeatureInviteUpdateManyMutationInput, FeatureInviteUncheckedUpdateManyInput>
    /**
     * Filter which FeatureInvites to update
     */
    where?: FeatureInviteWhereInput
    /**
     * Limit how many FeatureInvites to update.
     */
    limit?: number
  }

  /**
   * FeatureInvite updateManyAndReturn
   */
  export type FeatureInviteUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FeatureInvite
     */
    select?: FeatureInviteSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the FeatureInvite
     */
    omit?: FeatureInviteOmit<ExtArgs> | null
    /**
     * The data used to update FeatureInvites.
     */
    data: XOR<FeatureInviteUpdateManyMutationInput, FeatureInviteUncheckedUpdateManyInput>
    /**
     * Filter which FeatureInvites to update
     */
    where?: FeatureInviteWhereInput
    /**
     * Limit how many FeatureInvites to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeatureInviteIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * FeatureInvite upsert
   */
  export type FeatureInviteUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FeatureInvite
     */
    select?: FeatureInviteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FeatureInvite
     */
    omit?: FeatureInviteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeatureInviteInclude<ExtArgs> | null
    /**
     * The filter to search for the FeatureInvite to update in case it exists.
     */
    where: FeatureInviteWhereUniqueInput
    /**
     * In case the FeatureInvite found by the `where` argument doesn't exist, create a new FeatureInvite with this data.
     */
    create: XOR<FeatureInviteCreateInput, FeatureInviteUncheckedCreateInput>
    /**
     * In case the FeatureInvite was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FeatureInviteUpdateInput, FeatureInviteUncheckedUpdateInput>
  }

  /**
   * FeatureInvite delete
   */
  export type FeatureInviteDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FeatureInvite
     */
    select?: FeatureInviteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FeatureInvite
     */
    omit?: FeatureInviteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeatureInviteInclude<ExtArgs> | null
    /**
     * Filter which FeatureInvite to delete.
     */
    where: FeatureInviteWhereUniqueInput
  }

  /**
   * FeatureInvite deleteMany
   */
  export type FeatureInviteDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FeatureInvites to delete
     */
    where?: FeatureInviteWhereInput
    /**
     * Limit how many FeatureInvites to delete.
     */
    limit?: number
  }

  /**
   * FeatureInvite without action
   */
  export type FeatureInviteDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FeatureInvite
     */
    select?: FeatureInviteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FeatureInvite
     */
    omit?: FeatureInviteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeatureInviteInclude<ExtArgs> | null
  }


  /**
   * Model Watchlist
   */

  export type AggregateWatchlist = {
    _count: WatchlistCountAggregateOutputType | null
    _min: WatchlistMinAggregateOutputType | null
    _max: WatchlistMaxAggregateOutputType | null
  }

  export type WatchlistMinAggregateOutputType = {
    id: string | null
    featureInstanceId: string | null
    name: string | null
    description: string | null
    mediaType: $Enums.WatchlistMediaType | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type WatchlistMaxAggregateOutputType = {
    id: string | null
    featureInstanceId: string | null
    name: string | null
    description: string | null
    mediaType: $Enums.WatchlistMediaType | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type WatchlistCountAggregateOutputType = {
    id: number
    featureInstanceId: number
    name: number
    description: number
    mediaType: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type WatchlistMinAggregateInputType = {
    id?: true
    featureInstanceId?: true
    name?: true
    description?: true
    mediaType?: true
    createdAt?: true
    updatedAt?: true
  }

  export type WatchlistMaxAggregateInputType = {
    id?: true
    featureInstanceId?: true
    name?: true
    description?: true
    mediaType?: true
    createdAt?: true
    updatedAt?: true
  }

  export type WatchlistCountAggregateInputType = {
    id?: true
    featureInstanceId?: true
    name?: true
    description?: true
    mediaType?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type WatchlistAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Watchlist to aggregate.
     */
    where?: WatchlistWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Watchlists to fetch.
     */
    orderBy?: WatchlistOrderByWithRelationInput | WatchlistOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: WatchlistWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Watchlists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Watchlists.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Watchlists
    **/
    _count?: true | WatchlistCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: WatchlistMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: WatchlistMaxAggregateInputType
  }

  export type GetWatchlistAggregateType<T extends WatchlistAggregateArgs> = {
        [P in keyof T & keyof AggregateWatchlist]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateWatchlist[P]>
      : GetScalarType<T[P], AggregateWatchlist[P]>
  }




  export type WatchlistGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WatchlistWhereInput
    orderBy?: WatchlistOrderByWithAggregationInput | WatchlistOrderByWithAggregationInput[]
    by: WatchlistScalarFieldEnum[] | WatchlistScalarFieldEnum
    having?: WatchlistScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: WatchlistCountAggregateInputType | true
    _min?: WatchlistMinAggregateInputType
    _max?: WatchlistMaxAggregateInputType
  }

  export type WatchlistGroupByOutputType = {
    id: string
    featureInstanceId: string
    name: string
    description: string | null
    mediaType: $Enums.WatchlistMediaType
    createdAt: Date
    updatedAt: Date
    _count: WatchlistCountAggregateOutputType | null
    _min: WatchlistMinAggregateOutputType | null
    _max: WatchlistMaxAggregateOutputType | null
  }

  type GetWatchlistGroupByPayload<T extends WatchlistGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<WatchlistGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof WatchlistGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], WatchlistGroupByOutputType[P]>
            : GetScalarType<T[P], WatchlistGroupByOutputType[P]>
        }
      >
    >


  export type WatchlistSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    featureInstanceId?: boolean
    name?: boolean
    description?: boolean
    mediaType?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    featureInstance?: boolean | FeatureInstanceDefaultArgs<ExtArgs>
    items?: boolean | Watchlist$itemsArgs<ExtArgs>
    _count?: boolean | WatchlistCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["watchlist"]>

  export type WatchlistSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    featureInstanceId?: boolean
    name?: boolean
    description?: boolean
    mediaType?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    featureInstance?: boolean | FeatureInstanceDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["watchlist"]>

  export type WatchlistSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    featureInstanceId?: boolean
    name?: boolean
    description?: boolean
    mediaType?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    featureInstance?: boolean | FeatureInstanceDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["watchlist"]>

  export type WatchlistSelectScalar = {
    id?: boolean
    featureInstanceId?: boolean
    name?: boolean
    description?: boolean
    mediaType?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type WatchlistOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "featureInstanceId" | "name" | "description" | "mediaType" | "createdAt" | "updatedAt", ExtArgs["result"]["watchlist"]>
  export type WatchlistInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    featureInstance?: boolean | FeatureInstanceDefaultArgs<ExtArgs>
    items?: boolean | Watchlist$itemsArgs<ExtArgs>
    _count?: boolean | WatchlistCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type WatchlistIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    featureInstance?: boolean | FeatureInstanceDefaultArgs<ExtArgs>
  }
  export type WatchlistIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    featureInstance?: boolean | FeatureInstanceDefaultArgs<ExtArgs>
  }

  export type $WatchlistPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Watchlist"
    objects: {
      featureInstance: Prisma.$FeatureInstancePayload<ExtArgs>
      items: Prisma.$WatchlistItemPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      featureInstanceId: string
      name: string
      description: string | null
      mediaType: $Enums.WatchlistMediaType
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["watchlist"]>
    composites: {}
  }

  type WatchlistGetPayload<S extends boolean | null | undefined | WatchlistDefaultArgs> = $Result.GetResult<Prisma.$WatchlistPayload, S>

  type WatchlistCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<WatchlistFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: WatchlistCountAggregateInputType | true
    }

  export interface WatchlistDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Watchlist'], meta: { name: 'Watchlist' } }
    /**
     * Find zero or one Watchlist that matches the filter.
     * @param {WatchlistFindUniqueArgs} args - Arguments to find a Watchlist
     * @example
     * // Get one Watchlist
     * const watchlist = await prisma.watchlist.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends WatchlistFindUniqueArgs>(args: SelectSubset<T, WatchlistFindUniqueArgs<ExtArgs>>): Prisma__WatchlistClient<$Result.GetResult<Prisma.$WatchlistPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Watchlist that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {WatchlistFindUniqueOrThrowArgs} args - Arguments to find a Watchlist
     * @example
     * // Get one Watchlist
     * const watchlist = await prisma.watchlist.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends WatchlistFindUniqueOrThrowArgs>(args: SelectSubset<T, WatchlistFindUniqueOrThrowArgs<ExtArgs>>): Prisma__WatchlistClient<$Result.GetResult<Prisma.$WatchlistPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Watchlist that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WatchlistFindFirstArgs} args - Arguments to find a Watchlist
     * @example
     * // Get one Watchlist
     * const watchlist = await prisma.watchlist.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends WatchlistFindFirstArgs>(args?: SelectSubset<T, WatchlistFindFirstArgs<ExtArgs>>): Prisma__WatchlistClient<$Result.GetResult<Prisma.$WatchlistPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Watchlist that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WatchlistFindFirstOrThrowArgs} args - Arguments to find a Watchlist
     * @example
     * // Get one Watchlist
     * const watchlist = await prisma.watchlist.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends WatchlistFindFirstOrThrowArgs>(args?: SelectSubset<T, WatchlistFindFirstOrThrowArgs<ExtArgs>>): Prisma__WatchlistClient<$Result.GetResult<Prisma.$WatchlistPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Watchlists that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WatchlistFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Watchlists
     * const watchlists = await prisma.watchlist.findMany()
     * 
     * // Get first 10 Watchlists
     * const watchlists = await prisma.watchlist.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const watchlistWithIdOnly = await prisma.watchlist.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends WatchlistFindManyArgs>(args?: SelectSubset<T, WatchlistFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WatchlistPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Watchlist.
     * @param {WatchlistCreateArgs} args - Arguments to create a Watchlist.
     * @example
     * // Create one Watchlist
     * const Watchlist = await prisma.watchlist.create({
     *   data: {
     *     // ... data to create a Watchlist
     *   }
     * })
     * 
     */
    create<T extends WatchlistCreateArgs>(args: SelectSubset<T, WatchlistCreateArgs<ExtArgs>>): Prisma__WatchlistClient<$Result.GetResult<Prisma.$WatchlistPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Watchlists.
     * @param {WatchlistCreateManyArgs} args - Arguments to create many Watchlists.
     * @example
     * // Create many Watchlists
     * const watchlist = await prisma.watchlist.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends WatchlistCreateManyArgs>(args?: SelectSubset<T, WatchlistCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Watchlists and returns the data saved in the database.
     * @param {WatchlistCreateManyAndReturnArgs} args - Arguments to create many Watchlists.
     * @example
     * // Create many Watchlists
     * const watchlist = await prisma.watchlist.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Watchlists and only return the `id`
     * const watchlistWithIdOnly = await prisma.watchlist.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends WatchlistCreateManyAndReturnArgs>(args?: SelectSubset<T, WatchlistCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WatchlistPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Watchlist.
     * @param {WatchlistDeleteArgs} args - Arguments to delete one Watchlist.
     * @example
     * // Delete one Watchlist
     * const Watchlist = await prisma.watchlist.delete({
     *   where: {
     *     // ... filter to delete one Watchlist
     *   }
     * })
     * 
     */
    delete<T extends WatchlistDeleteArgs>(args: SelectSubset<T, WatchlistDeleteArgs<ExtArgs>>): Prisma__WatchlistClient<$Result.GetResult<Prisma.$WatchlistPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Watchlist.
     * @param {WatchlistUpdateArgs} args - Arguments to update one Watchlist.
     * @example
     * // Update one Watchlist
     * const watchlist = await prisma.watchlist.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends WatchlistUpdateArgs>(args: SelectSubset<T, WatchlistUpdateArgs<ExtArgs>>): Prisma__WatchlistClient<$Result.GetResult<Prisma.$WatchlistPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Watchlists.
     * @param {WatchlistDeleteManyArgs} args - Arguments to filter Watchlists to delete.
     * @example
     * // Delete a few Watchlists
     * const { count } = await prisma.watchlist.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends WatchlistDeleteManyArgs>(args?: SelectSubset<T, WatchlistDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Watchlists.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WatchlistUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Watchlists
     * const watchlist = await prisma.watchlist.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends WatchlistUpdateManyArgs>(args: SelectSubset<T, WatchlistUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Watchlists and returns the data updated in the database.
     * @param {WatchlistUpdateManyAndReturnArgs} args - Arguments to update many Watchlists.
     * @example
     * // Update many Watchlists
     * const watchlist = await prisma.watchlist.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Watchlists and only return the `id`
     * const watchlistWithIdOnly = await prisma.watchlist.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends WatchlistUpdateManyAndReturnArgs>(args: SelectSubset<T, WatchlistUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WatchlistPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Watchlist.
     * @param {WatchlistUpsertArgs} args - Arguments to update or create a Watchlist.
     * @example
     * // Update or create a Watchlist
     * const watchlist = await prisma.watchlist.upsert({
     *   create: {
     *     // ... data to create a Watchlist
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Watchlist we want to update
     *   }
     * })
     */
    upsert<T extends WatchlistUpsertArgs>(args: SelectSubset<T, WatchlistUpsertArgs<ExtArgs>>): Prisma__WatchlistClient<$Result.GetResult<Prisma.$WatchlistPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Watchlists.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WatchlistCountArgs} args - Arguments to filter Watchlists to count.
     * @example
     * // Count the number of Watchlists
     * const count = await prisma.watchlist.count({
     *   where: {
     *     // ... the filter for the Watchlists we want to count
     *   }
     * })
    **/
    count<T extends WatchlistCountArgs>(
      args?: Subset<T, WatchlistCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], WatchlistCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Watchlist.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WatchlistAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends WatchlistAggregateArgs>(args: Subset<T, WatchlistAggregateArgs>): Prisma.PrismaPromise<GetWatchlistAggregateType<T>>

    /**
     * Group by Watchlist.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WatchlistGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends WatchlistGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: WatchlistGroupByArgs['orderBy'] }
        : { orderBy?: WatchlistGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, WatchlistGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetWatchlistGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Watchlist model
   */
  readonly fields: WatchlistFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Watchlist.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__WatchlistClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    featureInstance<T extends FeatureInstanceDefaultArgs<ExtArgs> = {}>(args?: Subset<T, FeatureInstanceDefaultArgs<ExtArgs>>): Prisma__FeatureInstanceClient<$Result.GetResult<Prisma.$FeatureInstancePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    items<T extends Watchlist$itemsArgs<ExtArgs> = {}>(args?: Subset<T, Watchlist$itemsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WatchlistItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Watchlist model
   */
  interface WatchlistFieldRefs {
    readonly id: FieldRef<"Watchlist", 'String'>
    readonly featureInstanceId: FieldRef<"Watchlist", 'String'>
    readonly name: FieldRef<"Watchlist", 'String'>
    readonly description: FieldRef<"Watchlist", 'String'>
    readonly mediaType: FieldRef<"Watchlist", 'WatchlistMediaType'>
    readonly createdAt: FieldRef<"Watchlist", 'DateTime'>
    readonly updatedAt: FieldRef<"Watchlist", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Watchlist findUnique
   */
  export type WatchlistFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Watchlist
     */
    select?: WatchlistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Watchlist
     */
    omit?: WatchlistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WatchlistInclude<ExtArgs> | null
    /**
     * Filter, which Watchlist to fetch.
     */
    where: WatchlistWhereUniqueInput
  }

  /**
   * Watchlist findUniqueOrThrow
   */
  export type WatchlistFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Watchlist
     */
    select?: WatchlistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Watchlist
     */
    omit?: WatchlistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WatchlistInclude<ExtArgs> | null
    /**
     * Filter, which Watchlist to fetch.
     */
    where: WatchlistWhereUniqueInput
  }

  /**
   * Watchlist findFirst
   */
  export type WatchlistFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Watchlist
     */
    select?: WatchlistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Watchlist
     */
    omit?: WatchlistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WatchlistInclude<ExtArgs> | null
    /**
     * Filter, which Watchlist to fetch.
     */
    where?: WatchlistWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Watchlists to fetch.
     */
    orderBy?: WatchlistOrderByWithRelationInput | WatchlistOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Watchlists.
     */
    cursor?: WatchlistWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Watchlists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Watchlists.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Watchlists.
     */
    distinct?: WatchlistScalarFieldEnum | WatchlistScalarFieldEnum[]
  }

  /**
   * Watchlist findFirstOrThrow
   */
  export type WatchlistFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Watchlist
     */
    select?: WatchlistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Watchlist
     */
    omit?: WatchlistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WatchlistInclude<ExtArgs> | null
    /**
     * Filter, which Watchlist to fetch.
     */
    where?: WatchlistWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Watchlists to fetch.
     */
    orderBy?: WatchlistOrderByWithRelationInput | WatchlistOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Watchlists.
     */
    cursor?: WatchlistWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Watchlists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Watchlists.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Watchlists.
     */
    distinct?: WatchlistScalarFieldEnum | WatchlistScalarFieldEnum[]
  }

  /**
   * Watchlist findMany
   */
  export type WatchlistFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Watchlist
     */
    select?: WatchlistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Watchlist
     */
    omit?: WatchlistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WatchlistInclude<ExtArgs> | null
    /**
     * Filter, which Watchlists to fetch.
     */
    where?: WatchlistWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Watchlists to fetch.
     */
    orderBy?: WatchlistOrderByWithRelationInput | WatchlistOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Watchlists.
     */
    cursor?: WatchlistWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Watchlists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Watchlists.
     */
    skip?: number
    distinct?: WatchlistScalarFieldEnum | WatchlistScalarFieldEnum[]
  }

  /**
   * Watchlist create
   */
  export type WatchlistCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Watchlist
     */
    select?: WatchlistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Watchlist
     */
    omit?: WatchlistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WatchlistInclude<ExtArgs> | null
    /**
     * The data needed to create a Watchlist.
     */
    data: XOR<WatchlistCreateInput, WatchlistUncheckedCreateInput>
  }

  /**
   * Watchlist createMany
   */
  export type WatchlistCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Watchlists.
     */
    data: WatchlistCreateManyInput | WatchlistCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Watchlist createManyAndReturn
   */
  export type WatchlistCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Watchlist
     */
    select?: WatchlistSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Watchlist
     */
    omit?: WatchlistOmit<ExtArgs> | null
    /**
     * The data used to create many Watchlists.
     */
    data: WatchlistCreateManyInput | WatchlistCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WatchlistIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Watchlist update
   */
  export type WatchlistUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Watchlist
     */
    select?: WatchlistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Watchlist
     */
    omit?: WatchlistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WatchlistInclude<ExtArgs> | null
    /**
     * The data needed to update a Watchlist.
     */
    data: XOR<WatchlistUpdateInput, WatchlistUncheckedUpdateInput>
    /**
     * Choose, which Watchlist to update.
     */
    where: WatchlistWhereUniqueInput
  }

  /**
   * Watchlist updateMany
   */
  export type WatchlistUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Watchlists.
     */
    data: XOR<WatchlistUpdateManyMutationInput, WatchlistUncheckedUpdateManyInput>
    /**
     * Filter which Watchlists to update
     */
    where?: WatchlistWhereInput
    /**
     * Limit how many Watchlists to update.
     */
    limit?: number
  }

  /**
   * Watchlist updateManyAndReturn
   */
  export type WatchlistUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Watchlist
     */
    select?: WatchlistSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Watchlist
     */
    omit?: WatchlistOmit<ExtArgs> | null
    /**
     * The data used to update Watchlists.
     */
    data: XOR<WatchlistUpdateManyMutationInput, WatchlistUncheckedUpdateManyInput>
    /**
     * Filter which Watchlists to update
     */
    where?: WatchlistWhereInput
    /**
     * Limit how many Watchlists to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WatchlistIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Watchlist upsert
   */
  export type WatchlistUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Watchlist
     */
    select?: WatchlistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Watchlist
     */
    omit?: WatchlistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WatchlistInclude<ExtArgs> | null
    /**
     * The filter to search for the Watchlist to update in case it exists.
     */
    where: WatchlistWhereUniqueInput
    /**
     * In case the Watchlist found by the `where` argument doesn't exist, create a new Watchlist with this data.
     */
    create: XOR<WatchlistCreateInput, WatchlistUncheckedCreateInput>
    /**
     * In case the Watchlist was found with the provided `where` argument, update it with this data.
     */
    update: XOR<WatchlistUpdateInput, WatchlistUncheckedUpdateInput>
  }

  /**
   * Watchlist delete
   */
  export type WatchlistDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Watchlist
     */
    select?: WatchlistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Watchlist
     */
    omit?: WatchlistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WatchlistInclude<ExtArgs> | null
    /**
     * Filter which Watchlist to delete.
     */
    where: WatchlistWhereUniqueInput
  }

  /**
   * Watchlist deleteMany
   */
  export type WatchlistDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Watchlists to delete
     */
    where?: WatchlistWhereInput
    /**
     * Limit how many Watchlists to delete.
     */
    limit?: number
  }

  /**
   * Watchlist.items
   */
  export type Watchlist$itemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WatchlistItem
     */
    select?: WatchlistItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WatchlistItem
     */
    omit?: WatchlistItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WatchlistItemInclude<ExtArgs> | null
    where?: WatchlistItemWhereInput
    orderBy?: WatchlistItemOrderByWithRelationInput | WatchlistItemOrderByWithRelationInput[]
    cursor?: WatchlistItemWhereUniqueInput
    take?: number
    skip?: number
    distinct?: WatchlistItemScalarFieldEnum | WatchlistItemScalarFieldEnum[]
  }

  /**
   * Watchlist without action
   */
  export type WatchlistDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Watchlist
     */
    select?: WatchlistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Watchlist
     */
    omit?: WatchlistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WatchlistInclude<ExtArgs> | null
  }


  /**
   * Model WatchlistItem
   */

  export type AggregateWatchlistItem = {
    _count: WatchlistItemCountAggregateOutputType | null
    _avg: WatchlistItemAvgAggregateOutputType | null
    _sum: WatchlistItemSumAggregateOutputType | null
    _min: WatchlistItemMinAggregateOutputType | null
    _max: WatchlistItemMaxAggregateOutputType | null
  }

  export type WatchlistItemAvgAggregateOutputType = {
    tmdbId: number | null
    position: number | null
    year: number | null
  }

  export type WatchlistItemSumAggregateOutputType = {
    tmdbId: number | null
    position: number | null
    year: number | null
  }

  export type WatchlistItemMinAggregateOutputType = {
    id: string | null
    watchlistId: string | null
    tmdbId: number | null
    position: number | null
    status: $Enums.WatchlistItemStatus | null
    note: string | null
    title: string | null
    creditNames: string | null
    year: number | null
    posterPath: string | null
    backdropPath: string | null
    overview: string | null
    watchedAt: Date | null
    addedById: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type WatchlistItemMaxAggregateOutputType = {
    id: string | null
    watchlistId: string | null
    tmdbId: number | null
    position: number | null
    status: $Enums.WatchlistItemStatus | null
    note: string | null
    title: string | null
    creditNames: string | null
    year: number | null
    posterPath: string | null
    backdropPath: string | null
    overview: string | null
    watchedAt: Date | null
    addedById: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type WatchlistItemCountAggregateOutputType = {
    id: number
    watchlistId: number
    tmdbId: number
    position: number
    status: number
    note: number
    title: number
    creditNames: number
    year: number
    posterPath: number
    backdropPath: number
    overview: number
    watchedAt: number
    addedById: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type WatchlistItemAvgAggregateInputType = {
    tmdbId?: true
    position?: true
    year?: true
  }

  export type WatchlistItemSumAggregateInputType = {
    tmdbId?: true
    position?: true
    year?: true
  }

  export type WatchlistItemMinAggregateInputType = {
    id?: true
    watchlistId?: true
    tmdbId?: true
    position?: true
    status?: true
    note?: true
    title?: true
    creditNames?: true
    year?: true
    posterPath?: true
    backdropPath?: true
    overview?: true
    watchedAt?: true
    addedById?: true
    createdAt?: true
    updatedAt?: true
  }

  export type WatchlistItemMaxAggregateInputType = {
    id?: true
    watchlistId?: true
    tmdbId?: true
    position?: true
    status?: true
    note?: true
    title?: true
    creditNames?: true
    year?: true
    posterPath?: true
    backdropPath?: true
    overview?: true
    watchedAt?: true
    addedById?: true
    createdAt?: true
    updatedAt?: true
  }

  export type WatchlistItemCountAggregateInputType = {
    id?: true
    watchlistId?: true
    tmdbId?: true
    position?: true
    status?: true
    note?: true
    title?: true
    creditNames?: true
    year?: true
    posterPath?: true
    backdropPath?: true
    overview?: true
    watchedAt?: true
    addedById?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type WatchlistItemAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which WatchlistItem to aggregate.
     */
    where?: WatchlistItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WatchlistItems to fetch.
     */
    orderBy?: WatchlistItemOrderByWithRelationInput | WatchlistItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: WatchlistItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WatchlistItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WatchlistItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned WatchlistItems
    **/
    _count?: true | WatchlistItemCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: WatchlistItemAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: WatchlistItemSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: WatchlistItemMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: WatchlistItemMaxAggregateInputType
  }

  export type GetWatchlistItemAggregateType<T extends WatchlistItemAggregateArgs> = {
        [P in keyof T & keyof AggregateWatchlistItem]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateWatchlistItem[P]>
      : GetScalarType<T[P], AggregateWatchlistItem[P]>
  }




  export type WatchlistItemGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WatchlistItemWhereInput
    orderBy?: WatchlistItemOrderByWithAggregationInput | WatchlistItemOrderByWithAggregationInput[]
    by: WatchlistItemScalarFieldEnum[] | WatchlistItemScalarFieldEnum
    having?: WatchlistItemScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: WatchlistItemCountAggregateInputType | true
    _avg?: WatchlistItemAvgAggregateInputType
    _sum?: WatchlistItemSumAggregateInputType
    _min?: WatchlistItemMinAggregateInputType
    _max?: WatchlistItemMaxAggregateInputType
  }

  export type WatchlistItemGroupByOutputType = {
    id: string
    watchlistId: string
    tmdbId: number
    position: number
    status: $Enums.WatchlistItemStatus
    note: string
    title: string
    creditNames: string | null
    year: number | null
    posterPath: string | null
    backdropPath: string | null
    overview: string | null
    watchedAt: Date | null
    addedById: string
    createdAt: Date
    updatedAt: Date
    _count: WatchlistItemCountAggregateOutputType | null
    _avg: WatchlistItemAvgAggregateOutputType | null
    _sum: WatchlistItemSumAggregateOutputType | null
    _min: WatchlistItemMinAggregateOutputType | null
    _max: WatchlistItemMaxAggregateOutputType | null
  }

  type GetWatchlistItemGroupByPayload<T extends WatchlistItemGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<WatchlistItemGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof WatchlistItemGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], WatchlistItemGroupByOutputType[P]>
            : GetScalarType<T[P], WatchlistItemGroupByOutputType[P]>
        }
      >
    >


  export type WatchlistItemSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    watchlistId?: boolean
    tmdbId?: boolean
    position?: boolean
    status?: boolean
    note?: boolean
    title?: boolean
    creditNames?: boolean
    year?: boolean
    posterPath?: boolean
    backdropPath?: boolean
    overview?: boolean
    watchedAt?: boolean
    addedById?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    addedBy?: boolean | UserDefaultArgs<ExtArgs>
    watchlist?: boolean | WatchlistDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["watchlistItem"]>

  export type WatchlistItemSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    watchlistId?: boolean
    tmdbId?: boolean
    position?: boolean
    status?: boolean
    note?: boolean
    title?: boolean
    creditNames?: boolean
    year?: boolean
    posterPath?: boolean
    backdropPath?: boolean
    overview?: boolean
    watchedAt?: boolean
    addedById?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    addedBy?: boolean | UserDefaultArgs<ExtArgs>
    watchlist?: boolean | WatchlistDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["watchlistItem"]>

  export type WatchlistItemSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    watchlistId?: boolean
    tmdbId?: boolean
    position?: boolean
    status?: boolean
    note?: boolean
    title?: boolean
    creditNames?: boolean
    year?: boolean
    posterPath?: boolean
    backdropPath?: boolean
    overview?: boolean
    watchedAt?: boolean
    addedById?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    addedBy?: boolean | UserDefaultArgs<ExtArgs>
    watchlist?: boolean | WatchlistDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["watchlistItem"]>

  export type WatchlistItemSelectScalar = {
    id?: boolean
    watchlistId?: boolean
    tmdbId?: boolean
    position?: boolean
    status?: boolean
    note?: boolean
    title?: boolean
    creditNames?: boolean
    year?: boolean
    posterPath?: boolean
    backdropPath?: boolean
    overview?: boolean
    watchedAt?: boolean
    addedById?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type WatchlistItemOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "watchlistId" | "tmdbId" | "position" | "status" | "note" | "title" | "creditNames" | "year" | "posterPath" | "backdropPath" | "overview" | "watchedAt" | "addedById" | "createdAt" | "updatedAt", ExtArgs["result"]["watchlistItem"]>
  export type WatchlistItemInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    addedBy?: boolean | UserDefaultArgs<ExtArgs>
    watchlist?: boolean | WatchlistDefaultArgs<ExtArgs>
  }
  export type WatchlistItemIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    addedBy?: boolean | UserDefaultArgs<ExtArgs>
    watchlist?: boolean | WatchlistDefaultArgs<ExtArgs>
  }
  export type WatchlistItemIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    addedBy?: boolean | UserDefaultArgs<ExtArgs>
    watchlist?: boolean | WatchlistDefaultArgs<ExtArgs>
  }

  export type $WatchlistItemPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "WatchlistItem"
    objects: {
      addedBy: Prisma.$UserPayload<ExtArgs>
      watchlist: Prisma.$WatchlistPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      watchlistId: string
      tmdbId: number
      position: number
      status: $Enums.WatchlistItemStatus
      note: string
      title: string
      creditNames: string | null
      year: number | null
      posterPath: string | null
      backdropPath: string | null
      overview: string | null
      watchedAt: Date | null
      addedById: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["watchlistItem"]>
    composites: {}
  }

  type WatchlistItemGetPayload<S extends boolean | null | undefined | WatchlistItemDefaultArgs> = $Result.GetResult<Prisma.$WatchlistItemPayload, S>

  type WatchlistItemCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<WatchlistItemFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: WatchlistItemCountAggregateInputType | true
    }

  export interface WatchlistItemDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['WatchlistItem'], meta: { name: 'WatchlistItem' } }
    /**
     * Find zero or one WatchlistItem that matches the filter.
     * @param {WatchlistItemFindUniqueArgs} args - Arguments to find a WatchlistItem
     * @example
     * // Get one WatchlistItem
     * const watchlistItem = await prisma.watchlistItem.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends WatchlistItemFindUniqueArgs>(args: SelectSubset<T, WatchlistItemFindUniqueArgs<ExtArgs>>): Prisma__WatchlistItemClient<$Result.GetResult<Prisma.$WatchlistItemPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one WatchlistItem that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {WatchlistItemFindUniqueOrThrowArgs} args - Arguments to find a WatchlistItem
     * @example
     * // Get one WatchlistItem
     * const watchlistItem = await prisma.watchlistItem.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends WatchlistItemFindUniqueOrThrowArgs>(args: SelectSubset<T, WatchlistItemFindUniqueOrThrowArgs<ExtArgs>>): Prisma__WatchlistItemClient<$Result.GetResult<Prisma.$WatchlistItemPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first WatchlistItem that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WatchlistItemFindFirstArgs} args - Arguments to find a WatchlistItem
     * @example
     * // Get one WatchlistItem
     * const watchlistItem = await prisma.watchlistItem.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends WatchlistItemFindFirstArgs>(args?: SelectSubset<T, WatchlistItemFindFirstArgs<ExtArgs>>): Prisma__WatchlistItemClient<$Result.GetResult<Prisma.$WatchlistItemPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first WatchlistItem that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WatchlistItemFindFirstOrThrowArgs} args - Arguments to find a WatchlistItem
     * @example
     * // Get one WatchlistItem
     * const watchlistItem = await prisma.watchlistItem.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends WatchlistItemFindFirstOrThrowArgs>(args?: SelectSubset<T, WatchlistItemFindFirstOrThrowArgs<ExtArgs>>): Prisma__WatchlistItemClient<$Result.GetResult<Prisma.$WatchlistItemPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more WatchlistItems that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WatchlistItemFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all WatchlistItems
     * const watchlistItems = await prisma.watchlistItem.findMany()
     * 
     * // Get first 10 WatchlistItems
     * const watchlistItems = await prisma.watchlistItem.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const watchlistItemWithIdOnly = await prisma.watchlistItem.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends WatchlistItemFindManyArgs>(args?: SelectSubset<T, WatchlistItemFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WatchlistItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a WatchlistItem.
     * @param {WatchlistItemCreateArgs} args - Arguments to create a WatchlistItem.
     * @example
     * // Create one WatchlistItem
     * const WatchlistItem = await prisma.watchlistItem.create({
     *   data: {
     *     // ... data to create a WatchlistItem
     *   }
     * })
     * 
     */
    create<T extends WatchlistItemCreateArgs>(args: SelectSubset<T, WatchlistItemCreateArgs<ExtArgs>>): Prisma__WatchlistItemClient<$Result.GetResult<Prisma.$WatchlistItemPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many WatchlistItems.
     * @param {WatchlistItemCreateManyArgs} args - Arguments to create many WatchlistItems.
     * @example
     * // Create many WatchlistItems
     * const watchlistItem = await prisma.watchlistItem.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends WatchlistItemCreateManyArgs>(args?: SelectSubset<T, WatchlistItemCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many WatchlistItems and returns the data saved in the database.
     * @param {WatchlistItemCreateManyAndReturnArgs} args - Arguments to create many WatchlistItems.
     * @example
     * // Create many WatchlistItems
     * const watchlistItem = await prisma.watchlistItem.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many WatchlistItems and only return the `id`
     * const watchlistItemWithIdOnly = await prisma.watchlistItem.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends WatchlistItemCreateManyAndReturnArgs>(args?: SelectSubset<T, WatchlistItemCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WatchlistItemPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a WatchlistItem.
     * @param {WatchlistItemDeleteArgs} args - Arguments to delete one WatchlistItem.
     * @example
     * // Delete one WatchlistItem
     * const WatchlistItem = await prisma.watchlistItem.delete({
     *   where: {
     *     // ... filter to delete one WatchlistItem
     *   }
     * })
     * 
     */
    delete<T extends WatchlistItemDeleteArgs>(args: SelectSubset<T, WatchlistItemDeleteArgs<ExtArgs>>): Prisma__WatchlistItemClient<$Result.GetResult<Prisma.$WatchlistItemPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one WatchlistItem.
     * @param {WatchlistItemUpdateArgs} args - Arguments to update one WatchlistItem.
     * @example
     * // Update one WatchlistItem
     * const watchlistItem = await prisma.watchlistItem.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends WatchlistItemUpdateArgs>(args: SelectSubset<T, WatchlistItemUpdateArgs<ExtArgs>>): Prisma__WatchlistItemClient<$Result.GetResult<Prisma.$WatchlistItemPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more WatchlistItems.
     * @param {WatchlistItemDeleteManyArgs} args - Arguments to filter WatchlistItems to delete.
     * @example
     * // Delete a few WatchlistItems
     * const { count } = await prisma.watchlistItem.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends WatchlistItemDeleteManyArgs>(args?: SelectSubset<T, WatchlistItemDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more WatchlistItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WatchlistItemUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many WatchlistItems
     * const watchlistItem = await prisma.watchlistItem.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends WatchlistItemUpdateManyArgs>(args: SelectSubset<T, WatchlistItemUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more WatchlistItems and returns the data updated in the database.
     * @param {WatchlistItemUpdateManyAndReturnArgs} args - Arguments to update many WatchlistItems.
     * @example
     * // Update many WatchlistItems
     * const watchlistItem = await prisma.watchlistItem.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more WatchlistItems and only return the `id`
     * const watchlistItemWithIdOnly = await prisma.watchlistItem.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends WatchlistItemUpdateManyAndReturnArgs>(args: SelectSubset<T, WatchlistItemUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WatchlistItemPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one WatchlistItem.
     * @param {WatchlistItemUpsertArgs} args - Arguments to update or create a WatchlistItem.
     * @example
     * // Update or create a WatchlistItem
     * const watchlistItem = await prisma.watchlistItem.upsert({
     *   create: {
     *     // ... data to create a WatchlistItem
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the WatchlistItem we want to update
     *   }
     * })
     */
    upsert<T extends WatchlistItemUpsertArgs>(args: SelectSubset<T, WatchlistItemUpsertArgs<ExtArgs>>): Prisma__WatchlistItemClient<$Result.GetResult<Prisma.$WatchlistItemPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of WatchlistItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WatchlistItemCountArgs} args - Arguments to filter WatchlistItems to count.
     * @example
     * // Count the number of WatchlistItems
     * const count = await prisma.watchlistItem.count({
     *   where: {
     *     // ... the filter for the WatchlistItems we want to count
     *   }
     * })
    **/
    count<T extends WatchlistItemCountArgs>(
      args?: Subset<T, WatchlistItemCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], WatchlistItemCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a WatchlistItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WatchlistItemAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends WatchlistItemAggregateArgs>(args: Subset<T, WatchlistItemAggregateArgs>): Prisma.PrismaPromise<GetWatchlistItemAggregateType<T>>

    /**
     * Group by WatchlistItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WatchlistItemGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends WatchlistItemGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: WatchlistItemGroupByArgs['orderBy'] }
        : { orderBy?: WatchlistItemGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, WatchlistItemGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetWatchlistItemGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the WatchlistItem model
   */
  readonly fields: WatchlistItemFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for WatchlistItem.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__WatchlistItemClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    addedBy<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    watchlist<T extends WatchlistDefaultArgs<ExtArgs> = {}>(args?: Subset<T, WatchlistDefaultArgs<ExtArgs>>): Prisma__WatchlistClient<$Result.GetResult<Prisma.$WatchlistPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the WatchlistItem model
   */
  interface WatchlistItemFieldRefs {
    readonly id: FieldRef<"WatchlistItem", 'String'>
    readonly watchlistId: FieldRef<"WatchlistItem", 'String'>
    readonly tmdbId: FieldRef<"WatchlistItem", 'Int'>
    readonly position: FieldRef<"WatchlistItem", 'Int'>
    readonly status: FieldRef<"WatchlistItem", 'WatchlistItemStatus'>
    readonly note: FieldRef<"WatchlistItem", 'String'>
    readonly title: FieldRef<"WatchlistItem", 'String'>
    readonly creditNames: FieldRef<"WatchlistItem", 'String'>
    readonly year: FieldRef<"WatchlistItem", 'Int'>
    readonly posterPath: FieldRef<"WatchlistItem", 'String'>
    readonly backdropPath: FieldRef<"WatchlistItem", 'String'>
    readonly overview: FieldRef<"WatchlistItem", 'String'>
    readonly watchedAt: FieldRef<"WatchlistItem", 'DateTime'>
    readonly addedById: FieldRef<"WatchlistItem", 'String'>
    readonly createdAt: FieldRef<"WatchlistItem", 'DateTime'>
    readonly updatedAt: FieldRef<"WatchlistItem", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * WatchlistItem findUnique
   */
  export type WatchlistItemFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WatchlistItem
     */
    select?: WatchlistItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WatchlistItem
     */
    omit?: WatchlistItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WatchlistItemInclude<ExtArgs> | null
    /**
     * Filter, which WatchlistItem to fetch.
     */
    where: WatchlistItemWhereUniqueInput
  }

  /**
   * WatchlistItem findUniqueOrThrow
   */
  export type WatchlistItemFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WatchlistItem
     */
    select?: WatchlistItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WatchlistItem
     */
    omit?: WatchlistItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WatchlistItemInclude<ExtArgs> | null
    /**
     * Filter, which WatchlistItem to fetch.
     */
    where: WatchlistItemWhereUniqueInput
  }

  /**
   * WatchlistItem findFirst
   */
  export type WatchlistItemFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WatchlistItem
     */
    select?: WatchlistItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WatchlistItem
     */
    omit?: WatchlistItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WatchlistItemInclude<ExtArgs> | null
    /**
     * Filter, which WatchlistItem to fetch.
     */
    where?: WatchlistItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WatchlistItems to fetch.
     */
    orderBy?: WatchlistItemOrderByWithRelationInput | WatchlistItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for WatchlistItems.
     */
    cursor?: WatchlistItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WatchlistItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WatchlistItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of WatchlistItems.
     */
    distinct?: WatchlistItemScalarFieldEnum | WatchlistItemScalarFieldEnum[]
  }

  /**
   * WatchlistItem findFirstOrThrow
   */
  export type WatchlistItemFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WatchlistItem
     */
    select?: WatchlistItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WatchlistItem
     */
    omit?: WatchlistItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WatchlistItemInclude<ExtArgs> | null
    /**
     * Filter, which WatchlistItem to fetch.
     */
    where?: WatchlistItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WatchlistItems to fetch.
     */
    orderBy?: WatchlistItemOrderByWithRelationInput | WatchlistItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for WatchlistItems.
     */
    cursor?: WatchlistItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WatchlistItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WatchlistItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of WatchlistItems.
     */
    distinct?: WatchlistItemScalarFieldEnum | WatchlistItemScalarFieldEnum[]
  }

  /**
   * WatchlistItem findMany
   */
  export type WatchlistItemFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WatchlistItem
     */
    select?: WatchlistItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WatchlistItem
     */
    omit?: WatchlistItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WatchlistItemInclude<ExtArgs> | null
    /**
     * Filter, which WatchlistItems to fetch.
     */
    where?: WatchlistItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WatchlistItems to fetch.
     */
    orderBy?: WatchlistItemOrderByWithRelationInput | WatchlistItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing WatchlistItems.
     */
    cursor?: WatchlistItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WatchlistItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WatchlistItems.
     */
    skip?: number
    distinct?: WatchlistItemScalarFieldEnum | WatchlistItemScalarFieldEnum[]
  }

  /**
   * WatchlistItem create
   */
  export type WatchlistItemCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WatchlistItem
     */
    select?: WatchlistItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WatchlistItem
     */
    omit?: WatchlistItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WatchlistItemInclude<ExtArgs> | null
    /**
     * The data needed to create a WatchlistItem.
     */
    data: XOR<WatchlistItemCreateInput, WatchlistItemUncheckedCreateInput>
  }

  /**
   * WatchlistItem createMany
   */
  export type WatchlistItemCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many WatchlistItems.
     */
    data: WatchlistItemCreateManyInput | WatchlistItemCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * WatchlistItem createManyAndReturn
   */
  export type WatchlistItemCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WatchlistItem
     */
    select?: WatchlistItemSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the WatchlistItem
     */
    omit?: WatchlistItemOmit<ExtArgs> | null
    /**
     * The data used to create many WatchlistItems.
     */
    data: WatchlistItemCreateManyInput | WatchlistItemCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WatchlistItemIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * WatchlistItem update
   */
  export type WatchlistItemUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WatchlistItem
     */
    select?: WatchlistItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WatchlistItem
     */
    omit?: WatchlistItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WatchlistItemInclude<ExtArgs> | null
    /**
     * The data needed to update a WatchlistItem.
     */
    data: XOR<WatchlistItemUpdateInput, WatchlistItemUncheckedUpdateInput>
    /**
     * Choose, which WatchlistItem to update.
     */
    where: WatchlistItemWhereUniqueInput
  }

  /**
   * WatchlistItem updateMany
   */
  export type WatchlistItemUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update WatchlistItems.
     */
    data: XOR<WatchlistItemUpdateManyMutationInput, WatchlistItemUncheckedUpdateManyInput>
    /**
     * Filter which WatchlistItems to update
     */
    where?: WatchlistItemWhereInput
    /**
     * Limit how many WatchlistItems to update.
     */
    limit?: number
  }

  /**
   * WatchlistItem updateManyAndReturn
   */
  export type WatchlistItemUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WatchlistItem
     */
    select?: WatchlistItemSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the WatchlistItem
     */
    omit?: WatchlistItemOmit<ExtArgs> | null
    /**
     * The data used to update WatchlistItems.
     */
    data: XOR<WatchlistItemUpdateManyMutationInput, WatchlistItemUncheckedUpdateManyInput>
    /**
     * Filter which WatchlistItems to update
     */
    where?: WatchlistItemWhereInput
    /**
     * Limit how many WatchlistItems to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WatchlistItemIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * WatchlistItem upsert
   */
  export type WatchlistItemUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WatchlistItem
     */
    select?: WatchlistItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WatchlistItem
     */
    omit?: WatchlistItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WatchlistItemInclude<ExtArgs> | null
    /**
     * The filter to search for the WatchlistItem to update in case it exists.
     */
    where: WatchlistItemWhereUniqueInput
    /**
     * In case the WatchlistItem found by the `where` argument doesn't exist, create a new WatchlistItem with this data.
     */
    create: XOR<WatchlistItemCreateInput, WatchlistItemUncheckedCreateInput>
    /**
     * In case the WatchlistItem was found with the provided `where` argument, update it with this data.
     */
    update: XOR<WatchlistItemUpdateInput, WatchlistItemUncheckedUpdateInput>
  }

  /**
   * WatchlistItem delete
   */
  export type WatchlistItemDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WatchlistItem
     */
    select?: WatchlistItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WatchlistItem
     */
    omit?: WatchlistItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WatchlistItemInclude<ExtArgs> | null
    /**
     * Filter which WatchlistItem to delete.
     */
    where: WatchlistItemWhereUniqueInput
  }

  /**
   * WatchlistItem deleteMany
   */
  export type WatchlistItemDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which WatchlistItems to delete
     */
    where?: WatchlistItemWhereInput
    /**
     * Limit how many WatchlistItems to delete.
     */
    limit?: number
  }

  /**
   * WatchlistItem without action
   */
  export type WatchlistItemDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WatchlistItem
     */
    select?: WatchlistItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WatchlistItem
     */
    omit?: WatchlistItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WatchlistItemInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const AccountScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    type: 'type',
    provider: 'provider',
    providerAccountId: 'providerAccountId',
    refresh_token: 'refresh_token',
    access_token: 'access_token',
    expires_at: 'expires_at',
    token_type: 'token_type',
    scope: 'scope',
    id_token: 'id_token',
    session_state: 'session_state',
    refresh_token_expires_in: 'refresh_token_expires_in'
  };

  export type AccountScalarFieldEnum = (typeof AccountScalarFieldEnum)[keyof typeof AccountScalarFieldEnum]


  export const SessionScalarFieldEnum: {
    id: 'id',
    sessionToken: 'sessionToken',
    userId: 'userId',
    expires: 'expires'
  };

  export type SessionScalarFieldEnum = (typeof SessionScalarFieldEnum)[keyof typeof SessionScalarFieldEnum]


  export const UserScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    emailVerified: 'emailVerified',
    image: 'image'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const VerificationTokenScalarFieldEnum: {
    identifier: 'identifier',
    token: 'token',
    expires: 'expires'
  };

  export type VerificationTokenScalarFieldEnum = (typeof VerificationTokenScalarFieldEnum)[keyof typeof VerificationTokenScalarFieldEnum]


  export const UserFeatureScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    featureKey: 'featureKey',
    enabledAt: 'enabledAt',
    lastVisitedAt: 'lastVisitedAt',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserFeatureScalarFieldEnum = (typeof UserFeatureScalarFieldEnum)[keyof typeof UserFeatureScalarFieldEnum]


  export const FeatureInstanceScalarFieldEnum: {
    id: 'id',
    featureKey: 'featureKey',
    ownerId: 'ownerId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type FeatureInstanceScalarFieldEnum = (typeof FeatureInstanceScalarFieldEnum)[keyof typeof FeatureInstanceScalarFieldEnum]


  export const FeatureMembershipScalarFieldEnum: {
    id: 'id',
    featureInstanceId: 'featureInstanceId',
    userId: 'userId',
    role: 'role',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type FeatureMembershipScalarFieldEnum = (typeof FeatureMembershipScalarFieldEnum)[keyof typeof FeatureMembershipScalarFieldEnum]


  export const FeatureInviteScalarFieldEnum: {
    id: 'id',
    featureInstanceId: 'featureInstanceId',
    featureKey: 'featureKey',
    inviterId: 'inviterId',
    email: 'email',
    tokenHash: 'tokenHash',
    expiresAt: 'expiresAt',
    acceptedAt: 'acceptedAt',
    revokedAt: 'revokedAt',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type FeatureInviteScalarFieldEnum = (typeof FeatureInviteScalarFieldEnum)[keyof typeof FeatureInviteScalarFieldEnum]


  export const WatchlistScalarFieldEnum: {
    id: 'id',
    featureInstanceId: 'featureInstanceId',
    name: 'name',
    description: 'description',
    mediaType: 'mediaType',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type WatchlistScalarFieldEnum = (typeof WatchlistScalarFieldEnum)[keyof typeof WatchlistScalarFieldEnum]


  export const WatchlistItemScalarFieldEnum: {
    id: 'id',
    watchlistId: 'watchlistId',
    tmdbId: 'tmdbId',
    position: 'position',
    status: 'status',
    note: 'note',
    title: 'title',
    creditNames: 'creditNames',
    year: 'year',
    posterPath: 'posterPath',
    backdropPath: 'backdropPath',
    overview: 'overview',
    watchedAt: 'watchedAt',
    addedById: 'addedById',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type WatchlistItemScalarFieldEnum = (typeof WatchlistItemScalarFieldEnum)[keyof typeof WatchlistItemScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'FeatureKey'
   */
  export type EnumFeatureKeyFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'FeatureKey'>
    


  /**
   * Reference to a field of type 'FeatureKey[]'
   */
  export type ListEnumFeatureKeyFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'FeatureKey[]'>
    


  /**
   * Reference to a field of type 'FeatureMembershipRole'
   */
  export type EnumFeatureMembershipRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'FeatureMembershipRole'>
    


  /**
   * Reference to a field of type 'FeatureMembershipRole[]'
   */
  export type ListEnumFeatureMembershipRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'FeatureMembershipRole[]'>
    


  /**
   * Reference to a field of type 'WatchlistMediaType'
   */
  export type EnumWatchlistMediaTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'WatchlistMediaType'>
    


  /**
   * Reference to a field of type 'WatchlistMediaType[]'
   */
  export type ListEnumWatchlistMediaTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'WatchlistMediaType[]'>
    


  /**
   * Reference to a field of type 'WatchlistItemStatus'
   */
  export type EnumWatchlistItemStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'WatchlistItemStatus'>
    


  /**
   * Reference to a field of type 'WatchlistItemStatus[]'
   */
  export type ListEnumWatchlistItemStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'WatchlistItemStatus[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type AccountWhereInput = {
    AND?: AccountWhereInput | AccountWhereInput[]
    OR?: AccountWhereInput[]
    NOT?: AccountWhereInput | AccountWhereInput[]
    id?: StringFilter<"Account"> | string
    userId?: StringFilter<"Account"> | string
    type?: StringFilter<"Account"> | string
    provider?: StringFilter<"Account"> | string
    providerAccountId?: StringFilter<"Account"> | string
    refresh_token?: StringNullableFilter<"Account"> | string | null
    access_token?: StringNullableFilter<"Account"> | string | null
    expires_at?: IntNullableFilter<"Account"> | number | null
    token_type?: StringNullableFilter<"Account"> | string | null
    scope?: StringNullableFilter<"Account"> | string | null
    id_token?: StringNullableFilter<"Account"> | string | null
    session_state?: StringNullableFilter<"Account"> | string | null
    refresh_token_expires_in?: IntNullableFilter<"Account"> | number | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type AccountOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    provider?: SortOrder
    providerAccountId?: SortOrder
    refresh_token?: SortOrderInput | SortOrder
    access_token?: SortOrderInput | SortOrder
    expires_at?: SortOrderInput | SortOrder
    token_type?: SortOrderInput | SortOrder
    scope?: SortOrderInput | SortOrder
    id_token?: SortOrderInput | SortOrder
    session_state?: SortOrderInput | SortOrder
    refresh_token_expires_in?: SortOrderInput | SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type AccountWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    provider_providerAccountId?: AccountProviderProviderAccountIdCompoundUniqueInput
    AND?: AccountWhereInput | AccountWhereInput[]
    OR?: AccountWhereInput[]
    NOT?: AccountWhereInput | AccountWhereInput[]
    userId?: StringFilter<"Account"> | string
    type?: StringFilter<"Account"> | string
    provider?: StringFilter<"Account"> | string
    providerAccountId?: StringFilter<"Account"> | string
    refresh_token?: StringNullableFilter<"Account"> | string | null
    access_token?: StringNullableFilter<"Account"> | string | null
    expires_at?: IntNullableFilter<"Account"> | number | null
    token_type?: StringNullableFilter<"Account"> | string | null
    scope?: StringNullableFilter<"Account"> | string | null
    id_token?: StringNullableFilter<"Account"> | string | null
    session_state?: StringNullableFilter<"Account"> | string | null
    refresh_token_expires_in?: IntNullableFilter<"Account"> | number | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "provider_providerAccountId">

  export type AccountOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    provider?: SortOrder
    providerAccountId?: SortOrder
    refresh_token?: SortOrderInput | SortOrder
    access_token?: SortOrderInput | SortOrder
    expires_at?: SortOrderInput | SortOrder
    token_type?: SortOrderInput | SortOrder
    scope?: SortOrderInput | SortOrder
    id_token?: SortOrderInput | SortOrder
    session_state?: SortOrderInput | SortOrder
    refresh_token_expires_in?: SortOrderInput | SortOrder
    _count?: AccountCountOrderByAggregateInput
    _avg?: AccountAvgOrderByAggregateInput
    _max?: AccountMaxOrderByAggregateInput
    _min?: AccountMinOrderByAggregateInput
    _sum?: AccountSumOrderByAggregateInput
  }

  export type AccountScalarWhereWithAggregatesInput = {
    AND?: AccountScalarWhereWithAggregatesInput | AccountScalarWhereWithAggregatesInput[]
    OR?: AccountScalarWhereWithAggregatesInput[]
    NOT?: AccountScalarWhereWithAggregatesInput | AccountScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Account"> | string
    userId?: StringWithAggregatesFilter<"Account"> | string
    type?: StringWithAggregatesFilter<"Account"> | string
    provider?: StringWithAggregatesFilter<"Account"> | string
    providerAccountId?: StringWithAggregatesFilter<"Account"> | string
    refresh_token?: StringNullableWithAggregatesFilter<"Account"> | string | null
    access_token?: StringNullableWithAggregatesFilter<"Account"> | string | null
    expires_at?: IntNullableWithAggregatesFilter<"Account"> | number | null
    token_type?: StringNullableWithAggregatesFilter<"Account"> | string | null
    scope?: StringNullableWithAggregatesFilter<"Account"> | string | null
    id_token?: StringNullableWithAggregatesFilter<"Account"> | string | null
    session_state?: StringNullableWithAggregatesFilter<"Account"> | string | null
    refresh_token_expires_in?: IntNullableWithAggregatesFilter<"Account"> | number | null
  }

  export type SessionWhereInput = {
    AND?: SessionWhereInput | SessionWhereInput[]
    OR?: SessionWhereInput[]
    NOT?: SessionWhereInput | SessionWhereInput[]
    id?: StringFilter<"Session"> | string
    sessionToken?: StringFilter<"Session"> | string
    userId?: StringFilter<"Session"> | string
    expires?: DateTimeFilter<"Session"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type SessionOrderByWithRelationInput = {
    id?: SortOrder
    sessionToken?: SortOrder
    userId?: SortOrder
    expires?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type SessionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    sessionToken?: string
    AND?: SessionWhereInput | SessionWhereInput[]
    OR?: SessionWhereInput[]
    NOT?: SessionWhereInput | SessionWhereInput[]
    userId?: StringFilter<"Session"> | string
    expires?: DateTimeFilter<"Session"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "sessionToken">

  export type SessionOrderByWithAggregationInput = {
    id?: SortOrder
    sessionToken?: SortOrder
    userId?: SortOrder
    expires?: SortOrder
    _count?: SessionCountOrderByAggregateInput
    _max?: SessionMaxOrderByAggregateInput
    _min?: SessionMinOrderByAggregateInput
  }

  export type SessionScalarWhereWithAggregatesInput = {
    AND?: SessionScalarWhereWithAggregatesInput | SessionScalarWhereWithAggregatesInput[]
    OR?: SessionScalarWhereWithAggregatesInput[]
    NOT?: SessionScalarWhereWithAggregatesInput | SessionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Session"> | string
    sessionToken?: StringWithAggregatesFilter<"Session"> | string
    userId?: StringWithAggregatesFilter<"Session"> | string
    expires?: DateTimeWithAggregatesFilter<"Session"> | Date | string
  }

  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    name?: StringNullableFilter<"User"> | string | null
    email?: StringNullableFilter<"User"> | string | null
    emailVerified?: DateTimeNullableFilter<"User"> | Date | string | null
    image?: StringNullableFilter<"User"> | string | null
    accounts?: AccountListRelationFilter
    featureInvites?: FeatureInviteListRelationFilter
    featureMemberships?: FeatureMembershipListRelationFilter
    ownedFeatureInstances?: FeatureInstanceListRelationFilter
    sessions?: SessionListRelationFilter
    userFeatures?: UserFeatureListRelationFilter
    watchlistItems?: WatchlistItemListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    emailVerified?: SortOrderInput | SortOrder
    image?: SortOrderInput | SortOrder
    accounts?: AccountOrderByRelationAggregateInput
    featureInvites?: FeatureInviteOrderByRelationAggregateInput
    featureMemberships?: FeatureMembershipOrderByRelationAggregateInput
    ownedFeatureInstances?: FeatureInstanceOrderByRelationAggregateInput
    sessions?: SessionOrderByRelationAggregateInput
    userFeatures?: UserFeatureOrderByRelationAggregateInput
    watchlistItems?: WatchlistItemOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringNullableFilter<"User"> | string | null
    emailVerified?: DateTimeNullableFilter<"User"> | Date | string | null
    image?: StringNullableFilter<"User"> | string | null
    accounts?: AccountListRelationFilter
    featureInvites?: FeatureInviteListRelationFilter
    featureMemberships?: FeatureMembershipListRelationFilter
    ownedFeatureInstances?: FeatureInstanceListRelationFilter
    sessions?: SessionListRelationFilter
    userFeatures?: UserFeatureListRelationFilter
    watchlistItems?: WatchlistItemListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    emailVerified?: SortOrderInput | SortOrder
    image?: SortOrderInput | SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    name?: StringNullableWithAggregatesFilter<"User"> | string | null
    email?: StringNullableWithAggregatesFilter<"User"> | string | null
    emailVerified?: DateTimeNullableWithAggregatesFilter<"User"> | Date | string | null
    image?: StringNullableWithAggregatesFilter<"User"> | string | null
  }

  export type VerificationTokenWhereInput = {
    AND?: VerificationTokenWhereInput | VerificationTokenWhereInput[]
    OR?: VerificationTokenWhereInput[]
    NOT?: VerificationTokenWhereInput | VerificationTokenWhereInput[]
    identifier?: StringFilter<"VerificationToken"> | string
    token?: StringFilter<"VerificationToken"> | string
    expires?: DateTimeFilter<"VerificationToken"> | Date | string
  }

  export type VerificationTokenOrderByWithRelationInput = {
    identifier?: SortOrder
    token?: SortOrder
    expires?: SortOrder
  }

  export type VerificationTokenWhereUniqueInput = Prisma.AtLeast<{
    token?: string
    identifier_token?: VerificationTokenIdentifierTokenCompoundUniqueInput
    AND?: VerificationTokenWhereInput | VerificationTokenWhereInput[]
    OR?: VerificationTokenWhereInput[]
    NOT?: VerificationTokenWhereInput | VerificationTokenWhereInput[]
    identifier?: StringFilter<"VerificationToken"> | string
    expires?: DateTimeFilter<"VerificationToken"> | Date | string
  }, "token" | "identifier_token">

  export type VerificationTokenOrderByWithAggregationInput = {
    identifier?: SortOrder
    token?: SortOrder
    expires?: SortOrder
    _count?: VerificationTokenCountOrderByAggregateInput
    _max?: VerificationTokenMaxOrderByAggregateInput
    _min?: VerificationTokenMinOrderByAggregateInput
  }

  export type VerificationTokenScalarWhereWithAggregatesInput = {
    AND?: VerificationTokenScalarWhereWithAggregatesInput | VerificationTokenScalarWhereWithAggregatesInput[]
    OR?: VerificationTokenScalarWhereWithAggregatesInput[]
    NOT?: VerificationTokenScalarWhereWithAggregatesInput | VerificationTokenScalarWhereWithAggregatesInput[]
    identifier?: StringWithAggregatesFilter<"VerificationToken"> | string
    token?: StringWithAggregatesFilter<"VerificationToken"> | string
    expires?: DateTimeWithAggregatesFilter<"VerificationToken"> | Date | string
  }

  export type UserFeatureWhereInput = {
    AND?: UserFeatureWhereInput | UserFeatureWhereInput[]
    OR?: UserFeatureWhereInput[]
    NOT?: UserFeatureWhereInput | UserFeatureWhereInput[]
    id?: StringFilter<"UserFeature"> | string
    userId?: StringFilter<"UserFeature"> | string
    featureKey?: EnumFeatureKeyFilter<"UserFeature"> | $Enums.FeatureKey
    enabledAt?: DateTimeFilter<"UserFeature"> | Date | string
    lastVisitedAt?: DateTimeNullableFilter<"UserFeature"> | Date | string | null
    createdAt?: DateTimeFilter<"UserFeature"> | Date | string
    updatedAt?: DateTimeFilter<"UserFeature"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type UserFeatureOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    featureKey?: SortOrder
    enabledAt?: SortOrder
    lastVisitedAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type UserFeatureWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId_featureKey?: UserFeatureUserIdFeatureKeyCompoundUniqueInput
    AND?: UserFeatureWhereInput | UserFeatureWhereInput[]
    OR?: UserFeatureWhereInput[]
    NOT?: UserFeatureWhereInput | UserFeatureWhereInput[]
    userId?: StringFilter<"UserFeature"> | string
    featureKey?: EnumFeatureKeyFilter<"UserFeature"> | $Enums.FeatureKey
    enabledAt?: DateTimeFilter<"UserFeature"> | Date | string
    lastVisitedAt?: DateTimeNullableFilter<"UserFeature"> | Date | string | null
    createdAt?: DateTimeFilter<"UserFeature"> | Date | string
    updatedAt?: DateTimeFilter<"UserFeature"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "userId_featureKey">

  export type UserFeatureOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    featureKey?: SortOrder
    enabledAt?: SortOrder
    lastVisitedAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserFeatureCountOrderByAggregateInput
    _max?: UserFeatureMaxOrderByAggregateInput
    _min?: UserFeatureMinOrderByAggregateInput
  }

  export type UserFeatureScalarWhereWithAggregatesInput = {
    AND?: UserFeatureScalarWhereWithAggregatesInput | UserFeatureScalarWhereWithAggregatesInput[]
    OR?: UserFeatureScalarWhereWithAggregatesInput[]
    NOT?: UserFeatureScalarWhereWithAggregatesInput | UserFeatureScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"UserFeature"> | string
    userId?: StringWithAggregatesFilter<"UserFeature"> | string
    featureKey?: EnumFeatureKeyWithAggregatesFilter<"UserFeature"> | $Enums.FeatureKey
    enabledAt?: DateTimeWithAggregatesFilter<"UserFeature"> | Date | string
    lastVisitedAt?: DateTimeNullableWithAggregatesFilter<"UserFeature"> | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter<"UserFeature"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"UserFeature"> | Date | string
  }

  export type FeatureInstanceWhereInput = {
    AND?: FeatureInstanceWhereInput | FeatureInstanceWhereInput[]
    OR?: FeatureInstanceWhereInput[]
    NOT?: FeatureInstanceWhereInput | FeatureInstanceWhereInput[]
    id?: StringFilter<"FeatureInstance"> | string
    featureKey?: EnumFeatureKeyFilter<"FeatureInstance"> | $Enums.FeatureKey
    ownerId?: StringFilter<"FeatureInstance"> | string
    createdAt?: DateTimeFilter<"FeatureInstance"> | Date | string
    updatedAt?: DateTimeFilter<"FeatureInstance"> | Date | string
    invites?: FeatureInviteListRelationFilter
    memberships?: FeatureMembershipListRelationFilter
    owner?: XOR<UserScalarRelationFilter, UserWhereInput>
    watchlist?: XOR<WatchlistNullableScalarRelationFilter, WatchlistWhereInput> | null
  }

  export type FeatureInstanceOrderByWithRelationInput = {
    id?: SortOrder
    featureKey?: SortOrder
    ownerId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    invites?: FeatureInviteOrderByRelationAggregateInput
    memberships?: FeatureMembershipOrderByRelationAggregateInput
    owner?: UserOrderByWithRelationInput
    watchlist?: WatchlistOrderByWithRelationInput
  }

  export type FeatureInstanceWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: FeatureInstanceWhereInput | FeatureInstanceWhereInput[]
    OR?: FeatureInstanceWhereInput[]
    NOT?: FeatureInstanceWhereInput | FeatureInstanceWhereInput[]
    featureKey?: EnumFeatureKeyFilter<"FeatureInstance"> | $Enums.FeatureKey
    ownerId?: StringFilter<"FeatureInstance"> | string
    createdAt?: DateTimeFilter<"FeatureInstance"> | Date | string
    updatedAt?: DateTimeFilter<"FeatureInstance"> | Date | string
    invites?: FeatureInviteListRelationFilter
    memberships?: FeatureMembershipListRelationFilter
    owner?: XOR<UserScalarRelationFilter, UserWhereInput>
    watchlist?: XOR<WatchlistNullableScalarRelationFilter, WatchlistWhereInput> | null
  }, "id">

  export type FeatureInstanceOrderByWithAggregationInput = {
    id?: SortOrder
    featureKey?: SortOrder
    ownerId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: FeatureInstanceCountOrderByAggregateInput
    _max?: FeatureInstanceMaxOrderByAggregateInput
    _min?: FeatureInstanceMinOrderByAggregateInput
  }

  export type FeatureInstanceScalarWhereWithAggregatesInput = {
    AND?: FeatureInstanceScalarWhereWithAggregatesInput | FeatureInstanceScalarWhereWithAggregatesInput[]
    OR?: FeatureInstanceScalarWhereWithAggregatesInput[]
    NOT?: FeatureInstanceScalarWhereWithAggregatesInput | FeatureInstanceScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"FeatureInstance"> | string
    featureKey?: EnumFeatureKeyWithAggregatesFilter<"FeatureInstance"> | $Enums.FeatureKey
    ownerId?: StringWithAggregatesFilter<"FeatureInstance"> | string
    createdAt?: DateTimeWithAggregatesFilter<"FeatureInstance"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"FeatureInstance"> | Date | string
  }

  export type FeatureMembershipWhereInput = {
    AND?: FeatureMembershipWhereInput | FeatureMembershipWhereInput[]
    OR?: FeatureMembershipWhereInput[]
    NOT?: FeatureMembershipWhereInput | FeatureMembershipWhereInput[]
    id?: StringFilter<"FeatureMembership"> | string
    featureInstanceId?: StringFilter<"FeatureMembership"> | string
    userId?: StringFilter<"FeatureMembership"> | string
    role?: EnumFeatureMembershipRoleFilter<"FeatureMembership"> | $Enums.FeatureMembershipRole
    createdAt?: DateTimeFilter<"FeatureMembership"> | Date | string
    updatedAt?: DateTimeFilter<"FeatureMembership"> | Date | string
    featureInstance?: XOR<FeatureInstanceScalarRelationFilter, FeatureInstanceWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type FeatureMembershipOrderByWithRelationInput = {
    id?: SortOrder
    featureInstanceId?: SortOrder
    userId?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    featureInstance?: FeatureInstanceOrderByWithRelationInput
    user?: UserOrderByWithRelationInput
  }

  export type FeatureMembershipWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    featureInstanceId_userId?: FeatureMembershipFeatureInstanceIdUserIdCompoundUniqueInput
    AND?: FeatureMembershipWhereInput | FeatureMembershipWhereInput[]
    OR?: FeatureMembershipWhereInput[]
    NOT?: FeatureMembershipWhereInput | FeatureMembershipWhereInput[]
    featureInstanceId?: StringFilter<"FeatureMembership"> | string
    userId?: StringFilter<"FeatureMembership"> | string
    role?: EnumFeatureMembershipRoleFilter<"FeatureMembership"> | $Enums.FeatureMembershipRole
    createdAt?: DateTimeFilter<"FeatureMembership"> | Date | string
    updatedAt?: DateTimeFilter<"FeatureMembership"> | Date | string
    featureInstance?: XOR<FeatureInstanceScalarRelationFilter, FeatureInstanceWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "featureInstanceId_userId">

  export type FeatureMembershipOrderByWithAggregationInput = {
    id?: SortOrder
    featureInstanceId?: SortOrder
    userId?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: FeatureMembershipCountOrderByAggregateInput
    _max?: FeatureMembershipMaxOrderByAggregateInput
    _min?: FeatureMembershipMinOrderByAggregateInput
  }

  export type FeatureMembershipScalarWhereWithAggregatesInput = {
    AND?: FeatureMembershipScalarWhereWithAggregatesInput | FeatureMembershipScalarWhereWithAggregatesInput[]
    OR?: FeatureMembershipScalarWhereWithAggregatesInput[]
    NOT?: FeatureMembershipScalarWhereWithAggregatesInput | FeatureMembershipScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"FeatureMembership"> | string
    featureInstanceId?: StringWithAggregatesFilter<"FeatureMembership"> | string
    userId?: StringWithAggregatesFilter<"FeatureMembership"> | string
    role?: EnumFeatureMembershipRoleWithAggregatesFilter<"FeatureMembership"> | $Enums.FeatureMembershipRole
    createdAt?: DateTimeWithAggregatesFilter<"FeatureMembership"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"FeatureMembership"> | Date | string
  }

  export type FeatureInviteWhereInput = {
    AND?: FeatureInviteWhereInput | FeatureInviteWhereInput[]
    OR?: FeatureInviteWhereInput[]
    NOT?: FeatureInviteWhereInput | FeatureInviteWhereInput[]
    id?: StringFilter<"FeatureInvite"> | string
    featureInstanceId?: StringFilter<"FeatureInvite"> | string
    featureKey?: EnumFeatureKeyFilter<"FeatureInvite"> | $Enums.FeatureKey
    inviterId?: StringFilter<"FeatureInvite"> | string
    email?: StringFilter<"FeatureInvite"> | string
    tokenHash?: StringFilter<"FeatureInvite"> | string
    expiresAt?: DateTimeFilter<"FeatureInvite"> | Date | string
    acceptedAt?: DateTimeNullableFilter<"FeatureInvite"> | Date | string | null
    revokedAt?: DateTimeNullableFilter<"FeatureInvite"> | Date | string | null
    createdAt?: DateTimeFilter<"FeatureInvite"> | Date | string
    updatedAt?: DateTimeFilter<"FeatureInvite"> | Date | string
    featureInstance?: XOR<FeatureInstanceScalarRelationFilter, FeatureInstanceWhereInput>
    inviter?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type FeatureInviteOrderByWithRelationInput = {
    id?: SortOrder
    featureInstanceId?: SortOrder
    featureKey?: SortOrder
    inviterId?: SortOrder
    email?: SortOrder
    tokenHash?: SortOrder
    expiresAt?: SortOrder
    acceptedAt?: SortOrderInput | SortOrder
    revokedAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    featureInstance?: FeatureInstanceOrderByWithRelationInput
    inviter?: UserOrderByWithRelationInput
  }

  export type FeatureInviteWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    tokenHash?: string
    AND?: FeatureInviteWhereInput | FeatureInviteWhereInput[]
    OR?: FeatureInviteWhereInput[]
    NOT?: FeatureInviteWhereInput | FeatureInviteWhereInput[]
    featureInstanceId?: StringFilter<"FeatureInvite"> | string
    featureKey?: EnumFeatureKeyFilter<"FeatureInvite"> | $Enums.FeatureKey
    inviterId?: StringFilter<"FeatureInvite"> | string
    email?: StringFilter<"FeatureInvite"> | string
    expiresAt?: DateTimeFilter<"FeatureInvite"> | Date | string
    acceptedAt?: DateTimeNullableFilter<"FeatureInvite"> | Date | string | null
    revokedAt?: DateTimeNullableFilter<"FeatureInvite"> | Date | string | null
    createdAt?: DateTimeFilter<"FeatureInvite"> | Date | string
    updatedAt?: DateTimeFilter<"FeatureInvite"> | Date | string
    featureInstance?: XOR<FeatureInstanceScalarRelationFilter, FeatureInstanceWhereInput>
    inviter?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "tokenHash">

  export type FeatureInviteOrderByWithAggregationInput = {
    id?: SortOrder
    featureInstanceId?: SortOrder
    featureKey?: SortOrder
    inviterId?: SortOrder
    email?: SortOrder
    tokenHash?: SortOrder
    expiresAt?: SortOrder
    acceptedAt?: SortOrderInput | SortOrder
    revokedAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: FeatureInviteCountOrderByAggregateInput
    _max?: FeatureInviteMaxOrderByAggregateInput
    _min?: FeatureInviteMinOrderByAggregateInput
  }

  export type FeatureInviteScalarWhereWithAggregatesInput = {
    AND?: FeatureInviteScalarWhereWithAggregatesInput | FeatureInviteScalarWhereWithAggregatesInput[]
    OR?: FeatureInviteScalarWhereWithAggregatesInput[]
    NOT?: FeatureInviteScalarWhereWithAggregatesInput | FeatureInviteScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"FeatureInvite"> | string
    featureInstanceId?: StringWithAggregatesFilter<"FeatureInvite"> | string
    featureKey?: EnumFeatureKeyWithAggregatesFilter<"FeatureInvite"> | $Enums.FeatureKey
    inviterId?: StringWithAggregatesFilter<"FeatureInvite"> | string
    email?: StringWithAggregatesFilter<"FeatureInvite"> | string
    tokenHash?: StringWithAggregatesFilter<"FeatureInvite"> | string
    expiresAt?: DateTimeWithAggregatesFilter<"FeatureInvite"> | Date | string
    acceptedAt?: DateTimeNullableWithAggregatesFilter<"FeatureInvite"> | Date | string | null
    revokedAt?: DateTimeNullableWithAggregatesFilter<"FeatureInvite"> | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter<"FeatureInvite"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"FeatureInvite"> | Date | string
  }

  export type WatchlistWhereInput = {
    AND?: WatchlistWhereInput | WatchlistWhereInput[]
    OR?: WatchlistWhereInput[]
    NOT?: WatchlistWhereInput | WatchlistWhereInput[]
    id?: StringFilter<"Watchlist"> | string
    featureInstanceId?: StringFilter<"Watchlist"> | string
    name?: StringFilter<"Watchlist"> | string
    description?: StringNullableFilter<"Watchlist"> | string | null
    mediaType?: EnumWatchlistMediaTypeFilter<"Watchlist"> | $Enums.WatchlistMediaType
    createdAt?: DateTimeFilter<"Watchlist"> | Date | string
    updatedAt?: DateTimeFilter<"Watchlist"> | Date | string
    featureInstance?: XOR<FeatureInstanceScalarRelationFilter, FeatureInstanceWhereInput>
    items?: WatchlistItemListRelationFilter
  }

  export type WatchlistOrderByWithRelationInput = {
    id?: SortOrder
    featureInstanceId?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    mediaType?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    featureInstance?: FeatureInstanceOrderByWithRelationInput
    items?: WatchlistItemOrderByRelationAggregateInput
  }

  export type WatchlistWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    featureInstanceId?: string
    AND?: WatchlistWhereInput | WatchlistWhereInput[]
    OR?: WatchlistWhereInput[]
    NOT?: WatchlistWhereInput | WatchlistWhereInput[]
    name?: StringFilter<"Watchlist"> | string
    description?: StringNullableFilter<"Watchlist"> | string | null
    mediaType?: EnumWatchlistMediaTypeFilter<"Watchlist"> | $Enums.WatchlistMediaType
    createdAt?: DateTimeFilter<"Watchlist"> | Date | string
    updatedAt?: DateTimeFilter<"Watchlist"> | Date | string
    featureInstance?: XOR<FeatureInstanceScalarRelationFilter, FeatureInstanceWhereInput>
    items?: WatchlistItemListRelationFilter
  }, "id" | "featureInstanceId">

  export type WatchlistOrderByWithAggregationInput = {
    id?: SortOrder
    featureInstanceId?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    mediaType?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: WatchlistCountOrderByAggregateInput
    _max?: WatchlistMaxOrderByAggregateInput
    _min?: WatchlistMinOrderByAggregateInput
  }

  export type WatchlistScalarWhereWithAggregatesInput = {
    AND?: WatchlistScalarWhereWithAggregatesInput | WatchlistScalarWhereWithAggregatesInput[]
    OR?: WatchlistScalarWhereWithAggregatesInput[]
    NOT?: WatchlistScalarWhereWithAggregatesInput | WatchlistScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Watchlist"> | string
    featureInstanceId?: StringWithAggregatesFilter<"Watchlist"> | string
    name?: StringWithAggregatesFilter<"Watchlist"> | string
    description?: StringNullableWithAggregatesFilter<"Watchlist"> | string | null
    mediaType?: EnumWatchlistMediaTypeWithAggregatesFilter<"Watchlist"> | $Enums.WatchlistMediaType
    createdAt?: DateTimeWithAggregatesFilter<"Watchlist"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Watchlist"> | Date | string
  }

  export type WatchlistItemWhereInput = {
    AND?: WatchlistItemWhereInput | WatchlistItemWhereInput[]
    OR?: WatchlistItemWhereInput[]
    NOT?: WatchlistItemWhereInput | WatchlistItemWhereInput[]
    id?: StringFilter<"WatchlistItem"> | string
    watchlistId?: StringFilter<"WatchlistItem"> | string
    tmdbId?: IntFilter<"WatchlistItem"> | number
    position?: IntFilter<"WatchlistItem"> | number
    status?: EnumWatchlistItemStatusFilter<"WatchlistItem"> | $Enums.WatchlistItemStatus
    note?: StringFilter<"WatchlistItem"> | string
    title?: StringFilter<"WatchlistItem"> | string
    creditNames?: StringNullableFilter<"WatchlistItem"> | string | null
    year?: IntNullableFilter<"WatchlistItem"> | number | null
    posterPath?: StringNullableFilter<"WatchlistItem"> | string | null
    backdropPath?: StringNullableFilter<"WatchlistItem"> | string | null
    overview?: StringNullableFilter<"WatchlistItem"> | string | null
    watchedAt?: DateTimeNullableFilter<"WatchlistItem"> | Date | string | null
    addedById?: StringFilter<"WatchlistItem"> | string
    createdAt?: DateTimeFilter<"WatchlistItem"> | Date | string
    updatedAt?: DateTimeFilter<"WatchlistItem"> | Date | string
    addedBy?: XOR<UserScalarRelationFilter, UserWhereInput>
    watchlist?: XOR<WatchlistScalarRelationFilter, WatchlistWhereInput>
  }

  export type WatchlistItemOrderByWithRelationInput = {
    id?: SortOrder
    watchlistId?: SortOrder
    tmdbId?: SortOrder
    position?: SortOrder
    status?: SortOrder
    note?: SortOrder
    title?: SortOrder
    creditNames?: SortOrderInput | SortOrder
    year?: SortOrderInput | SortOrder
    posterPath?: SortOrderInput | SortOrder
    backdropPath?: SortOrderInput | SortOrder
    overview?: SortOrderInput | SortOrder
    watchedAt?: SortOrderInput | SortOrder
    addedById?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    addedBy?: UserOrderByWithRelationInput
    watchlist?: WatchlistOrderByWithRelationInput
  }

  export type WatchlistItemWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    watchlistId_tmdbId?: WatchlistItemWatchlistIdTmdbIdCompoundUniqueInput
    AND?: WatchlistItemWhereInput | WatchlistItemWhereInput[]
    OR?: WatchlistItemWhereInput[]
    NOT?: WatchlistItemWhereInput | WatchlistItemWhereInput[]
    watchlistId?: StringFilter<"WatchlistItem"> | string
    tmdbId?: IntFilter<"WatchlistItem"> | number
    position?: IntFilter<"WatchlistItem"> | number
    status?: EnumWatchlistItemStatusFilter<"WatchlistItem"> | $Enums.WatchlistItemStatus
    note?: StringFilter<"WatchlistItem"> | string
    title?: StringFilter<"WatchlistItem"> | string
    creditNames?: StringNullableFilter<"WatchlistItem"> | string | null
    year?: IntNullableFilter<"WatchlistItem"> | number | null
    posterPath?: StringNullableFilter<"WatchlistItem"> | string | null
    backdropPath?: StringNullableFilter<"WatchlistItem"> | string | null
    overview?: StringNullableFilter<"WatchlistItem"> | string | null
    watchedAt?: DateTimeNullableFilter<"WatchlistItem"> | Date | string | null
    addedById?: StringFilter<"WatchlistItem"> | string
    createdAt?: DateTimeFilter<"WatchlistItem"> | Date | string
    updatedAt?: DateTimeFilter<"WatchlistItem"> | Date | string
    addedBy?: XOR<UserScalarRelationFilter, UserWhereInput>
    watchlist?: XOR<WatchlistScalarRelationFilter, WatchlistWhereInput>
  }, "id" | "watchlistId_tmdbId">

  export type WatchlistItemOrderByWithAggregationInput = {
    id?: SortOrder
    watchlistId?: SortOrder
    tmdbId?: SortOrder
    position?: SortOrder
    status?: SortOrder
    note?: SortOrder
    title?: SortOrder
    creditNames?: SortOrderInput | SortOrder
    year?: SortOrderInput | SortOrder
    posterPath?: SortOrderInput | SortOrder
    backdropPath?: SortOrderInput | SortOrder
    overview?: SortOrderInput | SortOrder
    watchedAt?: SortOrderInput | SortOrder
    addedById?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: WatchlistItemCountOrderByAggregateInput
    _avg?: WatchlistItemAvgOrderByAggregateInput
    _max?: WatchlistItemMaxOrderByAggregateInput
    _min?: WatchlistItemMinOrderByAggregateInput
    _sum?: WatchlistItemSumOrderByAggregateInput
  }

  export type WatchlistItemScalarWhereWithAggregatesInput = {
    AND?: WatchlistItemScalarWhereWithAggregatesInput | WatchlistItemScalarWhereWithAggregatesInput[]
    OR?: WatchlistItemScalarWhereWithAggregatesInput[]
    NOT?: WatchlistItemScalarWhereWithAggregatesInput | WatchlistItemScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"WatchlistItem"> | string
    watchlistId?: StringWithAggregatesFilter<"WatchlistItem"> | string
    tmdbId?: IntWithAggregatesFilter<"WatchlistItem"> | number
    position?: IntWithAggregatesFilter<"WatchlistItem"> | number
    status?: EnumWatchlistItemStatusWithAggregatesFilter<"WatchlistItem"> | $Enums.WatchlistItemStatus
    note?: StringWithAggregatesFilter<"WatchlistItem"> | string
    title?: StringWithAggregatesFilter<"WatchlistItem"> | string
    creditNames?: StringNullableWithAggregatesFilter<"WatchlistItem"> | string | null
    year?: IntNullableWithAggregatesFilter<"WatchlistItem"> | number | null
    posterPath?: StringNullableWithAggregatesFilter<"WatchlistItem"> | string | null
    backdropPath?: StringNullableWithAggregatesFilter<"WatchlistItem"> | string | null
    overview?: StringNullableWithAggregatesFilter<"WatchlistItem"> | string | null
    watchedAt?: DateTimeNullableWithAggregatesFilter<"WatchlistItem"> | Date | string | null
    addedById?: StringWithAggregatesFilter<"WatchlistItem"> | string
    createdAt?: DateTimeWithAggregatesFilter<"WatchlistItem"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"WatchlistItem"> | Date | string
  }

  export type AccountCreateInput = {
    id?: string
    type: string
    provider: string
    providerAccountId: string
    refresh_token?: string | null
    access_token?: string | null
    expires_at?: number | null
    token_type?: string | null
    scope?: string | null
    id_token?: string | null
    session_state?: string | null
    refresh_token_expires_in?: number | null
    user: UserCreateNestedOneWithoutAccountsInput
  }

  export type AccountUncheckedCreateInput = {
    id?: string
    userId: string
    type: string
    provider: string
    providerAccountId: string
    refresh_token?: string | null
    access_token?: string | null
    expires_at?: number | null
    token_type?: string | null
    scope?: string | null
    id_token?: string | null
    session_state?: string | null
    refresh_token_expires_in?: number | null
  }

  export type AccountUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
    refresh_token_expires_in?: NullableIntFieldUpdateOperationsInput | number | null
    user?: UserUpdateOneRequiredWithoutAccountsNestedInput
  }

  export type AccountUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
    refresh_token_expires_in?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type AccountCreateManyInput = {
    id?: string
    userId: string
    type: string
    provider: string
    providerAccountId: string
    refresh_token?: string | null
    access_token?: string | null
    expires_at?: number | null
    token_type?: string | null
    scope?: string | null
    id_token?: string | null
    session_state?: string | null
    refresh_token_expires_in?: number | null
  }

  export type AccountUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
    refresh_token_expires_in?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type AccountUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
    refresh_token_expires_in?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type SessionCreateInput = {
    id?: string
    sessionToken: string
    expires: Date | string
    user: UserCreateNestedOneWithoutSessionsInput
  }

  export type SessionUncheckedCreateInput = {
    id?: string
    sessionToken: string
    userId: string
    expires: Date | string
  }

  export type SessionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionToken?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutSessionsNestedInput
  }

  export type SessionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionToken?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionCreateManyInput = {
    id?: string
    sessionToken: string
    userId: string
    expires: Date | string
  }

  export type SessionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionToken?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionToken?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCreateInput = {
    id?: string
    name?: string | null
    email?: string | null
    emailVerified?: Date | string | null
    image?: string | null
    accounts?: AccountCreateNestedManyWithoutUserInput
    featureInvites?: FeatureInviteCreateNestedManyWithoutInviterInput
    featureMemberships?: FeatureMembershipCreateNestedManyWithoutUserInput
    ownedFeatureInstances?: FeatureInstanceCreateNestedManyWithoutOwnerInput
    sessions?: SessionCreateNestedManyWithoutUserInput
    userFeatures?: UserFeatureCreateNestedManyWithoutUserInput
    watchlistItems?: WatchlistItemCreateNestedManyWithoutAddedByInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    name?: string | null
    email?: string | null
    emailVerified?: Date | string | null
    image?: string | null
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    featureInvites?: FeatureInviteUncheckedCreateNestedManyWithoutInviterInput
    featureMemberships?: FeatureMembershipUncheckedCreateNestedManyWithoutUserInput
    ownedFeatureInstances?: FeatureInstanceUncheckedCreateNestedManyWithoutOwnerInput
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    userFeatures?: UserFeatureUncheckedCreateNestedManyWithoutUserInput
    watchlistItems?: WatchlistItemUncheckedCreateNestedManyWithoutAddedByInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    accounts?: AccountUpdateManyWithoutUserNestedInput
    featureInvites?: FeatureInviteUpdateManyWithoutInviterNestedInput
    featureMemberships?: FeatureMembershipUpdateManyWithoutUserNestedInput
    ownedFeatureInstances?: FeatureInstanceUpdateManyWithoutOwnerNestedInput
    sessions?: SessionUpdateManyWithoutUserNestedInput
    userFeatures?: UserFeatureUpdateManyWithoutUserNestedInput
    watchlistItems?: WatchlistItemUpdateManyWithoutAddedByNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    featureInvites?: FeatureInviteUncheckedUpdateManyWithoutInviterNestedInput
    featureMemberships?: FeatureMembershipUncheckedUpdateManyWithoutUserNestedInput
    ownedFeatureInstances?: FeatureInstanceUncheckedUpdateManyWithoutOwnerNestedInput
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
    userFeatures?: UserFeatureUncheckedUpdateManyWithoutUserNestedInput
    watchlistItems?: WatchlistItemUncheckedUpdateManyWithoutAddedByNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    name?: string | null
    email?: string | null
    emailVerified?: Date | string | null
    image?: string | null
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type VerificationTokenCreateInput = {
    identifier: string
    token: string
    expires: Date | string
  }

  export type VerificationTokenUncheckedCreateInput = {
    identifier: string
    token: string
    expires: Date | string
  }

  export type VerificationTokenUpdateInput = {
    identifier?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VerificationTokenUncheckedUpdateInput = {
    identifier?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VerificationTokenCreateManyInput = {
    identifier: string
    token: string
    expires: Date | string
  }

  export type VerificationTokenUpdateManyMutationInput = {
    identifier?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VerificationTokenUncheckedUpdateManyInput = {
    identifier?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserFeatureCreateInput = {
    id?: string
    featureKey: $Enums.FeatureKey
    enabledAt?: Date | string
    lastVisitedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutUserFeaturesInput
  }

  export type UserFeatureUncheckedCreateInput = {
    id?: string
    userId: string
    featureKey: $Enums.FeatureKey
    enabledAt?: Date | string
    lastVisitedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserFeatureUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    featureKey?: EnumFeatureKeyFieldUpdateOperationsInput | $Enums.FeatureKey
    enabledAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastVisitedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutUserFeaturesNestedInput
  }

  export type UserFeatureUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    featureKey?: EnumFeatureKeyFieldUpdateOperationsInput | $Enums.FeatureKey
    enabledAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastVisitedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserFeatureCreateManyInput = {
    id?: string
    userId: string
    featureKey: $Enums.FeatureKey
    enabledAt?: Date | string
    lastVisitedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserFeatureUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    featureKey?: EnumFeatureKeyFieldUpdateOperationsInput | $Enums.FeatureKey
    enabledAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastVisitedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserFeatureUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    featureKey?: EnumFeatureKeyFieldUpdateOperationsInput | $Enums.FeatureKey
    enabledAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastVisitedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FeatureInstanceCreateInput = {
    id?: string
    featureKey: $Enums.FeatureKey
    createdAt?: Date | string
    updatedAt?: Date | string
    invites?: FeatureInviteCreateNestedManyWithoutFeatureInstanceInput
    memberships?: FeatureMembershipCreateNestedManyWithoutFeatureInstanceInput
    owner: UserCreateNestedOneWithoutOwnedFeatureInstancesInput
    watchlist?: WatchlistCreateNestedOneWithoutFeatureInstanceInput
  }

  export type FeatureInstanceUncheckedCreateInput = {
    id?: string
    featureKey: $Enums.FeatureKey
    ownerId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    invites?: FeatureInviteUncheckedCreateNestedManyWithoutFeatureInstanceInput
    memberships?: FeatureMembershipUncheckedCreateNestedManyWithoutFeatureInstanceInput
    watchlist?: WatchlistUncheckedCreateNestedOneWithoutFeatureInstanceInput
  }

  export type FeatureInstanceUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    featureKey?: EnumFeatureKeyFieldUpdateOperationsInput | $Enums.FeatureKey
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    invites?: FeatureInviteUpdateManyWithoutFeatureInstanceNestedInput
    memberships?: FeatureMembershipUpdateManyWithoutFeatureInstanceNestedInput
    owner?: UserUpdateOneRequiredWithoutOwnedFeatureInstancesNestedInput
    watchlist?: WatchlistUpdateOneWithoutFeatureInstanceNestedInput
  }

  export type FeatureInstanceUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    featureKey?: EnumFeatureKeyFieldUpdateOperationsInput | $Enums.FeatureKey
    ownerId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    invites?: FeatureInviteUncheckedUpdateManyWithoutFeatureInstanceNestedInput
    memberships?: FeatureMembershipUncheckedUpdateManyWithoutFeatureInstanceNestedInput
    watchlist?: WatchlistUncheckedUpdateOneWithoutFeatureInstanceNestedInput
  }

  export type FeatureInstanceCreateManyInput = {
    id?: string
    featureKey: $Enums.FeatureKey
    ownerId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FeatureInstanceUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    featureKey?: EnumFeatureKeyFieldUpdateOperationsInput | $Enums.FeatureKey
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FeatureInstanceUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    featureKey?: EnumFeatureKeyFieldUpdateOperationsInput | $Enums.FeatureKey
    ownerId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FeatureMembershipCreateInput = {
    id?: string
    role?: $Enums.FeatureMembershipRole
    createdAt?: Date | string
    updatedAt?: Date | string
    featureInstance: FeatureInstanceCreateNestedOneWithoutMembershipsInput
    user: UserCreateNestedOneWithoutFeatureMembershipsInput
  }

  export type FeatureMembershipUncheckedCreateInput = {
    id?: string
    featureInstanceId: string
    userId: string
    role?: $Enums.FeatureMembershipRole
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FeatureMembershipUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    role?: EnumFeatureMembershipRoleFieldUpdateOperationsInput | $Enums.FeatureMembershipRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    featureInstance?: FeatureInstanceUpdateOneRequiredWithoutMembershipsNestedInput
    user?: UserUpdateOneRequiredWithoutFeatureMembershipsNestedInput
  }

  export type FeatureMembershipUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    featureInstanceId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    role?: EnumFeatureMembershipRoleFieldUpdateOperationsInput | $Enums.FeatureMembershipRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FeatureMembershipCreateManyInput = {
    id?: string
    featureInstanceId: string
    userId: string
    role?: $Enums.FeatureMembershipRole
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FeatureMembershipUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    role?: EnumFeatureMembershipRoleFieldUpdateOperationsInput | $Enums.FeatureMembershipRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FeatureMembershipUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    featureInstanceId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    role?: EnumFeatureMembershipRoleFieldUpdateOperationsInput | $Enums.FeatureMembershipRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FeatureInviteCreateInput = {
    id?: string
    featureKey: $Enums.FeatureKey
    email: string
    tokenHash: string
    expiresAt: Date | string
    acceptedAt?: Date | string | null
    revokedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    featureInstance: FeatureInstanceCreateNestedOneWithoutInvitesInput
    inviter: UserCreateNestedOneWithoutFeatureInvitesInput
  }

  export type FeatureInviteUncheckedCreateInput = {
    id?: string
    featureInstanceId: string
    featureKey: $Enums.FeatureKey
    inviterId: string
    email: string
    tokenHash: string
    expiresAt: Date | string
    acceptedAt?: Date | string | null
    revokedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FeatureInviteUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    featureKey?: EnumFeatureKeyFieldUpdateOperationsInput | $Enums.FeatureKey
    email?: StringFieldUpdateOperationsInput | string
    tokenHash?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    acceptedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    revokedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    featureInstance?: FeatureInstanceUpdateOneRequiredWithoutInvitesNestedInput
    inviter?: UserUpdateOneRequiredWithoutFeatureInvitesNestedInput
  }

  export type FeatureInviteUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    featureInstanceId?: StringFieldUpdateOperationsInput | string
    featureKey?: EnumFeatureKeyFieldUpdateOperationsInput | $Enums.FeatureKey
    inviterId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    tokenHash?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    acceptedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    revokedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FeatureInviteCreateManyInput = {
    id?: string
    featureInstanceId: string
    featureKey: $Enums.FeatureKey
    inviterId: string
    email: string
    tokenHash: string
    expiresAt: Date | string
    acceptedAt?: Date | string | null
    revokedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FeatureInviteUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    featureKey?: EnumFeatureKeyFieldUpdateOperationsInput | $Enums.FeatureKey
    email?: StringFieldUpdateOperationsInput | string
    tokenHash?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    acceptedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    revokedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FeatureInviteUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    featureInstanceId?: StringFieldUpdateOperationsInput | string
    featureKey?: EnumFeatureKeyFieldUpdateOperationsInput | $Enums.FeatureKey
    inviterId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    tokenHash?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    acceptedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    revokedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WatchlistCreateInput = {
    id?: string
    name: string
    description?: string | null
    mediaType: $Enums.WatchlistMediaType
    createdAt?: Date | string
    updatedAt?: Date | string
    featureInstance: FeatureInstanceCreateNestedOneWithoutWatchlistInput
    items?: WatchlistItemCreateNestedManyWithoutWatchlistInput
  }

  export type WatchlistUncheckedCreateInput = {
    id?: string
    featureInstanceId: string
    name: string
    description?: string | null
    mediaType: $Enums.WatchlistMediaType
    createdAt?: Date | string
    updatedAt?: Date | string
    items?: WatchlistItemUncheckedCreateNestedManyWithoutWatchlistInput
  }

  export type WatchlistUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    mediaType?: EnumWatchlistMediaTypeFieldUpdateOperationsInput | $Enums.WatchlistMediaType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    featureInstance?: FeatureInstanceUpdateOneRequiredWithoutWatchlistNestedInput
    items?: WatchlistItemUpdateManyWithoutWatchlistNestedInput
  }

  export type WatchlistUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    featureInstanceId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    mediaType?: EnumWatchlistMediaTypeFieldUpdateOperationsInput | $Enums.WatchlistMediaType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    items?: WatchlistItemUncheckedUpdateManyWithoutWatchlistNestedInput
  }

  export type WatchlistCreateManyInput = {
    id?: string
    featureInstanceId: string
    name: string
    description?: string | null
    mediaType: $Enums.WatchlistMediaType
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type WatchlistUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    mediaType?: EnumWatchlistMediaTypeFieldUpdateOperationsInput | $Enums.WatchlistMediaType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WatchlistUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    featureInstanceId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    mediaType?: EnumWatchlistMediaTypeFieldUpdateOperationsInput | $Enums.WatchlistMediaType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WatchlistItemCreateInput = {
    id?: string
    tmdbId: number
    position: number
    status?: $Enums.WatchlistItemStatus
    note?: string
    title: string
    creditNames?: string | null
    year?: number | null
    posterPath?: string | null
    backdropPath?: string | null
    overview?: string | null
    watchedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    addedBy: UserCreateNestedOneWithoutWatchlistItemsInput
    watchlist: WatchlistCreateNestedOneWithoutItemsInput
  }

  export type WatchlistItemUncheckedCreateInput = {
    id?: string
    watchlistId: string
    tmdbId: number
    position: number
    status?: $Enums.WatchlistItemStatus
    note?: string
    title: string
    creditNames?: string | null
    year?: number | null
    posterPath?: string | null
    backdropPath?: string | null
    overview?: string | null
    watchedAt?: Date | string | null
    addedById: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type WatchlistItemUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    tmdbId?: IntFieldUpdateOperationsInput | number
    position?: IntFieldUpdateOperationsInput | number
    status?: EnumWatchlistItemStatusFieldUpdateOperationsInput | $Enums.WatchlistItemStatus
    note?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    creditNames?: NullableStringFieldUpdateOperationsInput | string | null
    year?: NullableIntFieldUpdateOperationsInput | number | null
    posterPath?: NullableStringFieldUpdateOperationsInput | string | null
    backdropPath?: NullableStringFieldUpdateOperationsInput | string | null
    overview?: NullableStringFieldUpdateOperationsInput | string | null
    watchedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    addedBy?: UserUpdateOneRequiredWithoutWatchlistItemsNestedInput
    watchlist?: WatchlistUpdateOneRequiredWithoutItemsNestedInput
  }

  export type WatchlistItemUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    watchlistId?: StringFieldUpdateOperationsInput | string
    tmdbId?: IntFieldUpdateOperationsInput | number
    position?: IntFieldUpdateOperationsInput | number
    status?: EnumWatchlistItemStatusFieldUpdateOperationsInput | $Enums.WatchlistItemStatus
    note?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    creditNames?: NullableStringFieldUpdateOperationsInput | string | null
    year?: NullableIntFieldUpdateOperationsInput | number | null
    posterPath?: NullableStringFieldUpdateOperationsInput | string | null
    backdropPath?: NullableStringFieldUpdateOperationsInput | string | null
    overview?: NullableStringFieldUpdateOperationsInput | string | null
    watchedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    addedById?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WatchlistItemCreateManyInput = {
    id?: string
    watchlistId: string
    tmdbId: number
    position: number
    status?: $Enums.WatchlistItemStatus
    note?: string
    title: string
    creditNames?: string | null
    year?: number | null
    posterPath?: string | null
    backdropPath?: string | null
    overview?: string | null
    watchedAt?: Date | string | null
    addedById: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type WatchlistItemUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    tmdbId?: IntFieldUpdateOperationsInput | number
    position?: IntFieldUpdateOperationsInput | number
    status?: EnumWatchlistItemStatusFieldUpdateOperationsInput | $Enums.WatchlistItemStatus
    note?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    creditNames?: NullableStringFieldUpdateOperationsInput | string | null
    year?: NullableIntFieldUpdateOperationsInput | number | null
    posterPath?: NullableStringFieldUpdateOperationsInput | string | null
    backdropPath?: NullableStringFieldUpdateOperationsInput | string | null
    overview?: NullableStringFieldUpdateOperationsInput | string | null
    watchedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WatchlistItemUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    watchlistId?: StringFieldUpdateOperationsInput | string
    tmdbId?: IntFieldUpdateOperationsInput | number
    position?: IntFieldUpdateOperationsInput | number
    status?: EnumWatchlistItemStatusFieldUpdateOperationsInput | $Enums.WatchlistItemStatus
    note?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    creditNames?: NullableStringFieldUpdateOperationsInput | string | null
    year?: NullableIntFieldUpdateOperationsInput | number | null
    posterPath?: NullableStringFieldUpdateOperationsInput | string | null
    backdropPath?: NullableStringFieldUpdateOperationsInput | string | null
    overview?: NullableStringFieldUpdateOperationsInput | string | null
    watchedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    addedById?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type AccountProviderProviderAccountIdCompoundUniqueInput = {
    provider: string
    providerAccountId: string
  }

  export type AccountCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    provider?: SortOrder
    providerAccountId?: SortOrder
    refresh_token?: SortOrder
    access_token?: SortOrder
    expires_at?: SortOrder
    token_type?: SortOrder
    scope?: SortOrder
    id_token?: SortOrder
    session_state?: SortOrder
    refresh_token_expires_in?: SortOrder
  }

  export type AccountAvgOrderByAggregateInput = {
    expires_at?: SortOrder
    refresh_token_expires_in?: SortOrder
  }

  export type AccountMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    provider?: SortOrder
    providerAccountId?: SortOrder
    refresh_token?: SortOrder
    access_token?: SortOrder
    expires_at?: SortOrder
    token_type?: SortOrder
    scope?: SortOrder
    id_token?: SortOrder
    session_state?: SortOrder
    refresh_token_expires_in?: SortOrder
  }

  export type AccountMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    provider?: SortOrder
    providerAccountId?: SortOrder
    refresh_token?: SortOrder
    access_token?: SortOrder
    expires_at?: SortOrder
    token_type?: SortOrder
    scope?: SortOrder
    id_token?: SortOrder
    session_state?: SortOrder
    refresh_token_expires_in?: SortOrder
  }

  export type AccountSumOrderByAggregateInput = {
    expires_at?: SortOrder
    refresh_token_expires_in?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type SessionCountOrderByAggregateInput = {
    id?: SortOrder
    sessionToken?: SortOrder
    userId?: SortOrder
    expires?: SortOrder
  }

  export type SessionMaxOrderByAggregateInput = {
    id?: SortOrder
    sessionToken?: SortOrder
    userId?: SortOrder
    expires?: SortOrder
  }

  export type SessionMinOrderByAggregateInput = {
    id?: SortOrder
    sessionToken?: SortOrder
    userId?: SortOrder
    expires?: SortOrder
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type AccountListRelationFilter = {
    every?: AccountWhereInput
    some?: AccountWhereInput
    none?: AccountWhereInput
  }

  export type FeatureInviteListRelationFilter = {
    every?: FeatureInviteWhereInput
    some?: FeatureInviteWhereInput
    none?: FeatureInviteWhereInput
  }

  export type FeatureMembershipListRelationFilter = {
    every?: FeatureMembershipWhereInput
    some?: FeatureMembershipWhereInput
    none?: FeatureMembershipWhereInput
  }

  export type FeatureInstanceListRelationFilter = {
    every?: FeatureInstanceWhereInput
    some?: FeatureInstanceWhereInput
    none?: FeatureInstanceWhereInput
  }

  export type SessionListRelationFilter = {
    every?: SessionWhereInput
    some?: SessionWhereInput
    none?: SessionWhereInput
  }

  export type UserFeatureListRelationFilter = {
    every?: UserFeatureWhereInput
    some?: UserFeatureWhereInput
    none?: UserFeatureWhereInput
  }

  export type WatchlistItemListRelationFilter = {
    every?: WatchlistItemWhereInput
    some?: WatchlistItemWhereInput
    none?: WatchlistItemWhereInput
  }

  export type AccountOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type FeatureInviteOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type FeatureMembershipOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type FeatureInstanceOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SessionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserFeatureOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type WatchlistItemOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    emailVerified?: SortOrder
    image?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    emailVerified?: SortOrder
    image?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    emailVerified?: SortOrder
    image?: SortOrder
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type VerificationTokenIdentifierTokenCompoundUniqueInput = {
    identifier: string
    token: string
  }

  export type VerificationTokenCountOrderByAggregateInput = {
    identifier?: SortOrder
    token?: SortOrder
    expires?: SortOrder
  }

  export type VerificationTokenMaxOrderByAggregateInput = {
    identifier?: SortOrder
    token?: SortOrder
    expires?: SortOrder
  }

  export type VerificationTokenMinOrderByAggregateInput = {
    identifier?: SortOrder
    token?: SortOrder
    expires?: SortOrder
  }

  export type EnumFeatureKeyFilter<$PrismaModel = never> = {
    equals?: $Enums.FeatureKey | EnumFeatureKeyFieldRefInput<$PrismaModel>
    in?: $Enums.FeatureKey[] | ListEnumFeatureKeyFieldRefInput<$PrismaModel>
    notIn?: $Enums.FeatureKey[] | ListEnumFeatureKeyFieldRefInput<$PrismaModel>
    not?: NestedEnumFeatureKeyFilter<$PrismaModel> | $Enums.FeatureKey
  }

  export type UserFeatureUserIdFeatureKeyCompoundUniqueInput = {
    userId: string
    featureKey: $Enums.FeatureKey
  }

  export type UserFeatureCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    featureKey?: SortOrder
    enabledAt?: SortOrder
    lastVisitedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserFeatureMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    featureKey?: SortOrder
    enabledAt?: SortOrder
    lastVisitedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserFeatureMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    featureKey?: SortOrder
    enabledAt?: SortOrder
    lastVisitedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EnumFeatureKeyWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.FeatureKey | EnumFeatureKeyFieldRefInput<$PrismaModel>
    in?: $Enums.FeatureKey[] | ListEnumFeatureKeyFieldRefInput<$PrismaModel>
    notIn?: $Enums.FeatureKey[] | ListEnumFeatureKeyFieldRefInput<$PrismaModel>
    not?: NestedEnumFeatureKeyWithAggregatesFilter<$PrismaModel> | $Enums.FeatureKey
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumFeatureKeyFilter<$PrismaModel>
    _max?: NestedEnumFeatureKeyFilter<$PrismaModel>
  }

  export type WatchlistNullableScalarRelationFilter = {
    is?: WatchlistWhereInput | null
    isNot?: WatchlistWhereInput | null
  }

  export type FeatureInstanceCountOrderByAggregateInput = {
    id?: SortOrder
    featureKey?: SortOrder
    ownerId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type FeatureInstanceMaxOrderByAggregateInput = {
    id?: SortOrder
    featureKey?: SortOrder
    ownerId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type FeatureInstanceMinOrderByAggregateInput = {
    id?: SortOrder
    featureKey?: SortOrder
    ownerId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EnumFeatureMembershipRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.FeatureMembershipRole | EnumFeatureMembershipRoleFieldRefInput<$PrismaModel>
    in?: $Enums.FeatureMembershipRole[] | ListEnumFeatureMembershipRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.FeatureMembershipRole[] | ListEnumFeatureMembershipRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumFeatureMembershipRoleFilter<$PrismaModel> | $Enums.FeatureMembershipRole
  }

  export type FeatureInstanceScalarRelationFilter = {
    is?: FeatureInstanceWhereInput
    isNot?: FeatureInstanceWhereInput
  }

  export type FeatureMembershipFeatureInstanceIdUserIdCompoundUniqueInput = {
    featureInstanceId: string
    userId: string
  }

  export type FeatureMembershipCountOrderByAggregateInput = {
    id?: SortOrder
    featureInstanceId?: SortOrder
    userId?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type FeatureMembershipMaxOrderByAggregateInput = {
    id?: SortOrder
    featureInstanceId?: SortOrder
    userId?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type FeatureMembershipMinOrderByAggregateInput = {
    id?: SortOrder
    featureInstanceId?: SortOrder
    userId?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EnumFeatureMembershipRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.FeatureMembershipRole | EnumFeatureMembershipRoleFieldRefInput<$PrismaModel>
    in?: $Enums.FeatureMembershipRole[] | ListEnumFeatureMembershipRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.FeatureMembershipRole[] | ListEnumFeatureMembershipRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumFeatureMembershipRoleWithAggregatesFilter<$PrismaModel> | $Enums.FeatureMembershipRole
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumFeatureMembershipRoleFilter<$PrismaModel>
    _max?: NestedEnumFeatureMembershipRoleFilter<$PrismaModel>
  }

  export type FeatureInviteCountOrderByAggregateInput = {
    id?: SortOrder
    featureInstanceId?: SortOrder
    featureKey?: SortOrder
    inviterId?: SortOrder
    email?: SortOrder
    tokenHash?: SortOrder
    expiresAt?: SortOrder
    acceptedAt?: SortOrder
    revokedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type FeatureInviteMaxOrderByAggregateInput = {
    id?: SortOrder
    featureInstanceId?: SortOrder
    featureKey?: SortOrder
    inviterId?: SortOrder
    email?: SortOrder
    tokenHash?: SortOrder
    expiresAt?: SortOrder
    acceptedAt?: SortOrder
    revokedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type FeatureInviteMinOrderByAggregateInput = {
    id?: SortOrder
    featureInstanceId?: SortOrder
    featureKey?: SortOrder
    inviterId?: SortOrder
    email?: SortOrder
    tokenHash?: SortOrder
    expiresAt?: SortOrder
    acceptedAt?: SortOrder
    revokedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EnumWatchlistMediaTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.WatchlistMediaType | EnumWatchlistMediaTypeFieldRefInput<$PrismaModel>
    in?: $Enums.WatchlistMediaType[] | ListEnumWatchlistMediaTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.WatchlistMediaType[] | ListEnumWatchlistMediaTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumWatchlistMediaTypeFilter<$PrismaModel> | $Enums.WatchlistMediaType
  }

  export type WatchlistCountOrderByAggregateInput = {
    id?: SortOrder
    featureInstanceId?: SortOrder
    name?: SortOrder
    description?: SortOrder
    mediaType?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type WatchlistMaxOrderByAggregateInput = {
    id?: SortOrder
    featureInstanceId?: SortOrder
    name?: SortOrder
    description?: SortOrder
    mediaType?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type WatchlistMinOrderByAggregateInput = {
    id?: SortOrder
    featureInstanceId?: SortOrder
    name?: SortOrder
    description?: SortOrder
    mediaType?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EnumWatchlistMediaTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.WatchlistMediaType | EnumWatchlistMediaTypeFieldRefInput<$PrismaModel>
    in?: $Enums.WatchlistMediaType[] | ListEnumWatchlistMediaTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.WatchlistMediaType[] | ListEnumWatchlistMediaTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumWatchlistMediaTypeWithAggregatesFilter<$PrismaModel> | $Enums.WatchlistMediaType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumWatchlistMediaTypeFilter<$PrismaModel>
    _max?: NestedEnumWatchlistMediaTypeFilter<$PrismaModel>
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type EnumWatchlistItemStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.WatchlistItemStatus | EnumWatchlistItemStatusFieldRefInput<$PrismaModel>
    in?: $Enums.WatchlistItemStatus[] | ListEnumWatchlistItemStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.WatchlistItemStatus[] | ListEnumWatchlistItemStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumWatchlistItemStatusFilter<$PrismaModel> | $Enums.WatchlistItemStatus
  }

  export type WatchlistScalarRelationFilter = {
    is?: WatchlistWhereInput
    isNot?: WatchlistWhereInput
  }

  export type WatchlistItemWatchlistIdTmdbIdCompoundUniqueInput = {
    watchlistId: string
    tmdbId: number
  }

  export type WatchlistItemCountOrderByAggregateInput = {
    id?: SortOrder
    watchlistId?: SortOrder
    tmdbId?: SortOrder
    position?: SortOrder
    status?: SortOrder
    note?: SortOrder
    title?: SortOrder
    creditNames?: SortOrder
    year?: SortOrder
    posterPath?: SortOrder
    backdropPath?: SortOrder
    overview?: SortOrder
    watchedAt?: SortOrder
    addedById?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type WatchlistItemAvgOrderByAggregateInput = {
    tmdbId?: SortOrder
    position?: SortOrder
    year?: SortOrder
  }

  export type WatchlistItemMaxOrderByAggregateInput = {
    id?: SortOrder
    watchlistId?: SortOrder
    tmdbId?: SortOrder
    position?: SortOrder
    status?: SortOrder
    note?: SortOrder
    title?: SortOrder
    creditNames?: SortOrder
    year?: SortOrder
    posterPath?: SortOrder
    backdropPath?: SortOrder
    overview?: SortOrder
    watchedAt?: SortOrder
    addedById?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type WatchlistItemMinOrderByAggregateInput = {
    id?: SortOrder
    watchlistId?: SortOrder
    tmdbId?: SortOrder
    position?: SortOrder
    status?: SortOrder
    note?: SortOrder
    title?: SortOrder
    creditNames?: SortOrder
    year?: SortOrder
    posterPath?: SortOrder
    backdropPath?: SortOrder
    overview?: SortOrder
    watchedAt?: SortOrder
    addedById?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type WatchlistItemSumOrderByAggregateInput = {
    tmdbId?: SortOrder
    position?: SortOrder
    year?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type EnumWatchlistItemStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.WatchlistItemStatus | EnumWatchlistItemStatusFieldRefInput<$PrismaModel>
    in?: $Enums.WatchlistItemStatus[] | ListEnumWatchlistItemStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.WatchlistItemStatus[] | ListEnumWatchlistItemStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumWatchlistItemStatusWithAggregatesFilter<$PrismaModel> | $Enums.WatchlistItemStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumWatchlistItemStatusFilter<$PrismaModel>
    _max?: NestedEnumWatchlistItemStatusFilter<$PrismaModel>
  }

  export type UserCreateNestedOneWithoutAccountsInput = {
    create?: XOR<UserCreateWithoutAccountsInput, UserUncheckedCreateWithoutAccountsInput>
    connectOrCreate?: UserCreateOrConnectWithoutAccountsInput
    connect?: UserWhereUniqueInput
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UserUpdateOneRequiredWithoutAccountsNestedInput = {
    create?: XOR<UserCreateWithoutAccountsInput, UserUncheckedCreateWithoutAccountsInput>
    connectOrCreate?: UserCreateOrConnectWithoutAccountsInput
    upsert?: UserUpsertWithoutAccountsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutAccountsInput, UserUpdateWithoutAccountsInput>, UserUncheckedUpdateWithoutAccountsInput>
  }

  export type UserCreateNestedOneWithoutSessionsInput = {
    create?: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSessionsInput
    connect?: UserWhereUniqueInput
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type UserUpdateOneRequiredWithoutSessionsNestedInput = {
    create?: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSessionsInput
    upsert?: UserUpsertWithoutSessionsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutSessionsInput, UserUpdateWithoutSessionsInput>, UserUncheckedUpdateWithoutSessionsInput>
  }

  export type AccountCreateNestedManyWithoutUserInput = {
    create?: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput> | AccountCreateWithoutUserInput[] | AccountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AccountCreateOrConnectWithoutUserInput | AccountCreateOrConnectWithoutUserInput[]
    createMany?: AccountCreateManyUserInputEnvelope
    connect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
  }

  export type FeatureInviteCreateNestedManyWithoutInviterInput = {
    create?: XOR<FeatureInviteCreateWithoutInviterInput, FeatureInviteUncheckedCreateWithoutInviterInput> | FeatureInviteCreateWithoutInviterInput[] | FeatureInviteUncheckedCreateWithoutInviterInput[]
    connectOrCreate?: FeatureInviteCreateOrConnectWithoutInviterInput | FeatureInviteCreateOrConnectWithoutInviterInput[]
    createMany?: FeatureInviteCreateManyInviterInputEnvelope
    connect?: FeatureInviteWhereUniqueInput | FeatureInviteWhereUniqueInput[]
  }

  export type FeatureMembershipCreateNestedManyWithoutUserInput = {
    create?: XOR<FeatureMembershipCreateWithoutUserInput, FeatureMembershipUncheckedCreateWithoutUserInput> | FeatureMembershipCreateWithoutUserInput[] | FeatureMembershipUncheckedCreateWithoutUserInput[]
    connectOrCreate?: FeatureMembershipCreateOrConnectWithoutUserInput | FeatureMembershipCreateOrConnectWithoutUserInput[]
    createMany?: FeatureMembershipCreateManyUserInputEnvelope
    connect?: FeatureMembershipWhereUniqueInput | FeatureMembershipWhereUniqueInput[]
  }

  export type FeatureInstanceCreateNestedManyWithoutOwnerInput = {
    create?: XOR<FeatureInstanceCreateWithoutOwnerInput, FeatureInstanceUncheckedCreateWithoutOwnerInput> | FeatureInstanceCreateWithoutOwnerInput[] | FeatureInstanceUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: FeatureInstanceCreateOrConnectWithoutOwnerInput | FeatureInstanceCreateOrConnectWithoutOwnerInput[]
    createMany?: FeatureInstanceCreateManyOwnerInputEnvelope
    connect?: FeatureInstanceWhereUniqueInput | FeatureInstanceWhereUniqueInput[]
  }

  export type SessionCreateNestedManyWithoutUserInput = {
    create?: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput> | SessionCreateWithoutUserInput[] | SessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutUserInput | SessionCreateOrConnectWithoutUserInput[]
    createMany?: SessionCreateManyUserInputEnvelope
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
  }

  export type UserFeatureCreateNestedManyWithoutUserInput = {
    create?: XOR<UserFeatureCreateWithoutUserInput, UserFeatureUncheckedCreateWithoutUserInput> | UserFeatureCreateWithoutUserInput[] | UserFeatureUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserFeatureCreateOrConnectWithoutUserInput | UserFeatureCreateOrConnectWithoutUserInput[]
    createMany?: UserFeatureCreateManyUserInputEnvelope
    connect?: UserFeatureWhereUniqueInput | UserFeatureWhereUniqueInput[]
  }

  export type WatchlistItemCreateNestedManyWithoutAddedByInput = {
    create?: XOR<WatchlistItemCreateWithoutAddedByInput, WatchlistItemUncheckedCreateWithoutAddedByInput> | WatchlistItemCreateWithoutAddedByInput[] | WatchlistItemUncheckedCreateWithoutAddedByInput[]
    connectOrCreate?: WatchlistItemCreateOrConnectWithoutAddedByInput | WatchlistItemCreateOrConnectWithoutAddedByInput[]
    createMany?: WatchlistItemCreateManyAddedByInputEnvelope
    connect?: WatchlistItemWhereUniqueInput | WatchlistItemWhereUniqueInput[]
  }

  export type AccountUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput> | AccountCreateWithoutUserInput[] | AccountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AccountCreateOrConnectWithoutUserInput | AccountCreateOrConnectWithoutUserInput[]
    createMany?: AccountCreateManyUserInputEnvelope
    connect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
  }

  export type FeatureInviteUncheckedCreateNestedManyWithoutInviterInput = {
    create?: XOR<FeatureInviteCreateWithoutInviterInput, FeatureInviteUncheckedCreateWithoutInviterInput> | FeatureInviteCreateWithoutInviterInput[] | FeatureInviteUncheckedCreateWithoutInviterInput[]
    connectOrCreate?: FeatureInviteCreateOrConnectWithoutInviterInput | FeatureInviteCreateOrConnectWithoutInviterInput[]
    createMany?: FeatureInviteCreateManyInviterInputEnvelope
    connect?: FeatureInviteWhereUniqueInput | FeatureInviteWhereUniqueInput[]
  }

  export type FeatureMembershipUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<FeatureMembershipCreateWithoutUserInput, FeatureMembershipUncheckedCreateWithoutUserInput> | FeatureMembershipCreateWithoutUserInput[] | FeatureMembershipUncheckedCreateWithoutUserInput[]
    connectOrCreate?: FeatureMembershipCreateOrConnectWithoutUserInput | FeatureMembershipCreateOrConnectWithoutUserInput[]
    createMany?: FeatureMembershipCreateManyUserInputEnvelope
    connect?: FeatureMembershipWhereUniqueInput | FeatureMembershipWhereUniqueInput[]
  }

  export type FeatureInstanceUncheckedCreateNestedManyWithoutOwnerInput = {
    create?: XOR<FeatureInstanceCreateWithoutOwnerInput, FeatureInstanceUncheckedCreateWithoutOwnerInput> | FeatureInstanceCreateWithoutOwnerInput[] | FeatureInstanceUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: FeatureInstanceCreateOrConnectWithoutOwnerInput | FeatureInstanceCreateOrConnectWithoutOwnerInput[]
    createMany?: FeatureInstanceCreateManyOwnerInputEnvelope
    connect?: FeatureInstanceWhereUniqueInput | FeatureInstanceWhereUniqueInput[]
  }

  export type SessionUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput> | SessionCreateWithoutUserInput[] | SessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutUserInput | SessionCreateOrConnectWithoutUserInput[]
    createMany?: SessionCreateManyUserInputEnvelope
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
  }

  export type UserFeatureUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<UserFeatureCreateWithoutUserInput, UserFeatureUncheckedCreateWithoutUserInput> | UserFeatureCreateWithoutUserInput[] | UserFeatureUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserFeatureCreateOrConnectWithoutUserInput | UserFeatureCreateOrConnectWithoutUserInput[]
    createMany?: UserFeatureCreateManyUserInputEnvelope
    connect?: UserFeatureWhereUniqueInput | UserFeatureWhereUniqueInput[]
  }

  export type WatchlistItemUncheckedCreateNestedManyWithoutAddedByInput = {
    create?: XOR<WatchlistItemCreateWithoutAddedByInput, WatchlistItemUncheckedCreateWithoutAddedByInput> | WatchlistItemCreateWithoutAddedByInput[] | WatchlistItemUncheckedCreateWithoutAddedByInput[]
    connectOrCreate?: WatchlistItemCreateOrConnectWithoutAddedByInput | WatchlistItemCreateOrConnectWithoutAddedByInput[]
    createMany?: WatchlistItemCreateManyAddedByInputEnvelope
    connect?: WatchlistItemWhereUniqueInput | WatchlistItemWhereUniqueInput[]
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type AccountUpdateManyWithoutUserNestedInput = {
    create?: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput> | AccountCreateWithoutUserInput[] | AccountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AccountCreateOrConnectWithoutUserInput | AccountCreateOrConnectWithoutUserInput[]
    upsert?: AccountUpsertWithWhereUniqueWithoutUserInput | AccountUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: AccountCreateManyUserInputEnvelope
    set?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    disconnect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    delete?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    connect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    update?: AccountUpdateWithWhereUniqueWithoutUserInput | AccountUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: AccountUpdateManyWithWhereWithoutUserInput | AccountUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: AccountScalarWhereInput | AccountScalarWhereInput[]
  }

  export type FeatureInviteUpdateManyWithoutInviterNestedInput = {
    create?: XOR<FeatureInviteCreateWithoutInviterInput, FeatureInviteUncheckedCreateWithoutInviterInput> | FeatureInviteCreateWithoutInviterInput[] | FeatureInviteUncheckedCreateWithoutInviterInput[]
    connectOrCreate?: FeatureInviteCreateOrConnectWithoutInviterInput | FeatureInviteCreateOrConnectWithoutInviterInput[]
    upsert?: FeatureInviteUpsertWithWhereUniqueWithoutInviterInput | FeatureInviteUpsertWithWhereUniqueWithoutInviterInput[]
    createMany?: FeatureInviteCreateManyInviterInputEnvelope
    set?: FeatureInviteWhereUniqueInput | FeatureInviteWhereUniqueInput[]
    disconnect?: FeatureInviteWhereUniqueInput | FeatureInviteWhereUniqueInput[]
    delete?: FeatureInviteWhereUniqueInput | FeatureInviteWhereUniqueInput[]
    connect?: FeatureInviteWhereUniqueInput | FeatureInviteWhereUniqueInput[]
    update?: FeatureInviteUpdateWithWhereUniqueWithoutInviterInput | FeatureInviteUpdateWithWhereUniqueWithoutInviterInput[]
    updateMany?: FeatureInviteUpdateManyWithWhereWithoutInviterInput | FeatureInviteUpdateManyWithWhereWithoutInviterInput[]
    deleteMany?: FeatureInviteScalarWhereInput | FeatureInviteScalarWhereInput[]
  }

  export type FeatureMembershipUpdateManyWithoutUserNestedInput = {
    create?: XOR<FeatureMembershipCreateWithoutUserInput, FeatureMembershipUncheckedCreateWithoutUserInput> | FeatureMembershipCreateWithoutUserInput[] | FeatureMembershipUncheckedCreateWithoutUserInput[]
    connectOrCreate?: FeatureMembershipCreateOrConnectWithoutUserInput | FeatureMembershipCreateOrConnectWithoutUserInput[]
    upsert?: FeatureMembershipUpsertWithWhereUniqueWithoutUserInput | FeatureMembershipUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: FeatureMembershipCreateManyUserInputEnvelope
    set?: FeatureMembershipWhereUniqueInput | FeatureMembershipWhereUniqueInput[]
    disconnect?: FeatureMembershipWhereUniqueInput | FeatureMembershipWhereUniqueInput[]
    delete?: FeatureMembershipWhereUniqueInput | FeatureMembershipWhereUniqueInput[]
    connect?: FeatureMembershipWhereUniqueInput | FeatureMembershipWhereUniqueInput[]
    update?: FeatureMembershipUpdateWithWhereUniqueWithoutUserInput | FeatureMembershipUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: FeatureMembershipUpdateManyWithWhereWithoutUserInput | FeatureMembershipUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: FeatureMembershipScalarWhereInput | FeatureMembershipScalarWhereInput[]
  }

  export type FeatureInstanceUpdateManyWithoutOwnerNestedInput = {
    create?: XOR<FeatureInstanceCreateWithoutOwnerInput, FeatureInstanceUncheckedCreateWithoutOwnerInput> | FeatureInstanceCreateWithoutOwnerInput[] | FeatureInstanceUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: FeatureInstanceCreateOrConnectWithoutOwnerInput | FeatureInstanceCreateOrConnectWithoutOwnerInput[]
    upsert?: FeatureInstanceUpsertWithWhereUniqueWithoutOwnerInput | FeatureInstanceUpsertWithWhereUniqueWithoutOwnerInput[]
    createMany?: FeatureInstanceCreateManyOwnerInputEnvelope
    set?: FeatureInstanceWhereUniqueInput | FeatureInstanceWhereUniqueInput[]
    disconnect?: FeatureInstanceWhereUniqueInput | FeatureInstanceWhereUniqueInput[]
    delete?: FeatureInstanceWhereUniqueInput | FeatureInstanceWhereUniqueInput[]
    connect?: FeatureInstanceWhereUniqueInput | FeatureInstanceWhereUniqueInput[]
    update?: FeatureInstanceUpdateWithWhereUniqueWithoutOwnerInput | FeatureInstanceUpdateWithWhereUniqueWithoutOwnerInput[]
    updateMany?: FeatureInstanceUpdateManyWithWhereWithoutOwnerInput | FeatureInstanceUpdateManyWithWhereWithoutOwnerInput[]
    deleteMany?: FeatureInstanceScalarWhereInput | FeatureInstanceScalarWhereInput[]
  }

  export type SessionUpdateManyWithoutUserNestedInput = {
    create?: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput> | SessionCreateWithoutUserInput[] | SessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutUserInput | SessionCreateOrConnectWithoutUserInput[]
    upsert?: SessionUpsertWithWhereUniqueWithoutUserInput | SessionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: SessionCreateManyUserInputEnvelope
    set?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    disconnect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    delete?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    update?: SessionUpdateWithWhereUniqueWithoutUserInput | SessionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: SessionUpdateManyWithWhereWithoutUserInput | SessionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SessionScalarWhereInput | SessionScalarWhereInput[]
  }

  export type UserFeatureUpdateManyWithoutUserNestedInput = {
    create?: XOR<UserFeatureCreateWithoutUserInput, UserFeatureUncheckedCreateWithoutUserInput> | UserFeatureCreateWithoutUserInput[] | UserFeatureUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserFeatureCreateOrConnectWithoutUserInput | UserFeatureCreateOrConnectWithoutUserInput[]
    upsert?: UserFeatureUpsertWithWhereUniqueWithoutUserInput | UserFeatureUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UserFeatureCreateManyUserInputEnvelope
    set?: UserFeatureWhereUniqueInput | UserFeatureWhereUniqueInput[]
    disconnect?: UserFeatureWhereUniqueInput | UserFeatureWhereUniqueInput[]
    delete?: UserFeatureWhereUniqueInput | UserFeatureWhereUniqueInput[]
    connect?: UserFeatureWhereUniqueInput | UserFeatureWhereUniqueInput[]
    update?: UserFeatureUpdateWithWhereUniqueWithoutUserInput | UserFeatureUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UserFeatureUpdateManyWithWhereWithoutUserInput | UserFeatureUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UserFeatureScalarWhereInput | UserFeatureScalarWhereInput[]
  }

  export type WatchlistItemUpdateManyWithoutAddedByNestedInput = {
    create?: XOR<WatchlistItemCreateWithoutAddedByInput, WatchlistItemUncheckedCreateWithoutAddedByInput> | WatchlistItemCreateWithoutAddedByInput[] | WatchlistItemUncheckedCreateWithoutAddedByInput[]
    connectOrCreate?: WatchlistItemCreateOrConnectWithoutAddedByInput | WatchlistItemCreateOrConnectWithoutAddedByInput[]
    upsert?: WatchlistItemUpsertWithWhereUniqueWithoutAddedByInput | WatchlistItemUpsertWithWhereUniqueWithoutAddedByInput[]
    createMany?: WatchlistItemCreateManyAddedByInputEnvelope
    set?: WatchlistItemWhereUniqueInput | WatchlistItemWhereUniqueInput[]
    disconnect?: WatchlistItemWhereUniqueInput | WatchlistItemWhereUniqueInput[]
    delete?: WatchlistItemWhereUniqueInput | WatchlistItemWhereUniqueInput[]
    connect?: WatchlistItemWhereUniqueInput | WatchlistItemWhereUniqueInput[]
    update?: WatchlistItemUpdateWithWhereUniqueWithoutAddedByInput | WatchlistItemUpdateWithWhereUniqueWithoutAddedByInput[]
    updateMany?: WatchlistItemUpdateManyWithWhereWithoutAddedByInput | WatchlistItemUpdateManyWithWhereWithoutAddedByInput[]
    deleteMany?: WatchlistItemScalarWhereInput | WatchlistItemScalarWhereInput[]
  }

  export type AccountUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput> | AccountCreateWithoutUserInput[] | AccountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AccountCreateOrConnectWithoutUserInput | AccountCreateOrConnectWithoutUserInput[]
    upsert?: AccountUpsertWithWhereUniqueWithoutUserInput | AccountUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: AccountCreateManyUserInputEnvelope
    set?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    disconnect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    delete?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    connect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    update?: AccountUpdateWithWhereUniqueWithoutUserInput | AccountUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: AccountUpdateManyWithWhereWithoutUserInput | AccountUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: AccountScalarWhereInput | AccountScalarWhereInput[]
  }

  export type FeatureInviteUncheckedUpdateManyWithoutInviterNestedInput = {
    create?: XOR<FeatureInviteCreateWithoutInviterInput, FeatureInviteUncheckedCreateWithoutInviterInput> | FeatureInviteCreateWithoutInviterInput[] | FeatureInviteUncheckedCreateWithoutInviterInput[]
    connectOrCreate?: FeatureInviteCreateOrConnectWithoutInviterInput | FeatureInviteCreateOrConnectWithoutInviterInput[]
    upsert?: FeatureInviteUpsertWithWhereUniqueWithoutInviterInput | FeatureInviteUpsertWithWhereUniqueWithoutInviterInput[]
    createMany?: FeatureInviteCreateManyInviterInputEnvelope
    set?: FeatureInviteWhereUniqueInput | FeatureInviteWhereUniqueInput[]
    disconnect?: FeatureInviteWhereUniqueInput | FeatureInviteWhereUniqueInput[]
    delete?: FeatureInviteWhereUniqueInput | FeatureInviteWhereUniqueInput[]
    connect?: FeatureInviteWhereUniqueInput | FeatureInviteWhereUniqueInput[]
    update?: FeatureInviteUpdateWithWhereUniqueWithoutInviterInput | FeatureInviteUpdateWithWhereUniqueWithoutInviterInput[]
    updateMany?: FeatureInviteUpdateManyWithWhereWithoutInviterInput | FeatureInviteUpdateManyWithWhereWithoutInviterInput[]
    deleteMany?: FeatureInviteScalarWhereInput | FeatureInviteScalarWhereInput[]
  }

  export type FeatureMembershipUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<FeatureMembershipCreateWithoutUserInput, FeatureMembershipUncheckedCreateWithoutUserInput> | FeatureMembershipCreateWithoutUserInput[] | FeatureMembershipUncheckedCreateWithoutUserInput[]
    connectOrCreate?: FeatureMembershipCreateOrConnectWithoutUserInput | FeatureMembershipCreateOrConnectWithoutUserInput[]
    upsert?: FeatureMembershipUpsertWithWhereUniqueWithoutUserInput | FeatureMembershipUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: FeatureMembershipCreateManyUserInputEnvelope
    set?: FeatureMembershipWhereUniqueInput | FeatureMembershipWhereUniqueInput[]
    disconnect?: FeatureMembershipWhereUniqueInput | FeatureMembershipWhereUniqueInput[]
    delete?: FeatureMembershipWhereUniqueInput | FeatureMembershipWhereUniqueInput[]
    connect?: FeatureMembershipWhereUniqueInput | FeatureMembershipWhereUniqueInput[]
    update?: FeatureMembershipUpdateWithWhereUniqueWithoutUserInput | FeatureMembershipUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: FeatureMembershipUpdateManyWithWhereWithoutUserInput | FeatureMembershipUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: FeatureMembershipScalarWhereInput | FeatureMembershipScalarWhereInput[]
  }

  export type FeatureInstanceUncheckedUpdateManyWithoutOwnerNestedInput = {
    create?: XOR<FeatureInstanceCreateWithoutOwnerInput, FeatureInstanceUncheckedCreateWithoutOwnerInput> | FeatureInstanceCreateWithoutOwnerInput[] | FeatureInstanceUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: FeatureInstanceCreateOrConnectWithoutOwnerInput | FeatureInstanceCreateOrConnectWithoutOwnerInput[]
    upsert?: FeatureInstanceUpsertWithWhereUniqueWithoutOwnerInput | FeatureInstanceUpsertWithWhereUniqueWithoutOwnerInput[]
    createMany?: FeatureInstanceCreateManyOwnerInputEnvelope
    set?: FeatureInstanceWhereUniqueInput | FeatureInstanceWhereUniqueInput[]
    disconnect?: FeatureInstanceWhereUniqueInput | FeatureInstanceWhereUniqueInput[]
    delete?: FeatureInstanceWhereUniqueInput | FeatureInstanceWhereUniqueInput[]
    connect?: FeatureInstanceWhereUniqueInput | FeatureInstanceWhereUniqueInput[]
    update?: FeatureInstanceUpdateWithWhereUniqueWithoutOwnerInput | FeatureInstanceUpdateWithWhereUniqueWithoutOwnerInput[]
    updateMany?: FeatureInstanceUpdateManyWithWhereWithoutOwnerInput | FeatureInstanceUpdateManyWithWhereWithoutOwnerInput[]
    deleteMany?: FeatureInstanceScalarWhereInput | FeatureInstanceScalarWhereInput[]
  }

  export type SessionUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput> | SessionCreateWithoutUserInput[] | SessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutUserInput | SessionCreateOrConnectWithoutUserInput[]
    upsert?: SessionUpsertWithWhereUniqueWithoutUserInput | SessionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: SessionCreateManyUserInputEnvelope
    set?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    disconnect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    delete?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    update?: SessionUpdateWithWhereUniqueWithoutUserInput | SessionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: SessionUpdateManyWithWhereWithoutUserInput | SessionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SessionScalarWhereInput | SessionScalarWhereInput[]
  }

  export type UserFeatureUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<UserFeatureCreateWithoutUserInput, UserFeatureUncheckedCreateWithoutUserInput> | UserFeatureCreateWithoutUserInput[] | UserFeatureUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserFeatureCreateOrConnectWithoutUserInput | UserFeatureCreateOrConnectWithoutUserInput[]
    upsert?: UserFeatureUpsertWithWhereUniqueWithoutUserInput | UserFeatureUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UserFeatureCreateManyUserInputEnvelope
    set?: UserFeatureWhereUniqueInput | UserFeatureWhereUniqueInput[]
    disconnect?: UserFeatureWhereUniqueInput | UserFeatureWhereUniqueInput[]
    delete?: UserFeatureWhereUniqueInput | UserFeatureWhereUniqueInput[]
    connect?: UserFeatureWhereUniqueInput | UserFeatureWhereUniqueInput[]
    update?: UserFeatureUpdateWithWhereUniqueWithoutUserInput | UserFeatureUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UserFeatureUpdateManyWithWhereWithoutUserInput | UserFeatureUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UserFeatureScalarWhereInput | UserFeatureScalarWhereInput[]
  }

  export type WatchlistItemUncheckedUpdateManyWithoutAddedByNestedInput = {
    create?: XOR<WatchlistItemCreateWithoutAddedByInput, WatchlistItemUncheckedCreateWithoutAddedByInput> | WatchlistItemCreateWithoutAddedByInput[] | WatchlistItemUncheckedCreateWithoutAddedByInput[]
    connectOrCreate?: WatchlistItemCreateOrConnectWithoutAddedByInput | WatchlistItemCreateOrConnectWithoutAddedByInput[]
    upsert?: WatchlistItemUpsertWithWhereUniqueWithoutAddedByInput | WatchlistItemUpsertWithWhereUniqueWithoutAddedByInput[]
    createMany?: WatchlistItemCreateManyAddedByInputEnvelope
    set?: WatchlistItemWhereUniqueInput | WatchlistItemWhereUniqueInput[]
    disconnect?: WatchlistItemWhereUniqueInput | WatchlistItemWhereUniqueInput[]
    delete?: WatchlistItemWhereUniqueInput | WatchlistItemWhereUniqueInput[]
    connect?: WatchlistItemWhereUniqueInput | WatchlistItemWhereUniqueInput[]
    update?: WatchlistItemUpdateWithWhereUniqueWithoutAddedByInput | WatchlistItemUpdateWithWhereUniqueWithoutAddedByInput[]
    updateMany?: WatchlistItemUpdateManyWithWhereWithoutAddedByInput | WatchlistItemUpdateManyWithWhereWithoutAddedByInput[]
    deleteMany?: WatchlistItemScalarWhereInput | WatchlistItemScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutUserFeaturesInput = {
    create?: XOR<UserCreateWithoutUserFeaturesInput, UserUncheckedCreateWithoutUserFeaturesInput>
    connectOrCreate?: UserCreateOrConnectWithoutUserFeaturesInput
    connect?: UserWhereUniqueInput
  }

  export type EnumFeatureKeyFieldUpdateOperationsInput = {
    set?: $Enums.FeatureKey
  }

  export type UserUpdateOneRequiredWithoutUserFeaturesNestedInput = {
    create?: XOR<UserCreateWithoutUserFeaturesInput, UserUncheckedCreateWithoutUserFeaturesInput>
    connectOrCreate?: UserCreateOrConnectWithoutUserFeaturesInput
    upsert?: UserUpsertWithoutUserFeaturesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutUserFeaturesInput, UserUpdateWithoutUserFeaturesInput>, UserUncheckedUpdateWithoutUserFeaturesInput>
  }

  export type FeatureInviteCreateNestedManyWithoutFeatureInstanceInput = {
    create?: XOR<FeatureInviteCreateWithoutFeatureInstanceInput, FeatureInviteUncheckedCreateWithoutFeatureInstanceInput> | FeatureInviteCreateWithoutFeatureInstanceInput[] | FeatureInviteUncheckedCreateWithoutFeatureInstanceInput[]
    connectOrCreate?: FeatureInviteCreateOrConnectWithoutFeatureInstanceInput | FeatureInviteCreateOrConnectWithoutFeatureInstanceInput[]
    createMany?: FeatureInviteCreateManyFeatureInstanceInputEnvelope
    connect?: FeatureInviteWhereUniqueInput | FeatureInviteWhereUniqueInput[]
  }

  export type FeatureMembershipCreateNestedManyWithoutFeatureInstanceInput = {
    create?: XOR<FeatureMembershipCreateWithoutFeatureInstanceInput, FeatureMembershipUncheckedCreateWithoutFeatureInstanceInput> | FeatureMembershipCreateWithoutFeatureInstanceInput[] | FeatureMembershipUncheckedCreateWithoutFeatureInstanceInput[]
    connectOrCreate?: FeatureMembershipCreateOrConnectWithoutFeatureInstanceInput | FeatureMembershipCreateOrConnectWithoutFeatureInstanceInput[]
    createMany?: FeatureMembershipCreateManyFeatureInstanceInputEnvelope
    connect?: FeatureMembershipWhereUniqueInput | FeatureMembershipWhereUniqueInput[]
  }

  export type UserCreateNestedOneWithoutOwnedFeatureInstancesInput = {
    create?: XOR<UserCreateWithoutOwnedFeatureInstancesInput, UserUncheckedCreateWithoutOwnedFeatureInstancesInput>
    connectOrCreate?: UserCreateOrConnectWithoutOwnedFeatureInstancesInput
    connect?: UserWhereUniqueInput
  }

  export type WatchlistCreateNestedOneWithoutFeatureInstanceInput = {
    create?: XOR<WatchlistCreateWithoutFeatureInstanceInput, WatchlistUncheckedCreateWithoutFeatureInstanceInput>
    connectOrCreate?: WatchlistCreateOrConnectWithoutFeatureInstanceInput
    connect?: WatchlistWhereUniqueInput
  }

  export type FeatureInviteUncheckedCreateNestedManyWithoutFeatureInstanceInput = {
    create?: XOR<FeatureInviteCreateWithoutFeatureInstanceInput, FeatureInviteUncheckedCreateWithoutFeatureInstanceInput> | FeatureInviteCreateWithoutFeatureInstanceInput[] | FeatureInviteUncheckedCreateWithoutFeatureInstanceInput[]
    connectOrCreate?: FeatureInviteCreateOrConnectWithoutFeatureInstanceInput | FeatureInviteCreateOrConnectWithoutFeatureInstanceInput[]
    createMany?: FeatureInviteCreateManyFeatureInstanceInputEnvelope
    connect?: FeatureInviteWhereUniqueInput | FeatureInviteWhereUniqueInput[]
  }

  export type FeatureMembershipUncheckedCreateNestedManyWithoutFeatureInstanceInput = {
    create?: XOR<FeatureMembershipCreateWithoutFeatureInstanceInput, FeatureMembershipUncheckedCreateWithoutFeatureInstanceInput> | FeatureMembershipCreateWithoutFeatureInstanceInput[] | FeatureMembershipUncheckedCreateWithoutFeatureInstanceInput[]
    connectOrCreate?: FeatureMembershipCreateOrConnectWithoutFeatureInstanceInput | FeatureMembershipCreateOrConnectWithoutFeatureInstanceInput[]
    createMany?: FeatureMembershipCreateManyFeatureInstanceInputEnvelope
    connect?: FeatureMembershipWhereUniqueInput | FeatureMembershipWhereUniqueInput[]
  }

  export type WatchlistUncheckedCreateNestedOneWithoutFeatureInstanceInput = {
    create?: XOR<WatchlistCreateWithoutFeatureInstanceInput, WatchlistUncheckedCreateWithoutFeatureInstanceInput>
    connectOrCreate?: WatchlistCreateOrConnectWithoutFeatureInstanceInput
    connect?: WatchlistWhereUniqueInput
  }

  export type FeatureInviteUpdateManyWithoutFeatureInstanceNestedInput = {
    create?: XOR<FeatureInviteCreateWithoutFeatureInstanceInput, FeatureInviteUncheckedCreateWithoutFeatureInstanceInput> | FeatureInviteCreateWithoutFeatureInstanceInput[] | FeatureInviteUncheckedCreateWithoutFeatureInstanceInput[]
    connectOrCreate?: FeatureInviteCreateOrConnectWithoutFeatureInstanceInput | FeatureInviteCreateOrConnectWithoutFeatureInstanceInput[]
    upsert?: FeatureInviteUpsertWithWhereUniqueWithoutFeatureInstanceInput | FeatureInviteUpsertWithWhereUniqueWithoutFeatureInstanceInput[]
    createMany?: FeatureInviteCreateManyFeatureInstanceInputEnvelope
    set?: FeatureInviteWhereUniqueInput | FeatureInviteWhereUniqueInput[]
    disconnect?: FeatureInviteWhereUniqueInput | FeatureInviteWhereUniqueInput[]
    delete?: FeatureInviteWhereUniqueInput | FeatureInviteWhereUniqueInput[]
    connect?: FeatureInviteWhereUniqueInput | FeatureInviteWhereUniqueInput[]
    update?: FeatureInviteUpdateWithWhereUniqueWithoutFeatureInstanceInput | FeatureInviteUpdateWithWhereUniqueWithoutFeatureInstanceInput[]
    updateMany?: FeatureInviteUpdateManyWithWhereWithoutFeatureInstanceInput | FeatureInviteUpdateManyWithWhereWithoutFeatureInstanceInput[]
    deleteMany?: FeatureInviteScalarWhereInput | FeatureInviteScalarWhereInput[]
  }

  export type FeatureMembershipUpdateManyWithoutFeatureInstanceNestedInput = {
    create?: XOR<FeatureMembershipCreateWithoutFeatureInstanceInput, FeatureMembershipUncheckedCreateWithoutFeatureInstanceInput> | FeatureMembershipCreateWithoutFeatureInstanceInput[] | FeatureMembershipUncheckedCreateWithoutFeatureInstanceInput[]
    connectOrCreate?: FeatureMembershipCreateOrConnectWithoutFeatureInstanceInput | FeatureMembershipCreateOrConnectWithoutFeatureInstanceInput[]
    upsert?: FeatureMembershipUpsertWithWhereUniqueWithoutFeatureInstanceInput | FeatureMembershipUpsertWithWhereUniqueWithoutFeatureInstanceInput[]
    createMany?: FeatureMembershipCreateManyFeatureInstanceInputEnvelope
    set?: FeatureMembershipWhereUniqueInput | FeatureMembershipWhereUniqueInput[]
    disconnect?: FeatureMembershipWhereUniqueInput | FeatureMembershipWhereUniqueInput[]
    delete?: FeatureMembershipWhereUniqueInput | FeatureMembershipWhereUniqueInput[]
    connect?: FeatureMembershipWhereUniqueInput | FeatureMembershipWhereUniqueInput[]
    update?: FeatureMembershipUpdateWithWhereUniqueWithoutFeatureInstanceInput | FeatureMembershipUpdateWithWhereUniqueWithoutFeatureInstanceInput[]
    updateMany?: FeatureMembershipUpdateManyWithWhereWithoutFeatureInstanceInput | FeatureMembershipUpdateManyWithWhereWithoutFeatureInstanceInput[]
    deleteMany?: FeatureMembershipScalarWhereInput | FeatureMembershipScalarWhereInput[]
  }

  export type UserUpdateOneRequiredWithoutOwnedFeatureInstancesNestedInput = {
    create?: XOR<UserCreateWithoutOwnedFeatureInstancesInput, UserUncheckedCreateWithoutOwnedFeatureInstancesInput>
    connectOrCreate?: UserCreateOrConnectWithoutOwnedFeatureInstancesInput
    upsert?: UserUpsertWithoutOwnedFeatureInstancesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutOwnedFeatureInstancesInput, UserUpdateWithoutOwnedFeatureInstancesInput>, UserUncheckedUpdateWithoutOwnedFeatureInstancesInput>
  }

  export type WatchlistUpdateOneWithoutFeatureInstanceNestedInput = {
    create?: XOR<WatchlistCreateWithoutFeatureInstanceInput, WatchlistUncheckedCreateWithoutFeatureInstanceInput>
    connectOrCreate?: WatchlistCreateOrConnectWithoutFeatureInstanceInput
    upsert?: WatchlistUpsertWithoutFeatureInstanceInput
    disconnect?: WatchlistWhereInput | boolean
    delete?: WatchlistWhereInput | boolean
    connect?: WatchlistWhereUniqueInput
    update?: XOR<XOR<WatchlistUpdateToOneWithWhereWithoutFeatureInstanceInput, WatchlistUpdateWithoutFeatureInstanceInput>, WatchlistUncheckedUpdateWithoutFeatureInstanceInput>
  }

  export type FeatureInviteUncheckedUpdateManyWithoutFeatureInstanceNestedInput = {
    create?: XOR<FeatureInviteCreateWithoutFeatureInstanceInput, FeatureInviteUncheckedCreateWithoutFeatureInstanceInput> | FeatureInviteCreateWithoutFeatureInstanceInput[] | FeatureInviteUncheckedCreateWithoutFeatureInstanceInput[]
    connectOrCreate?: FeatureInviteCreateOrConnectWithoutFeatureInstanceInput | FeatureInviteCreateOrConnectWithoutFeatureInstanceInput[]
    upsert?: FeatureInviteUpsertWithWhereUniqueWithoutFeatureInstanceInput | FeatureInviteUpsertWithWhereUniqueWithoutFeatureInstanceInput[]
    createMany?: FeatureInviteCreateManyFeatureInstanceInputEnvelope
    set?: FeatureInviteWhereUniqueInput | FeatureInviteWhereUniqueInput[]
    disconnect?: FeatureInviteWhereUniqueInput | FeatureInviteWhereUniqueInput[]
    delete?: FeatureInviteWhereUniqueInput | FeatureInviteWhereUniqueInput[]
    connect?: FeatureInviteWhereUniqueInput | FeatureInviteWhereUniqueInput[]
    update?: FeatureInviteUpdateWithWhereUniqueWithoutFeatureInstanceInput | FeatureInviteUpdateWithWhereUniqueWithoutFeatureInstanceInput[]
    updateMany?: FeatureInviteUpdateManyWithWhereWithoutFeatureInstanceInput | FeatureInviteUpdateManyWithWhereWithoutFeatureInstanceInput[]
    deleteMany?: FeatureInviteScalarWhereInput | FeatureInviteScalarWhereInput[]
  }

  export type FeatureMembershipUncheckedUpdateManyWithoutFeatureInstanceNestedInput = {
    create?: XOR<FeatureMembershipCreateWithoutFeatureInstanceInput, FeatureMembershipUncheckedCreateWithoutFeatureInstanceInput> | FeatureMembershipCreateWithoutFeatureInstanceInput[] | FeatureMembershipUncheckedCreateWithoutFeatureInstanceInput[]
    connectOrCreate?: FeatureMembershipCreateOrConnectWithoutFeatureInstanceInput | FeatureMembershipCreateOrConnectWithoutFeatureInstanceInput[]
    upsert?: FeatureMembershipUpsertWithWhereUniqueWithoutFeatureInstanceInput | FeatureMembershipUpsertWithWhereUniqueWithoutFeatureInstanceInput[]
    createMany?: FeatureMembershipCreateManyFeatureInstanceInputEnvelope
    set?: FeatureMembershipWhereUniqueInput | FeatureMembershipWhereUniqueInput[]
    disconnect?: FeatureMembershipWhereUniqueInput | FeatureMembershipWhereUniqueInput[]
    delete?: FeatureMembershipWhereUniqueInput | FeatureMembershipWhereUniqueInput[]
    connect?: FeatureMembershipWhereUniqueInput | FeatureMembershipWhereUniqueInput[]
    update?: FeatureMembershipUpdateWithWhereUniqueWithoutFeatureInstanceInput | FeatureMembershipUpdateWithWhereUniqueWithoutFeatureInstanceInput[]
    updateMany?: FeatureMembershipUpdateManyWithWhereWithoutFeatureInstanceInput | FeatureMembershipUpdateManyWithWhereWithoutFeatureInstanceInput[]
    deleteMany?: FeatureMembershipScalarWhereInput | FeatureMembershipScalarWhereInput[]
  }

  export type WatchlistUncheckedUpdateOneWithoutFeatureInstanceNestedInput = {
    create?: XOR<WatchlistCreateWithoutFeatureInstanceInput, WatchlistUncheckedCreateWithoutFeatureInstanceInput>
    connectOrCreate?: WatchlistCreateOrConnectWithoutFeatureInstanceInput
    upsert?: WatchlistUpsertWithoutFeatureInstanceInput
    disconnect?: WatchlistWhereInput | boolean
    delete?: WatchlistWhereInput | boolean
    connect?: WatchlistWhereUniqueInput
    update?: XOR<XOR<WatchlistUpdateToOneWithWhereWithoutFeatureInstanceInput, WatchlistUpdateWithoutFeatureInstanceInput>, WatchlistUncheckedUpdateWithoutFeatureInstanceInput>
  }

  export type FeatureInstanceCreateNestedOneWithoutMembershipsInput = {
    create?: XOR<FeatureInstanceCreateWithoutMembershipsInput, FeatureInstanceUncheckedCreateWithoutMembershipsInput>
    connectOrCreate?: FeatureInstanceCreateOrConnectWithoutMembershipsInput
    connect?: FeatureInstanceWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutFeatureMembershipsInput = {
    create?: XOR<UserCreateWithoutFeatureMembershipsInput, UserUncheckedCreateWithoutFeatureMembershipsInput>
    connectOrCreate?: UserCreateOrConnectWithoutFeatureMembershipsInput
    connect?: UserWhereUniqueInput
  }

  export type EnumFeatureMembershipRoleFieldUpdateOperationsInput = {
    set?: $Enums.FeatureMembershipRole
  }

  export type FeatureInstanceUpdateOneRequiredWithoutMembershipsNestedInput = {
    create?: XOR<FeatureInstanceCreateWithoutMembershipsInput, FeatureInstanceUncheckedCreateWithoutMembershipsInput>
    connectOrCreate?: FeatureInstanceCreateOrConnectWithoutMembershipsInput
    upsert?: FeatureInstanceUpsertWithoutMembershipsInput
    connect?: FeatureInstanceWhereUniqueInput
    update?: XOR<XOR<FeatureInstanceUpdateToOneWithWhereWithoutMembershipsInput, FeatureInstanceUpdateWithoutMembershipsInput>, FeatureInstanceUncheckedUpdateWithoutMembershipsInput>
  }

  export type UserUpdateOneRequiredWithoutFeatureMembershipsNestedInput = {
    create?: XOR<UserCreateWithoutFeatureMembershipsInput, UserUncheckedCreateWithoutFeatureMembershipsInput>
    connectOrCreate?: UserCreateOrConnectWithoutFeatureMembershipsInput
    upsert?: UserUpsertWithoutFeatureMembershipsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutFeatureMembershipsInput, UserUpdateWithoutFeatureMembershipsInput>, UserUncheckedUpdateWithoutFeatureMembershipsInput>
  }

  export type FeatureInstanceCreateNestedOneWithoutInvitesInput = {
    create?: XOR<FeatureInstanceCreateWithoutInvitesInput, FeatureInstanceUncheckedCreateWithoutInvitesInput>
    connectOrCreate?: FeatureInstanceCreateOrConnectWithoutInvitesInput
    connect?: FeatureInstanceWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutFeatureInvitesInput = {
    create?: XOR<UserCreateWithoutFeatureInvitesInput, UserUncheckedCreateWithoutFeatureInvitesInput>
    connectOrCreate?: UserCreateOrConnectWithoutFeatureInvitesInput
    connect?: UserWhereUniqueInput
  }

  export type FeatureInstanceUpdateOneRequiredWithoutInvitesNestedInput = {
    create?: XOR<FeatureInstanceCreateWithoutInvitesInput, FeatureInstanceUncheckedCreateWithoutInvitesInput>
    connectOrCreate?: FeatureInstanceCreateOrConnectWithoutInvitesInput
    upsert?: FeatureInstanceUpsertWithoutInvitesInput
    connect?: FeatureInstanceWhereUniqueInput
    update?: XOR<XOR<FeatureInstanceUpdateToOneWithWhereWithoutInvitesInput, FeatureInstanceUpdateWithoutInvitesInput>, FeatureInstanceUncheckedUpdateWithoutInvitesInput>
  }

  export type UserUpdateOneRequiredWithoutFeatureInvitesNestedInput = {
    create?: XOR<UserCreateWithoutFeatureInvitesInput, UserUncheckedCreateWithoutFeatureInvitesInput>
    connectOrCreate?: UserCreateOrConnectWithoutFeatureInvitesInput
    upsert?: UserUpsertWithoutFeatureInvitesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutFeatureInvitesInput, UserUpdateWithoutFeatureInvitesInput>, UserUncheckedUpdateWithoutFeatureInvitesInput>
  }

  export type FeatureInstanceCreateNestedOneWithoutWatchlistInput = {
    create?: XOR<FeatureInstanceCreateWithoutWatchlistInput, FeatureInstanceUncheckedCreateWithoutWatchlistInput>
    connectOrCreate?: FeatureInstanceCreateOrConnectWithoutWatchlistInput
    connect?: FeatureInstanceWhereUniqueInput
  }

  export type WatchlistItemCreateNestedManyWithoutWatchlistInput = {
    create?: XOR<WatchlistItemCreateWithoutWatchlistInput, WatchlistItemUncheckedCreateWithoutWatchlistInput> | WatchlistItemCreateWithoutWatchlistInput[] | WatchlistItemUncheckedCreateWithoutWatchlistInput[]
    connectOrCreate?: WatchlistItemCreateOrConnectWithoutWatchlistInput | WatchlistItemCreateOrConnectWithoutWatchlistInput[]
    createMany?: WatchlistItemCreateManyWatchlistInputEnvelope
    connect?: WatchlistItemWhereUniqueInput | WatchlistItemWhereUniqueInput[]
  }

  export type WatchlistItemUncheckedCreateNestedManyWithoutWatchlistInput = {
    create?: XOR<WatchlistItemCreateWithoutWatchlistInput, WatchlistItemUncheckedCreateWithoutWatchlistInput> | WatchlistItemCreateWithoutWatchlistInput[] | WatchlistItemUncheckedCreateWithoutWatchlistInput[]
    connectOrCreate?: WatchlistItemCreateOrConnectWithoutWatchlistInput | WatchlistItemCreateOrConnectWithoutWatchlistInput[]
    createMany?: WatchlistItemCreateManyWatchlistInputEnvelope
    connect?: WatchlistItemWhereUniqueInput | WatchlistItemWhereUniqueInput[]
  }

  export type EnumWatchlistMediaTypeFieldUpdateOperationsInput = {
    set?: $Enums.WatchlistMediaType
  }

  export type FeatureInstanceUpdateOneRequiredWithoutWatchlistNestedInput = {
    create?: XOR<FeatureInstanceCreateWithoutWatchlistInput, FeatureInstanceUncheckedCreateWithoutWatchlistInput>
    connectOrCreate?: FeatureInstanceCreateOrConnectWithoutWatchlistInput
    upsert?: FeatureInstanceUpsertWithoutWatchlistInput
    connect?: FeatureInstanceWhereUniqueInput
    update?: XOR<XOR<FeatureInstanceUpdateToOneWithWhereWithoutWatchlistInput, FeatureInstanceUpdateWithoutWatchlistInput>, FeatureInstanceUncheckedUpdateWithoutWatchlistInput>
  }

  export type WatchlistItemUpdateManyWithoutWatchlistNestedInput = {
    create?: XOR<WatchlistItemCreateWithoutWatchlistInput, WatchlistItemUncheckedCreateWithoutWatchlistInput> | WatchlistItemCreateWithoutWatchlistInput[] | WatchlistItemUncheckedCreateWithoutWatchlistInput[]
    connectOrCreate?: WatchlistItemCreateOrConnectWithoutWatchlistInput | WatchlistItemCreateOrConnectWithoutWatchlistInput[]
    upsert?: WatchlistItemUpsertWithWhereUniqueWithoutWatchlistInput | WatchlistItemUpsertWithWhereUniqueWithoutWatchlistInput[]
    createMany?: WatchlistItemCreateManyWatchlistInputEnvelope
    set?: WatchlistItemWhereUniqueInput | WatchlistItemWhereUniqueInput[]
    disconnect?: WatchlistItemWhereUniqueInput | WatchlistItemWhereUniqueInput[]
    delete?: WatchlistItemWhereUniqueInput | WatchlistItemWhereUniqueInput[]
    connect?: WatchlistItemWhereUniqueInput | WatchlistItemWhereUniqueInput[]
    update?: WatchlistItemUpdateWithWhereUniqueWithoutWatchlistInput | WatchlistItemUpdateWithWhereUniqueWithoutWatchlistInput[]
    updateMany?: WatchlistItemUpdateManyWithWhereWithoutWatchlistInput | WatchlistItemUpdateManyWithWhereWithoutWatchlistInput[]
    deleteMany?: WatchlistItemScalarWhereInput | WatchlistItemScalarWhereInput[]
  }

  export type WatchlistItemUncheckedUpdateManyWithoutWatchlistNestedInput = {
    create?: XOR<WatchlistItemCreateWithoutWatchlistInput, WatchlistItemUncheckedCreateWithoutWatchlistInput> | WatchlistItemCreateWithoutWatchlistInput[] | WatchlistItemUncheckedCreateWithoutWatchlistInput[]
    connectOrCreate?: WatchlistItemCreateOrConnectWithoutWatchlistInput | WatchlistItemCreateOrConnectWithoutWatchlistInput[]
    upsert?: WatchlistItemUpsertWithWhereUniqueWithoutWatchlistInput | WatchlistItemUpsertWithWhereUniqueWithoutWatchlistInput[]
    createMany?: WatchlistItemCreateManyWatchlistInputEnvelope
    set?: WatchlistItemWhereUniqueInput | WatchlistItemWhereUniqueInput[]
    disconnect?: WatchlistItemWhereUniqueInput | WatchlistItemWhereUniqueInput[]
    delete?: WatchlistItemWhereUniqueInput | WatchlistItemWhereUniqueInput[]
    connect?: WatchlistItemWhereUniqueInput | WatchlistItemWhereUniqueInput[]
    update?: WatchlistItemUpdateWithWhereUniqueWithoutWatchlistInput | WatchlistItemUpdateWithWhereUniqueWithoutWatchlistInput[]
    updateMany?: WatchlistItemUpdateManyWithWhereWithoutWatchlistInput | WatchlistItemUpdateManyWithWhereWithoutWatchlistInput[]
    deleteMany?: WatchlistItemScalarWhereInput | WatchlistItemScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutWatchlistItemsInput = {
    create?: XOR<UserCreateWithoutWatchlistItemsInput, UserUncheckedCreateWithoutWatchlistItemsInput>
    connectOrCreate?: UserCreateOrConnectWithoutWatchlistItemsInput
    connect?: UserWhereUniqueInput
  }

  export type WatchlistCreateNestedOneWithoutItemsInput = {
    create?: XOR<WatchlistCreateWithoutItemsInput, WatchlistUncheckedCreateWithoutItemsInput>
    connectOrCreate?: WatchlistCreateOrConnectWithoutItemsInput
    connect?: WatchlistWhereUniqueInput
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type EnumWatchlistItemStatusFieldUpdateOperationsInput = {
    set?: $Enums.WatchlistItemStatus
  }

  export type UserUpdateOneRequiredWithoutWatchlistItemsNestedInput = {
    create?: XOR<UserCreateWithoutWatchlistItemsInput, UserUncheckedCreateWithoutWatchlistItemsInput>
    connectOrCreate?: UserCreateOrConnectWithoutWatchlistItemsInput
    upsert?: UserUpsertWithoutWatchlistItemsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutWatchlistItemsInput, UserUpdateWithoutWatchlistItemsInput>, UserUncheckedUpdateWithoutWatchlistItemsInput>
  }

  export type WatchlistUpdateOneRequiredWithoutItemsNestedInput = {
    create?: XOR<WatchlistCreateWithoutItemsInput, WatchlistUncheckedCreateWithoutItemsInput>
    connectOrCreate?: WatchlistCreateOrConnectWithoutItemsInput
    upsert?: WatchlistUpsertWithoutItemsInput
    connect?: WatchlistWhereUniqueInput
    update?: XOR<XOR<WatchlistUpdateToOneWithWhereWithoutItemsInput, WatchlistUpdateWithoutItemsInput>, WatchlistUncheckedUpdateWithoutItemsInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedEnumFeatureKeyFilter<$PrismaModel = never> = {
    equals?: $Enums.FeatureKey | EnumFeatureKeyFieldRefInput<$PrismaModel>
    in?: $Enums.FeatureKey[] | ListEnumFeatureKeyFieldRefInput<$PrismaModel>
    notIn?: $Enums.FeatureKey[] | ListEnumFeatureKeyFieldRefInput<$PrismaModel>
    not?: NestedEnumFeatureKeyFilter<$PrismaModel> | $Enums.FeatureKey
  }

  export type NestedEnumFeatureKeyWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.FeatureKey | EnumFeatureKeyFieldRefInput<$PrismaModel>
    in?: $Enums.FeatureKey[] | ListEnumFeatureKeyFieldRefInput<$PrismaModel>
    notIn?: $Enums.FeatureKey[] | ListEnumFeatureKeyFieldRefInput<$PrismaModel>
    not?: NestedEnumFeatureKeyWithAggregatesFilter<$PrismaModel> | $Enums.FeatureKey
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumFeatureKeyFilter<$PrismaModel>
    _max?: NestedEnumFeatureKeyFilter<$PrismaModel>
  }

  export type NestedEnumFeatureMembershipRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.FeatureMembershipRole | EnumFeatureMembershipRoleFieldRefInput<$PrismaModel>
    in?: $Enums.FeatureMembershipRole[] | ListEnumFeatureMembershipRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.FeatureMembershipRole[] | ListEnumFeatureMembershipRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumFeatureMembershipRoleFilter<$PrismaModel> | $Enums.FeatureMembershipRole
  }

  export type NestedEnumFeatureMembershipRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.FeatureMembershipRole | EnumFeatureMembershipRoleFieldRefInput<$PrismaModel>
    in?: $Enums.FeatureMembershipRole[] | ListEnumFeatureMembershipRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.FeatureMembershipRole[] | ListEnumFeatureMembershipRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumFeatureMembershipRoleWithAggregatesFilter<$PrismaModel> | $Enums.FeatureMembershipRole
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumFeatureMembershipRoleFilter<$PrismaModel>
    _max?: NestedEnumFeatureMembershipRoleFilter<$PrismaModel>
  }

  export type NestedEnumWatchlistMediaTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.WatchlistMediaType | EnumWatchlistMediaTypeFieldRefInput<$PrismaModel>
    in?: $Enums.WatchlistMediaType[] | ListEnumWatchlistMediaTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.WatchlistMediaType[] | ListEnumWatchlistMediaTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumWatchlistMediaTypeFilter<$PrismaModel> | $Enums.WatchlistMediaType
  }

  export type NestedEnumWatchlistMediaTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.WatchlistMediaType | EnumWatchlistMediaTypeFieldRefInput<$PrismaModel>
    in?: $Enums.WatchlistMediaType[] | ListEnumWatchlistMediaTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.WatchlistMediaType[] | ListEnumWatchlistMediaTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumWatchlistMediaTypeWithAggregatesFilter<$PrismaModel> | $Enums.WatchlistMediaType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumWatchlistMediaTypeFilter<$PrismaModel>
    _max?: NestedEnumWatchlistMediaTypeFilter<$PrismaModel>
  }

  export type NestedEnumWatchlistItemStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.WatchlistItemStatus | EnumWatchlistItemStatusFieldRefInput<$PrismaModel>
    in?: $Enums.WatchlistItemStatus[] | ListEnumWatchlistItemStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.WatchlistItemStatus[] | ListEnumWatchlistItemStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumWatchlistItemStatusFilter<$PrismaModel> | $Enums.WatchlistItemStatus
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedEnumWatchlistItemStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.WatchlistItemStatus | EnumWatchlistItemStatusFieldRefInput<$PrismaModel>
    in?: $Enums.WatchlistItemStatus[] | ListEnumWatchlistItemStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.WatchlistItemStatus[] | ListEnumWatchlistItemStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumWatchlistItemStatusWithAggregatesFilter<$PrismaModel> | $Enums.WatchlistItemStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumWatchlistItemStatusFilter<$PrismaModel>
    _max?: NestedEnumWatchlistItemStatusFilter<$PrismaModel>
  }

  export type UserCreateWithoutAccountsInput = {
    id?: string
    name?: string | null
    email?: string | null
    emailVerified?: Date | string | null
    image?: string | null
    featureInvites?: FeatureInviteCreateNestedManyWithoutInviterInput
    featureMemberships?: FeatureMembershipCreateNestedManyWithoutUserInput
    ownedFeatureInstances?: FeatureInstanceCreateNestedManyWithoutOwnerInput
    sessions?: SessionCreateNestedManyWithoutUserInput
    userFeatures?: UserFeatureCreateNestedManyWithoutUserInput
    watchlistItems?: WatchlistItemCreateNestedManyWithoutAddedByInput
  }

  export type UserUncheckedCreateWithoutAccountsInput = {
    id?: string
    name?: string | null
    email?: string | null
    emailVerified?: Date | string | null
    image?: string | null
    featureInvites?: FeatureInviteUncheckedCreateNestedManyWithoutInviterInput
    featureMemberships?: FeatureMembershipUncheckedCreateNestedManyWithoutUserInput
    ownedFeatureInstances?: FeatureInstanceUncheckedCreateNestedManyWithoutOwnerInput
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    userFeatures?: UserFeatureUncheckedCreateNestedManyWithoutUserInput
    watchlistItems?: WatchlistItemUncheckedCreateNestedManyWithoutAddedByInput
  }

  export type UserCreateOrConnectWithoutAccountsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutAccountsInput, UserUncheckedCreateWithoutAccountsInput>
  }

  export type UserUpsertWithoutAccountsInput = {
    update: XOR<UserUpdateWithoutAccountsInput, UserUncheckedUpdateWithoutAccountsInput>
    create: XOR<UserCreateWithoutAccountsInput, UserUncheckedCreateWithoutAccountsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutAccountsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutAccountsInput, UserUncheckedUpdateWithoutAccountsInput>
  }

  export type UserUpdateWithoutAccountsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    featureInvites?: FeatureInviteUpdateManyWithoutInviterNestedInput
    featureMemberships?: FeatureMembershipUpdateManyWithoutUserNestedInput
    ownedFeatureInstances?: FeatureInstanceUpdateManyWithoutOwnerNestedInput
    sessions?: SessionUpdateManyWithoutUserNestedInput
    userFeatures?: UserFeatureUpdateManyWithoutUserNestedInput
    watchlistItems?: WatchlistItemUpdateManyWithoutAddedByNestedInput
  }

  export type UserUncheckedUpdateWithoutAccountsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    featureInvites?: FeatureInviteUncheckedUpdateManyWithoutInviterNestedInput
    featureMemberships?: FeatureMembershipUncheckedUpdateManyWithoutUserNestedInput
    ownedFeatureInstances?: FeatureInstanceUncheckedUpdateManyWithoutOwnerNestedInput
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
    userFeatures?: UserFeatureUncheckedUpdateManyWithoutUserNestedInput
    watchlistItems?: WatchlistItemUncheckedUpdateManyWithoutAddedByNestedInput
  }

  export type UserCreateWithoutSessionsInput = {
    id?: string
    name?: string | null
    email?: string | null
    emailVerified?: Date | string | null
    image?: string | null
    accounts?: AccountCreateNestedManyWithoutUserInput
    featureInvites?: FeatureInviteCreateNestedManyWithoutInviterInput
    featureMemberships?: FeatureMembershipCreateNestedManyWithoutUserInput
    ownedFeatureInstances?: FeatureInstanceCreateNestedManyWithoutOwnerInput
    userFeatures?: UserFeatureCreateNestedManyWithoutUserInput
    watchlistItems?: WatchlistItemCreateNestedManyWithoutAddedByInput
  }

  export type UserUncheckedCreateWithoutSessionsInput = {
    id?: string
    name?: string | null
    email?: string | null
    emailVerified?: Date | string | null
    image?: string | null
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    featureInvites?: FeatureInviteUncheckedCreateNestedManyWithoutInviterInput
    featureMemberships?: FeatureMembershipUncheckedCreateNestedManyWithoutUserInput
    ownedFeatureInstances?: FeatureInstanceUncheckedCreateNestedManyWithoutOwnerInput
    userFeatures?: UserFeatureUncheckedCreateNestedManyWithoutUserInput
    watchlistItems?: WatchlistItemUncheckedCreateNestedManyWithoutAddedByInput
  }

  export type UserCreateOrConnectWithoutSessionsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
  }

  export type UserUpsertWithoutSessionsInput = {
    update: XOR<UserUpdateWithoutSessionsInput, UserUncheckedUpdateWithoutSessionsInput>
    create: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutSessionsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutSessionsInput, UserUncheckedUpdateWithoutSessionsInput>
  }

  export type UserUpdateWithoutSessionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    accounts?: AccountUpdateManyWithoutUserNestedInput
    featureInvites?: FeatureInviteUpdateManyWithoutInviterNestedInput
    featureMemberships?: FeatureMembershipUpdateManyWithoutUserNestedInput
    ownedFeatureInstances?: FeatureInstanceUpdateManyWithoutOwnerNestedInput
    userFeatures?: UserFeatureUpdateManyWithoutUserNestedInput
    watchlistItems?: WatchlistItemUpdateManyWithoutAddedByNestedInput
  }

  export type UserUncheckedUpdateWithoutSessionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    featureInvites?: FeatureInviteUncheckedUpdateManyWithoutInviterNestedInput
    featureMemberships?: FeatureMembershipUncheckedUpdateManyWithoutUserNestedInput
    ownedFeatureInstances?: FeatureInstanceUncheckedUpdateManyWithoutOwnerNestedInput
    userFeatures?: UserFeatureUncheckedUpdateManyWithoutUserNestedInput
    watchlistItems?: WatchlistItemUncheckedUpdateManyWithoutAddedByNestedInput
  }

  export type AccountCreateWithoutUserInput = {
    id?: string
    type: string
    provider: string
    providerAccountId: string
    refresh_token?: string | null
    access_token?: string | null
    expires_at?: number | null
    token_type?: string | null
    scope?: string | null
    id_token?: string | null
    session_state?: string | null
    refresh_token_expires_in?: number | null
  }

  export type AccountUncheckedCreateWithoutUserInput = {
    id?: string
    type: string
    provider: string
    providerAccountId: string
    refresh_token?: string | null
    access_token?: string | null
    expires_at?: number | null
    token_type?: string | null
    scope?: string | null
    id_token?: string | null
    session_state?: string | null
    refresh_token_expires_in?: number | null
  }

  export type AccountCreateOrConnectWithoutUserInput = {
    where: AccountWhereUniqueInput
    create: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput>
  }

  export type AccountCreateManyUserInputEnvelope = {
    data: AccountCreateManyUserInput | AccountCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type FeatureInviteCreateWithoutInviterInput = {
    id?: string
    featureKey: $Enums.FeatureKey
    email: string
    tokenHash: string
    expiresAt: Date | string
    acceptedAt?: Date | string | null
    revokedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    featureInstance: FeatureInstanceCreateNestedOneWithoutInvitesInput
  }

  export type FeatureInviteUncheckedCreateWithoutInviterInput = {
    id?: string
    featureInstanceId: string
    featureKey: $Enums.FeatureKey
    email: string
    tokenHash: string
    expiresAt: Date | string
    acceptedAt?: Date | string | null
    revokedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FeatureInviteCreateOrConnectWithoutInviterInput = {
    where: FeatureInviteWhereUniqueInput
    create: XOR<FeatureInviteCreateWithoutInviterInput, FeatureInviteUncheckedCreateWithoutInviterInput>
  }

  export type FeatureInviteCreateManyInviterInputEnvelope = {
    data: FeatureInviteCreateManyInviterInput | FeatureInviteCreateManyInviterInput[]
    skipDuplicates?: boolean
  }

  export type FeatureMembershipCreateWithoutUserInput = {
    id?: string
    role?: $Enums.FeatureMembershipRole
    createdAt?: Date | string
    updatedAt?: Date | string
    featureInstance: FeatureInstanceCreateNestedOneWithoutMembershipsInput
  }

  export type FeatureMembershipUncheckedCreateWithoutUserInput = {
    id?: string
    featureInstanceId: string
    role?: $Enums.FeatureMembershipRole
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FeatureMembershipCreateOrConnectWithoutUserInput = {
    where: FeatureMembershipWhereUniqueInput
    create: XOR<FeatureMembershipCreateWithoutUserInput, FeatureMembershipUncheckedCreateWithoutUserInput>
  }

  export type FeatureMembershipCreateManyUserInputEnvelope = {
    data: FeatureMembershipCreateManyUserInput | FeatureMembershipCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type FeatureInstanceCreateWithoutOwnerInput = {
    id?: string
    featureKey: $Enums.FeatureKey
    createdAt?: Date | string
    updatedAt?: Date | string
    invites?: FeatureInviteCreateNestedManyWithoutFeatureInstanceInput
    memberships?: FeatureMembershipCreateNestedManyWithoutFeatureInstanceInput
    watchlist?: WatchlistCreateNestedOneWithoutFeatureInstanceInput
  }

  export type FeatureInstanceUncheckedCreateWithoutOwnerInput = {
    id?: string
    featureKey: $Enums.FeatureKey
    createdAt?: Date | string
    updatedAt?: Date | string
    invites?: FeatureInviteUncheckedCreateNestedManyWithoutFeatureInstanceInput
    memberships?: FeatureMembershipUncheckedCreateNestedManyWithoutFeatureInstanceInput
    watchlist?: WatchlistUncheckedCreateNestedOneWithoutFeatureInstanceInput
  }

  export type FeatureInstanceCreateOrConnectWithoutOwnerInput = {
    where: FeatureInstanceWhereUniqueInput
    create: XOR<FeatureInstanceCreateWithoutOwnerInput, FeatureInstanceUncheckedCreateWithoutOwnerInput>
  }

  export type FeatureInstanceCreateManyOwnerInputEnvelope = {
    data: FeatureInstanceCreateManyOwnerInput | FeatureInstanceCreateManyOwnerInput[]
    skipDuplicates?: boolean
  }

  export type SessionCreateWithoutUserInput = {
    id?: string
    sessionToken: string
    expires: Date | string
  }

  export type SessionUncheckedCreateWithoutUserInput = {
    id?: string
    sessionToken: string
    expires: Date | string
  }

  export type SessionCreateOrConnectWithoutUserInput = {
    where: SessionWhereUniqueInput
    create: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput>
  }

  export type SessionCreateManyUserInputEnvelope = {
    data: SessionCreateManyUserInput | SessionCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type UserFeatureCreateWithoutUserInput = {
    id?: string
    featureKey: $Enums.FeatureKey
    enabledAt?: Date | string
    lastVisitedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserFeatureUncheckedCreateWithoutUserInput = {
    id?: string
    featureKey: $Enums.FeatureKey
    enabledAt?: Date | string
    lastVisitedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserFeatureCreateOrConnectWithoutUserInput = {
    where: UserFeatureWhereUniqueInput
    create: XOR<UserFeatureCreateWithoutUserInput, UserFeatureUncheckedCreateWithoutUserInput>
  }

  export type UserFeatureCreateManyUserInputEnvelope = {
    data: UserFeatureCreateManyUserInput | UserFeatureCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type WatchlistItemCreateWithoutAddedByInput = {
    id?: string
    tmdbId: number
    position: number
    status?: $Enums.WatchlistItemStatus
    note?: string
    title: string
    creditNames?: string | null
    year?: number | null
    posterPath?: string | null
    backdropPath?: string | null
    overview?: string | null
    watchedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    watchlist: WatchlistCreateNestedOneWithoutItemsInput
  }

  export type WatchlistItemUncheckedCreateWithoutAddedByInput = {
    id?: string
    watchlistId: string
    tmdbId: number
    position: number
    status?: $Enums.WatchlistItemStatus
    note?: string
    title: string
    creditNames?: string | null
    year?: number | null
    posterPath?: string | null
    backdropPath?: string | null
    overview?: string | null
    watchedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type WatchlistItemCreateOrConnectWithoutAddedByInput = {
    where: WatchlistItemWhereUniqueInput
    create: XOR<WatchlistItemCreateWithoutAddedByInput, WatchlistItemUncheckedCreateWithoutAddedByInput>
  }

  export type WatchlistItemCreateManyAddedByInputEnvelope = {
    data: WatchlistItemCreateManyAddedByInput | WatchlistItemCreateManyAddedByInput[]
    skipDuplicates?: boolean
  }

  export type AccountUpsertWithWhereUniqueWithoutUserInput = {
    where: AccountWhereUniqueInput
    update: XOR<AccountUpdateWithoutUserInput, AccountUncheckedUpdateWithoutUserInput>
    create: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput>
  }

  export type AccountUpdateWithWhereUniqueWithoutUserInput = {
    where: AccountWhereUniqueInput
    data: XOR<AccountUpdateWithoutUserInput, AccountUncheckedUpdateWithoutUserInput>
  }

  export type AccountUpdateManyWithWhereWithoutUserInput = {
    where: AccountScalarWhereInput
    data: XOR<AccountUpdateManyMutationInput, AccountUncheckedUpdateManyWithoutUserInput>
  }

  export type AccountScalarWhereInput = {
    AND?: AccountScalarWhereInput | AccountScalarWhereInput[]
    OR?: AccountScalarWhereInput[]
    NOT?: AccountScalarWhereInput | AccountScalarWhereInput[]
    id?: StringFilter<"Account"> | string
    userId?: StringFilter<"Account"> | string
    type?: StringFilter<"Account"> | string
    provider?: StringFilter<"Account"> | string
    providerAccountId?: StringFilter<"Account"> | string
    refresh_token?: StringNullableFilter<"Account"> | string | null
    access_token?: StringNullableFilter<"Account"> | string | null
    expires_at?: IntNullableFilter<"Account"> | number | null
    token_type?: StringNullableFilter<"Account"> | string | null
    scope?: StringNullableFilter<"Account"> | string | null
    id_token?: StringNullableFilter<"Account"> | string | null
    session_state?: StringNullableFilter<"Account"> | string | null
    refresh_token_expires_in?: IntNullableFilter<"Account"> | number | null
  }

  export type FeatureInviteUpsertWithWhereUniqueWithoutInviterInput = {
    where: FeatureInviteWhereUniqueInput
    update: XOR<FeatureInviteUpdateWithoutInviterInput, FeatureInviteUncheckedUpdateWithoutInviterInput>
    create: XOR<FeatureInviteCreateWithoutInviterInput, FeatureInviteUncheckedCreateWithoutInviterInput>
  }

  export type FeatureInviteUpdateWithWhereUniqueWithoutInviterInput = {
    where: FeatureInviteWhereUniqueInput
    data: XOR<FeatureInviteUpdateWithoutInviterInput, FeatureInviteUncheckedUpdateWithoutInviterInput>
  }

  export type FeatureInviteUpdateManyWithWhereWithoutInviterInput = {
    where: FeatureInviteScalarWhereInput
    data: XOR<FeatureInviteUpdateManyMutationInput, FeatureInviteUncheckedUpdateManyWithoutInviterInput>
  }

  export type FeatureInviteScalarWhereInput = {
    AND?: FeatureInviteScalarWhereInput | FeatureInviteScalarWhereInput[]
    OR?: FeatureInviteScalarWhereInput[]
    NOT?: FeatureInviteScalarWhereInput | FeatureInviteScalarWhereInput[]
    id?: StringFilter<"FeatureInvite"> | string
    featureInstanceId?: StringFilter<"FeatureInvite"> | string
    featureKey?: EnumFeatureKeyFilter<"FeatureInvite"> | $Enums.FeatureKey
    inviterId?: StringFilter<"FeatureInvite"> | string
    email?: StringFilter<"FeatureInvite"> | string
    tokenHash?: StringFilter<"FeatureInvite"> | string
    expiresAt?: DateTimeFilter<"FeatureInvite"> | Date | string
    acceptedAt?: DateTimeNullableFilter<"FeatureInvite"> | Date | string | null
    revokedAt?: DateTimeNullableFilter<"FeatureInvite"> | Date | string | null
    createdAt?: DateTimeFilter<"FeatureInvite"> | Date | string
    updatedAt?: DateTimeFilter<"FeatureInvite"> | Date | string
  }

  export type FeatureMembershipUpsertWithWhereUniqueWithoutUserInput = {
    where: FeatureMembershipWhereUniqueInput
    update: XOR<FeatureMembershipUpdateWithoutUserInput, FeatureMembershipUncheckedUpdateWithoutUserInput>
    create: XOR<FeatureMembershipCreateWithoutUserInput, FeatureMembershipUncheckedCreateWithoutUserInput>
  }

  export type FeatureMembershipUpdateWithWhereUniqueWithoutUserInput = {
    where: FeatureMembershipWhereUniqueInput
    data: XOR<FeatureMembershipUpdateWithoutUserInput, FeatureMembershipUncheckedUpdateWithoutUserInput>
  }

  export type FeatureMembershipUpdateManyWithWhereWithoutUserInput = {
    where: FeatureMembershipScalarWhereInput
    data: XOR<FeatureMembershipUpdateManyMutationInput, FeatureMembershipUncheckedUpdateManyWithoutUserInput>
  }

  export type FeatureMembershipScalarWhereInput = {
    AND?: FeatureMembershipScalarWhereInput | FeatureMembershipScalarWhereInput[]
    OR?: FeatureMembershipScalarWhereInput[]
    NOT?: FeatureMembershipScalarWhereInput | FeatureMembershipScalarWhereInput[]
    id?: StringFilter<"FeatureMembership"> | string
    featureInstanceId?: StringFilter<"FeatureMembership"> | string
    userId?: StringFilter<"FeatureMembership"> | string
    role?: EnumFeatureMembershipRoleFilter<"FeatureMembership"> | $Enums.FeatureMembershipRole
    createdAt?: DateTimeFilter<"FeatureMembership"> | Date | string
    updatedAt?: DateTimeFilter<"FeatureMembership"> | Date | string
  }

  export type FeatureInstanceUpsertWithWhereUniqueWithoutOwnerInput = {
    where: FeatureInstanceWhereUniqueInput
    update: XOR<FeatureInstanceUpdateWithoutOwnerInput, FeatureInstanceUncheckedUpdateWithoutOwnerInput>
    create: XOR<FeatureInstanceCreateWithoutOwnerInput, FeatureInstanceUncheckedCreateWithoutOwnerInput>
  }

  export type FeatureInstanceUpdateWithWhereUniqueWithoutOwnerInput = {
    where: FeatureInstanceWhereUniqueInput
    data: XOR<FeatureInstanceUpdateWithoutOwnerInput, FeatureInstanceUncheckedUpdateWithoutOwnerInput>
  }

  export type FeatureInstanceUpdateManyWithWhereWithoutOwnerInput = {
    where: FeatureInstanceScalarWhereInput
    data: XOR<FeatureInstanceUpdateManyMutationInput, FeatureInstanceUncheckedUpdateManyWithoutOwnerInput>
  }

  export type FeatureInstanceScalarWhereInput = {
    AND?: FeatureInstanceScalarWhereInput | FeatureInstanceScalarWhereInput[]
    OR?: FeatureInstanceScalarWhereInput[]
    NOT?: FeatureInstanceScalarWhereInput | FeatureInstanceScalarWhereInput[]
    id?: StringFilter<"FeatureInstance"> | string
    featureKey?: EnumFeatureKeyFilter<"FeatureInstance"> | $Enums.FeatureKey
    ownerId?: StringFilter<"FeatureInstance"> | string
    createdAt?: DateTimeFilter<"FeatureInstance"> | Date | string
    updatedAt?: DateTimeFilter<"FeatureInstance"> | Date | string
  }

  export type SessionUpsertWithWhereUniqueWithoutUserInput = {
    where: SessionWhereUniqueInput
    update: XOR<SessionUpdateWithoutUserInput, SessionUncheckedUpdateWithoutUserInput>
    create: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput>
  }

  export type SessionUpdateWithWhereUniqueWithoutUserInput = {
    where: SessionWhereUniqueInput
    data: XOR<SessionUpdateWithoutUserInput, SessionUncheckedUpdateWithoutUserInput>
  }

  export type SessionUpdateManyWithWhereWithoutUserInput = {
    where: SessionScalarWhereInput
    data: XOR<SessionUpdateManyMutationInput, SessionUncheckedUpdateManyWithoutUserInput>
  }

  export type SessionScalarWhereInput = {
    AND?: SessionScalarWhereInput | SessionScalarWhereInput[]
    OR?: SessionScalarWhereInput[]
    NOT?: SessionScalarWhereInput | SessionScalarWhereInput[]
    id?: StringFilter<"Session"> | string
    sessionToken?: StringFilter<"Session"> | string
    userId?: StringFilter<"Session"> | string
    expires?: DateTimeFilter<"Session"> | Date | string
  }

  export type UserFeatureUpsertWithWhereUniqueWithoutUserInput = {
    where: UserFeatureWhereUniqueInput
    update: XOR<UserFeatureUpdateWithoutUserInput, UserFeatureUncheckedUpdateWithoutUserInput>
    create: XOR<UserFeatureCreateWithoutUserInput, UserFeatureUncheckedCreateWithoutUserInput>
  }

  export type UserFeatureUpdateWithWhereUniqueWithoutUserInput = {
    where: UserFeatureWhereUniqueInput
    data: XOR<UserFeatureUpdateWithoutUserInput, UserFeatureUncheckedUpdateWithoutUserInput>
  }

  export type UserFeatureUpdateManyWithWhereWithoutUserInput = {
    where: UserFeatureScalarWhereInput
    data: XOR<UserFeatureUpdateManyMutationInput, UserFeatureUncheckedUpdateManyWithoutUserInput>
  }

  export type UserFeatureScalarWhereInput = {
    AND?: UserFeatureScalarWhereInput | UserFeatureScalarWhereInput[]
    OR?: UserFeatureScalarWhereInput[]
    NOT?: UserFeatureScalarWhereInput | UserFeatureScalarWhereInput[]
    id?: StringFilter<"UserFeature"> | string
    userId?: StringFilter<"UserFeature"> | string
    featureKey?: EnumFeatureKeyFilter<"UserFeature"> | $Enums.FeatureKey
    enabledAt?: DateTimeFilter<"UserFeature"> | Date | string
    lastVisitedAt?: DateTimeNullableFilter<"UserFeature"> | Date | string | null
    createdAt?: DateTimeFilter<"UserFeature"> | Date | string
    updatedAt?: DateTimeFilter<"UserFeature"> | Date | string
  }

  export type WatchlistItemUpsertWithWhereUniqueWithoutAddedByInput = {
    where: WatchlistItemWhereUniqueInput
    update: XOR<WatchlistItemUpdateWithoutAddedByInput, WatchlistItemUncheckedUpdateWithoutAddedByInput>
    create: XOR<WatchlistItemCreateWithoutAddedByInput, WatchlistItemUncheckedCreateWithoutAddedByInput>
  }

  export type WatchlistItemUpdateWithWhereUniqueWithoutAddedByInput = {
    where: WatchlistItemWhereUniqueInput
    data: XOR<WatchlistItemUpdateWithoutAddedByInput, WatchlistItemUncheckedUpdateWithoutAddedByInput>
  }

  export type WatchlistItemUpdateManyWithWhereWithoutAddedByInput = {
    where: WatchlistItemScalarWhereInput
    data: XOR<WatchlistItemUpdateManyMutationInput, WatchlistItemUncheckedUpdateManyWithoutAddedByInput>
  }

  export type WatchlistItemScalarWhereInput = {
    AND?: WatchlistItemScalarWhereInput | WatchlistItemScalarWhereInput[]
    OR?: WatchlistItemScalarWhereInput[]
    NOT?: WatchlistItemScalarWhereInput | WatchlistItemScalarWhereInput[]
    id?: StringFilter<"WatchlistItem"> | string
    watchlistId?: StringFilter<"WatchlistItem"> | string
    tmdbId?: IntFilter<"WatchlistItem"> | number
    position?: IntFilter<"WatchlistItem"> | number
    status?: EnumWatchlistItemStatusFilter<"WatchlistItem"> | $Enums.WatchlistItemStatus
    note?: StringFilter<"WatchlistItem"> | string
    title?: StringFilter<"WatchlistItem"> | string
    creditNames?: StringNullableFilter<"WatchlistItem"> | string | null
    year?: IntNullableFilter<"WatchlistItem"> | number | null
    posterPath?: StringNullableFilter<"WatchlistItem"> | string | null
    backdropPath?: StringNullableFilter<"WatchlistItem"> | string | null
    overview?: StringNullableFilter<"WatchlistItem"> | string | null
    watchedAt?: DateTimeNullableFilter<"WatchlistItem"> | Date | string | null
    addedById?: StringFilter<"WatchlistItem"> | string
    createdAt?: DateTimeFilter<"WatchlistItem"> | Date | string
    updatedAt?: DateTimeFilter<"WatchlistItem"> | Date | string
  }

  export type UserCreateWithoutUserFeaturesInput = {
    id?: string
    name?: string | null
    email?: string | null
    emailVerified?: Date | string | null
    image?: string | null
    accounts?: AccountCreateNestedManyWithoutUserInput
    featureInvites?: FeatureInviteCreateNestedManyWithoutInviterInput
    featureMemberships?: FeatureMembershipCreateNestedManyWithoutUserInput
    ownedFeatureInstances?: FeatureInstanceCreateNestedManyWithoutOwnerInput
    sessions?: SessionCreateNestedManyWithoutUserInput
    watchlistItems?: WatchlistItemCreateNestedManyWithoutAddedByInput
  }

  export type UserUncheckedCreateWithoutUserFeaturesInput = {
    id?: string
    name?: string | null
    email?: string | null
    emailVerified?: Date | string | null
    image?: string | null
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    featureInvites?: FeatureInviteUncheckedCreateNestedManyWithoutInviterInput
    featureMemberships?: FeatureMembershipUncheckedCreateNestedManyWithoutUserInput
    ownedFeatureInstances?: FeatureInstanceUncheckedCreateNestedManyWithoutOwnerInput
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    watchlistItems?: WatchlistItemUncheckedCreateNestedManyWithoutAddedByInput
  }

  export type UserCreateOrConnectWithoutUserFeaturesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutUserFeaturesInput, UserUncheckedCreateWithoutUserFeaturesInput>
  }

  export type UserUpsertWithoutUserFeaturesInput = {
    update: XOR<UserUpdateWithoutUserFeaturesInput, UserUncheckedUpdateWithoutUserFeaturesInput>
    create: XOR<UserCreateWithoutUserFeaturesInput, UserUncheckedCreateWithoutUserFeaturesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutUserFeaturesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutUserFeaturesInput, UserUncheckedUpdateWithoutUserFeaturesInput>
  }

  export type UserUpdateWithoutUserFeaturesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    accounts?: AccountUpdateManyWithoutUserNestedInput
    featureInvites?: FeatureInviteUpdateManyWithoutInviterNestedInput
    featureMemberships?: FeatureMembershipUpdateManyWithoutUserNestedInput
    ownedFeatureInstances?: FeatureInstanceUpdateManyWithoutOwnerNestedInput
    sessions?: SessionUpdateManyWithoutUserNestedInput
    watchlistItems?: WatchlistItemUpdateManyWithoutAddedByNestedInput
  }

  export type UserUncheckedUpdateWithoutUserFeaturesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    featureInvites?: FeatureInviteUncheckedUpdateManyWithoutInviterNestedInput
    featureMemberships?: FeatureMembershipUncheckedUpdateManyWithoutUserNestedInput
    ownedFeatureInstances?: FeatureInstanceUncheckedUpdateManyWithoutOwnerNestedInput
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
    watchlistItems?: WatchlistItemUncheckedUpdateManyWithoutAddedByNestedInput
  }

  export type FeatureInviteCreateWithoutFeatureInstanceInput = {
    id?: string
    featureKey: $Enums.FeatureKey
    email: string
    tokenHash: string
    expiresAt: Date | string
    acceptedAt?: Date | string | null
    revokedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    inviter: UserCreateNestedOneWithoutFeatureInvitesInput
  }

  export type FeatureInviteUncheckedCreateWithoutFeatureInstanceInput = {
    id?: string
    featureKey: $Enums.FeatureKey
    inviterId: string
    email: string
    tokenHash: string
    expiresAt: Date | string
    acceptedAt?: Date | string | null
    revokedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FeatureInviteCreateOrConnectWithoutFeatureInstanceInput = {
    where: FeatureInviteWhereUniqueInput
    create: XOR<FeatureInviteCreateWithoutFeatureInstanceInput, FeatureInviteUncheckedCreateWithoutFeatureInstanceInput>
  }

  export type FeatureInviteCreateManyFeatureInstanceInputEnvelope = {
    data: FeatureInviteCreateManyFeatureInstanceInput | FeatureInviteCreateManyFeatureInstanceInput[]
    skipDuplicates?: boolean
  }

  export type FeatureMembershipCreateWithoutFeatureInstanceInput = {
    id?: string
    role?: $Enums.FeatureMembershipRole
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutFeatureMembershipsInput
  }

  export type FeatureMembershipUncheckedCreateWithoutFeatureInstanceInput = {
    id?: string
    userId: string
    role?: $Enums.FeatureMembershipRole
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FeatureMembershipCreateOrConnectWithoutFeatureInstanceInput = {
    where: FeatureMembershipWhereUniqueInput
    create: XOR<FeatureMembershipCreateWithoutFeatureInstanceInput, FeatureMembershipUncheckedCreateWithoutFeatureInstanceInput>
  }

  export type FeatureMembershipCreateManyFeatureInstanceInputEnvelope = {
    data: FeatureMembershipCreateManyFeatureInstanceInput | FeatureMembershipCreateManyFeatureInstanceInput[]
    skipDuplicates?: boolean
  }

  export type UserCreateWithoutOwnedFeatureInstancesInput = {
    id?: string
    name?: string | null
    email?: string | null
    emailVerified?: Date | string | null
    image?: string | null
    accounts?: AccountCreateNestedManyWithoutUserInput
    featureInvites?: FeatureInviteCreateNestedManyWithoutInviterInput
    featureMemberships?: FeatureMembershipCreateNestedManyWithoutUserInput
    sessions?: SessionCreateNestedManyWithoutUserInput
    userFeatures?: UserFeatureCreateNestedManyWithoutUserInput
    watchlistItems?: WatchlistItemCreateNestedManyWithoutAddedByInput
  }

  export type UserUncheckedCreateWithoutOwnedFeatureInstancesInput = {
    id?: string
    name?: string | null
    email?: string | null
    emailVerified?: Date | string | null
    image?: string | null
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    featureInvites?: FeatureInviteUncheckedCreateNestedManyWithoutInviterInput
    featureMemberships?: FeatureMembershipUncheckedCreateNestedManyWithoutUserInput
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    userFeatures?: UserFeatureUncheckedCreateNestedManyWithoutUserInput
    watchlistItems?: WatchlistItemUncheckedCreateNestedManyWithoutAddedByInput
  }

  export type UserCreateOrConnectWithoutOwnedFeatureInstancesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutOwnedFeatureInstancesInput, UserUncheckedCreateWithoutOwnedFeatureInstancesInput>
  }

  export type WatchlistCreateWithoutFeatureInstanceInput = {
    id?: string
    name: string
    description?: string | null
    mediaType: $Enums.WatchlistMediaType
    createdAt?: Date | string
    updatedAt?: Date | string
    items?: WatchlistItemCreateNestedManyWithoutWatchlistInput
  }

  export type WatchlistUncheckedCreateWithoutFeatureInstanceInput = {
    id?: string
    name: string
    description?: string | null
    mediaType: $Enums.WatchlistMediaType
    createdAt?: Date | string
    updatedAt?: Date | string
    items?: WatchlistItemUncheckedCreateNestedManyWithoutWatchlistInput
  }

  export type WatchlistCreateOrConnectWithoutFeatureInstanceInput = {
    where: WatchlistWhereUniqueInput
    create: XOR<WatchlistCreateWithoutFeatureInstanceInput, WatchlistUncheckedCreateWithoutFeatureInstanceInput>
  }

  export type FeatureInviteUpsertWithWhereUniqueWithoutFeatureInstanceInput = {
    where: FeatureInviteWhereUniqueInput
    update: XOR<FeatureInviteUpdateWithoutFeatureInstanceInput, FeatureInviteUncheckedUpdateWithoutFeatureInstanceInput>
    create: XOR<FeatureInviteCreateWithoutFeatureInstanceInput, FeatureInviteUncheckedCreateWithoutFeatureInstanceInput>
  }

  export type FeatureInviteUpdateWithWhereUniqueWithoutFeatureInstanceInput = {
    where: FeatureInviteWhereUniqueInput
    data: XOR<FeatureInviteUpdateWithoutFeatureInstanceInput, FeatureInviteUncheckedUpdateWithoutFeatureInstanceInput>
  }

  export type FeatureInviteUpdateManyWithWhereWithoutFeatureInstanceInput = {
    where: FeatureInviteScalarWhereInput
    data: XOR<FeatureInviteUpdateManyMutationInput, FeatureInviteUncheckedUpdateManyWithoutFeatureInstanceInput>
  }

  export type FeatureMembershipUpsertWithWhereUniqueWithoutFeatureInstanceInput = {
    where: FeatureMembershipWhereUniqueInput
    update: XOR<FeatureMembershipUpdateWithoutFeatureInstanceInput, FeatureMembershipUncheckedUpdateWithoutFeatureInstanceInput>
    create: XOR<FeatureMembershipCreateWithoutFeatureInstanceInput, FeatureMembershipUncheckedCreateWithoutFeatureInstanceInput>
  }

  export type FeatureMembershipUpdateWithWhereUniqueWithoutFeatureInstanceInput = {
    where: FeatureMembershipWhereUniqueInput
    data: XOR<FeatureMembershipUpdateWithoutFeatureInstanceInput, FeatureMembershipUncheckedUpdateWithoutFeatureInstanceInput>
  }

  export type FeatureMembershipUpdateManyWithWhereWithoutFeatureInstanceInput = {
    where: FeatureMembershipScalarWhereInput
    data: XOR<FeatureMembershipUpdateManyMutationInput, FeatureMembershipUncheckedUpdateManyWithoutFeatureInstanceInput>
  }

  export type UserUpsertWithoutOwnedFeatureInstancesInput = {
    update: XOR<UserUpdateWithoutOwnedFeatureInstancesInput, UserUncheckedUpdateWithoutOwnedFeatureInstancesInput>
    create: XOR<UserCreateWithoutOwnedFeatureInstancesInput, UserUncheckedCreateWithoutOwnedFeatureInstancesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutOwnedFeatureInstancesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutOwnedFeatureInstancesInput, UserUncheckedUpdateWithoutOwnedFeatureInstancesInput>
  }

  export type UserUpdateWithoutOwnedFeatureInstancesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    accounts?: AccountUpdateManyWithoutUserNestedInput
    featureInvites?: FeatureInviteUpdateManyWithoutInviterNestedInput
    featureMemberships?: FeatureMembershipUpdateManyWithoutUserNestedInput
    sessions?: SessionUpdateManyWithoutUserNestedInput
    userFeatures?: UserFeatureUpdateManyWithoutUserNestedInput
    watchlistItems?: WatchlistItemUpdateManyWithoutAddedByNestedInput
  }

  export type UserUncheckedUpdateWithoutOwnedFeatureInstancesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    featureInvites?: FeatureInviteUncheckedUpdateManyWithoutInviterNestedInput
    featureMemberships?: FeatureMembershipUncheckedUpdateManyWithoutUserNestedInput
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
    userFeatures?: UserFeatureUncheckedUpdateManyWithoutUserNestedInput
    watchlistItems?: WatchlistItemUncheckedUpdateManyWithoutAddedByNestedInput
  }

  export type WatchlistUpsertWithoutFeatureInstanceInput = {
    update: XOR<WatchlistUpdateWithoutFeatureInstanceInput, WatchlistUncheckedUpdateWithoutFeatureInstanceInput>
    create: XOR<WatchlistCreateWithoutFeatureInstanceInput, WatchlistUncheckedCreateWithoutFeatureInstanceInput>
    where?: WatchlistWhereInput
  }

  export type WatchlistUpdateToOneWithWhereWithoutFeatureInstanceInput = {
    where?: WatchlistWhereInput
    data: XOR<WatchlistUpdateWithoutFeatureInstanceInput, WatchlistUncheckedUpdateWithoutFeatureInstanceInput>
  }

  export type WatchlistUpdateWithoutFeatureInstanceInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    mediaType?: EnumWatchlistMediaTypeFieldUpdateOperationsInput | $Enums.WatchlistMediaType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    items?: WatchlistItemUpdateManyWithoutWatchlistNestedInput
  }

  export type WatchlistUncheckedUpdateWithoutFeatureInstanceInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    mediaType?: EnumWatchlistMediaTypeFieldUpdateOperationsInput | $Enums.WatchlistMediaType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    items?: WatchlistItemUncheckedUpdateManyWithoutWatchlistNestedInput
  }

  export type FeatureInstanceCreateWithoutMembershipsInput = {
    id?: string
    featureKey: $Enums.FeatureKey
    createdAt?: Date | string
    updatedAt?: Date | string
    invites?: FeatureInviteCreateNestedManyWithoutFeatureInstanceInput
    owner: UserCreateNestedOneWithoutOwnedFeatureInstancesInput
    watchlist?: WatchlistCreateNestedOneWithoutFeatureInstanceInput
  }

  export type FeatureInstanceUncheckedCreateWithoutMembershipsInput = {
    id?: string
    featureKey: $Enums.FeatureKey
    ownerId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    invites?: FeatureInviteUncheckedCreateNestedManyWithoutFeatureInstanceInput
    watchlist?: WatchlistUncheckedCreateNestedOneWithoutFeatureInstanceInput
  }

  export type FeatureInstanceCreateOrConnectWithoutMembershipsInput = {
    where: FeatureInstanceWhereUniqueInput
    create: XOR<FeatureInstanceCreateWithoutMembershipsInput, FeatureInstanceUncheckedCreateWithoutMembershipsInput>
  }

  export type UserCreateWithoutFeatureMembershipsInput = {
    id?: string
    name?: string | null
    email?: string | null
    emailVerified?: Date | string | null
    image?: string | null
    accounts?: AccountCreateNestedManyWithoutUserInput
    featureInvites?: FeatureInviteCreateNestedManyWithoutInviterInput
    ownedFeatureInstances?: FeatureInstanceCreateNestedManyWithoutOwnerInput
    sessions?: SessionCreateNestedManyWithoutUserInput
    userFeatures?: UserFeatureCreateNestedManyWithoutUserInput
    watchlistItems?: WatchlistItemCreateNestedManyWithoutAddedByInput
  }

  export type UserUncheckedCreateWithoutFeatureMembershipsInput = {
    id?: string
    name?: string | null
    email?: string | null
    emailVerified?: Date | string | null
    image?: string | null
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    featureInvites?: FeatureInviteUncheckedCreateNestedManyWithoutInviterInput
    ownedFeatureInstances?: FeatureInstanceUncheckedCreateNestedManyWithoutOwnerInput
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    userFeatures?: UserFeatureUncheckedCreateNestedManyWithoutUserInput
    watchlistItems?: WatchlistItemUncheckedCreateNestedManyWithoutAddedByInput
  }

  export type UserCreateOrConnectWithoutFeatureMembershipsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutFeatureMembershipsInput, UserUncheckedCreateWithoutFeatureMembershipsInput>
  }

  export type FeatureInstanceUpsertWithoutMembershipsInput = {
    update: XOR<FeatureInstanceUpdateWithoutMembershipsInput, FeatureInstanceUncheckedUpdateWithoutMembershipsInput>
    create: XOR<FeatureInstanceCreateWithoutMembershipsInput, FeatureInstanceUncheckedCreateWithoutMembershipsInput>
    where?: FeatureInstanceWhereInput
  }

  export type FeatureInstanceUpdateToOneWithWhereWithoutMembershipsInput = {
    where?: FeatureInstanceWhereInput
    data: XOR<FeatureInstanceUpdateWithoutMembershipsInput, FeatureInstanceUncheckedUpdateWithoutMembershipsInput>
  }

  export type FeatureInstanceUpdateWithoutMembershipsInput = {
    id?: StringFieldUpdateOperationsInput | string
    featureKey?: EnumFeatureKeyFieldUpdateOperationsInput | $Enums.FeatureKey
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    invites?: FeatureInviteUpdateManyWithoutFeatureInstanceNestedInput
    owner?: UserUpdateOneRequiredWithoutOwnedFeatureInstancesNestedInput
    watchlist?: WatchlistUpdateOneWithoutFeatureInstanceNestedInput
  }

  export type FeatureInstanceUncheckedUpdateWithoutMembershipsInput = {
    id?: StringFieldUpdateOperationsInput | string
    featureKey?: EnumFeatureKeyFieldUpdateOperationsInput | $Enums.FeatureKey
    ownerId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    invites?: FeatureInviteUncheckedUpdateManyWithoutFeatureInstanceNestedInput
    watchlist?: WatchlistUncheckedUpdateOneWithoutFeatureInstanceNestedInput
  }

  export type UserUpsertWithoutFeatureMembershipsInput = {
    update: XOR<UserUpdateWithoutFeatureMembershipsInput, UserUncheckedUpdateWithoutFeatureMembershipsInput>
    create: XOR<UserCreateWithoutFeatureMembershipsInput, UserUncheckedCreateWithoutFeatureMembershipsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutFeatureMembershipsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutFeatureMembershipsInput, UserUncheckedUpdateWithoutFeatureMembershipsInput>
  }

  export type UserUpdateWithoutFeatureMembershipsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    accounts?: AccountUpdateManyWithoutUserNestedInput
    featureInvites?: FeatureInviteUpdateManyWithoutInviterNestedInput
    ownedFeatureInstances?: FeatureInstanceUpdateManyWithoutOwnerNestedInput
    sessions?: SessionUpdateManyWithoutUserNestedInput
    userFeatures?: UserFeatureUpdateManyWithoutUserNestedInput
    watchlistItems?: WatchlistItemUpdateManyWithoutAddedByNestedInput
  }

  export type UserUncheckedUpdateWithoutFeatureMembershipsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    featureInvites?: FeatureInviteUncheckedUpdateManyWithoutInviterNestedInput
    ownedFeatureInstances?: FeatureInstanceUncheckedUpdateManyWithoutOwnerNestedInput
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
    userFeatures?: UserFeatureUncheckedUpdateManyWithoutUserNestedInput
    watchlistItems?: WatchlistItemUncheckedUpdateManyWithoutAddedByNestedInput
  }

  export type FeatureInstanceCreateWithoutInvitesInput = {
    id?: string
    featureKey: $Enums.FeatureKey
    createdAt?: Date | string
    updatedAt?: Date | string
    memberships?: FeatureMembershipCreateNestedManyWithoutFeatureInstanceInput
    owner: UserCreateNestedOneWithoutOwnedFeatureInstancesInput
    watchlist?: WatchlistCreateNestedOneWithoutFeatureInstanceInput
  }

  export type FeatureInstanceUncheckedCreateWithoutInvitesInput = {
    id?: string
    featureKey: $Enums.FeatureKey
    ownerId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    memberships?: FeatureMembershipUncheckedCreateNestedManyWithoutFeatureInstanceInput
    watchlist?: WatchlistUncheckedCreateNestedOneWithoutFeatureInstanceInput
  }

  export type FeatureInstanceCreateOrConnectWithoutInvitesInput = {
    where: FeatureInstanceWhereUniqueInput
    create: XOR<FeatureInstanceCreateWithoutInvitesInput, FeatureInstanceUncheckedCreateWithoutInvitesInput>
  }

  export type UserCreateWithoutFeatureInvitesInput = {
    id?: string
    name?: string | null
    email?: string | null
    emailVerified?: Date | string | null
    image?: string | null
    accounts?: AccountCreateNestedManyWithoutUserInput
    featureMemberships?: FeatureMembershipCreateNestedManyWithoutUserInput
    ownedFeatureInstances?: FeatureInstanceCreateNestedManyWithoutOwnerInput
    sessions?: SessionCreateNestedManyWithoutUserInput
    userFeatures?: UserFeatureCreateNestedManyWithoutUserInput
    watchlistItems?: WatchlistItemCreateNestedManyWithoutAddedByInput
  }

  export type UserUncheckedCreateWithoutFeatureInvitesInput = {
    id?: string
    name?: string | null
    email?: string | null
    emailVerified?: Date | string | null
    image?: string | null
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    featureMemberships?: FeatureMembershipUncheckedCreateNestedManyWithoutUserInput
    ownedFeatureInstances?: FeatureInstanceUncheckedCreateNestedManyWithoutOwnerInput
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    userFeatures?: UserFeatureUncheckedCreateNestedManyWithoutUserInput
    watchlistItems?: WatchlistItemUncheckedCreateNestedManyWithoutAddedByInput
  }

  export type UserCreateOrConnectWithoutFeatureInvitesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutFeatureInvitesInput, UserUncheckedCreateWithoutFeatureInvitesInput>
  }

  export type FeatureInstanceUpsertWithoutInvitesInput = {
    update: XOR<FeatureInstanceUpdateWithoutInvitesInput, FeatureInstanceUncheckedUpdateWithoutInvitesInput>
    create: XOR<FeatureInstanceCreateWithoutInvitesInput, FeatureInstanceUncheckedCreateWithoutInvitesInput>
    where?: FeatureInstanceWhereInput
  }

  export type FeatureInstanceUpdateToOneWithWhereWithoutInvitesInput = {
    where?: FeatureInstanceWhereInput
    data: XOR<FeatureInstanceUpdateWithoutInvitesInput, FeatureInstanceUncheckedUpdateWithoutInvitesInput>
  }

  export type FeatureInstanceUpdateWithoutInvitesInput = {
    id?: StringFieldUpdateOperationsInput | string
    featureKey?: EnumFeatureKeyFieldUpdateOperationsInput | $Enums.FeatureKey
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    memberships?: FeatureMembershipUpdateManyWithoutFeatureInstanceNestedInput
    owner?: UserUpdateOneRequiredWithoutOwnedFeatureInstancesNestedInput
    watchlist?: WatchlistUpdateOneWithoutFeatureInstanceNestedInput
  }

  export type FeatureInstanceUncheckedUpdateWithoutInvitesInput = {
    id?: StringFieldUpdateOperationsInput | string
    featureKey?: EnumFeatureKeyFieldUpdateOperationsInput | $Enums.FeatureKey
    ownerId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    memberships?: FeatureMembershipUncheckedUpdateManyWithoutFeatureInstanceNestedInput
    watchlist?: WatchlistUncheckedUpdateOneWithoutFeatureInstanceNestedInput
  }

  export type UserUpsertWithoutFeatureInvitesInput = {
    update: XOR<UserUpdateWithoutFeatureInvitesInput, UserUncheckedUpdateWithoutFeatureInvitesInput>
    create: XOR<UserCreateWithoutFeatureInvitesInput, UserUncheckedCreateWithoutFeatureInvitesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutFeatureInvitesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutFeatureInvitesInput, UserUncheckedUpdateWithoutFeatureInvitesInput>
  }

  export type UserUpdateWithoutFeatureInvitesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    accounts?: AccountUpdateManyWithoutUserNestedInput
    featureMemberships?: FeatureMembershipUpdateManyWithoutUserNestedInput
    ownedFeatureInstances?: FeatureInstanceUpdateManyWithoutOwnerNestedInput
    sessions?: SessionUpdateManyWithoutUserNestedInput
    userFeatures?: UserFeatureUpdateManyWithoutUserNestedInput
    watchlistItems?: WatchlistItemUpdateManyWithoutAddedByNestedInput
  }

  export type UserUncheckedUpdateWithoutFeatureInvitesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    featureMemberships?: FeatureMembershipUncheckedUpdateManyWithoutUserNestedInput
    ownedFeatureInstances?: FeatureInstanceUncheckedUpdateManyWithoutOwnerNestedInput
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
    userFeatures?: UserFeatureUncheckedUpdateManyWithoutUserNestedInput
    watchlistItems?: WatchlistItemUncheckedUpdateManyWithoutAddedByNestedInput
  }

  export type FeatureInstanceCreateWithoutWatchlistInput = {
    id?: string
    featureKey: $Enums.FeatureKey
    createdAt?: Date | string
    updatedAt?: Date | string
    invites?: FeatureInviteCreateNestedManyWithoutFeatureInstanceInput
    memberships?: FeatureMembershipCreateNestedManyWithoutFeatureInstanceInput
    owner: UserCreateNestedOneWithoutOwnedFeatureInstancesInput
  }

  export type FeatureInstanceUncheckedCreateWithoutWatchlistInput = {
    id?: string
    featureKey: $Enums.FeatureKey
    ownerId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    invites?: FeatureInviteUncheckedCreateNestedManyWithoutFeatureInstanceInput
    memberships?: FeatureMembershipUncheckedCreateNestedManyWithoutFeatureInstanceInput
  }

  export type FeatureInstanceCreateOrConnectWithoutWatchlistInput = {
    where: FeatureInstanceWhereUniqueInput
    create: XOR<FeatureInstanceCreateWithoutWatchlistInput, FeatureInstanceUncheckedCreateWithoutWatchlistInput>
  }

  export type WatchlistItemCreateWithoutWatchlistInput = {
    id?: string
    tmdbId: number
    position: number
    status?: $Enums.WatchlistItemStatus
    note?: string
    title: string
    creditNames?: string | null
    year?: number | null
    posterPath?: string | null
    backdropPath?: string | null
    overview?: string | null
    watchedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    addedBy: UserCreateNestedOneWithoutWatchlistItemsInput
  }

  export type WatchlistItemUncheckedCreateWithoutWatchlistInput = {
    id?: string
    tmdbId: number
    position: number
    status?: $Enums.WatchlistItemStatus
    note?: string
    title: string
    creditNames?: string | null
    year?: number | null
    posterPath?: string | null
    backdropPath?: string | null
    overview?: string | null
    watchedAt?: Date | string | null
    addedById: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type WatchlistItemCreateOrConnectWithoutWatchlistInput = {
    where: WatchlistItemWhereUniqueInput
    create: XOR<WatchlistItemCreateWithoutWatchlistInput, WatchlistItemUncheckedCreateWithoutWatchlistInput>
  }

  export type WatchlistItemCreateManyWatchlistInputEnvelope = {
    data: WatchlistItemCreateManyWatchlistInput | WatchlistItemCreateManyWatchlistInput[]
    skipDuplicates?: boolean
  }

  export type FeatureInstanceUpsertWithoutWatchlistInput = {
    update: XOR<FeatureInstanceUpdateWithoutWatchlistInput, FeatureInstanceUncheckedUpdateWithoutWatchlistInput>
    create: XOR<FeatureInstanceCreateWithoutWatchlistInput, FeatureInstanceUncheckedCreateWithoutWatchlistInput>
    where?: FeatureInstanceWhereInput
  }

  export type FeatureInstanceUpdateToOneWithWhereWithoutWatchlistInput = {
    where?: FeatureInstanceWhereInput
    data: XOR<FeatureInstanceUpdateWithoutWatchlistInput, FeatureInstanceUncheckedUpdateWithoutWatchlistInput>
  }

  export type FeatureInstanceUpdateWithoutWatchlistInput = {
    id?: StringFieldUpdateOperationsInput | string
    featureKey?: EnumFeatureKeyFieldUpdateOperationsInput | $Enums.FeatureKey
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    invites?: FeatureInviteUpdateManyWithoutFeatureInstanceNestedInput
    memberships?: FeatureMembershipUpdateManyWithoutFeatureInstanceNestedInput
    owner?: UserUpdateOneRequiredWithoutOwnedFeatureInstancesNestedInput
  }

  export type FeatureInstanceUncheckedUpdateWithoutWatchlistInput = {
    id?: StringFieldUpdateOperationsInput | string
    featureKey?: EnumFeatureKeyFieldUpdateOperationsInput | $Enums.FeatureKey
    ownerId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    invites?: FeatureInviteUncheckedUpdateManyWithoutFeatureInstanceNestedInput
    memberships?: FeatureMembershipUncheckedUpdateManyWithoutFeatureInstanceNestedInput
  }

  export type WatchlistItemUpsertWithWhereUniqueWithoutWatchlistInput = {
    where: WatchlistItemWhereUniqueInput
    update: XOR<WatchlistItemUpdateWithoutWatchlistInput, WatchlistItemUncheckedUpdateWithoutWatchlistInput>
    create: XOR<WatchlistItemCreateWithoutWatchlistInput, WatchlistItemUncheckedCreateWithoutWatchlistInput>
  }

  export type WatchlistItemUpdateWithWhereUniqueWithoutWatchlistInput = {
    where: WatchlistItemWhereUniqueInput
    data: XOR<WatchlistItemUpdateWithoutWatchlistInput, WatchlistItemUncheckedUpdateWithoutWatchlistInput>
  }

  export type WatchlistItemUpdateManyWithWhereWithoutWatchlistInput = {
    where: WatchlistItemScalarWhereInput
    data: XOR<WatchlistItemUpdateManyMutationInput, WatchlistItemUncheckedUpdateManyWithoutWatchlistInput>
  }

  export type UserCreateWithoutWatchlistItemsInput = {
    id?: string
    name?: string | null
    email?: string | null
    emailVerified?: Date | string | null
    image?: string | null
    accounts?: AccountCreateNestedManyWithoutUserInput
    featureInvites?: FeatureInviteCreateNestedManyWithoutInviterInput
    featureMemberships?: FeatureMembershipCreateNestedManyWithoutUserInput
    ownedFeatureInstances?: FeatureInstanceCreateNestedManyWithoutOwnerInput
    sessions?: SessionCreateNestedManyWithoutUserInput
    userFeatures?: UserFeatureCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutWatchlistItemsInput = {
    id?: string
    name?: string | null
    email?: string | null
    emailVerified?: Date | string | null
    image?: string | null
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    featureInvites?: FeatureInviteUncheckedCreateNestedManyWithoutInviterInput
    featureMemberships?: FeatureMembershipUncheckedCreateNestedManyWithoutUserInput
    ownedFeatureInstances?: FeatureInstanceUncheckedCreateNestedManyWithoutOwnerInput
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    userFeatures?: UserFeatureUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutWatchlistItemsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutWatchlistItemsInput, UserUncheckedCreateWithoutWatchlistItemsInput>
  }

  export type WatchlistCreateWithoutItemsInput = {
    id?: string
    name: string
    description?: string | null
    mediaType: $Enums.WatchlistMediaType
    createdAt?: Date | string
    updatedAt?: Date | string
    featureInstance: FeatureInstanceCreateNestedOneWithoutWatchlistInput
  }

  export type WatchlistUncheckedCreateWithoutItemsInput = {
    id?: string
    featureInstanceId: string
    name: string
    description?: string | null
    mediaType: $Enums.WatchlistMediaType
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type WatchlistCreateOrConnectWithoutItemsInput = {
    where: WatchlistWhereUniqueInput
    create: XOR<WatchlistCreateWithoutItemsInput, WatchlistUncheckedCreateWithoutItemsInput>
  }

  export type UserUpsertWithoutWatchlistItemsInput = {
    update: XOR<UserUpdateWithoutWatchlistItemsInput, UserUncheckedUpdateWithoutWatchlistItemsInput>
    create: XOR<UserCreateWithoutWatchlistItemsInput, UserUncheckedCreateWithoutWatchlistItemsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutWatchlistItemsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutWatchlistItemsInput, UserUncheckedUpdateWithoutWatchlistItemsInput>
  }

  export type UserUpdateWithoutWatchlistItemsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    accounts?: AccountUpdateManyWithoutUserNestedInput
    featureInvites?: FeatureInviteUpdateManyWithoutInviterNestedInput
    featureMemberships?: FeatureMembershipUpdateManyWithoutUserNestedInput
    ownedFeatureInstances?: FeatureInstanceUpdateManyWithoutOwnerNestedInput
    sessions?: SessionUpdateManyWithoutUserNestedInput
    userFeatures?: UserFeatureUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutWatchlistItemsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    featureInvites?: FeatureInviteUncheckedUpdateManyWithoutInviterNestedInput
    featureMemberships?: FeatureMembershipUncheckedUpdateManyWithoutUserNestedInput
    ownedFeatureInstances?: FeatureInstanceUncheckedUpdateManyWithoutOwnerNestedInput
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
    userFeatures?: UserFeatureUncheckedUpdateManyWithoutUserNestedInput
  }

  export type WatchlistUpsertWithoutItemsInput = {
    update: XOR<WatchlistUpdateWithoutItemsInput, WatchlistUncheckedUpdateWithoutItemsInput>
    create: XOR<WatchlistCreateWithoutItemsInput, WatchlistUncheckedCreateWithoutItemsInput>
    where?: WatchlistWhereInput
  }

  export type WatchlistUpdateToOneWithWhereWithoutItemsInput = {
    where?: WatchlistWhereInput
    data: XOR<WatchlistUpdateWithoutItemsInput, WatchlistUncheckedUpdateWithoutItemsInput>
  }

  export type WatchlistUpdateWithoutItemsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    mediaType?: EnumWatchlistMediaTypeFieldUpdateOperationsInput | $Enums.WatchlistMediaType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    featureInstance?: FeatureInstanceUpdateOneRequiredWithoutWatchlistNestedInput
  }

  export type WatchlistUncheckedUpdateWithoutItemsInput = {
    id?: StringFieldUpdateOperationsInput | string
    featureInstanceId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    mediaType?: EnumWatchlistMediaTypeFieldUpdateOperationsInput | $Enums.WatchlistMediaType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AccountCreateManyUserInput = {
    id?: string
    type: string
    provider: string
    providerAccountId: string
    refresh_token?: string | null
    access_token?: string | null
    expires_at?: number | null
    token_type?: string | null
    scope?: string | null
    id_token?: string | null
    session_state?: string | null
    refresh_token_expires_in?: number | null
  }

  export type FeatureInviteCreateManyInviterInput = {
    id?: string
    featureInstanceId: string
    featureKey: $Enums.FeatureKey
    email: string
    tokenHash: string
    expiresAt: Date | string
    acceptedAt?: Date | string | null
    revokedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FeatureMembershipCreateManyUserInput = {
    id?: string
    featureInstanceId: string
    role?: $Enums.FeatureMembershipRole
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FeatureInstanceCreateManyOwnerInput = {
    id?: string
    featureKey: $Enums.FeatureKey
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SessionCreateManyUserInput = {
    id?: string
    sessionToken: string
    expires: Date | string
  }

  export type UserFeatureCreateManyUserInput = {
    id?: string
    featureKey: $Enums.FeatureKey
    enabledAt?: Date | string
    lastVisitedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type WatchlistItemCreateManyAddedByInput = {
    id?: string
    watchlistId: string
    tmdbId: number
    position: number
    status?: $Enums.WatchlistItemStatus
    note?: string
    title: string
    creditNames?: string | null
    year?: number | null
    posterPath?: string | null
    backdropPath?: string | null
    overview?: string | null
    watchedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AccountUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
    refresh_token_expires_in?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type AccountUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
    refresh_token_expires_in?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type AccountUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
    refresh_token_expires_in?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type FeatureInviteUpdateWithoutInviterInput = {
    id?: StringFieldUpdateOperationsInput | string
    featureKey?: EnumFeatureKeyFieldUpdateOperationsInput | $Enums.FeatureKey
    email?: StringFieldUpdateOperationsInput | string
    tokenHash?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    acceptedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    revokedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    featureInstance?: FeatureInstanceUpdateOneRequiredWithoutInvitesNestedInput
  }

  export type FeatureInviteUncheckedUpdateWithoutInviterInput = {
    id?: StringFieldUpdateOperationsInput | string
    featureInstanceId?: StringFieldUpdateOperationsInput | string
    featureKey?: EnumFeatureKeyFieldUpdateOperationsInput | $Enums.FeatureKey
    email?: StringFieldUpdateOperationsInput | string
    tokenHash?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    acceptedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    revokedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FeatureInviteUncheckedUpdateManyWithoutInviterInput = {
    id?: StringFieldUpdateOperationsInput | string
    featureInstanceId?: StringFieldUpdateOperationsInput | string
    featureKey?: EnumFeatureKeyFieldUpdateOperationsInput | $Enums.FeatureKey
    email?: StringFieldUpdateOperationsInput | string
    tokenHash?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    acceptedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    revokedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FeatureMembershipUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    role?: EnumFeatureMembershipRoleFieldUpdateOperationsInput | $Enums.FeatureMembershipRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    featureInstance?: FeatureInstanceUpdateOneRequiredWithoutMembershipsNestedInput
  }

  export type FeatureMembershipUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    featureInstanceId?: StringFieldUpdateOperationsInput | string
    role?: EnumFeatureMembershipRoleFieldUpdateOperationsInput | $Enums.FeatureMembershipRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FeatureMembershipUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    featureInstanceId?: StringFieldUpdateOperationsInput | string
    role?: EnumFeatureMembershipRoleFieldUpdateOperationsInput | $Enums.FeatureMembershipRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FeatureInstanceUpdateWithoutOwnerInput = {
    id?: StringFieldUpdateOperationsInput | string
    featureKey?: EnumFeatureKeyFieldUpdateOperationsInput | $Enums.FeatureKey
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    invites?: FeatureInviteUpdateManyWithoutFeatureInstanceNestedInput
    memberships?: FeatureMembershipUpdateManyWithoutFeatureInstanceNestedInput
    watchlist?: WatchlistUpdateOneWithoutFeatureInstanceNestedInput
  }

  export type FeatureInstanceUncheckedUpdateWithoutOwnerInput = {
    id?: StringFieldUpdateOperationsInput | string
    featureKey?: EnumFeatureKeyFieldUpdateOperationsInput | $Enums.FeatureKey
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    invites?: FeatureInviteUncheckedUpdateManyWithoutFeatureInstanceNestedInput
    memberships?: FeatureMembershipUncheckedUpdateManyWithoutFeatureInstanceNestedInput
    watchlist?: WatchlistUncheckedUpdateOneWithoutFeatureInstanceNestedInput
  }

  export type FeatureInstanceUncheckedUpdateManyWithoutOwnerInput = {
    id?: StringFieldUpdateOperationsInput | string
    featureKey?: EnumFeatureKeyFieldUpdateOperationsInput | $Enums.FeatureKey
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionToken?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionToken?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionToken?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserFeatureUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    featureKey?: EnumFeatureKeyFieldUpdateOperationsInput | $Enums.FeatureKey
    enabledAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastVisitedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserFeatureUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    featureKey?: EnumFeatureKeyFieldUpdateOperationsInput | $Enums.FeatureKey
    enabledAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastVisitedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserFeatureUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    featureKey?: EnumFeatureKeyFieldUpdateOperationsInput | $Enums.FeatureKey
    enabledAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastVisitedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WatchlistItemUpdateWithoutAddedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    tmdbId?: IntFieldUpdateOperationsInput | number
    position?: IntFieldUpdateOperationsInput | number
    status?: EnumWatchlistItemStatusFieldUpdateOperationsInput | $Enums.WatchlistItemStatus
    note?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    creditNames?: NullableStringFieldUpdateOperationsInput | string | null
    year?: NullableIntFieldUpdateOperationsInput | number | null
    posterPath?: NullableStringFieldUpdateOperationsInput | string | null
    backdropPath?: NullableStringFieldUpdateOperationsInput | string | null
    overview?: NullableStringFieldUpdateOperationsInput | string | null
    watchedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    watchlist?: WatchlistUpdateOneRequiredWithoutItemsNestedInput
  }

  export type WatchlistItemUncheckedUpdateWithoutAddedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    watchlistId?: StringFieldUpdateOperationsInput | string
    tmdbId?: IntFieldUpdateOperationsInput | number
    position?: IntFieldUpdateOperationsInput | number
    status?: EnumWatchlistItemStatusFieldUpdateOperationsInput | $Enums.WatchlistItemStatus
    note?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    creditNames?: NullableStringFieldUpdateOperationsInput | string | null
    year?: NullableIntFieldUpdateOperationsInput | number | null
    posterPath?: NullableStringFieldUpdateOperationsInput | string | null
    backdropPath?: NullableStringFieldUpdateOperationsInput | string | null
    overview?: NullableStringFieldUpdateOperationsInput | string | null
    watchedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WatchlistItemUncheckedUpdateManyWithoutAddedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    watchlistId?: StringFieldUpdateOperationsInput | string
    tmdbId?: IntFieldUpdateOperationsInput | number
    position?: IntFieldUpdateOperationsInput | number
    status?: EnumWatchlistItemStatusFieldUpdateOperationsInput | $Enums.WatchlistItemStatus
    note?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    creditNames?: NullableStringFieldUpdateOperationsInput | string | null
    year?: NullableIntFieldUpdateOperationsInput | number | null
    posterPath?: NullableStringFieldUpdateOperationsInput | string | null
    backdropPath?: NullableStringFieldUpdateOperationsInput | string | null
    overview?: NullableStringFieldUpdateOperationsInput | string | null
    watchedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FeatureInviteCreateManyFeatureInstanceInput = {
    id?: string
    featureKey: $Enums.FeatureKey
    inviterId: string
    email: string
    tokenHash: string
    expiresAt: Date | string
    acceptedAt?: Date | string | null
    revokedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FeatureMembershipCreateManyFeatureInstanceInput = {
    id?: string
    userId: string
    role?: $Enums.FeatureMembershipRole
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FeatureInviteUpdateWithoutFeatureInstanceInput = {
    id?: StringFieldUpdateOperationsInput | string
    featureKey?: EnumFeatureKeyFieldUpdateOperationsInput | $Enums.FeatureKey
    email?: StringFieldUpdateOperationsInput | string
    tokenHash?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    acceptedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    revokedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    inviter?: UserUpdateOneRequiredWithoutFeatureInvitesNestedInput
  }

  export type FeatureInviteUncheckedUpdateWithoutFeatureInstanceInput = {
    id?: StringFieldUpdateOperationsInput | string
    featureKey?: EnumFeatureKeyFieldUpdateOperationsInput | $Enums.FeatureKey
    inviterId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    tokenHash?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    acceptedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    revokedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FeatureInviteUncheckedUpdateManyWithoutFeatureInstanceInput = {
    id?: StringFieldUpdateOperationsInput | string
    featureKey?: EnumFeatureKeyFieldUpdateOperationsInput | $Enums.FeatureKey
    inviterId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    tokenHash?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    acceptedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    revokedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FeatureMembershipUpdateWithoutFeatureInstanceInput = {
    id?: StringFieldUpdateOperationsInput | string
    role?: EnumFeatureMembershipRoleFieldUpdateOperationsInput | $Enums.FeatureMembershipRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutFeatureMembershipsNestedInput
  }

  export type FeatureMembershipUncheckedUpdateWithoutFeatureInstanceInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    role?: EnumFeatureMembershipRoleFieldUpdateOperationsInput | $Enums.FeatureMembershipRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FeatureMembershipUncheckedUpdateManyWithoutFeatureInstanceInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    role?: EnumFeatureMembershipRoleFieldUpdateOperationsInput | $Enums.FeatureMembershipRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WatchlistItemCreateManyWatchlistInput = {
    id?: string
    tmdbId: number
    position: number
    status?: $Enums.WatchlistItemStatus
    note?: string
    title: string
    creditNames?: string | null
    year?: number | null
    posterPath?: string | null
    backdropPath?: string | null
    overview?: string | null
    watchedAt?: Date | string | null
    addedById: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type WatchlistItemUpdateWithoutWatchlistInput = {
    id?: StringFieldUpdateOperationsInput | string
    tmdbId?: IntFieldUpdateOperationsInput | number
    position?: IntFieldUpdateOperationsInput | number
    status?: EnumWatchlistItemStatusFieldUpdateOperationsInput | $Enums.WatchlistItemStatus
    note?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    creditNames?: NullableStringFieldUpdateOperationsInput | string | null
    year?: NullableIntFieldUpdateOperationsInput | number | null
    posterPath?: NullableStringFieldUpdateOperationsInput | string | null
    backdropPath?: NullableStringFieldUpdateOperationsInput | string | null
    overview?: NullableStringFieldUpdateOperationsInput | string | null
    watchedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    addedBy?: UserUpdateOneRequiredWithoutWatchlistItemsNestedInput
  }

  export type WatchlistItemUncheckedUpdateWithoutWatchlistInput = {
    id?: StringFieldUpdateOperationsInput | string
    tmdbId?: IntFieldUpdateOperationsInput | number
    position?: IntFieldUpdateOperationsInput | number
    status?: EnumWatchlistItemStatusFieldUpdateOperationsInput | $Enums.WatchlistItemStatus
    note?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    creditNames?: NullableStringFieldUpdateOperationsInput | string | null
    year?: NullableIntFieldUpdateOperationsInput | number | null
    posterPath?: NullableStringFieldUpdateOperationsInput | string | null
    backdropPath?: NullableStringFieldUpdateOperationsInput | string | null
    overview?: NullableStringFieldUpdateOperationsInput | string | null
    watchedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    addedById?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WatchlistItemUncheckedUpdateManyWithoutWatchlistInput = {
    id?: StringFieldUpdateOperationsInput | string
    tmdbId?: IntFieldUpdateOperationsInput | number
    position?: IntFieldUpdateOperationsInput | number
    status?: EnumWatchlistItemStatusFieldUpdateOperationsInput | $Enums.WatchlistItemStatus
    note?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    creditNames?: NullableStringFieldUpdateOperationsInput | string | null
    year?: NullableIntFieldUpdateOperationsInput | number | null
    posterPath?: NullableStringFieldUpdateOperationsInput | string | null
    backdropPath?: NullableStringFieldUpdateOperationsInput | string | null
    overview?: NullableStringFieldUpdateOperationsInput | string | null
    watchedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    addedById?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}