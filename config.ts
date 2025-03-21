//FRANK DWEEZEL D. GOMEZ        BSIT-3C

interface DatabaseConfig {
    host: string;
    port: number;
    user: string;
    password: string;
    database: string;
}

const config = {
    database: {
        host: process.env.DB_HOST || "localhost",
        port: parseInt(process.env.DB_PORT || "3306"),
        user: process.env.DB_USER || "root",
        password: process.env.DB_PASSWORD || "Frank@030901",
        database: process.env.DB_NAME || "node-mysql-crud-api"
    }
} as const;

export default config;