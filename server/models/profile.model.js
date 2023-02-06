const profileDetail = require('./profile.mongo');

async function updateProfile(profile){
    try{
        await profileDetail.updateOne(profile, profile, { upsert : true});
        return profileDetail.findOne({firstName: profile.firstName}, {_id:0, __v:0});
    }catch(err){
        return { err };
    }
}

async function getProfile(){
    return await profileDetail.findOne({firstName : "Naveen"}, {
        _id:0, __v:0
    });
}

module.exports = {
    updateProfile,
    getProfile
}