export { default as loginRoute } from './auth/login.js';
export { default as registerRoute } from './auth/register.js';
export { default as onBoardingRoute } from './user/onboarding.js'
export {default as initialRoute} from './initialize/getInitialData.js'
export {default as createCampaignRoute} from './campaign/create.js';
export { default as getAllCampaigns } from './campaign/get.js';
export { default as getAllCategories } from './categories/get.js';
export { default as getCampaignById } from './campaign/getById.js';
export { default as makeDonation } from './donation/donate.js';
export { default as paystackHook } from './donation/webhook.js';
export { default as verifyDonation } from './donation/verify.js';
export { default as likeRouter } from './like/like.js';
export { default as getUserByUsernameRouter } from './user/getByUsername.js';
export { default as getAllCampaignsByUsernameRouter } from './campaign/getAllByUsername.js';
export { default as getAllDonationsByUsernameRouter } from './donation/get/getAllByUsername.js';
export { default as getAllDonationsByUseridRouter } from './donation/get/getAllById.js';
export { default as followRouter } from './follow/update.js'
export { default as getNotificationsRouter } from './notification/get.js';
export { default as updateUserRouter } from './user/edit.js';
export { default as getLikedCampaignsRouter } from './campaign/getLiked.js';
export { default as getFollowingCampaignsRouter } from'./campaign/getFollowed.js';