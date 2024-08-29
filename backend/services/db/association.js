import { 
    User,
    Campaign,
    Donation,
    Follower,
    Category,
    Like,
    Notification
} from '../../models/index.js';

    // Campaign-User Relationships
    User.hasMany(Campaign,{
        foreignKey: 'owner_id',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
    });
    
    Campaign.belongsTo(User,{
        foreignKey: 'owner_id',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
    });
    // End ofCampaign-User Relationships

    // Campaign-Category Relationships
    Category.hasMany(Campaign,{
        foreignKey: 'category_id',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
    })
    Campaign.belongsTo(Category,{
        foreignKey: 'category_id',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
    })

    // Donations Relationships

    User.hasMany(Donation,{
        foreignKey: 'backer_id',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
    });
    // User.hasMany(Donation,{
    //     foreignKey: 'owner_id',
    //     onDelete: 'CASCADE',
    //     onUpdate: 'CASCADE'
    // })
    Donation.belongsTo(User,{
        foreignKey: 'backer_id',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
    })
    // Donation.belongsTo(User,{
    //     foreignKey: 'owner_id',
    //     onDelete: 'CASCADE',
    //     onUpdate: 'CASCADE'
    // })
    // End

    // Campaign-Donation Relationships
    Campaign.hasMany(Donation,{
        foreignKey: 'campaign_id',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
    })
    Donation.belongsTo(Campaign,{
        foreignKey: 'campaign_id',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
    })
    // End
    
    // Follower Relationships

    User.hasMany(Follower,{
        foreignKey: 'leader_id',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
    })
    User.hasMany(Follower,{
        foreignKey: 'follower_id',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
    })

    Follower.belongsTo(User,{
        foreignKey: 'leader_id',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
    })
    Follower.belongsTo(User,{
        foreignKey: 'follower_id',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
    })
    // END

    // START OF LIKE RELATIONSHIPS
    User.hasMany(Like,{
        foreignKey: 'user_id',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
    })
    Like.belongsTo(User,{
        foreignKey: 'user_id',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
    })
    Campaign.hasMany(Like,{
        foreignKey: 'campaign_id',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
    })
    Like.belongsTo(Campaign,{
        foreignKey: 'campaign_id',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
    })
    // END OF LIKE ASSOCIATIONS

    // START OF NOTIFICATION ASSOCIATIONS
    // User.hasMany(Notification,{
    //     foreignKey: 'sender_id',
    //     onDelete: 'CASCADE',
    //     onUpdate: 'CASCADE'
    // })
    // User.hasMany(Notification,{
    //     foreignKey: 'reciever_id',
    //     onDelete: 'CASCADE',
    //     onUpdate: 'CASCADE'
    // })
    // Follower.hasMany(Notification,{
    //     foreignKey: 'entity_id',
    //     onDelete: 'CASCADE',
    //     onUpdate: 'CASCADE'
    // })
    // Like.hasMany(Notification,{
    //     foreignKey: 'entity_id',
    //     onDelete: 'CASCADE',
    //     onUpdate: 'CASCADE'
    // })
    // Donation.hasMany(Notification,{
    //     foreignKey: 'entity_id',
    //     onDelete: 'CASCADE',
    //     onUpdate: 'CASCADE'
    // })
    // Notification.belongsTo(User,{
    //     foreignKey: 'sender_id',
    //     onDelete: 'CASCADE',
    //     onUpdate: 'CASCADE'
    // })
    // Notification.belongsTo(User,{
    //     foreignKey: 'reciever_id',
    //     onDelete: 'CASCADE',
    //     onUpdate: 'CASCADE'
    // })
    // Notification.belongsTo(Follower,{
    //     foreignKey: 'entity_id',
    //     onDelete: 'CASCADE',
    //     onUpdate: 'CASCADE'
    // })
    // Notification.belongsTo(Like,{
    //     foreignKey: 'entity_id',
    //     onDelete: 'CASCADE',
    //     onUpdate: 'CASCADE'
    // })
    // Notification.belongsTo(Donation,{
    //     foreignKey: 'entity_id',
    //     onDelete: 'CASCADE',
    //     onUpdate: 'CASCADE'
    // })

const models = {
    User,
    Follower,
    Campaign,
    Donation,
    Category,
    Like,
    // Notification
}

export default models;
