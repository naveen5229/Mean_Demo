const { updateProfile, getProfile } = require('../../models/profile.model');

async function httpGetProfile(req, res){
    return res.status(200).json(await getProfile());
}

async function httpUpdateProfile(req, res){
    const profile = req.body;
    const status = await updateProfile(profile);
    return res.status(200).json(status);
}

module.exports = {
    httpUpdateProfile,
    httpGetProfile
}