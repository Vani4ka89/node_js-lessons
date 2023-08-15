db.createUser(
    {
        user: 'user',
        pwd: 'pass',
        roles:[
            {
                role: 'readWrite',
                db: 'dec-2022'
            }
        ]
    }
)