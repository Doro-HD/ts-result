interface IOk<T> {
  readonly status: "ok";
  data: T;
}

interface IErr<T> {
  readonly status: "err";
  err: T;
}

/**
 * @description
 * TResult defines an object that has an unknown result, until the status is checked.
 * This type is primarily exported to allow for defining functions that return a result.
 * @example
 * function readFile(fileName: string): TResult<File, string> {
 * 	// logic
 * }
 */
type TResult<TOk, TErr> = IOk<TOk> | IErr<TErr>;

/**
 * @description
 * Creates an ok object, used for storing data obtained from operations that can produce an err
 * @param data - The data to store inside of the object
 */
function ok<T>(data: T): IOk<T> {
  return {
    status: "ok",
    data,
  };
}

/**
 * @description
 * Checks if a result is of type Ok
 * @param result - The result to check if it is of type Ok
 * @example
 * if (result.isOk(example)) {
 * 	console.log(example.data)
 * }
 */
function isOk<TOk, TErr>(result: TResult<TOk, TErr>): result is IOk<TOk> {
  return result.status === "ok";
}

/**
 * @description
 * Creates an err object, used for representing that the operation failed
 * @param err - The Error or a message, can be what type you want it to, should tell what went wrong
 */
function err<T>(err: T): IErr<T> {
  return {
    status: "err",
    err,
  };
}

/**
 * @description
 * Checks if a result is of type Err
 * @param result - The result to check if it is of type Err
 * @example
 * if (result.isErr(example)) {
 * 	console.log(example.err)
 * }
 */
function isErr<TOk, TErr>(result: TResult<TOk, TErr>): result is IErr<TErr> {
  return result.status === "err";
}

export { err, isErr, isOk, ok, type TResult };
