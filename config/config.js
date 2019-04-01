module.exports = {
    "development": {
        "username": process.env.DB_USERNAME,
        "password": process.env.DB_PASSWORD,
        "database": "d94of7ch93hm64",
        "host": "ec2-54-225-242-183.compute-1.amazonaws.com",
        "dialect": "postgres"
    },
    "production": {
        "username": process.env.DB_USERNAME,
        "password": process.env.DB_PASSWORD,
        "database": "d94of7ch93hm64",
        "host": "ec2-54-225-242-183.compute-1.amazonaws.com",
        "dialect": "postgres"
    }
}