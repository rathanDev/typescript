"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const App_1 = require("./App");
const port = process.env.PORT || 3000;
App_1.default.listen(port, (err) => {
    if (err) {
        return console.error(err);
    }
    return console.log(`server is listening on port ${port}`);
});
//# sourceMappingURL=index.js.map