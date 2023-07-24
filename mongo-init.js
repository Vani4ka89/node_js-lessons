db.createUser(
    {
        user: 'user',
        pwd: 'user',
        roles:[
            {
                role: 'readWrite',
                db: 'july-2023'
            }
        ]
    }
)