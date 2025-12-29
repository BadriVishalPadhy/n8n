
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
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Session
 * 
 */
export type Session = $Result.DefaultSelection<Prisma.$SessionPayload>
/**
 * Model WorkFlow
 * 
 */
export type WorkFlow = $Result.DefaultSelection<Prisma.$WorkFlowPayload>
/**
 * Model TriggerNodes
 * 
 */
export type TriggerNodes = $Result.DefaultSelection<Prisma.$TriggerNodesPayload>
/**
 * Model AvailableTriggerNodes
 * 
 */
export type AvailableTriggerNodes = $Result.DefaultSelection<Prisma.$AvailableTriggerNodesPayload>
/**
 * Model ActionNodes
 * 
 */
export type ActionNodes = $Result.DefaultSelection<Prisma.$ActionNodesPayload>
/**
 * Model AvailableActionNodes
 * 
 */
export type AvailableActionNodes = $Result.DefaultSelection<Prisma.$AvailableActionNodesPayload>
/**
 * Model WorkFlowRun
 * 
 */
export type WorkFlowRun = $Result.DefaultSelection<Prisma.$WorkFlowRunPayload>
/**
 * Model WorkFlowOutBox
 * 
 */
export type WorkFlowOutBox = $Result.DefaultSelection<Prisma.$WorkFlowOutBoxPayload>

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
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
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

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


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs>;

  /**
   * `prisma.session`: Exposes CRUD operations for the **Session** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Sessions
    * const sessions = await prisma.session.findMany()
    * ```
    */
  get session(): Prisma.SessionDelegate<ExtArgs>;

  /**
   * `prisma.workFlow`: Exposes CRUD operations for the **WorkFlow** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more WorkFlows
    * const workFlows = await prisma.workFlow.findMany()
    * ```
    */
  get workFlow(): Prisma.WorkFlowDelegate<ExtArgs>;

  /**
   * `prisma.triggerNodes`: Exposes CRUD operations for the **TriggerNodes** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TriggerNodes
    * const triggerNodes = await prisma.triggerNodes.findMany()
    * ```
    */
  get triggerNodes(): Prisma.TriggerNodesDelegate<ExtArgs>;

  /**
   * `prisma.availableTriggerNodes`: Exposes CRUD operations for the **AvailableTriggerNodes** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AvailableTriggerNodes
    * const availableTriggerNodes = await prisma.availableTriggerNodes.findMany()
    * ```
    */
  get availableTriggerNodes(): Prisma.AvailableTriggerNodesDelegate<ExtArgs>;

  /**
   * `prisma.actionNodes`: Exposes CRUD operations for the **ActionNodes** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ActionNodes
    * const actionNodes = await prisma.actionNodes.findMany()
    * ```
    */
  get actionNodes(): Prisma.ActionNodesDelegate<ExtArgs>;

  /**
   * `prisma.availableActionNodes`: Exposes CRUD operations for the **AvailableActionNodes** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AvailableActionNodes
    * const availableActionNodes = await prisma.availableActionNodes.findMany()
    * ```
    */
  get availableActionNodes(): Prisma.AvailableActionNodesDelegate<ExtArgs>;

  /**
   * `prisma.workFlowRun`: Exposes CRUD operations for the **WorkFlowRun** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more WorkFlowRuns
    * const workFlowRuns = await prisma.workFlowRun.findMany()
    * ```
    */
  get workFlowRun(): Prisma.WorkFlowRunDelegate<ExtArgs>;

  /**
   * `prisma.workFlowOutBox`: Exposes CRUD operations for the **WorkFlowOutBox** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more WorkFlowOutBoxes
    * const workFlowOutBoxes = await prisma.workFlowOutBox.findMany()
    * ```
    */
  get workFlowOutBox(): Prisma.WorkFlowOutBoxDelegate<ExtArgs>;
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
   * Prisma Client JS version: 6.0.1
   * Query Engine version: 5dbef10bdbfb579e07d35cc85fb1518d357cb99e
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */


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
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
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
    User: 'User',
    Session: 'Session',
    WorkFlow: 'WorkFlow',
    TriggerNodes: 'TriggerNodes',
    AvailableTriggerNodes: 'AvailableTriggerNodes',
    ActionNodes: 'ActionNodes',
    AvailableActionNodes: 'AvailableActionNodes',
    WorkFlowRun: 'WorkFlowRun',
    WorkFlowOutBox: 'WorkFlowOutBox'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs, clientOptions: PrismaClientOptions }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], this['params']['clientOptions']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> = {
    meta: {
      modelProps: "user" | "session" | "workFlow" | "triggerNodes" | "availableTriggerNodes" | "actionNodes" | "availableActionNodes" | "workFlowRun" | "workFlowOutBox"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
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
      WorkFlow: {
        payload: Prisma.$WorkFlowPayload<ExtArgs>
        fields: Prisma.WorkFlowFieldRefs
        operations: {
          findUnique: {
            args: Prisma.WorkFlowFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkFlowPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.WorkFlowFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkFlowPayload>
          }
          findFirst: {
            args: Prisma.WorkFlowFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkFlowPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.WorkFlowFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkFlowPayload>
          }
          findMany: {
            args: Prisma.WorkFlowFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkFlowPayload>[]
          }
          create: {
            args: Prisma.WorkFlowCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkFlowPayload>
          }
          createMany: {
            args: Prisma.WorkFlowCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.WorkFlowCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkFlowPayload>[]
          }
          delete: {
            args: Prisma.WorkFlowDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkFlowPayload>
          }
          update: {
            args: Prisma.WorkFlowUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkFlowPayload>
          }
          deleteMany: {
            args: Prisma.WorkFlowDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.WorkFlowUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.WorkFlowUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkFlowPayload>
          }
          aggregate: {
            args: Prisma.WorkFlowAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateWorkFlow>
          }
          groupBy: {
            args: Prisma.WorkFlowGroupByArgs<ExtArgs>
            result: $Utils.Optional<WorkFlowGroupByOutputType>[]
          }
          count: {
            args: Prisma.WorkFlowCountArgs<ExtArgs>
            result: $Utils.Optional<WorkFlowCountAggregateOutputType> | number
          }
        }
      }
      TriggerNodes: {
        payload: Prisma.$TriggerNodesPayload<ExtArgs>
        fields: Prisma.TriggerNodesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TriggerNodesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TriggerNodesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TriggerNodesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TriggerNodesPayload>
          }
          findFirst: {
            args: Prisma.TriggerNodesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TriggerNodesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TriggerNodesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TriggerNodesPayload>
          }
          findMany: {
            args: Prisma.TriggerNodesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TriggerNodesPayload>[]
          }
          create: {
            args: Prisma.TriggerNodesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TriggerNodesPayload>
          }
          createMany: {
            args: Prisma.TriggerNodesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TriggerNodesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TriggerNodesPayload>[]
          }
          delete: {
            args: Prisma.TriggerNodesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TriggerNodesPayload>
          }
          update: {
            args: Prisma.TriggerNodesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TriggerNodesPayload>
          }
          deleteMany: {
            args: Prisma.TriggerNodesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TriggerNodesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.TriggerNodesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TriggerNodesPayload>
          }
          aggregate: {
            args: Prisma.TriggerNodesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTriggerNodes>
          }
          groupBy: {
            args: Prisma.TriggerNodesGroupByArgs<ExtArgs>
            result: $Utils.Optional<TriggerNodesGroupByOutputType>[]
          }
          count: {
            args: Prisma.TriggerNodesCountArgs<ExtArgs>
            result: $Utils.Optional<TriggerNodesCountAggregateOutputType> | number
          }
        }
      }
      AvailableTriggerNodes: {
        payload: Prisma.$AvailableTriggerNodesPayload<ExtArgs>
        fields: Prisma.AvailableTriggerNodesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AvailableTriggerNodesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvailableTriggerNodesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AvailableTriggerNodesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvailableTriggerNodesPayload>
          }
          findFirst: {
            args: Prisma.AvailableTriggerNodesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvailableTriggerNodesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AvailableTriggerNodesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvailableTriggerNodesPayload>
          }
          findMany: {
            args: Prisma.AvailableTriggerNodesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvailableTriggerNodesPayload>[]
          }
          create: {
            args: Prisma.AvailableTriggerNodesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvailableTriggerNodesPayload>
          }
          createMany: {
            args: Prisma.AvailableTriggerNodesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AvailableTriggerNodesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvailableTriggerNodesPayload>[]
          }
          delete: {
            args: Prisma.AvailableTriggerNodesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvailableTriggerNodesPayload>
          }
          update: {
            args: Prisma.AvailableTriggerNodesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvailableTriggerNodesPayload>
          }
          deleteMany: {
            args: Prisma.AvailableTriggerNodesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AvailableTriggerNodesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.AvailableTriggerNodesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvailableTriggerNodesPayload>
          }
          aggregate: {
            args: Prisma.AvailableTriggerNodesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAvailableTriggerNodes>
          }
          groupBy: {
            args: Prisma.AvailableTriggerNodesGroupByArgs<ExtArgs>
            result: $Utils.Optional<AvailableTriggerNodesGroupByOutputType>[]
          }
          count: {
            args: Prisma.AvailableTriggerNodesCountArgs<ExtArgs>
            result: $Utils.Optional<AvailableTriggerNodesCountAggregateOutputType> | number
          }
        }
      }
      ActionNodes: {
        payload: Prisma.$ActionNodesPayload<ExtArgs>
        fields: Prisma.ActionNodesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ActionNodesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActionNodesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ActionNodesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActionNodesPayload>
          }
          findFirst: {
            args: Prisma.ActionNodesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActionNodesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ActionNodesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActionNodesPayload>
          }
          findMany: {
            args: Prisma.ActionNodesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActionNodesPayload>[]
          }
          create: {
            args: Prisma.ActionNodesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActionNodesPayload>
          }
          createMany: {
            args: Prisma.ActionNodesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ActionNodesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActionNodesPayload>[]
          }
          delete: {
            args: Prisma.ActionNodesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActionNodesPayload>
          }
          update: {
            args: Prisma.ActionNodesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActionNodesPayload>
          }
          deleteMany: {
            args: Prisma.ActionNodesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ActionNodesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ActionNodesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActionNodesPayload>
          }
          aggregate: {
            args: Prisma.ActionNodesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateActionNodes>
          }
          groupBy: {
            args: Prisma.ActionNodesGroupByArgs<ExtArgs>
            result: $Utils.Optional<ActionNodesGroupByOutputType>[]
          }
          count: {
            args: Prisma.ActionNodesCountArgs<ExtArgs>
            result: $Utils.Optional<ActionNodesCountAggregateOutputType> | number
          }
        }
      }
      AvailableActionNodes: {
        payload: Prisma.$AvailableActionNodesPayload<ExtArgs>
        fields: Prisma.AvailableActionNodesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AvailableActionNodesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvailableActionNodesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AvailableActionNodesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvailableActionNodesPayload>
          }
          findFirst: {
            args: Prisma.AvailableActionNodesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvailableActionNodesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AvailableActionNodesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvailableActionNodesPayload>
          }
          findMany: {
            args: Prisma.AvailableActionNodesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvailableActionNodesPayload>[]
          }
          create: {
            args: Prisma.AvailableActionNodesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvailableActionNodesPayload>
          }
          createMany: {
            args: Prisma.AvailableActionNodesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AvailableActionNodesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvailableActionNodesPayload>[]
          }
          delete: {
            args: Prisma.AvailableActionNodesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvailableActionNodesPayload>
          }
          update: {
            args: Prisma.AvailableActionNodesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvailableActionNodesPayload>
          }
          deleteMany: {
            args: Prisma.AvailableActionNodesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AvailableActionNodesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.AvailableActionNodesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvailableActionNodesPayload>
          }
          aggregate: {
            args: Prisma.AvailableActionNodesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAvailableActionNodes>
          }
          groupBy: {
            args: Prisma.AvailableActionNodesGroupByArgs<ExtArgs>
            result: $Utils.Optional<AvailableActionNodesGroupByOutputType>[]
          }
          count: {
            args: Prisma.AvailableActionNodesCountArgs<ExtArgs>
            result: $Utils.Optional<AvailableActionNodesCountAggregateOutputType> | number
          }
        }
      }
      WorkFlowRun: {
        payload: Prisma.$WorkFlowRunPayload<ExtArgs>
        fields: Prisma.WorkFlowRunFieldRefs
        operations: {
          findUnique: {
            args: Prisma.WorkFlowRunFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkFlowRunPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.WorkFlowRunFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkFlowRunPayload>
          }
          findFirst: {
            args: Prisma.WorkFlowRunFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkFlowRunPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.WorkFlowRunFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkFlowRunPayload>
          }
          findMany: {
            args: Prisma.WorkFlowRunFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkFlowRunPayload>[]
          }
          create: {
            args: Prisma.WorkFlowRunCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkFlowRunPayload>
          }
          createMany: {
            args: Prisma.WorkFlowRunCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.WorkFlowRunCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkFlowRunPayload>[]
          }
          delete: {
            args: Prisma.WorkFlowRunDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkFlowRunPayload>
          }
          update: {
            args: Prisma.WorkFlowRunUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkFlowRunPayload>
          }
          deleteMany: {
            args: Prisma.WorkFlowRunDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.WorkFlowRunUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.WorkFlowRunUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkFlowRunPayload>
          }
          aggregate: {
            args: Prisma.WorkFlowRunAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateWorkFlowRun>
          }
          groupBy: {
            args: Prisma.WorkFlowRunGroupByArgs<ExtArgs>
            result: $Utils.Optional<WorkFlowRunGroupByOutputType>[]
          }
          count: {
            args: Prisma.WorkFlowRunCountArgs<ExtArgs>
            result: $Utils.Optional<WorkFlowRunCountAggregateOutputType> | number
          }
        }
      }
      WorkFlowOutBox: {
        payload: Prisma.$WorkFlowOutBoxPayload<ExtArgs>
        fields: Prisma.WorkFlowOutBoxFieldRefs
        operations: {
          findUnique: {
            args: Prisma.WorkFlowOutBoxFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkFlowOutBoxPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.WorkFlowOutBoxFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkFlowOutBoxPayload>
          }
          findFirst: {
            args: Prisma.WorkFlowOutBoxFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkFlowOutBoxPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.WorkFlowOutBoxFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkFlowOutBoxPayload>
          }
          findMany: {
            args: Prisma.WorkFlowOutBoxFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkFlowOutBoxPayload>[]
          }
          create: {
            args: Prisma.WorkFlowOutBoxCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkFlowOutBoxPayload>
          }
          createMany: {
            args: Prisma.WorkFlowOutBoxCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.WorkFlowOutBoxCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkFlowOutBoxPayload>[]
          }
          delete: {
            args: Prisma.WorkFlowOutBoxDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkFlowOutBoxPayload>
          }
          update: {
            args: Prisma.WorkFlowOutBoxUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkFlowOutBoxPayload>
          }
          deleteMany: {
            args: Prisma.WorkFlowOutBoxDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.WorkFlowOutBoxUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.WorkFlowOutBoxUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkFlowOutBoxPayload>
          }
          aggregate: {
            args: Prisma.WorkFlowOutBoxAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateWorkFlowOutBox>
          }
          groupBy: {
            args: Prisma.WorkFlowOutBoxGroupByArgs<ExtArgs>
            result: $Utils.Optional<WorkFlowOutBoxGroupByOutputType>[]
          }
          count: {
            args: Prisma.WorkFlowOutBoxCountArgs<ExtArgs>
            result: $Utils.Optional<WorkFlowOutBoxCountAggregateOutputType> | number
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
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
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
  }


  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

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

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

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
    sessions: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sessions?: boolean | UserCountOutputTypeCountSessionsArgs
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
  export type UserCountOutputTypeCountSessionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SessionWhereInput
  }


  /**
   * Count Type WorkFlowCountOutputType
   */

  export type WorkFlowCountOutputType = {
    actionsNodes: number
    workflowRun: number
  }

  export type WorkFlowCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    actionsNodes?: boolean | WorkFlowCountOutputTypeCountActionsNodesArgs
    workflowRun?: boolean | WorkFlowCountOutputTypeCountWorkflowRunArgs
  }

  // Custom InputTypes
  /**
   * WorkFlowCountOutputType without action
   */
  export type WorkFlowCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkFlowCountOutputType
     */
    select?: WorkFlowCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * WorkFlowCountOutputType without action
   */
  export type WorkFlowCountOutputTypeCountActionsNodesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ActionNodesWhereInput
  }

  /**
   * WorkFlowCountOutputType without action
   */
  export type WorkFlowCountOutputTypeCountWorkflowRunArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WorkFlowRunWhereInput
  }


  /**
   * Count Type AvailableTriggerNodesCountOutputType
   */

  export type AvailableTriggerNodesCountOutputType = {
    TriggerNode: number
  }

  export type AvailableTriggerNodesCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    TriggerNode?: boolean | AvailableTriggerNodesCountOutputTypeCountTriggerNodeArgs
  }

  // Custom InputTypes
  /**
   * AvailableTriggerNodesCountOutputType without action
   */
  export type AvailableTriggerNodesCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AvailableTriggerNodesCountOutputType
     */
    select?: AvailableTriggerNodesCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * AvailableTriggerNodesCountOutputType without action
   */
  export type AvailableTriggerNodesCountOutputTypeCountTriggerNodeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TriggerNodesWhereInput
  }


  /**
   * Count Type AvailableActionNodesCountOutputType
   */

  export type AvailableActionNodesCountOutputType = {
    actionNodes: number
  }

  export type AvailableActionNodesCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    actionNodes?: boolean | AvailableActionNodesCountOutputTypeCountActionNodesArgs
  }

  // Custom InputTypes
  /**
   * AvailableActionNodesCountOutputType without action
   */
  export type AvailableActionNodesCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AvailableActionNodesCountOutputType
     */
    select?: AvailableActionNodesCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * AvailableActionNodesCountOutputType without action
   */
  export type AvailableActionNodesCountOutputTypeCountActionNodesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ActionNodesWhereInput
  }


  /**
   * Models
   */

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
    email: string | null
    password: string | null
    name: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    email: string | null
    password: string | null
    name: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    email: number
    password: number
    name: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    email?: true
    password?: true
    name?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    email?: true
    password?: true
    name?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    email?: true
    password?: true
    name?: true
    createdAt?: true
    updatedAt?: true
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
    email: string
    password: string
    name: string | null
    createdAt: Date
    updatedAt: Date
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
    email?: boolean
    password?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    sessions?: boolean | User$sessionsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    email?: boolean
    password?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sessions?: boolean | User$sessionsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      sessions: Prisma.$SessionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      email: string
      password: string
      name: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
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
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

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
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

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
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

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
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

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
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany">>

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
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create">, never, ExtArgs>

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
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn">>

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
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete">, never, ExtArgs>

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
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update">, never, ExtArgs>

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
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


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
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    sessions<T extends User$sessionsArgs<ExtArgs> = {}>(args?: Subset<T, User$sessionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findMany"> | Null>
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
    readonly email: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
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
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
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
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
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
    sid: string | null
    userId: string | null
    expire: Date | null
  }

  export type SessionMaxAggregateOutputType = {
    sid: string | null
    userId: string | null
    expire: Date | null
  }

  export type SessionCountAggregateOutputType = {
    sid: number
    userId: number
    expire: number
    _all: number
  }


  export type SessionMinAggregateInputType = {
    sid?: true
    userId?: true
    expire?: true
  }

  export type SessionMaxAggregateInputType = {
    sid?: true
    userId?: true
    expire?: true
  }

  export type SessionCountAggregateInputType = {
    sid?: true
    userId?: true
    expire?: true
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
    sid: string
    userId: string
    expire: Date
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
    sid?: boolean
    userId?: boolean
    expire?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["session"]>

  export type SessionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    sid?: boolean
    userId?: boolean
    expire?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["session"]>

  export type SessionSelectScalar = {
    sid?: boolean
    userId?: boolean
    expire?: boolean
  }

  export type SessionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type SessionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $SessionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Session"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      sid: string
      userId: string
      expire: Date
    }, ExtArgs["result"]["session"]>
    composites: {}
  }

  type SessionGetPayload<S extends boolean | null | undefined | SessionDefaultArgs> = $Result.GetResult<Prisma.$SessionPayload, S>

  type SessionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<SessionFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: SessionCountAggregateInputType | true
    }

  export interface SessionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
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
    findUnique<T extends SessionFindUniqueArgs>(args: SelectSubset<T, SessionFindUniqueArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

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
    findUniqueOrThrow<T extends SessionFindUniqueOrThrowArgs>(args: SelectSubset<T, SessionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

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
    findFirst<T extends SessionFindFirstArgs>(args?: SelectSubset<T, SessionFindFirstArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

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
    findFirstOrThrow<T extends SessionFindFirstOrThrowArgs>(args?: SelectSubset<T, SessionFindFirstOrThrowArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

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
     * // Only select the `sid`
     * const sessionWithSidOnly = await prisma.session.findMany({ select: { sid: true } })
     * 
     */
    findMany<T extends SessionFindManyArgs>(args?: SelectSubset<T, SessionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findMany">>

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
    create<T extends SessionCreateArgs>(args: SelectSubset<T, SessionCreateArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "create">, never, ExtArgs>

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
     * // Create many Sessions and only return the `sid`
     * const sessionWithSidOnly = await prisma.session.createManyAndReturn({ 
     *   select: { sid: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SessionCreateManyAndReturnArgs>(args?: SelectSubset<T, SessionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "createManyAndReturn">>

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
    delete<T extends SessionDeleteArgs>(args: SelectSubset<T, SessionDeleteArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "delete">, never, ExtArgs>

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
    update<T extends SessionUpdateArgs>(args: SelectSubset<T, SessionUpdateArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "update">, never, ExtArgs>

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
    upsert<T extends SessionUpsertArgs>(args: SelectSubset<T, SessionUpsertArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


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
  export interface Prisma__SessionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
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
    readonly sid: FieldRef<"Session", 'String'>
    readonly userId: FieldRef<"Session", 'String'>
    readonly expire: FieldRef<"Session", 'DateTime'>
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
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
  }


  /**
   * Model WorkFlow
   */

  export type AggregateWorkFlow = {
    _count: WorkFlowCountAggregateOutputType | null
    _min: WorkFlowMinAggregateOutputType | null
    _max: WorkFlowMaxAggregateOutputType | null
  }

  export type WorkFlowMinAggregateOutputType = {
    id: string | null
  }

  export type WorkFlowMaxAggregateOutputType = {
    id: string | null
  }

  export type WorkFlowCountAggregateOutputType = {
    id: number
    _all: number
  }


  export type WorkFlowMinAggregateInputType = {
    id?: true
  }

  export type WorkFlowMaxAggregateInputType = {
    id?: true
  }

  export type WorkFlowCountAggregateInputType = {
    id?: true
    _all?: true
  }

  export type WorkFlowAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which WorkFlow to aggregate.
     */
    where?: WorkFlowWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WorkFlows to fetch.
     */
    orderBy?: WorkFlowOrderByWithRelationInput | WorkFlowOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: WorkFlowWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WorkFlows from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WorkFlows.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned WorkFlows
    **/
    _count?: true | WorkFlowCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: WorkFlowMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: WorkFlowMaxAggregateInputType
  }

  export type GetWorkFlowAggregateType<T extends WorkFlowAggregateArgs> = {
        [P in keyof T & keyof AggregateWorkFlow]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateWorkFlow[P]>
      : GetScalarType<T[P], AggregateWorkFlow[P]>
  }




  export type WorkFlowGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WorkFlowWhereInput
    orderBy?: WorkFlowOrderByWithAggregationInput | WorkFlowOrderByWithAggregationInput[]
    by: WorkFlowScalarFieldEnum[] | WorkFlowScalarFieldEnum
    having?: WorkFlowScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: WorkFlowCountAggregateInputType | true
    _min?: WorkFlowMinAggregateInputType
    _max?: WorkFlowMaxAggregateInputType
  }

  export type WorkFlowGroupByOutputType = {
    id: string
    _count: WorkFlowCountAggregateOutputType | null
    _min: WorkFlowMinAggregateOutputType | null
    _max: WorkFlowMaxAggregateOutputType | null
  }

  type GetWorkFlowGroupByPayload<T extends WorkFlowGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<WorkFlowGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof WorkFlowGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], WorkFlowGroupByOutputType[P]>
            : GetScalarType<T[P], WorkFlowGroupByOutputType[P]>
        }
      >
    >


  export type WorkFlowSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    triggerNodes?: boolean | WorkFlow$triggerNodesArgs<ExtArgs>
    actionsNodes?: boolean | WorkFlow$actionsNodesArgs<ExtArgs>
    workflowRun?: boolean | WorkFlow$workflowRunArgs<ExtArgs>
    _count?: boolean | WorkFlowCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["workFlow"]>

  export type WorkFlowSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
  }, ExtArgs["result"]["workFlow"]>

  export type WorkFlowSelectScalar = {
    id?: boolean
  }

  export type WorkFlowInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    triggerNodes?: boolean | WorkFlow$triggerNodesArgs<ExtArgs>
    actionsNodes?: boolean | WorkFlow$actionsNodesArgs<ExtArgs>
    workflowRun?: boolean | WorkFlow$workflowRunArgs<ExtArgs>
    _count?: boolean | WorkFlowCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type WorkFlowIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $WorkFlowPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "WorkFlow"
    objects: {
      triggerNodes: Prisma.$TriggerNodesPayload<ExtArgs> | null
      actionsNodes: Prisma.$ActionNodesPayload<ExtArgs>[]
      workflowRun: Prisma.$WorkFlowRunPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
    }, ExtArgs["result"]["workFlow"]>
    composites: {}
  }

  type WorkFlowGetPayload<S extends boolean | null | undefined | WorkFlowDefaultArgs> = $Result.GetResult<Prisma.$WorkFlowPayload, S>

  type WorkFlowCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<WorkFlowFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: WorkFlowCountAggregateInputType | true
    }

  export interface WorkFlowDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['WorkFlow'], meta: { name: 'WorkFlow' } }
    /**
     * Find zero or one WorkFlow that matches the filter.
     * @param {WorkFlowFindUniqueArgs} args - Arguments to find a WorkFlow
     * @example
     * // Get one WorkFlow
     * const workFlow = await prisma.workFlow.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends WorkFlowFindUniqueArgs>(args: SelectSubset<T, WorkFlowFindUniqueArgs<ExtArgs>>): Prisma__WorkFlowClient<$Result.GetResult<Prisma.$WorkFlowPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one WorkFlow that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {WorkFlowFindUniqueOrThrowArgs} args - Arguments to find a WorkFlow
     * @example
     * // Get one WorkFlow
     * const workFlow = await prisma.workFlow.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends WorkFlowFindUniqueOrThrowArgs>(args: SelectSubset<T, WorkFlowFindUniqueOrThrowArgs<ExtArgs>>): Prisma__WorkFlowClient<$Result.GetResult<Prisma.$WorkFlowPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first WorkFlow that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkFlowFindFirstArgs} args - Arguments to find a WorkFlow
     * @example
     * // Get one WorkFlow
     * const workFlow = await prisma.workFlow.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends WorkFlowFindFirstArgs>(args?: SelectSubset<T, WorkFlowFindFirstArgs<ExtArgs>>): Prisma__WorkFlowClient<$Result.GetResult<Prisma.$WorkFlowPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first WorkFlow that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkFlowFindFirstOrThrowArgs} args - Arguments to find a WorkFlow
     * @example
     * // Get one WorkFlow
     * const workFlow = await prisma.workFlow.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends WorkFlowFindFirstOrThrowArgs>(args?: SelectSubset<T, WorkFlowFindFirstOrThrowArgs<ExtArgs>>): Prisma__WorkFlowClient<$Result.GetResult<Prisma.$WorkFlowPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more WorkFlows that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkFlowFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all WorkFlows
     * const workFlows = await prisma.workFlow.findMany()
     * 
     * // Get first 10 WorkFlows
     * const workFlows = await prisma.workFlow.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const workFlowWithIdOnly = await prisma.workFlow.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends WorkFlowFindManyArgs>(args?: SelectSubset<T, WorkFlowFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WorkFlowPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a WorkFlow.
     * @param {WorkFlowCreateArgs} args - Arguments to create a WorkFlow.
     * @example
     * // Create one WorkFlow
     * const WorkFlow = await prisma.workFlow.create({
     *   data: {
     *     // ... data to create a WorkFlow
     *   }
     * })
     * 
     */
    create<T extends WorkFlowCreateArgs>(args: SelectSubset<T, WorkFlowCreateArgs<ExtArgs>>): Prisma__WorkFlowClient<$Result.GetResult<Prisma.$WorkFlowPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many WorkFlows.
     * @param {WorkFlowCreateManyArgs} args - Arguments to create many WorkFlows.
     * @example
     * // Create many WorkFlows
     * const workFlow = await prisma.workFlow.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends WorkFlowCreateManyArgs>(args?: SelectSubset<T, WorkFlowCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many WorkFlows and returns the data saved in the database.
     * @param {WorkFlowCreateManyAndReturnArgs} args - Arguments to create many WorkFlows.
     * @example
     * // Create many WorkFlows
     * const workFlow = await prisma.workFlow.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many WorkFlows and only return the `id`
     * const workFlowWithIdOnly = await prisma.workFlow.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends WorkFlowCreateManyAndReturnArgs>(args?: SelectSubset<T, WorkFlowCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WorkFlowPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a WorkFlow.
     * @param {WorkFlowDeleteArgs} args - Arguments to delete one WorkFlow.
     * @example
     * // Delete one WorkFlow
     * const WorkFlow = await prisma.workFlow.delete({
     *   where: {
     *     // ... filter to delete one WorkFlow
     *   }
     * })
     * 
     */
    delete<T extends WorkFlowDeleteArgs>(args: SelectSubset<T, WorkFlowDeleteArgs<ExtArgs>>): Prisma__WorkFlowClient<$Result.GetResult<Prisma.$WorkFlowPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one WorkFlow.
     * @param {WorkFlowUpdateArgs} args - Arguments to update one WorkFlow.
     * @example
     * // Update one WorkFlow
     * const workFlow = await prisma.workFlow.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends WorkFlowUpdateArgs>(args: SelectSubset<T, WorkFlowUpdateArgs<ExtArgs>>): Prisma__WorkFlowClient<$Result.GetResult<Prisma.$WorkFlowPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more WorkFlows.
     * @param {WorkFlowDeleteManyArgs} args - Arguments to filter WorkFlows to delete.
     * @example
     * // Delete a few WorkFlows
     * const { count } = await prisma.workFlow.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends WorkFlowDeleteManyArgs>(args?: SelectSubset<T, WorkFlowDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more WorkFlows.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkFlowUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many WorkFlows
     * const workFlow = await prisma.workFlow.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends WorkFlowUpdateManyArgs>(args: SelectSubset<T, WorkFlowUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one WorkFlow.
     * @param {WorkFlowUpsertArgs} args - Arguments to update or create a WorkFlow.
     * @example
     * // Update or create a WorkFlow
     * const workFlow = await prisma.workFlow.upsert({
     *   create: {
     *     // ... data to create a WorkFlow
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the WorkFlow we want to update
     *   }
     * })
     */
    upsert<T extends WorkFlowUpsertArgs>(args: SelectSubset<T, WorkFlowUpsertArgs<ExtArgs>>): Prisma__WorkFlowClient<$Result.GetResult<Prisma.$WorkFlowPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of WorkFlows.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkFlowCountArgs} args - Arguments to filter WorkFlows to count.
     * @example
     * // Count the number of WorkFlows
     * const count = await prisma.workFlow.count({
     *   where: {
     *     // ... the filter for the WorkFlows we want to count
     *   }
     * })
    **/
    count<T extends WorkFlowCountArgs>(
      args?: Subset<T, WorkFlowCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], WorkFlowCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a WorkFlow.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkFlowAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends WorkFlowAggregateArgs>(args: Subset<T, WorkFlowAggregateArgs>): Prisma.PrismaPromise<GetWorkFlowAggregateType<T>>

    /**
     * Group by WorkFlow.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkFlowGroupByArgs} args - Group by arguments.
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
      T extends WorkFlowGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: WorkFlowGroupByArgs['orderBy'] }
        : { orderBy?: WorkFlowGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, WorkFlowGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetWorkFlowGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the WorkFlow model
   */
  readonly fields: WorkFlowFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for WorkFlow.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__WorkFlowClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    triggerNodes<T extends WorkFlow$triggerNodesArgs<ExtArgs> = {}>(args?: Subset<T, WorkFlow$triggerNodesArgs<ExtArgs>>): Prisma__TriggerNodesClient<$Result.GetResult<Prisma.$TriggerNodesPayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
    actionsNodes<T extends WorkFlow$actionsNodesArgs<ExtArgs> = {}>(args?: Subset<T, WorkFlow$actionsNodesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ActionNodesPayload<ExtArgs>, T, "findMany"> | Null>
    workflowRun<T extends WorkFlow$workflowRunArgs<ExtArgs> = {}>(args?: Subset<T, WorkFlow$workflowRunArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WorkFlowRunPayload<ExtArgs>, T, "findMany"> | Null>
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
   * Fields of the WorkFlow model
   */ 
  interface WorkFlowFieldRefs {
    readonly id: FieldRef<"WorkFlow", 'String'>
  }
    

  // Custom InputTypes
  /**
   * WorkFlow findUnique
   */
  export type WorkFlowFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkFlow
     */
    select?: WorkFlowSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkFlowInclude<ExtArgs> | null
    /**
     * Filter, which WorkFlow to fetch.
     */
    where: WorkFlowWhereUniqueInput
  }

  /**
   * WorkFlow findUniqueOrThrow
   */
  export type WorkFlowFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkFlow
     */
    select?: WorkFlowSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkFlowInclude<ExtArgs> | null
    /**
     * Filter, which WorkFlow to fetch.
     */
    where: WorkFlowWhereUniqueInput
  }

  /**
   * WorkFlow findFirst
   */
  export type WorkFlowFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkFlow
     */
    select?: WorkFlowSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkFlowInclude<ExtArgs> | null
    /**
     * Filter, which WorkFlow to fetch.
     */
    where?: WorkFlowWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WorkFlows to fetch.
     */
    orderBy?: WorkFlowOrderByWithRelationInput | WorkFlowOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for WorkFlows.
     */
    cursor?: WorkFlowWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WorkFlows from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WorkFlows.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of WorkFlows.
     */
    distinct?: WorkFlowScalarFieldEnum | WorkFlowScalarFieldEnum[]
  }

  /**
   * WorkFlow findFirstOrThrow
   */
  export type WorkFlowFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkFlow
     */
    select?: WorkFlowSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkFlowInclude<ExtArgs> | null
    /**
     * Filter, which WorkFlow to fetch.
     */
    where?: WorkFlowWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WorkFlows to fetch.
     */
    orderBy?: WorkFlowOrderByWithRelationInput | WorkFlowOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for WorkFlows.
     */
    cursor?: WorkFlowWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WorkFlows from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WorkFlows.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of WorkFlows.
     */
    distinct?: WorkFlowScalarFieldEnum | WorkFlowScalarFieldEnum[]
  }

  /**
   * WorkFlow findMany
   */
  export type WorkFlowFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkFlow
     */
    select?: WorkFlowSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkFlowInclude<ExtArgs> | null
    /**
     * Filter, which WorkFlows to fetch.
     */
    where?: WorkFlowWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WorkFlows to fetch.
     */
    orderBy?: WorkFlowOrderByWithRelationInput | WorkFlowOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing WorkFlows.
     */
    cursor?: WorkFlowWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WorkFlows from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WorkFlows.
     */
    skip?: number
    distinct?: WorkFlowScalarFieldEnum | WorkFlowScalarFieldEnum[]
  }

  /**
   * WorkFlow create
   */
  export type WorkFlowCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkFlow
     */
    select?: WorkFlowSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkFlowInclude<ExtArgs> | null
    /**
     * The data needed to create a WorkFlow.
     */
    data?: XOR<WorkFlowCreateInput, WorkFlowUncheckedCreateInput>
  }

  /**
   * WorkFlow createMany
   */
  export type WorkFlowCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many WorkFlows.
     */
    data: WorkFlowCreateManyInput | WorkFlowCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * WorkFlow createManyAndReturn
   */
  export type WorkFlowCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkFlow
     */
    select?: WorkFlowSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many WorkFlows.
     */
    data: WorkFlowCreateManyInput | WorkFlowCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * WorkFlow update
   */
  export type WorkFlowUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkFlow
     */
    select?: WorkFlowSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkFlowInclude<ExtArgs> | null
    /**
     * The data needed to update a WorkFlow.
     */
    data: XOR<WorkFlowUpdateInput, WorkFlowUncheckedUpdateInput>
    /**
     * Choose, which WorkFlow to update.
     */
    where: WorkFlowWhereUniqueInput
  }

  /**
   * WorkFlow updateMany
   */
  export type WorkFlowUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update WorkFlows.
     */
    data: XOR<WorkFlowUpdateManyMutationInput, WorkFlowUncheckedUpdateManyInput>
    /**
     * Filter which WorkFlows to update
     */
    where?: WorkFlowWhereInput
  }

  /**
   * WorkFlow upsert
   */
  export type WorkFlowUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkFlow
     */
    select?: WorkFlowSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkFlowInclude<ExtArgs> | null
    /**
     * The filter to search for the WorkFlow to update in case it exists.
     */
    where: WorkFlowWhereUniqueInput
    /**
     * In case the WorkFlow found by the `where` argument doesn't exist, create a new WorkFlow with this data.
     */
    create: XOR<WorkFlowCreateInput, WorkFlowUncheckedCreateInput>
    /**
     * In case the WorkFlow was found with the provided `where` argument, update it with this data.
     */
    update: XOR<WorkFlowUpdateInput, WorkFlowUncheckedUpdateInput>
  }

  /**
   * WorkFlow delete
   */
  export type WorkFlowDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkFlow
     */
    select?: WorkFlowSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkFlowInclude<ExtArgs> | null
    /**
     * Filter which WorkFlow to delete.
     */
    where: WorkFlowWhereUniqueInput
  }

  /**
   * WorkFlow deleteMany
   */
  export type WorkFlowDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which WorkFlows to delete
     */
    where?: WorkFlowWhereInput
  }

  /**
   * WorkFlow.triggerNodes
   */
  export type WorkFlow$triggerNodesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TriggerNodes
     */
    select?: TriggerNodesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TriggerNodesInclude<ExtArgs> | null
    where?: TriggerNodesWhereInput
  }

  /**
   * WorkFlow.actionsNodes
   */
  export type WorkFlow$actionsNodesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActionNodes
     */
    select?: ActionNodesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActionNodesInclude<ExtArgs> | null
    where?: ActionNodesWhereInput
    orderBy?: ActionNodesOrderByWithRelationInput | ActionNodesOrderByWithRelationInput[]
    cursor?: ActionNodesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ActionNodesScalarFieldEnum | ActionNodesScalarFieldEnum[]
  }

  /**
   * WorkFlow.workflowRun
   */
  export type WorkFlow$workflowRunArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkFlowRun
     */
    select?: WorkFlowRunSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkFlowRunInclude<ExtArgs> | null
    where?: WorkFlowRunWhereInput
    orderBy?: WorkFlowRunOrderByWithRelationInput | WorkFlowRunOrderByWithRelationInput[]
    cursor?: WorkFlowRunWhereUniqueInput
    take?: number
    skip?: number
    distinct?: WorkFlowRunScalarFieldEnum | WorkFlowRunScalarFieldEnum[]
  }

  /**
   * WorkFlow without action
   */
  export type WorkFlowDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkFlow
     */
    select?: WorkFlowSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkFlowInclude<ExtArgs> | null
  }


  /**
   * Model TriggerNodes
   */

  export type AggregateTriggerNodes = {
    _count: TriggerNodesCountAggregateOutputType | null
    _min: TriggerNodesMinAggregateOutputType | null
    _max: TriggerNodesMaxAggregateOutputType | null
  }

  export type TriggerNodesMinAggregateOutputType = {
    id: string | null
    workflowId: string | null
    TriggerNodeId: string | null
  }

  export type TriggerNodesMaxAggregateOutputType = {
    id: string | null
    workflowId: string | null
    TriggerNodeId: string | null
  }

  export type TriggerNodesCountAggregateOutputType = {
    id: number
    workflowId: number
    TriggerNodeId: number
    _all: number
  }


  export type TriggerNodesMinAggregateInputType = {
    id?: true
    workflowId?: true
    TriggerNodeId?: true
  }

  export type TriggerNodesMaxAggregateInputType = {
    id?: true
    workflowId?: true
    TriggerNodeId?: true
  }

  export type TriggerNodesCountAggregateInputType = {
    id?: true
    workflowId?: true
    TriggerNodeId?: true
    _all?: true
  }

  export type TriggerNodesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TriggerNodes to aggregate.
     */
    where?: TriggerNodesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TriggerNodes to fetch.
     */
    orderBy?: TriggerNodesOrderByWithRelationInput | TriggerNodesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TriggerNodesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TriggerNodes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TriggerNodes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TriggerNodes
    **/
    _count?: true | TriggerNodesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TriggerNodesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TriggerNodesMaxAggregateInputType
  }

  export type GetTriggerNodesAggregateType<T extends TriggerNodesAggregateArgs> = {
        [P in keyof T & keyof AggregateTriggerNodes]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTriggerNodes[P]>
      : GetScalarType<T[P], AggregateTriggerNodes[P]>
  }




  export type TriggerNodesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TriggerNodesWhereInput
    orderBy?: TriggerNodesOrderByWithAggregationInput | TriggerNodesOrderByWithAggregationInput[]
    by: TriggerNodesScalarFieldEnum[] | TriggerNodesScalarFieldEnum
    having?: TriggerNodesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TriggerNodesCountAggregateInputType | true
    _min?: TriggerNodesMinAggregateInputType
    _max?: TriggerNodesMaxAggregateInputType
  }

  export type TriggerNodesGroupByOutputType = {
    id: string
    workflowId: string
    TriggerNodeId: string
    _count: TriggerNodesCountAggregateOutputType | null
    _min: TriggerNodesMinAggregateOutputType | null
    _max: TriggerNodesMaxAggregateOutputType | null
  }

  type GetTriggerNodesGroupByPayload<T extends TriggerNodesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TriggerNodesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TriggerNodesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TriggerNodesGroupByOutputType[P]>
            : GetScalarType<T[P], TriggerNodesGroupByOutputType[P]>
        }
      >
    >


  export type TriggerNodesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    workflowId?: boolean
    TriggerNodeId?: boolean
    workflow?: boolean | WorkFlowDefaultArgs<ExtArgs>
    availableTriggerNodes?: boolean | AvailableTriggerNodesDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["triggerNodes"]>

  export type TriggerNodesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    workflowId?: boolean
    TriggerNodeId?: boolean
    workflow?: boolean | WorkFlowDefaultArgs<ExtArgs>
    availableTriggerNodes?: boolean | AvailableTriggerNodesDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["triggerNodes"]>

  export type TriggerNodesSelectScalar = {
    id?: boolean
    workflowId?: boolean
    TriggerNodeId?: boolean
  }

  export type TriggerNodesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    workflow?: boolean | WorkFlowDefaultArgs<ExtArgs>
    availableTriggerNodes?: boolean | AvailableTriggerNodesDefaultArgs<ExtArgs>
  }
  export type TriggerNodesIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    workflow?: boolean | WorkFlowDefaultArgs<ExtArgs>
    availableTriggerNodes?: boolean | AvailableTriggerNodesDefaultArgs<ExtArgs>
  }

  export type $TriggerNodesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "TriggerNodes"
    objects: {
      workflow: Prisma.$WorkFlowPayload<ExtArgs>
      availableTriggerNodes: Prisma.$AvailableTriggerNodesPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      workflowId: string
      TriggerNodeId: string
    }, ExtArgs["result"]["triggerNodes"]>
    composites: {}
  }

  type TriggerNodesGetPayload<S extends boolean | null | undefined | TriggerNodesDefaultArgs> = $Result.GetResult<Prisma.$TriggerNodesPayload, S>

  type TriggerNodesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<TriggerNodesFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: TriggerNodesCountAggregateInputType | true
    }

  export interface TriggerNodesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['TriggerNodes'], meta: { name: 'TriggerNodes' } }
    /**
     * Find zero or one TriggerNodes that matches the filter.
     * @param {TriggerNodesFindUniqueArgs} args - Arguments to find a TriggerNodes
     * @example
     * // Get one TriggerNodes
     * const triggerNodes = await prisma.triggerNodes.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TriggerNodesFindUniqueArgs>(args: SelectSubset<T, TriggerNodesFindUniqueArgs<ExtArgs>>): Prisma__TriggerNodesClient<$Result.GetResult<Prisma.$TriggerNodesPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one TriggerNodes that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {TriggerNodesFindUniqueOrThrowArgs} args - Arguments to find a TriggerNodes
     * @example
     * // Get one TriggerNodes
     * const triggerNodes = await prisma.triggerNodes.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TriggerNodesFindUniqueOrThrowArgs>(args: SelectSubset<T, TriggerNodesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TriggerNodesClient<$Result.GetResult<Prisma.$TriggerNodesPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first TriggerNodes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TriggerNodesFindFirstArgs} args - Arguments to find a TriggerNodes
     * @example
     * // Get one TriggerNodes
     * const triggerNodes = await prisma.triggerNodes.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TriggerNodesFindFirstArgs>(args?: SelectSubset<T, TriggerNodesFindFirstArgs<ExtArgs>>): Prisma__TriggerNodesClient<$Result.GetResult<Prisma.$TriggerNodesPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first TriggerNodes that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TriggerNodesFindFirstOrThrowArgs} args - Arguments to find a TriggerNodes
     * @example
     * // Get one TriggerNodes
     * const triggerNodes = await prisma.triggerNodes.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TriggerNodesFindFirstOrThrowArgs>(args?: SelectSubset<T, TriggerNodesFindFirstOrThrowArgs<ExtArgs>>): Prisma__TriggerNodesClient<$Result.GetResult<Prisma.$TriggerNodesPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more TriggerNodes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TriggerNodesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TriggerNodes
     * const triggerNodes = await prisma.triggerNodes.findMany()
     * 
     * // Get first 10 TriggerNodes
     * const triggerNodes = await prisma.triggerNodes.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const triggerNodesWithIdOnly = await prisma.triggerNodes.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TriggerNodesFindManyArgs>(args?: SelectSubset<T, TriggerNodesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TriggerNodesPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a TriggerNodes.
     * @param {TriggerNodesCreateArgs} args - Arguments to create a TriggerNodes.
     * @example
     * // Create one TriggerNodes
     * const TriggerNodes = await prisma.triggerNodes.create({
     *   data: {
     *     // ... data to create a TriggerNodes
     *   }
     * })
     * 
     */
    create<T extends TriggerNodesCreateArgs>(args: SelectSubset<T, TriggerNodesCreateArgs<ExtArgs>>): Prisma__TriggerNodesClient<$Result.GetResult<Prisma.$TriggerNodesPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many TriggerNodes.
     * @param {TriggerNodesCreateManyArgs} args - Arguments to create many TriggerNodes.
     * @example
     * // Create many TriggerNodes
     * const triggerNodes = await prisma.triggerNodes.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TriggerNodesCreateManyArgs>(args?: SelectSubset<T, TriggerNodesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many TriggerNodes and returns the data saved in the database.
     * @param {TriggerNodesCreateManyAndReturnArgs} args - Arguments to create many TriggerNodes.
     * @example
     * // Create many TriggerNodes
     * const triggerNodes = await prisma.triggerNodes.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many TriggerNodes and only return the `id`
     * const triggerNodesWithIdOnly = await prisma.triggerNodes.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TriggerNodesCreateManyAndReturnArgs>(args?: SelectSubset<T, TriggerNodesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TriggerNodesPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a TriggerNodes.
     * @param {TriggerNodesDeleteArgs} args - Arguments to delete one TriggerNodes.
     * @example
     * // Delete one TriggerNodes
     * const TriggerNodes = await prisma.triggerNodes.delete({
     *   where: {
     *     // ... filter to delete one TriggerNodes
     *   }
     * })
     * 
     */
    delete<T extends TriggerNodesDeleteArgs>(args: SelectSubset<T, TriggerNodesDeleteArgs<ExtArgs>>): Prisma__TriggerNodesClient<$Result.GetResult<Prisma.$TriggerNodesPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one TriggerNodes.
     * @param {TriggerNodesUpdateArgs} args - Arguments to update one TriggerNodes.
     * @example
     * // Update one TriggerNodes
     * const triggerNodes = await prisma.triggerNodes.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TriggerNodesUpdateArgs>(args: SelectSubset<T, TriggerNodesUpdateArgs<ExtArgs>>): Prisma__TriggerNodesClient<$Result.GetResult<Prisma.$TriggerNodesPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more TriggerNodes.
     * @param {TriggerNodesDeleteManyArgs} args - Arguments to filter TriggerNodes to delete.
     * @example
     * // Delete a few TriggerNodes
     * const { count } = await prisma.triggerNodes.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TriggerNodesDeleteManyArgs>(args?: SelectSubset<T, TriggerNodesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TriggerNodes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TriggerNodesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TriggerNodes
     * const triggerNodes = await prisma.triggerNodes.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TriggerNodesUpdateManyArgs>(args: SelectSubset<T, TriggerNodesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one TriggerNodes.
     * @param {TriggerNodesUpsertArgs} args - Arguments to update or create a TriggerNodes.
     * @example
     * // Update or create a TriggerNodes
     * const triggerNodes = await prisma.triggerNodes.upsert({
     *   create: {
     *     // ... data to create a TriggerNodes
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TriggerNodes we want to update
     *   }
     * })
     */
    upsert<T extends TriggerNodesUpsertArgs>(args: SelectSubset<T, TriggerNodesUpsertArgs<ExtArgs>>): Prisma__TriggerNodesClient<$Result.GetResult<Prisma.$TriggerNodesPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of TriggerNodes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TriggerNodesCountArgs} args - Arguments to filter TriggerNodes to count.
     * @example
     * // Count the number of TriggerNodes
     * const count = await prisma.triggerNodes.count({
     *   where: {
     *     // ... the filter for the TriggerNodes we want to count
     *   }
     * })
    **/
    count<T extends TriggerNodesCountArgs>(
      args?: Subset<T, TriggerNodesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TriggerNodesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TriggerNodes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TriggerNodesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TriggerNodesAggregateArgs>(args: Subset<T, TriggerNodesAggregateArgs>): Prisma.PrismaPromise<GetTriggerNodesAggregateType<T>>

    /**
     * Group by TriggerNodes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TriggerNodesGroupByArgs} args - Group by arguments.
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
      T extends TriggerNodesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TriggerNodesGroupByArgs['orderBy'] }
        : { orderBy?: TriggerNodesGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, TriggerNodesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTriggerNodesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the TriggerNodes model
   */
  readonly fields: TriggerNodesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for TriggerNodes.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TriggerNodesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    workflow<T extends WorkFlowDefaultArgs<ExtArgs> = {}>(args?: Subset<T, WorkFlowDefaultArgs<ExtArgs>>): Prisma__WorkFlowClient<$Result.GetResult<Prisma.$WorkFlowPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    availableTriggerNodes<T extends AvailableTriggerNodesDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AvailableTriggerNodesDefaultArgs<ExtArgs>>): Prisma__AvailableTriggerNodesClient<$Result.GetResult<Prisma.$AvailableTriggerNodesPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
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
   * Fields of the TriggerNodes model
   */ 
  interface TriggerNodesFieldRefs {
    readonly id: FieldRef<"TriggerNodes", 'String'>
    readonly workflowId: FieldRef<"TriggerNodes", 'String'>
    readonly TriggerNodeId: FieldRef<"TriggerNodes", 'String'>
  }
    

  // Custom InputTypes
  /**
   * TriggerNodes findUnique
   */
  export type TriggerNodesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TriggerNodes
     */
    select?: TriggerNodesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TriggerNodesInclude<ExtArgs> | null
    /**
     * Filter, which TriggerNodes to fetch.
     */
    where: TriggerNodesWhereUniqueInput
  }

  /**
   * TriggerNodes findUniqueOrThrow
   */
  export type TriggerNodesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TriggerNodes
     */
    select?: TriggerNodesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TriggerNodesInclude<ExtArgs> | null
    /**
     * Filter, which TriggerNodes to fetch.
     */
    where: TriggerNodesWhereUniqueInput
  }

  /**
   * TriggerNodes findFirst
   */
  export type TriggerNodesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TriggerNodes
     */
    select?: TriggerNodesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TriggerNodesInclude<ExtArgs> | null
    /**
     * Filter, which TriggerNodes to fetch.
     */
    where?: TriggerNodesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TriggerNodes to fetch.
     */
    orderBy?: TriggerNodesOrderByWithRelationInput | TriggerNodesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TriggerNodes.
     */
    cursor?: TriggerNodesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TriggerNodes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TriggerNodes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TriggerNodes.
     */
    distinct?: TriggerNodesScalarFieldEnum | TriggerNodesScalarFieldEnum[]
  }

  /**
   * TriggerNodes findFirstOrThrow
   */
  export type TriggerNodesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TriggerNodes
     */
    select?: TriggerNodesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TriggerNodesInclude<ExtArgs> | null
    /**
     * Filter, which TriggerNodes to fetch.
     */
    where?: TriggerNodesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TriggerNodes to fetch.
     */
    orderBy?: TriggerNodesOrderByWithRelationInput | TriggerNodesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TriggerNodes.
     */
    cursor?: TriggerNodesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TriggerNodes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TriggerNodes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TriggerNodes.
     */
    distinct?: TriggerNodesScalarFieldEnum | TriggerNodesScalarFieldEnum[]
  }

  /**
   * TriggerNodes findMany
   */
  export type TriggerNodesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TriggerNodes
     */
    select?: TriggerNodesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TriggerNodesInclude<ExtArgs> | null
    /**
     * Filter, which TriggerNodes to fetch.
     */
    where?: TriggerNodesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TriggerNodes to fetch.
     */
    orderBy?: TriggerNodesOrderByWithRelationInput | TriggerNodesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TriggerNodes.
     */
    cursor?: TriggerNodesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TriggerNodes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TriggerNodes.
     */
    skip?: number
    distinct?: TriggerNodesScalarFieldEnum | TriggerNodesScalarFieldEnum[]
  }

  /**
   * TriggerNodes create
   */
  export type TriggerNodesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TriggerNodes
     */
    select?: TriggerNodesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TriggerNodesInclude<ExtArgs> | null
    /**
     * The data needed to create a TriggerNodes.
     */
    data: XOR<TriggerNodesCreateInput, TriggerNodesUncheckedCreateInput>
  }

  /**
   * TriggerNodes createMany
   */
  export type TriggerNodesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many TriggerNodes.
     */
    data: TriggerNodesCreateManyInput | TriggerNodesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * TriggerNodes createManyAndReturn
   */
  export type TriggerNodesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TriggerNodes
     */
    select?: TriggerNodesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many TriggerNodes.
     */
    data: TriggerNodesCreateManyInput | TriggerNodesCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TriggerNodesIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * TriggerNodes update
   */
  export type TriggerNodesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TriggerNodes
     */
    select?: TriggerNodesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TriggerNodesInclude<ExtArgs> | null
    /**
     * The data needed to update a TriggerNodes.
     */
    data: XOR<TriggerNodesUpdateInput, TriggerNodesUncheckedUpdateInput>
    /**
     * Choose, which TriggerNodes to update.
     */
    where: TriggerNodesWhereUniqueInput
  }

  /**
   * TriggerNodes updateMany
   */
  export type TriggerNodesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update TriggerNodes.
     */
    data: XOR<TriggerNodesUpdateManyMutationInput, TriggerNodesUncheckedUpdateManyInput>
    /**
     * Filter which TriggerNodes to update
     */
    where?: TriggerNodesWhereInput
  }

  /**
   * TriggerNodes upsert
   */
  export type TriggerNodesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TriggerNodes
     */
    select?: TriggerNodesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TriggerNodesInclude<ExtArgs> | null
    /**
     * The filter to search for the TriggerNodes to update in case it exists.
     */
    where: TriggerNodesWhereUniqueInput
    /**
     * In case the TriggerNodes found by the `where` argument doesn't exist, create a new TriggerNodes with this data.
     */
    create: XOR<TriggerNodesCreateInput, TriggerNodesUncheckedCreateInput>
    /**
     * In case the TriggerNodes was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TriggerNodesUpdateInput, TriggerNodesUncheckedUpdateInput>
  }

  /**
   * TriggerNodes delete
   */
  export type TriggerNodesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TriggerNodes
     */
    select?: TriggerNodesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TriggerNodesInclude<ExtArgs> | null
    /**
     * Filter which TriggerNodes to delete.
     */
    where: TriggerNodesWhereUniqueInput
  }

  /**
   * TriggerNodes deleteMany
   */
  export type TriggerNodesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TriggerNodes to delete
     */
    where?: TriggerNodesWhereInput
  }

  /**
   * TriggerNodes without action
   */
  export type TriggerNodesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TriggerNodes
     */
    select?: TriggerNodesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TriggerNodesInclude<ExtArgs> | null
  }


  /**
   * Model AvailableTriggerNodes
   */

  export type AggregateAvailableTriggerNodes = {
    _count: AvailableTriggerNodesCountAggregateOutputType | null
    _min: AvailableTriggerNodesMinAggregateOutputType | null
    _max: AvailableTriggerNodesMaxAggregateOutputType | null
  }

  export type AvailableTriggerNodesMinAggregateOutputType = {
    id: string | null
    name: string | null
  }

  export type AvailableTriggerNodesMaxAggregateOutputType = {
    id: string | null
    name: string | null
  }

  export type AvailableTriggerNodesCountAggregateOutputType = {
    id: number
    name: number
    _all: number
  }


  export type AvailableTriggerNodesMinAggregateInputType = {
    id?: true
    name?: true
  }

  export type AvailableTriggerNodesMaxAggregateInputType = {
    id?: true
    name?: true
  }

  export type AvailableTriggerNodesCountAggregateInputType = {
    id?: true
    name?: true
    _all?: true
  }

  export type AvailableTriggerNodesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AvailableTriggerNodes to aggregate.
     */
    where?: AvailableTriggerNodesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AvailableTriggerNodes to fetch.
     */
    orderBy?: AvailableTriggerNodesOrderByWithRelationInput | AvailableTriggerNodesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AvailableTriggerNodesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AvailableTriggerNodes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AvailableTriggerNodes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AvailableTriggerNodes
    **/
    _count?: true | AvailableTriggerNodesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AvailableTriggerNodesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AvailableTriggerNodesMaxAggregateInputType
  }

  export type GetAvailableTriggerNodesAggregateType<T extends AvailableTriggerNodesAggregateArgs> = {
        [P in keyof T & keyof AggregateAvailableTriggerNodes]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAvailableTriggerNodes[P]>
      : GetScalarType<T[P], AggregateAvailableTriggerNodes[P]>
  }




  export type AvailableTriggerNodesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AvailableTriggerNodesWhereInput
    orderBy?: AvailableTriggerNodesOrderByWithAggregationInput | AvailableTriggerNodesOrderByWithAggregationInput[]
    by: AvailableTriggerNodesScalarFieldEnum[] | AvailableTriggerNodesScalarFieldEnum
    having?: AvailableTriggerNodesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AvailableTriggerNodesCountAggregateInputType | true
    _min?: AvailableTriggerNodesMinAggregateInputType
    _max?: AvailableTriggerNodesMaxAggregateInputType
  }

  export type AvailableTriggerNodesGroupByOutputType = {
    id: string
    name: string
    _count: AvailableTriggerNodesCountAggregateOutputType | null
    _min: AvailableTriggerNodesMinAggregateOutputType | null
    _max: AvailableTriggerNodesMaxAggregateOutputType | null
  }

  type GetAvailableTriggerNodesGroupByPayload<T extends AvailableTriggerNodesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AvailableTriggerNodesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AvailableTriggerNodesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AvailableTriggerNodesGroupByOutputType[P]>
            : GetScalarType<T[P], AvailableTriggerNodesGroupByOutputType[P]>
        }
      >
    >


  export type AvailableTriggerNodesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    TriggerNode?: boolean | AvailableTriggerNodes$TriggerNodeArgs<ExtArgs>
    _count?: boolean | AvailableTriggerNodesCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["availableTriggerNodes"]>

  export type AvailableTriggerNodesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
  }, ExtArgs["result"]["availableTriggerNodes"]>

  export type AvailableTriggerNodesSelectScalar = {
    id?: boolean
    name?: boolean
  }

  export type AvailableTriggerNodesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    TriggerNode?: boolean | AvailableTriggerNodes$TriggerNodeArgs<ExtArgs>
    _count?: boolean | AvailableTriggerNodesCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type AvailableTriggerNodesIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $AvailableTriggerNodesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "AvailableTriggerNodes"
    objects: {
      TriggerNode: Prisma.$TriggerNodesPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
    }, ExtArgs["result"]["availableTriggerNodes"]>
    composites: {}
  }

  type AvailableTriggerNodesGetPayload<S extends boolean | null | undefined | AvailableTriggerNodesDefaultArgs> = $Result.GetResult<Prisma.$AvailableTriggerNodesPayload, S>

  type AvailableTriggerNodesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<AvailableTriggerNodesFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: AvailableTriggerNodesCountAggregateInputType | true
    }

  export interface AvailableTriggerNodesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['AvailableTriggerNodes'], meta: { name: 'AvailableTriggerNodes' } }
    /**
     * Find zero or one AvailableTriggerNodes that matches the filter.
     * @param {AvailableTriggerNodesFindUniqueArgs} args - Arguments to find a AvailableTriggerNodes
     * @example
     * // Get one AvailableTriggerNodes
     * const availableTriggerNodes = await prisma.availableTriggerNodes.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AvailableTriggerNodesFindUniqueArgs>(args: SelectSubset<T, AvailableTriggerNodesFindUniqueArgs<ExtArgs>>): Prisma__AvailableTriggerNodesClient<$Result.GetResult<Prisma.$AvailableTriggerNodesPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one AvailableTriggerNodes that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {AvailableTriggerNodesFindUniqueOrThrowArgs} args - Arguments to find a AvailableTriggerNodes
     * @example
     * // Get one AvailableTriggerNodes
     * const availableTriggerNodes = await prisma.availableTriggerNodes.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AvailableTriggerNodesFindUniqueOrThrowArgs>(args: SelectSubset<T, AvailableTriggerNodesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AvailableTriggerNodesClient<$Result.GetResult<Prisma.$AvailableTriggerNodesPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first AvailableTriggerNodes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AvailableTriggerNodesFindFirstArgs} args - Arguments to find a AvailableTriggerNodes
     * @example
     * // Get one AvailableTriggerNodes
     * const availableTriggerNodes = await prisma.availableTriggerNodes.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AvailableTriggerNodesFindFirstArgs>(args?: SelectSubset<T, AvailableTriggerNodesFindFirstArgs<ExtArgs>>): Prisma__AvailableTriggerNodesClient<$Result.GetResult<Prisma.$AvailableTriggerNodesPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first AvailableTriggerNodes that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AvailableTriggerNodesFindFirstOrThrowArgs} args - Arguments to find a AvailableTriggerNodes
     * @example
     * // Get one AvailableTriggerNodes
     * const availableTriggerNodes = await prisma.availableTriggerNodes.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AvailableTriggerNodesFindFirstOrThrowArgs>(args?: SelectSubset<T, AvailableTriggerNodesFindFirstOrThrowArgs<ExtArgs>>): Prisma__AvailableTriggerNodesClient<$Result.GetResult<Prisma.$AvailableTriggerNodesPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more AvailableTriggerNodes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AvailableTriggerNodesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AvailableTriggerNodes
     * const availableTriggerNodes = await prisma.availableTriggerNodes.findMany()
     * 
     * // Get first 10 AvailableTriggerNodes
     * const availableTriggerNodes = await prisma.availableTriggerNodes.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const availableTriggerNodesWithIdOnly = await prisma.availableTriggerNodes.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AvailableTriggerNodesFindManyArgs>(args?: SelectSubset<T, AvailableTriggerNodesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AvailableTriggerNodesPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a AvailableTriggerNodes.
     * @param {AvailableTriggerNodesCreateArgs} args - Arguments to create a AvailableTriggerNodes.
     * @example
     * // Create one AvailableTriggerNodes
     * const AvailableTriggerNodes = await prisma.availableTriggerNodes.create({
     *   data: {
     *     // ... data to create a AvailableTriggerNodes
     *   }
     * })
     * 
     */
    create<T extends AvailableTriggerNodesCreateArgs>(args: SelectSubset<T, AvailableTriggerNodesCreateArgs<ExtArgs>>): Prisma__AvailableTriggerNodesClient<$Result.GetResult<Prisma.$AvailableTriggerNodesPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many AvailableTriggerNodes.
     * @param {AvailableTriggerNodesCreateManyArgs} args - Arguments to create many AvailableTriggerNodes.
     * @example
     * // Create many AvailableTriggerNodes
     * const availableTriggerNodes = await prisma.availableTriggerNodes.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AvailableTriggerNodesCreateManyArgs>(args?: SelectSubset<T, AvailableTriggerNodesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many AvailableTriggerNodes and returns the data saved in the database.
     * @param {AvailableTriggerNodesCreateManyAndReturnArgs} args - Arguments to create many AvailableTriggerNodes.
     * @example
     * // Create many AvailableTriggerNodes
     * const availableTriggerNodes = await prisma.availableTriggerNodes.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many AvailableTriggerNodes and only return the `id`
     * const availableTriggerNodesWithIdOnly = await prisma.availableTriggerNodes.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AvailableTriggerNodesCreateManyAndReturnArgs>(args?: SelectSubset<T, AvailableTriggerNodesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AvailableTriggerNodesPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a AvailableTriggerNodes.
     * @param {AvailableTriggerNodesDeleteArgs} args - Arguments to delete one AvailableTriggerNodes.
     * @example
     * // Delete one AvailableTriggerNodes
     * const AvailableTriggerNodes = await prisma.availableTriggerNodes.delete({
     *   where: {
     *     // ... filter to delete one AvailableTriggerNodes
     *   }
     * })
     * 
     */
    delete<T extends AvailableTriggerNodesDeleteArgs>(args: SelectSubset<T, AvailableTriggerNodesDeleteArgs<ExtArgs>>): Prisma__AvailableTriggerNodesClient<$Result.GetResult<Prisma.$AvailableTriggerNodesPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one AvailableTriggerNodes.
     * @param {AvailableTriggerNodesUpdateArgs} args - Arguments to update one AvailableTriggerNodes.
     * @example
     * // Update one AvailableTriggerNodes
     * const availableTriggerNodes = await prisma.availableTriggerNodes.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AvailableTriggerNodesUpdateArgs>(args: SelectSubset<T, AvailableTriggerNodesUpdateArgs<ExtArgs>>): Prisma__AvailableTriggerNodesClient<$Result.GetResult<Prisma.$AvailableTriggerNodesPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more AvailableTriggerNodes.
     * @param {AvailableTriggerNodesDeleteManyArgs} args - Arguments to filter AvailableTriggerNodes to delete.
     * @example
     * // Delete a few AvailableTriggerNodes
     * const { count } = await prisma.availableTriggerNodes.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AvailableTriggerNodesDeleteManyArgs>(args?: SelectSubset<T, AvailableTriggerNodesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AvailableTriggerNodes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AvailableTriggerNodesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AvailableTriggerNodes
     * const availableTriggerNodes = await prisma.availableTriggerNodes.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AvailableTriggerNodesUpdateManyArgs>(args: SelectSubset<T, AvailableTriggerNodesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one AvailableTriggerNodes.
     * @param {AvailableTriggerNodesUpsertArgs} args - Arguments to update or create a AvailableTriggerNodes.
     * @example
     * // Update or create a AvailableTriggerNodes
     * const availableTriggerNodes = await prisma.availableTriggerNodes.upsert({
     *   create: {
     *     // ... data to create a AvailableTriggerNodes
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AvailableTriggerNodes we want to update
     *   }
     * })
     */
    upsert<T extends AvailableTriggerNodesUpsertArgs>(args: SelectSubset<T, AvailableTriggerNodesUpsertArgs<ExtArgs>>): Prisma__AvailableTriggerNodesClient<$Result.GetResult<Prisma.$AvailableTriggerNodesPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of AvailableTriggerNodes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AvailableTriggerNodesCountArgs} args - Arguments to filter AvailableTriggerNodes to count.
     * @example
     * // Count the number of AvailableTriggerNodes
     * const count = await prisma.availableTriggerNodes.count({
     *   where: {
     *     // ... the filter for the AvailableTriggerNodes we want to count
     *   }
     * })
    **/
    count<T extends AvailableTriggerNodesCountArgs>(
      args?: Subset<T, AvailableTriggerNodesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AvailableTriggerNodesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AvailableTriggerNodes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AvailableTriggerNodesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AvailableTriggerNodesAggregateArgs>(args: Subset<T, AvailableTriggerNodesAggregateArgs>): Prisma.PrismaPromise<GetAvailableTriggerNodesAggregateType<T>>

    /**
     * Group by AvailableTriggerNodes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AvailableTriggerNodesGroupByArgs} args - Group by arguments.
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
      T extends AvailableTriggerNodesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AvailableTriggerNodesGroupByArgs['orderBy'] }
        : { orderBy?: AvailableTriggerNodesGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AvailableTriggerNodesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAvailableTriggerNodesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the AvailableTriggerNodes model
   */
  readonly fields: AvailableTriggerNodesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for AvailableTriggerNodes.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AvailableTriggerNodesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    TriggerNode<T extends AvailableTriggerNodes$TriggerNodeArgs<ExtArgs> = {}>(args?: Subset<T, AvailableTriggerNodes$TriggerNodeArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TriggerNodesPayload<ExtArgs>, T, "findMany"> | Null>
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
   * Fields of the AvailableTriggerNodes model
   */ 
  interface AvailableTriggerNodesFieldRefs {
    readonly id: FieldRef<"AvailableTriggerNodes", 'String'>
    readonly name: FieldRef<"AvailableTriggerNodes", 'String'>
  }
    

  // Custom InputTypes
  /**
   * AvailableTriggerNodes findUnique
   */
  export type AvailableTriggerNodesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AvailableTriggerNodes
     */
    select?: AvailableTriggerNodesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvailableTriggerNodesInclude<ExtArgs> | null
    /**
     * Filter, which AvailableTriggerNodes to fetch.
     */
    where: AvailableTriggerNodesWhereUniqueInput
  }

  /**
   * AvailableTriggerNodes findUniqueOrThrow
   */
  export type AvailableTriggerNodesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AvailableTriggerNodes
     */
    select?: AvailableTriggerNodesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvailableTriggerNodesInclude<ExtArgs> | null
    /**
     * Filter, which AvailableTriggerNodes to fetch.
     */
    where: AvailableTriggerNodesWhereUniqueInput
  }

  /**
   * AvailableTriggerNodes findFirst
   */
  export type AvailableTriggerNodesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AvailableTriggerNodes
     */
    select?: AvailableTriggerNodesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvailableTriggerNodesInclude<ExtArgs> | null
    /**
     * Filter, which AvailableTriggerNodes to fetch.
     */
    where?: AvailableTriggerNodesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AvailableTriggerNodes to fetch.
     */
    orderBy?: AvailableTriggerNodesOrderByWithRelationInput | AvailableTriggerNodesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AvailableTriggerNodes.
     */
    cursor?: AvailableTriggerNodesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AvailableTriggerNodes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AvailableTriggerNodes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AvailableTriggerNodes.
     */
    distinct?: AvailableTriggerNodesScalarFieldEnum | AvailableTriggerNodesScalarFieldEnum[]
  }

  /**
   * AvailableTriggerNodes findFirstOrThrow
   */
  export type AvailableTriggerNodesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AvailableTriggerNodes
     */
    select?: AvailableTriggerNodesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvailableTriggerNodesInclude<ExtArgs> | null
    /**
     * Filter, which AvailableTriggerNodes to fetch.
     */
    where?: AvailableTriggerNodesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AvailableTriggerNodes to fetch.
     */
    orderBy?: AvailableTriggerNodesOrderByWithRelationInput | AvailableTriggerNodesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AvailableTriggerNodes.
     */
    cursor?: AvailableTriggerNodesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AvailableTriggerNodes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AvailableTriggerNodes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AvailableTriggerNodes.
     */
    distinct?: AvailableTriggerNodesScalarFieldEnum | AvailableTriggerNodesScalarFieldEnum[]
  }

  /**
   * AvailableTriggerNodes findMany
   */
  export type AvailableTriggerNodesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AvailableTriggerNodes
     */
    select?: AvailableTriggerNodesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvailableTriggerNodesInclude<ExtArgs> | null
    /**
     * Filter, which AvailableTriggerNodes to fetch.
     */
    where?: AvailableTriggerNodesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AvailableTriggerNodes to fetch.
     */
    orderBy?: AvailableTriggerNodesOrderByWithRelationInput | AvailableTriggerNodesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AvailableTriggerNodes.
     */
    cursor?: AvailableTriggerNodesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AvailableTriggerNodes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AvailableTriggerNodes.
     */
    skip?: number
    distinct?: AvailableTriggerNodesScalarFieldEnum | AvailableTriggerNodesScalarFieldEnum[]
  }

  /**
   * AvailableTriggerNodes create
   */
  export type AvailableTriggerNodesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AvailableTriggerNodes
     */
    select?: AvailableTriggerNodesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvailableTriggerNodesInclude<ExtArgs> | null
    /**
     * The data needed to create a AvailableTriggerNodes.
     */
    data: XOR<AvailableTriggerNodesCreateInput, AvailableTriggerNodesUncheckedCreateInput>
  }

  /**
   * AvailableTriggerNodes createMany
   */
  export type AvailableTriggerNodesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many AvailableTriggerNodes.
     */
    data: AvailableTriggerNodesCreateManyInput | AvailableTriggerNodesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AvailableTriggerNodes createManyAndReturn
   */
  export type AvailableTriggerNodesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AvailableTriggerNodes
     */
    select?: AvailableTriggerNodesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many AvailableTriggerNodes.
     */
    data: AvailableTriggerNodesCreateManyInput | AvailableTriggerNodesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AvailableTriggerNodes update
   */
  export type AvailableTriggerNodesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AvailableTriggerNodes
     */
    select?: AvailableTriggerNodesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvailableTriggerNodesInclude<ExtArgs> | null
    /**
     * The data needed to update a AvailableTriggerNodes.
     */
    data: XOR<AvailableTriggerNodesUpdateInput, AvailableTriggerNodesUncheckedUpdateInput>
    /**
     * Choose, which AvailableTriggerNodes to update.
     */
    where: AvailableTriggerNodesWhereUniqueInput
  }

  /**
   * AvailableTriggerNodes updateMany
   */
  export type AvailableTriggerNodesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update AvailableTriggerNodes.
     */
    data: XOR<AvailableTriggerNodesUpdateManyMutationInput, AvailableTriggerNodesUncheckedUpdateManyInput>
    /**
     * Filter which AvailableTriggerNodes to update
     */
    where?: AvailableTriggerNodesWhereInput
  }

  /**
   * AvailableTriggerNodes upsert
   */
  export type AvailableTriggerNodesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AvailableTriggerNodes
     */
    select?: AvailableTriggerNodesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvailableTriggerNodesInclude<ExtArgs> | null
    /**
     * The filter to search for the AvailableTriggerNodes to update in case it exists.
     */
    where: AvailableTriggerNodesWhereUniqueInput
    /**
     * In case the AvailableTriggerNodes found by the `where` argument doesn't exist, create a new AvailableTriggerNodes with this data.
     */
    create: XOR<AvailableTriggerNodesCreateInput, AvailableTriggerNodesUncheckedCreateInput>
    /**
     * In case the AvailableTriggerNodes was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AvailableTriggerNodesUpdateInput, AvailableTriggerNodesUncheckedUpdateInput>
  }

  /**
   * AvailableTriggerNodes delete
   */
  export type AvailableTriggerNodesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AvailableTriggerNodes
     */
    select?: AvailableTriggerNodesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvailableTriggerNodesInclude<ExtArgs> | null
    /**
     * Filter which AvailableTriggerNodes to delete.
     */
    where: AvailableTriggerNodesWhereUniqueInput
  }

  /**
   * AvailableTriggerNodes deleteMany
   */
  export type AvailableTriggerNodesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AvailableTriggerNodes to delete
     */
    where?: AvailableTriggerNodesWhereInput
  }

  /**
   * AvailableTriggerNodes.TriggerNode
   */
  export type AvailableTriggerNodes$TriggerNodeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TriggerNodes
     */
    select?: TriggerNodesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TriggerNodesInclude<ExtArgs> | null
    where?: TriggerNodesWhereInput
    orderBy?: TriggerNodesOrderByWithRelationInput | TriggerNodesOrderByWithRelationInput[]
    cursor?: TriggerNodesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TriggerNodesScalarFieldEnum | TriggerNodesScalarFieldEnum[]
  }

  /**
   * AvailableTriggerNodes without action
   */
  export type AvailableTriggerNodesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AvailableTriggerNodes
     */
    select?: AvailableTriggerNodesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvailableTriggerNodesInclude<ExtArgs> | null
  }


  /**
   * Model ActionNodes
   */

  export type AggregateActionNodes = {
    _count: ActionNodesCountAggregateOutputType | null
    _min: ActionNodesMinAggregateOutputType | null
    _max: ActionNodesMaxAggregateOutputType | null
  }

  export type ActionNodesMinAggregateOutputType = {
    id: string | null
    workflowId: string | null
    ActionNodeId: string | null
  }

  export type ActionNodesMaxAggregateOutputType = {
    id: string | null
    workflowId: string | null
    ActionNodeId: string | null
  }

  export type ActionNodesCountAggregateOutputType = {
    id: number
    workflowId: number
    ActionNodeId: number
    _all: number
  }


  export type ActionNodesMinAggregateInputType = {
    id?: true
    workflowId?: true
    ActionNodeId?: true
  }

  export type ActionNodesMaxAggregateInputType = {
    id?: true
    workflowId?: true
    ActionNodeId?: true
  }

  export type ActionNodesCountAggregateInputType = {
    id?: true
    workflowId?: true
    ActionNodeId?: true
    _all?: true
  }

  export type ActionNodesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ActionNodes to aggregate.
     */
    where?: ActionNodesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ActionNodes to fetch.
     */
    orderBy?: ActionNodesOrderByWithRelationInput | ActionNodesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ActionNodesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ActionNodes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ActionNodes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ActionNodes
    **/
    _count?: true | ActionNodesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ActionNodesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ActionNodesMaxAggregateInputType
  }

  export type GetActionNodesAggregateType<T extends ActionNodesAggregateArgs> = {
        [P in keyof T & keyof AggregateActionNodes]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateActionNodes[P]>
      : GetScalarType<T[P], AggregateActionNodes[P]>
  }




  export type ActionNodesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ActionNodesWhereInput
    orderBy?: ActionNodesOrderByWithAggregationInput | ActionNodesOrderByWithAggregationInput[]
    by: ActionNodesScalarFieldEnum[] | ActionNodesScalarFieldEnum
    having?: ActionNodesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ActionNodesCountAggregateInputType | true
    _min?: ActionNodesMinAggregateInputType
    _max?: ActionNodesMaxAggregateInputType
  }

  export type ActionNodesGroupByOutputType = {
    id: string
    workflowId: string
    ActionNodeId: string
    _count: ActionNodesCountAggregateOutputType | null
    _min: ActionNodesMinAggregateOutputType | null
    _max: ActionNodesMaxAggregateOutputType | null
  }

  type GetActionNodesGroupByPayload<T extends ActionNodesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ActionNodesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ActionNodesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ActionNodesGroupByOutputType[P]>
            : GetScalarType<T[P], ActionNodesGroupByOutputType[P]>
        }
      >
    >


  export type ActionNodesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    workflowId?: boolean
    ActionNodeId?: boolean
    workflow?: boolean | WorkFlowDefaultArgs<ExtArgs>
    availableActionNodes?: boolean | AvailableActionNodesDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["actionNodes"]>

  export type ActionNodesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    workflowId?: boolean
    ActionNodeId?: boolean
    workflow?: boolean | WorkFlowDefaultArgs<ExtArgs>
    availableActionNodes?: boolean | AvailableActionNodesDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["actionNodes"]>

  export type ActionNodesSelectScalar = {
    id?: boolean
    workflowId?: boolean
    ActionNodeId?: boolean
  }

  export type ActionNodesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    workflow?: boolean | WorkFlowDefaultArgs<ExtArgs>
    availableActionNodes?: boolean | AvailableActionNodesDefaultArgs<ExtArgs>
  }
  export type ActionNodesIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    workflow?: boolean | WorkFlowDefaultArgs<ExtArgs>
    availableActionNodes?: boolean | AvailableActionNodesDefaultArgs<ExtArgs>
  }

  export type $ActionNodesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ActionNodes"
    objects: {
      workflow: Prisma.$WorkFlowPayload<ExtArgs>
      availableActionNodes: Prisma.$AvailableActionNodesPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      workflowId: string
      ActionNodeId: string
    }, ExtArgs["result"]["actionNodes"]>
    composites: {}
  }

  type ActionNodesGetPayload<S extends boolean | null | undefined | ActionNodesDefaultArgs> = $Result.GetResult<Prisma.$ActionNodesPayload, S>

  type ActionNodesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ActionNodesFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: ActionNodesCountAggregateInputType | true
    }

  export interface ActionNodesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ActionNodes'], meta: { name: 'ActionNodes' } }
    /**
     * Find zero or one ActionNodes that matches the filter.
     * @param {ActionNodesFindUniqueArgs} args - Arguments to find a ActionNodes
     * @example
     * // Get one ActionNodes
     * const actionNodes = await prisma.actionNodes.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ActionNodesFindUniqueArgs>(args: SelectSubset<T, ActionNodesFindUniqueArgs<ExtArgs>>): Prisma__ActionNodesClient<$Result.GetResult<Prisma.$ActionNodesPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one ActionNodes that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {ActionNodesFindUniqueOrThrowArgs} args - Arguments to find a ActionNodes
     * @example
     * // Get one ActionNodes
     * const actionNodes = await prisma.actionNodes.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ActionNodesFindUniqueOrThrowArgs>(args: SelectSubset<T, ActionNodesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ActionNodesClient<$Result.GetResult<Prisma.$ActionNodesPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first ActionNodes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActionNodesFindFirstArgs} args - Arguments to find a ActionNodes
     * @example
     * // Get one ActionNodes
     * const actionNodes = await prisma.actionNodes.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ActionNodesFindFirstArgs>(args?: SelectSubset<T, ActionNodesFindFirstArgs<ExtArgs>>): Prisma__ActionNodesClient<$Result.GetResult<Prisma.$ActionNodesPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first ActionNodes that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActionNodesFindFirstOrThrowArgs} args - Arguments to find a ActionNodes
     * @example
     * // Get one ActionNodes
     * const actionNodes = await prisma.actionNodes.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ActionNodesFindFirstOrThrowArgs>(args?: SelectSubset<T, ActionNodesFindFirstOrThrowArgs<ExtArgs>>): Prisma__ActionNodesClient<$Result.GetResult<Prisma.$ActionNodesPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more ActionNodes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActionNodesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ActionNodes
     * const actionNodes = await prisma.actionNodes.findMany()
     * 
     * // Get first 10 ActionNodes
     * const actionNodes = await prisma.actionNodes.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const actionNodesWithIdOnly = await prisma.actionNodes.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ActionNodesFindManyArgs>(args?: SelectSubset<T, ActionNodesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ActionNodesPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a ActionNodes.
     * @param {ActionNodesCreateArgs} args - Arguments to create a ActionNodes.
     * @example
     * // Create one ActionNodes
     * const ActionNodes = await prisma.actionNodes.create({
     *   data: {
     *     // ... data to create a ActionNodes
     *   }
     * })
     * 
     */
    create<T extends ActionNodesCreateArgs>(args: SelectSubset<T, ActionNodesCreateArgs<ExtArgs>>): Prisma__ActionNodesClient<$Result.GetResult<Prisma.$ActionNodesPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many ActionNodes.
     * @param {ActionNodesCreateManyArgs} args - Arguments to create many ActionNodes.
     * @example
     * // Create many ActionNodes
     * const actionNodes = await prisma.actionNodes.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ActionNodesCreateManyArgs>(args?: SelectSubset<T, ActionNodesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ActionNodes and returns the data saved in the database.
     * @param {ActionNodesCreateManyAndReturnArgs} args - Arguments to create many ActionNodes.
     * @example
     * // Create many ActionNodes
     * const actionNodes = await prisma.actionNodes.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ActionNodes and only return the `id`
     * const actionNodesWithIdOnly = await prisma.actionNodes.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ActionNodesCreateManyAndReturnArgs>(args?: SelectSubset<T, ActionNodesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ActionNodesPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a ActionNodes.
     * @param {ActionNodesDeleteArgs} args - Arguments to delete one ActionNodes.
     * @example
     * // Delete one ActionNodes
     * const ActionNodes = await prisma.actionNodes.delete({
     *   where: {
     *     // ... filter to delete one ActionNodes
     *   }
     * })
     * 
     */
    delete<T extends ActionNodesDeleteArgs>(args: SelectSubset<T, ActionNodesDeleteArgs<ExtArgs>>): Prisma__ActionNodesClient<$Result.GetResult<Prisma.$ActionNodesPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one ActionNodes.
     * @param {ActionNodesUpdateArgs} args - Arguments to update one ActionNodes.
     * @example
     * // Update one ActionNodes
     * const actionNodes = await prisma.actionNodes.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ActionNodesUpdateArgs>(args: SelectSubset<T, ActionNodesUpdateArgs<ExtArgs>>): Prisma__ActionNodesClient<$Result.GetResult<Prisma.$ActionNodesPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more ActionNodes.
     * @param {ActionNodesDeleteManyArgs} args - Arguments to filter ActionNodes to delete.
     * @example
     * // Delete a few ActionNodes
     * const { count } = await prisma.actionNodes.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ActionNodesDeleteManyArgs>(args?: SelectSubset<T, ActionNodesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ActionNodes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActionNodesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ActionNodes
     * const actionNodes = await prisma.actionNodes.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ActionNodesUpdateManyArgs>(args: SelectSubset<T, ActionNodesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one ActionNodes.
     * @param {ActionNodesUpsertArgs} args - Arguments to update or create a ActionNodes.
     * @example
     * // Update or create a ActionNodes
     * const actionNodes = await prisma.actionNodes.upsert({
     *   create: {
     *     // ... data to create a ActionNodes
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ActionNodes we want to update
     *   }
     * })
     */
    upsert<T extends ActionNodesUpsertArgs>(args: SelectSubset<T, ActionNodesUpsertArgs<ExtArgs>>): Prisma__ActionNodesClient<$Result.GetResult<Prisma.$ActionNodesPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of ActionNodes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActionNodesCountArgs} args - Arguments to filter ActionNodes to count.
     * @example
     * // Count the number of ActionNodes
     * const count = await prisma.actionNodes.count({
     *   where: {
     *     // ... the filter for the ActionNodes we want to count
     *   }
     * })
    **/
    count<T extends ActionNodesCountArgs>(
      args?: Subset<T, ActionNodesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ActionNodesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ActionNodes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActionNodesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ActionNodesAggregateArgs>(args: Subset<T, ActionNodesAggregateArgs>): Prisma.PrismaPromise<GetActionNodesAggregateType<T>>

    /**
     * Group by ActionNodes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActionNodesGroupByArgs} args - Group by arguments.
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
      T extends ActionNodesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ActionNodesGroupByArgs['orderBy'] }
        : { orderBy?: ActionNodesGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ActionNodesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetActionNodesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ActionNodes model
   */
  readonly fields: ActionNodesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ActionNodes.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ActionNodesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    workflow<T extends WorkFlowDefaultArgs<ExtArgs> = {}>(args?: Subset<T, WorkFlowDefaultArgs<ExtArgs>>): Prisma__WorkFlowClient<$Result.GetResult<Prisma.$WorkFlowPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    availableActionNodes<T extends AvailableActionNodesDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AvailableActionNodesDefaultArgs<ExtArgs>>): Prisma__AvailableActionNodesClient<$Result.GetResult<Prisma.$AvailableActionNodesPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
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
   * Fields of the ActionNodes model
   */ 
  interface ActionNodesFieldRefs {
    readonly id: FieldRef<"ActionNodes", 'String'>
    readonly workflowId: FieldRef<"ActionNodes", 'String'>
    readonly ActionNodeId: FieldRef<"ActionNodes", 'String'>
  }
    

  // Custom InputTypes
  /**
   * ActionNodes findUnique
   */
  export type ActionNodesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActionNodes
     */
    select?: ActionNodesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActionNodesInclude<ExtArgs> | null
    /**
     * Filter, which ActionNodes to fetch.
     */
    where: ActionNodesWhereUniqueInput
  }

  /**
   * ActionNodes findUniqueOrThrow
   */
  export type ActionNodesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActionNodes
     */
    select?: ActionNodesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActionNodesInclude<ExtArgs> | null
    /**
     * Filter, which ActionNodes to fetch.
     */
    where: ActionNodesWhereUniqueInput
  }

  /**
   * ActionNodes findFirst
   */
  export type ActionNodesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActionNodes
     */
    select?: ActionNodesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActionNodesInclude<ExtArgs> | null
    /**
     * Filter, which ActionNodes to fetch.
     */
    where?: ActionNodesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ActionNodes to fetch.
     */
    orderBy?: ActionNodesOrderByWithRelationInput | ActionNodesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ActionNodes.
     */
    cursor?: ActionNodesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ActionNodes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ActionNodes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ActionNodes.
     */
    distinct?: ActionNodesScalarFieldEnum | ActionNodesScalarFieldEnum[]
  }

  /**
   * ActionNodes findFirstOrThrow
   */
  export type ActionNodesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActionNodes
     */
    select?: ActionNodesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActionNodesInclude<ExtArgs> | null
    /**
     * Filter, which ActionNodes to fetch.
     */
    where?: ActionNodesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ActionNodes to fetch.
     */
    orderBy?: ActionNodesOrderByWithRelationInput | ActionNodesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ActionNodes.
     */
    cursor?: ActionNodesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ActionNodes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ActionNodes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ActionNodes.
     */
    distinct?: ActionNodesScalarFieldEnum | ActionNodesScalarFieldEnum[]
  }

  /**
   * ActionNodes findMany
   */
  export type ActionNodesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActionNodes
     */
    select?: ActionNodesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActionNodesInclude<ExtArgs> | null
    /**
     * Filter, which ActionNodes to fetch.
     */
    where?: ActionNodesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ActionNodes to fetch.
     */
    orderBy?: ActionNodesOrderByWithRelationInput | ActionNodesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ActionNodes.
     */
    cursor?: ActionNodesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ActionNodes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ActionNodes.
     */
    skip?: number
    distinct?: ActionNodesScalarFieldEnum | ActionNodesScalarFieldEnum[]
  }

  /**
   * ActionNodes create
   */
  export type ActionNodesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActionNodes
     */
    select?: ActionNodesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActionNodesInclude<ExtArgs> | null
    /**
     * The data needed to create a ActionNodes.
     */
    data: XOR<ActionNodesCreateInput, ActionNodesUncheckedCreateInput>
  }

  /**
   * ActionNodes createMany
   */
  export type ActionNodesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ActionNodes.
     */
    data: ActionNodesCreateManyInput | ActionNodesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ActionNodes createManyAndReturn
   */
  export type ActionNodesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActionNodes
     */
    select?: ActionNodesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many ActionNodes.
     */
    data: ActionNodesCreateManyInput | ActionNodesCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActionNodesIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ActionNodes update
   */
  export type ActionNodesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActionNodes
     */
    select?: ActionNodesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActionNodesInclude<ExtArgs> | null
    /**
     * The data needed to update a ActionNodes.
     */
    data: XOR<ActionNodesUpdateInput, ActionNodesUncheckedUpdateInput>
    /**
     * Choose, which ActionNodes to update.
     */
    where: ActionNodesWhereUniqueInput
  }

  /**
   * ActionNodes updateMany
   */
  export type ActionNodesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ActionNodes.
     */
    data: XOR<ActionNodesUpdateManyMutationInput, ActionNodesUncheckedUpdateManyInput>
    /**
     * Filter which ActionNodes to update
     */
    where?: ActionNodesWhereInput
  }

  /**
   * ActionNodes upsert
   */
  export type ActionNodesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActionNodes
     */
    select?: ActionNodesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActionNodesInclude<ExtArgs> | null
    /**
     * The filter to search for the ActionNodes to update in case it exists.
     */
    where: ActionNodesWhereUniqueInput
    /**
     * In case the ActionNodes found by the `where` argument doesn't exist, create a new ActionNodes with this data.
     */
    create: XOR<ActionNodesCreateInput, ActionNodesUncheckedCreateInput>
    /**
     * In case the ActionNodes was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ActionNodesUpdateInput, ActionNodesUncheckedUpdateInput>
  }

  /**
   * ActionNodes delete
   */
  export type ActionNodesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActionNodes
     */
    select?: ActionNodesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActionNodesInclude<ExtArgs> | null
    /**
     * Filter which ActionNodes to delete.
     */
    where: ActionNodesWhereUniqueInput
  }

  /**
   * ActionNodes deleteMany
   */
  export type ActionNodesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ActionNodes to delete
     */
    where?: ActionNodesWhereInput
  }

  /**
   * ActionNodes without action
   */
  export type ActionNodesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActionNodes
     */
    select?: ActionNodesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActionNodesInclude<ExtArgs> | null
  }


  /**
   * Model AvailableActionNodes
   */

  export type AggregateAvailableActionNodes = {
    _count: AvailableActionNodesCountAggregateOutputType | null
    _min: AvailableActionNodesMinAggregateOutputType | null
    _max: AvailableActionNodesMaxAggregateOutputType | null
  }

  export type AvailableActionNodesMinAggregateOutputType = {
    id: string | null
    name: string | null
  }

  export type AvailableActionNodesMaxAggregateOutputType = {
    id: string | null
    name: string | null
  }

  export type AvailableActionNodesCountAggregateOutputType = {
    id: number
    name: number
    _all: number
  }


  export type AvailableActionNodesMinAggregateInputType = {
    id?: true
    name?: true
  }

  export type AvailableActionNodesMaxAggregateInputType = {
    id?: true
    name?: true
  }

  export type AvailableActionNodesCountAggregateInputType = {
    id?: true
    name?: true
    _all?: true
  }

  export type AvailableActionNodesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AvailableActionNodes to aggregate.
     */
    where?: AvailableActionNodesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AvailableActionNodes to fetch.
     */
    orderBy?: AvailableActionNodesOrderByWithRelationInput | AvailableActionNodesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AvailableActionNodesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AvailableActionNodes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AvailableActionNodes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AvailableActionNodes
    **/
    _count?: true | AvailableActionNodesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AvailableActionNodesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AvailableActionNodesMaxAggregateInputType
  }

  export type GetAvailableActionNodesAggregateType<T extends AvailableActionNodesAggregateArgs> = {
        [P in keyof T & keyof AggregateAvailableActionNodes]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAvailableActionNodes[P]>
      : GetScalarType<T[P], AggregateAvailableActionNodes[P]>
  }




  export type AvailableActionNodesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AvailableActionNodesWhereInput
    orderBy?: AvailableActionNodesOrderByWithAggregationInput | AvailableActionNodesOrderByWithAggregationInput[]
    by: AvailableActionNodesScalarFieldEnum[] | AvailableActionNodesScalarFieldEnum
    having?: AvailableActionNodesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AvailableActionNodesCountAggregateInputType | true
    _min?: AvailableActionNodesMinAggregateInputType
    _max?: AvailableActionNodesMaxAggregateInputType
  }

  export type AvailableActionNodesGroupByOutputType = {
    id: string
    name: string
    _count: AvailableActionNodesCountAggregateOutputType | null
    _min: AvailableActionNodesMinAggregateOutputType | null
    _max: AvailableActionNodesMaxAggregateOutputType | null
  }

  type GetAvailableActionNodesGroupByPayload<T extends AvailableActionNodesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AvailableActionNodesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AvailableActionNodesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AvailableActionNodesGroupByOutputType[P]>
            : GetScalarType<T[P], AvailableActionNodesGroupByOutputType[P]>
        }
      >
    >


  export type AvailableActionNodesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    actionNodes?: boolean | AvailableActionNodes$actionNodesArgs<ExtArgs>
    _count?: boolean | AvailableActionNodesCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["availableActionNodes"]>

  export type AvailableActionNodesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
  }, ExtArgs["result"]["availableActionNodes"]>

  export type AvailableActionNodesSelectScalar = {
    id?: boolean
    name?: boolean
  }

  export type AvailableActionNodesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    actionNodes?: boolean | AvailableActionNodes$actionNodesArgs<ExtArgs>
    _count?: boolean | AvailableActionNodesCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type AvailableActionNodesIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $AvailableActionNodesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "AvailableActionNodes"
    objects: {
      actionNodes: Prisma.$ActionNodesPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
    }, ExtArgs["result"]["availableActionNodes"]>
    composites: {}
  }

  type AvailableActionNodesGetPayload<S extends boolean | null | undefined | AvailableActionNodesDefaultArgs> = $Result.GetResult<Prisma.$AvailableActionNodesPayload, S>

  type AvailableActionNodesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<AvailableActionNodesFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: AvailableActionNodesCountAggregateInputType | true
    }

  export interface AvailableActionNodesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['AvailableActionNodes'], meta: { name: 'AvailableActionNodes' } }
    /**
     * Find zero or one AvailableActionNodes that matches the filter.
     * @param {AvailableActionNodesFindUniqueArgs} args - Arguments to find a AvailableActionNodes
     * @example
     * // Get one AvailableActionNodes
     * const availableActionNodes = await prisma.availableActionNodes.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AvailableActionNodesFindUniqueArgs>(args: SelectSubset<T, AvailableActionNodesFindUniqueArgs<ExtArgs>>): Prisma__AvailableActionNodesClient<$Result.GetResult<Prisma.$AvailableActionNodesPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one AvailableActionNodes that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {AvailableActionNodesFindUniqueOrThrowArgs} args - Arguments to find a AvailableActionNodes
     * @example
     * // Get one AvailableActionNodes
     * const availableActionNodes = await prisma.availableActionNodes.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AvailableActionNodesFindUniqueOrThrowArgs>(args: SelectSubset<T, AvailableActionNodesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AvailableActionNodesClient<$Result.GetResult<Prisma.$AvailableActionNodesPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first AvailableActionNodes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AvailableActionNodesFindFirstArgs} args - Arguments to find a AvailableActionNodes
     * @example
     * // Get one AvailableActionNodes
     * const availableActionNodes = await prisma.availableActionNodes.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AvailableActionNodesFindFirstArgs>(args?: SelectSubset<T, AvailableActionNodesFindFirstArgs<ExtArgs>>): Prisma__AvailableActionNodesClient<$Result.GetResult<Prisma.$AvailableActionNodesPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first AvailableActionNodes that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AvailableActionNodesFindFirstOrThrowArgs} args - Arguments to find a AvailableActionNodes
     * @example
     * // Get one AvailableActionNodes
     * const availableActionNodes = await prisma.availableActionNodes.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AvailableActionNodesFindFirstOrThrowArgs>(args?: SelectSubset<T, AvailableActionNodesFindFirstOrThrowArgs<ExtArgs>>): Prisma__AvailableActionNodesClient<$Result.GetResult<Prisma.$AvailableActionNodesPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more AvailableActionNodes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AvailableActionNodesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AvailableActionNodes
     * const availableActionNodes = await prisma.availableActionNodes.findMany()
     * 
     * // Get first 10 AvailableActionNodes
     * const availableActionNodes = await prisma.availableActionNodes.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const availableActionNodesWithIdOnly = await prisma.availableActionNodes.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AvailableActionNodesFindManyArgs>(args?: SelectSubset<T, AvailableActionNodesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AvailableActionNodesPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a AvailableActionNodes.
     * @param {AvailableActionNodesCreateArgs} args - Arguments to create a AvailableActionNodes.
     * @example
     * // Create one AvailableActionNodes
     * const AvailableActionNodes = await prisma.availableActionNodes.create({
     *   data: {
     *     // ... data to create a AvailableActionNodes
     *   }
     * })
     * 
     */
    create<T extends AvailableActionNodesCreateArgs>(args: SelectSubset<T, AvailableActionNodesCreateArgs<ExtArgs>>): Prisma__AvailableActionNodesClient<$Result.GetResult<Prisma.$AvailableActionNodesPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many AvailableActionNodes.
     * @param {AvailableActionNodesCreateManyArgs} args - Arguments to create many AvailableActionNodes.
     * @example
     * // Create many AvailableActionNodes
     * const availableActionNodes = await prisma.availableActionNodes.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AvailableActionNodesCreateManyArgs>(args?: SelectSubset<T, AvailableActionNodesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many AvailableActionNodes and returns the data saved in the database.
     * @param {AvailableActionNodesCreateManyAndReturnArgs} args - Arguments to create many AvailableActionNodes.
     * @example
     * // Create many AvailableActionNodes
     * const availableActionNodes = await prisma.availableActionNodes.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many AvailableActionNodes and only return the `id`
     * const availableActionNodesWithIdOnly = await prisma.availableActionNodes.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AvailableActionNodesCreateManyAndReturnArgs>(args?: SelectSubset<T, AvailableActionNodesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AvailableActionNodesPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a AvailableActionNodes.
     * @param {AvailableActionNodesDeleteArgs} args - Arguments to delete one AvailableActionNodes.
     * @example
     * // Delete one AvailableActionNodes
     * const AvailableActionNodes = await prisma.availableActionNodes.delete({
     *   where: {
     *     // ... filter to delete one AvailableActionNodes
     *   }
     * })
     * 
     */
    delete<T extends AvailableActionNodesDeleteArgs>(args: SelectSubset<T, AvailableActionNodesDeleteArgs<ExtArgs>>): Prisma__AvailableActionNodesClient<$Result.GetResult<Prisma.$AvailableActionNodesPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one AvailableActionNodes.
     * @param {AvailableActionNodesUpdateArgs} args - Arguments to update one AvailableActionNodes.
     * @example
     * // Update one AvailableActionNodes
     * const availableActionNodes = await prisma.availableActionNodes.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AvailableActionNodesUpdateArgs>(args: SelectSubset<T, AvailableActionNodesUpdateArgs<ExtArgs>>): Prisma__AvailableActionNodesClient<$Result.GetResult<Prisma.$AvailableActionNodesPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more AvailableActionNodes.
     * @param {AvailableActionNodesDeleteManyArgs} args - Arguments to filter AvailableActionNodes to delete.
     * @example
     * // Delete a few AvailableActionNodes
     * const { count } = await prisma.availableActionNodes.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AvailableActionNodesDeleteManyArgs>(args?: SelectSubset<T, AvailableActionNodesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AvailableActionNodes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AvailableActionNodesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AvailableActionNodes
     * const availableActionNodes = await prisma.availableActionNodes.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AvailableActionNodesUpdateManyArgs>(args: SelectSubset<T, AvailableActionNodesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one AvailableActionNodes.
     * @param {AvailableActionNodesUpsertArgs} args - Arguments to update or create a AvailableActionNodes.
     * @example
     * // Update or create a AvailableActionNodes
     * const availableActionNodes = await prisma.availableActionNodes.upsert({
     *   create: {
     *     // ... data to create a AvailableActionNodes
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AvailableActionNodes we want to update
     *   }
     * })
     */
    upsert<T extends AvailableActionNodesUpsertArgs>(args: SelectSubset<T, AvailableActionNodesUpsertArgs<ExtArgs>>): Prisma__AvailableActionNodesClient<$Result.GetResult<Prisma.$AvailableActionNodesPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of AvailableActionNodes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AvailableActionNodesCountArgs} args - Arguments to filter AvailableActionNodes to count.
     * @example
     * // Count the number of AvailableActionNodes
     * const count = await prisma.availableActionNodes.count({
     *   where: {
     *     // ... the filter for the AvailableActionNodes we want to count
     *   }
     * })
    **/
    count<T extends AvailableActionNodesCountArgs>(
      args?: Subset<T, AvailableActionNodesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AvailableActionNodesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AvailableActionNodes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AvailableActionNodesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AvailableActionNodesAggregateArgs>(args: Subset<T, AvailableActionNodesAggregateArgs>): Prisma.PrismaPromise<GetAvailableActionNodesAggregateType<T>>

    /**
     * Group by AvailableActionNodes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AvailableActionNodesGroupByArgs} args - Group by arguments.
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
      T extends AvailableActionNodesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AvailableActionNodesGroupByArgs['orderBy'] }
        : { orderBy?: AvailableActionNodesGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AvailableActionNodesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAvailableActionNodesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the AvailableActionNodes model
   */
  readonly fields: AvailableActionNodesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for AvailableActionNodes.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AvailableActionNodesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    actionNodes<T extends AvailableActionNodes$actionNodesArgs<ExtArgs> = {}>(args?: Subset<T, AvailableActionNodes$actionNodesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ActionNodesPayload<ExtArgs>, T, "findMany"> | Null>
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
   * Fields of the AvailableActionNodes model
   */ 
  interface AvailableActionNodesFieldRefs {
    readonly id: FieldRef<"AvailableActionNodes", 'String'>
    readonly name: FieldRef<"AvailableActionNodes", 'String'>
  }
    

  // Custom InputTypes
  /**
   * AvailableActionNodes findUnique
   */
  export type AvailableActionNodesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AvailableActionNodes
     */
    select?: AvailableActionNodesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvailableActionNodesInclude<ExtArgs> | null
    /**
     * Filter, which AvailableActionNodes to fetch.
     */
    where: AvailableActionNodesWhereUniqueInput
  }

  /**
   * AvailableActionNodes findUniqueOrThrow
   */
  export type AvailableActionNodesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AvailableActionNodes
     */
    select?: AvailableActionNodesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvailableActionNodesInclude<ExtArgs> | null
    /**
     * Filter, which AvailableActionNodes to fetch.
     */
    where: AvailableActionNodesWhereUniqueInput
  }

  /**
   * AvailableActionNodes findFirst
   */
  export type AvailableActionNodesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AvailableActionNodes
     */
    select?: AvailableActionNodesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvailableActionNodesInclude<ExtArgs> | null
    /**
     * Filter, which AvailableActionNodes to fetch.
     */
    where?: AvailableActionNodesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AvailableActionNodes to fetch.
     */
    orderBy?: AvailableActionNodesOrderByWithRelationInput | AvailableActionNodesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AvailableActionNodes.
     */
    cursor?: AvailableActionNodesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AvailableActionNodes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AvailableActionNodes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AvailableActionNodes.
     */
    distinct?: AvailableActionNodesScalarFieldEnum | AvailableActionNodesScalarFieldEnum[]
  }

  /**
   * AvailableActionNodes findFirstOrThrow
   */
  export type AvailableActionNodesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AvailableActionNodes
     */
    select?: AvailableActionNodesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvailableActionNodesInclude<ExtArgs> | null
    /**
     * Filter, which AvailableActionNodes to fetch.
     */
    where?: AvailableActionNodesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AvailableActionNodes to fetch.
     */
    orderBy?: AvailableActionNodesOrderByWithRelationInput | AvailableActionNodesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AvailableActionNodes.
     */
    cursor?: AvailableActionNodesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AvailableActionNodes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AvailableActionNodes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AvailableActionNodes.
     */
    distinct?: AvailableActionNodesScalarFieldEnum | AvailableActionNodesScalarFieldEnum[]
  }

  /**
   * AvailableActionNodes findMany
   */
  export type AvailableActionNodesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AvailableActionNodes
     */
    select?: AvailableActionNodesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvailableActionNodesInclude<ExtArgs> | null
    /**
     * Filter, which AvailableActionNodes to fetch.
     */
    where?: AvailableActionNodesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AvailableActionNodes to fetch.
     */
    orderBy?: AvailableActionNodesOrderByWithRelationInput | AvailableActionNodesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AvailableActionNodes.
     */
    cursor?: AvailableActionNodesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AvailableActionNodes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AvailableActionNodes.
     */
    skip?: number
    distinct?: AvailableActionNodesScalarFieldEnum | AvailableActionNodesScalarFieldEnum[]
  }

  /**
   * AvailableActionNodes create
   */
  export type AvailableActionNodesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AvailableActionNodes
     */
    select?: AvailableActionNodesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvailableActionNodesInclude<ExtArgs> | null
    /**
     * The data needed to create a AvailableActionNodes.
     */
    data: XOR<AvailableActionNodesCreateInput, AvailableActionNodesUncheckedCreateInput>
  }

  /**
   * AvailableActionNodes createMany
   */
  export type AvailableActionNodesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many AvailableActionNodes.
     */
    data: AvailableActionNodesCreateManyInput | AvailableActionNodesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AvailableActionNodes createManyAndReturn
   */
  export type AvailableActionNodesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AvailableActionNodes
     */
    select?: AvailableActionNodesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many AvailableActionNodes.
     */
    data: AvailableActionNodesCreateManyInput | AvailableActionNodesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AvailableActionNodes update
   */
  export type AvailableActionNodesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AvailableActionNodes
     */
    select?: AvailableActionNodesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvailableActionNodesInclude<ExtArgs> | null
    /**
     * The data needed to update a AvailableActionNodes.
     */
    data: XOR<AvailableActionNodesUpdateInput, AvailableActionNodesUncheckedUpdateInput>
    /**
     * Choose, which AvailableActionNodes to update.
     */
    where: AvailableActionNodesWhereUniqueInput
  }

  /**
   * AvailableActionNodes updateMany
   */
  export type AvailableActionNodesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update AvailableActionNodes.
     */
    data: XOR<AvailableActionNodesUpdateManyMutationInput, AvailableActionNodesUncheckedUpdateManyInput>
    /**
     * Filter which AvailableActionNodes to update
     */
    where?: AvailableActionNodesWhereInput
  }

  /**
   * AvailableActionNodes upsert
   */
  export type AvailableActionNodesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AvailableActionNodes
     */
    select?: AvailableActionNodesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvailableActionNodesInclude<ExtArgs> | null
    /**
     * The filter to search for the AvailableActionNodes to update in case it exists.
     */
    where: AvailableActionNodesWhereUniqueInput
    /**
     * In case the AvailableActionNodes found by the `where` argument doesn't exist, create a new AvailableActionNodes with this data.
     */
    create: XOR<AvailableActionNodesCreateInput, AvailableActionNodesUncheckedCreateInput>
    /**
     * In case the AvailableActionNodes was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AvailableActionNodesUpdateInput, AvailableActionNodesUncheckedUpdateInput>
  }

  /**
   * AvailableActionNodes delete
   */
  export type AvailableActionNodesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AvailableActionNodes
     */
    select?: AvailableActionNodesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvailableActionNodesInclude<ExtArgs> | null
    /**
     * Filter which AvailableActionNodes to delete.
     */
    where: AvailableActionNodesWhereUniqueInput
  }

  /**
   * AvailableActionNodes deleteMany
   */
  export type AvailableActionNodesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AvailableActionNodes to delete
     */
    where?: AvailableActionNodesWhereInput
  }

  /**
   * AvailableActionNodes.actionNodes
   */
  export type AvailableActionNodes$actionNodesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActionNodes
     */
    select?: ActionNodesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActionNodesInclude<ExtArgs> | null
    where?: ActionNodesWhereInput
    orderBy?: ActionNodesOrderByWithRelationInput | ActionNodesOrderByWithRelationInput[]
    cursor?: ActionNodesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ActionNodesScalarFieldEnum | ActionNodesScalarFieldEnum[]
  }

  /**
   * AvailableActionNodes without action
   */
  export type AvailableActionNodesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AvailableActionNodes
     */
    select?: AvailableActionNodesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvailableActionNodesInclude<ExtArgs> | null
  }


  /**
   * Model WorkFlowRun
   */

  export type AggregateWorkFlowRun = {
    _count: WorkFlowRunCountAggregateOutputType | null
    _min: WorkFlowRunMinAggregateOutputType | null
    _max: WorkFlowRunMaxAggregateOutputType | null
  }

  export type WorkFlowRunMinAggregateOutputType = {
    id: string | null
    workflowId: string | null
  }

  export type WorkFlowRunMaxAggregateOutputType = {
    id: string | null
    workflowId: string | null
  }

  export type WorkFlowRunCountAggregateOutputType = {
    id: number
    workflowId: number
    meta: number
    _all: number
  }


  export type WorkFlowRunMinAggregateInputType = {
    id?: true
    workflowId?: true
  }

  export type WorkFlowRunMaxAggregateInputType = {
    id?: true
    workflowId?: true
  }

  export type WorkFlowRunCountAggregateInputType = {
    id?: true
    workflowId?: true
    meta?: true
    _all?: true
  }

  export type WorkFlowRunAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which WorkFlowRun to aggregate.
     */
    where?: WorkFlowRunWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WorkFlowRuns to fetch.
     */
    orderBy?: WorkFlowRunOrderByWithRelationInput | WorkFlowRunOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: WorkFlowRunWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WorkFlowRuns from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WorkFlowRuns.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned WorkFlowRuns
    **/
    _count?: true | WorkFlowRunCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: WorkFlowRunMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: WorkFlowRunMaxAggregateInputType
  }

  export type GetWorkFlowRunAggregateType<T extends WorkFlowRunAggregateArgs> = {
        [P in keyof T & keyof AggregateWorkFlowRun]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateWorkFlowRun[P]>
      : GetScalarType<T[P], AggregateWorkFlowRun[P]>
  }




  export type WorkFlowRunGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WorkFlowRunWhereInput
    orderBy?: WorkFlowRunOrderByWithAggregationInput | WorkFlowRunOrderByWithAggregationInput[]
    by: WorkFlowRunScalarFieldEnum[] | WorkFlowRunScalarFieldEnum
    having?: WorkFlowRunScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: WorkFlowRunCountAggregateInputType | true
    _min?: WorkFlowRunMinAggregateInputType
    _max?: WorkFlowRunMaxAggregateInputType
  }

  export type WorkFlowRunGroupByOutputType = {
    id: string
    workflowId: string
    meta: JsonValue
    _count: WorkFlowRunCountAggregateOutputType | null
    _min: WorkFlowRunMinAggregateOutputType | null
    _max: WorkFlowRunMaxAggregateOutputType | null
  }

  type GetWorkFlowRunGroupByPayload<T extends WorkFlowRunGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<WorkFlowRunGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof WorkFlowRunGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], WorkFlowRunGroupByOutputType[P]>
            : GetScalarType<T[P], WorkFlowRunGroupByOutputType[P]>
        }
      >
    >


  export type WorkFlowRunSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    workflowId?: boolean
    meta?: boolean
    workflow?: boolean | WorkFlowDefaultArgs<ExtArgs>
    outbox?: boolean | WorkFlowRun$outboxArgs<ExtArgs>
  }, ExtArgs["result"]["workFlowRun"]>

  export type WorkFlowRunSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    workflowId?: boolean
    meta?: boolean
    workflow?: boolean | WorkFlowDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["workFlowRun"]>

  export type WorkFlowRunSelectScalar = {
    id?: boolean
    workflowId?: boolean
    meta?: boolean
  }

  export type WorkFlowRunInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    workflow?: boolean | WorkFlowDefaultArgs<ExtArgs>
    outbox?: boolean | WorkFlowRun$outboxArgs<ExtArgs>
  }
  export type WorkFlowRunIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    workflow?: boolean | WorkFlowDefaultArgs<ExtArgs>
  }

  export type $WorkFlowRunPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "WorkFlowRun"
    objects: {
      workflow: Prisma.$WorkFlowPayload<ExtArgs>
      outbox: Prisma.$WorkFlowOutBoxPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      workflowId: string
      meta: Prisma.JsonValue
    }, ExtArgs["result"]["workFlowRun"]>
    composites: {}
  }

  type WorkFlowRunGetPayload<S extends boolean | null | undefined | WorkFlowRunDefaultArgs> = $Result.GetResult<Prisma.$WorkFlowRunPayload, S>

  type WorkFlowRunCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<WorkFlowRunFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: WorkFlowRunCountAggregateInputType | true
    }

  export interface WorkFlowRunDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['WorkFlowRun'], meta: { name: 'WorkFlowRun' } }
    /**
     * Find zero or one WorkFlowRun that matches the filter.
     * @param {WorkFlowRunFindUniqueArgs} args - Arguments to find a WorkFlowRun
     * @example
     * // Get one WorkFlowRun
     * const workFlowRun = await prisma.workFlowRun.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends WorkFlowRunFindUniqueArgs>(args: SelectSubset<T, WorkFlowRunFindUniqueArgs<ExtArgs>>): Prisma__WorkFlowRunClient<$Result.GetResult<Prisma.$WorkFlowRunPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one WorkFlowRun that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {WorkFlowRunFindUniqueOrThrowArgs} args - Arguments to find a WorkFlowRun
     * @example
     * // Get one WorkFlowRun
     * const workFlowRun = await prisma.workFlowRun.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends WorkFlowRunFindUniqueOrThrowArgs>(args: SelectSubset<T, WorkFlowRunFindUniqueOrThrowArgs<ExtArgs>>): Prisma__WorkFlowRunClient<$Result.GetResult<Prisma.$WorkFlowRunPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first WorkFlowRun that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkFlowRunFindFirstArgs} args - Arguments to find a WorkFlowRun
     * @example
     * // Get one WorkFlowRun
     * const workFlowRun = await prisma.workFlowRun.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends WorkFlowRunFindFirstArgs>(args?: SelectSubset<T, WorkFlowRunFindFirstArgs<ExtArgs>>): Prisma__WorkFlowRunClient<$Result.GetResult<Prisma.$WorkFlowRunPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first WorkFlowRun that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkFlowRunFindFirstOrThrowArgs} args - Arguments to find a WorkFlowRun
     * @example
     * // Get one WorkFlowRun
     * const workFlowRun = await prisma.workFlowRun.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends WorkFlowRunFindFirstOrThrowArgs>(args?: SelectSubset<T, WorkFlowRunFindFirstOrThrowArgs<ExtArgs>>): Prisma__WorkFlowRunClient<$Result.GetResult<Prisma.$WorkFlowRunPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more WorkFlowRuns that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkFlowRunFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all WorkFlowRuns
     * const workFlowRuns = await prisma.workFlowRun.findMany()
     * 
     * // Get first 10 WorkFlowRuns
     * const workFlowRuns = await prisma.workFlowRun.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const workFlowRunWithIdOnly = await prisma.workFlowRun.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends WorkFlowRunFindManyArgs>(args?: SelectSubset<T, WorkFlowRunFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WorkFlowRunPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a WorkFlowRun.
     * @param {WorkFlowRunCreateArgs} args - Arguments to create a WorkFlowRun.
     * @example
     * // Create one WorkFlowRun
     * const WorkFlowRun = await prisma.workFlowRun.create({
     *   data: {
     *     // ... data to create a WorkFlowRun
     *   }
     * })
     * 
     */
    create<T extends WorkFlowRunCreateArgs>(args: SelectSubset<T, WorkFlowRunCreateArgs<ExtArgs>>): Prisma__WorkFlowRunClient<$Result.GetResult<Prisma.$WorkFlowRunPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many WorkFlowRuns.
     * @param {WorkFlowRunCreateManyArgs} args - Arguments to create many WorkFlowRuns.
     * @example
     * // Create many WorkFlowRuns
     * const workFlowRun = await prisma.workFlowRun.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends WorkFlowRunCreateManyArgs>(args?: SelectSubset<T, WorkFlowRunCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many WorkFlowRuns and returns the data saved in the database.
     * @param {WorkFlowRunCreateManyAndReturnArgs} args - Arguments to create many WorkFlowRuns.
     * @example
     * // Create many WorkFlowRuns
     * const workFlowRun = await prisma.workFlowRun.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many WorkFlowRuns and only return the `id`
     * const workFlowRunWithIdOnly = await prisma.workFlowRun.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends WorkFlowRunCreateManyAndReturnArgs>(args?: SelectSubset<T, WorkFlowRunCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WorkFlowRunPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a WorkFlowRun.
     * @param {WorkFlowRunDeleteArgs} args - Arguments to delete one WorkFlowRun.
     * @example
     * // Delete one WorkFlowRun
     * const WorkFlowRun = await prisma.workFlowRun.delete({
     *   where: {
     *     // ... filter to delete one WorkFlowRun
     *   }
     * })
     * 
     */
    delete<T extends WorkFlowRunDeleteArgs>(args: SelectSubset<T, WorkFlowRunDeleteArgs<ExtArgs>>): Prisma__WorkFlowRunClient<$Result.GetResult<Prisma.$WorkFlowRunPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one WorkFlowRun.
     * @param {WorkFlowRunUpdateArgs} args - Arguments to update one WorkFlowRun.
     * @example
     * // Update one WorkFlowRun
     * const workFlowRun = await prisma.workFlowRun.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends WorkFlowRunUpdateArgs>(args: SelectSubset<T, WorkFlowRunUpdateArgs<ExtArgs>>): Prisma__WorkFlowRunClient<$Result.GetResult<Prisma.$WorkFlowRunPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more WorkFlowRuns.
     * @param {WorkFlowRunDeleteManyArgs} args - Arguments to filter WorkFlowRuns to delete.
     * @example
     * // Delete a few WorkFlowRuns
     * const { count } = await prisma.workFlowRun.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends WorkFlowRunDeleteManyArgs>(args?: SelectSubset<T, WorkFlowRunDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more WorkFlowRuns.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkFlowRunUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many WorkFlowRuns
     * const workFlowRun = await prisma.workFlowRun.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends WorkFlowRunUpdateManyArgs>(args: SelectSubset<T, WorkFlowRunUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one WorkFlowRun.
     * @param {WorkFlowRunUpsertArgs} args - Arguments to update or create a WorkFlowRun.
     * @example
     * // Update or create a WorkFlowRun
     * const workFlowRun = await prisma.workFlowRun.upsert({
     *   create: {
     *     // ... data to create a WorkFlowRun
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the WorkFlowRun we want to update
     *   }
     * })
     */
    upsert<T extends WorkFlowRunUpsertArgs>(args: SelectSubset<T, WorkFlowRunUpsertArgs<ExtArgs>>): Prisma__WorkFlowRunClient<$Result.GetResult<Prisma.$WorkFlowRunPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of WorkFlowRuns.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkFlowRunCountArgs} args - Arguments to filter WorkFlowRuns to count.
     * @example
     * // Count the number of WorkFlowRuns
     * const count = await prisma.workFlowRun.count({
     *   where: {
     *     // ... the filter for the WorkFlowRuns we want to count
     *   }
     * })
    **/
    count<T extends WorkFlowRunCountArgs>(
      args?: Subset<T, WorkFlowRunCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], WorkFlowRunCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a WorkFlowRun.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkFlowRunAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends WorkFlowRunAggregateArgs>(args: Subset<T, WorkFlowRunAggregateArgs>): Prisma.PrismaPromise<GetWorkFlowRunAggregateType<T>>

    /**
     * Group by WorkFlowRun.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkFlowRunGroupByArgs} args - Group by arguments.
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
      T extends WorkFlowRunGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: WorkFlowRunGroupByArgs['orderBy'] }
        : { orderBy?: WorkFlowRunGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, WorkFlowRunGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetWorkFlowRunGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the WorkFlowRun model
   */
  readonly fields: WorkFlowRunFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for WorkFlowRun.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__WorkFlowRunClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    workflow<T extends WorkFlowDefaultArgs<ExtArgs> = {}>(args?: Subset<T, WorkFlowDefaultArgs<ExtArgs>>): Prisma__WorkFlowClient<$Result.GetResult<Prisma.$WorkFlowPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    outbox<T extends WorkFlowRun$outboxArgs<ExtArgs> = {}>(args?: Subset<T, WorkFlowRun$outboxArgs<ExtArgs>>): Prisma__WorkFlowOutBoxClient<$Result.GetResult<Prisma.$WorkFlowOutBoxPayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
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
   * Fields of the WorkFlowRun model
   */ 
  interface WorkFlowRunFieldRefs {
    readonly id: FieldRef<"WorkFlowRun", 'String'>
    readonly workflowId: FieldRef<"WorkFlowRun", 'String'>
    readonly meta: FieldRef<"WorkFlowRun", 'Json'>
  }
    

  // Custom InputTypes
  /**
   * WorkFlowRun findUnique
   */
  export type WorkFlowRunFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkFlowRun
     */
    select?: WorkFlowRunSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkFlowRunInclude<ExtArgs> | null
    /**
     * Filter, which WorkFlowRun to fetch.
     */
    where: WorkFlowRunWhereUniqueInput
  }

  /**
   * WorkFlowRun findUniqueOrThrow
   */
  export type WorkFlowRunFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkFlowRun
     */
    select?: WorkFlowRunSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkFlowRunInclude<ExtArgs> | null
    /**
     * Filter, which WorkFlowRun to fetch.
     */
    where: WorkFlowRunWhereUniqueInput
  }

  /**
   * WorkFlowRun findFirst
   */
  export type WorkFlowRunFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkFlowRun
     */
    select?: WorkFlowRunSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkFlowRunInclude<ExtArgs> | null
    /**
     * Filter, which WorkFlowRun to fetch.
     */
    where?: WorkFlowRunWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WorkFlowRuns to fetch.
     */
    orderBy?: WorkFlowRunOrderByWithRelationInput | WorkFlowRunOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for WorkFlowRuns.
     */
    cursor?: WorkFlowRunWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WorkFlowRuns from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WorkFlowRuns.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of WorkFlowRuns.
     */
    distinct?: WorkFlowRunScalarFieldEnum | WorkFlowRunScalarFieldEnum[]
  }

  /**
   * WorkFlowRun findFirstOrThrow
   */
  export type WorkFlowRunFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkFlowRun
     */
    select?: WorkFlowRunSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkFlowRunInclude<ExtArgs> | null
    /**
     * Filter, which WorkFlowRun to fetch.
     */
    where?: WorkFlowRunWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WorkFlowRuns to fetch.
     */
    orderBy?: WorkFlowRunOrderByWithRelationInput | WorkFlowRunOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for WorkFlowRuns.
     */
    cursor?: WorkFlowRunWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WorkFlowRuns from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WorkFlowRuns.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of WorkFlowRuns.
     */
    distinct?: WorkFlowRunScalarFieldEnum | WorkFlowRunScalarFieldEnum[]
  }

  /**
   * WorkFlowRun findMany
   */
  export type WorkFlowRunFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkFlowRun
     */
    select?: WorkFlowRunSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkFlowRunInclude<ExtArgs> | null
    /**
     * Filter, which WorkFlowRuns to fetch.
     */
    where?: WorkFlowRunWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WorkFlowRuns to fetch.
     */
    orderBy?: WorkFlowRunOrderByWithRelationInput | WorkFlowRunOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing WorkFlowRuns.
     */
    cursor?: WorkFlowRunWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WorkFlowRuns from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WorkFlowRuns.
     */
    skip?: number
    distinct?: WorkFlowRunScalarFieldEnum | WorkFlowRunScalarFieldEnum[]
  }

  /**
   * WorkFlowRun create
   */
  export type WorkFlowRunCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkFlowRun
     */
    select?: WorkFlowRunSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkFlowRunInclude<ExtArgs> | null
    /**
     * The data needed to create a WorkFlowRun.
     */
    data: XOR<WorkFlowRunCreateInput, WorkFlowRunUncheckedCreateInput>
  }

  /**
   * WorkFlowRun createMany
   */
  export type WorkFlowRunCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many WorkFlowRuns.
     */
    data: WorkFlowRunCreateManyInput | WorkFlowRunCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * WorkFlowRun createManyAndReturn
   */
  export type WorkFlowRunCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkFlowRun
     */
    select?: WorkFlowRunSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many WorkFlowRuns.
     */
    data: WorkFlowRunCreateManyInput | WorkFlowRunCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkFlowRunIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * WorkFlowRun update
   */
  export type WorkFlowRunUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkFlowRun
     */
    select?: WorkFlowRunSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkFlowRunInclude<ExtArgs> | null
    /**
     * The data needed to update a WorkFlowRun.
     */
    data: XOR<WorkFlowRunUpdateInput, WorkFlowRunUncheckedUpdateInput>
    /**
     * Choose, which WorkFlowRun to update.
     */
    where: WorkFlowRunWhereUniqueInput
  }

  /**
   * WorkFlowRun updateMany
   */
  export type WorkFlowRunUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update WorkFlowRuns.
     */
    data: XOR<WorkFlowRunUpdateManyMutationInput, WorkFlowRunUncheckedUpdateManyInput>
    /**
     * Filter which WorkFlowRuns to update
     */
    where?: WorkFlowRunWhereInput
  }

  /**
   * WorkFlowRun upsert
   */
  export type WorkFlowRunUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkFlowRun
     */
    select?: WorkFlowRunSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkFlowRunInclude<ExtArgs> | null
    /**
     * The filter to search for the WorkFlowRun to update in case it exists.
     */
    where: WorkFlowRunWhereUniqueInput
    /**
     * In case the WorkFlowRun found by the `where` argument doesn't exist, create a new WorkFlowRun with this data.
     */
    create: XOR<WorkFlowRunCreateInput, WorkFlowRunUncheckedCreateInput>
    /**
     * In case the WorkFlowRun was found with the provided `where` argument, update it with this data.
     */
    update: XOR<WorkFlowRunUpdateInput, WorkFlowRunUncheckedUpdateInput>
  }

  /**
   * WorkFlowRun delete
   */
  export type WorkFlowRunDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkFlowRun
     */
    select?: WorkFlowRunSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkFlowRunInclude<ExtArgs> | null
    /**
     * Filter which WorkFlowRun to delete.
     */
    where: WorkFlowRunWhereUniqueInput
  }

  /**
   * WorkFlowRun deleteMany
   */
  export type WorkFlowRunDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which WorkFlowRuns to delete
     */
    where?: WorkFlowRunWhereInput
  }

  /**
   * WorkFlowRun.outbox
   */
  export type WorkFlowRun$outboxArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkFlowOutBox
     */
    select?: WorkFlowOutBoxSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkFlowOutBoxInclude<ExtArgs> | null
    where?: WorkFlowOutBoxWhereInput
  }

  /**
   * WorkFlowRun without action
   */
  export type WorkFlowRunDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkFlowRun
     */
    select?: WorkFlowRunSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkFlowRunInclude<ExtArgs> | null
  }


  /**
   * Model WorkFlowOutBox
   */

  export type AggregateWorkFlowOutBox = {
    _count: WorkFlowOutBoxCountAggregateOutputType | null
    _min: WorkFlowOutBoxMinAggregateOutputType | null
    _max: WorkFlowOutBoxMaxAggregateOutputType | null
  }

  export type WorkFlowOutBoxMinAggregateOutputType = {
    id: string | null
    outboxId: string | null
  }

  export type WorkFlowOutBoxMaxAggregateOutputType = {
    id: string | null
    outboxId: string | null
  }

  export type WorkFlowOutBoxCountAggregateOutputType = {
    id: number
    outboxId: number
    _all: number
  }


  export type WorkFlowOutBoxMinAggregateInputType = {
    id?: true
    outboxId?: true
  }

  export type WorkFlowOutBoxMaxAggregateInputType = {
    id?: true
    outboxId?: true
  }

  export type WorkFlowOutBoxCountAggregateInputType = {
    id?: true
    outboxId?: true
    _all?: true
  }

  export type WorkFlowOutBoxAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which WorkFlowOutBox to aggregate.
     */
    where?: WorkFlowOutBoxWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WorkFlowOutBoxes to fetch.
     */
    orderBy?: WorkFlowOutBoxOrderByWithRelationInput | WorkFlowOutBoxOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: WorkFlowOutBoxWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WorkFlowOutBoxes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WorkFlowOutBoxes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned WorkFlowOutBoxes
    **/
    _count?: true | WorkFlowOutBoxCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: WorkFlowOutBoxMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: WorkFlowOutBoxMaxAggregateInputType
  }

  export type GetWorkFlowOutBoxAggregateType<T extends WorkFlowOutBoxAggregateArgs> = {
        [P in keyof T & keyof AggregateWorkFlowOutBox]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateWorkFlowOutBox[P]>
      : GetScalarType<T[P], AggregateWorkFlowOutBox[P]>
  }




  export type WorkFlowOutBoxGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WorkFlowOutBoxWhereInput
    orderBy?: WorkFlowOutBoxOrderByWithAggregationInput | WorkFlowOutBoxOrderByWithAggregationInput[]
    by: WorkFlowOutBoxScalarFieldEnum[] | WorkFlowOutBoxScalarFieldEnum
    having?: WorkFlowOutBoxScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: WorkFlowOutBoxCountAggregateInputType | true
    _min?: WorkFlowOutBoxMinAggregateInputType
    _max?: WorkFlowOutBoxMaxAggregateInputType
  }

  export type WorkFlowOutBoxGroupByOutputType = {
    id: string
    outboxId: string
    _count: WorkFlowOutBoxCountAggregateOutputType | null
    _min: WorkFlowOutBoxMinAggregateOutputType | null
    _max: WorkFlowOutBoxMaxAggregateOutputType | null
  }

  type GetWorkFlowOutBoxGroupByPayload<T extends WorkFlowOutBoxGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<WorkFlowOutBoxGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof WorkFlowOutBoxGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], WorkFlowOutBoxGroupByOutputType[P]>
            : GetScalarType<T[P], WorkFlowOutBoxGroupByOutputType[P]>
        }
      >
    >


  export type WorkFlowOutBoxSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    outboxId?: boolean
    workflowOutBox?: boolean | WorkFlowRunDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["workFlowOutBox"]>

  export type WorkFlowOutBoxSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    outboxId?: boolean
    workflowOutBox?: boolean | WorkFlowRunDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["workFlowOutBox"]>

  export type WorkFlowOutBoxSelectScalar = {
    id?: boolean
    outboxId?: boolean
  }

  export type WorkFlowOutBoxInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    workflowOutBox?: boolean | WorkFlowRunDefaultArgs<ExtArgs>
  }
  export type WorkFlowOutBoxIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    workflowOutBox?: boolean | WorkFlowRunDefaultArgs<ExtArgs>
  }

  export type $WorkFlowOutBoxPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "WorkFlowOutBox"
    objects: {
      workflowOutBox: Prisma.$WorkFlowRunPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      outboxId: string
    }, ExtArgs["result"]["workFlowOutBox"]>
    composites: {}
  }

  type WorkFlowOutBoxGetPayload<S extends boolean | null | undefined | WorkFlowOutBoxDefaultArgs> = $Result.GetResult<Prisma.$WorkFlowOutBoxPayload, S>

  type WorkFlowOutBoxCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<WorkFlowOutBoxFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: WorkFlowOutBoxCountAggregateInputType | true
    }

  export interface WorkFlowOutBoxDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['WorkFlowOutBox'], meta: { name: 'WorkFlowOutBox' } }
    /**
     * Find zero or one WorkFlowOutBox that matches the filter.
     * @param {WorkFlowOutBoxFindUniqueArgs} args - Arguments to find a WorkFlowOutBox
     * @example
     * // Get one WorkFlowOutBox
     * const workFlowOutBox = await prisma.workFlowOutBox.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends WorkFlowOutBoxFindUniqueArgs>(args: SelectSubset<T, WorkFlowOutBoxFindUniqueArgs<ExtArgs>>): Prisma__WorkFlowOutBoxClient<$Result.GetResult<Prisma.$WorkFlowOutBoxPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one WorkFlowOutBox that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {WorkFlowOutBoxFindUniqueOrThrowArgs} args - Arguments to find a WorkFlowOutBox
     * @example
     * // Get one WorkFlowOutBox
     * const workFlowOutBox = await prisma.workFlowOutBox.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends WorkFlowOutBoxFindUniqueOrThrowArgs>(args: SelectSubset<T, WorkFlowOutBoxFindUniqueOrThrowArgs<ExtArgs>>): Prisma__WorkFlowOutBoxClient<$Result.GetResult<Prisma.$WorkFlowOutBoxPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first WorkFlowOutBox that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkFlowOutBoxFindFirstArgs} args - Arguments to find a WorkFlowOutBox
     * @example
     * // Get one WorkFlowOutBox
     * const workFlowOutBox = await prisma.workFlowOutBox.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends WorkFlowOutBoxFindFirstArgs>(args?: SelectSubset<T, WorkFlowOutBoxFindFirstArgs<ExtArgs>>): Prisma__WorkFlowOutBoxClient<$Result.GetResult<Prisma.$WorkFlowOutBoxPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first WorkFlowOutBox that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkFlowOutBoxFindFirstOrThrowArgs} args - Arguments to find a WorkFlowOutBox
     * @example
     * // Get one WorkFlowOutBox
     * const workFlowOutBox = await prisma.workFlowOutBox.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends WorkFlowOutBoxFindFirstOrThrowArgs>(args?: SelectSubset<T, WorkFlowOutBoxFindFirstOrThrowArgs<ExtArgs>>): Prisma__WorkFlowOutBoxClient<$Result.GetResult<Prisma.$WorkFlowOutBoxPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more WorkFlowOutBoxes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkFlowOutBoxFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all WorkFlowOutBoxes
     * const workFlowOutBoxes = await prisma.workFlowOutBox.findMany()
     * 
     * // Get first 10 WorkFlowOutBoxes
     * const workFlowOutBoxes = await prisma.workFlowOutBox.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const workFlowOutBoxWithIdOnly = await prisma.workFlowOutBox.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends WorkFlowOutBoxFindManyArgs>(args?: SelectSubset<T, WorkFlowOutBoxFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WorkFlowOutBoxPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a WorkFlowOutBox.
     * @param {WorkFlowOutBoxCreateArgs} args - Arguments to create a WorkFlowOutBox.
     * @example
     * // Create one WorkFlowOutBox
     * const WorkFlowOutBox = await prisma.workFlowOutBox.create({
     *   data: {
     *     // ... data to create a WorkFlowOutBox
     *   }
     * })
     * 
     */
    create<T extends WorkFlowOutBoxCreateArgs>(args: SelectSubset<T, WorkFlowOutBoxCreateArgs<ExtArgs>>): Prisma__WorkFlowOutBoxClient<$Result.GetResult<Prisma.$WorkFlowOutBoxPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many WorkFlowOutBoxes.
     * @param {WorkFlowOutBoxCreateManyArgs} args - Arguments to create many WorkFlowOutBoxes.
     * @example
     * // Create many WorkFlowOutBoxes
     * const workFlowOutBox = await prisma.workFlowOutBox.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends WorkFlowOutBoxCreateManyArgs>(args?: SelectSubset<T, WorkFlowOutBoxCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many WorkFlowOutBoxes and returns the data saved in the database.
     * @param {WorkFlowOutBoxCreateManyAndReturnArgs} args - Arguments to create many WorkFlowOutBoxes.
     * @example
     * // Create many WorkFlowOutBoxes
     * const workFlowOutBox = await prisma.workFlowOutBox.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many WorkFlowOutBoxes and only return the `id`
     * const workFlowOutBoxWithIdOnly = await prisma.workFlowOutBox.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends WorkFlowOutBoxCreateManyAndReturnArgs>(args?: SelectSubset<T, WorkFlowOutBoxCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WorkFlowOutBoxPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a WorkFlowOutBox.
     * @param {WorkFlowOutBoxDeleteArgs} args - Arguments to delete one WorkFlowOutBox.
     * @example
     * // Delete one WorkFlowOutBox
     * const WorkFlowOutBox = await prisma.workFlowOutBox.delete({
     *   where: {
     *     // ... filter to delete one WorkFlowOutBox
     *   }
     * })
     * 
     */
    delete<T extends WorkFlowOutBoxDeleteArgs>(args: SelectSubset<T, WorkFlowOutBoxDeleteArgs<ExtArgs>>): Prisma__WorkFlowOutBoxClient<$Result.GetResult<Prisma.$WorkFlowOutBoxPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one WorkFlowOutBox.
     * @param {WorkFlowOutBoxUpdateArgs} args - Arguments to update one WorkFlowOutBox.
     * @example
     * // Update one WorkFlowOutBox
     * const workFlowOutBox = await prisma.workFlowOutBox.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends WorkFlowOutBoxUpdateArgs>(args: SelectSubset<T, WorkFlowOutBoxUpdateArgs<ExtArgs>>): Prisma__WorkFlowOutBoxClient<$Result.GetResult<Prisma.$WorkFlowOutBoxPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more WorkFlowOutBoxes.
     * @param {WorkFlowOutBoxDeleteManyArgs} args - Arguments to filter WorkFlowOutBoxes to delete.
     * @example
     * // Delete a few WorkFlowOutBoxes
     * const { count } = await prisma.workFlowOutBox.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends WorkFlowOutBoxDeleteManyArgs>(args?: SelectSubset<T, WorkFlowOutBoxDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more WorkFlowOutBoxes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkFlowOutBoxUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many WorkFlowOutBoxes
     * const workFlowOutBox = await prisma.workFlowOutBox.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends WorkFlowOutBoxUpdateManyArgs>(args: SelectSubset<T, WorkFlowOutBoxUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one WorkFlowOutBox.
     * @param {WorkFlowOutBoxUpsertArgs} args - Arguments to update or create a WorkFlowOutBox.
     * @example
     * // Update or create a WorkFlowOutBox
     * const workFlowOutBox = await prisma.workFlowOutBox.upsert({
     *   create: {
     *     // ... data to create a WorkFlowOutBox
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the WorkFlowOutBox we want to update
     *   }
     * })
     */
    upsert<T extends WorkFlowOutBoxUpsertArgs>(args: SelectSubset<T, WorkFlowOutBoxUpsertArgs<ExtArgs>>): Prisma__WorkFlowOutBoxClient<$Result.GetResult<Prisma.$WorkFlowOutBoxPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of WorkFlowOutBoxes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkFlowOutBoxCountArgs} args - Arguments to filter WorkFlowOutBoxes to count.
     * @example
     * // Count the number of WorkFlowOutBoxes
     * const count = await prisma.workFlowOutBox.count({
     *   where: {
     *     // ... the filter for the WorkFlowOutBoxes we want to count
     *   }
     * })
    **/
    count<T extends WorkFlowOutBoxCountArgs>(
      args?: Subset<T, WorkFlowOutBoxCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], WorkFlowOutBoxCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a WorkFlowOutBox.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkFlowOutBoxAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends WorkFlowOutBoxAggregateArgs>(args: Subset<T, WorkFlowOutBoxAggregateArgs>): Prisma.PrismaPromise<GetWorkFlowOutBoxAggregateType<T>>

    /**
     * Group by WorkFlowOutBox.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkFlowOutBoxGroupByArgs} args - Group by arguments.
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
      T extends WorkFlowOutBoxGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: WorkFlowOutBoxGroupByArgs['orderBy'] }
        : { orderBy?: WorkFlowOutBoxGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, WorkFlowOutBoxGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetWorkFlowOutBoxGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the WorkFlowOutBox model
   */
  readonly fields: WorkFlowOutBoxFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for WorkFlowOutBox.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__WorkFlowOutBoxClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    workflowOutBox<T extends WorkFlowRunDefaultArgs<ExtArgs> = {}>(args?: Subset<T, WorkFlowRunDefaultArgs<ExtArgs>>): Prisma__WorkFlowRunClient<$Result.GetResult<Prisma.$WorkFlowRunPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
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
   * Fields of the WorkFlowOutBox model
   */ 
  interface WorkFlowOutBoxFieldRefs {
    readonly id: FieldRef<"WorkFlowOutBox", 'String'>
    readonly outboxId: FieldRef<"WorkFlowOutBox", 'String'>
  }
    

  // Custom InputTypes
  /**
   * WorkFlowOutBox findUnique
   */
  export type WorkFlowOutBoxFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkFlowOutBox
     */
    select?: WorkFlowOutBoxSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkFlowOutBoxInclude<ExtArgs> | null
    /**
     * Filter, which WorkFlowOutBox to fetch.
     */
    where: WorkFlowOutBoxWhereUniqueInput
  }

  /**
   * WorkFlowOutBox findUniqueOrThrow
   */
  export type WorkFlowOutBoxFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkFlowOutBox
     */
    select?: WorkFlowOutBoxSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkFlowOutBoxInclude<ExtArgs> | null
    /**
     * Filter, which WorkFlowOutBox to fetch.
     */
    where: WorkFlowOutBoxWhereUniqueInput
  }

  /**
   * WorkFlowOutBox findFirst
   */
  export type WorkFlowOutBoxFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkFlowOutBox
     */
    select?: WorkFlowOutBoxSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkFlowOutBoxInclude<ExtArgs> | null
    /**
     * Filter, which WorkFlowOutBox to fetch.
     */
    where?: WorkFlowOutBoxWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WorkFlowOutBoxes to fetch.
     */
    orderBy?: WorkFlowOutBoxOrderByWithRelationInput | WorkFlowOutBoxOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for WorkFlowOutBoxes.
     */
    cursor?: WorkFlowOutBoxWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WorkFlowOutBoxes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WorkFlowOutBoxes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of WorkFlowOutBoxes.
     */
    distinct?: WorkFlowOutBoxScalarFieldEnum | WorkFlowOutBoxScalarFieldEnum[]
  }

  /**
   * WorkFlowOutBox findFirstOrThrow
   */
  export type WorkFlowOutBoxFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkFlowOutBox
     */
    select?: WorkFlowOutBoxSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkFlowOutBoxInclude<ExtArgs> | null
    /**
     * Filter, which WorkFlowOutBox to fetch.
     */
    where?: WorkFlowOutBoxWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WorkFlowOutBoxes to fetch.
     */
    orderBy?: WorkFlowOutBoxOrderByWithRelationInput | WorkFlowOutBoxOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for WorkFlowOutBoxes.
     */
    cursor?: WorkFlowOutBoxWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WorkFlowOutBoxes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WorkFlowOutBoxes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of WorkFlowOutBoxes.
     */
    distinct?: WorkFlowOutBoxScalarFieldEnum | WorkFlowOutBoxScalarFieldEnum[]
  }

  /**
   * WorkFlowOutBox findMany
   */
  export type WorkFlowOutBoxFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkFlowOutBox
     */
    select?: WorkFlowOutBoxSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkFlowOutBoxInclude<ExtArgs> | null
    /**
     * Filter, which WorkFlowOutBoxes to fetch.
     */
    where?: WorkFlowOutBoxWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WorkFlowOutBoxes to fetch.
     */
    orderBy?: WorkFlowOutBoxOrderByWithRelationInput | WorkFlowOutBoxOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing WorkFlowOutBoxes.
     */
    cursor?: WorkFlowOutBoxWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WorkFlowOutBoxes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WorkFlowOutBoxes.
     */
    skip?: number
    distinct?: WorkFlowOutBoxScalarFieldEnum | WorkFlowOutBoxScalarFieldEnum[]
  }

  /**
   * WorkFlowOutBox create
   */
  export type WorkFlowOutBoxCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkFlowOutBox
     */
    select?: WorkFlowOutBoxSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkFlowOutBoxInclude<ExtArgs> | null
    /**
     * The data needed to create a WorkFlowOutBox.
     */
    data: XOR<WorkFlowOutBoxCreateInput, WorkFlowOutBoxUncheckedCreateInput>
  }

  /**
   * WorkFlowOutBox createMany
   */
  export type WorkFlowOutBoxCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many WorkFlowOutBoxes.
     */
    data: WorkFlowOutBoxCreateManyInput | WorkFlowOutBoxCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * WorkFlowOutBox createManyAndReturn
   */
  export type WorkFlowOutBoxCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkFlowOutBox
     */
    select?: WorkFlowOutBoxSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many WorkFlowOutBoxes.
     */
    data: WorkFlowOutBoxCreateManyInput | WorkFlowOutBoxCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkFlowOutBoxIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * WorkFlowOutBox update
   */
  export type WorkFlowOutBoxUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkFlowOutBox
     */
    select?: WorkFlowOutBoxSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkFlowOutBoxInclude<ExtArgs> | null
    /**
     * The data needed to update a WorkFlowOutBox.
     */
    data: XOR<WorkFlowOutBoxUpdateInput, WorkFlowOutBoxUncheckedUpdateInput>
    /**
     * Choose, which WorkFlowOutBox to update.
     */
    where: WorkFlowOutBoxWhereUniqueInput
  }

  /**
   * WorkFlowOutBox updateMany
   */
  export type WorkFlowOutBoxUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update WorkFlowOutBoxes.
     */
    data: XOR<WorkFlowOutBoxUpdateManyMutationInput, WorkFlowOutBoxUncheckedUpdateManyInput>
    /**
     * Filter which WorkFlowOutBoxes to update
     */
    where?: WorkFlowOutBoxWhereInput
  }

  /**
   * WorkFlowOutBox upsert
   */
  export type WorkFlowOutBoxUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkFlowOutBox
     */
    select?: WorkFlowOutBoxSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkFlowOutBoxInclude<ExtArgs> | null
    /**
     * The filter to search for the WorkFlowOutBox to update in case it exists.
     */
    where: WorkFlowOutBoxWhereUniqueInput
    /**
     * In case the WorkFlowOutBox found by the `where` argument doesn't exist, create a new WorkFlowOutBox with this data.
     */
    create: XOR<WorkFlowOutBoxCreateInput, WorkFlowOutBoxUncheckedCreateInput>
    /**
     * In case the WorkFlowOutBox was found with the provided `where` argument, update it with this data.
     */
    update: XOR<WorkFlowOutBoxUpdateInput, WorkFlowOutBoxUncheckedUpdateInput>
  }

  /**
   * WorkFlowOutBox delete
   */
  export type WorkFlowOutBoxDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkFlowOutBox
     */
    select?: WorkFlowOutBoxSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkFlowOutBoxInclude<ExtArgs> | null
    /**
     * Filter which WorkFlowOutBox to delete.
     */
    where: WorkFlowOutBoxWhereUniqueInput
  }

  /**
   * WorkFlowOutBox deleteMany
   */
  export type WorkFlowOutBoxDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which WorkFlowOutBoxes to delete
     */
    where?: WorkFlowOutBoxWhereInput
  }

  /**
   * WorkFlowOutBox without action
   */
  export type WorkFlowOutBoxDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkFlowOutBox
     */
    select?: WorkFlowOutBoxSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkFlowOutBoxInclude<ExtArgs> | null
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


  export const UserScalarFieldEnum: {
    id: 'id',
    email: 'email',
    password: 'password',
    name: 'name',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const SessionScalarFieldEnum: {
    sid: 'sid',
    userId: 'userId',
    expire: 'expire'
  };

  export type SessionScalarFieldEnum = (typeof SessionScalarFieldEnum)[keyof typeof SessionScalarFieldEnum]


  export const WorkFlowScalarFieldEnum: {
    id: 'id'
  };

  export type WorkFlowScalarFieldEnum = (typeof WorkFlowScalarFieldEnum)[keyof typeof WorkFlowScalarFieldEnum]


  export const TriggerNodesScalarFieldEnum: {
    id: 'id',
    workflowId: 'workflowId',
    TriggerNodeId: 'TriggerNodeId'
  };

  export type TriggerNodesScalarFieldEnum = (typeof TriggerNodesScalarFieldEnum)[keyof typeof TriggerNodesScalarFieldEnum]


  export const AvailableTriggerNodesScalarFieldEnum: {
    id: 'id',
    name: 'name'
  };

  export type AvailableTriggerNodesScalarFieldEnum = (typeof AvailableTriggerNodesScalarFieldEnum)[keyof typeof AvailableTriggerNodesScalarFieldEnum]


  export const ActionNodesScalarFieldEnum: {
    id: 'id',
    workflowId: 'workflowId',
    ActionNodeId: 'ActionNodeId'
  };

  export type ActionNodesScalarFieldEnum = (typeof ActionNodesScalarFieldEnum)[keyof typeof ActionNodesScalarFieldEnum]


  export const AvailableActionNodesScalarFieldEnum: {
    id: 'id',
    name: 'name'
  };

  export type AvailableActionNodesScalarFieldEnum = (typeof AvailableActionNodesScalarFieldEnum)[keyof typeof AvailableActionNodesScalarFieldEnum]


  export const WorkFlowRunScalarFieldEnum: {
    id: 'id',
    workflowId: 'workflowId',
    meta: 'meta'
  };

  export type WorkFlowRunScalarFieldEnum = (typeof WorkFlowRunScalarFieldEnum)[keyof typeof WorkFlowRunScalarFieldEnum]


  export const WorkFlowOutBoxScalarFieldEnum: {
    id: 'id',
    outboxId: 'outboxId'
  };

  export type WorkFlowOutBoxScalarFieldEnum = (typeof WorkFlowOutBoxScalarFieldEnum)[keyof typeof WorkFlowOutBoxScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const JsonNullValueInput: {
    JsonNull: typeof JsonNull
  };

  export type JsonNullValueInput = (typeof JsonNullValueInput)[keyof typeof JsonNullValueInput]


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


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


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
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    name?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    sessions?: SessionListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    name?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    sessions?: SessionOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    password?: StringFilter<"User"> | string
    name?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    sessions?: SessionListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    name?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    name?: StringNullableWithAggregatesFilter<"User"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type SessionWhereInput = {
    AND?: SessionWhereInput | SessionWhereInput[]
    OR?: SessionWhereInput[]
    NOT?: SessionWhereInput | SessionWhereInput[]
    sid?: StringFilter<"Session"> | string
    userId?: StringFilter<"Session"> | string
    expire?: DateTimeFilter<"Session"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type SessionOrderByWithRelationInput = {
    sid?: SortOrder
    userId?: SortOrder
    expire?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type SessionWhereUniqueInput = Prisma.AtLeast<{
    sid?: string
    AND?: SessionWhereInput | SessionWhereInput[]
    OR?: SessionWhereInput[]
    NOT?: SessionWhereInput | SessionWhereInput[]
    userId?: StringFilter<"Session"> | string
    expire?: DateTimeFilter<"Session"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "sid">

  export type SessionOrderByWithAggregationInput = {
    sid?: SortOrder
    userId?: SortOrder
    expire?: SortOrder
    _count?: SessionCountOrderByAggregateInput
    _max?: SessionMaxOrderByAggregateInput
    _min?: SessionMinOrderByAggregateInput
  }

  export type SessionScalarWhereWithAggregatesInput = {
    AND?: SessionScalarWhereWithAggregatesInput | SessionScalarWhereWithAggregatesInput[]
    OR?: SessionScalarWhereWithAggregatesInput[]
    NOT?: SessionScalarWhereWithAggregatesInput | SessionScalarWhereWithAggregatesInput[]
    sid?: StringWithAggregatesFilter<"Session"> | string
    userId?: StringWithAggregatesFilter<"Session"> | string
    expire?: DateTimeWithAggregatesFilter<"Session"> | Date | string
  }

  export type WorkFlowWhereInput = {
    AND?: WorkFlowWhereInput | WorkFlowWhereInput[]
    OR?: WorkFlowWhereInput[]
    NOT?: WorkFlowWhereInput | WorkFlowWhereInput[]
    id?: StringFilter<"WorkFlow"> | string
    triggerNodes?: XOR<TriggerNodesNullableScalarRelationFilter, TriggerNodesWhereInput> | null
    actionsNodes?: ActionNodesListRelationFilter
    workflowRun?: WorkFlowRunListRelationFilter
  }

  export type WorkFlowOrderByWithRelationInput = {
    id?: SortOrder
    triggerNodes?: TriggerNodesOrderByWithRelationInput
    actionsNodes?: ActionNodesOrderByRelationAggregateInput
    workflowRun?: WorkFlowRunOrderByRelationAggregateInput
  }

  export type WorkFlowWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: WorkFlowWhereInput | WorkFlowWhereInput[]
    OR?: WorkFlowWhereInput[]
    NOT?: WorkFlowWhereInput | WorkFlowWhereInput[]
    triggerNodes?: XOR<TriggerNodesNullableScalarRelationFilter, TriggerNodesWhereInput> | null
    actionsNodes?: ActionNodesListRelationFilter
    workflowRun?: WorkFlowRunListRelationFilter
  }, "id">

  export type WorkFlowOrderByWithAggregationInput = {
    id?: SortOrder
    _count?: WorkFlowCountOrderByAggregateInput
    _max?: WorkFlowMaxOrderByAggregateInput
    _min?: WorkFlowMinOrderByAggregateInput
  }

  export type WorkFlowScalarWhereWithAggregatesInput = {
    AND?: WorkFlowScalarWhereWithAggregatesInput | WorkFlowScalarWhereWithAggregatesInput[]
    OR?: WorkFlowScalarWhereWithAggregatesInput[]
    NOT?: WorkFlowScalarWhereWithAggregatesInput | WorkFlowScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"WorkFlow"> | string
  }

  export type TriggerNodesWhereInput = {
    AND?: TriggerNodesWhereInput | TriggerNodesWhereInput[]
    OR?: TriggerNodesWhereInput[]
    NOT?: TriggerNodesWhereInput | TriggerNodesWhereInput[]
    id?: StringFilter<"TriggerNodes"> | string
    workflowId?: StringFilter<"TriggerNodes"> | string
    TriggerNodeId?: StringFilter<"TriggerNodes"> | string
    workflow?: XOR<WorkFlowScalarRelationFilter, WorkFlowWhereInput>
    availableTriggerNodes?: XOR<AvailableTriggerNodesScalarRelationFilter, AvailableTriggerNodesWhereInput>
  }

  export type TriggerNodesOrderByWithRelationInput = {
    id?: SortOrder
    workflowId?: SortOrder
    TriggerNodeId?: SortOrder
    workflow?: WorkFlowOrderByWithRelationInput
    availableTriggerNodes?: AvailableTriggerNodesOrderByWithRelationInput
  }

  export type TriggerNodesWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    workflowId?: string
    AND?: TriggerNodesWhereInput | TriggerNodesWhereInput[]
    OR?: TriggerNodesWhereInput[]
    NOT?: TriggerNodesWhereInput | TriggerNodesWhereInput[]
    TriggerNodeId?: StringFilter<"TriggerNodes"> | string
    workflow?: XOR<WorkFlowScalarRelationFilter, WorkFlowWhereInput>
    availableTriggerNodes?: XOR<AvailableTriggerNodesScalarRelationFilter, AvailableTriggerNodesWhereInput>
  }, "id" | "workflowId">

  export type TriggerNodesOrderByWithAggregationInput = {
    id?: SortOrder
    workflowId?: SortOrder
    TriggerNodeId?: SortOrder
    _count?: TriggerNodesCountOrderByAggregateInput
    _max?: TriggerNodesMaxOrderByAggregateInput
    _min?: TriggerNodesMinOrderByAggregateInput
  }

  export type TriggerNodesScalarWhereWithAggregatesInput = {
    AND?: TriggerNodesScalarWhereWithAggregatesInput | TriggerNodesScalarWhereWithAggregatesInput[]
    OR?: TriggerNodesScalarWhereWithAggregatesInput[]
    NOT?: TriggerNodesScalarWhereWithAggregatesInput | TriggerNodesScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"TriggerNodes"> | string
    workflowId?: StringWithAggregatesFilter<"TriggerNodes"> | string
    TriggerNodeId?: StringWithAggregatesFilter<"TriggerNodes"> | string
  }

  export type AvailableTriggerNodesWhereInput = {
    AND?: AvailableTriggerNodesWhereInput | AvailableTriggerNodesWhereInput[]
    OR?: AvailableTriggerNodesWhereInput[]
    NOT?: AvailableTriggerNodesWhereInput | AvailableTriggerNodesWhereInput[]
    id?: StringFilter<"AvailableTriggerNodes"> | string
    name?: StringFilter<"AvailableTriggerNodes"> | string
    TriggerNode?: TriggerNodesListRelationFilter
  }

  export type AvailableTriggerNodesOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    TriggerNode?: TriggerNodesOrderByRelationAggregateInput
  }

  export type AvailableTriggerNodesWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: AvailableTriggerNodesWhereInput | AvailableTriggerNodesWhereInput[]
    OR?: AvailableTriggerNodesWhereInput[]
    NOT?: AvailableTriggerNodesWhereInput | AvailableTriggerNodesWhereInput[]
    name?: StringFilter<"AvailableTriggerNodes"> | string
    TriggerNode?: TriggerNodesListRelationFilter
  }, "id">

  export type AvailableTriggerNodesOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    _count?: AvailableTriggerNodesCountOrderByAggregateInput
    _max?: AvailableTriggerNodesMaxOrderByAggregateInput
    _min?: AvailableTriggerNodesMinOrderByAggregateInput
  }

  export type AvailableTriggerNodesScalarWhereWithAggregatesInput = {
    AND?: AvailableTriggerNodesScalarWhereWithAggregatesInput | AvailableTriggerNodesScalarWhereWithAggregatesInput[]
    OR?: AvailableTriggerNodesScalarWhereWithAggregatesInput[]
    NOT?: AvailableTriggerNodesScalarWhereWithAggregatesInput | AvailableTriggerNodesScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"AvailableTriggerNodes"> | string
    name?: StringWithAggregatesFilter<"AvailableTriggerNodes"> | string
  }

  export type ActionNodesWhereInput = {
    AND?: ActionNodesWhereInput | ActionNodesWhereInput[]
    OR?: ActionNodesWhereInput[]
    NOT?: ActionNodesWhereInput | ActionNodesWhereInput[]
    id?: StringFilter<"ActionNodes"> | string
    workflowId?: StringFilter<"ActionNodes"> | string
    ActionNodeId?: StringFilter<"ActionNodes"> | string
    workflow?: XOR<WorkFlowScalarRelationFilter, WorkFlowWhereInput>
    availableActionNodes?: XOR<AvailableActionNodesScalarRelationFilter, AvailableActionNodesWhereInput>
  }

  export type ActionNodesOrderByWithRelationInput = {
    id?: SortOrder
    workflowId?: SortOrder
    ActionNodeId?: SortOrder
    workflow?: WorkFlowOrderByWithRelationInput
    availableActionNodes?: AvailableActionNodesOrderByWithRelationInput
  }

  export type ActionNodesWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ActionNodesWhereInput | ActionNodesWhereInput[]
    OR?: ActionNodesWhereInput[]
    NOT?: ActionNodesWhereInput | ActionNodesWhereInput[]
    workflowId?: StringFilter<"ActionNodes"> | string
    ActionNodeId?: StringFilter<"ActionNodes"> | string
    workflow?: XOR<WorkFlowScalarRelationFilter, WorkFlowWhereInput>
    availableActionNodes?: XOR<AvailableActionNodesScalarRelationFilter, AvailableActionNodesWhereInput>
  }, "id">

  export type ActionNodesOrderByWithAggregationInput = {
    id?: SortOrder
    workflowId?: SortOrder
    ActionNodeId?: SortOrder
    _count?: ActionNodesCountOrderByAggregateInput
    _max?: ActionNodesMaxOrderByAggregateInput
    _min?: ActionNodesMinOrderByAggregateInput
  }

  export type ActionNodesScalarWhereWithAggregatesInput = {
    AND?: ActionNodesScalarWhereWithAggregatesInput | ActionNodesScalarWhereWithAggregatesInput[]
    OR?: ActionNodesScalarWhereWithAggregatesInput[]
    NOT?: ActionNodesScalarWhereWithAggregatesInput | ActionNodesScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ActionNodes"> | string
    workflowId?: StringWithAggregatesFilter<"ActionNodes"> | string
    ActionNodeId?: StringWithAggregatesFilter<"ActionNodes"> | string
  }

  export type AvailableActionNodesWhereInput = {
    AND?: AvailableActionNodesWhereInput | AvailableActionNodesWhereInput[]
    OR?: AvailableActionNodesWhereInput[]
    NOT?: AvailableActionNodesWhereInput | AvailableActionNodesWhereInput[]
    id?: StringFilter<"AvailableActionNodes"> | string
    name?: StringFilter<"AvailableActionNodes"> | string
    actionNodes?: ActionNodesListRelationFilter
  }

  export type AvailableActionNodesOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    actionNodes?: ActionNodesOrderByRelationAggregateInput
  }

  export type AvailableActionNodesWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: AvailableActionNodesWhereInput | AvailableActionNodesWhereInput[]
    OR?: AvailableActionNodesWhereInput[]
    NOT?: AvailableActionNodesWhereInput | AvailableActionNodesWhereInput[]
    name?: StringFilter<"AvailableActionNodes"> | string
    actionNodes?: ActionNodesListRelationFilter
  }, "id">

  export type AvailableActionNodesOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    _count?: AvailableActionNodesCountOrderByAggregateInput
    _max?: AvailableActionNodesMaxOrderByAggregateInput
    _min?: AvailableActionNodesMinOrderByAggregateInput
  }

  export type AvailableActionNodesScalarWhereWithAggregatesInput = {
    AND?: AvailableActionNodesScalarWhereWithAggregatesInput | AvailableActionNodesScalarWhereWithAggregatesInput[]
    OR?: AvailableActionNodesScalarWhereWithAggregatesInput[]
    NOT?: AvailableActionNodesScalarWhereWithAggregatesInput | AvailableActionNodesScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"AvailableActionNodes"> | string
    name?: StringWithAggregatesFilter<"AvailableActionNodes"> | string
  }

  export type WorkFlowRunWhereInput = {
    AND?: WorkFlowRunWhereInput | WorkFlowRunWhereInput[]
    OR?: WorkFlowRunWhereInput[]
    NOT?: WorkFlowRunWhereInput | WorkFlowRunWhereInput[]
    id?: StringFilter<"WorkFlowRun"> | string
    workflowId?: StringFilter<"WorkFlowRun"> | string
    meta?: JsonFilter<"WorkFlowRun">
    workflow?: XOR<WorkFlowScalarRelationFilter, WorkFlowWhereInput>
    outbox?: XOR<WorkFlowOutBoxNullableScalarRelationFilter, WorkFlowOutBoxWhereInput> | null
  }

  export type WorkFlowRunOrderByWithRelationInput = {
    id?: SortOrder
    workflowId?: SortOrder
    meta?: SortOrder
    workflow?: WorkFlowOrderByWithRelationInput
    outbox?: WorkFlowOutBoxOrderByWithRelationInput
  }

  export type WorkFlowRunWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: WorkFlowRunWhereInput | WorkFlowRunWhereInput[]
    OR?: WorkFlowRunWhereInput[]
    NOT?: WorkFlowRunWhereInput | WorkFlowRunWhereInput[]
    workflowId?: StringFilter<"WorkFlowRun"> | string
    meta?: JsonFilter<"WorkFlowRun">
    workflow?: XOR<WorkFlowScalarRelationFilter, WorkFlowWhereInput>
    outbox?: XOR<WorkFlowOutBoxNullableScalarRelationFilter, WorkFlowOutBoxWhereInput> | null
  }, "id">

  export type WorkFlowRunOrderByWithAggregationInput = {
    id?: SortOrder
    workflowId?: SortOrder
    meta?: SortOrder
    _count?: WorkFlowRunCountOrderByAggregateInput
    _max?: WorkFlowRunMaxOrderByAggregateInput
    _min?: WorkFlowRunMinOrderByAggregateInput
  }

  export type WorkFlowRunScalarWhereWithAggregatesInput = {
    AND?: WorkFlowRunScalarWhereWithAggregatesInput | WorkFlowRunScalarWhereWithAggregatesInput[]
    OR?: WorkFlowRunScalarWhereWithAggregatesInput[]
    NOT?: WorkFlowRunScalarWhereWithAggregatesInput | WorkFlowRunScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"WorkFlowRun"> | string
    workflowId?: StringWithAggregatesFilter<"WorkFlowRun"> | string
    meta?: JsonWithAggregatesFilter<"WorkFlowRun">
  }

  export type WorkFlowOutBoxWhereInput = {
    AND?: WorkFlowOutBoxWhereInput | WorkFlowOutBoxWhereInput[]
    OR?: WorkFlowOutBoxWhereInput[]
    NOT?: WorkFlowOutBoxWhereInput | WorkFlowOutBoxWhereInput[]
    id?: StringFilter<"WorkFlowOutBox"> | string
    outboxId?: StringFilter<"WorkFlowOutBox"> | string
    workflowOutBox?: XOR<WorkFlowRunScalarRelationFilter, WorkFlowRunWhereInput>
  }

  export type WorkFlowOutBoxOrderByWithRelationInput = {
    id?: SortOrder
    outboxId?: SortOrder
    workflowOutBox?: WorkFlowRunOrderByWithRelationInput
  }

  export type WorkFlowOutBoxWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    outboxId?: string
    AND?: WorkFlowOutBoxWhereInput | WorkFlowOutBoxWhereInput[]
    OR?: WorkFlowOutBoxWhereInput[]
    NOT?: WorkFlowOutBoxWhereInput | WorkFlowOutBoxWhereInput[]
    workflowOutBox?: XOR<WorkFlowRunScalarRelationFilter, WorkFlowRunWhereInput>
  }, "id" | "outboxId">

  export type WorkFlowOutBoxOrderByWithAggregationInput = {
    id?: SortOrder
    outboxId?: SortOrder
    _count?: WorkFlowOutBoxCountOrderByAggregateInput
    _max?: WorkFlowOutBoxMaxOrderByAggregateInput
    _min?: WorkFlowOutBoxMinOrderByAggregateInput
  }

  export type WorkFlowOutBoxScalarWhereWithAggregatesInput = {
    AND?: WorkFlowOutBoxScalarWhereWithAggregatesInput | WorkFlowOutBoxScalarWhereWithAggregatesInput[]
    OR?: WorkFlowOutBoxScalarWhereWithAggregatesInput[]
    NOT?: WorkFlowOutBoxScalarWhereWithAggregatesInput | WorkFlowOutBoxScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"WorkFlowOutBox"> | string
    outboxId?: StringWithAggregatesFilter<"WorkFlowOutBox"> | string
  }

  export type UserCreateInput = {
    id?: string
    email: string
    password: string
    name?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    sessions?: SessionCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    email: string
    password: string
    name?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sessions?: SessionUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    email: string
    password: string
    name?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionCreateInput = {
    sid: string
    expire?: Date | string
    user: UserCreateNestedOneWithoutSessionsInput
  }

  export type SessionUncheckedCreateInput = {
    sid: string
    userId: string
    expire?: Date | string
  }

  export type SessionUpdateInput = {
    sid?: StringFieldUpdateOperationsInput | string
    expire?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutSessionsNestedInput
  }

  export type SessionUncheckedUpdateInput = {
    sid?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    expire?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionCreateManyInput = {
    sid: string
    userId: string
    expire?: Date | string
  }

  export type SessionUpdateManyMutationInput = {
    sid?: StringFieldUpdateOperationsInput | string
    expire?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionUncheckedUpdateManyInput = {
    sid?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    expire?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WorkFlowCreateInput = {
    id?: string
    triggerNodes?: TriggerNodesCreateNestedOneWithoutWorkflowInput
    actionsNodes?: ActionNodesCreateNestedManyWithoutWorkflowInput
    workflowRun?: WorkFlowRunCreateNestedManyWithoutWorkflowInput
  }

  export type WorkFlowUncheckedCreateInput = {
    id?: string
    triggerNodes?: TriggerNodesUncheckedCreateNestedOneWithoutWorkflowInput
    actionsNodes?: ActionNodesUncheckedCreateNestedManyWithoutWorkflowInput
    workflowRun?: WorkFlowRunUncheckedCreateNestedManyWithoutWorkflowInput
  }

  export type WorkFlowUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    triggerNodes?: TriggerNodesUpdateOneWithoutWorkflowNestedInput
    actionsNodes?: ActionNodesUpdateManyWithoutWorkflowNestedInput
    workflowRun?: WorkFlowRunUpdateManyWithoutWorkflowNestedInput
  }

  export type WorkFlowUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    triggerNodes?: TriggerNodesUncheckedUpdateOneWithoutWorkflowNestedInput
    actionsNodes?: ActionNodesUncheckedUpdateManyWithoutWorkflowNestedInput
    workflowRun?: WorkFlowRunUncheckedUpdateManyWithoutWorkflowNestedInput
  }

  export type WorkFlowCreateManyInput = {
    id?: string
  }

  export type WorkFlowUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
  }

  export type WorkFlowUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
  }

  export type TriggerNodesCreateInput = {
    id?: string
    workflow: WorkFlowCreateNestedOneWithoutTriggerNodesInput
    availableTriggerNodes: AvailableTriggerNodesCreateNestedOneWithoutTriggerNodeInput
  }

  export type TriggerNodesUncheckedCreateInput = {
    id?: string
    workflowId: string
    TriggerNodeId: string
  }

  export type TriggerNodesUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    workflow?: WorkFlowUpdateOneRequiredWithoutTriggerNodesNestedInput
    availableTriggerNodes?: AvailableTriggerNodesUpdateOneRequiredWithoutTriggerNodeNestedInput
  }

  export type TriggerNodesUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    workflowId?: StringFieldUpdateOperationsInput | string
    TriggerNodeId?: StringFieldUpdateOperationsInput | string
  }

  export type TriggerNodesCreateManyInput = {
    id?: string
    workflowId: string
    TriggerNodeId: string
  }

  export type TriggerNodesUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
  }

  export type TriggerNodesUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    workflowId?: StringFieldUpdateOperationsInput | string
    TriggerNodeId?: StringFieldUpdateOperationsInput | string
  }

  export type AvailableTriggerNodesCreateInput = {
    id?: string
    name: string
    TriggerNode?: TriggerNodesCreateNestedManyWithoutAvailableTriggerNodesInput
  }

  export type AvailableTriggerNodesUncheckedCreateInput = {
    id?: string
    name: string
    TriggerNode?: TriggerNodesUncheckedCreateNestedManyWithoutAvailableTriggerNodesInput
  }

  export type AvailableTriggerNodesUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    TriggerNode?: TriggerNodesUpdateManyWithoutAvailableTriggerNodesNestedInput
  }

  export type AvailableTriggerNodesUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    TriggerNode?: TriggerNodesUncheckedUpdateManyWithoutAvailableTriggerNodesNestedInput
  }

  export type AvailableTriggerNodesCreateManyInput = {
    id?: string
    name: string
  }

  export type AvailableTriggerNodesUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type AvailableTriggerNodesUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type ActionNodesCreateInput = {
    id?: string
    workflow: WorkFlowCreateNestedOneWithoutActionsNodesInput
    availableActionNodes: AvailableActionNodesCreateNestedOneWithoutActionNodesInput
  }

  export type ActionNodesUncheckedCreateInput = {
    id?: string
    workflowId: string
    ActionNodeId: string
  }

  export type ActionNodesUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    workflow?: WorkFlowUpdateOneRequiredWithoutActionsNodesNestedInput
    availableActionNodes?: AvailableActionNodesUpdateOneRequiredWithoutActionNodesNestedInput
  }

  export type ActionNodesUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    workflowId?: StringFieldUpdateOperationsInput | string
    ActionNodeId?: StringFieldUpdateOperationsInput | string
  }

  export type ActionNodesCreateManyInput = {
    id?: string
    workflowId: string
    ActionNodeId: string
  }

  export type ActionNodesUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
  }

  export type ActionNodesUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    workflowId?: StringFieldUpdateOperationsInput | string
    ActionNodeId?: StringFieldUpdateOperationsInput | string
  }

  export type AvailableActionNodesCreateInput = {
    id?: string
    name: string
    actionNodes?: ActionNodesCreateNestedManyWithoutAvailableActionNodesInput
  }

  export type AvailableActionNodesUncheckedCreateInput = {
    id?: string
    name: string
    actionNodes?: ActionNodesUncheckedCreateNestedManyWithoutAvailableActionNodesInput
  }

  export type AvailableActionNodesUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    actionNodes?: ActionNodesUpdateManyWithoutAvailableActionNodesNestedInput
  }

  export type AvailableActionNodesUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    actionNodes?: ActionNodesUncheckedUpdateManyWithoutAvailableActionNodesNestedInput
  }

  export type AvailableActionNodesCreateManyInput = {
    id?: string
    name: string
  }

  export type AvailableActionNodesUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type AvailableActionNodesUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type WorkFlowRunCreateInput = {
    id?: string
    meta: JsonNullValueInput | InputJsonValue
    workflow: WorkFlowCreateNestedOneWithoutWorkflowRunInput
    outbox?: WorkFlowOutBoxCreateNestedOneWithoutWorkflowOutBoxInput
  }

  export type WorkFlowRunUncheckedCreateInput = {
    id?: string
    workflowId: string
    meta: JsonNullValueInput | InputJsonValue
    outbox?: WorkFlowOutBoxUncheckedCreateNestedOneWithoutWorkflowOutBoxInput
  }

  export type WorkFlowRunUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    meta?: JsonNullValueInput | InputJsonValue
    workflow?: WorkFlowUpdateOneRequiredWithoutWorkflowRunNestedInput
    outbox?: WorkFlowOutBoxUpdateOneWithoutWorkflowOutBoxNestedInput
  }

  export type WorkFlowRunUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    workflowId?: StringFieldUpdateOperationsInput | string
    meta?: JsonNullValueInput | InputJsonValue
    outbox?: WorkFlowOutBoxUncheckedUpdateOneWithoutWorkflowOutBoxNestedInput
  }

  export type WorkFlowRunCreateManyInput = {
    id?: string
    workflowId: string
    meta: JsonNullValueInput | InputJsonValue
  }

  export type WorkFlowRunUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    meta?: JsonNullValueInput | InputJsonValue
  }

  export type WorkFlowRunUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    workflowId?: StringFieldUpdateOperationsInput | string
    meta?: JsonNullValueInput | InputJsonValue
  }

  export type WorkFlowOutBoxCreateInput = {
    id?: string
    workflowOutBox: WorkFlowRunCreateNestedOneWithoutOutboxInput
  }

  export type WorkFlowOutBoxUncheckedCreateInput = {
    id?: string
    outboxId: string
  }

  export type WorkFlowOutBoxUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    workflowOutBox?: WorkFlowRunUpdateOneRequiredWithoutOutboxNestedInput
  }

  export type WorkFlowOutBoxUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    outboxId?: StringFieldUpdateOperationsInput | string
  }

  export type WorkFlowOutBoxCreateManyInput = {
    id?: string
    outboxId: string
  }

  export type WorkFlowOutBoxUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
  }

  export type WorkFlowOutBoxUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    outboxId?: StringFieldUpdateOperationsInput | string
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

  export type SessionListRelationFilter = {
    every?: SessionWhereInput
    some?: SessionWhereInput
    none?: SessionWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type SessionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
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

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type SessionCountOrderByAggregateInput = {
    sid?: SortOrder
    userId?: SortOrder
    expire?: SortOrder
  }

  export type SessionMaxOrderByAggregateInput = {
    sid?: SortOrder
    userId?: SortOrder
    expire?: SortOrder
  }

  export type SessionMinOrderByAggregateInput = {
    sid?: SortOrder
    userId?: SortOrder
    expire?: SortOrder
  }

  export type TriggerNodesNullableScalarRelationFilter = {
    is?: TriggerNodesWhereInput | null
    isNot?: TriggerNodesWhereInput | null
  }

  export type ActionNodesListRelationFilter = {
    every?: ActionNodesWhereInput
    some?: ActionNodesWhereInput
    none?: ActionNodesWhereInput
  }

  export type WorkFlowRunListRelationFilter = {
    every?: WorkFlowRunWhereInput
    some?: WorkFlowRunWhereInput
    none?: WorkFlowRunWhereInput
  }

  export type ActionNodesOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type WorkFlowRunOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type WorkFlowCountOrderByAggregateInput = {
    id?: SortOrder
  }

  export type WorkFlowMaxOrderByAggregateInput = {
    id?: SortOrder
  }

  export type WorkFlowMinOrderByAggregateInput = {
    id?: SortOrder
  }

  export type WorkFlowScalarRelationFilter = {
    is?: WorkFlowWhereInput
    isNot?: WorkFlowWhereInput
  }

  export type AvailableTriggerNodesScalarRelationFilter = {
    is?: AvailableTriggerNodesWhereInput
    isNot?: AvailableTriggerNodesWhereInput
  }

  export type TriggerNodesCountOrderByAggregateInput = {
    id?: SortOrder
    workflowId?: SortOrder
    TriggerNodeId?: SortOrder
  }

  export type TriggerNodesMaxOrderByAggregateInput = {
    id?: SortOrder
    workflowId?: SortOrder
    TriggerNodeId?: SortOrder
  }

  export type TriggerNodesMinOrderByAggregateInput = {
    id?: SortOrder
    workflowId?: SortOrder
    TriggerNodeId?: SortOrder
  }

  export type TriggerNodesListRelationFilter = {
    every?: TriggerNodesWhereInput
    some?: TriggerNodesWhereInput
    none?: TriggerNodesWhereInput
  }

  export type TriggerNodesOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AvailableTriggerNodesCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type AvailableTriggerNodesMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type AvailableTriggerNodesMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type AvailableActionNodesScalarRelationFilter = {
    is?: AvailableActionNodesWhereInput
    isNot?: AvailableActionNodesWhereInput
  }

  export type ActionNodesCountOrderByAggregateInput = {
    id?: SortOrder
    workflowId?: SortOrder
    ActionNodeId?: SortOrder
  }

  export type ActionNodesMaxOrderByAggregateInput = {
    id?: SortOrder
    workflowId?: SortOrder
    ActionNodeId?: SortOrder
  }

  export type ActionNodesMinOrderByAggregateInput = {
    id?: SortOrder
    workflowId?: SortOrder
    ActionNodeId?: SortOrder
  }

  export type AvailableActionNodesCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type AvailableActionNodesMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type AvailableActionNodesMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }
  export type JsonFilter<$PrismaModel = never> = 
    | PatchUndefined<
        Either<Required<JsonFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonFilterBase<$PrismaModel>>, 'path'>>

  export type JsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type WorkFlowOutBoxNullableScalarRelationFilter = {
    is?: WorkFlowOutBoxWhereInput | null
    isNot?: WorkFlowOutBoxWhereInput | null
  }

  export type WorkFlowRunCountOrderByAggregateInput = {
    id?: SortOrder
    workflowId?: SortOrder
    meta?: SortOrder
  }

  export type WorkFlowRunMaxOrderByAggregateInput = {
    id?: SortOrder
    workflowId?: SortOrder
  }

  export type WorkFlowRunMinOrderByAggregateInput = {
    id?: SortOrder
    workflowId?: SortOrder
  }
  export type JsonWithAggregatesFilter<$PrismaModel = never> = 
    | PatchUndefined<
        Either<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedJsonFilter<$PrismaModel>
    _max?: NestedJsonFilter<$PrismaModel>
  }

  export type WorkFlowRunScalarRelationFilter = {
    is?: WorkFlowRunWhereInput
    isNot?: WorkFlowRunWhereInput
  }

  export type WorkFlowOutBoxCountOrderByAggregateInput = {
    id?: SortOrder
    outboxId?: SortOrder
  }

  export type WorkFlowOutBoxMaxOrderByAggregateInput = {
    id?: SortOrder
    outboxId?: SortOrder
  }

  export type WorkFlowOutBoxMinOrderByAggregateInput = {
    id?: SortOrder
    outboxId?: SortOrder
  }

  export type SessionCreateNestedManyWithoutUserInput = {
    create?: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput> | SessionCreateWithoutUserInput[] | SessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutUserInput | SessionCreateOrConnectWithoutUserInput[]
    createMany?: SessionCreateManyUserInputEnvelope
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
  }

  export type SessionUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput> | SessionCreateWithoutUserInput[] | SessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutUserInput | SessionCreateOrConnectWithoutUserInput[]
    createMany?: SessionCreateManyUserInputEnvelope
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
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

  export type UserCreateNestedOneWithoutSessionsInput = {
    create?: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSessionsInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutSessionsNestedInput = {
    create?: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSessionsInput
    upsert?: UserUpsertWithoutSessionsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutSessionsInput, UserUpdateWithoutSessionsInput>, UserUncheckedUpdateWithoutSessionsInput>
  }

  export type TriggerNodesCreateNestedOneWithoutWorkflowInput = {
    create?: XOR<TriggerNodesCreateWithoutWorkflowInput, TriggerNodesUncheckedCreateWithoutWorkflowInput>
    connectOrCreate?: TriggerNodesCreateOrConnectWithoutWorkflowInput
    connect?: TriggerNodesWhereUniqueInput
  }

  export type ActionNodesCreateNestedManyWithoutWorkflowInput = {
    create?: XOR<ActionNodesCreateWithoutWorkflowInput, ActionNodesUncheckedCreateWithoutWorkflowInput> | ActionNodesCreateWithoutWorkflowInput[] | ActionNodesUncheckedCreateWithoutWorkflowInput[]
    connectOrCreate?: ActionNodesCreateOrConnectWithoutWorkflowInput | ActionNodesCreateOrConnectWithoutWorkflowInput[]
    createMany?: ActionNodesCreateManyWorkflowInputEnvelope
    connect?: ActionNodesWhereUniqueInput | ActionNodesWhereUniqueInput[]
  }

  export type WorkFlowRunCreateNestedManyWithoutWorkflowInput = {
    create?: XOR<WorkFlowRunCreateWithoutWorkflowInput, WorkFlowRunUncheckedCreateWithoutWorkflowInput> | WorkFlowRunCreateWithoutWorkflowInput[] | WorkFlowRunUncheckedCreateWithoutWorkflowInput[]
    connectOrCreate?: WorkFlowRunCreateOrConnectWithoutWorkflowInput | WorkFlowRunCreateOrConnectWithoutWorkflowInput[]
    createMany?: WorkFlowRunCreateManyWorkflowInputEnvelope
    connect?: WorkFlowRunWhereUniqueInput | WorkFlowRunWhereUniqueInput[]
  }

  export type TriggerNodesUncheckedCreateNestedOneWithoutWorkflowInput = {
    create?: XOR<TriggerNodesCreateWithoutWorkflowInput, TriggerNodesUncheckedCreateWithoutWorkflowInput>
    connectOrCreate?: TriggerNodesCreateOrConnectWithoutWorkflowInput
    connect?: TriggerNodesWhereUniqueInput
  }

  export type ActionNodesUncheckedCreateNestedManyWithoutWorkflowInput = {
    create?: XOR<ActionNodesCreateWithoutWorkflowInput, ActionNodesUncheckedCreateWithoutWorkflowInput> | ActionNodesCreateWithoutWorkflowInput[] | ActionNodesUncheckedCreateWithoutWorkflowInput[]
    connectOrCreate?: ActionNodesCreateOrConnectWithoutWorkflowInput | ActionNodesCreateOrConnectWithoutWorkflowInput[]
    createMany?: ActionNodesCreateManyWorkflowInputEnvelope
    connect?: ActionNodesWhereUniqueInput | ActionNodesWhereUniqueInput[]
  }

  export type WorkFlowRunUncheckedCreateNestedManyWithoutWorkflowInput = {
    create?: XOR<WorkFlowRunCreateWithoutWorkflowInput, WorkFlowRunUncheckedCreateWithoutWorkflowInput> | WorkFlowRunCreateWithoutWorkflowInput[] | WorkFlowRunUncheckedCreateWithoutWorkflowInput[]
    connectOrCreate?: WorkFlowRunCreateOrConnectWithoutWorkflowInput | WorkFlowRunCreateOrConnectWithoutWorkflowInput[]
    createMany?: WorkFlowRunCreateManyWorkflowInputEnvelope
    connect?: WorkFlowRunWhereUniqueInput | WorkFlowRunWhereUniqueInput[]
  }

  export type TriggerNodesUpdateOneWithoutWorkflowNestedInput = {
    create?: XOR<TriggerNodesCreateWithoutWorkflowInput, TriggerNodesUncheckedCreateWithoutWorkflowInput>
    connectOrCreate?: TriggerNodesCreateOrConnectWithoutWorkflowInput
    upsert?: TriggerNodesUpsertWithoutWorkflowInput
    disconnect?: TriggerNodesWhereInput | boolean
    delete?: TriggerNodesWhereInput | boolean
    connect?: TriggerNodesWhereUniqueInput
    update?: XOR<XOR<TriggerNodesUpdateToOneWithWhereWithoutWorkflowInput, TriggerNodesUpdateWithoutWorkflowInput>, TriggerNodesUncheckedUpdateWithoutWorkflowInput>
  }

  export type ActionNodesUpdateManyWithoutWorkflowNestedInput = {
    create?: XOR<ActionNodesCreateWithoutWorkflowInput, ActionNodesUncheckedCreateWithoutWorkflowInput> | ActionNodesCreateWithoutWorkflowInput[] | ActionNodesUncheckedCreateWithoutWorkflowInput[]
    connectOrCreate?: ActionNodesCreateOrConnectWithoutWorkflowInput | ActionNodesCreateOrConnectWithoutWorkflowInput[]
    upsert?: ActionNodesUpsertWithWhereUniqueWithoutWorkflowInput | ActionNodesUpsertWithWhereUniqueWithoutWorkflowInput[]
    createMany?: ActionNodesCreateManyWorkflowInputEnvelope
    set?: ActionNodesWhereUniqueInput | ActionNodesWhereUniqueInput[]
    disconnect?: ActionNodesWhereUniqueInput | ActionNodesWhereUniqueInput[]
    delete?: ActionNodesWhereUniqueInput | ActionNodesWhereUniqueInput[]
    connect?: ActionNodesWhereUniqueInput | ActionNodesWhereUniqueInput[]
    update?: ActionNodesUpdateWithWhereUniqueWithoutWorkflowInput | ActionNodesUpdateWithWhereUniqueWithoutWorkflowInput[]
    updateMany?: ActionNodesUpdateManyWithWhereWithoutWorkflowInput | ActionNodesUpdateManyWithWhereWithoutWorkflowInput[]
    deleteMany?: ActionNodesScalarWhereInput | ActionNodesScalarWhereInput[]
  }

  export type WorkFlowRunUpdateManyWithoutWorkflowNestedInput = {
    create?: XOR<WorkFlowRunCreateWithoutWorkflowInput, WorkFlowRunUncheckedCreateWithoutWorkflowInput> | WorkFlowRunCreateWithoutWorkflowInput[] | WorkFlowRunUncheckedCreateWithoutWorkflowInput[]
    connectOrCreate?: WorkFlowRunCreateOrConnectWithoutWorkflowInput | WorkFlowRunCreateOrConnectWithoutWorkflowInput[]
    upsert?: WorkFlowRunUpsertWithWhereUniqueWithoutWorkflowInput | WorkFlowRunUpsertWithWhereUniqueWithoutWorkflowInput[]
    createMany?: WorkFlowRunCreateManyWorkflowInputEnvelope
    set?: WorkFlowRunWhereUniqueInput | WorkFlowRunWhereUniqueInput[]
    disconnect?: WorkFlowRunWhereUniqueInput | WorkFlowRunWhereUniqueInput[]
    delete?: WorkFlowRunWhereUniqueInput | WorkFlowRunWhereUniqueInput[]
    connect?: WorkFlowRunWhereUniqueInput | WorkFlowRunWhereUniqueInput[]
    update?: WorkFlowRunUpdateWithWhereUniqueWithoutWorkflowInput | WorkFlowRunUpdateWithWhereUniqueWithoutWorkflowInput[]
    updateMany?: WorkFlowRunUpdateManyWithWhereWithoutWorkflowInput | WorkFlowRunUpdateManyWithWhereWithoutWorkflowInput[]
    deleteMany?: WorkFlowRunScalarWhereInput | WorkFlowRunScalarWhereInput[]
  }

  export type TriggerNodesUncheckedUpdateOneWithoutWorkflowNestedInput = {
    create?: XOR<TriggerNodesCreateWithoutWorkflowInput, TriggerNodesUncheckedCreateWithoutWorkflowInput>
    connectOrCreate?: TriggerNodesCreateOrConnectWithoutWorkflowInput
    upsert?: TriggerNodesUpsertWithoutWorkflowInput
    disconnect?: TriggerNodesWhereInput | boolean
    delete?: TriggerNodesWhereInput | boolean
    connect?: TriggerNodesWhereUniqueInput
    update?: XOR<XOR<TriggerNodesUpdateToOneWithWhereWithoutWorkflowInput, TriggerNodesUpdateWithoutWorkflowInput>, TriggerNodesUncheckedUpdateWithoutWorkflowInput>
  }

  export type ActionNodesUncheckedUpdateManyWithoutWorkflowNestedInput = {
    create?: XOR<ActionNodesCreateWithoutWorkflowInput, ActionNodesUncheckedCreateWithoutWorkflowInput> | ActionNodesCreateWithoutWorkflowInput[] | ActionNodesUncheckedCreateWithoutWorkflowInput[]
    connectOrCreate?: ActionNodesCreateOrConnectWithoutWorkflowInput | ActionNodesCreateOrConnectWithoutWorkflowInput[]
    upsert?: ActionNodesUpsertWithWhereUniqueWithoutWorkflowInput | ActionNodesUpsertWithWhereUniqueWithoutWorkflowInput[]
    createMany?: ActionNodesCreateManyWorkflowInputEnvelope
    set?: ActionNodesWhereUniqueInput | ActionNodesWhereUniqueInput[]
    disconnect?: ActionNodesWhereUniqueInput | ActionNodesWhereUniqueInput[]
    delete?: ActionNodesWhereUniqueInput | ActionNodesWhereUniqueInput[]
    connect?: ActionNodesWhereUniqueInput | ActionNodesWhereUniqueInput[]
    update?: ActionNodesUpdateWithWhereUniqueWithoutWorkflowInput | ActionNodesUpdateWithWhereUniqueWithoutWorkflowInput[]
    updateMany?: ActionNodesUpdateManyWithWhereWithoutWorkflowInput | ActionNodesUpdateManyWithWhereWithoutWorkflowInput[]
    deleteMany?: ActionNodesScalarWhereInput | ActionNodesScalarWhereInput[]
  }

  export type WorkFlowRunUncheckedUpdateManyWithoutWorkflowNestedInput = {
    create?: XOR<WorkFlowRunCreateWithoutWorkflowInput, WorkFlowRunUncheckedCreateWithoutWorkflowInput> | WorkFlowRunCreateWithoutWorkflowInput[] | WorkFlowRunUncheckedCreateWithoutWorkflowInput[]
    connectOrCreate?: WorkFlowRunCreateOrConnectWithoutWorkflowInput | WorkFlowRunCreateOrConnectWithoutWorkflowInput[]
    upsert?: WorkFlowRunUpsertWithWhereUniqueWithoutWorkflowInput | WorkFlowRunUpsertWithWhereUniqueWithoutWorkflowInput[]
    createMany?: WorkFlowRunCreateManyWorkflowInputEnvelope
    set?: WorkFlowRunWhereUniqueInput | WorkFlowRunWhereUniqueInput[]
    disconnect?: WorkFlowRunWhereUniqueInput | WorkFlowRunWhereUniqueInput[]
    delete?: WorkFlowRunWhereUniqueInput | WorkFlowRunWhereUniqueInput[]
    connect?: WorkFlowRunWhereUniqueInput | WorkFlowRunWhereUniqueInput[]
    update?: WorkFlowRunUpdateWithWhereUniqueWithoutWorkflowInput | WorkFlowRunUpdateWithWhereUniqueWithoutWorkflowInput[]
    updateMany?: WorkFlowRunUpdateManyWithWhereWithoutWorkflowInput | WorkFlowRunUpdateManyWithWhereWithoutWorkflowInput[]
    deleteMany?: WorkFlowRunScalarWhereInput | WorkFlowRunScalarWhereInput[]
  }

  export type WorkFlowCreateNestedOneWithoutTriggerNodesInput = {
    create?: XOR<WorkFlowCreateWithoutTriggerNodesInput, WorkFlowUncheckedCreateWithoutTriggerNodesInput>
    connectOrCreate?: WorkFlowCreateOrConnectWithoutTriggerNodesInput
    connect?: WorkFlowWhereUniqueInput
  }

  export type AvailableTriggerNodesCreateNestedOneWithoutTriggerNodeInput = {
    create?: XOR<AvailableTriggerNodesCreateWithoutTriggerNodeInput, AvailableTriggerNodesUncheckedCreateWithoutTriggerNodeInput>
    connectOrCreate?: AvailableTriggerNodesCreateOrConnectWithoutTriggerNodeInput
    connect?: AvailableTriggerNodesWhereUniqueInput
  }

  export type WorkFlowUpdateOneRequiredWithoutTriggerNodesNestedInput = {
    create?: XOR<WorkFlowCreateWithoutTriggerNodesInput, WorkFlowUncheckedCreateWithoutTriggerNodesInput>
    connectOrCreate?: WorkFlowCreateOrConnectWithoutTriggerNodesInput
    upsert?: WorkFlowUpsertWithoutTriggerNodesInput
    connect?: WorkFlowWhereUniqueInput
    update?: XOR<XOR<WorkFlowUpdateToOneWithWhereWithoutTriggerNodesInput, WorkFlowUpdateWithoutTriggerNodesInput>, WorkFlowUncheckedUpdateWithoutTriggerNodesInput>
  }

  export type AvailableTriggerNodesUpdateOneRequiredWithoutTriggerNodeNestedInput = {
    create?: XOR<AvailableTriggerNodesCreateWithoutTriggerNodeInput, AvailableTriggerNodesUncheckedCreateWithoutTriggerNodeInput>
    connectOrCreate?: AvailableTriggerNodesCreateOrConnectWithoutTriggerNodeInput
    upsert?: AvailableTriggerNodesUpsertWithoutTriggerNodeInput
    connect?: AvailableTriggerNodesWhereUniqueInput
    update?: XOR<XOR<AvailableTriggerNodesUpdateToOneWithWhereWithoutTriggerNodeInput, AvailableTriggerNodesUpdateWithoutTriggerNodeInput>, AvailableTriggerNodesUncheckedUpdateWithoutTriggerNodeInput>
  }

  export type TriggerNodesCreateNestedManyWithoutAvailableTriggerNodesInput = {
    create?: XOR<TriggerNodesCreateWithoutAvailableTriggerNodesInput, TriggerNodesUncheckedCreateWithoutAvailableTriggerNodesInput> | TriggerNodesCreateWithoutAvailableTriggerNodesInput[] | TriggerNodesUncheckedCreateWithoutAvailableTriggerNodesInput[]
    connectOrCreate?: TriggerNodesCreateOrConnectWithoutAvailableTriggerNodesInput | TriggerNodesCreateOrConnectWithoutAvailableTriggerNodesInput[]
    createMany?: TriggerNodesCreateManyAvailableTriggerNodesInputEnvelope
    connect?: TriggerNodesWhereUniqueInput | TriggerNodesWhereUniqueInput[]
  }

  export type TriggerNodesUncheckedCreateNestedManyWithoutAvailableTriggerNodesInput = {
    create?: XOR<TriggerNodesCreateWithoutAvailableTriggerNodesInput, TriggerNodesUncheckedCreateWithoutAvailableTriggerNodesInput> | TriggerNodesCreateWithoutAvailableTriggerNodesInput[] | TriggerNodesUncheckedCreateWithoutAvailableTriggerNodesInput[]
    connectOrCreate?: TriggerNodesCreateOrConnectWithoutAvailableTriggerNodesInput | TriggerNodesCreateOrConnectWithoutAvailableTriggerNodesInput[]
    createMany?: TriggerNodesCreateManyAvailableTriggerNodesInputEnvelope
    connect?: TriggerNodesWhereUniqueInput | TriggerNodesWhereUniqueInput[]
  }

  export type TriggerNodesUpdateManyWithoutAvailableTriggerNodesNestedInput = {
    create?: XOR<TriggerNodesCreateWithoutAvailableTriggerNodesInput, TriggerNodesUncheckedCreateWithoutAvailableTriggerNodesInput> | TriggerNodesCreateWithoutAvailableTriggerNodesInput[] | TriggerNodesUncheckedCreateWithoutAvailableTriggerNodesInput[]
    connectOrCreate?: TriggerNodesCreateOrConnectWithoutAvailableTriggerNodesInput | TriggerNodesCreateOrConnectWithoutAvailableTriggerNodesInput[]
    upsert?: TriggerNodesUpsertWithWhereUniqueWithoutAvailableTriggerNodesInput | TriggerNodesUpsertWithWhereUniqueWithoutAvailableTriggerNodesInput[]
    createMany?: TriggerNodesCreateManyAvailableTriggerNodesInputEnvelope
    set?: TriggerNodesWhereUniqueInput | TriggerNodesWhereUniqueInput[]
    disconnect?: TriggerNodesWhereUniqueInput | TriggerNodesWhereUniqueInput[]
    delete?: TriggerNodesWhereUniqueInput | TriggerNodesWhereUniqueInput[]
    connect?: TriggerNodesWhereUniqueInput | TriggerNodesWhereUniqueInput[]
    update?: TriggerNodesUpdateWithWhereUniqueWithoutAvailableTriggerNodesInput | TriggerNodesUpdateWithWhereUniqueWithoutAvailableTriggerNodesInput[]
    updateMany?: TriggerNodesUpdateManyWithWhereWithoutAvailableTriggerNodesInput | TriggerNodesUpdateManyWithWhereWithoutAvailableTriggerNodesInput[]
    deleteMany?: TriggerNodesScalarWhereInput | TriggerNodesScalarWhereInput[]
  }

  export type TriggerNodesUncheckedUpdateManyWithoutAvailableTriggerNodesNestedInput = {
    create?: XOR<TriggerNodesCreateWithoutAvailableTriggerNodesInput, TriggerNodesUncheckedCreateWithoutAvailableTriggerNodesInput> | TriggerNodesCreateWithoutAvailableTriggerNodesInput[] | TriggerNodesUncheckedCreateWithoutAvailableTriggerNodesInput[]
    connectOrCreate?: TriggerNodesCreateOrConnectWithoutAvailableTriggerNodesInput | TriggerNodesCreateOrConnectWithoutAvailableTriggerNodesInput[]
    upsert?: TriggerNodesUpsertWithWhereUniqueWithoutAvailableTriggerNodesInput | TriggerNodesUpsertWithWhereUniqueWithoutAvailableTriggerNodesInput[]
    createMany?: TriggerNodesCreateManyAvailableTriggerNodesInputEnvelope
    set?: TriggerNodesWhereUniqueInput | TriggerNodesWhereUniqueInput[]
    disconnect?: TriggerNodesWhereUniqueInput | TriggerNodesWhereUniqueInput[]
    delete?: TriggerNodesWhereUniqueInput | TriggerNodesWhereUniqueInput[]
    connect?: TriggerNodesWhereUniqueInput | TriggerNodesWhereUniqueInput[]
    update?: TriggerNodesUpdateWithWhereUniqueWithoutAvailableTriggerNodesInput | TriggerNodesUpdateWithWhereUniqueWithoutAvailableTriggerNodesInput[]
    updateMany?: TriggerNodesUpdateManyWithWhereWithoutAvailableTriggerNodesInput | TriggerNodesUpdateManyWithWhereWithoutAvailableTriggerNodesInput[]
    deleteMany?: TriggerNodesScalarWhereInput | TriggerNodesScalarWhereInput[]
  }

  export type WorkFlowCreateNestedOneWithoutActionsNodesInput = {
    create?: XOR<WorkFlowCreateWithoutActionsNodesInput, WorkFlowUncheckedCreateWithoutActionsNodesInput>
    connectOrCreate?: WorkFlowCreateOrConnectWithoutActionsNodesInput
    connect?: WorkFlowWhereUniqueInput
  }

  export type AvailableActionNodesCreateNestedOneWithoutActionNodesInput = {
    create?: XOR<AvailableActionNodesCreateWithoutActionNodesInput, AvailableActionNodesUncheckedCreateWithoutActionNodesInput>
    connectOrCreate?: AvailableActionNodesCreateOrConnectWithoutActionNodesInput
    connect?: AvailableActionNodesWhereUniqueInput
  }

  export type WorkFlowUpdateOneRequiredWithoutActionsNodesNestedInput = {
    create?: XOR<WorkFlowCreateWithoutActionsNodesInput, WorkFlowUncheckedCreateWithoutActionsNodesInput>
    connectOrCreate?: WorkFlowCreateOrConnectWithoutActionsNodesInput
    upsert?: WorkFlowUpsertWithoutActionsNodesInput
    connect?: WorkFlowWhereUniqueInput
    update?: XOR<XOR<WorkFlowUpdateToOneWithWhereWithoutActionsNodesInput, WorkFlowUpdateWithoutActionsNodesInput>, WorkFlowUncheckedUpdateWithoutActionsNodesInput>
  }

  export type AvailableActionNodesUpdateOneRequiredWithoutActionNodesNestedInput = {
    create?: XOR<AvailableActionNodesCreateWithoutActionNodesInput, AvailableActionNodesUncheckedCreateWithoutActionNodesInput>
    connectOrCreate?: AvailableActionNodesCreateOrConnectWithoutActionNodesInput
    upsert?: AvailableActionNodesUpsertWithoutActionNodesInput
    connect?: AvailableActionNodesWhereUniqueInput
    update?: XOR<XOR<AvailableActionNodesUpdateToOneWithWhereWithoutActionNodesInput, AvailableActionNodesUpdateWithoutActionNodesInput>, AvailableActionNodesUncheckedUpdateWithoutActionNodesInput>
  }

  export type ActionNodesCreateNestedManyWithoutAvailableActionNodesInput = {
    create?: XOR<ActionNodesCreateWithoutAvailableActionNodesInput, ActionNodesUncheckedCreateWithoutAvailableActionNodesInput> | ActionNodesCreateWithoutAvailableActionNodesInput[] | ActionNodesUncheckedCreateWithoutAvailableActionNodesInput[]
    connectOrCreate?: ActionNodesCreateOrConnectWithoutAvailableActionNodesInput | ActionNodesCreateOrConnectWithoutAvailableActionNodesInput[]
    createMany?: ActionNodesCreateManyAvailableActionNodesInputEnvelope
    connect?: ActionNodesWhereUniqueInput | ActionNodesWhereUniqueInput[]
  }

  export type ActionNodesUncheckedCreateNestedManyWithoutAvailableActionNodesInput = {
    create?: XOR<ActionNodesCreateWithoutAvailableActionNodesInput, ActionNodesUncheckedCreateWithoutAvailableActionNodesInput> | ActionNodesCreateWithoutAvailableActionNodesInput[] | ActionNodesUncheckedCreateWithoutAvailableActionNodesInput[]
    connectOrCreate?: ActionNodesCreateOrConnectWithoutAvailableActionNodesInput | ActionNodesCreateOrConnectWithoutAvailableActionNodesInput[]
    createMany?: ActionNodesCreateManyAvailableActionNodesInputEnvelope
    connect?: ActionNodesWhereUniqueInput | ActionNodesWhereUniqueInput[]
  }

  export type ActionNodesUpdateManyWithoutAvailableActionNodesNestedInput = {
    create?: XOR<ActionNodesCreateWithoutAvailableActionNodesInput, ActionNodesUncheckedCreateWithoutAvailableActionNodesInput> | ActionNodesCreateWithoutAvailableActionNodesInput[] | ActionNodesUncheckedCreateWithoutAvailableActionNodesInput[]
    connectOrCreate?: ActionNodesCreateOrConnectWithoutAvailableActionNodesInput | ActionNodesCreateOrConnectWithoutAvailableActionNodesInput[]
    upsert?: ActionNodesUpsertWithWhereUniqueWithoutAvailableActionNodesInput | ActionNodesUpsertWithWhereUniqueWithoutAvailableActionNodesInput[]
    createMany?: ActionNodesCreateManyAvailableActionNodesInputEnvelope
    set?: ActionNodesWhereUniqueInput | ActionNodesWhereUniqueInput[]
    disconnect?: ActionNodesWhereUniqueInput | ActionNodesWhereUniqueInput[]
    delete?: ActionNodesWhereUniqueInput | ActionNodesWhereUniqueInput[]
    connect?: ActionNodesWhereUniqueInput | ActionNodesWhereUniqueInput[]
    update?: ActionNodesUpdateWithWhereUniqueWithoutAvailableActionNodesInput | ActionNodesUpdateWithWhereUniqueWithoutAvailableActionNodesInput[]
    updateMany?: ActionNodesUpdateManyWithWhereWithoutAvailableActionNodesInput | ActionNodesUpdateManyWithWhereWithoutAvailableActionNodesInput[]
    deleteMany?: ActionNodesScalarWhereInput | ActionNodesScalarWhereInput[]
  }

  export type ActionNodesUncheckedUpdateManyWithoutAvailableActionNodesNestedInput = {
    create?: XOR<ActionNodesCreateWithoutAvailableActionNodesInput, ActionNodesUncheckedCreateWithoutAvailableActionNodesInput> | ActionNodesCreateWithoutAvailableActionNodesInput[] | ActionNodesUncheckedCreateWithoutAvailableActionNodesInput[]
    connectOrCreate?: ActionNodesCreateOrConnectWithoutAvailableActionNodesInput | ActionNodesCreateOrConnectWithoutAvailableActionNodesInput[]
    upsert?: ActionNodesUpsertWithWhereUniqueWithoutAvailableActionNodesInput | ActionNodesUpsertWithWhereUniqueWithoutAvailableActionNodesInput[]
    createMany?: ActionNodesCreateManyAvailableActionNodesInputEnvelope
    set?: ActionNodesWhereUniqueInput | ActionNodesWhereUniqueInput[]
    disconnect?: ActionNodesWhereUniqueInput | ActionNodesWhereUniqueInput[]
    delete?: ActionNodesWhereUniqueInput | ActionNodesWhereUniqueInput[]
    connect?: ActionNodesWhereUniqueInput | ActionNodesWhereUniqueInput[]
    update?: ActionNodesUpdateWithWhereUniqueWithoutAvailableActionNodesInput | ActionNodesUpdateWithWhereUniqueWithoutAvailableActionNodesInput[]
    updateMany?: ActionNodesUpdateManyWithWhereWithoutAvailableActionNodesInput | ActionNodesUpdateManyWithWhereWithoutAvailableActionNodesInput[]
    deleteMany?: ActionNodesScalarWhereInput | ActionNodesScalarWhereInput[]
  }

  export type WorkFlowCreateNestedOneWithoutWorkflowRunInput = {
    create?: XOR<WorkFlowCreateWithoutWorkflowRunInput, WorkFlowUncheckedCreateWithoutWorkflowRunInput>
    connectOrCreate?: WorkFlowCreateOrConnectWithoutWorkflowRunInput
    connect?: WorkFlowWhereUniqueInput
  }

  export type WorkFlowOutBoxCreateNestedOneWithoutWorkflowOutBoxInput = {
    create?: XOR<WorkFlowOutBoxCreateWithoutWorkflowOutBoxInput, WorkFlowOutBoxUncheckedCreateWithoutWorkflowOutBoxInput>
    connectOrCreate?: WorkFlowOutBoxCreateOrConnectWithoutWorkflowOutBoxInput
    connect?: WorkFlowOutBoxWhereUniqueInput
  }

  export type WorkFlowOutBoxUncheckedCreateNestedOneWithoutWorkflowOutBoxInput = {
    create?: XOR<WorkFlowOutBoxCreateWithoutWorkflowOutBoxInput, WorkFlowOutBoxUncheckedCreateWithoutWorkflowOutBoxInput>
    connectOrCreate?: WorkFlowOutBoxCreateOrConnectWithoutWorkflowOutBoxInput
    connect?: WorkFlowOutBoxWhereUniqueInput
  }

  export type WorkFlowUpdateOneRequiredWithoutWorkflowRunNestedInput = {
    create?: XOR<WorkFlowCreateWithoutWorkflowRunInput, WorkFlowUncheckedCreateWithoutWorkflowRunInput>
    connectOrCreate?: WorkFlowCreateOrConnectWithoutWorkflowRunInput
    upsert?: WorkFlowUpsertWithoutWorkflowRunInput
    connect?: WorkFlowWhereUniqueInput
    update?: XOR<XOR<WorkFlowUpdateToOneWithWhereWithoutWorkflowRunInput, WorkFlowUpdateWithoutWorkflowRunInput>, WorkFlowUncheckedUpdateWithoutWorkflowRunInput>
  }

  export type WorkFlowOutBoxUpdateOneWithoutWorkflowOutBoxNestedInput = {
    create?: XOR<WorkFlowOutBoxCreateWithoutWorkflowOutBoxInput, WorkFlowOutBoxUncheckedCreateWithoutWorkflowOutBoxInput>
    connectOrCreate?: WorkFlowOutBoxCreateOrConnectWithoutWorkflowOutBoxInput
    upsert?: WorkFlowOutBoxUpsertWithoutWorkflowOutBoxInput
    disconnect?: WorkFlowOutBoxWhereInput | boolean
    delete?: WorkFlowOutBoxWhereInput | boolean
    connect?: WorkFlowOutBoxWhereUniqueInput
    update?: XOR<XOR<WorkFlowOutBoxUpdateToOneWithWhereWithoutWorkflowOutBoxInput, WorkFlowOutBoxUpdateWithoutWorkflowOutBoxInput>, WorkFlowOutBoxUncheckedUpdateWithoutWorkflowOutBoxInput>
  }

  export type WorkFlowOutBoxUncheckedUpdateOneWithoutWorkflowOutBoxNestedInput = {
    create?: XOR<WorkFlowOutBoxCreateWithoutWorkflowOutBoxInput, WorkFlowOutBoxUncheckedCreateWithoutWorkflowOutBoxInput>
    connectOrCreate?: WorkFlowOutBoxCreateOrConnectWithoutWorkflowOutBoxInput
    upsert?: WorkFlowOutBoxUpsertWithoutWorkflowOutBoxInput
    disconnect?: WorkFlowOutBoxWhereInput | boolean
    delete?: WorkFlowOutBoxWhereInput | boolean
    connect?: WorkFlowOutBoxWhereUniqueInput
    update?: XOR<XOR<WorkFlowOutBoxUpdateToOneWithWhereWithoutWorkflowOutBoxInput, WorkFlowOutBoxUpdateWithoutWorkflowOutBoxInput>, WorkFlowOutBoxUncheckedUpdateWithoutWorkflowOutBoxInput>
  }

  export type WorkFlowRunCreateNestedOneWithoutOutboxInput = {
    create?: XOR<WorkFlowRunCreateWithoutOutboxInput, WorkFlowRunUncheckedCreateWithoutOutboxInput>
    connectOrCreate?: WorkFlowRunCreateOrConnectWithoutOutboxInput
    connect?: WorkFlowRunWhereUniqueInput
  }

  export type WorkFlowRunUpdateOneRequiredWithoutOutboxNestedInput = {
    create?: XOR<WorkFlowRunCreateWithoutOutboxInput, WorkFlowRunUncheckedCreateWithoutOutboxInput>
    connectOrCreate?: WorkFlowRunCreateOrConnectWithoutOutboxInput
    upsert?: WorkFlowRunUpsertWithoutOutboxInput
    connect?: WorkFlowRunWhereUniqueInput
    update?: XOR<XOR<WorkFlowRunUpdateToOneWithWhereWithoutOutboxInput, WorkFlowRunUpdateWithoutOutboxInput>, WorkFlowRunUncheckedUpdateWithoutOutboxInput>
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
  export type NestedJsonFilter<$PrismaModel = never> = 
    | PatchUndefined<
        Either<Required<NestedJsonFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type SessionCreateWithoutUserInput = {
    sid: string
    expire?: Date | string
  }

  export type SessionUncheckedCreateWithoutUserInput = {
    sid: string
    expire?: Date | string
  }

  export type SessionCreateOrConnectWithoutUserInput = {
    where: SessionWhereUniqueInput
    create: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput>
  }

  export type SessionCreateManyUserInputEnvelope = {
    data: SessionCreateManyUserInput | SessionCreateManyUserInput[]
    skipDuplicates?: boolean
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
    sid?: StringFilter<"Session"> | string
    userId?: StringFilter<"Session"> | string
    expire?: DateTimeFilter<"Session"> | Date | string
  }

  export type UserCreateWithoutSessionsInput = {
    id?: string
    email: string
    password: string
    name?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUncheckedCreateWithoutSessionsInput = {
    id?: string
    email: string
    password: string
    name?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
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
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateWithoutSessionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TriggerNodesCreateWithoutWorkflowInput = {
    id?: string
    availableTriggerNodes: AvailableTriggerNodesCreateNestedOneWithoutTriggerNodeInput
  }

  export type TriggerNodesUncheckedCreateWithoutWorkflowInput = {
    id?: string
    TriggerNodeId: string
  }

  export type TriggerNodesCreateOrConnectWithoutWorkflowInput = {
    where: TriggerNodesWhereUniqueInput
    create: XOR<TriggerNodesCreateWithoutWorkflowInput, TriggerNodesUncheckedCreateWithoutWorkflowInput>
  }

  export type ActionNodesCreateWithoutWorkflowInput = {
    id?: string
    availableActionNodes: AvailableActionNodesCreateNestedOneWithoutActionNodesInput
  }

  export type ActionNodesUncheckedCreateWithoutWorkflowInput = {
    id?: string
    ActionNodeId: string
  }

  export type ActionNodesCreateOrConnectWithoutWorkflowInput = {
    where: ActionNodesWhereUniqueInput
    create: XOR<ActionNodesCreateWithoutWorkflowInput, ActionNodesUncheckedCreateWithoutWorkflowInput>
  }

  export type ActionNodesCreateManyWorkflowInputEnvelope = {
    data: ActionNodesCreateManyWorkflowInput | ActionNodesCreateManyWorkflowInput[]
    skipDuplicates?: boolean
  }

  export type WorkFlowRunCreateWithoutWorkflowInput = {
    id?: string
    meta: JsonNullValueInput | InputJsonValue
    outbox?: WorkFlowOutBoxCreateNestedOneWithoutWorkflowOutBoxInput
  }

  export type WorkFlowRunUncheckedCreateWithoutWorkflowInput = {
    id?: string
    meta: JsonNullValueInput | InputJsonValue
    outbox?: WorkFlowOutBoxUncheckedCreateNestedOneWithoutWorkflowOutBoxInput
  }

  export type WorkFlowRunCreateOrConnectWithoutWorkflowInput = {
    where: WorkFlowRunWhereUniqueInput
    create: XOR<WorkFlowRunCreateWithoutWorkflowInput, WorkFlowRunUncheckedCreateWithoutWorkflowInput>
  }

  export type WorkFlowRunCreateManyWorkflowInputEnvelope = {
    data: WorkFlowRunCreateManyWorkflowInput | WorkFlowRunCreateManyWorkflowInput[]
    skipDuplicates?: boolean
  }

  export type TriggerNodesUpsertWithoutWorkflowInput = {
    update: XOR<TriggerNodesUpdateWithoutWorkflowInput, TriggerNodesUncheckedUpdateWithoutWorkflowInput>
    create: XOR<TriggerNodesCreateWithoutWorkflowInput, TriggerNodesUncheckedCreateWithoutWorkflowInput>
    where?: TriggerNodesWhereInput
  }

  export type TriggerNodesUpdateToOneWithWhereWithoutWorkflowInput = {
    where?: TriggerNodesWhereInput
    data: XOR<TriggerNodesUpdateWithoutWorkflowInput, TriggerNodesUncheckedUpdateWithoutWorkflowInput>
  }

  export type TriggerNodesUpdateWithoutWorkflowInput = {
    id?: StringFieldUpdateOperationsInput | string
    availableTriggerNodes?: AvailableTriggerNodesUpdateOneRequiredWithoutTriggerNodeNestedInput
  }

  export type TriggerNodesUncheckedUpdateWithoutWorkflowInput = {
    id?: StringFieldUpdateOperationsInput | string
    TriggerNodeId?: StringFieldUpdateOperationsInput | string
  }

  export type ActionNodesUpsertWithWhereUniqueWithoutWorkflowInput = {
    where: ActionNodesWhereUniqueInput
    update: XOR<ActionNodesUpdateWithoutWorkflowInput, ActionNodesUncheckedUpdateWithoutWorkflowInput>
    create: XOR<ActionNodesCreateWithoutWorkflowInput, ActionNodesUncheckedCreateWithoutWorkflowInput>
  }

  export type ActionNodesUpdateWithWhereUniqueWithoutWorkflowInput = {
    where: ActionNodesWhereUniqueInput
    data: XOR<ActionNodesUpdateWithoutWorkflowInput, ActionNodesUncheckedUpdateWithoutWorkflowInput>
  }

  export type ActionNodesUpdateManyWithWhereWithoutWorkflowInput = {
    where: ActionNodesScalarWhereInput
    data: XOR<ActionNodesUpdateManyMutationInput, ActionNodesUncheckedUpdateManyWithoutWorkflowInput>
  }

  export type ActionNodesScalarWhereInput = {
    AND?: ActionNodesScalarWhereInput | ActionNodesScalarWhereInput[]
    OR?: ActionNodesScalarWhereInput[]
    NOT?: ActionNodesScalarWhereInput | ActionNodesScalarWhereInput[]
    id?: StringFilter<"ActionNodes"> | string
    workflowId?: StringFilter<"ActionNodes"> | string
    ActionNodeId?: StringFilter<"ActionNodes"> | string
  }

  export type WorkFlowRunUpsertWithWhereUniqueWithoutWorkflowInput = {
    where: WorkFlowRunWhereUniqueInput
    update: XOR<WorkFlowRunUpdateWithoutWorkflowInput, WorkFlowRunUncheckedUpdateWithoutWorkflowInput>
    create: XOR<WorkFlowRunCreateWithoutWorkflowInput, WorkFlowRunUncheckedCreateWithoutWorkflowInput>
  }

  export type WorkFlowRunUpdateWithWhereUniqueWithoutWorkflowInput = {
    where: WorkFlowRunWhereUniqueInput
    data: XOR<WorkFlowRunUpdateWithoutWorkflowInput, WorkFlowRunUncheckedUpdateWithoutWorkflowInput>
  }

  export type WorkFlowRunUpdateManyWithWhereWithoutWorkflowInput = {
    where: WorkFlowRunScalarWhereInput
    data: XOR<WorkFlowRunUpdateManyMutationInput, WorkFlowRunUncheckedUpdateManyWithoutWorkflowInput>
  }

  export type WorkFlowRunScalarWhereInput = {
    AND?: WorkFlowRunScalarWhereInput | WorkFlowRunScalarWhereInput[]
    OR?: WorkFlowRunScalarWhereInput[]
    NOT?: WorkFlowRunScalarWhereInput | WorkFlowRunScalarWhereInput[]
    id?: StringFilter<"WorkFlowRun"> | string
    workflowId?: StringFilter<"WorkFlowRun"> | string
    meta?: JsonFilter<"WorkFlowRun">
  }

  export type WorkFlowCreateWithoutTriggerNodesInput = {
    id?: string
    actionsNodes?: ActionNodesCreateNestedManyWithoutWorkflowInput
    workflowRun?: WorkFlowRunCreateNestedManyWithoutWorkflowInput
  }

  export type WorkFlowUncheckedCreateWithoutTriggerNodesInput = {
    id?: string
    actionsNodes?: ActionNodesUncheckedCreateNestedManyWithoutWorkflowInput
    workflowRun?: WorkFlowRunUncheckedCreateNestedManyWithoutWorkflowInput
  }

  export type WorkFlowCreateOrConnectWithoutTriggerNodesInput = {
    where: WorkFlowWhereUniqueInput
    create: XOR<WorkFlowCreateWithoutTriggerNodesInput, WorkFlowUncheckedCreateWithoutTriggerNodesInput>
  }

  export type AvailableTriggerNodesCreateWithoutTriggerNodeInput = {
    id?: string
    name: string
  }

  export type AvailableTriggerNodesUncheckedCreateWithoutTriggerNodeInput = {
    id?: string
    name: string
  }

  export type AvailableTriggerNodesCreateOrConnectWithoutTriggerNodeInput = {
    where: AvailableTriggerNodesWhereUniqueInput
    create: XOR<AvailableTriggerNodesCreateWithoutTriggerNodeInput, AvailableTriggerNodesUncheckedCreateWithoutTriggerNodeInput>
  }

  export type WorkFlowUpsertWithoutTriggerNodesInput = {
    update: XOR<WorkFlowUpdateWithoutTriggerNodesInput, WorkFlowUncheckedUpdateWithoutTriggerNodesInput>
    create: XOR<WorkFlowCreateWithoutTriggerNodesInput, WorkFlowUncheckedCreateWithoutTriggerNodesInput>
    where?: WorkFlowWhereInput
  }

  export type WorkFlowUpdateToOneWithWhereWithoutTriggerNodesInput = {
    where?: WorkFlowWhereInput
    data: XOR<WorkFlowUpdateWithoutTriggerNodesInput, WorkFlowUncheckedUpdateWithoutTriggerNodesInput>
  }

  export type WorkFlowUpdateWithoutTriggerNodesInput = {
    id?: StringFieldUpdateOperationsInput | string
    actionsNodes?: ActionNodesUpdateManyWithoutWorkflowNestedInput
    workflowRun?: WorkFlowRunUpdateManyWithoutWorkflowNestedInput
  }

  export type WorkFlowUncheckedUpdateWithoutTriggerNodesInput = {
    id?: StringFieldUpdateOperationsInput | string
    actionsNodes?: ActionNodesUncheckedUpdateManyWithoutWorkflowNestedInput
    workflowRun?: WorkFlowRunUncheckedUpdateManyWithoutWorkflowNestedInput
  }

  export type AvailableTriggerNodesUpsertWithoutTriggerNodeInput = {
    update: XOR<AvailableTriggerNodesUpdateWithoutTriggerNodeInput, AvailableTriggerNodesUncheckedUpdateWithoutTriggerNodeInput>
    create: XOR<AvailableTriggerNodesCreateWithoutTriggerNodeInput, AvailableTriggerNodesUncheckedCreateWithoutTriggerNodeInput>
    where?: AvailableTriggerNodesWhereInput
  }

  export type AvailableTriggerNodesUpdateToOneWithWhereWithoutTriggerNodeInput = {
    where?: AvailableTriggerNodesWhereInput
    data: XOR<AvailableTriggerNodesUpdateWithoutTriggerNodeInput, AvailableTriggerNodesUncheckedUpdateWithoutTriggerNodeInput>
  }

  export type AvailableTriggerNodesUpdateWithoutTriggerNodeInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type AvailableTriggerNodesUncheckedUpdateWithoutTriggerNodeInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type TriggerNodesCreateWithoutAvailableTriggerNodesInput = {
    id?: string
    workflow: WorkFlowCreateNestedOneWithoutTriggerNodesInput
  }

  export type TriggerNodesUncheckedCreateWithoutAvailableTriggerNodesInput = {
    id?: string
    workflowId: string
  }

  export type TriggerNodesCreateOrConnectWithoutAvailableTriggerNodesInput = {
    where: TriggerNodesWhereUniqueInput
    create: XOR<TriggerNodesCreateWithoutAvailableTriggerNodesInput, TriggerNodesUncheckedCreateWithoutAvailableTriggerNodesInput>
  }

  export type TriggerNodesCreateManyAvailableTriggerNodesInputEnvelope = {
    data: TriggerNodesCreateManyAvailableTriggerNodesInput | TriggerNodesCreateManyAvailableTriggerNodesInput[]
    skipDuplicates?: boolean
  }

  export type TriggerNodesUpsertWithWhereUniqueWithoutAvailableTriggerNodesInput = {
    where: TriggerNodesWhereUniqueInput
    update: XOR<TriggerNodesUpdateWithoutAvailableTriggerNodesInput, TriggerNodesUncheckedUpdateWithoutAvailableTriggerNodesInput>
    create: XOR<TriggerNodesCreateWithoutAvailableTriggerNodesInput, TriggerNodesUncheckedCreateWithoutAvailableTriggerNodesInput>
  }

  export type TriggerNodesUpdateWithWhereUniqueWithoutAvailableTriggerNodesInput = {
    where: TriggerNodesWhereUniqueInput
    data: XOR<TriggerNodesUpdateWithoutAvailableTriggerNodesInput, TriggerNodesUncheckedUpdateWithoutAvailableTriggerNodesInput>
  }

  export type TriggerNodesUpdateManyWithWhereWithoutAvailableTriggerNodesInput = {
    where: TriggerNodesScalarWhereInput
    data: XOR<TriggerNodesUpdateManyMutationInput, TriggerNodesUncheckedUpdateManyWithoutAvailableTriggerNodesInput>
  }

  export type TriggerNodesScalarWhereInput = {
    AND?: TriggerNodesScalarWhereInput | TriggerNodesScalarWhereInput[]
    OR?: TriggerNodesScalarWhereInput[]
    NOT?: TriggerNodesScalarWhereInput | TriggerNodesScalarWhereInput[]
    id?: StringFilter<"TriggerNodes"> | string
    workflowId?: StringFilter<"TriggerNodes"> | string
    TriggerNodeId?: StringFilter<"TriggerNodes"> | string
  }

  export type WorkFlowCreateWithoutActionsNodesInput = {
    id?: string
    triggerNodes?: TriggerNodesCreateNestedOneWithoutWorkflowInput
    workflowRun?: WorkFlowRunCreateNestedManyWithoutWorkflowInput
  }

  export type WorkFlowUncheckedCreateWithoutActionsNodesInput = {
    id?: string
    triggerNodes?: TriggerNodesUncheckedCreateNestedOneWithoutWorkflowInput
    workflowRun?: WorkFlowRunUncheckedCreateNestedManyWithoutWorkflowInput
  }

  export type WorkFlowCreateOrConnectWithoutActionsNodesInput = {
    where: WorkFlowWhereUniqueInput
    create: XOR<WorkFlowCreateWithoutActionsNodesInput, WorkFlowUncheckedCreateWithoutActionsNodesInput>
  }

  export type AvailableActionNodesCreateWithoutActionNodesInput = {
    id?: string
    name: string
  }

  export type AvailableActionNodesUncheckedCreateWithoutActionNodesInput = {
    id?: string
    name: string
  }

  export type AvailableActionNodesCreateOrConnectWithoutActionNodesInput = {
    where: AvailableActionNodesWhereUniqueInput
    create: XOR<AvailableActionNodesCreateWithoutActionNodesInput, AvailableActionNodesUncheckedCreateWithoutActionNodesInput>
  }

  export type WorkFlowUpsertWithoutActionsNodesInput = {
    update: XOR<WorkFlowUpdateWithoutActionsNodesInput, WorkFlowUncheckedUpdateWithoutActionsNodesInput>
    create: XOR<WorkFlowCreateWithoutActionsNodesInput, WorkFlowUncheckedCreateWithoutActionsNodesInput>
    where?: WorkFlowWhereInput
  }

  export type WorkFlowUpdateToOneWithWhereWithoutActionsNodesInput = {
    where?: WorkFlowWhereInput
    data: XOR<WorkFlowUpdateWithoutActionsNodesInput, WorkFlowUncheckedUpdateWithoutActionsNodesInput>
  }

  export type WorkFlowUpdateWithoutActionsNodesInput = {
    id?: StringFieldUpdateOperationsInput | string
    triggerNodes?: TriggerNodesUpdateOneWithoutWorkflowNestedInput
    workflowRun?: WorkFlowRunUpdateManyWithoutWorkflowNestedInput
  }

  export type WorkFlowUncheckedUpdateWithoutActionsNodesInput = {
    id?: StringFieldUpdateOperationsInput | string
    triggerNodes?: TriggerNodesUncheckedUpdateOneWithoutWorkflowNestedInput
    workflowRun?: WorkFlowRunUncheckedUpdateManyWithoutWorkflowNestedInput
  }

  export type AvailableActionNodesUpsertWithoutActionNodesInput = {
    update: XOR<AvailableActionNodesUpdateWithoutActionNodesInput, AvailableActionNodesUncheckedUpdateWithoutActionNodesInput>
    create: XOR<AvailableActionNodesCreateWithoutActionNodesInput, AvailableActionNodesUncheckedCreateWithoutActionNodesInput>
    where?: AvailableActionNodesWhereInput
  }

  export type AvailableActionNodesUpdateToOneWithWhereWithoutActionNodesInput = {
    where?: AvailableActionNodesWhereInput
    data: XOR<AvailableActionNodesUpdateWithoutActionNodesInput, AvailableActionNodesUncheckedUpdateWithoutActionNodesInput>
  }

  export type AvailableActionNodesUpdateWithoutActionNodesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type AvailableActionNodesUncheckedUpdateWithoutActionNodesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type ActionNodesCreateWithoutAvailableActionNodesInput = {
    id?: string
    workflow: WorkFlowCreateNestedOneWithoutActionsNodesInput
  }

  export type ActionNodesUncheckedCreateWithoutAvailableActionNodesInput = {
    id?: string
    workflowId: string
  }

  export type ActionNodesCreateOrConnectWithoutAvailableActionNodesInput = {
    where: ActionNodesWhereUniqueInput
    create: XOR<ActionNodesCreateWithoutAvailableActionNodesInput, ActionNodesUncheckedCreateWithoutAvailableActionNodesInput>
  }

  export type ActionNodesCreateManyAvailableActionNodesInputEnvelope = {
    data: ActionNodesCreateManyAvailableActionNodesInput | ActionNodesCreateManyAvailableActionNodesInput[]
    skipDuplicates?: boolean
  }

  export type ActionNodesUpsertWithWhereUniqueWithoutAvailableActionNodesInput = {
    where: ActionNodesWhereUniqueInput
    update: XOR<ActionNodesUpdateWithoutAvailableActionNodesInput, ActionNodesUncheckedUpdateWithoutAvailableActionNodesInput>
    create: XOR<ActionNodesCreateWithoutAvailableActionNodesInput, ActionNodesUncheckedCreateWithoutAvailableActionNodesInput>
  }

  export type ActionNodesUpdateWithWhereUniqueWithoutAvailableActionNodesInput = {
    where: ActionNodesWhereUniqueInput
    data: XOR<ActionNodesUpdateWithoutAvailableActionNodesInput, ActionNodesUncheckedUpdateWithoutAvailableActionNodesInput>
  }

  export type ActionNodesUpdateManyWithWhereWithoutAvailableActionNodesInput = {
    where: ActionNodesScalarWhereInput
    data: XOR<ActionNodesUpdateManyMutationInput, ActionNodesUncheckedUpdateManyWithoutAvailableActionNodesInput>
  }

  export type WorkFlowCreateWithoutWorkflowRunInput = {
    id?: string
    triggerNodes?: TriggerNodesCreateNestedOneWithoutWorkflowInput
    actionsNodes?: ActionNodesCreateNestedManyWithoutWorkflowInput
  }

  export type WorkFlowUncheckedCreateWithoutWorkflowRunInput = {
    id?: string
    triggerNodes?: TriggerNodesUncheckedCreateNestedOneWithoutWorkflowInput
    actionsNodes?: ActionNodesUncheckedCreateNestedManyWithoutWorkflowInput
  }

  export type WorkFlowCreateOrConnectWithoutWorkflowRunInput = {
    where: WorkFlowWhereUniqueInput
    create: XOR<WorkFlowCreateWithoutWorkflowRunInput, WorkFlowUncheckedCreateWithoutWorkflowRunInput>
  }

  export type WorkFlowOutBoxCreateWithoutWorkflowOutBoxInput = {
    id?: string
  }

  export type WorkFlowOutBoxUncheckedCreateWithoutWorkflowOutBoxInput = {
    id?: string
  }

  export type WorkFlowOutBoxCreateOrConnectWithoutWorkflowOutBoxInput = {
    where: WorkFlowOutBoxWhereUniqueInput
    create: XOR<WorkFlowOutBoxCreateWithoutWorkflowOutBoxInput, WorkFlowOutBoxUncheckedCreateWithoutWorkflowOutBoxInput>
  }

  export type WorkFlowUpsertWithoutWorkflowRunInput = {
    update: XOR<WorkFlowUpdateWithoutWorkflowRunInput, WorkFlowUncheckedUpdateWithoutWorkflowRunInput>
    create: XOR<WorkFlowCreateWithoutWorkflowRunInput, WorkFlowUncheckedCreateWithoutWorkflowRunInput>
    where?: WorkFlowWhereInput
  }

  export type WorkFlowUpdateToOneWithWhereWithoutWorkflowRunInput = {
    where?: WorkFlowWhereInput
    data: XOR<WorkFlowUpdateWithoutWorkflowRunInput, WorkFlowUncheckedUpdateWithoutWorkflowRunInput>
  }

  export type WorkFlowUpdateWithoutWorkflowRunInput = {
    id?: StringFieldUpdateOperationsInput | string
    triggerNodes?: TriggerNodesUpdateOneWithoutWorkflowNestedInput
    actionsNodes?: ActionNodesUpdateManyWithoutWorkflowNestedInput
  }

  export type WorkFlowUncheckedUpdateWithoutWorkflowRunInput = {
    id?: StringFieldUpdateOperationsInput | string
    triggerNodes?: TriggerNodesUncheckedUpdateOneWithoutWorkflowNestedInput
    actionsNodes?: ActionNodesUncheckedUpdateManyWithoutWorkflowNestedInput
  }

  export type WorkFlowOutBoxUpsertWithoutWorkflowOutBoxInput = {
    update: XOR<WorkFlowOutBoxUpdateWithoutWorkflowOutBoxInput, WorkFlowOutBoxUncheckedUpdateWithoutWorkflowOutBoxInput>
    create: XOR<WorkFlowOutBoxCreateWithoutWorkflowOutBoxInput, WorkFlowOutBoxUncheckedCreateWithoutWorkflowOutBoxInput>
    where?: WorkFlowOutBoxWhereInput
  }

  export type WorkFlowOutBoxUpdateToOneWithWhereWithoutWorkflowOutBoxInput = {
    where?: WorkFlowOutBoxWhereInput
    data: XOR<WorkFlowOutBoxUpdateWithoutWorkflowOutBoxInput, WorkFlowOutBoxUncheckedUpdateWithoutWorkflowOutBoxInput>
  }

  export type WorkFlowOutBoxUpdateWithoutWorkflowOutBoxInput = {
    id?: StringFieldUpdateOperationsInput | string
  }

  export type WorkFlowOutBoxUncheckedUpdateWithoutWorkflowOutBoxInput = {
    id?: StringFieldUpdateOperationsInput | string
  }

  export type WorkFlowRunCreateWithoutOutboxInput = {
    id?: string
    meta: JsonNullValueInput | InputJsonValue
    workflow: WorkFlowCreateNestedOneWithoutWorkflowRunInput
  }

  export type WorkFlowRunUncheckedCreateWithoutOutboxInput = {
    id?: string
    workflowId: string
    meta: JsonNullValueInput | InputJsonValue
  }

  export type WorkFlowRunCreateOrConnectWithoutOutboxInput = {
    where: WorkFlowRunWhereUniqueInput
    create: XOR<WorkFlowRunCreateWithoutOutboxInput, WorkFlowRunUncheckedCreateWithoutOutboxInput>
  }

  export type WorkFlowRunUpsertWithoutOutboxInput = {
    update: XOR<WorkFlowRunUpdateWithoutOutboxInput, WorkFlowRunUncheckedUpdateWithoutOutboxInput>
    create: XOR<WorkFlowRunCreateWithoutOutboxInput, WorkFlowRunUncheckedCreateWithoutOutboxInput>
    where?: WorkFlowRunWhereInput
  }

  export type WorkFlowRunUpdateToOneWithWhereWithoutOutboxInput = {
    where?: WorkFlowRunWhereInput
    data: XOR<WorkFlowRunUpdateWithoutOutboxInput, WorkFlowRunUncheckedUpdateWithoutOutboxInput>
  }

  export type WorkFlowRunUpdateWithoutOutboxInput = {
    id?: StringFieldUpdateOperationsInput | string
    meta?: JsonNullValueInput | InputJsonValue
    workflow?: WorkFlowUpdateOneRequiredWithoutWorkflowRunNestedInput
  }

  export type WorkFlowRunUncheckedUpdateWithoutOutboxInput = {
    id?: StringFieldUpdateOperationsInput | string
    workflowId?: StringFieldUpdateOperationsInput | string
    meta?: JsonNullValueInput | InputJsonValue
  }

  export type SessionCreateManyUserInput = {
    sid: string
    expire?: Date | string
  }

  export type SessionUpdateWithoutUserInput = {
    sid?: StringFieldUpdateOperationsInput | string
    expire?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionUncheckedUpdateWithoutUserInput = {
    sid?: StringFieldUpdateOperationsInput | string
    expire?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionUncheckedUpdateManyWithoutUserInput = {
    sid?: StringFieldUpdateOperationsInput | string
    expire?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ActionNodesCreateManyWorkflowInput = {
    id?: string
    ActionNodeId: string
  }

  export type WorkFlowRunCreateManyWorkflowInput = {
    id?: string
    meta: JsonNullValueInput | InputJsonValue
  }

  export type ActionNodesUpdateWithoutWorkflowInput = {
    id?: StringFieldUpdateOperationsInput | string
    availableActionNodes?: AvailableActionNodesUpdateOneRequiredWithoutActionNodesNestedInput
  }

  export type ActionNodesUncheckedUpdateWithoutWorkflowInput = {
    id?: StringFieldUpdateOperationsInput | string
    ActionNodeId?: StringFieldUpdateOperationsInput | string
  }

  export type ActionNodesUncheckedUpdateManyWithoutWorkflowInput = {
    id?: StringFieldUpdateOperationsInput | string
    ActionNodeId?: StringFieldUpdateOperationsInput | string
  }

  export type WorkFlowRunUpdateWithoutWorkflowInput = {
    id?: StringFieldUpdateOperationsInput | string
    meta?: JsonNullValueInput | InputJsonValue
    outbox?: WorkFlowOutBoxUpdateOneWithoutWorkflowOutBoxNestedInput
  }

  export type WorkFlowRunUncheckedUpdateWithoutWorkflowInput = {
    id?: StringFieldUpdateOperationsInput | string
    meta?: JsonNullValueInput | InputJsonValue
    outbox?: WorkFlowOutBoxUncheckedUpdateOneWithoutWorkflowOutBoxNestedInput
  }

  export type WorkFlowRunUncheckedUpdateManyWithoutWorkflowInput = {
    id?: StringFieldUpdateOperationsInput | string
    meta?: JsonNullValueInput | InputJsonValue
  }

  export type TriggerNodesCreateManyAvailableTriggerNodesInput = {
    id?: string
    workflowId: string
  }

  export type TriggerNodesUpdateWithoutAvailableTriggerNodesInput = {
    id?: StringFieldUpdateOperationsInput | string
    workflow?: WorkFlowUpdateOneRequiredWithoutTriggerNodesNestedInput
  }

  export type TriggerNodesUncheckedUpdateWithoutAvailableTriggerNodesInput = {
    id?: StringFieldUpdateOperationsInput | string
    workflowId?: StringFieldUpdateOperationsInput | string
  }

  export type TriggerNodesUncheckedUpdateManyWithoutAvailableTriggerNodesInput = {
    id?: StringFieldUpdateOperationsInput | string
    workflowId?: StringFieldUpdateOperationsInput | string
  }

  export type ActionNodesCreateManyAvailableActionNodesInput = {
    id?: string
    workflowId: string
  }

  export type ActionNodesUpdateWithoutAvailableActionNodesInput = {
    id?: StringFieldUpdateOperationsInput | string
    workflow?: WorkFlowUpdateOneRequiredWithoutActionsNodesNestedInput
  }

  export type ActionNodesUncheckedUpdateWithoutAvailableActionNodesInput = {
    id?: StringFieldUpdateOperationsInput | string
    workflowId?: StringFieldUpdateOperationsInput | string
  }

  export type ActionNodesUncheckedUpdateManyWithoutAvailableActionNodesInput = {
    id?: StringFieldUpdateOperationsInput | string
    workflowId?: StringFieldUpdateOperationsInput | string
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