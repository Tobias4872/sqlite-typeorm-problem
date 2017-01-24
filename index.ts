import "reflect-metadata";
import { Connection, createConnection } from "typeorm";

createConnection({
    driver: {
        storage: "/tmp/sqlite-typeorm-problem",
        type: "sqlite",
    },
    entities: [
        "./models/*.js",
    ],
    logging: {
        logQueries: true,
    },
}).then(async (c: Connection) => {
    // tslint:disable-next-line
    return c.syncSchema();
}, (error) => {
    // tslint:disable-next-line
    console.log(error);
}).catch((error) => {
    // tslint:disable-next-line
    console.log(error);
});
