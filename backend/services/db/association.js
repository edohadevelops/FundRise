import { 
    User,
    Campaign,
    Donation,
    Follower
} from '../../models/index.js';

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
    Donation
}

export default models;
