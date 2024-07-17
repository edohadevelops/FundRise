import { 
    User,
    Campaign,
    Donation,
    Follower,
    Category
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
    User.hasMany(Donation,{
        foreignKey: 'owner_id',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
    })
    Donation.belongsTo(User,{
        foreignKey: 'backer_id',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
    })
    Donation.belongsTo(User,{
        foreignKey: 'owner_id',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
    })
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

const models = {
    User,
    Follower,
    Campaign,
    Donation,
    Category
}

export default models;
