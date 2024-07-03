import { 
    User,
    Campaign,
    Donation,
    Follower
} from '../../models/index.js';

export default function associateModels(){
    User.hasMany(Campaign,{
        foreignKey: 'owner_id',
        onDelete: 'CASCADE',
    });

    
    Campaign.belongsTo(User,{
        foreignKey: 'owner_id'
    });

    // Donations Relationships

    User.hasMany(Donation,{
        foreignKey: 'backer_id',
        as: 'DonationReciever'
    });
    User.hasMany(Donation,{
        foreignKey: 'owner_id',
        as: 'Donation'
    })
    Donation.belongsTo(User,{
        foreignKey: 'backer_id',
        as: 'Backer'
    })
    Donation.belongsTo(User,{
        foreignKey: 'owner_id',
        as: 'Owner'
    })
    // End
    
    // Follower Relationships

    User.hasMany(Follower,{
        foreignKey: 'leader_id',
        as: 'Leader'
    })
    User.hasMany(Follower,{
        foreignKey: 'follower_id',
        as: 'Follower'
    })

    Follower.belongsTo(User,{
        foreignKey: 'leader_id',
        as: 'Leader'
    })
    Follower.belongsTo(User,{
        foreignKey: 'follower_id',
        as: 'Follower'
    })
    // END

    // Likes Relationships
    // User.hasMany(Like,{
    //     foreignKey: 'user_id',
    //     as: 'Leader'
    // })

}