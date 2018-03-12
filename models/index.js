const Sequelize = require('sequelize');
const db = new Sequelize('postgres://localhost:5432/wikistack', {
    logging : false
});


function generateUrlTitle(string) {
    let newStr = '';
    if(!string) {
        return Math.random().toString(36).substring(2, 7);
    }
    else {
        let newStr = string.replace(/\s/g, '_').replace(/[^a-zA-Z0-9_]/g, "");
        ;
    }
    return newStr
}

console.log(generateUrlTitle(""));

const Page = db.define('page', {
    title:  {
        type: Sequelize.STRING,
        allowNull: false
    },
    urlTitle: {
        type: Sequelize.STRING,
        allowNull: false
    },
    content: {
        type: Sequelize.TEXT,
        allowNull: false
    },
    status: {
        type: Sequelize.ENUM('open', 'closed'),
    },
    date: {
        type:Sequelize.DATE,
        defaultValue: Sequelize.NOW
    }, 
    route: { 
        type: Sequelize.VIRTUAL, 
        get() {
            return '/wiki/' + this.getDataValue('urlTitle'); 
        }
    }
})  

const User = db.define('user', {
    name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    email: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
            isEmail: true
        }
    }
})

module.exports = {
    db: db,
    Page: Page,
    User: User
}

