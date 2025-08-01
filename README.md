# TS Result

Taking inspiration from languages like Rust and Gleam, this package aims to
provide a way to return unknown state objects, in other words. Given a function
that could throw an error, you can use this package to return a result from that
function, no matter if the error was thrown or not.

```typescript
import { result } from '@doro-hd/result';

function connectToDB(// params): TResut<DB, string> {
    try {
        // logic

        return result.ok(db);
    } catch {
        return result.err("Could not connect to db");
    }
}
```

You would then need to handle this unkown state futher down in your application.
The module does contain helper functions for checking the state.

```typescript
import { result } from '@doro-hd/result';

function addUser(// params) {
    const dbResult = connectToDB();

    if (result.isOk(dbResult)) {
        console.log('Ok')
    }

    if (result.isErr(dbResult)) {
        console.log('Err')
    }
}
```
