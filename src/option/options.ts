/**
 * @description
 * ISome is a type meant to store data, always used in conjunction with none for operations where the result can be nullable.
 */
interface ISome<T> {
  readonly status: "some";
  data: T;
}

/**
 * @description
 * INone is a type meant to indicate a lack of data, always used in conjunction with some for operations where the result can be nullable.
 */
interface INone {
  readonly status: "none";
}

/**
 * @description
 * TOption is a union type, meant for operation where the result can be nullable.
 * It is exported to allow for defining functions that return option types.
 * @example
 * function findUserByEmail(email: string): TOption<User> {
 * 	// logic
 * }
 */
type TOption<T> = ISome<T> | INone;

/**
 * @description
 * some is a helper function for easily creating some object.
 * @param data - The data to create the some type object with.
 * @example
 * function findUserByEmail(email: string): TOption<User> {
 * 	// logic
 *
 * 	if (user) {
 * 		return option.some(user)
 * 	}
 * }
 */
function some<T>(data: T): ISome<T> {
  return {
    status: "some",
    data,
  };
}

/**
 * @description
 * none is a helper function for easily creating none object.
 * @example
 * function findUserByEmail(email: string): TOption<User> {
 * 	// logic
 *
 * 	if (!user) {
 * 		return option.none()
 * 	}
 * }
 */
function none(): INone {
  return {
    status: "none",
  };
}

/**
 * @description
 * from is a helper function for easily creating option types from the data itself.
 * @param optional - The optional data to create an option type object with.
 * @example
 * function findUserByEmail(email: string): TOption<User> {
 * 	// logic
 *
 * 	return option.from(user)
 * }
 */
function from<T>(optional: T | null | undefined) {
  switch (optional) {
    case null:
    case undefined:
      return none();
    default:
      return some(optional);
  }
}

export { from, none, some, type TOption };
